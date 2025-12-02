"use client"

export function ImitationBarriersFacedSlide() {
  const barriers = [
    {
      title: "Lower-Cost Products (Abbott's FreeStyle Libre)",
      description: "Abbott's simpler, lower-priced CGM appeals to cost-sensitive patients, insurers, and non-insulin users. Dexcom cannot easily imitate this price point without reducing margins.",
    },
    {
      title: "Longer Wear Duration (Senseonics' Eversense 365)",
      description: "Senseonics' implantable CGM lasts up to a year, which rivals Dexcom's sensor wear time. Dexcom faces pressure to innovate longer-lasting sensors, a technical barrier to imitate quickly.",
    },
    {
      title: "Pump Integration & Automated Insulin Delivery (Medtronic Guardian Connect)",
      description: "Medtronic integrates its CGM directly with insulin pumps to automate insulin delivery, creating a seamless closed-loop system. Dexcom faces barriers in replicating end-to-end automated insulin delivery without partnerships.",
    },
    {
      title: "Brand Loyalty & Established Ecosystem (Abbott, Medtronic)",
      description: "Competitors have loyal users in specific segments (e.g., type 2 patients with Libre, pump users with Medtronic), which acts as a barrier for Dexcom to capture those customers.",
    },
    {
      title: "Distribution and Insurance Relationships",
      description: "Competitors like Abbott and Medtronic have extensive insurance contracts and pharmacy networks, making it harder for Dexcom to expand into certain markets quickly.",
    },
  ]

  return (
    <div className="p-10 pb-24 max-w-6xl mx-auto">
      <div className="mb-4">
        <span className="text-[11px] uppercase tracking-[0.3em] text-orange-500 font-medium">
          Section 05 · Barriers Faced
        </span>
        <h2 className="text-5xl font-bold mt-1 tracking-tight text-foreground">Imitation Barriers Faced</h2>
        <p className="text-muted-foreground mt-1 text-sm">Competitive obstacles Dexcom must overcome or navigate</p>
      </div>

      <div className="space-y-2">
        {barriers.map((barrier, idx) => (
          <div
            key={idx}
            className={`animate-fade-up stagger-${idx + 1} p-3 rounded-lg bg-card border border-orange-200 dark:border-orange-900/30`}
          >
            <h3 className="text-lg font-bold text-foreground mb-1">{barrier.title}</h3>
            <p className="text-sm text-muted-foreground leading-snug">{barrier.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
