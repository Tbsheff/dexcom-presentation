"use client"

import { Shield, AlertTriangle } from "lucide-react"
import { SlideHeader, SlideLabel, SlideTitle } from "@/components/ui"

export function SwotSlide() {
  const moat = {
    icon: Shield,
    title: "Dexcom's Moat",
    color: "#58A618",
    items: [
      { label: "Brand Loyalty", desc: "#1 physician choice, endocrinologist preferred" },
      { label: "Pump Integrations", desc: "Tandem, Omnipod, Beta Bionics partnerships" },
      { label: "Ecosystem Lock-in", desc: "Health app integrations, real-time data sharing" },
    ],
  }

  const threats = {
    icon: AlertTriangle,
    title: "Competitive Pressure",
    color: "#EF4444",
    items: [
      { label: "Abbott's Price Advantage", desc: "Libre significantly undercuts on price" },
      { label: "Closing Integration Gap", desc: "Competitors adding pump partnerships" },
      { label: "Length of Wear", desc: "Abbott offers 14 days, Senseonics offers 365-day implant" },
    ],
  }

  return (
    <div className="px-12 pt-8 pb-20 h-full flex flex-col">
      <SlideHeader>
        <SlideLabel>Strategic Position</SlideLabel>
        <SlideTitle>Moat vs. Threats</SlideTitle>
      </SlideHeader>

      <div className="grid grid-cols-2 gap-8 flex-1">
        {/* Moat Side */}
        <div className="animate-fade-up stagger-1 rounded-xl bg-card border border-border overflow-hidden flex flex-col">
          <div className="h-2" style={{ backgroundColor: moat.color }} />
          <div className="p-6 flex-1 flex flex-col">
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: `${moat.color}15` }}
              >
                <moat.icon className="w-6 h-6" style={{ color: moat.color }} />
              </div>
              <h3 className="text-2xl font-bold text-foreground">{moat.title}</h3>
            </div>
            <div className="space-y-5 flex-1">
              {moat.items.map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                    style={{ backgroundColor: `${moat.color}15` }}
                  >
                    <span className="text-sm font-bold" style={{ color: moat.color }}>{i + 1}</span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground text-lg">{item.label}</div>
                    <div className="text-muted-foreground">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Threats Side */}
        <div className="animate-fade-up stagger-2 rounded-xl bg-card border border-border overflow-hidden flex flex-col">
          <div className="h-2" style={{ backgroundColor: threats.color }} />
          <div className="p-6 flex-1 flex flex-col">
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: `${threats.color}15` }}
              >
                <threats.icon className="w-6 h-6" style={{ color: threats.color }} />
              </div>
              <h3 className="text-2xl font-bold text-foreground">{threats.title}</h3>
            </div>
            <div className="space-y-5 flex-1">
              {threats.items.map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                    style={{ backgroundColor: `${threats.color}15` }}
                  >
                    <span className="text-sm font-bold" style={{ color: threats.color }}>{i + 1}</span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground text-lg">{item.label}</div>
                    <div className="text-muted-foreground">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Insight */}
      <div className="animate-fade-up stagger-3 mt-6 rounded-xl bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent border border-amber-500/20 p-5">
        <p className="text-xl text-foreground">
          <span className="font-bold text-amber-600">Key tension:</span>
          <span className="text-muted-foreground ml-2">Dexcom's integration advantage is eroding — brand loyalty must carry more weight</span>
        </p>
      </div>
    </div>
  )
}
