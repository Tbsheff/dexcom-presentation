export function TitleSlide() {
  return (
    <div className="flex flex-col items-center justify-center h-full relative">
      <div className="relative z-10 text-center max-w-4xl">
        <div className="animate-fade-up">
          <span className="text-sm text-muted-foreground font-medium">Strategic Analysis</span>
        </div>

        <h1 className="animate-fade-up stagger-1 text-7xl md:text-[120px] font-bold tracking-tight leading-none text-foreground mt-4">
          DEXCOM
        </h1>

        <div className="animate-fade-up stagger-2 h-1.5 w-24 bg-primary mx-auto mt-6 rounded-full" />

        <div className="animate-fade-up stagger-4 mt-6 flex items-center justify-center gap-4">
          <div className="h-px w-16 bg-border" />
          <span className="text-base text-muted-foreground">Continuous Glucose Monitoring</span>
          <div className="h-px w-16 bg-border" />
        </div>

        <div className="animate-fade-up stagger-5 mt-16 text-sm text-muted-foreground">
          <p>Tyler Sheffield · Brendan Bundy · Tyler Keller · Adam Hildt · Hannah Johnson</p>
        </div>
      </div>
    </div>
  )
}
