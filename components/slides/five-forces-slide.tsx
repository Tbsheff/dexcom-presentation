"use client"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, LabelList } from "recharts"
import { fiveForces, COLORS } from "@/lib/presentation-data"

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
    <div className="p-16 max-w-6xl mx-auto">
      <div className="mb-12">
        <span className="text-[11px] uppercase tracking-[0.3em] text-primary font-medium">Porter's Analysis</span>
        <h2 className="text-5xl font-bold mt-2 tracking-tight text-foreground">Market Attractiveness</h2>
        <p className="text-muted-foreground mt-2">Five Forces analysis of the CGM industry</p>
      </div>

      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-6 space-y-3">
          {forces.map((item, idx) => (
            <div
              key={idx}
              className={`animate-fade-up stagger-${idx + 1} flex items-center gap-4 p-4 rounded-lg bg-card border border-border`}
            >
              <div
                className="px-3 py-1 rounded text-xs font-bold text-white shrink-0"
                style={{ backgroundColor: item.color }}
              >
                {item.level}
              </div>
              <div>
                <h4 className="font-semibold text-foreground text-sm">{item.force}</h4>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="col-span-6 animate-fade-up stagger-6 flex items-center justify-center">
          <div className="w-full h-72 p-4 rounded-lg bg-card border border-border">
            <h4 className="font-semibold text-foreground text-sm mb-4 text-center">Force Intensity (0-100)</h4>
            <ResponsiveContainer width="100%" height="85%">
              <BarChart data={chartData} layout="vertical" margin={{ top: 5, right: 40, bottom: 5, left: 10 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" horizontal={false} />
                <XAxis
                  type="number"
                  domain={[0, 100]}
                  stroke="#374151"
                  tickLine={false}
                  axisLine={{ stroke: "#d1d5db" }}
                  tick={{ fill: "#6b7280", fontSize: 11 }}
                  tickFormatter={(value) => `${value}`}
                />
                <YAxis
                  dataKey="force"
                  type="category"
                  stroke="#374151"
                  width={85}
                  tickLine={false}
                  axisLine={false}
                  tick={{ fill: "#374151", fontSize: 11 }}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "white",
                    border: "1px solid #e5e7eb",
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
                  <LabelList dataKey="label" position="right" fill="#374151" fontSize={11} fontWeight={600} />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  )
}
