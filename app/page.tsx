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
  // Section 03 Part 3: Value Chain & Consumption Chain
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
      // Section 03: Unique Value & Competitor Analysis
      case "unique-value-divider":
        return <AnalysisSectionDivider sectionNumber="03" title="Unique Value & Competitor Analysis" />
      case "differentiation-strategy":
        return <DifferentiationStrategySlide />
      case "strategy-canvas":
        return <StrategyCanvasSlide />
      case "brand-image":
        return <BrandImageSlide />
      // Section 03: Competitor Response
      case "competitor-response-divider":
        return <CompetitorResponseDividerSlide />
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
      // Section 03: Value Chain & Consumption Chain
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
        return <SwotDividerSlide />
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
        return <RecommendationsDividerSlide />
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
