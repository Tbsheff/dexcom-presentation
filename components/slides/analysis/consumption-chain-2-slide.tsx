"use client"

import { consumptionChain2 } from "@/lib/presentation-data"

export function ConsumptionChain2Slide() {
  return (
    <div className="p-8 pb-24 max-w-6xl mx-auto">
      <div className="mb-6">
        <span className="text-[11px] uppercase tracking-[0.3em] text-primary font-medium">
          Section 03 · Consumption Chain Analysis
        </span>
        <h2 className="text-5xl font-bold mt-2 tracking-tight text-foreground">Consumption Chain</h2>
        <p className="text-muted-foreground mt-0.5 text-sm">Understanding the customer journey (continued)</p>
      </div>

      <div className="space-y-1.5">
        {consumptionChain2.map((item, idx) => (
          <div
            key={idx}
            className={`animate-fade-up stagger-${idx + 1} p-2.5 rounded-lg bg-card border-l-4 border-l-primary`}
          >
            <h3 className="text-base font-bold text-foreground mb-1">{item.question}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{item.answer}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
