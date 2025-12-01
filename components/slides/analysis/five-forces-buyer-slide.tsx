"use client"

import { fiveForcesDetailed } from "@/lib/presentation-data"
import { Users } from "lucide-react"

export function FiveForcesBuyerSlide() {
  const buyer = fiveForcesDetailed.buyerPower

  const getRatingColor = (rating: string) => {
    if (rating === "HIGH") return "bg-red-500"
    if (rating === "MODERATE") return "bg-amber-500"
    return "bg-green-500"
  }

  return (
    <div className="p-12 pb-28 max-w-6xl mx-auto">
      <div className="mb-8">
        <span className="text-[11px] uppercase tracking-[0.3em] text-primary font-medium">
          Section 02 · Porter's Five Forces
        </span>
        <h2 className="text-5xl font-bold mt-2 tracking-tight text-foreground">Buyer Power</h2>
        <p className="text-muted-foreground mt-2">Bargaining power of customers and payers</p>
      </div>

      <div className="flex gap-8">
        <div className="flex-1 space-y-6">
          {buyer.points.map((point, idx) => (
            <div
              key={idx}
              className={`animate-fade-up stagger-${idx + 1} p-6 rounded-lg bg-card border-l-4 border-l-blue-500`}
            >
              <p className="text-foreground leading-relaxed">{point}</p>
            </div>
          ))}
        </div>

        <div className="w-80 space-y-6">
          <div className="animate-fade-up stagger-1 p-6 rounded-lg bg-card border border-border sticky top-16">
            <div className="flex items-center gap-3 mb-4">
              <Users className="w-8 h-8 text-blue-500" />
              <div>
                <h3 className="text-sm uppercase tracking-wide text-muted-foreground">Force Rating</h3>
                <div className="flex items-center gap-2 mt-1">
                  <span className={`px-3 py-1 rounded-full text-white text-sm font-bold ${getRatingColor(buyer.rating)}`}>
                    {buyer.rating}
                  </span>
                </div>
              </div>
            </div>
            <div className="h-px bg-border my-4" />
            <p className="text-sm text-muted-foreground leading-relaxed">
              Buyer power is <span className="font-semibold text-foreground">moderate-to-high</span>, driven by insurance companies
              and healthcare systems that negotiate pricing. However, physician recommendations and superior clinical outcomes
              provide some defense against pure price competition.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
