import { SlideHeader, SlideTitle, ListCard } from "@/components/ui"

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
    <div className="p-8 lg:p-10 max-w-7xl mx-auto h-full flex flex-col justify-center">
      <div className="mb-12">
        <SlideHeader>Consumption Chain</SlideHeader>
        <SlideTitle>What Consumers Want</SlideTitle>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {sections.map((section, idx) => (
          <ListCard
            key={idx}
            title={section.category}
            items={section.items}
            accentColor="hsl(var(--primary))"
            className={`animate-fade-up stagger-${idx + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
