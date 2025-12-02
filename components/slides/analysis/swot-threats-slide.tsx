"use client"

import { Shield } from "lucide-react"
import { swotAnalysis } from "@/lib/presentation-data"

export function SwotThreatsSlide() {
  return (
    <div className="p-10 pb-24 max-w-6xl mx-auto">
      <div className="mb-6">
        <span className="text-[11px] uppercase tracking-[0.3em] text-primary font-medium">
          Section 06 · SWOT Analysis
        </span>
        <h2 className="text-5xl font-bold mt-2 tracking-tight text-foreground">Threats</h2>
        <p className="text-muted-foreground mt-2 text-sm">External challenges that could impact Dexcom's market position</p>
      </div>

      <div className="space-y-4">
        {swotAnalysis.threats.map((threat, idx) => (
          <div
            key={idx}
            className={`animate-fade-up stagger-${idx + 1} p-5 rounded-lg bg-card border-l-4 border-l-red-500 hover:shadow-lg transition-shadow`}
          >
            <div className="flex items-start gap-3">
              <Shield className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-base font-bold text-foreground mb-2">{threat.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{threat.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Summary */}
      <div className="animate-fade-up stagger-4 mt-6 p-4 rounded-lg bg-red-500/10 border border-red-500/30">
        <div className="flex items-center gap-3">
          <Shield className="w-7 h-7 text-red-500" />
          <div>
            <h3 className="text-xl font-bold text-red-500">Strategic Challenges</h3>
            <p className="text-muted-foreground mt-1 text-sm">
              Competitive pressure, regulatory complexity, and technological disruption require proactive strategic responses
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
