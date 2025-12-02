"use client"

import { AlertCircle } from "lucide-react"
import { recommendationsSection07 } from "@/lib/presentation-data"

export function Issue1DetailedSlide() {
  return (
    <div className="p-10 pb-24 max-w-6xl mx-auto">
      <div className="mb-6">
        <span className="text-[11px] uppercase tracking-[0.3em] text-primary font-medium">
          Section 07 · Recommendations
        </span>
        <h2 className="text-5xl font-bold mt-2 tracking-tight text-foreground">Issue #1</h2>
        <p className="text-muted-foreground mt-2 text-lg font-medium">{recommendationsSection07.issue1.title}</p>
      </div>

      <div className="space-y-3">
        {/* Issue Points */}
        {recommendationsSection07.issue1.points.map((point, idx) => (
          <div key={idx} className={`animate-fade-up stagger-${idx + 1} p-4 rounded-lg bg-card border-l-4 border-l-amber-500`}>
            <p className="text-foreground leading-relaxed text-sm">{point}</p>
          </div>
        ))}

        {/* Assessment */}
        <div className="animate-fade-up stagger-5 mt-4 p-4 rounded-lg bg-amber-500/10 border border-amber-500/30">
          <div className="flex items-center gap-3">
            <AlertCircle className="w-7 h-7 text-amber-500" />
            <div>
              <h3 className="text-xl font-bold text-amber-500">Critical Issue</h3>
              <p className="text-muted-foreground mt-1 text-sm">
                Dexcom's reliance on Type 1 diabetes market limits growth potential in a competitive landscape
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
