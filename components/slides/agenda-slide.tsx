"use client"

interface AgendaSlideProps {
  goToSlide: (index: number) => void
}

export function AgendaSlide({ goToSlide }: AgendaSlideProps) {
  const sectionStarts: Record<string, number> = { "01": 2, "02": 6, "03": 14, "04": 21 }

  return (
    <div className="p-12 lg:p-20 max-w-5xl mx-auto h-full flex flex-col justify-center">
      <div className="mb-16">
        <span className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">Overview</span>
        <h2 className="text-5xl font-bold mt-3 tracking-tight text-foreground">Agenda</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12">
        {[
          { num: "01", title: "Introduction", desc: "Diabetes, CGM technology, and Dexcom's position" },
          { num: "02", title: "Industry Analysis", desc: "Market dynamics, competition, and attractiveness" },
          { num: "03", title: "Core Analysis", desc: "Differentiation, resources, and strategic position" },
          { num: "04", title: "Recommendations", desc: "Strategic issues and proposed solutions" },
        ].map((item, idx) => (
          <div
            key={item.num}
            className={`animate-fade-up stagger-${idx + 1} group flex items-start gap-6 cursor-pointer`}
            onClick={() => goToSlide(sectionStarts[item.num])}
          >
            <span className="text-6xl font-extralight text-border group-hover:text-primary transition-colors duration-200">
              {item.num}
            </span>
            <div className="pt-3">
              <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-200">
                {item.title}
              </h3>
              <p className="text-muted-foreground mt-2 leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
