import { competitorResponse } from "@/lib/presentation-data"

export function AssumptionsSlide() {
  return (
    <div className="px-12 pt-8 pb-20 h-full flex flex-col">
      <div className="mb-8">
        <span className="text-xl uppercase tracking-[0.3em] text-primary font-medium">
          Section 03 · Competitor Response
        </span>
        <h2 className="text-5xl font-bold mt-4 tracking-tight text-foreground">
          Assumptions
        </h2>
      </div>

      <div className="mb-8.5 animate-fade-up stagger-1">
        <div className="p-5 rounded-lg bg-card border border-border">
          <h3 className="font-bold text-foreground text-2xl mb-5">Dexcom</h3>
          <div className="grid grid-cols-2 gap-x-4 gap-y-1">
            {competitorResponse.assumptions.dexcom.map((assumption, index) => (
              <div key={index} className="flex items-start">
                <span className="text-[#58A618] mr-2 text-xl">•</span>
                <span className="text-xl text-muted-foreground">{assumption}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <div className="animate-fade-up stagger-2 p-5 rounded-lg bg-card border border-border">
          <h3 className="font-bold text-foreground text-2xl mb-5">Abbott</h3>
          <ul className="space-y-1">
            {competitorResponse.assumptions.abbott.map((assumption, index) => (
              <li key={index} className="flex items-start">
                <span className="text-[#5B8FB9] mr-2 text-xl">•</span>
                <span className="text-xl text-muted-foreground">{assumption}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="animate-fade-up stagger-3 p-5 rounded-lg bg-card border border-border">
          <h3 className="font-bold text-foreground text-2xl mb-5">Medtronic</h3>
          <ul className="space-y-1">
            {competitorResponse.assumptions.medtronic.map((assumption, index) => (
              <li key={index} className="flex items-start">
                <span className="text-[#E07A5F] mr-2 text-xl">•</span>
                <span className="text-xl text-muted-foreground">{assumption}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="animate-fade-up stagger-4 p-5 rounded-lg bg-card border border-border">
          <h3 className="font-bold text-foreground text-2xl mb-5">Senseonics</h3>
          <ul className="space-y-1">
            {competitorResponse.assumptions.senseonics.map((assumption, index) => (
              <li key={index} className="flex items-start">
                <span className="text-[#6B9080] mr-2 text-xl">•</span>
                <span className="text-xl text-muted-foreground">{assumption}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
