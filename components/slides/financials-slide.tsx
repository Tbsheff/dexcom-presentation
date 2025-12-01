"use client"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LabelList } from "recharts"
import { revenueData, COLORS } from "@/lib/presentation-data"
import { SlideHeader, SlideLabel, SlideTitle, Card, CardContent, StatCard } from "@/components/ui"

export function FinancialsSlide() {
  const metrics = [
    { label: "Revenue", value: "$4.03B", subtext: "+11% YoY" },
    { label: "EBITDA", value: "$1.1B", subtext: "27% margin" },
    { label: "Net Margin", value: "14.3%", subtext: "" },
    { label: "Operating Margin", value: "14.9%", subtext: "" },
  ]

  const dexcomOnlyData = revenueData.map((d) => ({
    year: d.year,
    revenue: d.Dexcom,
    label: `$${d.Dexcom}B`,
  }))

  return (
    <div className="p-8 lg:p-10 max-w-7xl mx-auto">
      <SlideHeader>
        <SlideLabel>2024 Performance</SlideLabel>
        <SlideTitle>Financial Position</SlideTitle>
      </SlideHeader>

      <div className="grid grid-cols-4 gap-4 mb-6">
        {metrics.map((metric, idx) => (
          <StatCard
            key={idx}
            className={`animate-fade-up stagger-${idx + 1}`}
            label={metric.label}
            value={metric.value}
            subtext={metric.subtext}
            valueColor={metric.subtext ? COLORS.dexcom : undefined}
          />
        ))}
      </div>

      <Card className="animate-fade-up stagger-5">
        <CardContent className="p-5">
          <h3 className="font-semibold text-foreground mb-4">Dexcom Revenue Growth (2020-2024)</h3>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={dexcomOnlyData} margin={{ top: 20, right: 20, bottom: 5, left: 20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
              <XAxis
                dataKey="year"
                stroke="hsl(var(--muted-foreground))"
                tickLine={false}
                axisLine={{ stroke: "hsl(var(--border))" }}
                tick={{ fill: "hsl(var(--foreground))", fontSize: 12 }}
              />
              <YAxis
                stroke="hsl(var(--muted-foreground))"
                tickLine={false}
                axisLine={false}
                tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 11 }}
                tickFormatter={(value) => `$${value}B`}
                domain={[0, 5]}
                ticks={[0, 1, 2, 3, 4, 5]}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "var(--radius)",
                  boxShadow: "var(--shadow-md)",
                }}
                labelStyle={{ color: "hsl(var(--foreground))", fontWeight: 500 }}
                formatter={(value: number) => [`$${value}B`, "Revenue"]}
              />
              <Bar dataKey="revenue" fill={COLORS.dexcom} radius={[4, 4, 0, 0]} name="Revenue">
                <LabelList dataKey="label" position="top" fill="hsl(var(--foreground))" fontSize={11} fontWeight={500} />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  )
}
