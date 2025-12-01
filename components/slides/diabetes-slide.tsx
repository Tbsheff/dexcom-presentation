import { Activity } from "lucide-react"
import { SlideHeader, SlideLabel, SlideTitle } from "@/components/ui"
import { Card, CardContent } from "@/components/ui"

export function DiabetesSlide() {
  return (
    <div className="p-8 lg:p-10 max-w-7xl mx-auto h-full flex flex-col justify-center">
      <SlideHeader>
        <SlideLabel>Foundation</SlideLabel>
        <SlideTitle>Understanding Diabetes</SlideTitle>
      </SlideHeader>

      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-5 animate-fade-up h-full">
          <Card className="h-full">
            <CardContent className="p-6">
              <Activity className="w-6 h-6 text-muted-foreground mb-3" />
              <h3 className="text-xl font-semibold mb-2 text-foreground">The Core Problem</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Insulin dysfunction causes glucose to accumulate in the bloodstream instead of fueling cells. This affects{" "}
                <span className="text-primary font-medium">537M+ people</span> globally.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="col-span-7 space-y-4">
          <Card className="animate-fade-up stagger-1">
            <CardContent className="p-5">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-md bg-muted flex items-center justify-center">
                  <span className="text-muted-foreground font-semibold text-xs">T1</span>
                </div>
                <h4 className="font-semibold text-foreground">Type 1 Diabetes</h4>
              </div>
              <ul className="text-muted-foreground space-y-1 text-sm ml-11">
                <li>Autoimmune condition — body produces no insulin</li>
                <li>Not preventable — requires lifelong management</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="animate-fade-up stagger-2">
            <CardContent className="p-5">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-md bg-muted flex items-center justify-center">
                  <span className="text-muted-foreground font-semibold text-xs">T2</span>
                </div>
                <h4 className="font-semibold text-foreground">Type 2 Diabetes</h4>
              </div>
              <ul className="text-muted-foreground space-y-1 text-sm ml-11">
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
