"use client"

import { useState, useEffect, useLayoutEffect, useCallback } from "react"
import { presentationSlides } from "@/lib/presentation-data"
import { PresentationNav } from "@/components/presentation-nav"
import { RunningAgenda } from "@/components/running-agenda"
import { ExportProvider } from "@/lib/export-context"
import { Maximize2, X } from "lucide-react"
import {
  TitleSlide,
  AgendaSlide,
  DiabetesSlide,
  CgmSlide,
  HowCgmWorksSlide,
  CompanySlide,
  MissionSlide,
  FinancialsSlide,
  KeyCompetitorsSlide,
  RevenueComparisonSlide,
  GrowthComparisonSlide,
  IndustrySlide,
  StrategicMapSlide,
  FiveForcesSlide,
  PestSlide,
  ConsumerWantsSlide,
  DifferentiationSlide,
  WhyDexcomSlide,
  ResourcesSlide,
  CapabilitiesSlide,
  ImitationSlide,
  SwotSlide,
  Issue1Slide,
  Issue2Slide,
  ThanksSlide,
} from "@/components/slides"

const presentationSections = [
  { id: "company", label: "Company Overview", startSlide: 2, endSlide: 6 },
  { id: "market", label: "Market", startSlide: 7, endSlide: 14 },
  { id: "value", label: "Unique Value", startSlide: 15, endSlide: 17 },
  { id: "resources", label: "Resources & Capabilities", startSlide: 18, endSlide: 19 },
  { id: "barriers", label: "Imitation Barriers", startSlide: 20, endSlide: 21 },
  { id: "recommendations", label: "Recommendations", startSlide: 22, endSlide: 23 },
]

export default function PresentationDeck() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [isExportMode, setIsExportMode] = useState(false)
  const [isReady, setIsReady] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)

  // Read URL params before first paint using useLayoutEffect
  useLayoutEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const slideParam = params.get("slide")
    const exportParam = params.get("export")
    if (slideParam) {
      const slideIndex = parseInt(slideParam, 10)
      if (!isNaN(slideIndex) && slideIndex >= 0 && slideIndex < presentationSlides.length) {
        setCurrentSlide(slideIndex)
      }
    }
    if (exportParam === "true") {
      setIsExportMode(true)
    }
    setIsReady(true)
    // Signal to Puppeteer that React is ready
    ;(window as any).__EXPORT_READY__ = true
  }, [])

  // Expose goToSlide for iframe access (PDF export)
  useEffect(() => {
    (window as any).__goToSlide = (index: number) => {
      if (index >= 0 && index < presentationSlides.length) {
        setCurrentSlide(index)
      }
    }
    return () => {
      delete (window as any).__goToSlide
    }
  }, [])

  const goToSlide = (index: number) => {
    if (index === currentSlide || isTransitioning) return
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentSlide(index)
      setIsTransitioning(false)
    }, 150)
  }

  const nextSlide = () => goToSlide(Math.min(currentSlide + 1, presentationSlides.length - 1))
  const prevSlide = () => goToSlide(Math.max(currentSlide - 1, 0))

  // Fullscreen API handlers
  const enterFullscreen = useCallback(async () => {
    try {
      await document.documentElement.requestFullscreen()
      setIsFullscreen(true)
    } catch (err) {
      console.error("Fullscreen request failed:", err)
    }
  }, [])

  const exitFullscreen = useCallback(async () => {
    try {
      if (document.fullscreenElement) {
        await document.exitFullscreen()
      }
      setIsFullscreen(false)
    } catch (err) {
      console.error("Exit fullscreen failed:", err)
    }
  }, [])

  const toggleFullscreen = useCallback(() => {
    if (isFullscreen) {
      exitFullscreen()
    } else {
      enterFullscreen()
    }
  }, [isFullscreen, enterFullscreen, exitFullscreen])

  // Sync state with browser fullscreen changes (e.g., user presses Escape)
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement)
    }
    document.addEventListener("fullscreenchange", handleFullscreenChange)
    return () => document.removeEventListener("fullscreenchange", handleFullscreenChange)
  }, [])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault()
        nextSlide()
      }
      if (e.key === "ArrowLeft") {
        e.preventDefault()
        prevSlide()
      }
      if (e.key === "f" || e.key === "F") {
        e.preventDefault()
        toggleFullscreen()
      }
      if (e.key === "Escape" && isFullscreen) {
        // Browser handles Escape for fullscreen, but we sync state
        setIsFullscreen(false)
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [currentSlide, isFullscreen, toggleFullscreen])

  const renderSlide = () => {
    const slide = presentationSlides[currentSlide]

    switch (slide.id) {
      case "title":
        return <TitleSlide />
      case "agenda":
        return <AgendaSlide goToSlide={goToSlide} />
      case "diabetes":
        return <DiabetesSlide />
      case "cgm":
        return <CgmSlide />
      case "how-cgm-works":
        return <HowCgmWorksSlide />
      case "company":
        return <CompanySlide />
      case "mission":
        return <MissionSlide />
      case "financials":
        return <FinancialsSlide />
      case "key-competitors":
        return <KeyCompetitorsSlide />
      case "revenue-comparison":
        return <RevenueComparisonSlide />
      case "growth-comparison":
        return <GrowthComparisonSlide />
      case "industry":
        return <IndustrySlide />
      case "strategic-map":
        return <StrategicMapSlide />
      case "five-forces":
        return <FiveForcesSlide />
      case "pest":
        return <PestSlide />
      case "consumer-wants":
        return <ConsumerWantsSlide />
      case "differentiation":
        return <DifferentiationSlide />
      case "why-dexcom":
        return <WhyDexcomSlide />
      case "resources":
        return <ResourcesSlide />
      case "capabilities":
        return <CapabilitiesSlide />
      case "imitation":
        return <ImitationSlide />
      case "swot":
        return <SwotSlide />
      case "issue1":
        return <Issue1Slide />
      case "issue2":
        return <Issue2Slide />
      case "thanks":
        return <ThanksSlide />
      default:
        return null
    }
  }

  const showAgenda = currentSlide > 1 && currentSlide < presentationSlides.length - 1

  // Don't render until URL params are read - prevents charts from animating
  if (!isReady) {
    return <div className="h-screen w-screen bg-background" />
  }

  return (
    <ExportProvider isExport={isExportMode}>
      <div className="h-screen w-screen bg-background overflow-hidden relative flex flex-col">
        {/* Dexcom Logo - hide on first slide */}
        {currentSlide > 1 && !isExportMode && (
          <img
            src="/images/dexcom-logo.png"
            alt="Dexcom"
            className="absolute -top-8 left-3 h-32 z-50"
          />
        )}
        {showAgenda && !isExportMode && (
          <RunningAgenda currentSlide={currentSlide} goToSlide={goToSlide} sections={presentationSections} />
        )}
        <main
          className={`flex-1 min-h-0 transition-opacity duration-150 ${isTransitioning ? "opacity-0" : "opacity-100"}`}
          key={currentSlide}
        >
          {renderSlide()}
        </main>

        {!isExportMode && !isFullscreen && (
          <PresentationNav
            currentSlide={currentSlide}
            totalSlides={presentationSlides.length}
            slides={presentationSlides}
            goToSlide={goToSlide}
            nextSlide={nextSlide}
            prevSlide={prevSlide}
          />
        )}

        {/* Fullscreen toggle button */}
        {!isExportMode && (
          <button
            onClick={toggleFullscreen}
            className={`fixed z-50 p-2 rounded-lg transition-all ${
              isFullscreen
                ? "bottom-4 right-4 bg-black/50 hover:bg-black/70 text-white opacity-0 hover:opacity-100"
                : "bottom-20 right-4 bg-secondary/50 hover:bg-secondary"
            }`}
            title={isFullscreen ? "Exit fullscreen (F or Esc)" : "Enter fullscreen (F)"}
          >
            {isFullscreen ? <X className="w-5 h-5" /> : <Maximize2 className="w-5 h-5" />}
          </button>
        )}

        {/* Fullscreen slide counter - subtle overlay */}
        {isFullscreen && (
          <div className="fixed bottom-4 left-4 text-white/30 text-sm font-mono opacity-0 hover:opacity-100 transition-opacity">
            {currentSlide + 1} / {presentationSlides.length}
          </div>
        )}
      </div>
    </ExportProvider>
  )
}
