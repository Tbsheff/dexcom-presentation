"use client"

import { AlertCircle } from "lucide-react"
import { swotAnalysis } from "@/lib/presentation-data"

export function SwotWeaknessesSlide() {
  return (
    <div className="p-10 pb-24 max-w-6xl mx-auto">
      <div className="mb-6">
        <span className="text-[11px] uppercase tracking-[0.3em] text-primary font-medium">
          Section 06 · SWOT Analysis
        </span>
        <h2 className="text-5xl font-bold mt-2 tracking-tight text-foreground">Weaknesses</h2>
        <p className="text-muted-foreground mt-2 text-sm">Internal limitations that may hinder growth or performance</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {swotAnalysis.weaknesses.map((weakness, idx) => (
          <div
            key={idx}
            className={`animate-fade-up stagger-${idx + 1} p-5 rounded-lg bg-card border-l-4 border-l-amber-500 hover:shadow-lg transition-shadow`}
          >
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-base font-bold text-foreground mb-2">{weakness.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{weakness.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Summary */}
      <div className="animate-fade-up stagger-5 mt-6 p-4 rounded-lg bg-amber-500/10 border border-amber-500/30">
        <div className="flex items-center gap-3">
          <AlertCircle className="w-7 h-7 text-amber-500" />
          <div>
            <h3 className="text-xl font-bold text-amber-500">Areas for Improvement</h3>
            <p className="text-muted-foreground mt-1 text-sm">
              Addressing cost barriers, market dependency, and diversification will be key to sustained growth
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
