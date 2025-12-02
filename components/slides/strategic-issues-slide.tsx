import { AlertTriangle, CheckCircle2, Target, Zap } from "lucide-react"
import { COLORS } from "@/lib/presentation-data"

export function StrategicIssuesSlide() {
  const issues = [
    {
      title: "Limited Market Reach",
      icon: Target,
      problems: [
        "Over-reliance on Type 1 diabetes (smaller population)",
        "Too focused on insulin-dependent users",
        "Devices expensive with varying insurance coverage",
      ],
      solutions: [
        { title: "Capture Non-Insulin T2D Market", desc: "Largest growth area" },
        { title: "Create Lifestyle Segment", desc: "NIL sponsorships, athletes" },
        { title: "Educate Primary Care", desc: "Beyond endocrinologists" },
      ],
      swotRef: "Leverages brand reputation (S) + expanding market (O)",
    },
    {
      title: "Competitive Pressure",
      icon: Zap,
      problems: [
        "Competitors replicating integration capabilities",
        "Real-time data now industry standard",
        "Implantable sensors emerging as threat",
      ],
      solutions: [
        { title: "Develop 21-30 Day Sensor", desc: "Beyond 14-day standard" },
        { title: "Reduce Patient Fatigue", desc: "Fewer replacements" },
        { title: "Maintain Accuracy Lead", desc: "Best-in-class accuracy" },
      ],
      swotRef: "Leverages R&D capability (S) + tech advancement (O)",
    },
  ]

  return (
    <div className="px-12 pt-8 pb-20 h-full flex flex-col">
      <div className="mb-8 relative z-10">
        <span className="section-label text-xs uppercase tracking-[0.3em] font-semibold" style={{ color: COLORS.coral }}>
          Strategic Recommendations
        </span>
        <h2 className="text-5xl font-bold mt-2 tracking-tight text-foreground">Key Strategic Issues</h2>
        <div className="accent-line w-24 mt-4" />
      </div>

      <div className="grid grid-cols-2 gap-6 relative z-10">
        {issues.map((issue, idx) => {
          const Icon = issue.icon
          return (
            <div key={idx} className="animate-fade-up flex flex-col" style={{ animationDelay: `${idx * 100}ms` }}>
              <div
                className="p-5 rounded-xl border-2 flex-1"
                style={{ borderColor: `${COLORS.coral}30`, backgroundColor: `${COLORS.coral}05` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg" style={{ backgroundColor: `${COLORS.coral}15` }}>
                    <Icon className="w-5 h-5" style={{ color: COLORS.coral }} />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">{issue.title}</h3>
                </div>

                <div className="space-y-1.5 mb-4">
                  {issue.problems.map((problem, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <AlertTriangle className="w-3.5 h-3.5 mt-0.5 shrink-0" style={{ color: COLORS.coral }} />
                      <span>{problem}</span>
                    </div>
                  ))}
                </div>

                <div
                  className="p-4 rounded-lg"
                  style={{ backgroundColor: `${COLORS.sage}08`, border: `1px solid ${COLORS.sage}25` }}
                >
                  <h4 className="text-sm font-semibold text-foreground mb-2" style={{ color: COLORS.sage }}>
                    Solutions
                  </h4>
                  <div className="space-y-2">
                    {issue.solutions.map((sol, sIdx) => (
                      <div key={sIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 mt-0.5 shrink-0" style={{ color: COLORS.sage }} />
                        <div className="text-sm">
                          <span className="font-medium text-foreground">{sol.title}</span>
                          <span className="text-muted-foreground"> — {sol.desc}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-3 text-xs text-muted-foreground p-2.5 rounded-lg bg-secondary">
                <strong>SWOT:</strong> {issue.swotRef}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
