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
    <div className="px-8 pt-5 pb-16 h-full flex flex-col">
      <SlideHeader>
        <span className="text-xs font-medium" style={{ color: COLORS.coral }}>Recommendation #1</span>
        <SlideTitle>Limited Market with Fragmented Competition</SlideTitle>
        <p className="text-base text-muted-foreground mt-1">Expand beyond Type 1 diabetes niche</p>
      </SlideHeader>

      <div className="grid grid-cols-2 gap-4">
        <Card className="animate-fade-up h-full" style={{ borderColor: `${COLORS.coral}40`, backgroundColor: `${COLORS.coral}08` }}>
          <CardContent className="pt-4">
            <h3 className="text-xl font-bold text-foreground mb-3 leading-tight">The Problem</h3>
            <ul className="space-y-2">
              {problems.map((item, idx) => (
                <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2 leading-snug">
                  <AlertTriangle className="w-4 h-4 mt-0.5 shrink-0" style={{ color: COLORS.coral }} />
                  {item}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="animate-fade-up stagger-2 h-full" style={{ borderColor: `${COLORS.sage}40`, backgroundColor: `${COLORS.sage}08` }}>
          <CardContent className="pt-4">
            <h3 className="text-xl font-bold text-foreground mb-3 leading-tight">The Solution: Market to Athletes and Health Industry</h3>
            <ul className="space-y-2.5">
              {solutions.map((item, idx) => (
                <li key={idx} className="text-sm">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0" style={{ color: COLORS.sage }} />
                    <div>
                      <span className={`font-bold text-base leading-tight ${item.priority ? "text-primary" : "text-foreground"}`}>{item.title}</span>
                      {item.priority && <span className="ml-2 text-xs bg-primary/10 text-primary px-1.5 py-0.5 rounded">Top Priority</span>}
                      <p className="text-sm text-muted-foreground leading-snug">{item.desc}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
