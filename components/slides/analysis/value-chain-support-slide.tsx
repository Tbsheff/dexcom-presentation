"use client"

import { valueChainSupport } from "@/lib/presentation-data"

export function ValueChainSupportSlide() {
  return (
    <div className="p-10 pb-24 max-w-6xl mx-auto">
      <div className="mb-6">
        <span className="text-[11px] uppercase tracking-[0.3em] text-primary font-medium">
          Section 03 · Value Chain Analysis
        </span>
        <h2 className="text-5xl font-bold mt-2 tracking-tight text-foreground">Company Value Chain</h2>
        <p className="text-xl font-semibold text-primary mt-1">Support Activities</p>
      </div>

      <div className="space-y-3">
        {valueChainSupport.map((activity, idx) => (
          <div
            key={idx}
            className={`animate-fade-up stagger-${idx + 1} p-4 rounded-lg bg-card border-l-4 border-l-blue-500`}
          >
            <h3 className="text-xl font-bold text-foreground mb-2">{activity.title}</h3>
            <div className="space-y-2">
              {activity.items.map((item, itemIdx) => (
                <div key={itemIdx}>
                  <p className="text-base font-semibold text-foreground">{item.subtitle}</p>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
