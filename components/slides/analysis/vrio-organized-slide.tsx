"use client"

import { CheckCircle2, Trophy } from "lucide-react"
import { vrioAnalysis } from "@/lib/presentation-data"

export function VrioOrganizedSlide() {
  return (
    <div className="px-12 pt-8 pb-20 h-full flex flex-col">
      <div className="mb-8">
        <span className="text-xl uppercase tracking-[0.3em] text-primary font-medium">
          Section 02 · VRIO Analysis
        </span>
        <h2 className="text-5xl font-bold mt-4 tracking-tight text-foreground">Organized</h2>
        <p className="text-muted-foreground mt-4 text-2xl">Is Dexcom organized to exploit these advantages?</p>
      </div>

      <div className="space-y-5.5">
        {/* Organized Points */}
        {vrioAnalysis.organized.map((point, idx) => (
          <div key={idx} className={`animate-fade-up stagger-${idx + 1} p-6 rounded-lg bg-card border-l-4 border-l-primary`}>
            <p className="text-foreground leading-relaxed text-2xl">{point}</p>
          </div>
        ))}

        {/* Assessment */}
        <div className="animate-fade-up stagger-4 mt-3 p-6 rounded-lg bg-primary/10 border border-primary/30">
          <div className="flex items-center gap-6">
            <CheckCircle2 className="w-6 h-6 text-primary" />
            <div>
              <h3 className="text-2xl font-bold text-primary">✓ Organized to Capture Value</h3>
              <p className="text-muted-foreground mt-0.5 text-xl">
                Dexcom has the organizational capabilities to fully exploit its advantages
              </p>
            </div>
          </div>
        </div>

        {/* VRIO Conclusion */}
        <div className="animate-fade-up stagger-5 mt-3 p-6 rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 border-2 border-primary">
          <div className="flex items-start gap-6">
            <Trophy className="w-8 h-8 text-primary flex-shrink-0" />
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-0.5">
                Sustained Competitive Advantage
              </h3>
              <p className="text-muted-foreground leading-relaxed text-xl">
                Dexcom passes all four VRIO criteria, indicating a <span className="text-primary font-semibold">sustained competitive advantage</span> in the CGM market. The combination of valuable, rare, inimitable resources organized effectively creates lasting market leadership.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
