import { competitorResponse } from "@/lib/presentation-data"

export function CurrentStrategySlide() {
  return (
    <div className="p-10 pb-24 max-w-6xl mx-auto">
      <div className="mb-6">
        <span className="text-[11px] uppercase tracking-[0.3em] text-primary font-medium">
          Section 03 · Competitor Response
        </span>
        <h2 className="text-5xl font-bold mt-2 tracking-tight text-foreground">
          Current Strategy
        </h2>
      </div>

      <div className="mb-4 animate-fade-up stagger-1">
        <div className="p-4 rounded-lg bg-card border border-border">
          <h3 className="font-bold text-foreground mb-3">Dexcom</h3>
          <div className="grid grid-cols-2 gap-x-6 gap-y-2">
            {competitorResponse.currentStrategy.dexcom.map((strategy, index) => (
              <div key={index} className="flex items-start">
                <span className="text-[#58A618] mr-2">•</span>
                <span className="text-sm text-muted-foreground">{strategy}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="animate-fade-up stagger-2 p-4 rounded-lg bg-card border border-border">
          <h3 className="font-bold text-foreground mb-3">Abbott</h3>
          <ul className="space-y-2">
            {competitorResponse.currentStrategy.abbott.map((strategy, index) => (
              <li key={index} className="flex items-start">
                <span className="text-[#5B8FB9] mr-2">•</span>
                <span className="text-sm text-muted-foreground">{strategy}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="animate-fade-up stagger-3 p-4 rounded-lg bg-card border border-border">
          <h3 className="font-bold text-foreground mb-3">Medtronic</h3>
          <ul className="space-y-2">
            {competitorResponse.currentStrategy.medtronic.map((strategy, index) => (
              <li key={index} className="flex items-start">
                <span className="text-[#E07A5F] mr-2">•</span>
                <span className="text-sm text-muted-foreground">{strategy}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="animate-fade-up stagger-4 p-4 rounded-lg bg-card border border-border">
          <h3 className="font-bold text-foreground mb-3">Senseonics</h3>
          <ul className="space-y-2">
            {competitorResponse.currentStrategy.senseonics.map((strategy, index) => (
              <li key={index} className="flex items-start">
                <span className="text-[#6B9080] mr-2">•</span>
                <span className="text-sm text-muted-foreground">{strategy}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
