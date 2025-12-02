"use client"

import { presentationSlides } from "@/lib/presentation-data"
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

function PrintAgenda({ currentSlide }: { currentSlide: number }) {
  const getCurrentSection = () => {
    for (const section of presentationSections) {
      if (currentSlide >= section.startSlide && currentSlide <= section.endSlide) {
        return section.id
      }
    }
    return null
  }

  const currentSection = getCurrentSection()

  return (
    <div className="flex items-center justify-center gap-2 py-4">
      {presentationSections.map((section, idx) => {
        const isActive = section.id === currentSection
        const isPast = currentSlide > section.endSlide

        return (
          <div key={section.id} className="flex items-center">
            <span
              className={`
                px-4 py-1.5 rounded-full text-sm font-medium
                ${isActive
                  ? "bg-primary text-primary-foreground"
                  : isPast
                    ? "text-muted-foreground"
                    : "text-muted-foreground/60"
                }
              `}
            >
              {section.label}
            </span>
            {idx < presentationSections.length - 1 && (
              <div className={`w-8 h-px mx-1 ${isPast ? "bg-primary/30" : "bg-border"}`} />
            )}
          </div>
        )
      })}
    </div>
  )
}

function renderSlide(slideId: string) {
  switch (slideId) {
    case "title": return <TitleSlide />
    case "agenda": return <AgendaSlide goToSlide={() => {}} />
    case "diabetes": return <DiabetesSlide />
    case "cgm": return <CgmSlide />
    case "how-cgm-works": return <HowCgmWorksSlide />
    case "company": return <CompanySlide />
    case "mission": return <MissionSlide />
    case "financials": return <FinancialsSlide />
    case "key-competitors": return <KeyCompetitorsSlide />
    case "revenue-comparison": return <RevenueComparisonSlide />
    case "growth-comparison": return <GrowthComparisonSlide />
    case "industry": return <IndustrySlide />
    case "strategic-map": return <StrategicMapSlide />
    case "five-forces": return <FiveForcesSlide />
    case "pest": return <PestSlide />
    case "consumer-wants": return <ConsumerWantsSlide />
    case "differentiation": return <DifferentiationSlide />
    case "why-dexcom": return <WhyDexcomSlide />
    case "resources": return <ResourcesSlide />
    case "capabilities": return <CapabilitiesSlide />
    case "imitation": return <ImitationSlide />
    case "swot": return <SwotSlide />
    case "issue1": return <Issue1Slide />
    case "issue2": return <Issue2Slide />
    case "thanks": return <ThanksSlide />
    default: return null
  }
}

export default function PrintView() {
  return (
    <div className="print-container" style={{ width: 1920 }}>
      {presentationSlides.map((slide, idx) => (
        <div
          key={slide.id}
          className="print-slide bg-background"
          style={{
            width: 1920,
            height: 1080,
            position: "relative",
            overflow: "hidden",
            pageBreakAfter: "always",
          }}
        >
          {/* Show agenda and logo on slides 2 through second-to-last */}
          {idx > 1 && idx < presentationSlides.length - 1 && (
            <>
              <img
                src="/images/dexcom-logo.png"
                alt="Dexcom"
                style={{
                  position: "absolute",
                  top: 16,
                  left: 24,
                  height: 64,
                  zIndex: 50,
                }}
              />
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, zIndex: 40 }}>
                <PrintAgenda currentSlide={idx} />
              </div>
            </>
          )}
          <div style={{ width: 1920, height: 1080 }}>
            {renderSlide(slide.id)}
          </div>
        </div>
      ))}
    </div>
  )
}
