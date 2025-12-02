import { competitorResponse } from "@/lib/presentation-data"

export function CompetitorResponseAnalysisSlide() {
  return (
    <div className="p-8 pb-20 max-w-6xl mx-auto">
      <div className="mb-6">
        <span className="text-[11px] uppercase tracking-[0.3em] text-primary font-medium">
          Section 03 · Competitor Response
        </span>
        <h2 className="text-5xl font-bold mt-2 tracking-tight text-foreground">
          Competitor Response
        </h2>
      </div>

      <div className="grid grid-cols-3 gap-3">
        <div className="animate-fade-up stagger-1 p-2.5 rounded-lg bg-card border border-border">
          <h3 className="font-bold text-sm text-foreground mb-2">
            {competitorResponse.responses.abbott.title}
          </h3>
          <p className="text-xs text-muted-foreground leading-snug">
            {competitorResponse.responses.abbott.response}
          </p>
        </div>

        <div className="animate-fade-up stagger-2 p-2.5 rounded-lg bg-card border border-border">
          <h3 className="font-bold text-sm text-foreground mb-2">
            {competitorResponse.responses.medtronic.title}
          </h3>
          <p className="text-xs text-muted-foreground leading-snug">
            {competitorResponse.responses.medtronic.response}
          </p>
        </div>

        <div className="animate-fade-up stagger-3 p-2.5 rounded-lg bg-card border border-border">
          <h3 className="font-bold text-sm text-foreground mb-2">
            {competitorResponse.responses.senseonics.title}
          </h3>
          <p className="text-xs text-muted-foreground leading-snug">
            {competitorResponse.responses.senseonics.response}
          </p>
        </div>
      </div>
    </div>
  )
}
