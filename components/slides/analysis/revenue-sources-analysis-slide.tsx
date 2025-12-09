"use client"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts"
import { revenueSourcesData, COLORS, COMPANY_COLORS } from "@/lib/presentation-data"
import { useExportMode } from "@/lib/export-context"

export function RevenueSourcesAnalysisSlide() {
  const isExport = useExportMode()
  const totalRevenue = revenueSourcesData.reduce((acc, item) => acc + item.amount, 0)

  const dataWithPercentages = revenueSourcesData.map((item) => ({
    ...item,
    amount: item.amount / 1000, // Convert to billions
    percentage: ((item.amount / totalRevenue) * 100).toFixed(1),
  }))

  const chartColors = [COMPANY_COLORS.dexcom, "#1F2937"]

  return (
    <div className="px-12 pt-8 pb-20 h-full flex flex-col">
      <div className="mb-8">
        <span className="text-xl uppercase tracking-[0.3em] text-primary font-medium">
          Section 01 · Financial Analysis
        </span>
        <h2 className="text-5xl font-bold mt-4 tracking-tight text-foreground">Revenue Sources</h2>
        <p className="text-muted-foreground mt-4 text-2xl">
          Dexcom has two main revenue streams with heavy concentration in recurring sensor revenue
        </p>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="animate-fade-up p-6 rounded-lg bg-card border border-border">
          <h3 className="font-semibold text-foreground mb-8 text-center text-2xl">Revenue Breakdown ($ Billions)</h3>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={dataWithPercentages} layout="vertical" margin={{ top: 5, right: 60, bottom: 5, left: 150 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" horizontal={false} />
              <XAxis
                type="number"
                stroke="#374151"
                tickLine={false}
                axisLine={{ stroke: "#d1d5db" }}
                tick={{ fill: "#6b7280", fontSize: 11 }}
                tickFormatter={(value) => `$${value.toFixed(1)}B`}
              />
              <YAxis
                type="category"
                dataKey="category"
                stroke="#374151"
                tickLine={false}
                axisLine={false}
                tick={{ fill: "#374151", fontSize: 12 }}
                width={140}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "white",
                  border: "1px solid #e5e7eb",
                  borderRadius: "8px",
                  boxShadow: "0 4px 6px -1px rgba(0,0,0,0.1)",
                }}
                formatter={(value: number, name: string, props: any) => [
                  `$${value.toFixed(2)}B (${props.payload.percentage}%)`,
                  "Revenue",
                ]}
              />
              <Bar dataKey="amount" radius={[0, 4, 4, 0]} isAnimationActive={!isExport}>
                {dataWithPercentages.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={chartColors[index % chartColors.length]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="space-y-5.5">
          {dataWithPercentages.map((item, idx) => (
            <div
              key={idx}
              className={`animate-fade-up stagger-${idx + 1} p-6 rounded-lg bg-card border border-border`}
              style={{ borderLeftWidth: "4px", borderLeftColor: chartColors[idx] }}
            >
              <h4 className="font-bold text-foreground mb-1 text-2xl">{item.category}</h4>
              <p className="text-xl font-bold mb-1" style={{ color: chartColors[idx] }}>
                ${item.amount.toFixed(2)}B
              </p>
              <p className="text-xl text-muted-foreground mb-5">{item.percentage}% of total revenue</p>
              <p className="text-xl text-muted-foreground leading-snug">
                {idx === 0
                  ? "Recurring revenue from consumable sensors worn continuously by users"
                  : "One-time hardware sales (receivers, transmitters) with lower margin"}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="animate-fade-up stagger-3 mt-3 p-6 rounded-lg bg-card border-l-4 border-l-primary">
        <h3 className="font-bold text-foreground mb-5 text-2xl">Revenue Model Analysis</h3>
        <div className="grid grid-cols-2 gap-6 text-xl text-muted-foreground">
          <div>
            <p className="font-semibold text-foreground mb-1.5 text-xl">Strengths</p>
            <ul className="space-y-1">
              <li className="flex items-start gap-1.5">
                <span className="text-primary mt-0.5">•</span>
                <span>94% recurring revenue provides stable, predictable cash flows</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-primary mt-0.5">•</span>
                <span>Sensor subscription model creates high customer lifetime value</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-primary mt-0.5">•</span>
                <span>Minimal dependence on hardware sales de-risks revenue volatility</span>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-foreground mb-1.5 text-xl">Strategic Implications</p>
            <ul className="space-y-1">
              <li className="flex items-start gap-1.5">
                <span className="text-primary mt-0.5">•</span>
                <span>Razor-and-blade model ensures ongoing customer engagement</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-primary mt-0.5">•</span>
                <span>Predictable revenue enables confident R&D and growth investments</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-primary mt-0.5">•</span>
                <span>High switching costs due to sensor replacement cycle lock-in</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
