"use client"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from "recharts"
import { capabilityComparison, COMPANY_COLORS } from "@/lib/presentation-data"
import { TrendingUp } from "lucide-react"

export function FinancialComparisonRevenueSlide() {
  const revenueData = capabilityComparison.map(company => ({
    name: company.company,
    revenue: company.revenue
  }))

  const getColor = (name: string) => {
    switch (name) {
      case "Abbott": return COMPANY_COLORS.abbott
      case "Dexcom": return COMPANY_COLORS.dexcom
      case "Medtronic": return COMPANY_COLORS.medtronic
      case "Senseonics": return COMPANY_COLORS.senseonics
      default: return "#888"
    }
  }

  return (
    <div className="p-10 pb-24 max-w-6xl mx-auto">
      <div className="mb-6">
        <span className="text-[11px] uppercase tracking-[0.3em] text-primary font-medium">
          Section 02 · Financial Analysis
        </span>
        <h2 className="text-5xl font-bold mt-1 tracking-tight text-foreground">Revenue Comparison</h2>
        <p className="text-muted-foreground mt-1 text-sm">CGM-related revenue by competitor (in billions USD)</p>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="animate-fade-up stagger-1">
          <ResponsiveContainer width="100%" height={320}>
            <BarChart data={revenueData} margin={{ top: 10, right: 20, left: 10, bottom: 50 }}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
              <XAxis
                dataKey="name"
                angle={-45}
                textAnchor="end"
                height={70}
                className="fill-muted-foreground text-xs"
              />
              <YAxis
                label={{ value: "Revenue (Billions USD)", angle: -90, position: "insideLeft", className: "fill-foreground text-xs" }}
                className="fill-muted-foreground text-xs"
              />
              <Tooltip
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    const data = payload[0]
                    return (
                      <div className="bg-card border border-border p-2 rounded-lg shadow-lg">
                        <p className="font-semibold text-foreground text-xs">{data.payload.name}</p>
                        <p className="text-xs text-muted-foreground">Revenue: ${data.value}B</p>
                      </div>
                    )
                  }
                  return null
                }}
              />
              <Bar dataKey="revenue" radius={[6, 6, 0, 0]}>
                {revenueData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={getColor(entry.name)} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="space-y-2 animate-fade-up stagger-2">
          <div className="p-2.5 rounded-lg bg-card border-2 border-primary">
            <div className="flex items-start gap-2">
              <TrendingUp className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-lg font-bold text-foreground mb-1.5">Abbott Dominates</h3>
                <p className="text-muted-foreground leading-relaxed text-xs">
                  Abbott's FreeStyle Libre generates <span className="font-semibold text-primary">$6.8B</span> in revenue,
                  making it the clear market leader with 70% more revenue than Dexcom.
                </p>
              </div>
            </div>
          </div>

          <div className="p-2.5 rounded-lg bg-card border border-border">
            <h4 className="font-semibold text-foreground mb-1.5 text-sm">Dexcom: Strong #2</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Dexcom's <span className="font-semibold text-foreground">$4.0B</span> revenue demonstrates significant scale,
              though trailing Abbott. Premium positioning enables strong margins despite lower volume.
            </p>
          </div>

          <div className="p-2.5 rounded-lg bg-card border border-border">
            <h4 className="font-semibold text-foreground mb-1.5 text-sm">Medtronic & Senseonics</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Medtronic at <span className="font-semibold text-foreground">$2.8B</span> is a distant third.
              Senseonics at <span className="font-semibold text-foreground">$22.5M</span> remains a niche player
              with minimal market share.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
