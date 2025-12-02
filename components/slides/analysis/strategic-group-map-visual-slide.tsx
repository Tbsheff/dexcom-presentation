"use client"

import { COLORS } from "@/lib/presentation-data"

interface CompanyBubble {
  name: string
  tech: number
  access: number
  size: number
  color: string
}

export function StrategicGroupMapVisualSlide() {
  const companies: CompanyBubble[] = [
    { name: "Abbott", tech: 68, access: 88, size: 70, color: COLORS.blue },
    { name: "Dexcom", tech: 88, access: 72, size: 55, color: COLORS.amber },
    { name: "Medtronic", tech: 55, access: 58, size: 45, color: COLORS.coral },
    { name: "Senseonics", tech: 42, access: 35, size: 20, color: "#4db6ac" },
  ]

  // Chart dimensions
  const chartWidth = 600
  const chartHeight = 450
  const padding = { top: 30, right: 30, bottom: 60, left: 70 }
  const plotWidth = chartWidth - padding.left - padding.right
  const plotHeight = chartHeight - padding.top - padding.bottom

  // Scale functions (domain 0-100 to pixel coordinates)
  const xScale = (value: number) => padding.left + (value / 100) * plotWidth
  const yScale = (value: number) => padding.top + plotHeight - (value / 100) * plotHeight

  // Axis ticks
  const ticks = [0, 20, 40, 60, 80, 100]

  return (
    <div className="p-12 pb-28 max-w-6xl mx-auto">
      <div className="mb-8">
        <span className="text-[11px] uppercase tracking-[0.3em] text-primary font-medium">
          Section 02 · Competitive Analysis
        </span>
        <h2 className="text-5xl font-bold mt-2 tracking-tight text-foreground">Strategic Group Map</h2>
        <p className="text-muted-foreground mt-2">Competitive positioning on technology and accessibility dimensions</p>
      </div>

      <div className="flex gap-8">
        <div className="flex-1 animate-fade-up stagger-1">
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
                    stroke="currentColor"
                    className="text-border"
                    strokeWidth={1}
                    strokeDasharray={tick === 0 ? "0" : "4,4"}
                  />
                  {/* Horizontal grid lines */}
                  <line
                    x1={padding.left}
                    y1={yScale(tick)}
                    x2={chartWidth - padding.right}
                    y2={yScale(tick)}
                    stroke="currentColor"
                    className="text-border"
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
                stroke="currentColor"
                className="text-foreground"
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
                    stroke="currentColor"
                    className="text-foreground"
                    strokeWidth={2}
                  />
                  <text
                    x={xScale(tick)}
                    y={chartHeight - padding.bottom + 20}
                    textAnchor="middle"
                    fill="currentColor"
                    className="text-muted-foreground"
                    fontSize={11}
                  >
                    {tick}
                  </text>
                </g>
              ))}
              {/* X-axis label */}
              <text
                x={padding.left + plotWidth / 2}
                y={chartHeight - 10}
                textAnchor="middle"
                fill="currentColor"
                className="text-foreground"
                fontSize={12}
                fontWeight={500}
              >
                Technology Integration & Connectivity
              </text>

              {/* Y-axis */}
              <line
                x1={padding.left}
                y1={padding.top}
                x2={padding.left}
                y2={chartHeight - padding.bottom}
                stroke="currentColor"
                className="text-foreground"
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
                    stroke="currentColor"
                    className="text-foreground"
                    strokeWidth={2}
                  />
                  <text
                    x={padding.left - 12}
                    y={yScale(tick) + 4}
                    textAnchor="end"
                    fill="currentColor"
                    className="text-muted-foreground"
                    fontSize={11}
                  >
                    {tick}
                  </text>
                </g>
              ))}
              {/* Y-axis label */}
              <text
                x={15}
                y={padding.top + plotHeight / 2}
                textAnchor="middle"
                fill="currentColor"
                className="text-foreground"
                fontSize={12}
                fontWeight={500}
                transform={`rotate(-90, 15, ${padding.top + plotHeight / 2})`}
              >
                User Accessibility & Experience
              </text>

              {/* Company bubbles */}
              {companies.map((company, idx) => {
                const cx = xScale(company.tech)
                const cy = yScale(company.access)
                const isSmallBubble = company.size < 25
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
                      y={isSmallBubble ? cy + company.size + 15 : cy}
                      textAnchor="middle"
                      dominantBaseline={isSmallBubble ? "hanging" : "middle"}
                      fill={isSmallBubble ? "currentColor" : "#fff"}
                      className={isSmallBubble ? "text-foreground pointer-events-none" : "pointer-events-none"}
                      fontSize={company.name.length > 8 ? 11 : 13}
                      fontWeight={600}
                    >
                      {company.name}
                    </text>
                  </g>
                )
              })}
            </svg>
          </div>
        </div>

        <div className="w-80 space-y-4 animate-fade-up stagger-2">
          <div className="p-4 rounded-lg bg-card border border-border">
            <h4 className="font-semibold text-primary mb-2">X-Axis: Technology Integration</h4>
            <p className="text-xs text-muted-foreground">App quality, data sharing, device compatibility</p>
          </div>
          <div className="p-4 rounded-lg bg-card border border-border">
            <h4 className="font-semibold text-primary mb-2">Y-Axis: User Accessibility</h4>
            <p className="text-xs text-muted-foreground">Ease, affordability, intuitive design</p>
          </div>
        </div>
      </div>
    </div>
  )
}
