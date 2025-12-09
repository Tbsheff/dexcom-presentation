"use client"

import { consumptionChain1 } from "@/lib/presentation-data"

export function ConsumptionChain1Slide() {
  return (
    <div className="px-12 pt-8 pb-20 h-full flex flex-col">
      <div className="mb-8">
        <span className="text-xl uppercase tracking-[0.3em] text-primary font-medium">
          Section 03 · Consumption Chain Analysis
        </span>
        <h2 className="text-5xl font-bold mt-4 tracking-tight text-foreground">Consumption Chain</h2>
        <p className="text-muted-foreground mt-0.5 text-2xl">Understanding the customer journey</p>
      </div>

      <div className="space-y-6 flex-1">
        {consumptionChain1.map((item, idx) => (
          <div
            key={idx}
            className={`animate-fade-up stagger-${idx + 1} p-5 rounded-lg bg-card border-l-4 border-l-primary`}
          >
            <h3 className="text-xl font-bold text-foreground mb-1">{item.question}</h3>
            <p className="text-2xl text-muted-foreground leading-relaxed">{item.answer}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
