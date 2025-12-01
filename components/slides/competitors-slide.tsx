import { SlideHeader, SlideTitle, Card, CardContent, Badge } from "@/components/ui"

export function CompetitorsSlide() {
  const competitors = [
    {
      name: "Dexcom",
      product: "G7 / Stelo",
      position: "Premium accuracy & integration leader",
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
    <div className="p-8 lg:p-10 max-w-7xl mx-auto h-full flex flex-col justify-center">
      <div className="mb-12">
        <SlideHeader>Competition</SlideHeader>
        <SlideTitle>Competitive Landscape</SlideTitle>
      </div>

      <div className="grid grid-cols-2 gap-5">
        {competitors.map((comp, idx) => (
          <Card
            key={idx}
            className={`animate-fade-up stagger-${idx + 1} ${comp.highlight ? "bg-muted" : ""}`}
          >
            <CardContent className="pt-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-semibold text-foreground">{comp.name}</h3>
                <Badge variant={comp.highlight ? "default" : "secondary"}>
                  {comp.product}
                </Badge>
              </div>
              <p className="text-muted-foreground text-sm mb-3">{comp.position}</p>
              <p className="text-foreground font-semibold">{comp.revenue}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
