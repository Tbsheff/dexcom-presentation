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
    { title: "21-30 Day Sensor", desc: "Beyond 14-day standard", priority: true },
    { title: "Reduce Replacement Fatigue", desc: "Lower cost, less hassle", priority: false },
    { title: "Counter Implantables", desc: "Convenience without surgery", priority: false },
    { title: "Accuracy Leadership", desc: "Maintain MARD advantage", priority: false },
  ]

  return (
    <div className="px-12 pt-8 pb-20 h-full flex flex-col">
      <SlideHeader>
        <span className="text-sm font-medium" style={{ color: COLORS.coral }}>Strategic Challenge #2</span>
        <SlideTitle>Competitors Are Catching Up</SlideTitle>
        <p className="text-xl text-muted-foreground mt-2">Real-time data is now table stakes</p>
      </SlideHeader>

      <div className="grid grid-cols-2 gap-8">
        <div>
          <Card className="animate-fade-up mb-5" style={{ borderColor: `${COLORS.coral}40`, backgroundColor: `${COLORS.coral}08` }}>
            <CardContent className="pt-6">
              <h3 className="text-3xl font-bold text-foreground mb-5">Competitors Replicating Integration</h3>
              <ul className="space-y-3">
                {problems.map((item, idx) => (
                  <li key={idx} className="text-xl text-muted-foreground flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 mt-1 shrink-0" style={{ color: COLORS.coral }} />
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card className="animate-fade-up stagger-2" style={{ borderColor: `${COLORS.sage}40`, backgroundColor: `${COLORS.sage}08` }}>
            <CardContent className="pt-6">
              <h3 className="text-3xl font-bold text-foreground mb-5">Solution: Innovate on Convenience</h3>
              <ul className="space-y-4">
                {solutions.map((item, idx) => (
                  <li key={idx} className="text-lg">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 mt-1 shrink-0" style={{ color: COLORS.sage }} />
                      <div>
                        <span className={`font-bold text-xl ${item.priority ? "text-primary" : "text-foreground"}`}>{item.title}</span>
                        {item.priority && <span className="ml-2 text-base bg-primary/10 text-primary px-2 py-1 rounded">Top Priority</span>}
                        <p className="text-xl text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
