import { SlideHeader, SlideLabel, SlideTitle, Card, CardContent } from "@/components/ui"

export function ResourcesSlide() {
  const intangible = [
    { title: "Patents & IP", desc: "1,500+ patents protecting core tech" },
    { title: "Brand Reputation", desc: "Most trusted name in CGM" },
  ]

  const tangible = [
    { title: "Manufacturing", desc: "Arizona facility, 200M+ sensors/year" },
    { title: "Human Capital", desc: "9,000+ employees, strong R&D team" },
  ]

  return (
    <div className="px-12 pt-8 pb-20 h-full flex flex-col">
      <SlideHeader>
        <SlideLabel>Strategic Assets</SlideLabel>
        <SlideTitle>Resources</SlideTitle>
      </SlideHeader>

      <div className="grid grid-cols-2 gap-10">
        {/* Intangible */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-2 rounded-full bg-primary" />
            <h3 className="text-xl font-semibold text-foreground uppercase tracking-wider">Intangible</h3>
          </div>
          <div className="space-y-4">
            {intangible.map((item, idx) => (
              <Card key={idx} className={`animate-fade-up stagger-${idx + 1}`}>
                <CardContent className="p-6">
                  <h4 className="font-bold text-foreground text-2xl mb-2">{item.title}</h4>
                  <p className="text-xl text-muted-foreground leading-relaxed">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Tangible */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-2 rounded-full bg-primary" />
            <h3 className="text-xl font-semibold text-foreground uppercase tracking-wider">Tangible</h3>
          </div>
          <div className="space-y-4">
            {tangible.map((item, idx) => (
              <Card key={idx} className={`animate-fade-up stagger-${idx + 3}`}>
                <CardContent className="p-6">
                  <h4 className="font-bold text-foreground text-2xl mb-2">{item.title}</h4>
                  <p className="text-xl text-muted-foreground leading-relaxed">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
