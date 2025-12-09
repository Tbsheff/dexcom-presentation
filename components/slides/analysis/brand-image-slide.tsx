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
    <div className="px-12 pt-8 pb-20 h-full flex flex-col">
      <div className="mb-8">
        <span className="text-xl uppercase tracking-[0.3em] text-primary font-medium">
          Section 03 · Unique Value
        </span>
        <h2 className="text-5xl font-bold mt-4 tracking-tight text-foreground">Brand Image</h2>
        <p className="text-2xl text-muted-foreground mt-4">{brandImageData.headline}</p>
      </div>

      <div className="space-y-6 flex-1">
        {/* Value Proposition */}
        <div className="animate-fade-up stagger-1 p-6 rounded-lg bg-primary/5 border-2 border-primary/20">
          <h3 className="text-xl font-bold text-foreground mb-1">{brandImageData.tagline}</h3>
          <p className="text-xl text-muted-foreground">{brandImageData.trustStatement}</p>
        </div>

        {/* Connected Ecosystem */}
        <div className="animate-fade-up stagger-2">
          <h3 className="text-2xl font-bold text-foreground mb-5">Connected Care Network</h3>
          <div className="grid grid-cols-2 gap-5">
            {brandImageData.connections.map((connection, idx) => (
              <div key={idx} className="p-6 rounded-lg bg-card border border-border">
                <div className="flex items-center gap-5 mb-5">
                  {iconMap[connection.type]}
                  <h4 className="font-bold text-2xl text-foreground">{connection.type}</h4>
                </div>
                <ul className="space-y-0.5">
                  {connection.partners.map((partner, partnerIdx) => (
                    <li key={partnerIdx} className="text-xl text-muted-foreground flex items-center gap-1.5">
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
        <div className="animate-fade-up stagger-3 p-6 rounded-lg bg-card border-l-4 border-l-primary">
          <h4 className="font-bold text-2xl text-foreground mb-1">Strategic Advantage</h4>
          <p className="text-xl text-muted-foreground">
            Dexcom's brand image as "The Most Connected CGM System" creates network effects and ecosystem lock-in that
            competitors struggle to replicate. The extensive integration with insulin pumps, wearables, mobile apps, and
            care networks increases switching costs and strengthens patient and provider loyalty.
          </p>
        </div>
      </div>
    </div>
  )
}
