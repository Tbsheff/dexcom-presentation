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
    <div className="p-12 lg:p-20 max-w-5xl mx-auto h-full flex flex-col justify-center">
      <div className="mb-12">
        <span className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">Competition</span>
        <h2 className="text-5xl font-bold mt-3 tracking-tight text-foreground">Competitive Landscape</h2>
      </div>

      <div className="grid grid-cols-2 gap-5">
        {competitors.map((comp, idx) => (
          <div
            key={idx}
            className={`animate-fade-up stagger-${idx + 1} p-6 rounded-md border ${
              comp.highlight ? "bg-primary/5 border-primary/30" : "bg-card border-border"
            }`}
          >
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xl font-bold text-foreground">{comp.name}</h3>
              <span
                className={`px-3 py-1 rounded-md text-xs font-medium ${
                  comp.highlight ? "bg-primary/20 text-primary" : "bg-secondary text-muted-foreground"
                }`}
              >
                {comp.product}
              </span>
            </div>
            <p className="text-muted-foreground text-sm mb-3">{comp.position}</p>
            <p className="text-foreground font-semibold">{comp.revenue}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
