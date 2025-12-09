"use client"

import { valueChainSupport } from "@/lib/presentation-data"

export function ValueChainSupportSlide() {
  return (
    <div className="px-12 pt-8 pb-20 h-full flex flex-col">
      <div className="mb-8">
        <span className="text-2xl uppercase tracking-[0.3em] text-primary font-medium">
          Section 03 · Value Chain Analysis
        </span>
        <h2 className="text-5xl font-bold mt-4 tracking-tight text-foreground">Company Value Chain</h2>
        <p className="text-xl font-semibold text-primary mt-0.5">Support Activities</p>
      </div>

      <div className="space-y-5 flex-1">
        {valueChainSupport.map((activity, idx) => (
          <div
            key={idx}
            className={`animate-fade-up stagger-${idx + 1} p-5 rounded-lg bg-card border-l-4 border-l-blue-500`}
          >
            <h3 className="text-xl font-bold text-foreground mb-1">{activity.title}</h3>
            <div className="space-y-1">
              {activity.items.map((item, itemIdx) => (
                <div key={itemIdx}>
                  <p className="text-2xl font-semibold text-foreground">{item.subtitle}</p>
                  <p className="text-2xl text-muted-foreground leading-snug">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
