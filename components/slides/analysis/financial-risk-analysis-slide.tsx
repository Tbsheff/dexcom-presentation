import { AlertCircle, BarChart3, Scale, TrendingDown } from "lucide-react"
import { financialRisk } from "@/lib/presentation-data"

export function FinancialRiskAnalysisSlide() {
  const riskMetrics = [
    {
      icon: BarChart3,
      title: "Total Debt",
      value: financialRisk.totalDebt,
      subtitle: `Long-Term: ${financialRisk.longTermDebt}`,
      riskLevel: "moderate",
    },
    {
      icon: Scale,
      title: "Liabilities to Assets Ratio",
      value: financialRisk.liabilitiesToAssets,
      subtitle: "Amount of financial leverage",
      riskLevel: "moderate",
    },
    {
      icon: TrendingDown,
      title: "Debt to Equity",
      value: financialRisk.debtToEquity,
      subtitle: "Reliance on debt financing",
      riskLevel: "moderate",
    },
    {
      icon: AlertCircle,
      title: "Debt to EBITDA",
      value: financialRisk.debtToEbitda,
      subtitle: "Ability to pay off debt",
      riskLevel: "low",
    },
  ]

  return (
    <div className="p-16 max-w-6xl mx-auto">
      <div className="mb-12">
        <span className="text-[11px] uppercase tracking-[0.3em] text-primary font-medium">
          Section 01 · Financial Analysis
        </span>
        <h2 className="text-5xl font-bold mt-2 tracking-tight text-foreground">Financial Risk Analysis</h2>
        <p className="text-muted-foreground mt-2">Debt profile and financial stability assessment</p>
      </div>

      <div className="grid grid-cols-2 gap-6 mb-8">
        {riskMetrics.map((metric, idx) => (
          <div
            key={idx}
            className={`animate-fade-up stagger-${idx + 1} p-6 rounded-lg bg-card border border-border flex flex-col`}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 rounded-md flex items-center justify-center bg-primary/10">
                <metric.icon className="w-6 h-6 text-primary" />
              </div>
              <span
                className={`text-xs px-2 py-1 rounded uppercase tracking-wider font-semibold ${
                  metric.riskLevel === "low"
                    ? "bg-sage/20 text-sage"
                    : metric.riskLevel === "moderate"
                      ? "bg-amber/20 text-amber"
                      : "bg-coral/20 text-coral"
                }`}
              >
                {metric.riskLevel}
              </span>
            </div>
            <h3 className="font-bold text-foreground text-lg mb-2">{metric.title}</h3>
            <p className="text-3xl font-bold text-foreground mb-2">{metric.value}</p>
            <p className="text-sm text-muted-foreground">{metric.subtitle}</p>
          </div>
        ))}
      </div>

      <div className="animate-fade-up stagger-5 p-6 rounded-lg bg-card border-l-4 border-l-primary">
        <h3 className="font-bold text-foreground mb-3">Risk Assessment Summary</h3>
        <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
          <div>
            <p className="font-semibold text-foreground mb-2">Manageable Debt Load</p>
            <ul className="space-y-1.5">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Debt to EBITDA ratio of 3.97x is reasonable for growth-stage medtech</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Strong cash generation supports debt servicing capabilities</span>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-foreground mb-2">Balanced Capital Structure</p>
            <ul className="space-y-1.5">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Leverage enables growth investments while maintaining financial flexibility</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Lower risk compared to industry peers with similar growth profiles</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
