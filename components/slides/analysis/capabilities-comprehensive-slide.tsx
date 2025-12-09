"use client"

import { FlaskConical, Handshake, Factory } from "lucide-react"

export function CapabilitiesComprehensiveSlide() {
  const capabilities = [
    {
      title: "R&D",
      description: "Dexcom has rapid product iterations with significant improvements. Dexcom released G6 in 2018, G7 in 2023, and the G7 15 Day system in 2025. The newest release lasts 50% longer and is 60% smaller than the G6.",
      icon: FlaskConical,
      color: "text-blue-500",
    },
    {
      title: "Relationships with Partners",
      description: "Dexcom has connections with other companies that make products for people with diabetes, and is able to partner with them to connect CGM to insulin pumps.",
      icon: Handshake,
      color: "text-green-500",
    },
    {
      title: "Manufacturing & Sales",
      description: "Dexcom manufactures a high volume for devices that are precise (they have to be). They have effective B2B sales and have already expanded to Direct-to-Consumer as they serve people seeking wellness monitoring.",
      icon: Factory,
      color: "text-purple-500",
    },
  ]

  return (
    <div className="px-12 pt-8 pb-20 h-full flex flex-col">
      <div className="mb-8">
        <span className="text-xl uppercase tracking-[0.3em] text-primary font-medium">
          Section 04 · Capabilities
        </span>
        <h2 className="text-5xl font-bold mt-4 tracking-tight text-foreground">Capabilities</h2>
        <p className="text-muted-foreground mt-4 text-xl">Organizational strengths that enable execution and growth</p>
      </div>

      <div className="space-y-5.5">
        {capabilities.map((capability, idx) => (
          <div
            key={idx}
            className={`animate-fade-up stagger-${idx + 1} p-6 rounded-lg bg-card border-2 border-border hover:border-primary/50 transition-colors`}
          >
            <div className="flex items-start gap-6">
              <capability.icon className={`w-5 h-5 ${capability.color} flex-shrink-0 mt-0.5`} />
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-0.5">{capability.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-2xl">{capability.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
