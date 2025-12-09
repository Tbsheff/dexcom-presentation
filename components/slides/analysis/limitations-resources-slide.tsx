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
    <div className="px-12 pt-8 pb-20 h-full flex flex-col">
      <div className="mb-8">
        <span className="text-xl uppercase tracking-[0.3em] text-red-500 font-medium">
          Section 04 · Limitations
        </span>
        <h2 className="text-5xl font-bold mt-4 tracking-tight text-foreground">Limitations of Resources</h2>
        <p className="text-muted-foreground mt-4 text-xl">Constraints and vulnerabilities in Dexcom's resource base</p>
      </div>

      <div className="space-y-5.5">
        {limitations.map((limitation, idx) => (
          <div
            key={idx}
            className={`animate-fade-up stagger-${idx + 1} p-6 rounded-lg bg-card border-2 border-red-200 dark:border-red-900/30`}
          >
            <div className="flex items-start gap-6">
              <limitation.icon className={`w-5 h-5 ${limitation.color} flex-shrink-0 mt-0.5`} />
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-0.5">{limitation.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-2xl">{limitation.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
