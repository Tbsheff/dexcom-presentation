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
    { title: "Capture Non-Insulin T2D Market", desc: "Largest potential growth area" },
    { title: "Create Lifestyle/Performance Segment", desc: "NIL sponsorships, athlete partnerships" },
    { title: "Shift to Metabolic Health Narrative", desc: "Position beyond diabetes management" },
    { title: "Educate Primary Care Physicians", desc: "Expand beyond endocrinologists" },
  ]

  return (
    <div className="p-8 lg:p-10 max-w-7xl mx-auto h-full flex flex-col justify-center">
      <div className="mb-10">
        <SlideHeader style={{ color: COLORS.coral }}>Strategic Challenge</SlideHeader>
        <SlideTitle>Issue #1</SlideTitle>
      </div>

      <div className="grid grid-cols-2 gap-8">
        <div>
          <Card className="animate-fade-up mb-5" style={{ borderColor: `${COLORS.coral}40`, backgroundColor: `${COLORS.coral}08` }}>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold text-foreground mb-4">Limited Market with Intense Competition</h3>
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
          <Card className="animate-fade-up stagger-1 bg-muted">
            <CardContent className="pt-6">
              <p className="text-xs text-muted-foreground">
                <strong>SWOT Connection:</strong> Ties to niche market dependency (W) and intense competition (T)
              </p>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card className="animate-fade-up stagger-2" style={{ borderColor: `${COLORS.sage}40`, backgroundColor: `${COLORS.sage}08` }}>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold text-foreground mb-4">Solution: Expand Market Reach</h3>
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
                <strong>Leverages:</strong> Brand reputation (S), expanding market opportunity (O), R&D capability (S)
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
