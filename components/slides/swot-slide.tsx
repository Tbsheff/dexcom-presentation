import { SlideHeader, SlideLabel, SlideTitle, Card, CardContent, ListCard } from "@/components/ui"

export function SwotSlide() {
  const sections = [
    { title: "Strengths", items: ["Leader in CGM accuracy", "Trusted physician brand", "Deep pump integrations", "Protected IP & patents"] },
    { title: "Weaknesses", items: ["Premium pricing barrier", "Niche market dependency", "Subscription revenue model", "U.S. market concentration"] },
    { title: "Opportunities", items: ["Type 2 market expansion", "Wellness/athlete segment", "Sensor tech advances", "Telehealth integration"] },
    { title: "Threats", items: ["Intense competition", "Competitor innovation", "Regulatory changes", "Pricing pressure"] },
  ]

  return (
    <div className="p-8 lg:p-10 max-w-7xl mx-auto h-full flex flex-col justify-center">
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
          />
        ))}
      </div>

      <Card className="animate-fade-up stagger-5 mt-6">
        <CardContent className="p-4">
          <p className="text-center text-sm text-muted-foreground">
            <span className="text-primary font-medium">Issues tie to Weaknesses & Threats</span> · Solutions leverage Strengths & Opportunities
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
