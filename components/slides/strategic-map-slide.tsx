"use client"

import { COLORS } from "@/lib/presentation-data"

interface Company {
  name: string
  tech: number
  access: number
  color: string
  position: string
  revenue: number
}

export function StrategicMapSlide() {
  const companies: Company[] = [
    { name: "Abbott", tech: 65, access: 88, color: COLORS.abbott, position: "Mass Market Leader", revenue: 6.8 },
    { name: "Dexcom", tech: 88, access: 72, color: COLORS.dexcom, position: "Premium Innovator", revenue: 4.03 },
    { name: "Medtronic", tech: 52, access: 55, color: COLORS.medtronic, position: "Integrated Systems", revenue: 2.49 },
    { name: "Senseonics", tech: 40, access: 32, color: COLORS.senseonics, position: "Niche Implantable", revenue: 0.03 },
  ]

  const chartSize = 500
  const padding = 60

  const scale = (value: number) => padding + ((value / 100) * (chartSize - padding * 2))
  const yScale = (value: number) => chartSize - scale(value) + padding

  return (
    <div className="px-12 pt-4 pb-20 h-full flex flex-col">
      {/* Header */}
      <div className="mb-4">
        <div className="flex items-center gap-3 mb-1">
          <div className="w-8 h-[2px] bg-emerald-500" />
          <span className="text-xs font-semibold tracking-[0.2em] text-slate-400 uppercase">
            Competitive Positioning
          </span>
        </div>
        <h1 className="text-4xl font-bold text-slate-900 tracking-tight">
          Strategic Group Map
        </h1>
      </div>

      {/* Main content */}
      <div className="flex-1 flex gap-8 min-h-0">
        {/* Chart container */}
        <div className="flex-1 relative">
          
          {/* Chart */}
          <svg
            viewBox={`0 0 ${chartSize} ${chartSize}`}
            className="w-full h-full"
            style={{ filter: 'drop-shadow(0 4px 20px rgba(0,0,0,0.03))' }}
          >
            <defs>
              <linearGradient id="gridGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f1f5f9" />
                <stop offset="100%" stopColor="#e2e8f0" />
              </linearGradient>
              {companies.map((company) => (
                <filter key={`shadow-${company.name}`} id={`shadow-${company.name}`} x="-50%" y="-50%" width="200%" height="200%">
                  <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor={company.color} floodOpacity="0.3" />
                </filter>
              ))}
            </defs>

            {/* Background */}
            <rect x={padding} y={padding} width={chartSize - padding * 2} height={chartSize - padding * 2} fill="#fafafa" rx="4" />

            {/* Grid lines */}
            {[25, 50, 75].map((tick) => (
              <g key={tick}>
                <line
                  x1={scale(tick)}
                  y1={padding}
                  x2={scale(tick)}
                  y2={chartSize - padding}
                  stroke="#e2e8f0"
                  strokeWidth={1}
                />
                <line
                  x1={padding}
                  y1={yScale(tick)}
                  x2={chartSize - padding}
                  y2={yScale(tick)}
                  stroke="#e2e8f0"
                  strokeWidth={1}
                />
              </g>
            ))}

            {/* Center lines (50%) - emphasized */}
            <line
              x1={scale(50)}
              y1={padding}
              x2={scale(50)}
              y2={chartSize - padding}
              stroke="#cbd5e1"
              strokeWidth={1.5}
              strokeDasharray="4,4"
            />
            <line
              x1={padding}
              y1={yScale(50)}
              x2={chartSize - padding}
              y2={yScale(50)}
              stroke="#cbd5e1"
              strokeWidth={1.5}
              strokeDasharray="4,4"
            />

            {/* Axes */}
            <line x1={padding} y1={chartSize - padding} x2={chartSize - padding} y2={chartSize - padding} stroke="#64748b" strokeWidth={2} />
            <line x1={padding} y1={padding} x2={padding} y2={chartSize - padding} stroke="#64748b" strokeWidth={2} />

            {/* Axis labels */}
            <text x={chartSize / 2} y={chartSize - 12} textAnchor="middle" className="fill-slate-500 text-[11px] font-medium">
              Technology Integration
            </text>
            <text x={12} y={chartSize / 2} textAnchor="middle" className="fill-slate-500 text-[11px] font-medium" transform={`rotate(-90, 12, ${chartSize / 2})`}>
              User Accessibility
            </text>

            {/* Arrow indicators */}
            <polygon points={`${chartSize - padding + 8},${chartSize - padding} ${chartSize - padding},${chartSize - padding - 4} ${chartSize - padding},${chartSize - padding + 4}`} fill="#64748b" />
            <polygon points={`${padding},${padding - 8} ${padding - 4},${padding} ${padding + 4},${padding}`} fill="#64748b" />

            {/* Company bubbles */}
            {companies.map((company, idx) => {
              const cx = scale(company.tech)
              const cy = yScale(company.access)
              // Scale bubble size by revenue (sqrt for area-proportional sizing)
              const minSize = 18
              const maxSize = 48
              const maxRevenue = 6.8
              const baseSize = company.revenue > 0.1
                ? minSize + (Math.sqrt(company.revenue / maxRevenue) * (maxSize - minSize))
                : minSize
              const isLeader = company.name === "Dexcom"

              return (
                <g
                  key={company.name}
                  className="transition-transform duration-300"
                  style={{
                    animation: `fadeInScale 0.5s ease-out ${idx * 0.1}s both`,
                  }}
                >
                  {/* Glow ring for Dexcom */}
                  {isLeader && (
                    <circle
                      cx={cx}
                      cy={cy}
                      r={baseSize + 8}
                      fill="none"
                      stroke={company.color}
                      strokeWidth={2}
                      strokeDasharray="4,4"
                      opacity={0.4}
                    />
                  )}

                  {/* Main bubble */}
                  <circle
                    cx={cx}
                    cy={cy}
                    r={baseSize}
                    fill={company.color}
                    filter={`url(#shadow-${company.name})`}
                    className="transition-all duration-300"
                  />

                  {/* Company name */}
                  <text
                    x={cx}
                    y={company.name === "Senseonics" ? cy + baseSize + 14 : cy + 1}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    className={`text-[11px] font-semibold tracking-wide ${company.name === "Senseonics" ? "fill-slate-600" : "fill-white"}`}
                    style={{ textShadow: company.name === "Senseonics" ? "none" : '0 1px 2px rgba(0,0,0,0.2)' }}
                  >
                    {company.name}
                  </text>
                </g>
              )
            })}
          </svg>
        </div>

        {/* Legend panel */}
        <div className="w-56 shrink-0 flex flex-col gap-2">
          {companies.map((company, idx) => (
            <div
              key={company.name}
              className="group relative bg-white rounded-lg border border-slate-100 p-3 transition-all duration-300 hover:border-slate-200 hover:shadow-lg"
              style={{
                animation: `slideInRight 0.4s ease-out ${idx * 0.08}s both`,
                borderLeft: `3px solid ${company.color}`,
              }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-3 h-3 rounded-full shrink-0 ring-2 ring-offset-2"
                  style={{ backgroundColor: company.color, ringColor: `${company.color}30` }}
                />
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-slate-800 text-sm">{company.name}</div>
                  <div className="text-[10px] text-slate-400 uppercase tracking-wider">{company.position}</div>
                </div>
              </div>

              {/* Stats bar */}
              <div className="mt-3 flex gap-4 text-[10px]">
                <div className="flex-1">
                  <div className="text-slate-400 mb-1">Tech</div>
                  <div className="h-1 bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-500"
                      style={{ width: `${company.tech}%`, backgroundColor: company.color }}
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="text-slate-400 mb-1">Access</div>
                  <div className="h-1 bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-500"
                      style={{ width: `${company.access}%`, backgroundColor: company.color }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  )
}
