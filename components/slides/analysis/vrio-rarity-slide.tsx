"use client"

import { CheckCircle2 } from "lucide-react"
import { vrioAnalysis } from "@/lib/presentation-data"

export function VrioRaritySlide() {
  return (
    <div className="px-12 pt-8 pb-20 h-full flex flex-col">
      <div className="mb-8">
        <span className="text-xl uppercase tracking-[0.3em] text-primary font-medium">
          Section 02 · VRIO Analysis
        </span>
        <h2 className="text-5xl font-bold mt-4 tracking-tight text-foreground">Rarity</h2>
        <p className="text-muted-foreground mt-4 text-2xl">Is Dexcom's value creation rare among competitors?</p>
      </div>

      <div className="space-y-6 flex-1">
        {/* Rarity Points */}
        {vrioAnalysis.rarity.map((point, idx) => (
          <div key={idx} className={`animate-fade-up stagger-${idx + 1} p-6 rounded-lg bg-card border-l-4 border-l-blue-500`}>
            <p className="text-foreground leading-relaxed text-2xl">{point}</p>
          </div>
        ))}

        {/* Assessment */}
        <div className="animate-fade-up stagger-4 mt-4 p-6 rounded-lg bg-blue-500/10 border border-blue-500/30">
          <div className="flex items-center gap-6">
            <CheckCircle2 className="w-7 h-7 text-blue-500" />
            <div>
              <h3 className="text-xl font-bold text-blue-500">✓ Rare</h3>
              <p className="text-muted-foreground mt-4 text-2xl">
                Dexcom possesses uncommon capabilities that few competitors can match
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
