"use client"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from "recharts"
import { capabilityComparison, COMPANY_COLORS } from "@/lib/presentation-data"
import { TrendingUp } from "lucide-react"
import { useExportMode } from "@/lib/export-context"

export function FinancialComparisonRevenueSlide() {
  const isExport = useExportMode()
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
    <div className="px-12 pt-8 pb-20 h-full flex flex-col">
      <div className="mb-8">
        <span className="text-xl uppercase tracking-[0.3em] text-primary font-medium">
          Section 02 · Financial Analysis
        </span>
        <h2 className="text-5xl font-bold mt-4 tracking-tight text-foreground">Revenue Comparison</h2>
        <p className="text-muted-foreground mt-4 text-2xl">CGM-related revenue by competitor (in billions USD)</p>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="animate-fade-up stagger-1">
          <ResponsiveContainer width="100%" height={320}>
            <BarChart data={revenueData} margin={{ top: 10, right: 20, left: 10, bottom: 50 }}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
              <XAxis
                dataKey="name"
                angle={-45}
                textAnchor="end"
                height={70}
                className="fill-muted-foreground text-xl"
              />
              <YAxis
                label={{ value: "Revenue (Billions USD)", angle: -90, position: "insideLeft", className: "fill-foreground text-xl" }}
                className="fill-muted-foreground text-xl"
              />
              <Tooltip
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    const data = payload[0]
                    return (
                      <div className="bg-card border border-border p-2 rounded-lg shadow-lg">
                        <p className="font-semibold text-foreground text-xl">{data.payload.name}</p>
                        <p className="text-xl text-muted-foreground">Revenue: ${data.value}B</p>
                      </div>
                    )
                  }
                  return null
                }}
              />
              <Bar dataKey="revenue" radius={[6, 6, 0, 0]} isAnimationActive={!isExport}>
                {revenueData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={getColor(entry.name)} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="space-y-5 animate-fade-up stagger-2">
          <div className="p-5 rounded-lg bg-card border-2 border-primary">
            <div className="flex items-start gap-5">
              <TrendingUp className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-1.5">Abbott Dominates</h3>
                <p className="text-muted-foreground leading-relaxed text-xl">
                  Abbott's FreeStyle Libre generates <span className="font-semibold text-primary">$6.8B</span> in revenue,
                  making it the clear market leader with 70% more revenue than Dexcom.
                </p>
              </div>
            </div>
          </div>

          <div className="p-5 rounded-lg bg-card border border-border">
            <h4 className="font-semibold text-foreground mb-1.5 text-2xl">Dexcom: Strong #2</h4>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Dexcom's <span className="font-semibold text-foreground">$4.0B</span> revenue demonstrates significant scale,
              though trailing Abbott. Premium positioning enables strong margins despite lower volume.
            </p>
          </div>

          <div className="p-5 rounded-lg bg-card border border-border">
            <h4 className="font-semibold text-foreground mb-1.5 text-2xl">Medtronic & Senseonics</h4>
            <p className="text-xl text-muted-foreground leading-relaxed">
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
