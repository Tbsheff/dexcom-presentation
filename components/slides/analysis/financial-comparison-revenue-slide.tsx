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
        <h2 className="text-5xl font-bold mt-2 tracking-tight text-foreground">Revenue Comparison</h2>
        <p className="text-muted-foreground mt-2">CGM-related revenue by competitor (in billions USD)</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="animate-fade-up stagger-1">
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={revenueData} margin={{ top: 20, right: 30, left: 20, bottom: 60 }}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
              <XAxis
                dataKey="name"
                angle={-45}
                textAnchor="end"
                height={80}
                className="fill-muted-foreground text-sm"
              />
              <YAxis
                label={{ value: "Revenue (Billions USD)", angle: -90, position: "insideLeft", className: "fill-foreground" }}
                className="fill-muted-foreground"
              />
              <Tooltip
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    const data = payload[0]
                    return (
                      <div className="bg-card border border-border p-3 rounded-lg shadow-lg">
                        <p className="font-semibold text-foreground">{data.payload.name}</p>
                        <p className="text-sm text-muted-foreground">Revenue: ${data.value}B</p>
                      </div>
                    )
                  }
                  return null
                }}
              />
              <Bar dataKey="revenue" radius={[8, 8, 0, 0]}>
                {revenueData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={getColor(entry.name)} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="space-y-3 animate-fade-up stagger-2">
          <div className="p-4 rounded-lg bg-card border-2 border-primary">
            <div className="flex items-start gap-3">
              <TrendingUp className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">Abbott Dominates</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Abbott's FreeStyle Libre generates <span className="font-semibold text-primary">$6.8B</span> in revenue,
                  making it the clear market leader with 70% more revenue than Dexcom.
                </p>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-lg bg-card border border-border">
            <h4 className="font-semibold text-foreground mb-2">Dexcom: Strong #2</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Dexcom's <span className="font-semibold text-foreground">$4.0B</span> revenue demonstrates significant scale,
              though trailing Abbott. Premium positioning enables strong margins despite lower volume.
            </p>
          </div>

          <div className="p-4 rounded-lg bg-card border border-border">
            <h4 className="font-semibold text-foreground mb-2">Medtronic & Senseonics</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
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
