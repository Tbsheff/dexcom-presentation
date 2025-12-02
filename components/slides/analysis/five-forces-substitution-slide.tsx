"use client"

import { fiveForcesDetailed } from "@/lib/presentation-data"
import { RefreshCw, AlertTriangle } from "lucide-react"

export function FiveForcesSubstitutionSlide() {
  const substitution = fiveForcesDetailed.threatOfSubstitution

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
        <h2 className="text-5xl font-bold mt-2 tracking-tight text-foreground">Threat of Substitution</h2>
        <p className="text-muted-foreground mt-1 text-sm">Risk from alternative glucose monitoring methods</p>
      </div>

      <div className="flex gap-3">
        <div className="flex-1 space-y-2">
          {substitution.points.map((point, idx) => (
            <div
              key={idx}
              className={`animate-fade-up stagger-${idx + 1} p-3 rounded-lg bg-card border-l-4 border-l-purple-500`}
            >
              <p className="text-foreground leading-snug text-sm">{point}</p>
            </div>
          ))}

          {/* Emphasis Box */}
          <div className="animate-fade-up stagger-4 p-3 rounded-lg bg-gradient-to-br from-purple-500/20 to-purple-500/5 border-2 border-purple-500">
            <div className="flex items-start gap-2.5">
              <AlertTriangle className="w-6 h-6 text-purple-500 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-lg font-bold text-foreground mb-1.5">
                  Critical Future Threat: Non-Invasive Technologies
                </h3>
                <p className="text-muted-foreground leading-snug text-sm">
                  The most significant long-term threat comes from <span className="text-purple-500 font-semibold">non-invasive glucose monitoring technologies</span> currently
                  in development. Companies like Apple and Samsung are investing heavily in optical sensors and other technologies that
                  could eliminate the need for subcutaneous sensors entirely. If successful, these could fundamentally disrupt the CGM
                  market by offering a pain-free, highly convenient alternative that appeals to both medical and wellness segments.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-64 space-y-3">
          <div className="animate-fade-up stagger-1 p-3 rounded-lg bg-card border border-border sticky top-16">
            <div className="flex items-center gap-2.5 mb-3">
              <RefreshCw className="w-6 h-6 text-purple-500" />
              <div>
                <h3 className="text-xs uppercase tracking-wide text-muted-foreground">Force Rating</h3>
                <div className="flex items-center gap-2 mt-0.5">
                  <span className={`px-2.5 py-0.5 rounded-full text-white text-xs font-bold ${getRatingColor(substitution.rating)}`}>
                    {substitution.rating}
                  </span>
                </div>
              </div>
            </div>
            <div className="h-px bg-border my-3" />
            <p className="text-xs text-muted-foreground leading-snug mb-3">
              Current substitution threat is <span className="font-semibold text-foreground">moderate</span>, with traditional BGM
              being the main alternative.
            </p>
            <div className="bg-purple-500/10 p-2.5 rounded-lg border border-purple-500/30">
              <p className="text-xs text-foreground leading-snug">
                <span className="font-semibold text-purple-500">Future Risk:</span> Non-invasive technologies represent a potential
                paradigm shift that could elevate this threat to HIGH if successfully commercialized.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
