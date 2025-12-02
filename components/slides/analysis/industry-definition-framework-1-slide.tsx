"use client"

import { Package, Building2, Hash } from "lucide-react"
import { industryDefinition } from "@/lib/presentation-data"

export function IndustryDefinitionFramework1Slide() {
  return (
    <div className="p-8 pb-24 max-w-6xl mx-auto">
      <div className="mb-6">
        <span className="text-[11px] uppercase tracking-[0.3em] text-primary font-medium">
          Section 02 · Industry Analysis
        </span>
        <h2 className="text-5xl font-bold mt-2 tracking-tight text-foreground">
          Industry Definition Framework
        </h2>
        <p className="text-muted-foreground mt-1.5 text-sm">Core business classification and scope</p>
      </div>

      <div className="grid grid-cols-3 gap-3.5">
        {/* Products Column */}
        <div className="animate-fade-up stagger-1 p-3.5 rounded-lg bg-card border border-border">
          <div className="flex items-center gap-2.5 mb-2.5">
            <div className="p-1.5 rounded-lg bg-primary/10">
              <Package className="w-4 h-4 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground text-sm">Products</h3>
          </div>
          <ul className="space-y-1.5 text-[13px] text-muted-foreground">
            {industryDefinition.products.map((product, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>{product}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Business Activities Column */}
        <div className="animate-fade-up stagger-2 p-3.5 rounded-lg bg-card border border-border">
          <div className="flex items-center gap-2.5 mb-2.5">
            <div className="p-1.5 rounded-lg bg-primary/10">
              <Building2 className="w-4 h-4 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground text-sm">Business Activities</h3>
          </div>
          <ul className="space-y-1.5 text-[13px] text-muted-foreground">
            {industryDefinition.businessActivities.map((activity, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>{activity}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* NAICS Code Column */}
        <div className="animate-fade-up stagger-3 p-3.5 rounded-lg bg-card border border-primary/50">
          <div className="flex items-center gap-2.5 mb-2.5">
            <div className="p-1.5 rounded-lg bg-primary/10">
              <Hash className="w-4 h-4 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground text-sm">NAICS Classification</h3>
          </div>
          <div className="mb-6.5">
            <p className="text-2xl font-bold text-primary">{industryDefinition.naicsCode}</p>
          </div>
          <p className="text-[13px] text-muted-foreground leading-relaxed">
            {industryDefinition.naicsDescription}
          </p>
        </div>
      </div>
    </div>
  )
}
