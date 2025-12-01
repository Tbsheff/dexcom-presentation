"use client"

import { marketSummary } from "@/lib/presentation-data"
import { Target, TrendingUp, AlertTriangle, Lightbulb } from "lucide-react"

export function MarketSummarySlide() {
  return (
    <div className="p-12 pb-28 max-w-6xl mx-auto">
      <div className="mb-8">
        <span className="text-[11px] uppercase tracking-[0.3em] text-primary font-medium">
          Section 02 · Market Summary
        </span>
        <h2 className="text-5xl font-bold mt-2 tracking-tight text-foreground">Strategic Synthesis</h2>
        <p className="text-muted-foreground mt-2">Key takeaways from industry and competitive analysis</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {/* Strengths */}
        <div className="animate-fade-up stagger-1 p-5 rounded-lg bg-card border-2 border-green-500">
          <div className="flex items-start gap-3 mb-4">
            <Target className="w-8 h-8 text-green-500 flex-shrink-0" />
            <div>
              <h3 className="text-2xl font-bold text-foreground">Strengths & Advantages</h3>
            </div>
          </div>
          <ul className="space-y-2">
            {marketSummary.strengths.map((strength, idx) => (
              <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                <span className="text-green-500 font-bold mt-0.5">•</span>
                <span className="leading-relaxed">{strength}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Opportunities */}
        <div className="animate-fade-up stagger-2 p-5 rounded-lg bg-card border-2 border-blue-500">
          <div className="flex items-start gap-3 mb-4">
            <TrendingUp className="w-8 h-8 text-blue-500 flex-shrink-0" />
            <div>
              <h3 className="text-2xl font-bold text-foreground">Growth Opportunities</h3>
            </div>
          </div>
          <ul className="space-y-2">
            {marketSummary.opportunities.map((opportunity, idx) => (
              <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                <span className="text-blue-500 font-bold mt-0.5">•</span>
                <span className="leading-relaxed">{opportunity}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Threats */}
        <div className="animate-fade-up stagger-3 p-5 rounded-lg bg-card border-2 border-red-500">
          <div className="flex items-start gap-3 mb-4">
            <AlertTriangle className="w-8 h-8 text-red-500 flex-shrink-0" />
            <div>
              <h3 className="text-2xl font-bold text-foreground">Threats & Challenges</h3>
            </div>
          </div>
          <ul className="space-y-2">
            {marketSummary.threats.map((threat, idx) => (
              <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                <span className="text-red-500 font-bold mt-0.5">•</span>
                <span className="leading-relaxed">{threat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Recommendations */}
        <div className="animate-fade-up stagger-4 p-5 rounded-lg bg-card border-2 border-primary">
          <div className="flex items-start gap-3 mb-4">
            <Lightbulb className="w-8 h-8 text-primary flex-shrink-0" />
            <div>
              <h3 className="text-2xl font-bold text-foreground">Strategic Priorities</h3>
            </div>
          </div>
          <ul className="space-y-2">
            {marketSummary.recommendations.map((rec, idx) => (
              <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                <span className="text-primary font-bold mt-0.5">•</span>
                <span className="leading-relaxed">{rec}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Overall Conclusion */}
      <div className="animate-fade-up stagger-5 mt-6 p-6 rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 border-2 border-primary">
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-full bg-primary/20">
            <Target className="w-8 h-8 text-primary" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-2">Market Position & Outlook</h3>
            <p className="text-muted-foreground leading-relaxed">
              Dexcom operates in an <span className="text-primary font-semibold">attractive, high-growth market</span> with sustainable
              competitive advantages in technology and clinical outcomes. The company's position as the premium CGM provider is well-defended
              by strong R&D capabilities, clinical evidence, and brand reputation. However, success requires navigating intense competition
              from Abbott, managing payer relationships effectively, and preparing for potential disruption from non-invasive technologies.
              The expansion into wellness markets and international geographies offers significant upside, while continued innovation in accuracy,
              ease-of-use, and digital health integration will be critical to maintaining market leadership.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
