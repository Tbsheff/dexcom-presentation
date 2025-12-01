"use client"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, LabelList } from "recharts"
import { fiveForces, COLORS } from "@/lib/presentation-data"
import { SlideHeader, SlideTitle, SlideSubtitle, Card, CardContent, Badge } from "@/components/ui"

export function FiveForcesSlide() {
  const forces = [
    { force: "Competitive Rivalry", level: "HIGH", color: COLORS.coral, desc: "Abbott, Medtronic compete intensely" },
    { force: "Supplier Power", level: "MOD", color: COLORS.amber, desc: "Vertical integration reduces dependency" },
    { force: "Buyer Power", level: "MOD", color: COLORS.amber, desc: "Brand loyalty balances payer leverage" },
    { force: "Substitution Threat", level: "MOD", color: COLORS.amber, desc: "Non-invasive tech emerging" },
    { force: "New Entry Threat", level: "LOW", color: COLORS.sage, desc: "FDA barriers protect market" },
  ]

  const chartData = fiveForces.map((f) => ({
    ...f,
    label: `${f.value}%`,
  }))

  return (
    <div className="p-8 lg:p-10 max-w-7xl mx-auto">
      <div className="mb-12">
        <SlideHeader>Porter's Analysis</SlideHeader>
        <SlideTitle>Market Attractiveness</SlideTitle>
        <SlideSubtitle>Five Forces analysis of the CGM industry</SlideSubtitle>
      </div>

      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-6 space-y-3">
          {forces.map((item, idx) => (
            <Card key={idx} className={`animate-fade-up stagger-${idx + 1}`}>
              <CardContent className="flex items-center gap-4 pt-6">
                <Badge
                  className="shrink-0 text-white"
                  style={{ backgroundColor: item.color }}
                >
                  {item.level}
                </Badge>
                <div>
                  <h4 className="font-semibold text-foreground text-sm">{item.force}</h4>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="col-span-6 animate-fade-up stagger-6">
          <CardContent className="pt-6 h-full">
            <h4 className="font-semibold text-foreground text-sm mb-4 text-center">Force Intensity (0-100)</h4>
            <ResponsiveContainer width="100%" height="85%">
              <BarChart data={chartData} layout="vertical" margin={{ top: 5, right: 40, bottom: 5, left: 10 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" horizontal={false} />
                <XAxis
                  type="number"
                  domain={[0, 100]}
                  stroke="hsl(var(--foreground))"
                  tickLine={false}
                  axisLine={{ stroke: "hsl(var(--border))" }}
                  tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 11 }}
                  tickFormatter={(value) => `${value}`}
                />
                <YAxis
                  dataKey="force"
                  type="category"
                  stroke="hsl(var(--foreground))"
                  width={85}
                  tickLine={false}
                  axisLine={false}
                  tick={{ fill: "hsl(var(--foreground))", fontSize: 11 }}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px",
                    boxShadow: "0 4px 6px -1px rgba(0,0,0,0.1)",
                  }}
                  formatter={(value: number) => [`${value}/100`, "Intensity"]}
                />
                <Bar dataKey="value" radius={[0, 4, 4, 0]}>
                  {chartData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={entry.value >= 75 ? COLORS.coral : entry.value >= 40 ? COLORS.amber : COLORS.sage}
                    />
                  ))}
                  <LabelList dataKey="label" position="right" fill="hsl(var(--foreground))" fontSize={11} fontWeight={600} />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
