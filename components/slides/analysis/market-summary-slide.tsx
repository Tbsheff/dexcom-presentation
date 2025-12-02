"use client"

import { marketSummary } from "@/lib/presentation-data"
import { Target, TrendingUp, AlertTriangle, Lightbulb } from "lucide-react"

export function MarketSummarySlide() {
  return (
    <div className="p-10 pb-24 max-w-6xl mx-auto">
      <div className="mb-4">
        <span className="text-[11px] uppercase tracking-[0.3em] text-primary font-medium">
          Section 02 · Market Summary
        </span>
        <h2 className="text-5xl font-bold mt-1 tracking-tight text-foreground">Strategic Synthesis</h2>
        <p className="text-muted-foreground mt-1 text-sm">Key takeaways from industry and competitive analysis</p>
      </div>

      <div className="grid grid-cols-2 gap-2">
        {/* Strengths */}
        <div className="animate-fade-up stagger-1 p-3 rounded-lg bg-card border-2 border-green-500">
          <div className="flex items-start gap-2 mb-2">
            <Target className="w-5 h-5 text-green-500 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-bold text-foreground">Strengths & Advantages</h3>
            </div>
          </div>
          <ul className="space-y-1.5">
            {marketSummary.strengths.map((strength, idx) => (
              <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                <span className="text-green-500 font-bold mt-0.5">•</span>
                <span className="leading-snug text-sm">{strength}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Opportunities */}
        <div className="animate-fade-up stagger-2 p-3 rounded-lg bg-card border-2 border-blue-500">
          <div className="flex items-start gap-2 mb-2">
            <TrendingUp className="w-5 h-5 text-blue-500 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-bold text-foreground">Growth Opportunities</h3>
            </div>
          </div>
          <ul className="space-y-1.5">
            {marketSummary.opportunities.map((opportunity, idx) => (
              <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                <span className="text-blue-500 font-bold mt-0.5">•</span>
                <span className="leading-snug text-sm">{opportunity}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Threats */}
        <div className="animate-fade-up stagger-3 p-3 rounded-lg bg-card border-2 border-red-500">
          <div className="flex items-start gap-2 mb-2">
            <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-bold text-foreground">Threats & Challenges</h3>
            </div>
          </div>
          <ul className="space-y-1.5">
            {marketSummary.threats.map((threat, idx) => (
              <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                <span className="text-red-500 font-bold mt-0.5">•</span>
                <span className="leading-snug text-sm">{threat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Recommendations */}
        <div className="animate-fade-up stagger-4 p-3 rounded-lg bg-card border-2 border-primary">
          <div className="flex items-start gap-2 mb-2">
            <Lightbulb className="w-5 h-5 text-primary flex-shrink-0" />
            <div>
              <h3 className="text-xl font-bold text-foreground">Strategic Priorities</h3>
            </div>
          </div>
          <ul className="space-y-1.5">
            {marketSummary.recommendations.map((rec, idx) => (
              <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                <span className="text-primary font-bold mt-0.5">•</span>
                <span className="leading-snug text-sm">{rec}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
