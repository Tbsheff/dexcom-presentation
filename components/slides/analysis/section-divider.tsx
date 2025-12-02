interface AnalysisSectionDividerProps {
  sectionNumber: string
  title: string
}

export function AnalysisSectionDivider({ sectionNumber, title }: AnalysisSectionDividerProps) {
  return (
    <div className="flex flex-col items-center justify-center h-full relative pb-24">
      <div className="relative z-10 text-center max-w-4xl">
        <div className="animate-fade-up">
          <span className="text-xs uppercase tracking-[0.35em] text-primary font-semibold">Deep Dive Analysis</span>
        </div>

        <div className="flex items-center justify-center gap-8 mt-12">
          <h1 className="animate-fade-up stagger-1 text-[180px] font-extrabold tracking-tight leading-none text-foreground/10">
            {sectionNumber}
          </h1>
          <h2 className="animate-fade-up stagger-2 text-4xl md:text-5xl font-bold tracking-tight text-foreground text-left max-w-md">
            {title}
          </h2>
        </div>

        <div className="animate-fade-up stagger-3 mt-12 flex items-center justify-center gap-6">
          <div className="h-px w-32 bg-border" />
          <span className="text-sm text-muted-foreground font-light">Supporting Analysis & Data</span>
          <div className="h-px w-32 bg-border" />
        </div>
      </div>

      {/* Accent element */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-primary" />
    </div>
  )
}
