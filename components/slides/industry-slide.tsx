import { SlideHeader, SlideLabel, SlideTitle, StatCard, ListCard, Card, CardContent } from "@/components/ui"

export function IndustrySlide() {
  return (
    <div className="px-12 pt-8 pb-20 h-full flex flex-col">
      <SlideHeader>
        <SlideLabel>Market Context</SlideLabel>
        <SlideTitle>Industry Definition</SlideTitle>
      </SlideHeader>

      <Card className="animate-fade-up mb-8 border-l-4 border-l-primary bg-primary/5">
        <CardContent className="p-8">
          <p className="text-3xl md:text-4xl text-foreground leading-relaxed font-medium">
            Dexcom competes in the{" "}
            <span className="text-primary font-bold">global continuous glucose monitoring (CGM) market</span> within
            the medical device and digital health industry.
          </p>
        </CardContent>
      </Card>

      <div className="grid grid-cols-3 gap-6 mb-8">
        <StatCard
          value="$8.7B"
          label="Market Size (2024)"
          valueColor="#58A618"
          className="animate-fade-up stagger-1"
        />
        <StatCard
          value="12.4%"
          label="CAGR (2024-2030)"
          valueColor="#58A618"
          className="animate-fade-up stagger-2"
        />
        <StatCard
          value="$18B+"
          label="Projected 2030"
          valueColor="#58A618"
          className="animate-fade-up stagger-3"
        />
      </div>

      <div className="grid grid-cols-2 gap-6">
        <ListCard
          title="Products & Services"
          items={[
            "CGM sensor systems & transmitters",
            "Mobile apps & cloud platforms",
            "Data analytics & insights",
            "Provider connectivity tools",
          ]}
          accentColor="hsl(var(--primary))"
          className="animate-fade-up stagger-4"
        />
        <ListCard
          title="Customer Segments"
          items={[
            "Type 1 & Type 2 diabetes patients",
            "Healthcare providers & endocrinologists",
            "Payers & pharmacy benefit managers",
            "Wellness consumers & athletes",
          ]}
          className="animate-fade-up stagger-5"
        />
      </div>
    </div>
  )
}
