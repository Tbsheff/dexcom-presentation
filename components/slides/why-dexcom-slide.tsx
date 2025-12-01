import { CheckCircle2 } from "lucide-react"
import { SlideHeader, SlideTitle, Card, CardContent } from "@/components/ui"

export function WhyDexcomSlide() {
  const cards = [
    {
      title: "Superior Features",
      items: ["Minimal warmup time", "No fingerstick calibration", "Best-in-class accuracy (MARD)"],
      highlight: true,
    },
    {
      title: "Connected Ecosystem",
      items: ["Integrates with insulin pumps", "Works with health apps", "Real-time data sharing"],
      highlight: false,
    },
    {
      title: "Brand Trust",
      items: ["#1 physician recommendation", "Premium reputation", "Proven clinical outcomes"],
      highlight: false,
    },
  ]

  return (
    <div className="p-8 lg:p-10 max-w-7xl mx-auto h-full flex flex-col justify-center">
      <div className="mb-12">
        <SlideHeader>Value Proposition</SlideHeader>
        <SlideTitle>Why Dexcom Wins</SlideTitle>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {cards.map((card, idx) => (
          <Card
            key={idx}
            className={`animate-fade-up stagger-${idx + 1} ${card.highlight ? "bg-muted" : ""}`}
          >
            <CardContent className="pt-6">
              <h3 className="text-lg font-semibold text-foreground mb-5">{card.title}</h3>
              <ul className="space-y-3">
                {card.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <CheckCircle2
                      className={`w-4 h-4 mt-0.5 shrink-0 ${card.highlight ? "text-primary" : "text-muted-foreground"}`}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="animate-fade-up stagger-4 mt-10">
        <CardContent className="pt-6">
          <p className="text-center text-lg text-foreground">
            <span className="text-primary font-semibold">"The most connected CGM system in the world"</span>
            <span className="text-muted-foreground"> — a brand patients and doctors trust</span>
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
