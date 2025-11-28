"use client"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LabelList } from "recharts"
import { revenueData, COLORS } from "@/lib/presentation-data"

export function FinancialsSlide() {
  const metrics = [
    { label: "Revenue", value: "$4.03B", change: "+11% YoY" },
    { label: "EBITDA", value: "$1.1B", change: "27% margin" },
    { label: "Net Margin", value: "14.3%", change: "" },
    { label: "Operating Margin", value: "14.9%", change: "" },
  ]

  const dexcomOnlyData = revenueData.map((d) => ({
    year: d.year,
    revenue: d.Dexcom,
    label: `$${d.Dexcom}B`,
  }))

  return (
    <div className="p-16 max-w-6xl mx-auto">
      <div className="mb-12">
        <span className="text-[11px] uppercase tracking-[0.3em] text-primary font-medium">2024 Performance</span>
        <h2 className="text-5xl font-bold mt-2 tracking-tight text-foreground">Financial Position</h2>
      </div>

      <div className="grid grid-cols-4 gap-4 mb-8">
        {metrics.map((metric, idx) => (
          <div key={idx} className={`animate-fade-up stagger-${idx + 1} p-5 rounded-2xl glass-card`}>
            <span className="text-[10px] uppercase tracking-wider text-muted-foreground">{metric.label}</span>
            <p className="text-3xl font-bold text-foreground mt-2">{metric.value}</p>
            {metric.change && <p className="text-xs text-primary font-medium mt-1">{metric.change}</p>}
          </div>
        ))}
      </div>

      <div className="animate-fade-up stagger-5 p-6 rounded-lg bg-card border border-border">
        <h3 className="font-semibold text-foreground mb-4">Dexcom Revenue Growth (2020-2024)</h3>
        <ResponsiveContainer width="100%" height={220}>
          <BarChart data={dexcomOnlyData} margin={{ top: 20, right: 20, bottom: 5, left: 20 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" vertical={false} />
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
              tickFormatter={(value) => `$${value}B`}
              domain={[0, 5]}
              ticks={[0, 1, 2, 3, 4, 5]}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "white",
                border: "1px solid #e5e7eb",
                borderRadius: "8px",
                boxShadow: "0 4px 6px -1px rgba(0,0,0,0.1)",
              }}
              labelStyle={{ color: "#374151", fontWeight: 600 }}
              formatter={(value: number) => [`$${value}B`, "Revenue"]}
            />
            <Bar dataKey="revenue" fill={COLORS.amber} radius={[4, 4, 0, 0]} name="Revenue">
              <LabelList dataKey="label" position="top" fill="#374151" fontSize={11} fontWeight={600} />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
