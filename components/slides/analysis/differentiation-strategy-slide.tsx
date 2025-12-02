"use client"

import { CheckCircle2 } from "lucide-react"
import { differentiationFeatures } from "@/lib/presentation-data"

export function DifferentiationStrategySlide() {
  return (
    <div className="p-10 pb-24 max-w-6xl mx-auto">
      <div className="mb-6">
        <span className="text-[11px] uppercase tracking-[0.3em] text-primary font-medium">
          Section 03 · Unique Value
        </span>
        <h2 className="text-5xl font-bold mt-2 tracking-tight text-foreground">Differentiation Strategy</h2>
        <p className="text-muted-foreground mt-2">
          How Dexcom creates unique value through superior features and brand positioning
        </p>
      </div>

      <div className="space-y-6">
        {/* Superior Features */}
        <div className="animate-fade-up stagger-1">
          <h3 className="text-2xl font-bold text-foreground mb-3">Superior Features</h3>
          <div className="grid gap-3">
            {differentiationFeatures.superiorFeatures.map((item, idx) => (
              <div key={idx} className="p-4 rounded-lg bg-card border-l-4 border-l-primary">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-foreground">{item.feature}</h4>
                    <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Brand/Image */}
        <div className="animate-fade-up stagger-2">
          <h3 className="text-2xl font-bold text-foreground mb-3">Brand/Image</h3>
          <div className="grid gap-3">
            {differentiationFeatures.brandAttributes.map((item, idx) => (
              <div key={idx} className="p-4 rounded-lg bg-card border-l-4 border-l-primary">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-foreground">{item.attribute}</h4>
                    <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Insight */}
        <div className="animate-fade-up stagger-3 p-4 rounded-lg bg-primary/5 border border-primary/20">
          <h4 className="font-bold text-foreground mb-2">Strategic Insight</h4>
          <p className="text-sm text-muted-foreground">
            Dexcom's differentiation strategy combines technical superiority (accuracy, integration, convenience) with
            strong brand equity (clinical trust, premium positioning) to create a defensible competitive advantage in
            the CGM market.
          </p>
        </div>
      </div>
    </div>
  )
}
