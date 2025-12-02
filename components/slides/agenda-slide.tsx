"use client"

import { SlideHeader, SlideLabel, SlideTitle } from "@/components/ui"

interface AgendaSlideProps {
  goToSlide: (index: number) => void
}

export function AgendaSlide({ goToSlide }: AgendaSlideProps) {
  const sectionStarts: Record<string, number> = { "01": 2, "02": 6, "03": 14, "04": 21 }

  return (
    <div className="px-12 pt-8 pb-20 h-full flex flex-col">
      <SlideHeader className="mb-12">
        <SlideLabel>Overview</SlideLabel>
        <SlideTitle>Agenda</SlideTitle>
      </SlideHeader>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
        {[
          { num: "01", title: "Introduction", desc: "Diabetes, CGM technology, and Dexcom's position" },
          { num: "02", title: "Industry Analysis", desc: "Market dynamics, competition, and attractiveness" },
          { num: "03", title: "Core Analysis", desc: "Differentiation, resources, and strategic position" },
          { num: "04", title: "Recommendations", desc: "Strategic issues and proposed solutions" },
        ].map((item, idx) => (
          <div
            key={item.num}
            className={`animate-fade-up stagger-${idx + 1} group flex items-start gap-5 cursor-pointer`}
            onClick={() => goToSlide(sectionStarts[item.num])}
          >
            <span className="text-5xl font-light text-muted-foreground/30 group-hover:text-primary transition-colors">
              {item.num}
            </span>
            <div className="pt-2">
              <h3 className="text-2xl font-semibold text-foreground group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <p className="text-lg text-muted-foreground mt-1">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
