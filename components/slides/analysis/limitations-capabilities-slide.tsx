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
    <div className="px-12 pt-8 pb-20 h-full flex flex-col">
      <div className="mb-8">
        <span className="text-xl uppercase tracking-[0.3em] text-red-500 font-medium">
          Section 04 · Limitations
        </span>
        <h2 className="text-5xl font-bold mt-4 tracking-tight text-foreground">Limitations of Capabilities</h2>
        <p className="text-muted-foreground mt-4 text-xl">Operational constraints and capability gaps</p>
      </div>

      <div className="space-y-5.5">
        {limitations.map((limitation, idx) => (
          <div
            key={idx}
            className={`animate-fade-up stagger-${idx + 1} p-6 rounded-lg bg-card border-2 border-red-200 dark:border-red-900/30`}
          >
            <div className="flex items-start gap-6">
              <limitation.icon className={`w-5 h-5 ${limitation.color} flex-shrink-0 mt-0.5`} />
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-0.5">{limitation.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-2xl">{limitation.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
