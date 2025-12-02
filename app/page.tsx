"use client"

import { useState, useEffect } from "react"
import { slides } from "@/lib/presentation-data"
import { PresentationNav } from "@/components/presentation-nav"
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
  AnalysisSectionDivider,
  ProfitabilityAnalysisSlide,
  OperatingEfficiencyAnalysisSlide,
  FinancialRiskAnalysisSlide,
  FinancialTrendsAnalysisSlide,
  ExpenseAnalysisSlide,
  RevenueSourcesAnalysisSlide,
  // Section 02: Industry Analysis
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
  MarketSummaryConclusion,
} from "@/components/slides"

export default function DexcomPresentation() {
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

  const nextSlide = () => goToSlide(Math.min(currentSlide + 1, slides.length - 1))
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
    const slide = slides[currentSlide]

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
      // Analysis Section - Section 01
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
      // Analysis Section - Section 02: Industry Analysis
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
      case "market-summary-conclusion":
        return <MarketSummaryConclusion />
      default:
        return null
    }
  }

  return (
    <div className="h-screen w-screen bg-background overflow-hidden relative">
      <main
        className={`h-full w-full transition-opacity duration-150 ${isTransitioning ? "opacity-0" : "opacity-100"}`}
        key={currentSlide}
      >
        {renderSlide()}
      </main>

      <PresentationNav currentSlide={currentSlide} goToSlide={goToSlide} nextSlide={nextSlide} prevSlide={prevSlide} />
    </div>
  )
}
