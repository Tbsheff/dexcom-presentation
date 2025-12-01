"use client"

import { strategicPositioning, COMPANY_COLORS } from "@/lib/presentation-data"

export function StrategicGroupMapPositioningSlide() {
  const getColor = (company: string) => {
    if (company.includes("Dexcom")) return COMPANY_COLORS.dexcom
    if (company.includes("Abbott")) return COMPANY_COLORS.abbott
    return COMPANY_COLORS.medtronic
  }

  return (
    <div className="p-12 pb-28 max-w-6xl mx-auto">
      <div className="mb-8">
        <span className="text-[11px] uppercase tracking-[0.3em] text-primary font-medium">
          Section 02 · Competitive Analysis
        </span>
        <h2 className="text-5xl font-bold mt-2 tracking-tight text-foreground">Strategic Positioning</h2>
        <p className="text-muted-foreground mt-2">How each competitor positions in the market</p>
      </div>

      <div className="space-y-4">
        {strategicPositioning.map((item, idx) => (
          <div
            key={idx}
            className={`animate-fade-up stagger-${idx + 1} p-8 rounded-lg bg-card border-l-4`}
            style={{ borderLeftColor: getColor(item.company) }}
          >
            <h3 className="text-2xl font-bold mb-3" style={{ color: getColor(item.company) }}>
              {item.company}
            </h3>
            <p className="text-lg text-foreground leading-relaxed">{item.positioning}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
