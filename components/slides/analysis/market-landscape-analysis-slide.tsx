"use client"

import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts"
import { industryAnalysisData, COMPANY_COLORS } from "@/lib/presentation-data"

export function MarketLandscapeAnalysisSlide() {
  const marketShareData = [
    { name: "Abbott", value: 54, color: COMPANY_COLORS.abbott },
    { name: "Dexcom", value: 19, color: COMPANY_COLORS.dexcom },
    { name: "Medtronic", value: 16, color: COMPANY_COLORS.medtronic },
    { name: "Others", value: 11, color: "#94a3b8" },
  ]

  return (
    <div className="p-16 max-w-6xl mx-auto">
      <div className="mb-12">
        <span className="text-[11px] uppercase tracking-[0.3em] text-primary font-medium">
          Section 02 · Industry Analysis
        </span>
        <h2 className="text-5xl font-bold mt-2 tracking-tight text-foreground">Market Landscape</h2>
        <p className="text-muted-foreground mt-2">CGM market size, growth trajectory, and competitive market share</p>
      </div>

      <div className="grid grid-cols-2 gap-8 mb-8">
        <div className="space-y-4">
          <div className="animate-fade-up stagger-1 p-6 rounded-lg bg-card border border-border">
            <span className="text-xs uppercase tracking-wider text-muted-foreground">Current Market Size</span>
            <p className="text-5xl font-bold text-foreground mt-3">{industryAnalysisData.marketSize.current}</p>
            <p className="text-sm text-muted-foreground mt-2">Global CGM market (2024)</p>
          </div>

          <div className="animate-fade-up stagger-2 p-6 rounded-lg bg-card border border-border">
            <span className="text-xs uppercase tracking-wider text-muted-foreground">Projected 2030</span>
            <p className="text-5xl font-bold text-foreground mt-3">{industryAnalysisData.marketSize.projected2030}</p>
            <p className="text-sm text-primary font-medium mt-2">CAGR: {industryAnalysisData.marketSize.cagr}</p>
          </div>
        </div>

        <div className="animate-fade-up stagger-3 p-6 rounded-lg bg-card border border-border">
          <h3 className="font-semibold text-foreground mb-4 text-center">Market Share Distribution</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={marketShareData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value }) => `${name} ${value}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {marketShareData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => `${value}%`} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="animate-fade-up stagger-4 p-6 rounded-lg bg-card border-l-4 border-l-primary">
        <h3 className="font-bold text-foreground mb-3">Market Dynamics</h3>
        <div className="grid grid-cols-2 gap-6 text-sm text-muted-foreground">
          <div>
            <p className="font-semibold text-foreground mb-2">Growth Drivers</p>
            <ul className="space-y-1.5">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Rising global diabetes prevalence (537M → 700M by 2045)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Shift from SMBG to CGM accelerating across all patient types</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Expanding insurance coverage and reimbursement policies</span>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-foreground mb-2">Competitive Landscape</p>
            <ul className="space-y-1.5">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Abbott leads with FreeStyle Libre's pharmacy distribution model</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Dexcom holds premium position with superior accuracy and integration</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Medtronic leveraging integrated pump-CGM systems</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
