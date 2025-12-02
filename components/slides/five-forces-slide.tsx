import { SlideHeader, SlideTitle, SlideSubtitle, Card, CardContent, Badge } from "@/components/ui"

const LEVEL_COLORS = {
  HIGH: "#ef4444",     // red
  MODERATE: "#eab308", // yellow
  LOW: "#22c55e",      // green
}

export function FiveForcesSlide() {
  const forces = [
    { force: "Competitive Rivalry", level: "HIGH" as const, desc: "Abbott, Medtronic compete intensely" },
    { force: "Supplier Power", level: "MODERATE" as const, desc: "Vertical integration reduces dependency" },
    { force: "Buyer Power", level: "MODERATE" as const, desc: "Brand loyalty balances payer leverage" },
    { force: "Substitution Threat", level: "MODERATE" as const, desc: "Non-invasive tech emerging" },
    { force: "New Entry Threat", level: "LOW" as const, desc: "FDA barriers protect market" },
  ]

  return (
    <div className="px-12 pt-8 pb-20 h-full flex flex-col">
      <SlideHeader>
        <span className="text-sm text-muted-foreground font-medium">Porter's Analysis</span>
        <SlideTitle>Market Attractiveness</SlideTitle>
        <SlideSubtitle>Five Forces analysis of the CGM industry</SlideSubtitle>
      </SlideHeader>

      <div className="grid grid-cols-1 gap-4">
        {forces.map((item, idx) => (
          <Card
            key={idx}
            className={`animate-fade-up stagger-${idx + 1}`}
            style={{ borderLeftWidth: '4px', borderLeftColor: LEVEL_COLORS[item.level] }}
          >
            <CardContent className="flex items-center gap-6 p-5">
              <Badge
                className="shrink-0 text-white text-sm px-4 py-1 min-w-[100px] justify-center"
                style={{ backgroundColor: LEVEL_COLORS[item.level] }}
              >
                {item.level}
              </Badge>
              <div>
                <h4 className="font-bold text-foreground text-2xl">{item.force}</h4>
                <p className="text-xl text-muted-foreground">{item.desc}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
