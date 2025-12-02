"use client"

interface Section {
  id: string
  label: string
  startSlide: number
  endSlide: number
}

interface RunningAgendaProps {
  currentSlide: number
  goToSlide: (index: number) => void
  sections: Section[]
}

export function RunningAgenda({ currentSlide, goToSlide, sections }: RunningAgendaProps) {
  const getCurrentSection = () => {
    for (const section of sections) {
      if (currentSlide >= section.startSlide && currentSlide <= section.endSlide) {
        return section.id
      }
    }
    return null
  }

  const currentSection = getCurrentSection()

  return (
    <div className="flex items-center justify-center gap-2 py-4">
      {sections.map((section, idx) => {
        const isActive = section.id === currentSection
        const isPast = currentSlide > section.endSlide

        return (
          <div key={section.id} className="flex items-center">
            <button
              onClick={() => goToSlide(section.startSlide)}
              className={`
                px-4 py-1.5 rounded-full text-sm font-medium transition-all
                ${isActive
                  ? "bg-primary text-primary-foreground"
                  : isPast
                    ? "text-muted-foreground hover:text-foreground hover:bg-muted"
                    : "text-muted-foreground/60 hover:text-muted-foreground hover:bg-muted/50"
                }
              `}
            >
              {section.label}
            </button>
            {idx < sections.length - 1 && (
              <div className={`w-8 h-px mx-1 ${isPast ? "bg-primary/30" : "bg-border"}`} />
            )}
          </div>
        )
      })}
    </div>
  )
}
