"use client"

import { CheckCircle2 } from "lucide-react"
import { vrioAnalysis } from "@/lib/presentation-data"

export function VrioInimitableSlide() {
  return (
    <div className="p-10 pb-24 max-w-6xl mx-auto">
      <div className="mb-6">
        <span className="text-[11px] uppercase tracking-[0.3em] text-primary font-medium">
          Section 02 · VRIO Analysis
        </span>
        <h2 className="text-5xl font-bold mt-2 tracking-tight text-foreground">Inimitable</h2>
        <p className="text-muted-foreground mt-2 text-sm">Can competitors easily copy Dexcom's advantages?</p>
      </div>

      <div className="space-y-3">
        {/* Inimitable Points */}
        {vrioAnalysis.inimitable.map((point, idx) => (
          <div key={idx} className={`animate-fade-up stagger-${idx + 1} p-4 rounded-lg bg-card border-l-4 border-l-amber-500`}>
            <p className="text-foreground leading-relaxed text-sm">{point}</p>
          </div>
        ))}

        {/* Assessment */}
        <div className="animate-fade-up stagger-4 mt-4 p-4 rounded-lg bg-amber-500/10 border border-amber-500/30">
          <div className="flex items-center gap-3">
            <CheckCircle2 className="w-7 h-7 text-amber-500" />
            <div>
              <h3 className="text-xl font-bold text-amber-500">✓ Hard to Imitate</h3>
              <p className="text-muted-foreground mt-1 text-sm">
                Significant barriers prevent competitors from replicating Dexcom's advantages
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
