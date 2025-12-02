import { Activity, Zap, TrendingUp, Bell, Share2 } from "lucide-react"
import { SlideHeader, SlideLabel, SlideTitle, Card, CardContent } from "@/components/ui"

export function CgmSlide() {
  const features = [
    { icon: Activity, title: "24/7 Monitoring", desc: "Wearable sensor measures glucose continuously" },
    { icon: Zap, title: "Real-Time", desc: "New reading every 5 minutes to your phone" },
    { icon: TrendingUp, title: "Trend Analysis", desc: "See direction and rate of change" },
    { icon: Bell, title: "Smart Alerts", desc: "Notifications for highs and lows" },
    { icon: Share2, title: "Data Sharing", desc: "Share with caregivers and doctors" },
  ]

  const glucoseData = [
    { time: 0, value: 110 }, { time: 1, value: 115 }, { time: 2, value: 130 },
    { time: 3, value: 145 }, { time: 4, value: 140 }, { time: 5, value: 125 },
    { time: 6, value: 118 }, { time: 7, value: 105 }, { time: 8, value: 95 },
    { time: 9, value: 100 }, { time: 10, value: 112 }, { time: 11, value: 120 },
  ]

  const generatePath = () => {
    const width = 280, height = 140, padding = 20, maxValue = 180, minValue = 70
    const points = glucoseData.map((point, index) => {
      const x = padding + (index / (glucoseData.length - 1)) * (width - 2 * padding)
      const y = height - padding - ((point.value - minValue) / (maxValue - minValue)) * (height - 2 * padding)
      return `${x},${y}`
    })
    return `M ${points.join(" L ")}`
  }

  return (
    <div className="px-12 pt-8 pb-20 h-full flex flex-col">
      <SlideHeader>
        <SlideLabel>Technology</SlideLabel>
        <SlideTitle>Continuous Glucose Monitoring</SlideTitle>
      </SlideHeader>

      <div className="grid grid-cols-12 gap-6 flex-1 min-h-0">
        <div className="col-span-5 animate-fade-up">
          <Card className="h-full">
            <CardContent className="p-5 h-full flex flex-col">
              <div className="relative flex-1 flex flex-col justify-center">
                <svg viewBox="0 0 280 140" className="w-full h-auto">
                  <defs>
                    <pattern id="grid" width="28" height="28" patternUnits="userSpaceOnUse">
                      <path d="M 28 0 L 0 0 0 28" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-border" />
                    </pattern>
                  </defs>
                  <rect width="280" height="140" fill="url(#grid)" />
                  <rect x="20" y="35" width="240" height="60" fill="currentColor" className="text-muted/50" rx="4" />
                  <path d={generatePath()} fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-primary" />
                  <circle cx="260" cy="55" r="6" fill="currentColor" className="text-primary" />
                  <circle cx="260" cy="55" r="3" fill="white" />
                </svg>
                <div className="absolute top-2 right-2 bg-primary text-primary-foreground px-2.5 py-1 rounded-md text-sm">
                  <span className="font-semibold">120</span>
                  <span className="text-xs ml-0.5">mg/dL</span>
                </div>
                <div className="flex justify-between text-xs text-muted-foreground mt-2">
                  <span>6 hrs ago</span>
                  <span className="text-primary font-medium">In Range</span>
                  <span>Now</span>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-3 pt-4 border-t border-border">
                <div className="w-10 h-10 rounded-md bg-muted flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground text-sm">Sensor on upper arm</p>
                  <p className="text-xs text-muted-foreground">Painless, water-resistant, 10-day wear</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="col-span-7 flex flex-col">
          <p className="text-2xl text-muted-foreground mb-4">
            A small wearable sensor that measures glucose levels in real-time, replacing painful finger pricks with continuous, actionable data.
          </p>
          <div className="grid grid-cols-3 grid-rows-2 gap-3 flex-1">
            {features.map((item, idx) => (
              <Card key={idx} className={`animate-fade-up stagger-${idx + 1}`}>
                <CardContent className="p-4 h-full flex flex-col">
                  <div className="w-10 h-10 rounded-md bg-muted flex items-center justify-center mb-3">
                    <item.icon className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <h4 className="font-bold text-foreground text-xl">{item.title}</h4>
                  <p className="text-lg text-muted-foreground mt-1">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
