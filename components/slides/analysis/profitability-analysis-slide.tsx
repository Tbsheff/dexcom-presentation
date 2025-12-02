import { TrendingUp } from "lucide-react"
import { profitabilityMetrics } from "@/lib/presentation-data"

export function ProfitabilityAnalysisSlide() {
  const metrics = [
    { label: "Revenue", value: profitabilityMetrics.revenue, change: "+11% YoY" },
    { label: "EBITDA", value: profitabilityMetrics.ebitda, change: profitabilityMetrics.ebitdaMargin + " margin" },
    { label: "Net Margin", value: profitabilityMetrics.netMargin, change: "Improving" },
    { label: "Operating Margin", value: profitabilityMetrics.operatingMargin, change: "Stable" },
  ]

  return (
    <div className="p-16 max-w-6xl mx-auto">
      <div className="mb-12">
        <span className="text-[11px] uppercase tracking-[0.3em] text-primary font-medium">
          Section 01 · Financial Analysis
        </span>
        <h2 className="text-5xl font-bold mt-2 tracking-tight text-foreground">Profitability Metrics (2024)</h2>
        <p className="text-muted-foreground mt-2">
          Comprehensive view of Dexcom's profitability performance and operational efficiency
        </p>
      </div>

      <div className="grid grid-cols-2 gap-6 mb-8">
        {metrics.map((metric, idx) => (
          <div key={idx} className={`animate-fade-up stagger-${idx + 1} p-8 rounded-lg bg-card border border-border`}>
            <span className="text-xs uppercase tracking-wider text-muted-foreground">{metric.label}</span>
            <p className="text-5xl font-bold text-foreground mt-4">{metric.value}</p>
            <p className="text-sm text-primary font-medium mt-3 flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              {metric.change}
            </p>
          </div>
        ))}
      </div>

      <div className="animate-fade-up stagger-5 p-6 rounded-lg bg-card border-l-4 border-l-primary">
        <h3 className="font-bold text-foreground mb-3">Key Insights</h3>
        <ul className="space-y-2.5 text-sm text-muted-foreground">
          <li className="flex items-start gap-2">
            <span className="text-primary mt-1">•</span>
            <span>
              Strong revenue growth of 11% YoY demonstrates continued market expansion and product adoption
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary mt-1">•</span>
            <span>EBITDA margin of 27% indicates healthy operational efficiency and pricing power</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary mt-1">•</span>
            <span>
              Net margin improvement reflects maturing business model with better cost management and economies of scale
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary mt-1">•</span>
            <span>
              Operating margin of 14.9% positions Dexcom favorably within the medical device industry benchmarks
            </span>
          </li>
        </ul>
      </div>
    </div>
  )
}
