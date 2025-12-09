"use client"

import { marketSummary } from "@/lib/presentation-data"
import { Target, TrendingUp, AlertTriangle, Lightbulb } from "lucide-react"

export function MarketSummarySlide() {
  return (
    <div className="px-12 pt-8 pb-20 h-full flex flex-col">
      <div className="mb-8">
        <span className="text-xl uppercase tracking-[0.3em] text-primary font-medium">
          Section 02 · Market Summary
        </span>
        <h2 className="text-5xl font-bold mt-4 tracking-tight text-foreground">Strategic Synthesis</h2>
        <p className="text-muted-foreground mt-0.5 text-xl">Key takeaways from industry and competitive analysis</p>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {/* Strengths */}
        <div className="animate-fade-up stagger-1 p-5 rounded-lg bg-card border-2 border-green-500">
          <div className="flex items-start gap-1.5 mb-1.5">
            <Target className="w-4 h-4 text-green-500 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-bold text-foreground">Strengths & Advantages</h3>
            </div>
          </div>
          <ul className="space-y-1">
            {marketSummary.strengths.map((strength, idx) => (
              <li key={idx} className="flex items-start gap-1.5 text-muted-foreground">
                <span className="text-green-500 font-bold mt-0.5">•</span>
                <span className="leading-tight text-xl">{strength}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Opportunities */}
        <div className="animate-fade-up stagger-2 p-5 rounded-lg bg-card border-2 border-blue-500">
          <div className="flex items-start gap-1.5 mb-1.5">
            <TrendingUp className="w-4 h-4 text-blue-500 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-bold text-foreground">Growth Opportunities</h3>
            </div>
          </div>
          <ul className="space-y-1">
            {marketSummary.opportunities.map((opportunity, idx) => (
              <li key={idx} className="flex items-start gap-1.5 text-muted-foreground">
                <span className="text-blue-500 font-bold mt-0.5">•</span>
                <span className="leading-tight text-xl">{opportunity}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Threats */}
        <div className="animate-fade-up stagger-3 p-5 rounded-lg bg-card border-2 border-red-500">
          <div className="flex items-start gap-1.5 mb-1.5">
            <AlertTriangle className="w-4 h-4 text-red-500 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-bold text-foreground">Threats & Challenges</h3>
            </div>
          </div>
          <ul className="space-y-1">
            {marketSummary.threats.map((threat, idx) => (
              <li key={idx} className="flex items-start gap-1.5 text-muted-foreground">
                <span className="text-red-500 font-bold mt-0.5">•</span>
                <span className="leading-tight text-xl">{threat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Recommendations */}
        <div className="animate-fade-up stagger-4 p-5 rounded-lg bg-card border-2 border-primary">
          <div className="flex items-start gap-1.5 mb-1.5">
            <Lightbulb className="w-4 h-4 text-primary flex-shrink-0" />
            <div>
              <h3 className="text-xl font-bold text-foreground">Strategic Priorities</h3>
            </div>
          </div>
          <ul className="space-y-1">
            {marketSummary.recommendations.map((rec, idx) => (
              <li key={idx} className="flex items-start gap-1.5 text-muted-foreground">
                <span className="text-primary font-bold mt-0.5">•</span>
                <span className="leading-tight text-xl">{rec}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
