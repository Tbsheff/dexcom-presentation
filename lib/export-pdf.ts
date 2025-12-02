import html2canvas from "html2canvas-pro"
import { jsPDF } from "jspdf"
import { PDFDocument } from "pdf-lib"

// Reduced resolution for memory efficiency (still good for slides)
const SLIDE_WIDTH = 1280
const SLIDE_HEIGHT = 720
const BATCH_SIZE = 25

// CSS to disable animations and hide nav for export
const EXPORT_CSS = `
  *, *::before, *::after {
    animation: none !important;
    transition: none !important;
  }
  .animate-fade-up, .animate-fade-in, [class*="animate-"] {
    opacity: 1 !important;
    transform: none !important;
  }
  .stagger-1, .stagger-2, .stagger-3, .stagger-4, .stagger-5 {
    animation-delay: 0s !important;
  }
  /* Hide navigation bar during export */
  .fixed.bottom-0 {
    display: none !important;
  }
`

export async function exportToPdf(onProgress?: (current: number, total: number) => void) {
  console.log("[PDF Export] Starting chunked export...")

  // Load the actual presentation in an iframe
  // IMPORTANT: Use opacity:0 instead of left:-9999px so ResponsiveContainer can measure dimensions
  const iframe = document.createElement("iframe")
  iframe.style.position = "fixed"
  iframe.style.top = "0"
  iframe.style.left = "0"
  iframe.style.width = `${SLIDE_WIDTH}px`
  iframe.style.height = `${SLIDE_HEIGHT}px`
  iframe.style.opacity = "0"
  iframe.style.pointerEvents = "none"
  iframe.style.zIndex = "-1"
  iframe.src = "/presentation"
  document.body.appendChild(iframe)

  try {
    // Wait for iframe to load
    await new Promise<void>((resolve, reject) => {
      const timeout = setTimeout(() => reject(new Error("Iframe load timeout")), 30000)
      iframe.onload = () => {
        clearTimeout(timeout)
        resolve()
      }
      iframe.onerror = () => {
        clearTimeout(timeout)
        reject(new Error("Iframe failed to load"))
      }
    })

    const iframeWindow = iframe.contentWindow
    const iframeDoc = iframe.contentDocument || iframeWindow?.document
    if (!iframeDoc || !iframeWindow) {
      throw new Error("Could not access iframe")
    }

    // Inject CSS to disable animations and hide nav
    const style = iframeDoc.createElement("style")
    style.textContent = EXPORT_CSS
    iframeDoc.head.appendChild(style)

    // Wait for initial render
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Get total slide count
    const { presentationSlides } = await import("@/lib/presentation-data")
    const totalSlides = presentationSlides.length
    console.log(`[PDF Export] Total slides: ${totalSlides}, processing in batches of ${BATCH_SIZE}`)

    // Process slides in batches and collect PDF bytes
    const pdfBatches: Uint8Array[] = []
    const numBatches = Math.ceil(totalSlides / BATCH_SIZE)

    for (let batchIdx = 0; batchIdx < numBatches; batchIdx++) {
      const startSlide = batchIdx * BATCH_SIZE
      const endSlide = Math.min(startSlide + BATCH_SIZE, totalSlides)
      console.log(`[PDF Export] Processing batch ${batchIdx + 1}/${numBatches} (slides ${startSlide + 1}-${endSlide})`)

      // Create PDF for this batch
      const batchPdf = new jsPDF({
        orientation: "landscape",
        unit: "px",
        format: [SLIDE_WIDTH, SLIDE_HEIGHT],
        hotfixes: ["px_scaling"],
      })

      for (let i = startSlide; i < endSlide; i++) {
        if (onProgress) {
          onProgress(i + 1, totalSlides)
        }

        // Navigate to slide
        const goToSlide = (iframeWindow as any).__goToSlide
        if (goToSlide) {
          goToSlide(i)
        }

        // Wait for slide to render
        await new Promise((resolve) => setTimeout(resolve, 300))

        // Wait for images to load
        const images = iframeDoc.querySelectorAll("img")
        await Promise.all(
          Array.from(images).map(
            (img) =>
              new Promise((resolve) => {
                if (img.complete) resolve(null)
                else {
                  img.onload = () => resolve(null)
                  img.onerror = () => resolve(null)
                }
              })
          )
        )

        // Capture slide
        const slideContainer = iframeDoc.querySelector(".h-screen.w-screen") as HTMLElement
        if (!slideContainer) {
          throw new Error("Could not find slide container")
        }

        const canvas = await html2canvas(slideContainer, {
          scale: 1,
          useCORS: true,
          allowTaint: true,
          backgroundColor: "#ffffff",
          width: SLIDE_WIDTH,
          height: SLIDE_HEIGHT,
          logging: false,
        })

        // Use blob for memory efficiency
        const blob = await new Promise<Blob>((resolve, reject) => {
          canvas.toBlob(
            (b) => (b ? resolve(b) : reject(new Error("Failed to create blob"))),
            "image/jpeg",
            0.6
          )
        })

        const imgData = await new Promise<string>((resolve, reject) => {
          const reader = new FileReader()
          reader.onloadend = () => resolve(reader.result as string)
          reader.onerror = reject
          reader.readAsDataURL(blob)
        })

        if (i > startSlide) {
          batchPdf.addPage([SLIDE_WIDTH, SLIDE_HEIGHT], "landscape")
        }

        batchPdf.addImage(imgData, "JPEG", 0, 0, SLIDE_WIDTH, SLIDE_HEIGHT)
        console.log(`[PDF Export] Slide ${i + 1}/${totalSlides} captured`)
      }

      // Get batch PDF as bytes and store
      const batchBytes = batchPdf.output("arraybuffer")
      pdfBatches.push(new Uint8Array(batchBytes))
      console.log(`[PDF Export] Batch ${batchIdx + 1} complete (${batchBytes.byteLength} bytes)`)
    }

    // Merge all batches using pdf-lib
    console.log("[PDF Export] Merging batches...")
    const mergedPdf = await PDFDocument.create()

    for (const batchBytes of pdfBatches) {
      const batchDoc = await PDFDocument.load(batchBytes)
      const pages = await mergedPdf.copyPages(batchDoc, batchDoc.getPageIndices())
      pages.forEach((page) => mergedPdf.addPage(page))
    }

    const finalPdfBytes = await mergedPdf.save()
    console.log(`[PDF Export] Final PDF: ${finalPdfBytes.byteLength} bytes`)

    // Download
    const blob = new Blob([finalPdfBytes], { type: "application/pdf" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "dexcom-presentation.pdf"
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)

    console.log("[PDF Export] Done!")
  } catch (error) {
    console.error("[PDF Export] Export failed:", error)
    throw error
  } finally {
    if (document.body.contains(iframe)) {
      document.body.removeChild(iframe)
    }
  }
}
