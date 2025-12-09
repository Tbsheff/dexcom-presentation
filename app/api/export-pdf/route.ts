import { NextRequest, NextResponse } from "next/server"
import puppeteer, { Page, Browser } from "puppeteer"
import { PDFDocument } from "pdf-lib"

const SLIDE_WIDTH = 1920
const SLIDE_HEIGHT = 1080
const CONCURRENCY = 5 // Number of parallel pages

// Timing constants (original reliable values)
const INITIAL_RENDER_WAIT = 500
const ANIMATION_WAIT = 800
const SVG_TIMEOUT = 5000

interface SlideTask {
  globalIndex: number
  deckPath: string
  slideIndex: number
  deckName: string
}

interface CapturedSlide {
  globalIndex: number
  buffer: Buffer
}

// Capture a single slide
async function captureSlide(page: Page, baseUrl: string, task: SlideTask): Promise<CapturedSlide> {
  const url = `${baseUrl}${task.deckPath}?slide=${task.slideIndex}&export=true`

  // networkidle0 waits until no network requests for 500ms - ensures fonts, images, CSS loaded
  await page.goto(url, { waitUntil: "networkidle0", timeout: 30000 })

  // Wait for React to signal it's ready with correct export mode
  await page.waitForFunction(() => (window as any).__EXPORT_READY__ === true, { timeout: 10000 })

  // Hide Next.js dev badge
  await page.addStyleTag({
    content: `
      [data-nextjs-dialog-overlay],
      [data-nextjs-toast],
      nextjs-portal,
      #__next-build-indicator,
      [data-nextjs-dev-overlay] {
        display: none !important;
      }
    `,
  })

  // Wait for React to render and fonts to load
  await page.waitForFunction(() => document.readyState === "complete")
  await page.evaluate(() => document.fonts.ready)

  // Trigger resize for Recharts ResponsiveContainer
  await page.evaluate(() => {
    window.dispatchEvent(new Event("resize"))
  })

  // Initial render wait
  await new Promise((resolve) => setTimeout(resolve, INITIAL_RENDER_WAIT))

  // Wait for SVG elements (charts) - with reduced timeout since animations are disabled
  await page
    .waitForFunction(
      () => {
        const svgs = document.querySelectorAll(".recharts-wrapper svg")
        if (svgs.length === 0) return true

        const mainChartSvgs = Array.from(svgs).filter(
          (svg) => svg.clientWidth > 100 && svg.clientHeight > 100
        )

        if (mainChartSvgs.length === 0) return false

        for (const svg of mainChartSvgs) {
          const paths = svg.querySelectorAll("path, rect, line, circle")
          if (paths.length < 2) return false
        }
        return true
      },
      { timeout: SVG_TIMEOUT }
    )
    .catch(() => {
      // Timeout ok - some slides don't have charts
    })

  // Brief wait for paint settling
  await new Promise((resolve) => setTimeout(resolve, ANIMATION_WAIT))

  const screenshot = await page.screenshot({
    type: "png",
    clip: { x: 0, y: 0, width: SLIDE_WIDTH, height: SLIDE_HEIGHT },
  })

  return {
    globalIndex: task.globalIndex,
    buffer: screenshot as Buffer,
  }
}

export async function POST(req: NextRequest) {
  const { baseUrl } = await req.json()

  console.log("[PDF Export] Starting optimized parallel export...")
  const startTime = Date.now()

  const browser: Browser = await puppeteer.launch({
    headless: true,
    args: [
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--disable-dev-shm-usage",
      "--hide-scrollbars",
    ],
  })

  try {
    // Create page pool
    const pages: Page[] = await Promise.all(
      Array(CONCURRENCY)
        .fill(null)
        .map(async () => {
          const page = await browser.newPage()
          await page.setViewport({
            width: SLIDE_WIDTH,
            height: SLIDE_HEIGHT,
            deviceScaleFactor: 2,
          })
          return page
        })
    )

    console.log(`[PDF Export] Created ${CONCURRENCY} parallel pages (reliable timing)`)

    // Import slide data
    const { presentationSlides, analysisSlides } = await import("@/lib/presentation-data")

    const decks = [
      { path: "/presentation", count: presentationSlides.length, name: "Main" },
      { path: "/analysis", count: analysisSlides.length, name: "Analysis" },
    ]

    // Build task queue with global indices
    const tasks: SlideTask[] = []
    let globalIndex = 0

    for (const deck of decks) {
      for (let i = 0; i < deck.count; i++) {
        tasks.push({
          globalIndex: globalIndex++,
          deckPath: deck.path,
          slideIndex: i,
          deckName: deck.name,
        })
      }
    }

    const totalSlides = tasks.length
    console.log(`[PDF Export] Capturing ${totalSlides} slides with ${CONCURRENCY}x parallelism...`)

    // Capture slides in parallel batches
    const capturedSlides: CapturedSlide[] = []
    let completed = 0

    // Process in batches of CONCURRENCY
    for (let i = 0; i < tasks.length; i += CONCURRENCY) {
      const batch = tasks.slice(i, i + CONCURRENCY)

      const batchResults = await Promise.all(
        batch.map((task, idx) => {
          const page = pages[idx % pages.length]
          return captureSlide(page, baseUrl, task)
        })
      )

      capturedSlides.push(...batchResults)
      completed += batch.length
      console.log(`[PDF Export] Progress: ${completed}/${totalSlides} (${Math.round((completed / totalSlides) * 100)}%)`)
    }

    // Sort by global index to ensure correct order
    capturedSlides.sort((a, b) => a.globalIndex - b.globalIndex)

    // Assemble PDF
    console.log("[PDF Export] Assembling PDF...")
    const pdfDoc = await PDFDocument.create()

    for (const slide of capturedSlides) {
      const img = await pdfDoc.embedPng(slide.buffer)
      const pdfPage = pdfDoc.addPage([SLIDE_WIDTH, SLIDE_HEIGHT])
      pdfPage.drawImage(img, { x: 0, y: 0, width: SLIDE_WIDTH, height: SLIDE_HEIGHT })
    }

    const pdfBytes = await pdfDoc.save()

    const elapsed = ((Date.now() - startTime) / 1000).toFixed(1)
    console.log(`[PDF Export] Done! ${totalSlides} pages in ${elapsed}s (${(totalSlides / parseFloat(elapsed)).toFixed(1)} slides/sec)`)

    return new NextResponse(pdfBytes, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'attachment; filename="dexcom-presentation.pdf"',
      },
    })
  } catch (error) {
    console.error("[PDF Export] Error:", error)
    return NextResponse.json({ error: "Export failed" }, { status: 500 })
  } finally {
    await browser.close()
  }
}
