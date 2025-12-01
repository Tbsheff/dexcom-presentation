import { SlideHeader, SlideLabel, SlideTitle, Card, CardContent } from "@/components/ui"

export function MissionSlide() {
  const values = [
    { title: "Listen", desc: "Understand needs of people living with diabetes" },
    { title: "Integrity", desc: "Act in best interest of the community" },
    { title: "Think Big", desc: "Revolutionize diabetes care with technology" },
    { title: "Dependable", desc: "Inspire confidence in each other" },
  ]

  return (
    <div className="p-8 lg:p-10 max-w-7xl mx-auto h-full flex flex-col justify-center">
      <SlideHeader>
        <SlideLabel>Purpose</SlideLabel>
        <SlideTitle>Mission & Values</SlideTitle>
      </SlideHeader>

      <Card className="animate-fade-up mb-8">
        <CardContent className="p-6">
          <p className="text-sm text-muted-foreground mb-2">Mission</p>
          <p className="text-xl font-medium text-foreground leading-relaxed">
            Empower people with diabetes to take control through Continuous Glucose Monitoring
          </p>
        </CardContent>
      </Card>

      <div className="grid grid-cols-4 gap-4">
        {values.map((value, idx) => (
          <Card key={idx} className={`animate-fade-up stagger-${idx + 1}`}>
            <CardContent className="p-5 text-center">
              <div className="w-8 h-8 rounded-md bg-muted flex items-center justify-center mx-auto mb-3">
                <span className="text-muted-foreground font-semibold text-sm">{idx + 1}</span>
              </div>
              <h4 className="font-semibold text-foreground mb-1">{value.title}</h4>
              <p className="text-xs text-muted-foreground">{value.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
