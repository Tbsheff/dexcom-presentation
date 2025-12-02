"use client"

export function ImitationBarriersDividerSlide() {
  return (
    <div className="flex items-center justify-center h-full bg-gradient-to-br from-primary/10 via-background to-primary/5 pb-24">
      <div className="text-center space-y-6 animate-fade-up px-10">
        <div className="inline-block">
          <div className="text-8xl font-black text-primary mb-4">05</div>
          <div className="h-2 w-full bg-primary rounded-full"></div>
        </div>
        <h1 className="text-6xl font-bold tracking-tight text-foreground">
          Imitation Barriers
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Analyzing barriers Dexcom creates and faces in a competitive landscape
        </p>
      </div>
    </div>
  )
}
