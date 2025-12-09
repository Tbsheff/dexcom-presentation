"use client"

import { strategicPositioning, COMPANY_COLORS } from "@/lib/presentation-data"

export function StrategicGroupMapPositioningSlide() {
  const getColor = (company: string) => {
    if (company.includes("Dexcom")) return COMPANY_COLORS.dexcom
    if (company.includes("Abbott")) return COMPANY_COLORS.abbott
    return COMPANY_COLORS.medtronic
  }

  return (
    <div className="px-12 pt-8 pb-20 h-full flex flex-col">
      <div className="mb-8">
        <span className="text-xl uppercase tracking-[0.3em] text-primary font-medium">
          Section 02 · Competitive Analysis
        </span>
        <h2 className="text-5xl font-bold mt-4 tracking-tight text-foreground">Strategic Positioning</h2>
        <p className="text-muted-foreground mt-4 text-2xl">How each competitor positions in the market</p>
      </div>

      <div className="space-y-5 flex-1">
        {strategicPositioning.map((item, idx) => (
          <div
            key={idx}
            className={`animate-fade-up stagger-${idx + 1} p-6 rounded-lg bg-card border-l-4`}
            style={{ borderLeftColor: getColor(item.company) }}
          >
            <h3 className="text-xl font-bold mb-1.5" style={{ color: getColor(item.company) }}>
              {item.company}
            </h3>
            <p className="text-2xl text-foreground leading-snug">{item.positioning}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
