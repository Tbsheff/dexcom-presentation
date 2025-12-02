"use client"

import { useState, useEffect } from "react"
import { presentationSlides } from "@/lib/presentation-data"
import { PresentationNav } from "@/components/presentation-nav"
import { RunningAgenda } from "@/components/running-agenda"
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

  // Allow URL param to set slide (for PDF export)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const slideParam = params.get("slide")
    if (slideParam) {
      const slideIndex = parseInt(slideParam, 10)
      if (!isNaN(slideIndex) && slideIndex >= 0 && slideIndex < presentationSlides.length) {
        setCurrentSlide(slideIndex)
      }
    }
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

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") nextSlide()
      if (e.key === "ArrowLeft") prevSlide()
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [currentSlide])

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

  return (
    <div className="h-screen w-screen bg-background overflow-hidden relative flex flex-col">
      {/* Dexcom Logo - hide on first slide */}
      {currentSlide > 1 && (
        <img
          src="/images/dexcom-logo.png"
          alt="Dexcom"
          className="absolute -top-8 left-3 h-32 z-50"
        />
      )}
      {showAgenda && <RunningAgenda currentSlide={currentSlide} goToSlide={goToSlide} sections={presentationSections} />}
      <main
        className={`flex-1 min-h-0 transition-opacity duration-150 ${isTransitioning ? "opacity-0" : "opacity-100"}`}
        key={currentSlide}
      >
        {renderSlide()}
      </main>

      <PresentationNav
        currentSlide={currentSlide}
        totalSlides={presentationSlides.length}
        slides={presentationSlides}
        goToSlide={goToSlide}
        nextSlide={nextSlide}
        prevSlide={prevSlide}
      />
    </div>
  )
}
