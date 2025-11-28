import { ArrowRight } from "lucide-react"
import { COLORS } from "@/lib/presentation-data"

export function SwotSlide() {
  const sections = [
    {
      title: "Strengths",
      color: COLORS.sage,
      items: ["Leader in CGM accuracy", "Trusted physician brand", "Deep pump integrations", "Protected IP & patents"],
    },
    {
      title: "Weaknesses",
      color: COLORS.coral,
      items: [
        "Premium pricing barrier",
        "Niche market dependency",
        "Subscription revenue model",
        "U.S. market concentration",
      ],
    },
    {
      title: "Opportunities",
      color: COLORS.blue,
      items: ["Type 2 market expansion", "Wellness/athlete segment", "Sensor tech advances", "Telehealth integration"],
    },
    {
      title: "Threats",
      color: COLORS.amber,
      items: ["Intense competition", "Competitor innovation", "Regulatory changes", "Pricing pressure"],
    },
  ]

  return (
    <div className="p-12 lg:p-20 max-w-5xl mx-auto h-full flex flex-col justify-center">
      <div className="mb-10">
        <span className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">Strategic Position</span>
        <h2 className="text-5xl font-bold mt-3 tracking-tight text-foreground">SWOT Analysis</h2>
      </div>

      <div className="grid grid-cols-2 gap-5">
        {sections.map((section, idx) => (
          <div
            key={idx}
            className={`animate-fade-up stagger-${idx + 1} p-6 card-clean`}
            style={{ borderTopColor: section.color, borderTopWidth: "3px" }}
          >
            <h3 className="font-bold text-foreground mb-4 text-lg">{section.title}</h3>
            <ul className="space-y-2.5">
              {section.items.map((item, i) => (
                <li key={i} className="text-sm text-muted-foreground flex items-start gap-3">
                  <div
                    className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0"
                    style={{ backgroundColor: section.color }}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="animate-fade-up stagger-5 mt-6 p-4 border border-primary/30 rounded-md bg-primary/5">
        <p className="text-center text-sm text-muted-foreground">
          <ArrowRight className="w-4 h-4 inline mr-2 text-primary" />
          <span className="text-primary font-semibold">Issues tie to Weaknesses & Threats</span> · Solutions leverage
          Strengths & Opportunities
        </p>
      </div>
    </div>
  )
}
