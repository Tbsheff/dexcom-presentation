"use client"

import { industryDefinition } from "@/lib/presentation-data"

export function IndustryDefinitionIntroSlide() {
  return (
    <div className="h-full flex items-center justify-center p-16 bg-gradient-to-br from-background to-muted/20">
      <div className="max-w-5xl mx-auto text-center">
        <span className="text-[11px] uppercase tracking-[0.3em] text-primary font-medium mb-8 block">
          Section 02 · Industry Analysis
        </span>

        <h1 className="text-6xl leading-tight mb-12 animate-fade-up">
          <span className="font-bold text-foreground">Dexcom competes in the </span>
          <span className="font-bold text-primary">global continuous glucose monitoring (CGM) market</span>
          <span className="font-light text-foreground"> within the </span>
          <span className="font-semibold text-foreground">medical device and digital health industry</span>
        </h1>

        <div className="h-1 w-32 bg-primary mx-auto animate-fade-up stagger-1" />
      </div>
    </div>
  )
}
