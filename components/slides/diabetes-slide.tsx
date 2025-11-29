import { Activity } from "lucide-react"

export function DiabetesSlide() {
  return (
    <div className="p-12 lg:p-20 max-w-5xl mx-auto h-full flex flex-col justify-center">
      <div className="mb-12">
        <span className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">Foundation</span>
        <h2 className="text-5xl font-bold mt-3 tracking-tight text-foreground">Understanding Diabetes</h2>
      </div>

      <div className="grid grid-cols-12 gap-10">
        <div className="col-span-5 animate-fade-up h-full">
          <div className="p-8 card-clean h-full">
            <Activity className="w-8 h-8 text-primary mb-4" />
            <h3 className="text-2xl font-bold mb-3 text-foreground">The Core Problem</h3>
            <p className="text-muted-foreground leading-relaxed">
              Insulin dysfunction causes glucose to accumulate in the bloodstream instead of fueling cells. This affects{" "}
              <span className="text-primary font-semibold">537M+ people</span> globally.
            </p>
          </div>
        </div>

        <div className="col-span-7 space-y-5">
          <div className="animate-fade-up stagger-1 p-6 card-clean">
            <div className="flex items-center gap-4 mb-3">
              <div className="w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center">
                <span className="text-destructive font-bold text-sm">T1</span>
              </div>
              <h4 className="text-lg font-semibold text-foreground">Type 1 Diabetes</h4>
            </div>
            <ul className="text-muted-foreground space-y-1.5 text-sm">
              <li>• Autoimmune condition — body produces no insulin</li>
              <li>• Not preventable — requires lifelong management</li>
            </ul>
          </div>

          <div className="animate-fade-up stagger-2 p-6 card-clean">
            <div className="flex items-center gap-4 mb-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-primary font-bold text-sm">T2</span>
              </div>
              <h4 className="text-lg font-semibold text-foreground">Type 2 Diabetes</h4>
            </div>
            <ul className="text-muted-foreground space-y-1.5 text-sm">
              <li>• Insulin resistance + pancreatic decline over time</li>
              <li>• Risk reduced with lifestyle changes — not caused by sugar</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
