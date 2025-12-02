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
import { SlideHeader, SlideLabel, SlideTitle, Card, CardContent } from "@/components/ui"

export function DifferentiationSlide() {
  const features = [
    { title: "Accuracy Focus", desc: "MARD scores physicians trust" },
    { title: "Integration Network", desc: "Pumps, apps, care platforms" },
    { title: "User Experience", desc: "30-min warmup, no calibration" },
    { title: "Clinical Brand", desc: "Endocrinologist relationships" },
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
    <div className="px-12 pt-6 pb-20 h-full flex flex-col">
      <SlideHeader className="mb-4">
        <SlideLabel>Core Strategy</SlideLabel>
        <SlideTitle>Differentiation Strategy</SlideTitle>
      </SlideHeader>

      <Card className="animate-fade-up mb-4 border-l-4 border-l-primary bg-primary/5">
        <CardContent className="p-5">
          <p className="text-2xl text-foreground leading-relaxed">
            <span className="font-bold text-primary">Beyond glucose readings.</span> Dexcom's strategy centers on building a connected care network.
          </p>
        </CardContent>
      </Card>

      <div className="grid grid-cols-12 gap-4 flex-1 min-h-0">
        <Card className="col-span-5 animate-fade-up stagger-1">
          <CardContent className="p-4 h-full flex flex-col">
            <h3 className="font-bold text-foreground text-lg mb-1">Competitive Comparison</h3>
            <p className="text-sm text-muted-foreground mb-2">Scores out of 100</p>
            <div className="flex-1 min-h-0">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={differentiationRadar}>
                  <PolarGrid gridType="polygon" stroke="#9ca3af" />
                  <PolarAngleAxis
                    dataKey="attr"
                    stroke="hsl(var(--foreground))"
                    tick={{ fill: "hsl(var(--foreground))", fontSize: 10, fontWeight: 500 }}
                  />
                  <PolarRadiusAxis
                    angle={30}
                    domain={[0, 100]}
                    stroke="hsl(var(--border))"
                    tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 9 }}
                    tickFormatter={(value) => `${value}`}
                  />
                  <Radar
                    name="Dexcom"
                    dataKey="Dexcom"
                    stroke={COLORS.dexcom}
                    fill={COLORS.dexcom}
                    fillOpacity={0.45}
                    strokeWidth={3}
                  />
                  <Radar
                    name="Abbott"
                    dataKey="Abbott"
                    stroke={COLORS.abbott}
                    fill="none"
                    strokeWidth={2}
                    strokeDasharray="6 4"
                  />
                  <Radar
                    name="Medtronic"
                    dataKey="Medtronic"
                    stroke={COLORS.medtronic}
                    fill="none"
                    strokeWidth={2}
                    strokeDasharray="3 3"
                  />
                  <Radar
                    name="Senseonics"
                    dataKey="Senseonics"
                    stroke={COLORS.senseonics}
                    fill="none"
                    strokeWidth={2}
                    strokeDasharray="8 3"
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend
                    wrapperStyle={{ paddingTop: "5px" }}
                    formatter={(value) => <span style={{ color: "hsl(var(--foreground))", fontSize: 10 }}>{value}</span>}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <div className="col-span-7 grid grid-cols-2 gap-3">
          {features.map((item, idx) => (
            <Card key={idx} className={`animate-fade-up stagger-${idx + 2}`}>
              <CardContent className="p-4">
                <h4 className="font-bold text-foreground text-xl">{item.title}</h4>
                <p className="text-lg text-muted-foreground mt-1">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
