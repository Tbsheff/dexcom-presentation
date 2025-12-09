import html2canvas from "html2canvas-pro"
import { jsPDF } from "jspdf"

const SLIDE_WIDTH = 1920
const SLIDE_HEIGHT = 1080

interface ExportOptions {
  onProgress?: (current: number, total: number, message: string) => void
  scale?: number
}

// Convert SVG elements to canvas for better html2canvas compatibility
async function convertSvgsToCanvas(doc: Document): Promise<void> {
  const svgs = doc.querySelectorAll("svg")

  for (const svg of Array.from(svgs)) {
    try {
      const rect = svg.getBoundingClientRect()
      if (rect.width === 0 || rect.height === 0) continue

      // Clone SVG and inline all styles
      const clonedSvg = svg.cloneNode(true) as SVGElement
      clonedSvg.setAttribute("width", String(rect.width))
      clonedSvg.setAttribute("height", String(rect.height))

      // Get computed styles and inline them
      const allElements = clonedSvg.querySelectorAll("*")
      allElements.forEach((el) => {
        const originalEl = svg.querySelector(
          el.tagName + (el.className ? "." + String(el.className).split(" ").join(".") : "")
        )
        if (originalEl) {
          const computed = window.getComputedStyle(originalEl as Element)
          if (el instanceof SVGElement || el instanceof HTMLElement) {
            ;(el as SVGElement | HTMLElement).style.cssText = computed.cssText
          }
        }
      })

      // Convert to data URL
      const serializer = new XMLSerializer()
      const svgString = serializer.serializeToString(clonedSvg)
      const svgBlob = new Blob([svgString], { type: "image/svg+xml;charset=utf-8" })
      const url = URL.createObjectURL(svgBlob)

      // Create image from SVG
      const img = new Image()
      img.crossOrigin = "anonymous"

      await new Promise<void>((resolve, reject) => {
        img.onload = () => {
          // Create canvas and draw image
          const canvas = doc.createElement("canvas")
          canvas.width = rect.width * 2 // 2x for retina
          canvas.height = rect.height * 2
          canvas.style.width = `${rect.width}px`
          canvas.style.height = `${rect.height}px`

          const ctx = canvas.getContext("2d")
          if (ctx) {
            ctx.scale(2, 2)
            ctx.drawImage(img, 0, 0, rect.width, rect.height)
          }

          // Replace SVG with canvas
          svg.parentNode?.replaceChild(canvas, svg)
          URL.revokeObjectURL(url)
          resolve()
        }
        img.onerror = () => {
          URL.revokeObjectURL(url)
          resolve() // Don't fail, just skip this SVG
        }
        img.src = url
      })
    } catch (e) {
      console.warn("[Canvas Export] Failed to convert SVG:", e)
    }
  }
}

export async function exportWithCanvas(options: ExportOptions = {}) {
  const { onProgress, scale = 2 } = options

  console.log("[Canvas Export] Starting client-side export...")

  // Dynamic import to get slide counts
  const { presentationSlides, analysisSlides } = await import("@/lib/presentation-data")

  const decks = [
    { path: "/presentation", count: presentationSlides.length, name: "Main" },
    { path: "/analysis", count: analysisSlides.length, name: "Analysis" },
  ]

  const totalSlides = decks.reduce((sum, d) => sum + d.count, 0)

  // Create hidden iframe for rendering
  const iframe = document.createElement("iframe")
  iframe.style.cssText = `
    position: fixed;
    top: -10000px;
    left: -10000px;
    width: ${SLIDE_WIDTH}px;
    height: ${SLIDE_HEIGHT}px;
    border: none;
    visibility: hidden;
  `
  document.body.appendChild(iframe)

  const pdf = new jsPDF({
    orientation: "landscape",
    unit: "px",
    format: [SLIDE_WIDTH, SLIDE_HEIGHT],
    hotfixes: ["px_scaling"],
  })

  let currentSlide = 0
  let isFirstPage = true

  try {
    for (const deck of decks) {
      console.log(`[Canvas Export] Capturing ${deck.name} (${deck.count} slides)...`)

      for (let i = 0; i < deck.count; i++) {
        currentSlide++
        const message = `Capturing ${deck.name} slide ${i + 1}/${deck.count}`
        console.log(`[Canvas Export] ${currentSlide}/${totalSlides}: ${message}`)
        onProgress?.(currentSlide, totalSlides, message)

        // Load slide in iframe
        const url = `${window.location.origin}${deck.path}?slide=${i}&export=true`

        await new Promise<void>((resolve, reject) => {
          const timeout = setTimeout(() => reject(new Error("Iframe load timeout")), 30000)

          iframe.onload = () => {
            clearTimeout(timeout)
            resolve()
          }
          iframe.onerror = () => {
            clearTimeout(timeout)
            reject(new Error("Iframe load failed"))
          }
          iframe.src = url
        })

        // Wait for fonts and rendering
        await iframe.contentWindow?.document.fonts.ready
        await new Promise((r) => setTimeout(r, 800))

        // Trigger resize for Recharts
        iframe.contentWindow?.dispatchEvent(new Event("resize"))
        await new Promise((r) => setTimeout(r, 300))

        // Find the slide container
        const iframeDoc = iframe.contentDocument
        const slideContainer = iframeDoc?.body

        if (!slideContainer || !iframeDoc) {
          console.warn(`[Canvas Export] No content found for slide ${currentSlide}`)
          continue
        }

        // Convert SVGs to canvas for better compatibility
        await convertSvgsToCanvas(iframeDoc)

        // Capture with html2canvas
        const canvas = await html2canvas(slideContainer, {
          width: SLIDE_WIDTH,
          height: SLIDE_HEIGHT,
          scale,
          useCORS: true,
          allowTaint: false,
          backgroundColor: "#000000",
          logging: false,
          windowWidth: SLIDE_WIDTH,
          windowHeight: SLIDE_HEIGHT,
          onclone: (clonedDoc) => {
            // Disable animations in cloned document
            const style = clonedDoc.createElement("style")
            style.textContent = `
              *, *::before, *::after {
                animation: none !important;
                transition: none !important;
              }
            `
            clonedDoc.head.appendChild(style)
          },
        })

        // Add page to PDF
        if (!isFirstPage) {
          pdf.addPage([SLIDE_WIDTH, SLIDE_HEIGHT], "landscape")
        }
        isFirstPage = false

        const imgData = canvas.toDataURL("image/jpeg", 0.92)
        pdf.addImage(imgData, "JPEG", 0, 0, SLIDE_WIDTH, SLIDE_HEIGHT)

        // Free memory
        canvas.width = 0
        canvas.height = 0
      }
    }

    console.log("[Canvas Export] Saving PDF...")
    onProgress?.(totalSlides, totalSlides, "Saving PDF...")

    pdf.save("dexcom-presentation-canvas.pdf")

    console.log("[Canvas Export] Done!")
  } finally {
    document.body.removeChild(iframe)
  }
}
