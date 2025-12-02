import { SlideHeader, SlideLabel, SlideTitle } from "@/components/ui"

export function KeyCompetitorsSlide() {
  const competitors = [
    {
      name: "Abbott",
      logo: "/images/abbott-logo.png",
      product: "FreeStyle Libre",
      description: "Known for affordability and wide accessibility",
    },
    {
      name: "Medtronic",
      logo: "/images/medtronic-logic.png",
      product: "Guardian Connect CGM",
      description: "Integrates directly with insulin pumps for automated insulin delivery",
    },
    {
      name: "Senseonics",
      logo: "/images/senseonics_logo_large.png",
      product: "Eversense 365",
      description: "Specializes in implantable sensors, longest wear time among competitors",
    },
  ]

  return (
    <div className="px-12 pt-8 pb-20 h-full flex flex-col">
      <SlideHeader>
        <SlideLabel>Competition</SlideLabel>
        <SlideTitle>Key Competitors</SlideTitle>
      </SlideHeader>

      <div className="flex-1 flex items-center">
        <div className="w-full border border-border rounded-xl overflow-hidden">
          {/* Header */}
          <div className="grid grid-cols-3 bg-muted/50 border-b border-border">
            <div className="px-6 py-4 text-lg font-semibold text-foreground">Company</div>
            <div className="px-6 py-4 text-lg font-semibold text-foreground border-l border-border">Key Product</div>
            <div className="px-6 py-4 text-lg font-semibold text-foreground border-l border-border">Description</div>
          </div>

          {/* Rows */}
          {competitors.map((comp, idx) => (
            <div
              key={idx}
              className={`grid grid-cols-3 ${idx < competitors.length - 1 ? "border-b border-border" : ""} animate-fade-up stagger-${idx + 1}`}
            >
              <div className="px-6 py-6 flex items-center">
                <img src={comp.logo} alt={comp.name} className="h-24 object-contain" />
              </div>
              <div className="px-6 py-6 flex items-center border-l border-border">
                <span className="text-xl text-foreground">{comp.product}</span>
              </div>
              <div className="px-6 py-6 flex items-center border-l border-border">
                <span className="text-lg text-muted-foreground">{comp.description}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
