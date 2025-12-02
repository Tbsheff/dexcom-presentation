"use client"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts"
import { growthData, COLORS } from "@/lib/presentation-data"
import { SlideHeader, SlideLabel, SlideTitle, SlideSubtitle, Card, CardContent } from "@/components/ui"

export function GrowthComparisonSlide() {
  const CustomTooltip = ({ active, payload, label }: { active?: boolean; payload?: Array<{ value: number; name: string; color: string }>; label?: string }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-card border border-border rounded-md p-3 shadow-md">
          <p className="font-medium text-foreground mb-2">{label}</p>
          {payload.map((entry, index) => (
            <p key={index} className="text-sm" style={{ color: entry.color }}>
              {entry.name}: <span className="font-medium">{entry.value}%</span>
            </p>
          ))}
        </div>
      )
    }
    return null
  }

  return (
    <div className="px-12 pt-8 pb-20 h-full flex flex-col">
      <SlideHeader>
        <SlideLabel>Performance</SlideLabel>
        <SlideTitle>Growth Trajectory</SlideTitle>
        <SlideSubtitle>Year-over-year revenue growth reflects each company's market position and strategic focus</SlideSubtitle>
      </SlideHeader>

      <Card className="animate-fade-up mb-4">
        <CardContent className="p-5 h-72">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={growthData} margin={{ top: 10, right: 30, bottom: 10, left: 20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
              <XAxis dataKey="year" stroke="hsl(var(--muted-foreground))" tickLine={false} axisLine={{ stroke: "hsl(var(--border))" }} tick={{ fill: "hsl(var(--foreground))", fontSize: 12 }} />
              <YAxis stroke="hsl(var(--muted-foreground))" tickLine={false} axisLine={false} tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 11 }} tickFormatter={(value) => `${value}%`} domain={[0, 50]} />
              <Tooltip content={<CustomTooltip />} />
              <Legend wrapperStyle={{ paddingTop: "10px" }} formatter={(value) => <span style={{ color: "hsl(var(--foreground))", fontSize: 12 }}>{value}</span>} />
              <Line type="monotone" dataKey="Dexcom" stroke={COLORS.dexcom} strokeWidth={3} dot={{ fill: COLORS.dexcom, r: 5, strokeWidth: 2, stroke: "white" }} activeDot={{ r: 7 }} />
              <Line type="monotone" dataKey="Abbott" stroke={COLORS.abbott} strokeWidth={2} dot={{ fill: COLORS.abbott, r: 4, strokeWidth: 2, stroke: "white" }} />
              <Line type="monotone" dataKey="Medtronic" stroke={COLORS.medtronic} strokeWidth={2} dot={{ fill: COLORS.medtronic, r: 4, strokeWidth: 2, stroke: "white" }} />
              <Line type="monotone" dataKey="Senseonics" stroke={COLORS.senseonics} strokeWidth={2} dot={{ fill: COLORS.senseonics, r: 4, strokeWidth: 2, stroke: "white" }} />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  )
}
