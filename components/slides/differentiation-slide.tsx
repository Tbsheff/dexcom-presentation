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
    { title: "Accuracy Leadership", stat: "Best-in-class", desc: "Most accurate readings physicians trust" },
    { title: "Integration Network", stat: "3 pump partners", desc: "Tandem, Omnipod, Beta Bionics + health apps" },
    { title: "User Experience", stat: "30-min warmup", desc: "No fingerstick calibration required" },
    { title: "Clinical Brand", stat: "#1 physician choice", desc: "Endocrinologist preferred" },
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

        <div className="col-span-7 flex flex-col gap-3">
          {features.map((item, idx) => (
            <Card key={idx} className={`animate-fade-up stagger-${idx + 2} flex-1`}>
              <CardContent className="p-4 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="text-lg font-bold text-primary">{idx + 1}</span>
                </div>
                <div>
                  <div className="flex items-baseline gap-2">
                    <h4 className="font-bold text-foreground text-xl">{item.title}</h4>
                    <span className="text-primary font-semibold text-lg">— {item.stat}</span>
                  </div>
                  <p className="text-lg text-muted-foreground">{item.desc}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
