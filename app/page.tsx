"use client"

import Link from "next/link"
import { Presentation, BarChart3 } from "lucide-react"
import { presentationSlides, analysisSlides } from "@/lib/presentation-data"

export default function Home() {
  const decks = [
    {
      title: "Main Presentation",
      description: "Executive overview of Dexcom's strategic position",
      href: "/presentation",
      icon: Presentation,
      slides: presentationSlides.length,
      color: "#58A618",
    },
    {
      title: "Analysis Deep Dive",
      description: "Detailed financial and competitive analysis",
      href: "/analysis",
      icon: BarChart3,
      slides: analysisSlides.length,
      color: "#3B82F6",
    },
  ]

  return (
    <div className="h-screen w-screen bg-background flex items-center justify-center p-8">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-foreground mb-4">DEXCOM</h1>
          <p className="text-xl text-muted-foreground">Strategic Analysis Presentation</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {decks.map((deck) => (
            <Link
              key={deck.href}
              href={deck.href}
              className="group block p-8 rounded-xl border border-border bg-card hover:border-primary/50 hover:shadow-lg transition-all"
            >
              <div
                className="w-14 h-14 rounded-lg flex items-center justify-center mb-6"
                style={{ backgroundColor: `${deck.color}15` }}
              >
                <deck.icon className="w-7 h-7" style={{ color: deck.color }} />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {deck.title}
              </h2>
              <p className="text-muted-foreground mb-4">{deck.description}</p>
              <span className="text-sm text-muted-foreground">{deck.slides} slides</span>
            </Link>
          ))}
        </div>

      </div>
    </div>
  )
}
