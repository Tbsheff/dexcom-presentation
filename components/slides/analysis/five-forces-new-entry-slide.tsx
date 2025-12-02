"use client"

import { fiveForcesDetailed } from "@/lib/presentation-data"
import { Shield } from "lucide-react"

export function FiveForcesNewEntrySlide() {
  const newEntry = fiveForcesDetailed.threatOfNewEntry

  const getRatingColor = (rating: string) => {
    if (rating === "HIGH") return "bg-red-500"
    if (rating === "MODERATE") return "bg-amber-500"
    return "bg-green-500"
  }

  return (
    <div className="p-6 pb-20 max-w-6xl mx-auto">
      <div className="mb-6">
        <span className="text-[11px] uppercase tracking-[0.3em] text-primary font-medium">
          Section 02 · Porter's Five Forces
        </span>
        <h2 className="text-5xl font-bold mt-2 tracking-tight text-foreground">Threat of New Entry</h2>
        <p className="text-muted-foreground mt-2 text-sm">Barriers to entry and likelihood of new competitors</p>
      </div>

      <div className="flex gap-3">
        <div className="flex-1 space-y-2">
          {newEntry.points.map((point, idx) => (
            <div
              key={idx}
              className={`animate-fade-up stagger-${idx + 1} p-2.5 rounded-lg bg-card border-l-4 border-l-green-500`}
            >
              <p className="text-foreground text-sm leading-snug">{point}</p>
            </div>
          ))}
        </div>

        <div className="w-64 space-y-3">
          <div className="animate-fade-up stagger-1 p-3 rounded-lg bg-card border border-border sticky top-16">
            <div className="flex items-center gap-2 mb-3">
              <Shield className="w-6 h-6 text-green-500" />
              <div>
                <h3 className="text-xs uppercase tracking-wide text-muted-foreground">Force Rating</h3>
                <div className="flex items-center gap-2 mt-0.5">
                  <span className={`px-2 py-0.5 rounded-full text-white text-xs font-bold ${getRatingColor(newEntry.rating)}`}>
                    {newEntry.rating}
                  </span>
                </div>
              </div>
            </div>
            <div className="h-px bg-border my-2" />
            <p className="text-xs text-muted-foreground leading-relaxed">
              The threat of new entrants is <span className="font-semibold text-foreground">low</span> due to substantial regulatory,
              technical, and financial barriers. The CGM market is well-defended by incumbent players with established relationships
              and proven track records.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
