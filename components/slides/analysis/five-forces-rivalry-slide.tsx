"use client"

import { fiveForcesDetailed } from "@/lib/presentation-data"
import { Swords } from "lucide-react"

export function FiveForcesRivalrySlide() {
  const rivalry = fiveForcesDetailed.competitiveRivalry

  const getRatingColor = (rating: string) => {
    if (rating === "HIGH") return "bg-red-500"
    if (rating === "MODERATE") return "bg-amber-500"
    return "bg-green-500"
  }

  return (
    <div className="px-12 pt-8 pb-20 h-full flex flex-col">
      <div className="mb-8">
        <span className="text-xl uppercase tracking-[0.3em] text-primary font-medium">
          Section 02 · Porter's Five Forces
        </span>
        <h2 className="text-5xl font-bold mt-4 tracking-tight text-foreground">Competitive Rivalry</h2>
        <p className="text-muted-foreground mt-4 text-2xl">Intensity of competition in the CGM market</p>
      </div>

      <div className="flex gap-6 flex-1">
        <div className="flex-1 space-y-5 flex-1">
          {rivalry.points.map((point, idx) => (
            <div
              key={idx}
              className={`animate-fade-up stagger-${idx + 1} p-5 rounded-lg bg-card border-l-4 border-l-red-500`}
            >
              <p className="text-foreground text-2xl leading-snug">{point}</p>
            </div>
          ))}
        </div>

        <div className="w-64 space-y-6 flex-1">
          <div className="animate-fade-up stagger-1 p-6 rounded-lg bg-card border border-border sticky top-16">
            <div className="flex items-center gap-5 mb-8">
              <Swords className="w-6 h-6 text-red-500" />
              <div>
                <h3 className="text-xl uppercase tracking-wide text-muted-foreground">Force Rating</h3>
                <div className="flex items-center gap-5 mt-0.5">
                  <span className={`px-2 py-0.5 rounded-full text-white text-xl font-bold ${getRatingColor(rivalry.rating)}`}>
                    {rivalry.rating}
                  </span>
                </div>
              </div>
            </div>
            <div className="h-px bg-border my-2" />
            <p className="text-xl text-muted-foreground leading-relaxed">
              The CGM market is characterized by <span className="font-semibold text-foreground">intense competition</span> between
              well-funded players fighting for market share. This drives rapid innovation but also creates pricing pressure and high
              marketing costs.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
