"use client"

import { fiveForcesDetailed } from "@/lib/presentation-data"
import { TrendingUp, AlertCircle, CheckCircle2, Users, Shield, Lightbulb } from "lucide-react"

export function FiveForcesInsightsSlide() {
  const forcesSummary = [
    { name: "Competitive Rivalry", rating: "HIGH", icon: TrendingUp, color: "text-red-500", bgColor: "bg-red-500/10", borderColor: "border-red-500" },
    { name: "Supplier Power", rating: "MODERATE", icon: Users, color: "text-amber-500", bgColor: "bg-amber-500/10", borderColor: "border-amber-500" },
    { name: "Buyer Power", rating: "MODERATE-HIGH", icon: Users, color: "text-blue-500", bgColor: "bg-blue-500/10", borderColor: "border-blue-500" },
    { name: "Threat of Substitutes", rating: "MODERATE", icon: AlertCircle, color: "text-purple-500", bgColor: "bg-purple-500/10", borderColor: "border-purple-500" },
    { name: "Threat of New Entry", rating: "LOW", icon: Shield, color: "text-green-500", bgColor: "bg-green-500/10", borderColor: "border-green-500" },
  ]

  return (
    <div className="p-10 pb-20 max-w-6xl mx-auto">
      <div className="mb-4">
        <span className="text-[11px] uppercase tracking-[0.3em] text-primary font-medium">
          Section 02 · Porter's Five Forces
        </span>
        <h2 className="text-5xl font-bold mt-2 tracking-tight text-foreground">Key Insights</h2>
      </div>

      {/* Forces Summary Grid */}
      <div className="grid grid-cols-5 gap-2 mb-2">
        {forcesSummary.map((force, idx) => {
          const Icon = force.icon
          return (
            <div
              key={idx}
              className={`animate-fade-up stagger-${idx + 1} p-3 rounded-lg ${force.bgColor} border-2 ${force.borderColor}`}
            >
              <Icon className={`w-6 h-6 ${force.color} mb-2`} />
              <h4 className="text-sm font-semibold text-foreground mb-1">{force.name}</h4>
              <span className={`text-xs font-bold ${force.color}`}>{force.rating}</span>
            </div>
          )
        })}
      </div>

      {/* All Key Insights */}
      <div className="space-y-2">
        {fiveForcesDetailed.keyInsights.map((insight, idx) => (
          <div
            key={idx}
            className={`animate-fade-up stagger-${idx + 6} p-3 rounded-lg bg-card border-l-4 border-l-primary`}
          >
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
              <p className="text-foreground text-base leading-snug">{insight}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Overall Assessment */}
      <div className="animate-fade-up stagger-11 p-3 rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 border-2 border-primary mt-2">
        <div className="flex items-start gap-3">
          <Lightbulb className="w-8 h-8 text-primary flex-shrink-0" />
          <div>
            <h3 className="text-base font-bold text-foreground mb-1">Industry Attractiveness: Moderate</h3>
            <p className="text-muted-foreground text-sm leading-snug">
              The CGM industry presents a <span className="text-primary font-semibold">mixed competitive landscape</span>.
              While high barriers to entry and strong growth potential are favorable, intense rivalry and moderate-to-high
              buyer power create challenges. Success requires continuous innovation, strong clinical evidence, and effective
              management of payer relationships. The looming threat of non-invasive technologies adds urgency to maintain
              market leadership while these alternatives remain in development.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
