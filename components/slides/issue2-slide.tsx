import { AlertTriangle, CheckCircle2 } from "lucide-react"
import { COLORS } from "@/lib/presentation-data"
import { SlideHeader, SlideTitle, Card, CardContent } from "@/components/ui"

export function Issue2Slide() {
  const problems = [
    "Dexcom pioneered integration — competitors are catching up",
    "Real-time data & high accuracy now industry standard",
    "Digital health apps compete with Clarity platform",
  ]

  const solutions = [
    { title: "Develop 21-30 Day Wear Sensor", desc: "Move beyond the 14-15 day industry standard" },
    { title: "Address Patient Pain Points", desc: "Reduce replacement fatigue and cost" },
    { title: "Counter Implantable Threat", desc: "Offer convenience without surgical procedure" },
    { title: "Continue Accuracy Leadership", desc: "Maintain MARD advantage through R&D" },
  ]

  return (
    <div className="p-8 lg:p-10 max-w-7xl mx-auto h-full flex flex-col justify-center">
      <div className="mb-10">
        <SlideHeader style={{ color: COLORS.coral }}>Strategic Challenge</SlideHeader>
        <SlideTitle>Issue #2</SlideTitle>
      </div>

      <div className="grid grid-cols-2 gap-8">
        <div>
          <Card className="animate-fade-up mb-5" style={{ borderColor: `${COLORS.coral}40`, backgroundColor: `${COLORS.coral}08` }}>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold text-foreground mb-4">Competitors Replicating Integration</h3>
              <ul className="space-y-2.5">
                {problems.map((item, idx) => (
                  <li key={idx} className="text-sm text-muted-foreground flex items-start gap-3">
                    <AlertTriangle className="w-4 h-4 mt-0.5 shrink-0" style={{ color: COLORS.coral }} />
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Card
            className="animate-fade-up stagger-1"
            style={{ backgroundColor: `${COLORS.blue}10`, borderColor: `${COLORS.blue}30` }}
          >
            <CardContent className="pt-6">
              <p className="text-sm text-muted-foreground">
                <strong style={{ color: COLORS.blue }}>Acknowledgment:</strong> We cannot stop competitors from developing
                their own integration capabilities.
              </p>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card className="animate-fade-up stagger-2" style={{ borderColor: `${COLORS.sage}40`, backgroundColor: `${COLORS.sage}08` }}>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold text-foreground mb-4">Solution: Innovate on Convenience</h3>
              <ul className="space-y-3">
                {solutions.map((item, idx) => (
                  <li key={idx} className="text-sm">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0" style={{ color: COLORS.sage }} />
                      <div>
                        <span className="font-semibold text-foreground">{item.title}</span>
                        <p className="text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Card className="animate-fade-up stagger-3 mt-5 bg-muted">
            <CardContent className="pt-6">
              <p className="text-xs text-muted-foreground">
                <strong>Leverages:</strong> R&D capability (S), manufacturing scale (S), tech advancement opportunity (O)
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
