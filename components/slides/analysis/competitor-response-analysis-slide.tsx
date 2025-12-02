import { competitorResponse } from "@/lib/presentation-data"

export function CompetitorResponseAnalysisSlide() {
  return (
    <div className="p-10 pb-24 max-w-6xl mx-auto">
      <div className="mb-6">
        <span className="text-[11px] uppercase tracking-[0.3em] text-primary font-medium">
          Section 03 · Competitor Response
        </span>
        <h2 className="text-5xl font-bold mt-2 tracking-tight text-foreground">
          Competitor Response
        </h2>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="animate-fade-up stagger-1 p-4 rounded-lg bg-card border border-border">
          <h3 className="font-bold text-foreground mb-3">
            {competitorResponse.responses.abbott.title}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {competitorResponse.responses.abbott.response}
          </p>
        </div>

        <div className="animate-fade-up stagger-2 p-4 rounded-lg bg-card border border-border">
          <h3 className="font-bold text-foreground mb-3">
            {competitorResponse.responses.medtronic.title}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {competitorResponse.responses.medtronic.response}
          </p>
        </div>

        <div className="animate-fade-up stagger-3 p-4 rounded-lg bg-card border border-border">
          <h3 className="font-bold text-foreground mb-3">
            {competitorResponse.responses.senseonics.title}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {competitorResponse.responses.senseonics.response}
          </p>
        </div>
      </div>
    </div>
  )
}
