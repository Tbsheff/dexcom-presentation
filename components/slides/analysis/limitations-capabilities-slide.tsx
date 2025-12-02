"use client"

import { Clock, Link2, TrendingDown } from "lucide-react"

export function LimitationsCapabilitiesSlide() {
  const limitations = [
    {
      title: "R&D Speed vs. Regulatory Approval Timeline",
      description: "Even if Dexcom innovates fast, FDA approval can slow down releasing new technology. Any regulatory issues can weaken competitive advantage.",
      icon: Clock,
      color: "text-orange-500",
    },
    {
      title: "Partnerships Can Create Dependency",
      description: "If an insulin pump partner fails or changes strategy, Dexcom loses integration points.",
      icon: Link2,
      color: "text-yellow-600",
    },
    {
      title: "Limited Direct-to-Consumer Experience",
      description: "Competing with Fitbit, Oura, and Apple requires marketing capabilities that Dexcom hasn't explored until recent years.",
      icon: TrendingDown,
      color: "text-red-500",
    },
  ]

  return (
    <div className="p-8 pb-20 max-w-6xl mx-auto">
      <div className="mb-6">
        <span className="text-[11px] uppercase tracking-[0.3em] text-red-500 font-medium">
          Section 04 · Limitations
        </span>
        <h2 className="text-5xl font-bold mt-2 tracking-tight text-foreground">Limitations of Capabilities</h2>
        <p className="text-muted-foreground mt-1 text-xs">Operational constraints and capability gaps</p>
      </div>

      <div className="space-y-2.5">
        {limitations.map((limitation, idx) => (
          <div
            key={idx}
            className={`animate-fade-up stagger-${idx + 1} p-3 rounded-lg bg-card border-2 border-red-200 dark:border-red-900/30`}
          >
            <div className="flex items-start gap-2.5">
              <limitation.icon className={`w-5 h-5 ${limitation.color} flex-shrink-0 mt-0.5`} />
              <div>
                <h3 className="text-lg font-bold text-foreground mb-0.5">{limitation.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{limitation.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
