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
    <div className="p-12 pb-28 max-w-6xl mx-auto">
      <div className="mb-8">
        <span className="text-[11px] uppercase tracking-[0.3em] text-primary font-medium">
          Section 02 · Porter's Five Forces
        </span>
        <h2 className="text-5xl font-bold mt-2 tracking-tight text-foreground">Threat of Substitution</h2>
        <p className="text-muted-foreground mt-2">Risk from alternative glucose monitoring methods</p>
      </div>

      <div className="flex gap-8">
        <div className="flex-1 space-y-4">
          {substitution.points.map((point, idx) => (
            <div
              key={idx}
              className={`animate-fade-up stagger-${idx + 1} p-5 rounded-lg bg-card border-l-4 border-l-purple-500`}
            >
              <p className="text-foreground leading-relaxed">{point}</p>
            </div>
          ))}

          {/* Emphasis Box */}
          <div className="animate-fade-up stagger-4 p-6 rounded-lg bg-gradient-to-br from-purple-500/20 to-purple-500/5 border-2 border-purple-500">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-10 h-10 text-purple-500 flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Critical Future Threat: Non-Invasive Technologies
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  The most significant long-term threat comes from <span className="text-purple-500 font-semibold">non-invasive glucose monitoring technologies</span> currently
                  in development. Companies like Apple and Samsung are investing heavily in optical sensors and other technologies that
                  could eliminate the need for subcutaneous sensors entirely. If successful, these could fundamentally disrupt the CGM
                  market by offering a pain-free, highly convenient alternative that appeals to both medical and wellness segments.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-80 space-y-6">
          <div className="animate-fade-up stagger-1 p-6 rounded-lg bg-card border border-border sticky top-16">
            <div className="flex items-center gap-3 mb-4">
              <RefreshCw className="w-8 h-8 text-purple-500" />
              <div>
                <h3 className="text-sm uppercase tracking-wide text-muted-foreground">Force Rating</h3>
                <div className="flex items-center gap-2 mt-1">
                  <span className={`px-3 py-1 rounded-full text-white text-sm font-bold ${getRatingColor(substitution.rating)}`}>
                    {substitution.rating}
                  </span>
                </div>
              </div>
            </div>
            <div className="h-px bg-border my-4" />
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Current substitution threat is <span className="font-semibold text-foreground">moderate</span>, with traditional BGM
              being the main alternative.
            </p>
            <div className="bg-purple-500/10 p-3 rounded-lg border border-purple-500/30">
              <p className="text-xs text-foreground leading-relaxed">
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
