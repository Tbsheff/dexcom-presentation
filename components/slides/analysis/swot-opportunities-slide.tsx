"use client"

import { TrendingUp } from "lucide-react"
import { swotAnalysis } from "@/lib/presentation-data"

export function SwotOpportunitiesSlide() {
  return (
    <div className="px-12 pt-8 pb-20 h-full flex flex-col">
      <div className="mb-8">
        <span className="text-xl uppercase tracking-[0.3em] text-primary font-medium">
          Section 06 · SWOT Analysis
        </span>
        <h2 className="text-5xl font-bold mt-4 tracking-tight text-foreground">Opportunities</h2>
        <p className="text-muted-foreground mt-4 text-xl">External factors that Dexcom can leverage for growth</p>
      </div>

      <div className="space-y-6 flex-1">
        {swotAnalysis.opportunities.map((opportunity, idx) => (
          <div
            key={idx}
            className={`animate-fade-up stagger-${idx + 1} p-6 rounded-lg bg-card border-l-4 border-l-blue-500 hover:shadow-lg transition-shadow`}
          >
            <div className="flex items-start gap-5">
              <TrendingUp className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-1">{opportunity.title}</h3>
                <p className="text-muted-foreground leading-snug text-xl">{opportunity.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Summary */}
      <div className="animate-fade-up stagger-4 mt-4 p-6 rounded-lg bg-blue-500/10 border border-blue-500/30">
        <div className="flex items-center gap-5">
          <TrendingUp className="w-5 h-5 text-blue-500" />
          <div>
            <h3 className="text-xl font-bold text-blue-500">Growth Potential</h3>
            <p className="text-muted-foreground mt-0.5 text-xl">
              Market expansion, technological innovation, and digital health integration offer substantial growth opportunities
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
