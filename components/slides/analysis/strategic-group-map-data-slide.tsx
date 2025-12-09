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
    <div className="px-12 pt-8 pb-20 h-full flex flex-col">
      <div className="mb-8">
        <span className="text-xl uppercase tracking-[0.3em] text-primary font-medium">
          Section 02 · Competitive Analysis
        </span>
        <h2 className="text-5xl font-bold mt-4 tracking-tight text-foreground">Capability Comparison</h2>
        <p className="text-muted-foreground mt-4">Quantitative assessment of competitive capabilities</p>
      </div>

      <div className="animate-fade-up stagger-1 overflow-hidden rounded-lg border border-border">
        <table className="w-full">
          <thead className="bg-muted">
            <tr>
              <th className="text-left px-3 py-2 font-semibold text-foreground text-2xl">Company</th>
              <th className="text-left px-3 py-2 font-semibold text-foreground text-2xl">Revenue (Billions)</th>
              <th className="text-left px-3 py-2 font-semibold text-foreground text-2xl">Digital Ecosystem (1-10)</th>
              <th className="text-left px-3 py-2 font-semibold text-foreground text-2xl">Ease of Use (1-10)</th>
            </tr>
          </thead>
          <tbody className="bg-card">
            {capabilityComparison.map((company, idx) => (
              <tr key={idx} className="border-t border-border">
                <td className="px-3 py-2">
                  <span className="font-semibold text-2xl" style={{ color: getColor(company.company) }}>
                    {company.company}
                  </span>
                </td>
                <td className="px-3 py-2 text-foreground font-semibold text-2xl">${company.revenue.toFixed(2)}B</td>
                <td className="px-3 py-2">
                  <span className={`font-bold text-2xl ${getScoreColor(company.digitalEcosystem)}`}>
                    {company.digitalEcosystem}
                  </span>
                </td>
                <td className="px-3 py-2">
                  <span className={`font-bold text-2xl ${getScoreColor(company.easeOfUse)}`}>
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
