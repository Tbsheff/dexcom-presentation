import { competitorResponse } from "@/lib/presentation-data"

export function CapabilitiesComparisonDetailedSlide() {
  return (
    <div className="p-6 pb-20 max-w-6xl mx-auto">
      <div className="mb-6">
        <span className="text-[11px] uppercase tracking-[0.3em] text-primary font-medium">
          Section 03 · Competitor Response
        </span>
        <h2 className="text-5xl font-bold mt-2 tracking-tight text-foreground">
          Capabilities
        </h2>
      </div>

      <div className="mb-6.5 animate-fade-up stagger-1">
        <div className="p-2.5 rounded-lg bg-card border border-border">
          <h3 className="font-bold text-foreground text-sm mb-2">Dexcom</h3>
          <div className="grid grid-cols-2 gap-x-4 gap-y-1">
            {competitorResponse.capabilities.dexcom.map((capability, index) => (
              <div key={index} className="flex items-start">
                <span className="text-[#58A618] mr-2 text-xs">•</span>
                <span className="text-xs text-muted-foreground">{capability}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2.5">
        <div className="animate-fade-up stagger-2 p-2.5 rounded-lg bg-card border border-border">
          <h3 className="font-bold text-foreground text-sm mb-2">Abbott</h3>
          <ul className="space-y-1">
            {competitorResponse.capabilities.abbott.map((capability, index) => (
              <li key={index} className="flex items-start">
                <span className="text-[#5B8FB9] mr-2 text-xs">•</span>
                <span className="text-xs text-muted-foreground">{capability}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="animate-fade-up stagger-3 p-2.5 rounded-lg bg-card border border-border">
          <h3 className="font-bold text-foreground text-sm mb-2">Medtronic</h3>
          <ul className="space-y-1">
            {competitorResponse.capabilities.medtronic.map((capability, index) => (
              <li key={index} className="flex items-start">
                <span className="text-[#E07A5F] mr-2 text-xs">•</span>
                <span className="text-xs text-muted-foreground">{capability}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="animate-fade-up stagger-4 p-2.5 rounded-lg bg-card border border-border">
          <h3 className="font-bold text-foreground text-sm mb-2">Senseonics</h3>
          <ul className="space-y-1">
            {competitorResponse.capabilities.senseonics.map((capability, index) => (
              <li key={index} className="flex items-start">
                <span className="text-[#6B9080] mr-2 text-xs">•</span>
                <span className="text-xs text-muted-foreground">{capability}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
