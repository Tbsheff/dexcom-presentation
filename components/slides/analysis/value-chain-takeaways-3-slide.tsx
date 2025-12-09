"use client"

import { valueChainTakeaways3 } from "@/lib/presentation-data"
import { Rocket } from "lucide-react"

export function ValueChainTakeaways3Slide() {
  return (
    <div className="px-12 pt-8 pb-20 h-full flex flex-col">
      <div className="mb-8">
        <span className="text-2xl uppercase tracking-[0.3em] text-primary font-medium">
          Section 03 · Value Chain Analysis
        </span>
        <h2 className="text-5xl font-bold mt-4 tracking-tight text-foreground">Takeaways from the Value Chain</h2>
        <p className="text-xl font-semibold text-purple-500 mt-0.5">{valueChainTakeaways3.category}</p>
      </div>

      <div className="space-y-5 flex-1">
        {valueChainTakeaways3.takeaways.map((takeaway, idx) => (
          <div
            key={idx}
            className={`animate-fade-up stagger-${idx + 1} p-5 rounded-lg bg-card border-2 border-purple-500`}
          >
            <div className="flex items-start gap-5">
              <Rocket className="w-4 h-4 text-purple-500 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-xl font-bold text-foreground mb-1">{takeaway.title}</h3>
                <p className="text-2xl text-muted-foreground leading-snug">{takeaway.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
