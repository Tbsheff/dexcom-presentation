interface AnalysisSectionDividerProps {
  sectionNumber: string
  title: string
}

export function AnalysisSectionDivider({ sectionNumber, title }: AnalysisSectionDividerProps) {
  return (
    <div className="flex flex-col items-center justify-center h-full relative pb-16">
      <div className="relative z-10 text-center max-w-4xl">
        <div className="animate-fade-up">
          <span className="text-[10px] uppercase tracking-[0.35em] text-primary font-semibold">Deep Dive Analysis</span>
        </div>

        <div className="flex items-center justify-center gap-6 mt-8">
          <h1 className="animate-fade-up stagger-1 text-[140px] font-extrabold tracking-tight leading-none text-foreground/10">
            {sectionNumber}
          </h1>
          <h2 className="animate-fade-up stagger-2 text-3xl md:text-4xl font-bold tracking-tight text-foreground text-left max-w-md leading-tight">
            {title}
          </h2>
        </div>

        <div className="animate-fade-up stagger-3 mt-8 flex items-center justify-center gap-6">
          <div className="h-px w-24 bg-border" />
          <span className="text-xs text-muted-foreground font-light">Supporting Analysis & Data</span>
          <div className="h-px w-24 bg-border" />
        </div>
      </div>

      {/* Accent element */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-primary" />
    </div>
  )
}
