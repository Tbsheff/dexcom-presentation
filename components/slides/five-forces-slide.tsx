import { Shield, TrendingUp, Target } from "lucide-react"
import { SlideHeader, SlideLabel, SlideTitle, Card, CardContent } from "@/components/ui"

export function FiveForcesSlide() {
  const insights = [
    {
      icon: Shield,
      title: "High Barriers to Entry",
      insight: "FDA regulatory requirements and extensive patent portfolios create significant moats",
      implication: "Incumbents like Dexcom are protected from new competitors",
    },
    {
      icon: TrendingUp,
      title: "Expanding Market",
      insight: "CGM market growing at 12%+ CAGR, driven by Type 2 diabetes adoption and wellness consumers",
      implication: "Rising tide lifts all boats — room for multiple players to grow",
    },
    {
      icon: Target,
      title: "Differentiation Wins",
      insight: "High rivalry between Abbott, Medtronic, and Dexcom — but accuracy, integration, and convenience create sustainable advantages",
      implication: "Competition is fierce but not commoditized",
    },
  ]

  return (
    <div className="px-12 pt-8 pb-20 h-full flex flex-col">
      <SlideHeader>
        <SlideLabel>Industry Analysis</SlideLabel>
        <SlideTitle>Market Attractiveness</SlideTitle>
      </SlideHeader>

      <div className="grid grid-cols-3 gap-6 flex-1">
        {insights.map((item, idx) => {
          const Icon = item.icon
          return (
            <Card key={idx} className={`animate-fade-up stagger-${idx + 1} flex flex-col`}>
              <CardContent className="p-6 flex flex-col flex-1">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-foreground text-2xl mb-3">{item.title}</h3>
                <p className="text-xl text-muted-foreground mb-4 flex-1">{item.insight}</p>
                <p className="text-lg text-primary font-medium">{item.implication}</p>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
