"use client"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts"
import { revenueData, COMPANY_COLORS } from "@/lib/presentation-data"
import { SlideHeader, SlideLabel, SlideTitle, SlideSubtitle, Card, CardContent, StatCard } from "@/components/ui"
import { useExportMode } from "@/lib/export-context"

export function RevenueComparisonSlide() {
  const isExport = useExportMode()
  return (
    <div className="px-12 pt-8 pb-20 h-full flex flex-col">
      <SlideHeader>
        <SlideLabel>Competitive Context</SlideLabel>
        <SlideTitle>Revenue Comparison</SlideTitle>
        <SlideSubtitle>Abbott and Medtronic are diversified companies — only their diabetes segments shown. Dexcom's entire revenue is diabetes-focused.</SlideSubtitle>
      </SlideHeader>

      <Card className="animate-fade-up mb-6">
        <CardContent className="p-5 h-72">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={revenueData} barCategoryGap="20%" margin={{ top: 10, right: 20, bottom: 10, left: 20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
              <XAxis dataKey="year" stroke="hsl(var(--muted-foreground))" tickLine={false} axisLine={{ stroke: "hsl(var(--border))" }} tick={{ fill: "hsl(var(--foreground))", fontSize: 12 }} />
              <YAxis stroke="hsl(var(--muted-foreground))" tickLine={false} axisLine={false} tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 11 }} tickFormatter={(value) => `$${value}B`} domain={[0, 8]} />
              <Tooltip contentStyle={{ backgroundColor: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: "var(--radius)", boxShadow: "var(--shadow-md)" }} labelStyle={{ color: "hsl(var(--foreground))", fontWeight: 500 }} formatter={(value: number) => [`$${value}B`, ""]} />
              <Legend wrapperStyle={{ paddingTop: "10px" }} formatter={(value) => <span style={{ color: "hsl(var(--foreground))", fontSize: 12 }}>{value}</span>} />
              <Bar dataKey="Dexcom" fill={COMPANY_COLORS.dexcom} radius={[4, 4, 0, 0]} name="Dexcom" isAnimationActive={!isExport} />
              <Bar dataKey="Abbott" fill={COMPANY_COLORS.abbott} radius={[4, 4, 0, 0]} name="Abbott" isAnimationActive={!isExport} />
              <Bar dataKey="Medtronic" fill={COMPANY_COLORS.medtronic} radius={[4, 4, 0, 0]} name="Medtronic" isAnimationActive={!isExport} />
              <Bar dataKey="Senseonics" fill={COMPANY_COLORS.senseonics} radius={[4, 4, 0, 0]} name="Senseonics" isAnimationActive={!isExport} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <div className="animate-fade-up stagger-1 grid grid-cols-4 gap-4">
        <StatCard value="$4.03B" label="Dexcom 2024" subtext="100% diabetes-focused" valueColor={COMPANY_COLORS.dexcom} />
        <StatCard value="$6.8B" label="Abbott 2024" subtext="Diabetes segment only" valueColor={COMPANY_COLORS.abbott} />
        <StatCard value="$2.49B" label="Medtronic 2024" subtext="Diabetes segment only" valueColor={COMPANY_COLORS.medtronic} />
        <StatCard value="$30M" label="Senseonics 2024" subtext="Implantable CGM niche" valueColor={COMPANY_COLORS.senseonics} />
      </div>
    </div>
  )
}
