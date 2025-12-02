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
  // Section 03: Unique Value & Competitor Analysis
  DifferentiationStrategySlide,
  StrategyCanvasSlide,
  BrandImageSlide,
  CompetitorResponseDividerSlide,
  FutureGoalsSlide,
  AssumptionsSlide,
  CurrentStrategySlide,
  CapabilitiesComparisonDetailedSlide,
  CompetitorResponseAnalysisSlide,
  ValueChainPrimarySlide,
  ValueChainSupportSlide,
  ValueChainTakeaways1Slide,
  ValueChainTakeaways2Slide,
  ValueChainTakeaways3Slide,
  ConsumptionChain1Slide,
  ConsumptionChain2Slide,
  ConsumptionChainTakeaways1Slide,
  ConsumptionChainTakeaways2Slide,
  // Section 04: Resources & Capabilities
  ResourcesDetailedSlide,
  CapabilitiesComprehensiveSlide,
  LimitationsResourcesSlide,
  LimitationsCapabilitiesSlide,
  // Section 05: Imitation Barriers
  ImitationBarriersCreatedSlide,
  ImitationBarriersFacedSlide,
  ImitationBarriersInsightsSlide,
  // Section 06: SWOT Analysis
  SwotDividerSlide,
  SwotStrengthsSlide,
  SwotWeaknessesSlide,
  SwotOpportunitiesSlide,
  SwotThreatsSlide,
  // Section 07: Recommendations
  RecommendationsDividerSlide,
  Issue1DetailedSlide,
  Solution1DetailedSlide,
  Issue2DetailedSlide,
  Solution2DetailedSlide,
  Issue3DetailedSlide,
  Solution3DetailedSlide,
} from "@/components/slides"

const analysisSections = [
  { id: "analysis-01", label: "Company", startSlide: 0, endSlide: 6 },
  { id: "analysis-02", label: "Industry", startSlide: 7, endSlide: 28 },
  { id: "analysis-03", label: "Unique Value", startSlide: 29, endSlide: 47 },
  { id: "analysis-04", label: "Resources", startSlide: 48, endSlide: 52 },
  { id: "analysis-05", label: "Barriers", startSlide: 53, endSlide: 56 },
  { id: "analysis-06", label: "SWOT", startSlide: 57, endSlide: 61 },
  { id: "analysis-07", label: "Recommendations", startSlide: 62, endSlide: 68 },
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
      // Section 03: Unique Value & Competitor Analysis
      case "unique-value-divider":
        return <AnalysisSectionDivider sectionNumber="03" title="Unique Value & Competitor Analysis" />
      case "differentiation-strategy":
        return <DifferentiationStrategySlide />
      case "strategy-canvas":
        return <StrategyCanvasSlide />
      case "brand-image":
        return <BrandImageSlide />
      case "competitor-response-divider":
        return <AnalysisSectionDivider sectionNumber="03" title="Competitor Response" />
      case "future-goals":
        return <FutureGoalsSlide />
      case "assumptions":
        return <AssumptionsSlide />
      case "current-strategy":
        return <CurrentStrategySlide />
      case "capabilities-comparison-detailed":
        return <CapabilitiesComparisonDetailedSlide />
      case "competitor-response-analysis":
        return <CompetitorResponseAnalysisSlide />
      case "value-chain-primary":
        return <ValueChainPrimarySlide />
      case "value-chain-support":
        return <ValueChainSupportSlide />
      case "value-chain-takeaways-1":
        return <ValueChainTakeaways1Slide />
      case "value-chain-takeaways-2":
        return <ValueChainTakeaways2Slide />
      case "value-chain-takeaways-3":
        return <ValueChainTakeaways3Slide />
      case "consumption-chain-1":
        return <ConsumptionChain1Slide />
      case "consumption-chain-2":
        return <ConsumptionChain2Slide />
      case "consumption-chain-takeaways-1":
        return <ConsumptionChainTakeaways1Slide />
      case "consumption-chain-takeaways-2":
        return <ConsumptionChainTakeaways2Slide />
      // Section 04: Resources & Capabilities
      case "resources-capabilities-divider":
        return <AnalysisSectionDivider sectionNumber="04" title="Resources & Capabilities" />
      case "resources-detailed":
        return <ResourcesDetailedSlide />
      case "capabilities-comprehensive":
        return <CapabilitiesComprehensiveSlide />
      case "limitations-resources":
        return <LimitationsResourcesSlide />
      case "limitations-capabilities":
        return <LimitationsCapabilitiesSlide />
      // Section 05: Imitation Barriers
      case "imitation-barriers-divider":
        return <AnalysisSectionDivider sectionNumber="05" title="Imitation Barriers" />
      case "imitation-barriers-created":
        return <ImitationBarriersCreatedSlide />
      case "imitation-barriers-faced":
        return <ImitationBarriersFacedSlide />
      case "imitation-barriers-insights":
        return <ImitationBarriersInsightsSlide />
      // Section 06: SWOT Analysis
      case "swot-divider":
        return <AnalysisSectionDivider sectionNumber="06" title="SWOT Analysis" />
      case "swot-strengths":
        return <SwotStrengthsSlide />
      case "swot-weaknesses":
        return <SwotWeaknessesSlide />
      case "swot-opportunities":
        return <SwotOpportunitiesSlide />
      case "swot-threats":
        return <SwotThreatsSlide />
      // Section 07: Recommendations
      case "recommendations-divider":
        return <AnalysisSectionDivider sectionNumber="07" title="Recommendations" />
      case "issue-1-detailed":
        return <Issue1DetailedSlide />
      case "solution-1-detailed":
        return <Solution1DetailedSlide />
      case "issue-2-detailed":
        return <Issue2DetailedSlide />
      case "solution-2-detailed":
        return <Solution2DetailedSlide />
      case "issue-3-detailed":
        return <Issue3DetailedSlide />
      case "solution-3-detailed":
        return <Solution3DetailedSlide />
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
