"use client"

import { valueChainSupport } from "@/lib/presentation-data"

export function ValueChainSupportSlide() {
  return (
    <div className="p-6 pb-20 max-w-6xl mx-auto">
      <div className="mb-6">
        <span className="text-[10px] uppercase tracking-[0.3em] text-primary font-medium">
          Section 03 · Value Chain Analysis
        </span>
        <h2 className="text-5xl font-bold mt-2 tracking-tight text-foreground">Company Value Chain</h2>
        <p className="text-base font-semibold text-primary mt-0.5">Support Activities</p>
      </div>

      <div className="space-y-2">
        {valueChainSupport.map((activity, idx) => (
          <div
            key={idx}
            className={`animate-fade-up stagger-${idx + 1} p-2.5 rounded-lg bg-card border-l-4 border-l-blue-500`}
          >
            <h3 className="text-base font-bold text-foreground mb-1">{activity.title}</h3>
            <div className="space-y-1">
              {activity.items.map((item, itemIdx) => (
                <div key={itemIdx}>
                  <p className="text-sm font-semibold text-foreground">{item.subtitle}</p>
                  <p className="text-sm text-muted-foreground leading-snug">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
