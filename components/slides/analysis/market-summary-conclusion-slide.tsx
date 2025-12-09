"use client"

import { Target, TrendingUp, AlertTriangle, Lightbulb } from "lucide-react"

export function MarketSummaryConclusion() {
  return (
    <div className="px-12 pt-8 pb-20 h-full flex flex-col">
      <div className="mb-8">
        <span className="text-xl uppercase tracking-[0.3em] text-primary font-medium">
          Section 02 · Market Summary
        </span>
        <h2 className="text-5xl font-bold mt-4 tracking-tight text-foreground">Market Position & Outlook</h2>
        <p className="text-muted-foreground mt-4 text-2xl">Strategic synthesis and forward-looking perspective</p>
      </div>

      {/* Main Conclusion Card */}
      <div className="animate-fade-up stagger-1 p-6 rounded-xl bg-gradient-to-br from-primary/30 via-primary/20 to-primary/10 border-2 border-primary shadow-lg">
        <div className="flex items-start gap-6 mb-8">
          <div className="p-2 rounded-full bg-primary/30 border-2 border-primary">
            <Target className="w-6 h-6 text-primary" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-foreground mb-5">Overall Market Assessment</h3>
            <p className="text-2xl text-muted-foreground leading-snug">
              Dexcom operates in an <span className="text-primary font-semibold">attractive, high-growth market</span> with sustainable
              competitive advantages in technology and clinical outcomes. The company's position as the premium CGM provider is well-defended
              by strong R&D capabilities, clinical evidence, and brand reputation. However, success requires navigating intense competition
              from Abbott, managing payer relationships effectively, and preparing for potential disruption from non-invasive technologies.
              The expansion into wellness markets and international geographies offers significant upside, while continued innovation in accuracy,
              ease-of-use, and digital health integration will be critical to maintaining market leadership.
            </p>
          </div>
        </div>

        {/* Key Takeaways Grid */}
        <div className="grid grid-cols-2 gap-5 mt-3">
          <div className="animate-fade-up stagger-2 p-6 rounded-lg bg-card/80 border border-green-500/50">
            <div className="flex items-center gap-5 mb-1.5">
              <Target className="w-4 h-4 text-green-500" />
              <h4 className="font-bold text-foreground text-xl">Key Strengths</h4>
            </div>
            <p className="text-xl text-muted-foreground leading-snug">
              Premium positioning, technology leadership, and strong clinical reputation provide defensible competitive advantages
            </p>
          </div>

          <div className="animate-fade-up stagger-3 p-6 rounded-lg bg-card/80 border border-blue-500/50">
            <div className="flex items-center gap-5 mb-1.5">
              <TrendingUp className="w-4 h-4 text-blue-500" />
              <h4 className="font-bold text-foreground text-xl">Growth Opportunities</h4>
            </div>
            <p className="text-xl text-muted-foreground leading-snug">
              Wellness market expansion and international penetration offer significant upside beyond core diabetes segment
            </p>
          </div>

          <div className="animate-fade-up stagger-4 p-6 rounded-lg bg-card/80 border border-red-500/50">
            <div className="flex items-center gap-5 mb-1.5">
              <AlertTriangle className="w-4 h-4 text-red-500" />
              <h4 className="font-bold text-foreground text-xl">Critical Challenges</h4>
            </div>
            <p className="text-xl text-muted-foreground leading-snug">
              Abbott competition, payer pressure, and emerging non-invasive technologies require strategic attention
            </p>
          </div>

          <div className="animate-fade-up stagger-5 p-6 rounded-lg bg-card/80 border border-primary/50">
            <div className="flex items-center gap-5 mb-1.5">
              <Lightbulb className="w-4 h-4 text-primary" />
              <h4 className="font-bold text-foreground text-xl">Strategic Imperatives</h4>
            </div>
            <p className="text-xl text-muted-foreground leading-snug">
              Innovation, market expansion, and ecosystem integration will be critical for maintaining leadership position
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
