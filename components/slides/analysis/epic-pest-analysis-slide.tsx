"use client"

import { epicPestAnalysis } from "@/lib/presentation-data"
import { Globe, DollarSign, Heart, Zap } from "lucide-react"

export function EpicPestAnalysisSlide() {
  const factors = [
    {
      title: "Political & Legal",
      content: epicPestAnalysis.political,
      icon: Globe,
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
      borderColor: "border-l-blue-500"
    },
    {
      title: "Economic",
      content: epicPestAnalysis.economic,
      icon: DollarSign,
      color: "text-green-500",
      bgColor: "bg-green-500/10",
      borderColor: "border-l-green-500"
    },
    {
      title: "Sociocultural",
      content: epicPestAnalysis.sociocultural,
      icon: Heart,
      color: "text-pink-500",
      bgColor: "bg-pink-500/10",
      borderColor: "border-l-pink-500"
    },
    {
      title: "Technological",
      content: epicPestAnalysis.technological,
      icon: Zap,
      color: "text-amber-500",
      bgColor: "bg-amber-500/10",
      borderColor: "border-l-amber-500"
    }
  ]

  return (
    <div className="p-6 pb-20 max-w-6xl mx-auto">
      <div className="mb-6">
        <span className="text-[10px] uppercase tracking-[0.3em] text-primary font-medium">
          Section 02 · Macro Environment
        </span>
        <h2 className="text-5xl font-bold mt-2 tracking-tight text-foreground">EPIC PEST Analysis</h2>
        <p className="text-muted-foreground mt-0.5 text-xs">External macro-environmental factors shaping the CGM industry</p>
      </div>

      <div className="space-y-1.5">
        {factors.map((factor, idx) => {
          const Icon = factor.icon
          return (
            <div
              key={idx}
              className={`animate-fade-up stagger-${idx + 1} p-2.5 rounded-lg bg-card border-l-4 ${factor.borderColor}`}
            >
              <div className="flex items-start gap-2.5">
                <div className={`p-1.5 rounded-lg ${factor.bgColor} flex-shrink-0`}>
                  <Icon className={`w-4 h-4 ${factor.color}`} />
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-bold text-foreground mb-0.5">{factor.title}</h3>
                  <p className="text-muted-foreground leading-tight text-xs">{factor.content}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Wellness Market Emphasis */}
      <div className="animate-fade-up stagger-5 mt-2 p-2.5 rounded-lg bg-gradient-to-br from-pink-500/20 to-pink-500/5 border-2 border-pink-500">
        <div className="flex items-start gap-2.5">
          <Heart className="w-5 h-5 text-pink-500 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="text-sm font-bold text-foreground mb-0.5">
              Strategic Opportunity: Wellness Market Expansion
            </h3>
            <p className="text-muted-foreground leading-tight text-xs">
              The growing <span className="text-pink-500 font-semibold">wellness and metabolic health movement</span> represents a
              significant opportunity for CGM expansion beyond diabetes. Athletes, fitness enthusiasts, and health-conscious consumers
              are increasingly interested in glucose monitoring to optimize performance, energy levels, and long-term metabolic health.
              This trend, combined with rising prediabetes rates (96 million Americans), could dramatically expand the addressable market
              from ~30 million diabetics to over 100 million potential users in the U.S. alone.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
