"use client"

export function ImitationBarriersCreatedSlide() {
  const barriers = [
    {
      title: "Proprietary Sensor Technology & Algorithms",
      description: "Dexcom's CGMs rely on patented enzyme chemistry and advanced calibration algorithms that deliver highly accurate, real-time glucose readings. These technologies are difficult to replicate without infringing on Dexcom's intellectual property or matching years of R&D refinement.",
    },
    {
      title: "Regulatory and Clinical Validation",
      description: "Dexcom has extensive FDA-approved clinical data and regulatory clearances built over multiple product generations (G4 to G7). Competitors face major time and cost hurdles replicating this proven safety and performance record, which is essential for physician and insurer trust.",
    },
    {
      title: "Ecosystem Integration and Partnerships",
      description: "Dexcom's integration with Tandem, Omnipod, and Apple Health creates a tightly connected ecosystem of devices and data platforms. This interoperability builds user loyalty and makes it difficult for rivals to offer a seamless experience across pumps, wearables, and mobile apps.",
    },
    {
      title: "Brand Reputation and Clinical Trust",
      description: "Dexcom's long-standing reputation among endocrinologists, hospitals, and patients creates a trust moat. Healthcare professionals are hesitant to switch to lesser-known or less-tested systems, even if they are cheaper.",
    },
    {
      title: "Economies of Scale and Vertical Integration",
      description: "Dexcom's large-scale production and partial in-house manufacturing lower costs and improve quality control. This operational efficiency is tough for smaller competitors to imitate without significant capital investment.",
    },
  ]

  return (
    <div className="p-6 pb-20 max-w-6xl mx-auto">
      <div className="mb-6">
        <span className="text-[10px] uppercase tracking-[0.3em] text-primary font-medium">
          Section 05 · Barriers Created
        </span>
        <h2 className="text-5xl font-bold mt-2 tracking-tight text-foreground leading-tight">Imitation Barriers Created</h2>
        <p className="text-muted-foreground mt-0.5 text-xs leading-tight">Defensive moats Dexcom has built to protect competitive advantage</p>
      </div>

      <div className="space-y-1.5">
        {barriers.map((barrier, idx) => (
          <div
            key={idx}
            className={`animate-fade-up stagger-${idx + 1} p-2.5 rounded-lg bg-card border border-primary/20`}
          >
            <h3 className="text-sm font-bold text-foreground mb-0.5 leading-tight">{barrier.title}</h3>
            <p className="text-xs text-muted-foreground leading-tight">{barrier.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
