"use client"

import { valueChainTakeaways2 } from "@/lib/presentation-data"
import { TrendingUp } from "lucide-react"

export function ValueChainTakeaways2Slide() {
  return (
    <div className="p-10 pb-24 max-w-6xl mx-auto">
      <div className="mb-6">
        <span className="text-[11px] uppercase tracking-[0.3em] text-primary font-medium">
          Section 03 · Value Chain Analysis
        </span>
        <h2 className="text-5xl font-bold mt-2 tracking-tight text-foreground">Takeaways from the Value Chain</h2>
        <p className="text-xl font-semibold text-green-500 mt-1">{valueChainTakeaways2.category}</p>
      </div>

      <div className="space-y-4">
        {valueChainTakeaways2.takeaways.map((takeaway, idx) => (
          <div
            key={idx}
            className={`animate-fade-up stagger-${idx + 1} p-5 rounded-lg bg-card border-2 border-green-500`}
          >
            <div className="flex items-start gap-3">
              <TrendingUp className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">{takeaway.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{takeaway.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
