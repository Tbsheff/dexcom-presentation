"use client"

import { Shield, Award, Building } from "lucide-react"

export function ResourcesDetailedSlide() {
  const resources = [
    {
      title: "Patents",
      description: "Dexcom has patents for their CGM technology and algorithms.",
      icon: Shield,
      color: "text-blue-500",
    },
    {
      title: "Brand Reputation",
      description: "Dexcom's name is well-known and trusted among doctors and patients.",
      icon: Award,
      color: "text-primary",
    },
    {
      title: "Manufacturing Facilities & Workforce",
      description: "Dexcom has 3 large manufacturing facilities including one internationally and employs over 10,000 people.",
      icon: Building,
      color: "text-purple-500",
    },
  ]

  return (
    <div className="p-10 pb-24 max-w-6xl mx-auto">
      <div className="mb-6">
        <span className="text-[11px] uppercase tracking-[0.3em] text-primary font-medium">
          Section 04 · Resources
        </span>
        <h2 className="text-5xl font-bold mt-1 tracking-tight text-foreground">Resources</h2>
        <p className="text-muted-foreground mt-1 text-sm">Strategic assets that power Dexcom's competitive advantage</p>
      </div>

      <div className="space-y-3">
        {resources.map((resource, idx) => (
          <div
            key={idx}
            className={`animate-fade-up stagger-${idx + 1} p-4 rounded-lg bg-card border-2 border-border hover:border-primary/50 transition-colors`}
          >
            <div className="flex items-start gap-3">
              <resource.icon className={`w-6 h-6 ${resource.color} flex-shrink-0 mt-0.5`} />
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-1">{resource.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{resource.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
