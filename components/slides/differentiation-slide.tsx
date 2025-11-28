"use client"

import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts"
import { differentiationRadar, COLORS } from "@/lib/presentation-data"

export function DifferentiationSlide() {
  const features = [
    { title: "Industry-Leading Accuracy", desc: "MARD scores that physicians trust for treatment decisions" },
    { title: "Deepest Integration Network", desc: "Connected to insulin pumps, health apps, and care platforms" },
    { title: "Superior User Experience", desc: "Minimal warmup, no calibration, seamless app experience" },
    { title: "Trusted Clinical Brand", desc: "First choice recommendation from endocrinologists" },
  ]

  const CustomTooltip = ({
    active,
    payload,
  }: { active?: boolean; payload?: Array<{ name: string; value: number; color: string }> }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white border border-gray-200 rounded-lg p-3 shadow-lg">
          {payload.map((entry, index) => (
            <p key={index} className="text-sm" style={{ color: entry.color }}>
              {entry.name}: <span className="font-medium">{entry.value}/100</span>
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
        <span className="text-[11px] uppercase tracking-[0.3em] text-primary font-medium">Core Strategy</span>
        <h2 className="text-5xl font-bold mt-2 tracking-tight text-foreground">Differentiation Strategy</h2>
      </div>

      <div className="animate-fade-up mb-8 p-6 rounded-lg bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border-l-4 border-primary">
        <p className="text-lg text-foreground">
          <span className="font-semibold text-primary">Competitors offer a glucose reading.</span> Dexcom offers a
          connected care network.
        </p>
      </div>

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-5 animate-fade-up stagger-1 p-6 rounded-lg bg-card border border-border">
          <h3 className="font-semibold text-foreground mb-2">Competitive Comparison</h3>
          <p className="text-xs text-muted-foreground mb-4">Scores out of 100 across key attributes</p>
          <ResponsiveContainer width="100%" height={280}>
            <RadarChart data={differentiationRadar}>
              <PolarGrid stroke="#d1d5db" />
              <PolarAngleAxis
                dataKey="attr"
                stroke="#374151"
                tick={{ fill: "#374151", fontSize: 11, fontWeight: 500 }}
              />
              <PolarRadiusAxis
                angle={30}
                domain={[0, 100]}
                stroke="#e5e7eb"
                tick={{ fill: "#6b7280", fontSize: 10 }}
                tickFormatter={(value) => `${value}`}
              />
              <Radar
                name="Dexcom"
                dataKey="Dexcom"
                stroke={COLORS.amber}
                fill={COLORS.amber}
                fillOpacity={0.35}
                strokeWidth={2}
              />
              <Radar
                name="Abbott"
                dataKey="Abbott"
                stroke={COLORS.blue}
                fill={COLORS.blue}
                fillOpacity={0.15}
                strokeWidth={2}
                strokeDasharray="4 4"
              />
              <Tooltip content={<CustomTooltip />} />
              <Legend
                wrapperStyle={{ paddingTop: "10px" }}
                formatter={(value) => <span style={{ color: "#374151", fontSize: 11 }}>{value}</span>}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>

        <div className="col-span-7 space-y-3">
          {features.map((item, idx) => (
            <div
              key={idx}
              className={`animate-fade-up stagger-${idx + 2} p-4 rounded-lg bg-card border border-border hover:border-primary/30 transition-colors`}
            >
              <h4 className="font-semibold text-foreground">{item.title}</h4>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
