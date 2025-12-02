"use client"

import { capabilityComparison, COMPANY_COLORS } from "@/lib/presentation-data"

export function StrategicGroupMapDataSlide() {
  const getColor = (company: string) => {
    switch (company) {
      case "Abbott": return COMPANY_COLORS.abbott
      case "Dexcom": return COMPANY_COLORS.dexcom
      case "Medtronic": return COMPANY_COLORS.medtronic
      case "Senseonics": return COMPANY_COLORS.senseonics
      default: return "#888"
    }
  }

  const getScoreColor = (score: number) => {
    if (score >= 8) return "text-green-500"
    if (score >= 6) return "text-amber-500"
    return "text-coral-500"
  }

  return (
    <div className="p-8 pb-20 max-w-6xl mx-auto">
      <div className="mb-6">
        <span className="text-[11px] uppercase tracking-[0.3em] text-primary font-medium">
          Section 02 · Competitive Analysis
        </span>
        <h2 className="text-5xl font-bold mt-2 tracking-tight text-foreground">Capability Comparison</h2>
        <p className="text-muted-foreground mt-2">Quantitative assessment of competitive capabilities</p>
      </div>

      <div className="animate-fade-up stagger-1 overflow-hidden rounded-lg border border-border">
        <table className="w-full">
          <thead className="bg-muted">
            <tr>
              <th className="text-left px-3 py-2 font-semibold text-foreground text-sm">Company</th>
              <th className="text-left px-3 py-2 font-semibold text-foreground text-sm">Revenue (Billions)</th>
              <th className="text-left px-3 py-2 font-semibold text-foreground text-sm">Digital Ecosystem (1-10)</th>
              <th className="text-left px-3 py-2 font-semibold text-foreground text-sm">Ease of Use (1-10)</th>
            </tr>
          </thead>
          <tbody className="bg-card">
            {capabilityComparison.map((company, idx) => (
              <tr key={idx} className="border-t border-border">
                <td className="px-3 py-2">
                  <span className="font-semibold text-sm" style={{ color: getColor(company.company) }}>
                    {company.company}
                  </span>
                </td>
                <td className="px-3 py-2 text-foreground font-semibold text-sm">${company.revenue.toFixed(2)}B</td>
                <td className="px-3 py-2">
                  <span className={`font-bold text-lg ${getScoreColor(company.digitalEcosystem)}`}>
                    {company.digitalEcosystem}
                  </span>
                </td>
                <td className="px-3 py-2">
                  <span className={`font-bold text-lg ${getScoreColor(company.easeOfUse)}`}>
                    {company.easeOfUse}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
