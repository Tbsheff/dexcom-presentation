import { SlideHeader, SlideLabel, SlideTitle, Card, CardContent } from "@/components/ui"

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
    <div className="px-12 pt-8 pb-20 h-full flex flex-col">
      <SlideHeader>
        <SlideLabel>Competitive Moat</SlideLabel>
        <SlideTitle>Imitation Barriers</SlideTitle>
      </SlideHeader>

      <div className="grid grid-cols-2 gap-8">
        <Card className="animate-fade-up">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <h3 className="text-xl font-semibold text-foreground uppercase tracking-wider">
                Barriers Dexcom Creates
              </h3>
            </div>
            <ul className="space-y-4">
              {creates.map((item, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <span className="text-xl font-bold text-primary">{idx + 1}</span>
                  <span className="text-xl text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="animate-fade-up stagger-1">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-2 rounded-full bg-muted-foreground" />
              <h3 className="text-xl font-semibold text-foreground uppercase tracking-wider">
                Barriers Dexcom Faces
              </h3>
            </div>
            <ul className="space-y-4">
              {faces.map((item, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <span className="text-xl font-bold text-muted-foreground">{idx + 1}</span>
                  <span className="text-xl text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
