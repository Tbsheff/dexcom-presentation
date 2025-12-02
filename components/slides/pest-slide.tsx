import { Shield, Users, Zap } from "lucide-react"
import { COLORS } from "@/lib/presentation-data"
import { SlideHeader, SlideTitle, Card, CardContent } from "@/components/ui"

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
    <div className="px-12 pt-8 pb-20 h-full flex flex-col">
      <div className="mb-12">
        <SlideHeader>PEST Analysis</SlideHeader>
        <SlideTitle>Industry Drivers</SlideTitle>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {factors.map((item, idx) => (
          <Card key={idx} className={`animate-fade-up stagger-${idx + 1}`}>
            <CardContent className="pt-6">
              <div
                className="w-12 h-12 rounded-md flex items-center justify-center mb-4"
                style={{ backgroundColor: `${item.color}15` }}
              >
                <item.icon className="w-6 h-6" style={{ color: item.color }} />
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">{item.title}</h3>
              <ul className="space-y-2.5">
                {item.points.map((point, i) => (
                  <li key={i} className="text-lg text-muted-foreground flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{ backgroundColor: item.color }} />
                    {point}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="animate-fade-up stagger-4 mt-8 bg-muted">
        <CardContent className="pt-6">
          <p className="text-center text-sm text-muted-foreground">
            <strong className="text-primary">Key Insight:</strong> Tech drives growth; regulation is the constraint
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
