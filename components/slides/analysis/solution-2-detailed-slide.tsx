"use client"

import { CheckCircle2 } from "lucide-react"
import { recommendationsSection07 } from "@/lib/presentation-data"

export function Solution2DetailedSlide() {
  return (
    <div className="p-10 pb-24 max-w-6xl mx-auto">
      <div className="mb-6">
        <span className="text-[11px] uppercase tracking-[0.3em] text-primary font-medium">
          Section 07 · Recommendations
        </span>
        <h2 className="text-5xl font-bold mt-2 tracking-tight text-foreground">Solution #2</h2>
        <p className="text-muted-foreground mt-2 text-lg font-medium">{recommendationsSection07.solution2.title}</p>
      </div>

      <div className="space-y-3">
        {/* Solution Points */}
        {recommendationsSection07.solution2.points.map((point, idx) => (
          <div key={idx} className={`animate-fade-up stagger-${idx + 1} p-4 rounded-lg bg-card border-l-4 border-l-green-500`}>
            <p className="text-foreground leading-relaxed text-sm">{point}</p>
          </div>
        ))}

        {/* Assessment */}
        <div className="animate-fade-up stagger-5 mt-4 p-4 rounded-lg bg-green-500/10 border border-green-500/30">
          <div className="flex items-center gap-3">
            <CheckCircle2 className="w-7 h-7 text-green-500" />
            <div>
              <h3 className="text-xl font-bold text-green-500">Strategic Solution</h3>
              <p className="text-muted-foreground mt-1 text-sm">
                Developing longer-lasting sensors addresses convenience and cost while countering competitive threats
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
