import Image from "next/image"
import { SlideHeader, SlideLabel, SlideTitle, Card, CardContent } from "@/components/ui"

export function HowCgmWorksSlide() {
  const keyPoints = [
    { title: "Sensor Filament", desc: "Tiny wire sits just under the skin in interstitial fluid" },
    { title: "Glucose Detection", desc: "Measures glucose levels in the fluid surrounding cells" },
    { title: "Wireless Transmitter", desc: "Sends readings to receiver or smartphone every 5 minutes" },
    { title: "No Blood Required", desc: "Eliminates painful fingerstick tests for most readings" },
  ]

  return (
    <div className="px-12 pt-8 pb-20 h-full flex flex-col">
      <SlideHeader>
        <SlideLabel>Technology</SlideLabel>
        <SlideTitle>How CGM Works</SlideTitle>
      </SlideHeader>

      <div className="grid grid-cols-12 gap-6 flex-1 min-h-0">
        <div className="col-span-6 animate-fade-up flex items-center justify-center">
          <Image
            src="/images/cgm-diagram.png"
            alt="CGM sensor cross-section diagram showing transmitter, sensor, and glucose measurement in subcutaneous tissue"
            width={600}
            height={400}
            className="rounded-lg object-contain max-h-full"
          />
        </div>

        <div className="col-span-6 flex flex-col">
          <p className="text-2xl text-muted-foreground mb-6">
            A tiny sensor filament sits just under the skin, measuring glucose in interstitial fluid and transmitting readings wirelessly.
          </p>
          <div className="flex flex-col gap-3 flex-1">
            {keyPoints.map((item, idx) => (
              <Card key={idx} className={`animate-fade-up stagger-${idx + 1} flex-1`}>
                <CardContent className="p-4 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <span className="text-lg font-bold text-primary">{idx + 1}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground text-xl">{item.title}</h4>
                    <p className="text-lg text-muted-foreground">{item.desc}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
