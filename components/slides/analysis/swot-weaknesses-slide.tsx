"use client"

import { AlertCircle } from "lucide-react"
import { swotAnalysis } from "@/lib/presentation-data"

export function SwotWeaknessesSlide() {
  return (
    <div className="p-8 pb-24 max-w-6xl mx-auto">
      <div className="mb-6">
        <span className="text-[11px] uppercase tracking-[0.3em] text-primary font-medium">
          Section 06 · SWOT Analysis
        </span>
        <h2 className="text-5xl font-bold mt-2 tracking-tight text-foreground">Weaknesses</h2>
        <p className="text-muted-foreground mt-1 text-xs">Internal limitations that may hinder growth or performance</p>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {swotAnalysis.weaknesses.map((weakness, idx) => (
          <div
            key={idx}
            className={`animate-fade-up stagger-${idx + 1} p-3 rounded-lg bg-card border-l-4 border-l-amber-500 hover:shadow-lg transition-shadow`}
          >
            <div className="flex items-start gap-2">
              <AlertCircle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">{weakness.title}</h3>
                <p className="text-muted-foreground leading-snug text-xs">{weakness.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Summary */}
      <div className="animate-fade-up stagger-5 mt-4 p-3 rounded-lg bg-amber-500/10 border border-amber-500/30">
        <div className="flex items-center gap-2">
          <AlertCircle className="w-5 h-5 text-amber-500" />
          <div>
            <h3 className="text-base font-bold text-amber-500">Areas for Improvement</h3>
            <p className="text-muted-foreground mt-0.5 text-xs">
              Addressing cost barriers, market dependency, and diversification will be key to sustained growth
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
