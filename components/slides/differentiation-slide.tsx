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
import { SlideHeader, SlideTitle, Card, CardContent } from "@/components/ui"

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
        <div className="bg-card border border-border rounded-lg p-3 shadow-lg">
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
    <div className="p-8 lg:p-10 max-w-7xl mx-auto">
      <div className="mb-8">
        <SlideHeader>Core Strategy</SlideHeader>
        <SlideTitle>Differentiation Strategy</SlideTitle>
      </div>

      <Card className="animate-fade-up mb-8 bg-muted">
        <CardContent className="pt-6">
          <p className="text-lg text-foreground">
            <span className="font-semibold text-primary">Competitors offer a glucose reading.</span> Dexcom offers a
            connected care network.
          </p>
        </CardContent>
      </Card>

      <div className="grid grid-cols-12 gap-6">
        <Card className="col-span-5 animate-fade-up stagger-1">
          <CardContent className="pt-6">
            <h3 className="font-semibold text-foreground mb-2">Competitive Comparison</h3>
            <p className="text-xs text-muted-foreground mb-4">Scores out of 100 across key attributes</p>
            <ResponsiveContainer width="100%" height={280}>
              <RadarChart data={differentiationRadar}>
                <PolarGrid stroke="hsl(var(--border))" />
                <PolarAngleAxis
                  dataKey="attr"
                  stroke="hsl(var(--foreground))"
                  tick={{ fill: "hsl(var(--foreground))", fontSize: 11, fontWeight: 500 }}
                />
                <PolarRadiusAxis
                  angle={30}
                  domain={[0, 100]}
                  stroke="hsl(var(--border))"
                  tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 10 }}
                  tickFormatter={(value) => `${value}`}
                />
                <Radar
                  name="Dexcom"
                  dataKey="Dexcom"
                  stroke={COLORS.dexcom}
                  fill={COLORS.dexcom}
                  fillOpacity={0.35}
                  strokeWidth={2}
                />
                <Radar
                  name="Abbott"
                  dataKey="Abbott"
                  stroke={COLORS.abbott}
                  fill={COLORS.abbott}
                  fillOpacity={0.15}
                  strokeWidth={2}
                  strokeDasharray="4 4"
                />
                <Radar
                  name="Medtronic"
                  dataKey="Medtronic"
                  stroke={COLORS.medtronic}
                  fill={COLORS.medtronic}
                  fillOpacity={0.1}
                  strokeWidth={2}
                  strokeDasharray="2 2"
                />
                <Radar
                  name="Senseonics"
                  dataKey="Senseonics"
                  stroke={COLORS.senseonics}
                  fill={COLORS.senseonics}
                  fillOpacity={0.1}
                  strokeWidth={2}
                  strokeDasharray="6 2"
                />
                <Tooltip content={<CustomTooltip />} />
                <Legend
                  wrapperStyle={{ paddingTop: "10px" }}
                  formatter={(value) => <span style={{ color: "hsl(var(--foreground))", fontSize: 11 }}>{value}</span>}
                />
              </RadarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <div className="col-span-7 space-y-3">
          {features.map((item, idx) => (
            <Card key={idx} className={`animate-fade-up stagger-${idx + 2}`}>
              <CardContent className="pt-6">
                <h4 className="font-semibold text-foreground">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
