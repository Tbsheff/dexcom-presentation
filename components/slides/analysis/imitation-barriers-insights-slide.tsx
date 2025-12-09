"use client"

import { Lightbulb } from "lucide-react"

export function ImitationBarriersInsightsSlide() {
  const insights = [
    "Dexcom's technology and data accuracy are core defensible advantages that competitors struggle to replicate quickly.",
    "Integration with insulin pumps and digital platforms creates a 'stickiness' effect, making switching costly for users.",
    "Dexcom must innovate on cost, convenience, and wear duration to remain competitive.",
    "Competitors' ecosystem integration and patient loyalty highlight the importance of partnerships and continuous device compatibility.",
  ]

  return (
    <div className="px-12 pt-8 pb-20 h-full flex flex-col">
      <div className="mb-8">
        <span className="text-xl uppercase tracking-[0.3em] text-primary font-medium">
          Section 05 · Key Insights
        </span>
        <h2 className="text-5xl font-bold mt-4 tracking-tight text-foreground">Imitation Barriers: Key Insights</h2>
        <p className="text-muted-foreground mt-4 text-xl">Strategic takeaways from barrier analysis</p>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {insights.map((insight, idx) => (
          <div
            key={idx}
            className={`animate-fade-up stagger-${idx + 1} p-6 rounded-lg bg-gradient-to-br from-primary/5 to-primary/10 border-2 border-primary/20 hover:border-primary/40 transition-colors`}
          >
            <div className="flex items-start gap-5">
              <Lightbulb className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
              <p className="text-foreground leading-snug font-medium text-2xl">{insight}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
