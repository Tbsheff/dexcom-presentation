import { competitorResponse } from "@/lib/presentation-data"

export function CompetitorResponseAnalysisSlide() {
  return (
    <div className="px-12 pt-8 pb-20 h-full flex flex-col">
      <div className="mb-8">
        <span className="text-xl uppercase tracking-[0.3em] text-primary font-medium">
          Section 03 · Competitor Response
        </span>
        <h2 className="text-5xl font-bold mt-4 tracking-tight text-foreground">
          Competitor Response
        </h2>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <div className="animate-fade-up stagger-1 p-5 rounded-lg bg-card border border-border">
          <h3 className="font-bold text-2xl text-foreground mb-5">
            {competitorResponse.responses.abbott.title}
          </h3>
          <p className="text-xl text-muted-foreground leading-snug">
            {competitorResponse.responses.abbott.response}
          </p>
        </div>

        <div className="animate-fade-up stagger-2 p-5 rounded-lg bg-card border border-border">
          <h3 className="font-bold text-2xl text-foreground mb-5">
            {competitorResponse.responses.medtronic.title}
          </h3>
          <p className="text-xl text-muted-foreground leading-snug">
            {competitorResponse.responses.medtronic.response}
          </p>
        </div>

        <div className="animate-fade-up stagger-3 p-5 rounded-lg bg-card border border-border">
          <h3 className="font-bold text-2xl text-foreground mb-5">
            {competitorResponse.responses.senseonics.title}
          </h3>
          <p className="text-xl text-muted-foreground leading-snug">
            {competitorResponse.responses.senseonics.response}
          </p>
        </div>
      </div>
    </div>
  )
}
