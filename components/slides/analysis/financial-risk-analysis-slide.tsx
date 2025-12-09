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
    <div className="px-12 pt-8 pb-20 h-full flex flex-col">
      <div className="mb-8">
        <span className="text-xl uppercase tracking-[0.3em] text-primary font-medium">
          Section 01 · Financial Analysis
        </span>
        <h2 className="text-5xl font-bold mt-4 tracking-tight text-foreground">Financial Risk Analysis</h2>
        <p className="text-muted-foreground mt-4 text-2xl">Debt profile and financial stability assessment</p>
      </div>

      <div className="flex-1 grid grid-cols-2 gap-6 content-start">
        {riskMetrics.map((metric, idx) => (
          <div
            key={idx}
            className={`animate-fade-up stagger-${idx + 1} p-5 rounded-lg bg-card border border-border flex flex-col`}
          >
            <div className="flex items-start justify-between mb-5">
              <div className="w-10 h-10 rounded-md flex items-center justify-center bg-primary/10">
                <metric.icon className="w-5 h-5 text-primary" />
              </div>
              <span
                className={`text-2xl px-1.5 py-0.5 rounded uppercase tracking-wider font-semibold ${
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
            <h3 className="font-bold text-foreground text-2xl mb-1.5">{metric.title}</h3>
            <p className="text-xl font-bold text-foreground mb-1">{metric.value}</p>
            <p className="text-xl text-muted-foreground">{metric.subtitle}</p>
          </div>
        ))}
      </div>

      <div className="animate-fade-up stagger-5 p-6 rounded-lg bg-card border-l-4 border-l-primary">
        <h3 className="font-bold text-foreground mb-5 text-2xl">Risk Assessment Summary</h3>
        <div className="grid grid-cols-2 gap-6 text-xl text-muted-foreground">
          <div>
            <p className="font-semibold text-foreground mb-1.5">Manageable Debt Load</p>
            <ul className="space-y-1">
              <li className="flex items-start gap-5">
                <span className="text-primary mt-0.5">•</span>
                <span>Debt to EBITDA ratio of 3.97x is reasonable for growth-stage medtech</span>
              </li>
              <li className="flex items-start gap-5">
                <span className="text-primary mt-0.5">•</span>
                <span>Strong cash generation supports debt servicing capabilities</span>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-foreground mb-1.5">Balanced Capital Structure</p>
            <ul className="space-y-1">
              <li className="flex items-start gap-5">
                <span className="text-primary mt-0.5">•</span>
                <span>Leverage enables growth investments while maintaining financial flexibility</span>
              </li>
              <li className="flex items-start gap-5">
                <span className="text-primary mt-0.5">•</span>
                <span>Lower risk compared to industry peers with similar growth profiles</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
