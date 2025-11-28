"use client"

import { COLORS } from "@/lib/presentation-data"

interface CompanyBubble {
  name: string
  tech: number // X-axis: Technology Integration (0-100)
  access: number // Y-axis: User Accessibility (0-100)
  size: number // Bubble radius in pixels
  color: string
  desc: string
}

export function StrategicMapSlide() {
  const companies: CompanyBubble[] = [
    { name: "Abbott", tech: 65, access: 88, size: 70, color: COLORS.blue, desc: "Affordability & mass distribution" },
    {
      name: "Dexcom",
      tech: 88,
      access: 72,
      size: 60,
      color: COLORS.amber,
      desc: "Premium accuracy + connected ecosystem",
    },
    { name: "Medtronic", tech: 52, access: 55, size: 55, color: COLORS.coral, desc: "Integrated pump systems" },
    { name: "Senseonics", tech: 40, access: 32, size: 50, color: "#4db6ac", desc: "Long-term implantable sensor" },
  ]

  // Chart dimensions
  const chartWidth = 700
  const chartHeight = 500
  const padding = { top: 40, right: 40, bottom: 70, left: 80 }
  const plotWidth = chartWidth - padding.left - padding.right
  const plotHeight = chartHeight - padding.top - padding.bottom

  // Scale functions (domain 0-100 to pixel coordinates)
  const xScale = (value: number) => padding.left + (value / 100) * plotWidth
  const yScale = (value: number) => padding.top + plotHeight - (value / 100) * plotHeight

  // Axis ticks
  const ticks = [0, 20, 40, 60, 80, 100]

  return (
    <div className="p-12 max-w-7xl mx-auto">
      <div className="mb-6">
        <span className="text-[11px] uppercase tracking-[0.3em] text-primary font-medium">Positioning</span>
        <h2 className="text-5xl font-bold mt-2 tracking-tight text-foreground">Strategic Group Map</h2>
        <p className="text-muted-foreground mt-2">Technology Integration vs. User Accessibility</p>
      </div>

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-9 animate-fade-up">
          <div className="p-6 rounded-lg bg-card border border-border">
            <svg width="100%" height="100%" viewBox={`0 0 ${chartWidth} ${chartHeight}`} className="overflow-visible">
              {/* Grid lines */}
              {ticks.map((tick) => (
                <g key={tick}>
                  {/* Vertical grid lines */}
                  <line
                    x1={xScale(tick)}
                    y1={padding.top}
                    x2={xScale(tick)}
                    y2={chartHeight - padding.bottom}
                    stroke="#e5e7eb"
                    strokeWidth={1}
                    strokeDasharray={tick === 0 ? "0" : "4,4"}
                  />
                  {/* Horizontal grid lines */}
                  <line
                    x1={padding.left}
                    y1={yScale(tick)}
                    x2={chartWidth - padding.right}
                    y2={yScale(tick)}
                    stroke="#e5e7eb"
                    strokeWidth={1}
                    strokeDasharray={tick === 0 ? "0" : "4,4"}
                  />
                </g>
              ))}

              {/* X-axis */}
              <line
                x1={padding.left}
                y1={chartHeight - padding.bottom}
                x2={chartWidth - padding.right}
                y2={chartHeight - padding.bottom}
                stroke="#374151"
                strokeWidth={2}
              />
              {/* X-axis ticks and labels */}
              {ticks.map((tick) => (
                <g key={`x-${tick}`}>
                  <line
                    x1={xScale(tick)}
                    y1={chartHeight - padding.bottom}
                    x2={xScale(tick)}
                    y2={chartHeight - padding.bottom + 6}
                    stroke="#374151"
                    strokeWidth={2}
                  />
                  <text
                    x={xScale(tick)}
                    y={chartHeight - padding.bottom + 22}
                    textAnchor="middle"
                    fill="#374151"
                    fontSize={12}
                  >
                    {tick}
                  </text>
                </g>
              ))}
              {/* X-axis label */}
              <text
                x={padding.left + plotWidth / 2}
                y={chartHeight - 15}
                textAnchor="middle"
                fill="#374151"
                fontSize={14}
                fontWeight={500}
              >
                Technology Integration and Connectivity
              </text>

              {/* Y-axis */}
              <line
                x1={padding.left}
                y1={padding.top}
                x2={padding.left}
                y2={chartHeight - padding.bottom}
                stroke="#374151"
                strokeWidth={2}
              />
              {/* Y-axis ticks and labels */}
              {ticks.map((tick) => (
                <g key={`y-${tick}`}>
                  <line
                    x1={padding.left - 6}
                    y1={yScale(tick)}
                    x2={padding.left}
                    y2={yScale(tick)}
                    stroke="#374151"
                    strokeWidth={2}
                  />
                  <text x={padding.left - 12} y={yScale(tick) + 4} textAnchor="end" fill="#374151" fontSize={12}>
                    {tick}
                  </text>
                </g>
              ))}
              {/* Y-axis label */}
              <text
                x={20}
                y={padding.top + plotHeight / 2}
                textAnchor="middle"
                fill="#374151"
                fontSize={14}
                fontWeight={500}
                transform={`rotate(-90, 20, ${padding.top + plotHeight / 2})`}
              >
                User Accessibility and Experience
              </text>

              {/* Company bubbles */}
              {companies.map((company, idx) => {
                const cx = xScale(company.tech)
                const cy = yScale(company.access)
                return (
                  <g key={company.name} className="cursor-pointer" style={{ animationDelay: `${idx * 100}ms` }}>
                    <circle
                      cx={cx}
                      cy={cy}
                      r={company.size}
                      fill={company.color}
                      fillOpacity={0.9}
                      stroke="#fff"
                      strokeWidth={2}
                      className="transition-all duration-300 hover:fill-opacity-100"
                    />
                    <text
                      x={cx}
                      y={cy}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      fill="#fff"
                      fontSize={company.name.length > 8 ? 14 : 16}
                      fontWeight={600}
                      className="pointer-events-none"
                    >
                      {company.name}
                    </text>
                  </g>
                )
              })}
            </svg>
          </div>
        </div>

        <div className="col-span-3 space-y-3">
          {companies.map((company, idx) => (
            <div key={idx} className={`animate-fade-up stagger-${idx + 1} p-4 rounded-lg bg-card border border-border`}>
              <div className="flex items-center gap-2 mb-1">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: company.color }} />
                <h4 className="font-semibold text-foreground">{company.name}</h4>
              </div>
              <p className="text-xs text-muted-foreground">{company.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
