"use client"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LabelList } from "recharts"
import { expenseAllocation, COLORS, COMPANY_COLORS } from "@/lib/presentation-data"

const expenseColors = {
  "Cost of Sales": COMPANY_COLORS.abbott,
  "SG&A": COMPANY_COLORS.medtronic,
  "R&D": COMPANY_COLORS.dexcom,
}

export function ExpenseAnalysisSlide() {
  const chartData = expenseAllocation.map((item) => ({
    ...item,
    amount: item.amount / 1000, // Convert to billions
    label: `$${(item.amount / 1000).toFixed(2)}B`,
    fill: expenseColors[item.category as keyof typeof expenseColors],
  }))

  return (
    <div className="p-8 pb-20 max-w-6xl mx-auto">
      <div className="mb-6">
        <span className="text-[10px] uppercase tracking-[0.3em] text-primary font-medium">
          Section 01 · Financial Analysis
        </span>
        <h2 className="text-5xl font-bold mt-2 tracking-tight text-foreground">Expense Allocation</h2>
        <p className="text-sm text-muted-foreground mt-1">Breakdown of operational expenses and investment priorities (2024)</p>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="animate-fade-up p-3 rounded-lg bg-card border border-border">
          <h3 className="font-semibold text-sm text-foreground mb-2 text-center">Operating Expenses ($ Billions)</h3>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={chartData} margin={{ top: 20, right: 20, bottom: 5, left: 20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" vertical={false} />
              <XAxis
                dataKey="category"
                stroke="#374151"
                tickLine={false}
                axisLine={{ stroke: "#d1d5db" }}
                tick={{ fill: "#374151", fontSize: 11 }}
              />
              <YAxis
                stroke="#374151"
                tickLine={false}
                axisLine={false}
                tick={{ fill: "#6b7280", fontSize: 11 }}
                tickFormatter={(value) => `$${value.toFixed(1)}B`}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "white",
                  border: "1px solid #e5e7eb",
                  borderRadius: "8px",
                  boxShadow: "0 4px 6px -1px rgba(0,0,0,0.1)",
                }}
                formatter={(value: number) => [`$${value.toFixed(2)}B`, "Amount"]}
              />
              <Bar dataKey="amount" radius={[4, 4, 0, 0]}>
                <LabelList dataKey="label" position="top" fill="#374151" fontSize={11} fontWeight={600} />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="space-y-2">
          {expenseAllocation.map((item, idx) => (
            <div key={idx} className={`animate-fade-up stagger-${idx + 1} p-2.5 rounded-lg bg-card border border-border`}>
              <div className="flex items-start justify-between mb-1">
                <h4 className="font-bold text-sm text-foreground">{item.category}</h4>
                <span className="text-lg font-bold" style={{ color: expenseColors[item.category as keyof typeof expenseColors] }}>
                  ${(item.amount / 1000).toFixed(2)}B
                </span>
              </div>
              <p className="text-xs text-muted-foreground leading-snug">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="animate-fade-up stagger-4 mt-3 p-3 rounded-lg bg-card border-l-4 border-l-primary">
        <h3 className="font-bold text-sm text-foreground mb-2">Expense Structure Analysis</h3>
        <div className="grid grid-cols-2 gap-3 text-xs text-muted-foreground">
          <div>
            <p className="font-semibold text-xs text-foreground mb-1.5">Investment Priorities</p>
            <ul className="space-y-1">
              <li className="flex items-start gap-1.5">
                <span className="text-primary mt-0.5">•</span>
                <span className="leading-snug">R&D at $0.55B represents 13.7% of revenue, showing commitment to innovation</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-primary mt-0.5">•</span>
                <span className="leading-snug">SG&A includes significant marketing for direct-to-consumer channel expansion</span>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-xs text-foreground mb-1.5">Cost Dynamics</p>
            <ul className="space-y-1">
              <li className="flex items-start gap-1.5">
                <span className="text-primary mt-0.5">•</span>
                <span className="leading-snug">Cost of sales at 39.5% of revenue reflects manufacturing efficiency gains</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-primary mt-0.5">•</span>
                <span className="leading-snug">Total operating expenses well-managed relative to revenue growth trajectory</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
