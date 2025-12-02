import { Activity, DollarSign, TrendingUp } from "lucide-react"
import { operatingMetrics } from "@/lib/presentation-data"

export function OperatingEfficiencyAnalysisSlide() {
  const metrics = [
    {
      icon: Activity,
      label: "Operating Income (EBIT)",
      value: operatingMetrics.operatingIncome,
      description: "Earnings before interest and taxes",
    },
    {
      icon: TrendingUp,
      label: "Operating Margin",
      value: operatingMetrics.operatingMargin,
      description: "Operating income as % of revenue",
    },
    {
      icon: DollarSign,
      label: "Net Income",
      value: operatingMetrics.netIncome,
      description: "Bottom-line profitability",
    },
  ]

  return (
    <div className="p-10 pb-24 max-w-6xl mx-auto">
      <div className="mb-6">
        <span className="text-[11px] uppercase tracking-[0.3em] text-primary font-medium">
          Section 01 · Financial Analysis
        </span>
        <h2 className="text-5xl font-bold mt-2 tracking-tight text-foreground">Operating Efficiency Metrics (2024)</h2>
        <p className="text-muted-foreground mt-2">Operational performance indicators and cost management effectiveness</p>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-4">
        {metrics.map((metric, idx) => (
          <div
            key={idx}
            className={`animate-fade-up stagger-${idx + 1} p-4 rounded-lg bg-card border border-border flex flex-col`}
          >
            <div className="w-12 h-12 rounded-md flex items-center justify-center mb-3 bg-primary/10">
              <metric.icon className="w-6 h-6 text-primary" />
            </div>
            <span className="text-xs uppercase tracking-wider text-muted-foreground">{metric.label}</span>
            <p className="text-3xl font-bold text-foreground mt-2">{metric.value}</p>
            <p className="text-sm text-muted-foreground mt-2">{metric.description}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="animate-fade-up stagger-4 p-4 rounded-lg bg-card border-l-4 border-l-primary">
          <h3 className="font-bold text-foreground mb-3">Efficiency Strengths</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>Strong operating income growth indicates effective cost controls</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>Consistent margins despite significant R&D investment</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>Improving economies of scale as production volumes increase</span>
            </li>
          </ul>
        </div>

        <div className="animate-fade-up stagger-5 p-4 rounded-lg bg-card border-l-4 border-l-amber">
          <h3 className="font-bold text-foreground mb-3">Areas for Improvement</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="text-amber mt-1">•</span>
              <span>Operating margin still below some medtech peers (15-20% range)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber mt-1">•</span>
              <span>High SG&A expenses due to direct-to-consumer marketing</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber mt-1">•</span>
              <span>Opportunity to optimize manufacturing costs with automation</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
