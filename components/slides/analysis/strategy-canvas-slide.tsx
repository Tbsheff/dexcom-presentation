"use client"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts"
import { strategyCanvasData, COLORS } from "@/lib/presentation-data"

export function StrategyCanvasSlide() {
  return (
    <div className="p-8 pb-20 max-w-6xl mx-auto">
      <div className="mb-6">
        <span className="text-[11px] uppercase tracking-[0.3em] text-primary font-medium">
          Section 03 · Unique Value
        </span>
        <h2 className="text-5xl font-bold mt-2 tracking-tight text-foreground">Strategy Canvas</h2>
        <p className="text-muted-foreground mt-2">
          Competitive comparison across five key dimensions: Accuracy, Duration, Calibration, Comfort, and Integration
        </p>
      </div>

      <div className="animate-fade-up p-4 rounded-lg bg-card border border-border mb-3">
        <ResponsiveContainer width="100%" height={320}>
          <LineChart data={strategyCanvasData} margin={{ top: 15, right: 25, bottom: 15, left: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis
              dataKey="dimension"
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
              domain={[0, 100]}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "white",
                border: "1px solid #e5e7eb",
                borderRadius: "8px",
                boxShadow: "0 4px 6px -1px rgba(0,0,0,0.1)",
              }}
              labelStyle={{ color: "#374151", fontWeight: 600 }}
            />
            <Legend
              wrapperStyle={{ paddingTop: "10px" }}
              formatter={(value) => <span style={{ color: "#374151", fontSize: 11 }}>{value}</span>}
            />
            <Line
              type="monotone"
              dataKey="Dexcom G7"
              stroke={COLORS.dexcom}
              strokeWidth={3}
              dot={{ fill: COLORS.dexcom, r: 5 }}
            />
            <Line
              type="monotone"
              dataKey="Libre 3"
              stroke={COLORS.amber}
              strokeWidth={3}
              dot={{ fill: COLORS.amber, r: 5 }}
            />
            <Line
              type="monotone"
              dataKey="Guardian 4"
              stroke={COLORS.blue}
              strokeWidth={3}
              dot={{ fill: COLORS.blue, r: 5 }}
            />
            <Line
              type="monotone"
              dataKey="Eversense E3"
              stroke="#d946ef"
              strokeWidth={3}
              dot={{ fill: "#d946ef", r: 5 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-3 gap-3">
        <div className="animate-fade-up stagger-1 p-3 rounded-lg bg-card border-l-4 border-l-primary">
          <h4 className="font-bold text-foreground mb-1 text-sm">Dexcom's Strengths</h4>
          <p className="text-xs text-muted-foreground">
            Leads in Accuracy (95) and Integration (100), with strong Calibration convenience (no fingersticks required)
          </p>
        </div>

        <div className="animate-fade-up stagger-2 p-3 rounded-lg bg-card border-l-4 border-l-amber">
          <h4 className="font-bold text-foreground mb-1 text-sm">Competitive Positioning</h4>
          <p className="text-xs text-muted-foreground">
            Libre 3 competes on Comfort (90) and Duration (75), while Eversense E3 dominates Duration (100) with
            year-long sensor
          </p>
        </div>

        <div className="animate-fade-up stagger-3 p-3 rounded-lg bg-card border-l-4 border-l-blue">
          <h4 className="font-bold text-foreground mb-1 text-sm">Strategic Insight</h4>
          <p className="text-xs text-muted-foreground">
            Dexcom differentiates through accuracy and ecosystem integration rather than competing solely on wear
            duration or comfort
          </p>
        </div>
      </div>
    </div>
  )
}
