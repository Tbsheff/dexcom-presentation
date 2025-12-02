"use client"

import { consumptionChain1 } from "@/lib/presentation-data"

export function ConsumptionChain1Slide() {
  return (
    <div className="p-10 pb-24 max-w-6xl mx-auto">
      <div className="mb-6">
        <span className="text-[11px] uppercase tracking-[0.3em] text-primary font-medium">
          Section 03 · Consumption Chain Analysis
        </span>
        <h2 className="text-5xl font-bold mt-2 tracking-tight text-foreground">Consumption Chain</h2>
        <p className="text-muted-foreground mt-1 text-sm">Understanding the customer journey</p>
      </div>

      <div className="space-y-3">
        {consumptionChain1.map((item, idx) => (
          <div
            key={idx}
            className={`animate-fade-up stagger-${idx + 1} p-4 rounded-lg bg-card border-l-4 border-l-primary`}
          >
            <h3 className="text-lg font-bold text-foreground mb-2">{item.question}</h3>
            <p className="text-muted-foreground leading-relaxed">{item.answer}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
