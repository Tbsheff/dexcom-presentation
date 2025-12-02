"use client"

export function SwotDividerSlide() {
  return (
    <div className="flex items-center justify-center h-full bg-gradient-to-br from-background to-muted/20 pb-24">
      <div className="max-w-5xl mx-auto text-center px-8">
        <div className="animate-fade-up">
          <div className="inline-block mb-6">
            <div className="px-8 py-3 bg-card border border-border rounded-full">
              <span className="text-6xl font-black tracking-tight text-foreground">06</span>
            </div>
          </div>
          <h1 className="text-7xl font-black tracking-tight mb-6 animate-fade-up stagger-1">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-600">
              SWOT
            </span>
          </h1>
          <p className="text-2xl text-muted-foreground animate-fade-up stagger-2 max-w-3xl mx-auto leading-relaxed">
            Comprehensive analysis of Dexcom's internal strengths and weaknesses,
            alongside external opportunities and threats
          </p>
        </div>
      </div>
    </div>
  )
}
