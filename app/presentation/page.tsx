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
  CompanySlide,
  MissionSlide,
  FinancialsSlide,
  RevenueComparisonSlide,
  GrowthComparisonSlide,
  IndustrySlide,
  CompetitorsSlide,
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
  { id: "company", label: "Company Overview", startSlide: 2, endSlide: 5 },
  { id: "market", label: "Market", startSlide: 6, endSlide: 13 },
  { id: "value", label: "Unique Value", startSlide: 14, endSlide: 16 },
  { id: "resources", label: "Resources & Capabilities", startSlide: 17, endSlide: 18 },
  { id: "barriers", label: "Imitation Barriers", startSlide: 19, endSlide: 20 },
  { id: "recommendations", label: "Recommendations", startSlide: 21, endSlide: 22 },
]

export default function PresentationDeck() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

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
      case "company":
        return <CompanySlide />
      case "mission":
        return <MissionSlide />
      case "financials":
        return <FinancialsSlide />
      case "revenue-comparison":
        return <RevenueComparisonSlide />
      case "growth-comparison":
        return <GrowthComparisonSlide />
      case "industry":
        return <IndustrySlide />
      case "competitors":
        return <CompetitorsSlide />
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
