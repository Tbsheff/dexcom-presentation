"use client"

import { CheckCircle2 } from "lucide-react"
import { swotAnalysis } from "@/lib/presentation-data"

export function SwotStrengthsSlide() {
  return (
    <div className="p-10 pb-24 max-w-6xl mx-auto">
      <div className="mb-6">
        <span className="text-[11px] uppercase tracking-[0.3em] text-primary font-medium">
          Section 06 · SWOT Analysis
        </span>
        <h2 className="text-5xl font-bold mt-2 tracking-tight text-foreground">Strengths</h2>
        <p className="text-muted-foreground mt-2 text-sm">Internal factors that give Dexcom competitive advantages</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {swotAnalysis.strengths.map((strength, idx) => (
          <div
            key={idx}
            className={`animate-fade-up stagger-${idx + 1} p-5 rounded-lg bg-card border-l-4 border-l-green-500 hover:shadow-lg transition-shadow`}
          >
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-base font-bold text-foreground mb-2">{strength.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{strength.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Summary */}
      <div className="animate-fade-up stagger-5 mt-6 p-4 rounded-lg bg-green-500/10 border border-green-500/30">
        <div className="flex items-center gap-3">
          <CheckCircle2 className="w-7 h-7 text-green-500" />
          <div>
            <h3 className="text-xl font-bold text-green-500">Strong Foundation</h3>
            <p className="text-muted-foreground mt-1 text-sm">
              Dexcom's technological leadership, brand trust, and strategic partnerships create a solid competitive position
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
