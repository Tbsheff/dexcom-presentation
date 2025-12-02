import { SlideHeader, SlideTitle, ListCard } from "@/components/ui"

export function ConsumerWantsSlide() {
  const sections = [
    {
      category: "Functional Needs",
      items: ["Accurate continuous tracking", "No fingersticks"],
    },
    {
      category: "Emotional Needs",
      items: ["Confidence & control", "Peace of mind"],
    },
    {
      category: "Social Needs",
      items: ["Data sharing with caregivers", "Discreet device"],
    },
    {
      category: "Purchase Journey",
      items: ["Doctor recommendation", "Insurance coverage"],
    },
  ]

  return (
    <div className="px-12 pt-8 pb-20 h-full flex flex-col">
      <SlideHeader>
        <span className="text-sm text-muted-foreground font-medium">Consumption Chain</span>
        <SlideTitle>What Consumers Want</SlideTitle>
      </SlideHeader>

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
