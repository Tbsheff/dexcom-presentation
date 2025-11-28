export function TitleSlide() {
  return (
    <div className="flex flex-col items-center justify-center h-full relative">
      <div className="relative z-10 text-center max-w-4xl">
        <div className="animate-fade-up">
          <span className="text-xs uppercase tracking-[0.35em] text-primary font-semibold">Strategic Analysis</span>
        </div>

        <h1 className="animate-fade-up stagger-1 text-8xl md:text-[140px] font-extrabold tracking-tight leading-none text-foreground mt-6">
          DEXCOM
        </h1>

        <div className="animate-fade-up stagger-2 mt-8 flex items-center justify-center gap-6">
          <div className="h-px w-20 bg-border" />
          <span className="text-lg text-muted-foreground font-light">Continuous Glucose Monitoring</span>
          <div className="h-px w-20 bg-border" />
        </div>

        <div className="animate-fade-up stagger-3 mt-24 text-sm text-muted-foreground tracking-wide">
          <p>Tyler Sheffield · Brendan Bundy · Tyler Keller · Adam Hildt · Hannah Johnson</p>
        </div>
      </div>

      {/* Subtle accent element */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-primary" />
    </div>
  )
}
