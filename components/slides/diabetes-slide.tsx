import { Activity } from "lucide-react"
import { SlideHeader, SlideLabel, SlideTitle } from "@/components/ui"
import { Card, CardContent } from "@/components/ui"

export function DiabetesSlide() {
  return (
    <div className="px-12 pt-8 pb-20 h-full flex flex-col">
      <SlideHeader>
        <SlideLabel>Foundation</SlideLabel>
        <SlideTitle>Understanding Diabetes</SlideTitle>
      </SlideHeader>

      <div className="grid grid-cols-2 gap-6">
        <div className="animate-fade-up">
          <Card className="h-full flex flex-col justify-center">
            <CardContent className="p-6">
              <Activity className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-4xl font-bold mb-4 text-foreground">The Core Problem</h3>
              <p className="text-6xl font-bold text-primary mb-4">537M+</p>
              <p className="text-2xl text-muted-foreground leading-relaxed">
                people with glucose that stays in bloodstream instead of fueling cells
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-4">
          <Card className="animate-fade-up stagger-1">
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 rounded-md bg-muted flex items-center justify-center">
                  <span className="text-muted-foreground font-bold text-lg">T1</span>
                </div>
                <h4 className="font-bold text-foreground text-2xl">Type 1 Diabetes</h4>
              </div>
              <ul className="text-muted-foreground space-y-2 text-xl ml-16">
                <li>Autoimmune condition — body produces no insulin</li>
                <li>Not preventable — requires lifelong management</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="animate-fade-up stagger-2">
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 rounded-md bg-muted flex items-center justify-center">
                  <span className="text-muted-foreground font-bold text-lg">T2</span>
                </div>
                <h4 className="font-bold text-foreground text-2xl">Type 2 Diabetes</h4>
              </div>
              <ul className="text-muted-foreground space-y-2 text-xl ml-16">
                <li>Insulin resistance + pancreatic decline over time</li>
                <li>Risk reduced with lifestyle changes — not caused by sugar</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
