"use client"

import { keyCompetitors, COMPANY_COLORS } from "@/lib/presentation-data"

export function KeyCompetitorsOverviewSlide() {
  return (
    <div className="px-12 pt-8 pb-20 h-full flex flex-col">
      <div className="mb-8">
        <span className="text-xl uppercase tracking-[0.3em] text-primary font-medium">
          Section 02 · Competitive Analysis
        </span>
        <h2 className="text-5xl font-bold mt-4 tracking-tight text-foreground">Key Competitors</h2>
        <p className="text-muted-foreground mt-3 text-2xl">Main players in the CGM market</p>
      </div>

      <div className="grid grid-cols-3 gap-6.5">
        {keyCompetitors.map((competitor, idx) => (
          <div
            key={idx}
            className={`animate-fade-up stagger-${idx + 1} p-6.5 rounded-lg bg-card border-2 border-border hover:border-primary/50 transition-colors`}
          >
            <h3 className="text-2xl font-bold mb-1.5" style={{
              color: competitor.company === "Abbott" ? COMPANY_COLORS.abbott :
                     competitor.company === "Medtronic" ? COMPANY_COLORS.medtronic :
                     COMPANY_COLORS.senseonics
            }}>
              {competitor.company}
            </h3>
            <p className="text-xl font-semibold text-foreground mb-8">{competitor.product}</p>
            <p className="text-[13px] text-muted-foreground leading-relaxed">{competitor.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
