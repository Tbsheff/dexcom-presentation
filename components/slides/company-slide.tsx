import { SlideHeader, SlideLabel, SlideTitle, Card, CardContent, StatCard, Badge } from "@/components/ui"

export function CompanySlide() {
  const stats = [
    { label: "Founded", value: "1999", sub: "San Diego, CA" },
    { label: "First CGM", value: "2006", sub: "Dexcom STS" },
    { label: "Employees", value: "10,000+", sub: "Globally" },
  ]

  return (
    <div className="p-8 lg:p-10 max-w-7xl mx-auto h-full flex flex-col justify-center">
      <SlideHeader>
        <SlideLabel>About</SlideLabel>
        <SlideTitle>Company Overview</SlideTitle>
      </SlideHeader>

      <div className="grid grid-cols-3 gap-5 mb-6">
        {stats.map((item, idx) => (
          <StatCard
            key={idx}
            className={`animate-fade-up stagger-${idx + 1}`}
            label={item.label}
            value={item.value}
            subtext={item.sub}
          />
        ))}
      </div>

      <div className="grid grid-cols-2 gap-5">
        <Card className="animate-fade-up stagger-4">
          <CardContent className="p-5">
            <h3 className="font-semibold text-foreground mb-3">Product Portfolio</h3>
            <div className="flex flex-wrap gap-2">
              {["G6", "G7", "G7 15-Day", "Stelo (OTC)"].map((product) => (
                <Badge key={product} variant="muted">{product}</Badge>
              ))}
            </div>
          </CardContent>
        </Card>
        <Card className="animate-fade-up stagger-5">
          <CardContent className="p-5">
            <h3 className="font-semibold text-foreground mb-2">Global Presence</h3>
            <p className="text-4xl font-semibold text-primary">52</p>
            <p className="text-sm text-muted-foreground">Countries worldwide</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
