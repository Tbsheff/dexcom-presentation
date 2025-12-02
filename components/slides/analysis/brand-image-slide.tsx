"use client"

import { Network, Smartphone, Watch, Users } from "lucide-react"
import { brandImageData } from "@/lib/presentation-data"

export function BrandImageSlide() {
  const iconMap: { [key: string]: React.ReactNode } = {
    "Insulin Pumps": <Network className="w-4 h-4 text-primary" />,
    Wearables: <Watch className="w-4 h-4 text-primary" />,
    "Mobile Apps": <Smartphone className="w-4 h-4 text-primary" />,
    "Care Network": <Users className="w-4 h-4 text-primary" />,
  }

  return (
    <div className="p-6 pb-20 max-w-6xl mx-auto">
      <div className="mb-6">
        <span className="text-[11px] uppercase tracking-[0.3em] text-primary font-medium">
          Section 03 · Unique Value
        </span>
        <h2 className="text-5xl font-bold mt-2 tracking-tight text-foreground">Brand Image</h2>
        <p className="text-sm text-muted-foreground mt-1">{brandImageData.headline}</p>
      </div>

      <div className="space-y-3">
        {/* Value Proposition */}
        <div className="animate-fade-up stagger-1 p-3 rounded-lg bg-primary/5 border-2 border-primary/20">
          <h3 className="text-base font-bold text-foreground mb-1">{brandImageData.tagline}</h3>
          <p className="text-xs text-muted-foreground">{brandImageData.trustStatement}</p>
        </div>

        {/* Connected Ecosystem */}
        <div className="animate-fade-up stagger-2">
          <h3 className="text-lg font-bold text-foreground mb-2">Connected Care Network</h3>
          <div className="grid grid-cols-2 gap-2">
            {brandImageData.connections.map((connection, idx) => (
              <div key={idx} className="p-3 rounded-lg bg-card border border-border">
                <div className="flex items-center gap-2 mb-2">
                  {iconMap[connection.type]}
                  <h4 className="font-bold text-sm text-foreground">{connection.type}</h4>
                </div>
                <ul className="space-y-0.5">
                  {connection.partners.map((partner, partnerIdx) => (
                    <li key={partnerIdx} className="text-xs text-muted-foreground flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                      {partner}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Strategic Insight */}
        <div className="animate-fade-up stagger-3 p-3 rounded-lg bg-card border-l-4 border-l-primary">
          <h4 className="font-bold text-sm text-foreground mb-1">Strategic Advantage</h4>
          <p className="text-xs text-muted-foreground">
            Dexcom's brand image as "The Most Connected CGM System" creates network effects and ecosystem lock-in that
            competitors struggle to replicate. The extensive integration with insulin pumps, wearables, mobile apps, and
            care networks increases switching costs and strengthens patient and provider loyalty.
          </p>
        </div>
      </div>
    </div>
  )
}
