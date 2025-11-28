"use client"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts"
import { growthData, COLORS } from "@/lib/presentation-data"

export function GrowthComparisonSlide() {
  const CustomTooltip = ({
    active,
    payload,
    label,
  }: { active?: boolean; payload?: Array<{ value: number; name: string; color: string }>; label?: string }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white border border-gray-200 rounded-lg p-3 shadow-lg">
          <p className="font-semibold text-gray-700 mb-2">{label}</p>
          {payload.map((entry, index) => (
            <p key={index} className="text-sm" style={{ color: entry.color }}>
              {entry.name}: <span className="font-medium">{entry.value}%</span> growth
            </p>
          ))}
        </div>
      )
    }
    return null
  }

  return (
    <div className="p-16 max-w-6xl mx-auto">
      <div className="mb-8">
        <span className="text-[11px] uppercase tracking-[0.3em] text-primary font-medium">Performance</span>
        <h2 className="text-5xl font-bold mt-2 tracking-tight text-foreground">Growth Trajectory</h2>
        <p className="text-muted-foreground mt-2">Year-over-year revenue growth percentage (2021-2024)</p>
      </div>

      <div className="animate-fade-up h-80 p-6 rounded-lg bg-card border border-border">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={growthData} margin={{ top: 10, right: 30, bottom: 10, left: 20 }}>
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
              tickFormatter={(value) => `${value}%`}
              domain={[0, 30]}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend
              wrapperStyle={{ paddingTop: "15px" }}
              formatter={(value) => <span style={{ color: "#374151", fontSize: 12 }}>{value}</span>}
            />
            <Line
              type="monotone"
              dataKey="Dexcom"
              stroke={COLORS.amber}
              strokeWidth={3}
              dot={{ fill: COLORS.amber, r: 6, strokeWidth: 2, stroke: "white" }}
              activeDot={{ r: 8, stroke: COLORS.amber, strokeWidth: 2 }}
            />
            <Line
              type="monotone"
              dataKey="Abbott"
              stroke={COLORS.blue}
              strokeWidth={2}
              dot={{ fill: COLORS.blue, r: 5, strokeWidth: 2, stroke: "white" }}
            />
            <Line
              type="monotone"
              dataKey="Medtronic"
              stroke={COLORS.slate}
              strokeWidth={2}
              dot={{ fill: COLORS.slate, r: 5, strokeWidth: 2, stroke: "white" }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="animate-fade-up stagger-1 mt-6 p-4 rounded-lg bg-primary/10 border border-primary/20">
        <p className="text-center text-primary">
          <strong>Key Insight:</strong> Dexcom maintains strong double-digit growth while Medtronic's diabetes segment
          remains flat at 1-2%
        </p>
      </div>
    </div>
  )
}
