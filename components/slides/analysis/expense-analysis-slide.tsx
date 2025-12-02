"use client"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LabelList } from "recharts"
import { expenseAllocation, COLORS } from "@/lib/presentation-data"

export function ExpenseAnalysisSlide() {
  const chartData = expenseAllocation.map((item) => ({
    ...item,
    label: `$${item.amount}M`,
  }))

  return (
    <div className="p-10 pb-24 max-w-6xl mx-auto">
      <div className="mb-6">
        <span className="text-[11px] uppercase tracking-[0.3em] text-primary font-medium">
          Section 01 · Financial Analysis
        </span>
        <h2 className="text-5xl font-bold mt-2 tracking-tight text-foreground">Expense Allocation</h2>
        <p className="text-muted-foreground mt-2">Breakdown of operational expenses and investment priorities (2024)</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="animate-fade-up p-4 rounded-lg bg-card border border-border">
          <h3 className="font-semibold text-foreground mb-4 text-center">Operating Expenses ($ Millions)</h3>
          <ResponsiveContainer width="100%" height={260}>
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
                tickFormatter={(value) => `$${value}M`}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "white",
                  border: "1px solid #e5e7eb",
                  borderRadius: "8px",
                  boxShadow: "0 4px 6px -1px rgba(0,0,0,0.1)",
                }}
                formatter={(value: number) => [`$${value}M`, "Amount"]}
              />
              <Bar dataKey="amount" fill={COLORS.blue} radius={[4, 4, 0, 0]}>
                <LabelList dataKey="label" position="top" fill="#374151" fontSize={11} fontWeight={600} />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="space-y-3">
          {expenseAllocation.map((item, idx) => (
            <div key={idx} className={`animate-fade-up stagger-${idx + 1} p-4 rounded-lg bg-card border border-border`}>
              <div className="flex items-start justify-between mb-2">
                <h4 className="font-bold text-foreground">{item.category}</h4>
                <span className="text-xl font-bold text-primary">${item.amount}M</span>
              </div>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="animate-fade-up stagger-4 mt-4 p-4 rounded-lg bg-card border-l-4 border-l-primary">
        <h3 className="font-bold text-foreground mb-3">Expense Structure Analysis</h3>
        <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
          <div>
            <p className="font-semibold text-foreground mb-2">Investment Priorities</p>
            <ul className="space-y-1.5">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>R&D at $552M represents 13.7% of revenue, showing commitment to innovation</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>SG&A includes significant marketing for direct-to-consumer channel expansion</span>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-foreground mb-2">Cost Dynamics</p>
            <ul className="space-y-1.5">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Cost of sales at 39.5% of revenue reflects manufacturing efficiency gains</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Total operating expenses well-managed relative to revenue growth trajectory</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
