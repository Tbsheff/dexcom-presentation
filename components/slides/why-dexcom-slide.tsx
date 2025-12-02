"use client"

import { Zap, Network, Award, TrendingUp } from "lucide-react"
import { SlideHeader, SlideTitle } from "@/components/ui"

export function WhyDexcomSlide() {
  const pillars = [
    {
      icon: Zap,
      title: "Product Features",
      stat: "30 min",
      statLabel: "warmup time",
      items: ["No fingerstick calibration", "Industry-leading accuracy", "10-day sensor wear"],
      color: "#58A618",
    },
    {
      icon: Network,
      title: "Connected Ecosystem",
      stat: "3",
      statLabel: "pump partners",
      items: ["Tandem, Omnipod, Beta Bionics", "Health app integrations", "Real-time data sharing"],
      color: "#3B82F6",
    },
    {
      icon: Award,
      title: "Brand Trust",
      stat: "#1",
      statLabel: "physician choice",
      items: ["Endocrinologist preferred", "Premium positioning", "Clinical evidence base"],
      color: "#8B5CF6",
    },
  ]

  return (
    <div className="px-12 pt-8 pb-20 h-full flex flex-col">
      <div className="flex items-start justify-between mb-8">
        <div>
          <SlideHeader>Value Proposition</SlideHeader>
          <SlideTitle>Why Dexcom Wins</SlideTitle>
        </div>
        <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
          <TrendingUp className="w-5 h-5 text-primary" />
          <span className="text-sm font-semibold text-primary">Market Leader in CGM</span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6 mb-8">
        {pillars.map((pillar, idx) => {
          const Icon = pillar.icon
          return (
            <div
              key={idx}
              className={`animate-fade-up stagger-${idx + 1} rounded-xl bg-card border border-border overflow-hidden`}
            >
              <div
                className="h-1.5"
                style={{ backgroundColor: pillar.color }}
              />
              <div className="p-6">
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: `${pillar.color}15` }}
                  >
                    <Icon className="w-5 h-5" style={{ color: pillar.color }} />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{pillar.title}</h3>
                </div>

                <div className="mb-5 pb-5 border-b border-border">
                  <div className="text-4xl font-bold" style={{ color: pillar.color }}>
                    {pillar.stat}
                  </div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wide">
                    {pillar.statLabel}
                  </div>
                </div>

                <ul className="space-y-2.5">
                  {pillar.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                      <div
                        className="w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ backgroundColor: pillar.color }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )
        })}
      </div>

      <div className="animate-fade-up stagger-4 rounded-xl bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border border-primary/20 p-6">
        <div className="flex items-center justify-between">
          <p className="text-xl text-foreground">
            <span className="font-bold text-primary">"The most connected CGM system in the world"</span>
            <span className="text-muted-foreground ml-3">— Trusted by patients and physicians</span>
          </p>
          <div className="flex gap-6 text-sm">
            <div className="text-center">
              <div className="font-bold text-foreground text-lg">2M+</div>
              <div className="text-muted-foreground">Active users</div>
            </div>
            <div className="text-center">
              <div className="font-bold text-foreground text-lg">100+</div>
              <div className="text-muted-foreground">Countries</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
