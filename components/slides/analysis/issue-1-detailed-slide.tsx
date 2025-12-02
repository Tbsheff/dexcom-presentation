import { AlertTriangle, CheckCircle2 } from "lucide-react"
import { COLORS } from "@/lib/presentation-data"
import { SlideHeader, SlideTitle, Card, CardContent } from "@/components/ui"

export function Issue1DetailedSlide() {
  const problems = [
    "Too reliant on Core Market (Type 1 diabetes). This is a smaller population compared to Type 2 diabetes.",
    "CGM market is highly competitive, especially with Abbott's FreeStyle Libre system.",
    "CGM devices & their supplies are expensive, varying insurance coverage acts as a major barrier to wider adoption.",
    "Too focused on Insulin Users, this leaves the growing population of non-insulin-dependent Type 2 patients underserved.",
  ]

  const solutions = [
    { title: "Capture Non-Insulin T2D Market", desc: "Largest potential growth area", priority: true },
    { title: "Lifestyle/Performance Segment", desc: "Athletes & NIL programs", priority: false },
    { title: "Metabolic Health Positioning", desc: "Beyond diabetes management", priority: false },
    { title: "Primary Care Education", desc: "Beyond endocrinologists", priority: false },
  ]

  return (
    <div className="px-12 pt-8 pb-20 h-full flex flex-col">
      <SlideHeader>
        <span className="text-sm font-medium" style={{ color: COLORS.coral }}>Recommendation #1</span>
        <SlideTitle>Limited Market with Fragmented Competition</SlideTitle>
        <p className="text-xl text-muted-foreground mt-2">Expand beyond Type 1 diabetes niche</p>
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
              <h3 className="text-3xl font-bold text-foreground mb-5">The Solution: Market to Athletes and Health Industry</h3>
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
