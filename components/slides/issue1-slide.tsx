import { AlertTriangle, CheckCircle2 } from "lucide-react"
import { COLORS } from "@/lib/presentation-data"
import { SlideHeader, SlideTitle, Card, CardContent } from "@/components/ui"

export function Issue1Slide() {
  const problems = [
    "Over-reliance on Type 1 diabetes (smaller population)",
    "CGM market is highly competitive",
    "Devices are expensive with varying insurance coverage",
    "Too focused on insulin-dependent users",
  ]

  const solutions = [
    { title: "Capture Type 2 Market", desc: "37M underserved US patients", priority: true },
    { title: "Metabolic Health Positioning", desc: "Beyond diabetes", priority: false },
    { title: "Primary Care Education", desc: "Beyond endocrinologists", priority: false },
    { title: "Wellness Segment", desc: "Athletes, biohackers", priority: false },
  ]

  return (
    <div className="px-12 pt-8 pb-20 h-full flex flex-col">
      <SlideHeader>
        <span className="text-sm font-medium" style={{ color: COLORS.coral }}>Strategic Challenge #1</span>
        <SlideTitle>A Niche Market Can Only Grow So Much</SlideTitle>
        <p className="text-xl text-muted-foreground mt-2">Type 1 market saturated at 60%+ share</p>
      </SlideHeader>

      <div className="grid grid-cols-2 gap-8">
        <div>
          <Card className="animate-fade-up mb-5" style={{ borderColor: `${COLORS.coral}40`, backgroundColor: `${COLORS.coral}08` }}>
            <CardContent className="pt-6">
              <h3 className="text-3xl font-bold text-foreground mb-5">Limited Market with Intense Competition</h3>
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
              <h3 className="text-3xl font-bold text-foreground mb-5">Solution: Expand Market Reach</h3>
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
