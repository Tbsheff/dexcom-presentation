export function ConsumerWantsSlide() {
  const sections = [
    {
      category: "Functional Needs",
      items: [
        "Continuous, accurate glucose tracking",
        "Reduce painful fingersticks",
        "Real-time alerts for safety",
        "Support treatment decisions",
      ],
    },
    {
      category: "Emotional Needs",
      items: [
        "Feel confident and in control",
        "Reduce anxiety about health",
        "Live life without constant worry",
        "Peace of mind for caregivers",
      ],
    },
    {
      category: "Social Needs",
      items: [
        "Share data with family/caregivers",
        "Connected diabetes management",
        "Discreet, non-stigmatizing device",
        "Integration with daily life",
      ],
    },
    {
      category: "Purchase Journey",
      items: [
        "Doctor recommendation is key",
        "Insurance coverage critical",
        "Easy pharmacy pickup/delivery",
        "24/7 technical support",
      ],
    },
  ]

  return (
    <div className="p-12 lg:p-20 max-w-5xl mx-auto h-full flex flex-col justify-center">
      <div className="mb-12">
        <span className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">Consumption Chain</span>
        <h2 className="text-5xl font-bold mt-3 tracking-tight text-foreground">What Consumers Want</h2>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {sections.map((section, idx) => (
          <div key={idx} className={`animate-fade-up stagger-${idx + 1} p-6 card-clean`}>
            <h3 className="font-semibold text-foreground mb-4 text-lg">{section.category}</h3>
            <ul className="space-y-2.5">
              {section.items.map((item, i) => (
                <li key={i} className="text-sm text-muted-foreground flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
