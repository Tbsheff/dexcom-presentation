"use client"

import { SlideHeader, SlideLabel, SlideTitle } from "@/components/ui"

interface AgendaSlideProps {
  goToSlide: (index: number) => void
}

export function AgendaSlide({ goToSlide }: AgendaSlideProps) {
  const sections = [
    { num: "01", title: "Company Overview", startSlide: 2 },
    { num: "02", title: "Market", startSlide: 7 },
    { num: "03", title: "Unique Value", startSlide: 15 },
    { num: "04", title: "Resources & Capabilities", startSlide: 18 },
    { num: "05", title: "Imitation Barriers", startSlide: 20 },
    { num: "06", title: "Recommendations", startSlide: 22 },
  ]

  return (
    <div className="px-12 pt-8 pb-20 h-full flex flex-col">
      <SlideHeader className="mb-8">
        <SlideLabel>Overview</SlideLabel>
        <SlideTitle>Agenda</SlideTitle>
      </SlideHeader>

      <div className="flex flex-col gap-0 border border-border rounded-lg overflow-hidden">
        {sections.map((item, idx) => (
          <div
            key={item.num}
            className={`animate-fade-up stagger-${idx + 1} group flex items-center gap-6 px-6 py-5 cursor-pointer hover:bg-muted/50 transition-colors ${idx < sections.length - 1 ? "border-b border-border" : ""}`}
            onClick={() => goToSlide(item.startSlide)}
          >
            <span className="text-2xl font-medium text-muted-foreground/50 group-hover:text-primary transition-colors w-12">
              {item.num}
            </span>
            <h3 className="text-2xl font-semibold text-foreground group-hover:text-primary transition-colors">
              {item.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  )
}
