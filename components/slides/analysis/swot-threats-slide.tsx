"use client"

import { Shield } from "lucide-react"
import { swotAnalysis } from "@/lib/presentation-data"

export function SwotThreatsSlide() {
  return (
    <div className="px-12 pt-8 pb-20 h-full flex flex-col">
      <div className="mb-8">
        <span className="text-xl uppercase tracking-[0.3em] text-primary font-medium">
          Section 06 · SWOT Analysis
        </span>
        <h2 className="text-5xl font-bold mt-4 tracking-tight text-foreground">Threats</h2>
        <p className="text-muted-foreground mt-4 text-xl">External challenges that could impact Dexcom's market position</p>
      </div>

      <div className="space-y-6 flex-1">
        {swotAnalysis.threats.map((threat, idx) => (
          <div
            key={idx}
            className={`animate-fade-up stagger-${idx + 1} p-6 rounded-lg bg-card border-l-4 border-l-red-500 hover:shadow-lg transition-shadow`}
          >
            <div className="flex items-start gap-5">
              <Shield className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-1">{threat.title}</h3>
                <p className="text-muted-foreground leading-snug text-xl">{threat.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Summary */}
      <div className="animate-fade-up stagger-4 mt-4 p-6 rounded-lg bg-red-500/10 border border-red-500/30">
        <div className="flex items-center gap-5">
          <Shield className="w-5 h-5 text-red-500" />
          <div>
            <h3 className="text-xl font-bold text-red-500">Strategic Challenges</h3>
            <p className="text-muted-foreground mt-0.5 text-xl">
              Competitive pressure, regulatory complexity, and technological disruption require proactive strategic responses
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
