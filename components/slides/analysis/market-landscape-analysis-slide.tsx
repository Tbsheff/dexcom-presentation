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
    <div className="p-8 pb-24 max-w-6xl mx-auto">
      <div className="mb-6">
        <span className="text-[11px] uppercase tracking-[0.3em] text-primary font-medium">
          Section 02 · Industry Analysis
        </span>
        <h2 className="text-5xl font-bold mt-2 tracking-tight text-foreground">Market Landscape</h2>
        <p className="text-muted-foreground mt-1.5 text-sm">CGM market size, growth trajectory, and competitive market share</p>
      </div>

      <div className="grid grid-cols-2 gap-5 mb-5">
        <div className="space-y-2.5">
          <div className="animate-fade-up stagger-1 p-3.5 rounded-lg bg-card border border-border">
            <span className="text-xs uppercase tracking-wider text-muted-foreground">Current Market Size</span>
            <p className="text-3xl font-bold text-foreground mt-1.5">{industryAnalysisData.marketSize.current}</p>
            <p className="text-xs text-muted-foreground mt-1">Global CGM market (2024)</p>
          </div>

          <div className="animate-fade-up stagger-2 p-3.5 rounded-lg bg-card border border-border">
            <span className="text-xs uppercase tracking-wider text-muted-foreground">Projected 2030</span>
            <p className="text-3xl font-bold text-foreground mt-1.5">{industryAnalysisData.marketSize.projected2030}</p>
            <p className="text-xs text-primary font-medium mt-1">CAGR: {industryAnalysisData.marketSize.cagr}</p>
          </div>
        </div>

        <div className="animate-fade-up stagger-3 p-3.5 rounded-lg bg-card border border-border">
          <h3 className="font-semibold text-foreground mb-2 text-center text-sm">Market Share Distribution</h3>
          <ResponsiveContainer width="100%" height={190}>
            <PieChart>
              <Pie
                data={marketShareData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value }) => `${name} ${value}%`}
                outerRadius={65}
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

      <div className="animate-fade-up stagger-4 p-3.5 rounded-lg bg-card border-l-4 border-l-primary">
        <h3 className="font-bold text-foreground mb-2 text-sm">Market Dynamics</h3>
        <div className="grid grid-cols-2 gap-4 text-xs text-muted-foreground">
          <div>
            <p className="font-semibold text-foreground mb-1.5 text-[13px]">Growth Drivers</p>
            <ul className="space-y-1">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">•</span>
                <span>Rising global diabetes prevalence (537M → 700M by 2045)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">•</span>
                <span>Shift from SMBG to CGM accelerating across all patient types</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">•</span>
                <span>Expanding insurance coverage and reimbursement policies</span>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-foreground mb-1.5 text-[13px]">Competitive Landscape</p>
            <ul className="space-y-1">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">•</span>
                <span>Abbott leads with FreeStyle Libre's pharmacy distribution model</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">•</span>
                <span>Dexcom holds premium position with superior accuracy and integration</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">•</span>
                <span>Medtronic leveraging integrated pump-CGM systems</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
