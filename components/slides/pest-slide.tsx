import { Shield, Users, Zap } from "lucide-react"
import { COLORS } from "@/lib/presentation-data"

export function PestSlide() {
  const factors = [
    {
      icon: Shield,
      title: "Political / Regulatory",
      color: COLORS.coral,
      points: ["FDA approval timelines", "Reimbursement policy changes", "Healthcare reform impact"],
    },
    {
      icon: Users,
      title: "Sociocultural",
      color: COLORS.blue,
      points: ["Rising diabetes prevalence", "Digital wellness trend", "Demand for discreet devices"],
    },
    {
      icon: Zap,
      title: "Technological",
      color: COLORS.sage,
      points: ["Smaller, more accurate sensors", "Smart device integration", "AI-powered analytics"],
    },
  ]

  return (
    <div className="p-12 lg:p-20 max-w-5xl mx-auto h-full flex flex-col justify-center">
      <div className="mb-12">
        <span className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">PEST Analysis</span>
        <h2 className="text-5xl font-bold mt-3 tracking-tight text-foreground">Industry Drivers</h2>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {factors.map((item, idx) => (
          <div
            key={idx}
            className={`animate-fade-up stagger-${idx + 1} p-6 rounded-lg bg-card border border-border card-clean`}
          >
            <div
              className="w-12 h-12 rounded-md flex items-center justify-center mb-4"
              style={{ backgroundColor: `${item.color}15` }}
            >
              <item.icon className="w-6 h-6" style={{ color: item.color }} />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-4">{item.title}</h3>
            <ul className="space-y-2.5">
              {item.points.map((point, i) => (
                <li key={i} className="text-sm text-muted-foreground flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{ backgroundColor: item.color }} />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="animate-fade-up stagger-4 mt-8 p-4 rounded-md bg-primary/5 border border-primary/20">
        <p className="text-center text-sm text-muted-foreground">
          <strong className="text-primary">Key Insight:</strong> Technology and sociocultural shifts drive growth;
          regulatory environment is the primary constraint
        </p>
      </div>
    </div>
  )
}
