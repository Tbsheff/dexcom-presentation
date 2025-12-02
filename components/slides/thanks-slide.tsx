export function ThanksSlide() {
  return (
    <div className="flex flex-col items-center justify-center h-full relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid2" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid2)" />
        </svg>
      </div>

      <div className="relative z-10 text-center max-w-3xl">
        <div className="animate-fade-up">
          <h1 className="text-7xl font-semibold tracking-tight text-foreground mb-8">Thank You</h1>
        </div>

        <div className="animate-fade-up stagger-1 flex items-center justify-center gap-6 mb-16">
          <div className="h-px w-20 bg-border" />
          <span className="text-muted-foreground text-lg">Questions?</span>
          <div className="h-px w-20 bg-border" />
        </div>

        <div className="animate-fade-up stagger-2 text-sm text-muted-foreground tracking-wide">
          <p className="mb-1">Tyler Sheffield · Brendan Bundy · Tyler Keller</p>
          <p>Adam Hildt · Hannah Johnson</p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-1 bg-primary" />
    </div>
  )
}
