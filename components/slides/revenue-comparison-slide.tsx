"use client"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts"
import { revenueData, COLORS } from "@/lib/presentation-data"

export function RevenueComparisonSlide() {
  return (
    <div className="p-16 max-w-6xl mx-auto">
      <div className="mb-8">
        <span className="text-[11px] uppercase tracking-[0.3em] text-primary font-medium">Competitive Context</span>
        <h2 className="text-5xl font-bold mt-2 tracking-tight text-foreground">Revenue Comparison</h2>
        <p className="text-muted-foreground mt-2">Diabetes segment revenue in billions USD (2020-2024)</p>
      </div>

      <div className="animate-fade-up h-80 p-6 rounded-lg bg-card border border-border">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={revenueData} barCategoryGap="20%" margin={{ top: 10, right: 20, bottom: 10, left: 20 }}>
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
              domain={[0, 8]}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "white",
                border: "1px solid #e5e7eb",
                borderRadius: "8px",
                boxShadow: "0 4px 6px -1px rgba(0,0,0,0.1)",
              }}
              labelStyle={{ color: "#374151", fontWeight: 600 }}
              formatter={(value: number) => [`$${value}B`, ""]}
            />
            <Legend
              wrapperStyle={{ paddingTop: "15px" }}
              formatter={(value) => <span style={{ color: "#374151", fontSize: 12 }}>{value}</span>}
            />
            <Bar dataKey="Dexcom" fill={COLORS.amber} radius={[4, 4, 0, 0]} name="Dexcom" />
            <Bar dataKey="Abbott" fill={COLORS.blue} radius={[4, 4, 0, 0]} name="Abbott" />
            <Bar dataKey="Medtronic" fill={COLORS.slate} radius={[4, 4, 0, 0]} name="Medtronic" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="animate-fade-up stagger-1 mt-6 grid grid-cols-3 gap-4">
        <div className="p-4 rounded-lg bg-card border border-border text-center">
          <p className="text-3xl font-bold" style={{ color: COLORS.amber }}>
            $4.03B
          </p>
          <p className="text-sm text-muted-foreground">Dexcom 2024</p>
          <p className="text-xs text-muted-foreground/70">100% diabetes-focused</p>
        </div>
        <div className="p-4 rounded-lg bg-card border border-border text-center">
          <p className="text-3xl font-bold" style={{ color: COLORS.blue }}>
            $6.8B
          </p>
          <p className="text-sm text-muted-foreground">Abbott 2024</p>
          <p className="text-xs text-muted-foreground/70">Diabetes segment only</p>
        </div>
        <div className="p-4 rounded-lg bg-card border border-border text-center">
          <p className="text-3xl font-bold" style={{ color: COLORS.slate }}>
            $2.49B
          </p>
          <p className="text-sm text-muted-foreground">Medtronic 2024</p>
          <p className="text-xs text-muted-foreground/70">Diabetes segment only</p>
        </div>
      </div>
    </div>
  )
}
