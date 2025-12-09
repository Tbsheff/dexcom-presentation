"use client"

import { consumptionChainTakeaways2 } from "@/lib/presentation-data"
import { Package } from "lucide-react"

export function ConsumptionChainTakeaways2Slide() {
  return (
    <div className="px-12 pt-8 pb-20 h-full flex flex-col">
      <div className="mb-8">
        <span className="text-xl uppercase tracking-[0.3em] text-primary font-medium">
          Section 03 · Consumption Chain Analysis
        </span>
        <h2 className="text-5xl font-bold mt-4 tracking-tight text-foreground">Consumption Chain Takeaways</h2>
        <p className="text-2xl font-semibold text-green-500 mt-0.5">{consumptionChainTakeaways2.category}</p>
      </div>

      <div className="space-y-5 flex-1">
        {consumptionChainTakeaways2.takeaways.map((takeaway, idx) => (
          <div
            key={idx}
            className={`animate-fade-up stagger-${idx + 1} p-6 rounded-lg bg-card border-2 border-green-500`}
          >
            <div className="flex items-start gap-6">
              <Package className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-xl font-bold text-foreground mb-1">{takeaway.title}</h3>
                <p className="text-2xl text-muted-foreground leading-relaxed">{takeaway.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
