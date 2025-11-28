import { CheckCircle2 } from "lucide-react"

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
    <div className="p-12 lg:p-20 max-w-5xl mx-auto h-full flex flex-col justify-center">
      <div className="mb-12">
        <span className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">Value Proposition</span>
        <h2 className="text-5xl font-bold mt-3 tracking-tight text-foreground">Why Dexcom Wins</h2>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className={`animate-fade-up stagger-${idx + 1} p-6 rounded-md border ${
              card.highlight ? "bg-primary/5 border-primary/30" : "bg-card border-border"
            }`}
          >
            <h3 className="text-lg font-bold text-foreground mb-5">{card.title}</h3>
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
          </div>
        ))}
      </div>

      <div className="animate-fade-up stagger-4 mt-10 p-6 card-clean">
        <p className="text-center text-lg text-foreground">
          <span className="text-primary font-semibold">"The most connected CGM system in the world"</span>
          <span className="text-muted-foreground"> — a brand patients and doctors trust</span>
        </p>
      </div>
    </div>
  )
}
