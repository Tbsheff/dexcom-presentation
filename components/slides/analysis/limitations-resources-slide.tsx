"use client"

import { AlertCircle, UserX, MapPin } from "lucide-react"

export function LimitationsResourcesSlide() {
  const limitations = [
    {
      title: "Reliance on Patents",
      description: "Patent expirations could open doors for competitors. Additionally, patents won't necessarily protect against companies imitating Dexcom's algorithm.",
      icon: AlertCircle,
      color: "text-red-500",
    },
    {
      title: "Brand Reputation Risk",
      description: "One large recall or safety issue could damage trust with customers. Competitors like Abbott have gained market share.",
      icon: UserX,
      color: "text-orange-500",
    },
    {
      title: "Manufacturing Concentration",
      description: "Dexcom has only 3 major facilities means they are vulnerable to: supply chain disruptions, geopolitical risk (international site), and natural disasters.",
      icon: MapPin,
      color: "text-yellow-600",
    },
  ]

  return (
    <div className="p-10 pb-24 max-w-6xl mx-auto">
      <div className="mb-6">
        <span className="text-[11px] uppercase tracking-[0.3em] text-red-500 font-medium">
          Section 04 · Limitations
        </span>
        <h2 className="text-5xl font-bold mt-1 tracking-tight text-foreground">Limitations of Resources</h2>
        <p className="text-muted-foreground mt-1 text-sm">Constraints and vulnerabilities in Dexcom's resource base</p>
      </div>

      <div className="space-y-3">
        {limitations.map((limitation, idx) => (
          <div
            key={idx}
            className={`animate-fade-up stagger-${idx + 1} p-4 rounded-lg bg-card border-2 border-red-200 dark:border-red-900/30`}
          >
            <div className="flex items-start gap-3">
              <limitation.icon className={`w-6 h-6 ${limitation.color} flex-shrink-0 mt-0.5`} />
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-1">{limitation.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{limitation.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
