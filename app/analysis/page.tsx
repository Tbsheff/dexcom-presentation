"use client"

import { useState, useEffect } from "react"
import { analysisSlides } from "@/lib/presentation-data"
import { PresentationNav } from "@/components/presentation-nav"
import { RunningAgenda } from "@/components/running-agenda"
import {
  AnalysisSectionDivider,
  ProfitabilityAnalysisSlide,
  OperatingEfficiencyAnalysisSlide,
  FinancialRiskAnalysisSlide,
  FinancialTrendsAnalysisSlide,
  ExpenseAnalysisSlide,
  RevenueSourcesAnalysisSlide,
  IndustryDefinitionIntroSlide,
  IndustryDefinitionFramework1Slide,
  IndustryDefinitionFramework2Slide,
  VrioValueSlide,
  VrioRaritySlide,
  VrioInimitableSlide,
  VrioOrganizedSlide,
  KeyCompetitorsOverviewSlide,
  StrategicGroupMapVisualSlide,
  StrategicGroupMapPositioningSlide,
  StrategicGroupMapDataSlide,
  FinancialComparisonRevenueSlide,
  FinancialComparisonMarginsSlide,
  FiveForcesRivalrySlide,
  FiveForcesSupplierSlide,
  FiveForcesBuyerSlide,
  FiveForcesSubstitutionSlide,
  FiveForcesNewEntrySlide,
  FiveForcesInsightsSlide,
  EpicPestAnalysisSlide,
  MarketSummarySlide,
} from "@/components/slides"

const analysisSections = [
  { id: "analysis-01", label: "Company", startSlide: 0, endSlide: 6 },
  { id: "analysis-02", label: "Industry", startSlide: 7, endSlide: 28 },
  { id: "analysis-03", label: "Core", startSlide: 29, endSlide: 33 },
  { id: "analysis-04", label: "Issues", startSlide: 34, endSlide: 36 },
  { id: "analysis-05", label: "Recommendations", startSlide: 37, endSlide: 40 },
]

export default function AnalysisDeck() {
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

  const nextSlide = () => goToSlide(Math.min(currentSlide + 1, analysisSlides.length - 1))
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
    const slide = analysisSlides[currentSlide]

    switch (slide.id) {
      // Section 01: Company Overview
      case "analysis-divider-01":
        return <AnalysisSectionDivider sectionNumber="01" title="Company Overview Analysis" />
      case "profitability-analysis":
        return <ProfitabilityAnalysisSlide />
      case "operating-efficiency-analysis":
        return <OperatingEfficiencyAnalysisSlide />
      case "financial-risk-analysis":
        return <FinancialRiskAnalysisSlide />
      case "financial-trends-analysis":
        return <FinancialTrendsAnalysisSlide />
      case "expense-analysis":
        return <ExpenseAnalysisSlide />
      case "revenue-sources-analysis":
        return <RevenueSourcesAnalysisSlide />
      // Section 02: Industry Analysis
      case "analysis-divider-02":
        return <AnalysisSectionDivider sectionNumber="02" title="Industry Analysis" />
      case "industry-definition-intro":
        return <IndustryDefinitionIntroSlide />
      case "industry-definition-framework-1":
        return <IndustryDefinitionFramework1Slide />
      case "industry-definition-framework-2":
        return <IndustryDefinitionFramework2Slide />
      case "vrio-value":
        return <VrioValueSlide />
      case "vrio-rarity":
        return <VrioRaritySlide />
      case "vrio-inimitable":
        return <VrioInimitableSlide />
      case "vrio-organized":
        return <VrioOrganizedSlide />
      case "key-competitors-overview":
        return <KeyCompetitorsOverviewSlide />
      case "strategic-group-map-visual":
        return <StrategicGroupMapVisualSlide />
      case "strategic-group-map-positioning":
        return <StrategicGroupMapPositioningSlide />
      case "strategic-group-map-data":
        return <StrategicGroupMapDataSlide />
      case "financial-comparison-revenue":
        return <FinancialComparisonRevenueSlide />
      case "financial-comparison-margins":
        return <FinancialComparisonMarginsSlide />
      case "five-forces-rivalry":
        return <FiveForcesRivalrySlide />
      case "five-forces-supplier":
        return <FiveForcesSupplierSlide />
      case "five-forces-buyer":
        return <FiveForcesBuyerSlide />
      case "five-forces-substitution":
        return <FiveForcesSubstitutionSlide />
      case "five-forces-new-entry":
        return <FiveForcesNewEntrySlide />
      case "five-forces-insights":
        return <FiveForcesInsightsSlide />
      case "epic-pest-analysis":
        return <EpicPestAnalysisSlide />
      case "market-summary":
        return <MarketSummarySlide />
      // Section 03-05: Placeholder for future slides
      case "analysis-divider-03":
        return <AnalysisSectionDivider sectionNumber="03" title="Core Competencies Analysis" />
      case "analysis-divider-04":
        return <AnalysisSectionDivider sectionNumber="04" title="Strategic Issues Analysis" />
      case "analysis-divider-05":
        return <AnalysisSectionDivider sectionNumber="05" title="Recommendations Analysis" />
      default:
        return <div className="flex items-center justify-center h-full text-muted-foreground">Slide: {slide.id}</div>
    }
  }

  return (
    <div className="h-screen w-screen bg-background overflow-hidden relative flex flex-col">
      <RunningAgenda currentSlide={currentSlide} goToSlide={goToSlide} sections={analysisSections} />
      <main
        className={`flex-1 min-h-0 transition-opacity duration-150 ${isTransitioning ? "opacity-0" : "opacity-100"}`}
        key={currentSlide}
      >
        {renderSlide()}
      </main>

      <PresentationNav
        currentSlide={currentSlide}
        totalSlides={analysisSlides.length}
        slides={analysisSlides}
        goToSlide={goToSlide}
        nextSlide={nextSlide}
        prevSlide={prevSlide}
      />
    </div>
  )
}
