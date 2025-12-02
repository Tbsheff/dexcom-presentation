"use client"

import { CheckCircle2, Trophy } from "lucide-react"
import { vrioAnalysis } from "@/lib/presentation-data"

export function VrioOrganizedSlide() {
  return (
    <div className="p-10 pb-24 max-w-6xl mx-auto">
      <div className="mb-6">
        <span className="text-[11px] uppercase tracking-[0.3em] text-primary font-medium">
          Section 02 · VRIO Analysis
        </span>
        <h2 className="text-5xl font-bold mt-2 tracking-tight text-foreground">Organized</h2>
        <p className="text-muted-foreground mt-2 text-sm">Is Dexcom organized to exploit these advantages?</p>
      </div>

      <div className="space-y-3">
        {/* Organized Points */}
        {vrioAnalysis.organized.map((point, idx) => (
          <div key={idx} className={`animate-fade-up stagger-${idx + 1} p-4 rounded-lg bg-card border-l-4 border-l-primary`}>
            <p className="text-foreground leading-relaxed text-sm">{point}</p>
          </div>
        ))}

        {/* Assessment */}
        <div className="animate-fade-up stagger-4 mt-4 p-4 rounded-lg bg-primary/10 border border-primary/30">
          <div className="flex items-center gap-3">
            <CheckCircle2 className="w-7 h-7 text-primary" />
            <div>
              <h3 className="text-xl font-bold text-primary">✓ Organized to Capture Value</h3>
              <p className="text-muted-foreground mt-1 text-sm">
                Dexcom has the organizational capabilities to fully exploit its advantages
              </p>
            </div>
          </div>
        </div>

        {/* VRIO Conclusion */}
        <div className="animate-fade-up stagger-5 mt-4 p-4 rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 border-2 border-primary">
          <div className="flex items-start gap-3">
            <Trophy className="w-10 h-10 text-primary flex-shrink-0" />
            <div>
              <h3 className="text-xl font-bold text-foreground mb-1">
                Sustained Competitive Advantage
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Dexcom passes all four VRIO criteria, indicating a <span className="text-primary font-semibold">sustained competitive advantage</span> in the CGM market. The combination of valuable, rare, inimitable resources organized effectively creates lasting market leadership.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
