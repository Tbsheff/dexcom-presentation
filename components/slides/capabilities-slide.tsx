import { SlideHeader, SlideLabel, SlideTitle, Card, CardContent } from "@/components/ui"

export function CapabilitiesSlide() {
  const capabilities = [
    { title: "R&D Innovation", desc: "G6 → G7 → G7 15-Day evolution" },
    { title: "Strategic Partnerships", desc: "Tandem, Omnipod, health apps" },
    { title: "Manufacturing Excellence", desc: "High-volume precision production" },
    { title: "Regulatory Navigation", desc: "Fast FDA & global approvals" },
  ]

  return (
    <div className="px-12 pt-8 pb-20 h-full flex flex-col">
      <SlideHeader>
        <SlideLabel>Core Competencies</SlideLabel>
        <SlideTitle>Capabilities</SlideTitle>
      </SlideHeader>

      <div className="grid grid-cols-2 gap-6">
        {capabilities.map((cap, idx) => (
          <Card key={idx} className={`animate-fade-up stagger-${idx + 1}`}>
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                  <span className="text-lg font-bold text-primary">{idx + 1}</span>
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-2xl mb-2">{cap.title}</h4>
                  <p className="text-xl text-muted-foreground leading-relaxed">{cap.desc}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
