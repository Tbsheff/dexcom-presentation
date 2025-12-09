"use client"

import { Package, Building2, Hash } from "lucide-react"
import { industryDefinition } from "@/lib/presentation-data"

export function IndustryDefinitionFramework1Slide() {
  return (
    <div className="px-12 pt-8 pb-20 h-full flex flex-col">
      <div className="mb-8">
        <span className="text-xl uppercase tracking-[0.3em] text-primary font-medium">
          Section 02 · Industry Analysis
        </span>
        <h2 className="text-5xl font-bold mt-4 tracking-tight text-foreground">
          Industry Definition Framework
        </h2>
        <p className="text-muted-foreground mt-3 text-2xl">Core business classification and scope</p>
      </div>

      <div className="grid grid-cols-3 gap-6.5">
        {/* Products Column */}
        <div className="animate-fade-up stagger-1 p-6.5 rounded-lg bg-card border border-border">
          <div className="flex items-center gap-6 mb-8">
            <div className="p-1.5 rounded-lg bg-primary/10">
              <Package className="w-4 h-4 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground text-2xl">Products</h3>
          </div>
          <ul className="space-y-6 text-[13px] text-muted-foreground">
            {industryDefinition.products.map((product, idx) => (
              <li key={idx} className="flex items-start gap-5">
                <span className="text-primary mt-4">•</span>
                <span>{product}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Business Activities Column */}
        <div className="animate-fade-up stagger-2 p-6.5 rounded-lg bg-card border border-border">
          <div className="flex items-center gap-6 mb-8">
            <div className="p-1.5 rounded-lg bg-primary/10">
              <Building2 className="w-4 h-4 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground text-2xl">Business Activities</h3>
          </div>
          <ul className="space-y-6 text-[13px] text-muted-foreground">
            {industryDefinition.businessActivities.map((activity, idx) => (
              <li key={idx} className="flex items-start gap-5">
                <span className="text-primary mt-4">•</span>
                <span>{activity}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* NAICS Code Column */}
        <div className="animate-fade-up stagger-3 p-6.5 rounded-lg bg-card border border-primary/50">
          <div className="flex items-center gap-6 mb-8">
            <div className="p-1.5 rounded-lg bg-primary/10">
              <Hash className="w-4 h-4 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground text-2xl">NAICS Classification</h3>
          </div>
          <div className="mb-8.5">
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
