import { AlertTriangle, CheckCircle2 } from "lucide-react"
import { COLORS } from "@/lib/presentation-data"
import { SlideHeader, SlideTitle, Card, CardContent } from "@/components/ui"

export function Issue3DetailedSlide() {
  const problems = [
    "Competitors have ramped up their professional marketing efforts.",
    "Focused shift more to Direct-To-Consumer rather than focusing on educating the prescribing physician.",
    "As Dexcom expands to Type 2 & general wellness, they must educate a wider range of providers.",
    "Dexcom's systems still require physician's assistance with prescriptions, onboarding, & interpreting data.",
  ]

  const solutions = [
    { title: "Maximize Medical Conference Impact", desc: "Present clinical evidence hands-on", priority: true },
    { title: "Provide No-Cost Samples to Clinics", desc: "Build trust with real outcomes", priority: false },
    { title: "Professional CGM Samples", desc: "For diagnostic purposes", priority: false },
    { title: "Streamline Sample Request Process", desc: "Make it easier for physicians", priority: false },
  ]

  return (
    <div className="px-12 pt-8 pb-20 h-full flex flex-col">
      <SlideHeader>
        <span className="text-sm font-medium" style={{ color: COLORS.coral }}>Recommendation #3</span>
        <SlideTitle>Erosion of Physician Loyalty & Recommendation Rates</SlideTitle>
        <p className="text-xl text-muted-foreground mt-2">Prescription-dependent business model at risk</p>
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
              <h3 className="text-3xl font-bold text-foreground mb-5">The Solution: Market at Medical Conferences & Provide Samples</h3>
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
