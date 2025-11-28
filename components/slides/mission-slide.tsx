export function MissionSlide() {
  const values = [
    { title: "Listen", desc: "Understand needs of people living with diabetes" },
    { title: "Integrity", desc: "Act in best interest of the community" },
    { title: "Think Big", desc: "Revolutionize diabetes care with technology" },
    { title: "Dependable", desc: "Inspire confidence in each other" },
  ]

  return (
    <div className="p-12 lg:p-20 max-w-5xl mx-auto h-full flex flex-col justify-center">
      <div className="mb-12">
        <span className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">Purpose</span>
        <h2 className="text-5xl font-bold mt-3 tracking-tight text-foreground">Mission & Values</h2>
      </div>

      <div className="animate-fade-up mb-12 accent-bar py-4">
        <span className="text-xs uppercase tracking-wider text-primary font-semibold">Mission</span>
        <p className="text-2xl font-medium text-foreground mt-3 leading-relaxed">
          Empower people with diabetes to take control through Continuous Glucose Monitoring
        </p>
      </div>

      <div className="grid grid-cols-4 gap-5">
        {values.map((value, idx) => (
          <div key={idx} className={`animate-fade-up stagger-${idx + 1} p-6 card-clean text-center`}>
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <span className="text-primary font-bold">{idx + 1}</span>
            </div>
            <h4 className="font-semibold text-foreground mb-2">{value.title}</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">{value.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
