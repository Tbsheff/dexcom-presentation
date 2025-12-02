"use client"

import { keyCompetitors, COMPANY_COLORS } from "@/lib/presentation-data"

export function KeyCompetitorsOverviewSlide() {
  return (
    <div className="p-10 pb-24 max-w-6xl mx-auto">
      <div className="mb-6">
        <span className="text-[11px] uppercase tracking-[0.3em] text-primary font-medium">
          Section 02 · Competitive Analysis
        </span>
        <h2 className="text-5xl font-bold mt-2 tracking-tight text-foreground">Key Competitors</h2>
        <p className="text-muted-foreground mt-2">Main players in the CGM market</p>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {keyCompetitors.map((competitor, idx) => (
          <div
            key={idx}
            className={`animate-fade-up stagger-${idx + 1} p-4 rounded-lg bg-card border-2 border-border hover:border-primary/50 transition-colors`}
          >
            <h3 className="text-xl font-bold mb-2" style={{
              color: competitor.company === "Abbott" ? COMPANY_COLORS.abbott :
                     competitor.company === "Medtronic" ? COMPANY_COLORS.medtronic :
                     COMPANY_COLORS.senseonics
            }}>
              {competitor.company}
            </h3>
            <p className="text-lg font-semibold text-foreground mb-4">{competitor.product}</p>
            <p className="text-sm text-muted-foreground leading-relaxed">{competitor.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
