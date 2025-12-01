"use client"

import { Target, Users } from "lucide-react"
import { industryDefinition } from "@/lib/presentation-data"

export function IndustryDefinitionFramework2Slide() {
  return (
    <div className="p-12 pb-28 max-w-6xl mx-auto">
      <div className="mb-8">
        <span className="text-[11px] uppercase tracking-[0.3em] text-primary font-medium">
          Section 02 · Industry Analysis
        </span>
        <h2 className="text-5xl font-bold mt-2 tracking-tight text-foreground">
          Jobs-to-be-Done & Customer Segments
        </h2>
        <p className="text-muted-foreground mt-2">Customer needs and target markets</p>
      </div>

      <div className="grid grid-cols-2 gap-8">
        {/* Jobs to be Done Column */}
        <div className="animate-fade-up stagger-1 space-y-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-lg bg-primary/10">
              <Target className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-2xl font-semibold text-foreground">Jobs to be Done</h3>
          </div>

          {/* Functional */}
          <div className="p-5 rounded-lg bg-card border border-border">
            <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
              <span className="text-blue-500">Functional</span>
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {industryDefinition.jobsToBeDone.functional.map((job, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>{job}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="p-5 rounded-lg bg-card border border-border">
            <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
              <span className="text-green-500">Social</span>
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {industryDefinition.jobsToBeDone.social.map((job, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>{job}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Emotional */}
          <div className="p-5 rounded-lg bg-card border border-border">
            <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
              <span className="text-amber-500">Emotional</span>
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {industryDefinition.jobsToBeDone.emotional.map((job, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-amber-500 mt-1">•</span>
                  <span>{job}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Customer Segments Column */}
        <div className="animate-fade-up stagger-2">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-lg bg-primary/10">
              <Users className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-2xl font-semibold text-foreground">Customer Segments</h3>
          </div>

          <div className="p-6 rounded-lg bg-card border border-border h-[calc(100%-4rem)]">
            <ul className="space-y-4 text-muted-foreground">
              {industryDefinition.customerSegments.map((segment, idx) => (
                <li key={idx} className="flex items-start gap-3 p-4 rounded-lg bg-muted/30">
                  <span className="text-primary font-bold mt-0.5">{idx + 1}</span>
                  <span className="text-sm leading-relaxed">{segment}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
