import { Activity, Zap, TrendingUp, Shield, Users } from "lucide-react"

export function CgmSlide() {
  const features = [
    {
      icon: Activity,
      title: "Continuous Monitoring",
      desc: "Small wearable sensor measures glucose in interstitial fluid 24/7",
    },
    { icon: Zap, title: "Real-Time Data", desc: "New reading every ~5 minutes sent directly to phone or receiver" },
    { icon: TrendingUp, title: "Trend Analysis", desc: "Shows direction and rate of change, not just a single number" },
    { icon: Shield, title: "Smart Alerts", desc: "Customizable notifications for dangerous highs and lows" },
    { icon: Users, title: "Data Sharing", desc: "Share readings with caregivers, family, and healthcare providers" },
  ]

  return (
    <div className="p-12 lg:p-20 max-w-5xl mx-auto h-full flex flex-col justify-center">
      <div className="mb-12">
        <span className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">Technology</span>
        <h2 className="text-5xl font-bold mt-3 tracking-tight text-foreground">What is a CGM?</h2>
      </div>

      <div className="grid grid-cols-12 gap-12">
        <div className="col-span-8 space-y-4">
          {features.map((item, idx) => (
            <div key={idx} className={`animate-fade-up stagger-${idx + 1} flex items-start gap-5 p-5 card-clean`}>
              <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground">{item.title}</h4>
                <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="col-span-4 flex items-center justify-center">
          <div className="relative">
            <div className="w-40 h-40 rounded-full border border-border flex items-center justify-center">
              <div className="w-28 h-28 rounded-full border border-primary/30 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-bold">CGM</span>
                </div>
              </div>
            </div>
            <div className="absolute -top-1 right-2 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold">
              LIVE
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
