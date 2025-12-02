import { SlideHeader, SlideTitle, Card, CardContent, Badge } from "@/components/ui"

export function CompetitorsSlide() {
  const competitors = [
    {
      name: "Dexcom",
      product: "G7 / Stelo",
      position: "Premium accuracy & integration focus",
      revenue: "$4.03B total",
      highlight: true,
    },
    {
      name: "Abbott",
      product: "FreeStyle Libre 3",
      position: "Price leader, highest volume",
      revenue: "$6.8B diabetes segment",
      highlight: false,
    },
    {
      name: "Medtronic",
      product: "Guardian Connect",
      position: "Integrated pump ecosystem",
      revenue: "$2.49B diabetes segment",
      highlight: false,
    },
    {
      name: "Senseonics",
      product: "Eversense 365",
      position: "Long-term implantable (365 days)",
      revenue: "$22.5M total",
      highlight: false,
    },
  ]

  return (
    <div className="px-12 pt-8 pb-20 h-full flex flex-col">
      <SlideHeader>
        <span className="text-sm text-muted-foreground font-medium">Competition</span>
        <SlideTitle>Competitive Landscape</SlideTitle>
      </SlideHeader>

      <div className="grid grid-cols-2 gap-5">
        {competitors.map((comp, idx) => (
          <Card
            key={idx}
            className={`animate-fade-up stagger-${idx + 1}`}
          >
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-3xl font-bold text-foreground">{comp.name}</h3>
                <Badge variant={comp.highlight ? "default" : "secondary"} className="text-sm px-3 py-1">
                  {comp.product}
                </Badge>
              </div>
              <p className="text-muted-foreground text-xl mb-3">{comp.position}</p>
              <p className="text-foreground font-bold text-2xl">{comp.revenue}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
