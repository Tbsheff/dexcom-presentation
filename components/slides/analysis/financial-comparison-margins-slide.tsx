"use client"

import { competitorFinancials } from "@/lib/presentation-data"
import { Percent, TrendingUp } from "lucide-react"

export function FinancialComparisonMarginsSlide() {
  const industryAvg = competitorFinancials.operatingMargins.industryAverage
  const dexcomMargin = competitorFinancials.operatingMargins.dexcom

  return (
    <div className="px-12 pt-8 pb-20 h-full flex flex-col">
      <div className="mb-8">
        <span className="text-xl uppercase tracking-[0.3em] text-primary font-medium">
          Section 02 · Financial Analysis
        </span>
        <h2 className="text-5xl font-bold mt-4 tracking-tight text-foreground">Operating Margins</h2>
        <p className="text-muted-foreground mt-4 text-2xl">Profitability comparison across the industry</p>
      </div>

      <div className="space-y-5 flex-1">
        {/* Industry Average */}
        <div className="animate-fade-up stagger-1">
          <div className="flex items-center gap-5 mb-1.5">
            <Percent className="w-4 h-4 text-muted-foreground" />
            <h3 className="text-2xl font-bold text-foreground">Industry Average</h3>
          </div>
          <div className="relative h-12 bg-muted rounded-lg overflow-hidden">
            <div
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-blue-500 to-blue-400 flex items-center justify-end pr-3"
              style={{ width: `${industryAvg}%` }}
            >
              <span className="text-xl font-bold text-white">{industryAvg}%</span>
            </div>
          </div>
          <p className="text-xl text-muted-foreground mt-4">
            The CGM industry maintains healthy margins due to high R&D barriers and specialized manufacturing
          </p>
        </div>

        {/* Dexcom Performance */}
        <div className="animate-fade-up stagger-2">
          <div className="flex items-center gap-5 mb-1.5">
            <TrendingUp className="w-4 h-4 text-primary" />
            <h3 className="text-2xl font-bold text-foreground">Dexcom</h3>
          </div>
          <div className="relative h-12 bg-muted rounded-lg overflow-hidden">
            <div
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary to-primary/80 flex items-center justify-end pr-3"
              style={{ width: `${dexcomMargin}%` }}
            >
              <span className="text-xl font-bold text-white">{dexcomMargin}%</span>
            </div>
          </div>
          <p className="text-xl text-muted-foreground mt-4">
            Dexcom's margins are competitive with industry averages, reflecting balanced investment in innovation and operational efficiency
          </p>
        </div>

        {/* Detailed Comparison */}
        <div className="animate-fade-up stagger-3 grid grid-cols-2 gap-6 mt-3">
          <div className="p-5 rounded-lg bg-card border border-border">
            <h4 className="font-semibold text-foreground mb-1.5 flex items-center gap-5 text-2xl">
              <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
              Margin Strengths
            </h4>
            <ul className="space-y-1 text-xl text-muted-foreground">
              <li>• Premium product positioning allows higher pricing</li>
              <li>• Strong gross margins from proprietary sensor technology</li>
              <li>• Economies of scale as production volumes increase</li>
              <li>• High customer retention reduces acquisition costs</li>
            </ul>
          </div>

          <div className="p-5 rounded-lg bg-card border border-border">
            <h4 className="font-semibold text-foreground mb-1.5 flex items-center gap-5 text-2xl">
              <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
              Investment Priorities
            </h4>
            <ul className="space-y-1 text-xl text-muted-foreground">
              <li>• Significant R&D investment (15-20% of revenue)</li>
              <li>• Clinical trial expenses for new products and indications</li>
              <li>• Sales and marketing to drive adoption</li>
              <li>• Manufacturing capacity expansion</li>
            </ul>
          </div>
        </div>

        {/* Key Insight */}
        <div className="animate-fade-up stagger-4 p-5 rounded-lg bg-primary/10 border border-primary/30">
          <p className="text-foreground leading-relaxed text-xl">
            <span className="font-semibold text-primary">Key Insight:</span> Dexcom maintains healthy margins
            while investing heavily in innovation. This balanced approach supports both current profitability and
            future growth, positioning the company well against competitors who may prioritize one over the other.
          </p>
        </div>
      </div>
    </div>
  )
}
