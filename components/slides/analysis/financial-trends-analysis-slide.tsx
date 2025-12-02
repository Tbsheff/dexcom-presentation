"use client"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts"
import { financialMetricsOverTime, COLORS } from "@/lib/presentation-data"

export function FinancialTrendsAnalysisSlide() {
  return (
    <div className="p-10 pb-24 max-w-6xl mx-auto">
      <div className="mb-6">
        <span className="text-[11px] uppercase tracking-[0.3em] text-primary font-medium">
          Section 01 · Financial Analysis
        </span>
        <h2 className="text-5xl font-bold mt-2 tracking-tight text-foreground">Financial Metrics Over Time</h2>
        <p className="text-muted-foreground mt-2">Six-year trend analysis showing strong upward trajectory (2019-2024)</p>
      </div>

      <div className="animate-fade-up p-4 rounded-lg bg-card border border-border mb-4">
        <h3 className="font-semibold text-foreground mb-4">All Profitability Metrics Are Improving</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={financialMetricsOverTime} margin={{ top: 10, right: 20, bottom: 10, left: 20 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis
              dataKey="year"
              stroke="#374151"
              tickLine={false}
              axisLine={{ stroke: "#d1d5db" }}
              tick={{ fill: "#374151", fontSize: 12 }}
            />
            <YAxis
              stroke="#374151"
              tickLine={false}
              axisLine={false}
              tick={{ fill: "#6b7280", fontSize: 11 }}
              tickFormatter={(value) => `$${value}M`}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "white",
                border: "1px solid #e5e7eb",
                borderRadius: "8px",
                boxShadow: "0 4px 6px -1px rgba(0,0,0,0.1)",
              }}
              labelStyle={{ color: "#374151", fontWeight: 600 }}
              formatter={(value: number) => [`$${value}M`, ""]}
            />
            <Legend
              wrapperStyle={{ paddingTop: "15px" }}
              formatter={(value) => <span style={{ color: "#374151", fontSize: 12 }}>{value}</span>}
            />
            <Line
              type="monotone"
              dataKey="revenue"
              stroke={COLORS.blue}
              strokeWidth={3}
              dot={{ fill: COLORS.blue, r: 4 }}
              name="Revenue"
            />
            <Line
              type="monotone"
              dataKey="operatingIncome"
              stroke={COLORS.sage}
              strokeWidth={3}
              dot={{ fill: COLORS.sage, r: 4 }}
              name="Operating Income"
            />
            <Line
              type="monotone"
              dataKey="netIncome"
              stroke={COLORS.coral}
              strokeWidth={3}
              dot={{ fill: COLORS.coral, r: 4 }}
              name="Net Income"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="animate-fade-up stagger-1 p-4 rounded-lg bg-card border-l-4 border-l-blue">
          <h4 className="font-bold text-foreground mb-2">Revenue Growth</h4>
          <p className="text-sm text-muted-foreground">
            Consistent YoY growth from $1.45B (2019) to $4.03B (2024), demonstrating strong market adoption and
            expansion into new segments
          </p>
        </div>

        <div className="animate-fade-up stagger-2 p-4 rounded-lg bg-card border-l-4 border-l-sage">
          <h4 className="font-bold text-foreground mb-2">Operating Income</h4>
          <p className="text-sm text-muted-foreground">
            Significant improvement from $103M (2019) to $600M (2024), showing operational leverage and improving
            efficiency as the business scales
          </p>
        </div>

        <div className="animate-fade-up stagger-3 p-4 rounded-lg bg-card border-l-4 border-l-coral">
          <h4 className="font-bold text-foreground mb-2">Net Income</h4>
          <p className="text-sm text-muted-foreground">
            Strong growth trajectory from $73M (2019) to $576M (2024), indicating successful transition to profitability
            and sustainable business model
          </p>
        </div>
      </div>
    </div>
  )
}
