"use client"

import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts"
import { industryAnalysisData, COMPANY_COLORS } from "@/lib/presentation-data"
import { useExportMode } from "@/lib/export-context"

export function MarketLandscapeAnalysisSlide() {
  const isExport = useExportMode()
  const marketShareData = [
    { name: "Abbott", value: 54, color: COMPANY_COLORS.abbott },
    { name: "Dexcom", value: 19, color: COMPANY_COLORS.dexcom },
    { name: "Medtronic", value: 16, color: COMPANY_COLORS.medtronic },
    { name: "Others", value: 11, color: "#94a3b8" },
  ]

  return (
    <div className="px-12 pt-8 pb-20 h-full flex flex-col">
      <div className="mb-8">
        <span className="text-xl uppercase tracking-[0.3em] text-primary font-medium">
          Section 02 · Industry Analysis
        </span>
        <h2 className="text-5xl font-bold mt-4 tracking-tight text-foreground">Market Landscape</h2>
        <p className="text-muted-foreground mt-3 text-2xl">CGM market size, growth trajectory, and competitive market share</p>
      </div>

      <div className="grid grid-cols-2 gap-5 mb-5">
        <div className="space-y-5.5">
          <div className="animate-fade-up stagger-1 p-6.5 rounded-lg bg-card border border-border">
            <span className="text-xl uppercase tracking-wider text-muted-foreground">Current Market Size</span>
            <p className="text-3xl font-bold text-foreground mt-3">{industryAnalysisData.marketSize.current}</p>
            <p className="text-xl text-muted-foreground mt-4">Global CGM market (2024)</p>
          </div>

          <div className="animate-fade-up stagger-2 p-6.5 rounded-lg bg-card border border-border">
            <span className="text-xl uppercase tracking-wider text-muted-foreground">Projected 2030</span>
            <p className="text-3xl font-bold text-foreground mt-3">{industryAnalysisData.marketSize.projected2030}</p>
            <p className="text-xl text-primary font-medium mt-4">CAGR: {industryAnalysisData.marketSize.cagr}</p>
          </div>
        </div>

        <div className="animate-fade-up stagger-3 p-6.5 rounded-lg bg-card border border-border">
          <h3 className="font-semibold text-foreground mb-5 text-center text-2xl">Market Share Distribution</h3>
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
                isAnimationActive={!isExport}
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

      <div className="animate-fade-up stagger-4 p-6.5 rounded-lg bg-card border-l-4 border-l-primary">
        <h3 className="font-bold text-foreground mb-5 text-2xl">Market Dynamics</h3>
        <div className="grid grid-cols-2 gap-8 text-xl text-muted-foreground">
          <div>
            <p className="font-semibold text-foreground mb-1.5 text-[13px]">Growth Drivers</p>
            <ul className="space-y-1">
              <li className="flex items-start gap-5">
                <span className="text-primary mt-0.5">•</span>
                <span>Rising global diabetes prevalence (537M → 700M by 2045)</span>
              </li>
              <li className="flex items-start gap-5">
                <span className="text-primary mt-0.5">•</span>
                <span>Shift from SMBG to CGM accelerating across all patient types</span>
              </li>
              <li className="flex items-start gap-5">
                <span className="text-primary mt-0.5">•</span>
                <span>Expanding insurance coverage and reimbursement policies</span>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-foreground mb-1.5 text-[13px]">Competitive Landscape</p>
            <ul className="space-y-1">
              <li className="flex items-start gap-5">
                <span className="text-primary mt-0.5">•</span>
                <span>Abbott leads with FreeStyle Libre's pharmacy distribution model</span>
              </li>
              <li className="flex items-start gap-5">
                <span className="text-primary mt-0.5">•</span>
                <span>Dexcom holds premium position with superior accuracy and integration</span>
              </li>
              <li className="flex items-start gap-5">
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
