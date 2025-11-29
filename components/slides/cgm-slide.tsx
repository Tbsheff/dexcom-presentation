import { Activity, Zap, TrendingUp, Bell, Share2 } from "lucide-react"

export function CgmSlide() {
  const features = [
    {
      icon: Activity,
      title: "24/7 Monitoring",
      desc: "Wearable sensor measures glucose continuously",
    },
    {
      icon: Zap,
      title: "Real-Time",
      desc: "New reading every 5 minutes to your phone",
    },
    {
      icon: TrendingUp,
      title: "Trend Analysis",
      desc: "See direction and rate of change",
    },
    {
      icon: Bell,
      title: "Smart Alerts",
      desc: "Notifications for highs and lows",
    },
    {
      icon: Share2,
      title: "Data Sharing",
      desc: "Share with caregivers and doctors",
    },
  ]

  // Simulated glucose data for the visual
  const glucoseData = [
    { time: 0, value: 110 },
    { time: 1, value: 115 },
    { time: 2, value: 130 },
    { time: 3, value: 145 },
    { time: 4, value: 140 },
    { time: 5, value: 125 },
    { time: 6, value: 118 },
    { time: 7, value: 105 },
    { time: 8, value: 95 },
    { time: 9, value: 100 },
    { time: 10, value: 112 },
    { time: 11, value: 120 },
  ]

  // Generate SVG path for glucose line
  const generatePath = () => {
    const width = 280
    const height = 140
    const padding = 20
    const maxValue = 180
    const minValue = 70

    const points = glucoseData.map((point, index) => {
      const x = padding + (index / (glucoseData.length - 1)) * (width - 2 * padding)
      const y = height - padding - ((point.value - minValue) / (maxValue - minValue)) * (height - 2 * padding)
      return `${x},${y}`
    })

    return `M ${points.join(" L ")}`
  }

  return (
    <div className="p-12 lg:p-16 max-w-6xl mx-auto h-full flex flex-col justify-center">
      {/* Header */}
      <div className="mb-10">
        <span className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">Technology</span>
        <h2 className="text-5xl lg:text-6xl font-bold mt-3 tracking-tight text-foreground">
          Continuous Glucose
          <br />
          <span className="text-primary">Monitoring</span>
        </h2>
      </div>

      {/* Main content - Split layout */}
      <div className="grid grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left side - Visual */}
        <div className="col-span-12 lg:col-span-5 animate-fade-up">
          <div className="relative bg-primary/5 rounded-2xl p-6 border border-primary/10">
            {/* Glucose chart visualization */}
            <div className="relative">
              <svg viewBox="0 0 280 140" className="w-full h-auto">
                {/* Background grid */}
                <defs>
                  <pattern id="grid" width="28" height="28" patternUnits="userSpaceOnUse">
                    <path
                      d="M 28 0 L 0 0 0 28"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="0.5"
                      className="text-primary/10"
                    />
                  </pattern>
                </defs>
                <rect width="280" height="140" fill="url(#grid)" />

                {/* Target range band */}
                <rect x="20" y="35" width="240" height="60" fill="currentColor" className="text-primary/10" rx="4" />

                {/* Glucose line */}
                <path
                  d={generatePath()}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                />

                {/* Current reading dot */}
                <circle cx="260" cy="55" r="8" fill="currentColor" className="text-primary" />
                <circle cx="260" cy="55" r="4" fill="white" />
              </svg>

              {/* Current reading badge */}
              <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1.5 rounded-full">
                <span className="text-2xl font-bold">120</span>
                <span className="text-xs ml-1">mg/dL</span>
              </div>

              {/* Range labels */}
              <div className="flex justify-between text-xs text-muted-foreground mt-2 px-2">
                <span>6 hrs ago</span>
                <span className="text-primary font-medium">In Range</span>
                <span>Now</span>
              </div>
            </div>

            {/* Sensor illustration */}
            <div className="mt-6 flex items-center gap-4 pt-4 border-t border-border/50">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-white" />
                </div>
              </div>
              <div>
                <p className="font-semibold text-foreground text-sm">Sensor on upper arm</p>
                <p className="text-xs text-muted-foreground">Painless, water-resistant, 10-day wear</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Features */}
        <div className="col-span-12 lg:col-span-7">
          <p className="text-lg text-muted-foreground mb-8 max-w-lg">
            A small wearable sensor that measures glucose levels in real-time, replacing painful finger pricks with
            continuous, actionable data.
          </p>

          {/* Feature grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {features.map((item, idx) => (
              <div
                key={idx}
                className={`animate-fade-up stagger-${idx + 1} p-4 rounded-xl border border-border/50 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300`}
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground text-sm">{item.title}</h4>
                <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
