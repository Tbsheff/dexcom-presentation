"use client"

import { CheckCircle2 } from "lucide-react"
import { vrioAnalysis } from "@/lib/presentation-data"

export function VrioValueSlide() {
  return (
    <div className="p-12 pb-28 max-w-6xl mx-auto">
      <div className="mb-8">
        <span className="text-[11px] uppercase tracking-[0.3em] text-primary font-medium">
          Section 02 · VRIO Analysis
        </span>
        <h2 className="text-5xl font-bold mt-2 tracking-tight text-foreground">Value</h2>
        <p className="text-muted-foreground mt-2">Does Dexcom create value for customers?</p>
      </div>

      <div className="space-y-4">
        {/* Value Points */}
        {vrioAnalysis.value.map((point, idx) => (
          <div key={idx} className={`animate-fade-up stagger-${idx + 1} p-6 rounded-lg bg-card border-l-4 border-l-green-500`}>
            <p className="text-foreground leading-relaxed">{point}</p>
          </div>
        ))}

        {/* Assessment */}
        <div className="animate-fade-up stagger-4 mt-8 p-6 rounded-lg bg-green-500/10 border border-green-500/30">
          <div className="flex items-center gap-3">
            <CheckCircle2 className="w-8 h-8 text-green-500" />
            <div>
              <h3 className="text-2xl font-bold text-green-500">✓ Valuable</h3>
              <p className="text-muted-foreground mt-1">
                Dexcom's technology and ecosystem create significant value for customers
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
