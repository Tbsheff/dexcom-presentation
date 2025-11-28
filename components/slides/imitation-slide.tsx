import { CheckCircle2, AlertTriangle } from "lucide-react"
import { COLORS } from "@/lib/presentation-data"

export function ImitationSlide() {
  const creates = [
    "Proprietary sensor technology & algorithms",
    "Regulatory expertise & clinical validation",
    "Deep ecosystem integration & partnerships",
    "Brand reputation & clinical trust",
    "Economies of scale & vertical integration",
  ]

  const faces = [
    "Abbott's FreeStyle Libre price advantage",
    "Senseonics' 365-day wear duration",
    "Medtronic's integrated pump ecosystem",
    "Competitor brand loyalty & distribution",
    "Emerging insurance relationships",
  ]

  return (
    <div className="p-12 lg:p-20 max-w-5xl mx-auto h-full flex flex-col justify-center">
      <div className="mb-12">
        <span className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">Competitive Moat</span>
        <h2 className="text-5xl font-bold mt-3 tracking-tight text-foreground">Imitation Barriers</h2>
      </div>

      <div className="grid grid-cols-2 gap-10">
        <div className="animate-fade-up">
          <h3 className="text-lg font-semibold mb-5" style={{ color: COLORS.sage }}>
            Barriers Dexcom Creates
          </h3>
          <ul className="space-y-3">
            {creates.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0" style={{ color: COLORS.sage }} />
                <span className="text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="animate-fade-up stagger-1">
          <h3 className="text-lg font-semibold mb-5" style={{ color: COLORS.coral }}>
            Barriers Dexcom Faces
          </h3>
          <ul className="space-y-3">
            {faces.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                <AlertTriangle className="w-4 h-4 mt-0.5 shrink-0" style={{ color: COLORS.coral }} />
                <span className="text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
