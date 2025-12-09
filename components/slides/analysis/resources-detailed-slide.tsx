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
    <div className="px-12 pt-8 pb-20 h-full flex flex-col">
      <div className="mb-8">
        <span className="text-xl uppercase tracking-[0.3em] text-primary font-medium">
          Section 04 · Resources
        </span>
        <h2 className="text-5xl font-bold mt-4 tracking-tight text-foreground">Resources</h2>
        <p className="text-muted-foreground mt-4 text-2xl">Strategic assets that power Dexcom's competitive advantage</p>
      </div>

      <div className="space-y-6 flex-1">
        {resources.map((resource, idx) => (
          <div
            key={idx}
            className={`animate-fade-up stagger-${idx + 1} p-6 rounded-lg bg-card border-2 border-border hover:border-primary/50 transition-colors`}
          >
            <div className="flex items-start gap-6">
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
