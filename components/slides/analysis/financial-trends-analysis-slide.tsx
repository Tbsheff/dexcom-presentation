"use client"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts"
import { financialMetricsOverTime, COLORS, COMPANY_COLORS } from "@/lib/presentation-data"

export function FinancialTrendsAnalysisSlide() {
  // Convert data to billions
  const chartData = financialMetricsOverTime.map(item => ({
    year: item.year,
    revenue: item.revenue / 1000,
    operatingIncome: item.operatingIncome / 1000,
    netIncome: item.netIncome / 1000,
  }))

  return (
    <div className="p-6 pb-20 max-w-6xl mx-auto">
      <div className="mb-6">
        <span className="text-[10px] uppercase tracking-[0.3em] text-primary font-medium">
          Section 01 · Financial Analysis
        </span>
        <h2 className="text-5xl font-bold mt-2 tracking-tight text-foreground">Financial Metrics Over Time</h2>
        <p className="text-muted-foreground mt-1 text-sm">Six-year trend analysis showing strong upward trajectory (2019-2024)</p>
      </div>

      <div className="animate-fade-up p-3 rounded-lg bg-card border border-border mb-3">
        <h3 className="font-semibold text-foreground mb-2 text-sm">All Profitability Metrics Are Improving</h3>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={chartData} margin={{ top: 5, right: 15, bottom: 5, left: 15 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis
              dataKey="year"
              stroke="#374151"
              tickLine={false}
              axisLine={{ stroke: "#d1d5db" }}
              tick={{ fill: "#374151", fontSize: 11 }}
            />
            <YAxis
              stroke="#374151"
              tickLine={false}
              axisLine={false}
              tick={{ fill: "#6b7280", fontSize: 10 }}
              tickFormatter={(value) => `$${value.toFixed(1)}B`}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "white",
                border: "1px solid #e5e7eb",
                borderRadius: "8px",
                boxShadow: "0 4px 6px -1px rgba(0,0,0,0.1)",
              }}
              labelStyle={{ color: "#374151", fontWeight: 600 }}
              formatter={(value: number) => [`$${value.toFixed(2)}B`, ""]}
            />
            <Legend
              wrapperStyle={{ paddingTop: "10px" }}
              formatter={(value) => <span style={{ color: "#374151", fontSize: 11 }}>{value}</span>}
            />
            <Line
              type="monotone"
              dataKey="revenue"
              stroke={COMPANY_COLORS.abbott}
              strokeWidth={2.5}
              dot={{ fill: COMPANY_COLORS.abbott, r: 3 }}
              name="Revenue"
            />
            <Line
              type="monotone"
              dataKey="operatingIncome"
              stroke={COMPANY_COLORS.dexcom}
              strokeWidth={2.5}
              dot={{ fill: COMPANY_COLORS.dexcom, r: 3 }}
              name="Operating Income"
            />
            <Line
              type="monotone"
              dataKey="netIncome"
              stroke={COMPANY_COLORS.medtronic}
              strokeWidth={2.5}
              dot={{ fill: COMPANY_COLORS.medtronic, r: 3 }}
              name="Net Income"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-3 gap-3">
        <div className="animate-fade-up stagger-1 p-3 rounded-lg bg-card border-l-4" style={{ borderLeftColor: COMPANY_COLORS.abbott }}>
          <h4 className="font-bold text-foreground mb-1.5 text-sm">Revenue Growth</h4>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Consistent YoY growth from $1.45B (2019) to $4.03B (2024), demonstrating strong market adoption and
            expansion into new segments
          </p>
        </div>

        <div className="animate-fade-up stagger-2 p-3 rounded-lg bg-card border-l-4" style={{ borderLeftColor: COMPANY_COLORS.dexcom }}>
          <h4 className="font-bold text-foreground mb-1.5 text-sm">Operating Income</h4>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Significant improvement from $0.10B (2019) to $0.60B (2024), showing operational leverage and improving
            efficiency as the business scales
          </p>
        </div>

        <div className="animate-fade-up stagger-3 p-3 rounded-lg bg-card border-l-4" style={{ borderLeftColor: COMPANY_COLORS.medtronic }}>
          <h4 className="font-bold text-foreground mb-1.5 text-sm">Net Income</h4>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Strong growth trajectory from $0.07B (2019) to $0.58B (2024), indicating successful transition to profitability
            and sustainable business model
          </p>
        </div>
      </div>
    </div>
  )
}
