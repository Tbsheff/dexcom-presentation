import { Ear, Handshake, Lightbulb, Shield } from "lucide-react"
import { SlideHeader, SlideLabel, SlideTitle, Card, CardContent } from "@/components/ui"

export function MissionSlide() {
  const values = [
    { title: "Listen", desc: "Understand needs of people living with diabetes", icon: Ear },
    { title: "Integrity", desc: "Act in best interest of the community", icon: Handshake },
    { title: "Think Big", desc: "Revolutionize diabetes care with technology", icon: Lightbulb },
    { title: "Dependable", desc: "Inspire confidence in each other", icon: Shield },
  ]

  return (
    <div className="px-12 pt-8 pb-20 h-full flex flex-col">
      <SlideHeader>
        <SlideLabel>Purpose</SlideLabel>
        <SlideTitle>Mission & Values</SlideTitle>
      </SlideHeader>

      <Card className="animate-fade-up mb-8 border-l-4 border-l-primary bg-primary/5">
        <CardContent className="p-8">
          <p className="text-lg text-muted-foreground mb-3 uppercase tracking-wide font-medium">Mission</p>
          <p className="text-3xl md:text-4xl font-semibold text-foreground leading-relaxed">
            Empower people with diabetes to take control through Continuous Glucose Monitoring
          </p>
        </CardContent>
      </Card>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {values.map((value, idx) => (
          <Card key={idx} className={`animate-fade-up stagger-${idx + 1}`}>
            <CardContent className="p-6 text-center">
              <div className="w-14 h-14 rounded-md bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <value.icon className="w-7 h-7 text-primary" />
              </div>
              <h4 className="font-bold text-foreground text-2xl mb-2">{value.title}</h4>
              <p className="text-lg text-muted-foreground">{value.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
