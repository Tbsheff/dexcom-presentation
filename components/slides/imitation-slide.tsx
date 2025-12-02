import { SlideHeader, SlideLabel, SlideTitle } from "@/components/ui"

export function ImitationSlide() {
  const barriers = [
    {
      title: "1,600+ Patents",
      desc: "Proprietary sensor technology & algorithms",
    },
    {
      title: "Ecosystem Lock-in",
      desc: "Deep integrations with Tandem, Omnipod, health apps",
    },
    {
      title: "#1 Physician Choice",
      desc: "Clinical trust built over 15+ years",
    },
  ]

  return (
    <div className="px-12 pt-8 pb-20 h-full flex flex-col">
      <SlideHeader>
        <SlideLabel>Competitive Moat</SlideLabel>
        <SlideTitle>Barriers Dexcom Creates</SlideTitle>
      </SlideHeader>

      <div className="flex-1 flex items-center">
        <div className="grid grid-cols-3 gap-8 w-full">
          {barriers.map((item, idx) => (
            <div
              key={idx}
              className={`animate-fade-up stagger-${idx + 1} p-8 rounded-2xl border-2 border-primary/20 bg-primary/5`}
            >
              <h3 className="text-3xl font-bold text-primary mb-3">{item.title}</h3>
              <p className="text-xl text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}