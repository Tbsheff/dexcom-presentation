import { SlideHeader, SlideLabel, SlideTitle, Card, CardContent, ListCard } from "@/components/ui"

export function SwotSlide() {
  const sections = [
    { title: "Strengths", items: ["High CGM accuracy", "Trusted physician brand", "Deep pump integrations", "Protected IP & patents"], color: "#22c55e" },
    { title: "Weaknesses", items: ["Premium pricing barrier", "Niche market dependency", "Subscription revenue model", "U.S. market concentration"], color: "#ef4444" },
    { title: "Opportunities", items: ["Type 2 market expansion", "Wellness/athlete segment", "Sensor tech advances", "Telehealth integration"], color: "#3b82f6" },
    { title: "Threats", items: ["Intense competition", "Competitor innovation", "Regulatory changes", "Pricing pressure"], color: "#f97316" },
  ]

  return (
    <div className="px-12 pt-8 pb-20 h-full flex flex-col">
      <SlideHeader>
        <SlideLabel>Strategic Position</SlideLabel>
        <SlideTitle>SWOT Analysis</SlideTitle>
      </SlideHeader>

      <div className="grid grid-cols-2 gap-4">
        {sections.map((section, idx) => (
          <ListCard
            key={idx}
            className={`animate-fade-up stagger-${idx + 1}`}
            title={section.title}
            items={section.items}
            accentColor={section.color}
          />
        ))}
      </div>

      <Card className="animate-fade-up stagger-5 mt-6 border-l-4 border-l-primary">
        <CardContent className="p-5">
          <p className="text-xl text-muted-foreground">
            <span className="text-primary font-semibold">Strategic takeaway:</span> Issues tie to Weaknesses & Threats — Solutions leverage Strengths & Opportunities
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
