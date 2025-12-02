"use client"

import { consumptionChainTakeaways1 } from "@/lib/presentation-data"
import { ShoppingCart } from "lucide-react"

export function ConsumptionChainTakeaways1Slide() {
  return (
    <div className="p-10 pb-24 max-w-6xl mx-auto">
      <div className="mb-6">
        <span className="text-[11px] uppercase tracking-[0.3em] text-primary font-medium">
          Section 03 · Consumption Chain Analysis
        </span>
        <h2 className="text-5xl font-bold mt-2 tracking-tight text-foreground">Consumption Chain Takeaways</h2>
        <p className="text-xl font-semibold text-blue-500 mt-1">{consumptionChainTakeaways1.category}</p>
      </div>

      <div className="space-y-4">
        {consumptionChainTakeaways1.takeaways.map((takeaway, idx) => (
          <div
            key={idx}
            className={`animate-fade-up stagger-${idx + 1} p-5 rounded-lg bg-card border-2 border-blue-500`}
          >
            <div className="flex items-start gap-3">
              <ShoppingCart className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
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
