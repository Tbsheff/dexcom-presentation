import { AlertTriangle, CheckCircle2 } from "lucide-react"
import { COLORS } from "@/lib/presentation-data"
import { SlideHeader, SlideTitle, Card, CardContent } from "@/components/ui"

export function Issue2DetailedSlide() {
  const problems = [
    "Dexcom was the first to offer integration with AID systems & popular digital health apps. Competitors now are forming their own partnerships & developing their own AID compatibility systems.",
    "Unique features, like real-time data transmission & high accuracy are now standard across the industry.",
    "Digital Health Apps Compete with Dexcom's Clarity data analytics platform.",
  ]

  const solutions = [
    { title: "21-30 Day Sensor", desc: "Move beyond 14-15 day standard", priority: true },
    { title: "Reduce Replacement Fatigue", desc: "Lower cost and waste", priority: false },
    { title: "Counter Implantable Threat", desc: "Convenience without surgery", priority: false },
    { title: "Continue R&D Leadership", desc: "Stay ahead of competition", priority: false },
  ]

  return (
    <div className="px-12 pt-8 pb-20 h-full flex flex-col">
      <SlideHeader>
        <span className="text-sm font-medium" style={{ color: COLORS.coral }}>Recommendation #2</span>
        <SlideTitle>Competitors Replicating Dexcom's Integration</SlideTitle>
        <p className="text-xl text-muted-foreground mt-2">Innovation advantages are being eroded</p>
      </SlideHeader>

      <div className="grid grid-cols-2 gap-8">
        <div>
          <Card className="animate-fade-up mb-5" style={{ borderColor: `${COLORS.coral}40`, backgroundColor: `${COLORS.coral}08` }}>
            <CardContent className="pt-6">
              <h3 className="text-3xl font-bold text-foreground mb-5">The Problem</h3>
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
              <h3 className="text-3xl font-bold text-foreground mb-5">The Solution: Create Longer-Lasting Product</h3>
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
