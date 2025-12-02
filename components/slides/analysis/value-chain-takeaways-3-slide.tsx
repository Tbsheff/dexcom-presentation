"use client"

import { valueChainTakeaways3 } from "@/lib/presentation-data"
import { Rocket } from "lucide-react"

export function ValueChainTakeaways3Slide() {
  return (
    <div className="p-10 pb-24 max-w-6xl mx-auto">
      <div className="mb-6">
        <span className="text-[11px] uppercase tracking-[0.3em] text-primary font-medium">
          Section 03 · Value Chain Analysis
        </span>
        <h2 className="text-5xl font-bold mt-2 tracking-tight text-foreground">Takeaways from the Value Chain</h2>
        <p className="text-xl font-semibold text-purple-500 mt-1">{valueChainTakeaways3.category}</p>
      </div>

      <div className="space-y-4">
        {valueChainTakeaways3.takeaways.map((takeaway, idx) => (
          <div
            key={idx}
            className={`animate-fade-up stagger-${idx + 1} p-5 rounded-lg bg-card border-2 border-purple-500`}
          >
            <div className="flex items-start gap-3">
              <Rocket className="w-6 h-6 text-purple-500 flex-shrink-0 mt-1" />
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
