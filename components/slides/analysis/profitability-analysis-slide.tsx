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
    <div className="p-10 pb-24 max-w-6xl mx-auto">
      <div className="mb-6">
        <span className="text-[11px] uppercase tracking-[0.3em] text-primary font-medium">
          Section 01 · Financial Analysis
        </span>
        <h2 className="text-5xl font-bold mt-1 tracking-tight text-foreground">Profitability Metrics (2024)</h2>
        <p className="text-muted-foreground mt-1 text-sm">
          Comprehensive view of Dexcom's profitability performance and operational efficiency
        </p>
      </div>

      <div className="grid grid-cols-2 gap-2.5 mb-2.5">
        {metrics.map((metric, idx) => (
          <div key={idx} className={`animate-fade-up stagger-${idx + 1} p-2.5 rounded-lg bg-card border border-border`}>
            <span className="text-[10px] uppercase tracking-wider text-muted-foreground">{metric.label}</span>
            <p className="text-xl font-bold text-foreground mt-2">{metric.value}</p>
            <p className="text-xs text-primary font-medium mt-1.5 flex items-center gap-1.5">
              <TrendingUp className="w-3 h-3" />
              {metric.change}
            </p>
          </div>
        ))}
      </div>

      <div className="animate-fade-up stagger-5 p-3 rounded-lg bg-card border-l-4 border-l-primary">
        <h3 className="font-bold text-foreground mb-2 text-sm">Key Insights</h3>
        <ul className="space-y-1.5 text-xs text-muted-foreground">
          <li className="flex items-start gap-2">
            <span className="text-primary mt-0.5">•</span>
            <span>
              Strong revenue growth of 11% YoY demonstrates continued market expansion and product adoption
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary mt-0.5">•</span>
            <span>EBITDA margin of 27% indicates healthy operational efficiency and pricing power</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary mt-0.5">•</span>
            <span>
              Net margin improvement reflects maturing business model with better cost management and economies of scale
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary mt-0.5">•</span>
            <span>
              Operating margin of 14.9% positions Dexcom favorably within the medical device industry benchmarks
            </span>
          </li>
        </ul>
      </div>
    </div>
  )
}
