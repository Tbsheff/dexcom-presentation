export function CompanySlide() {
  const stats = [
    { label: "Founded", value: "1999", sub: "San Diego, CA" },
    { label: "First CGM", value: "2006", sub: "Dexcom STS" },
    { label: "Employees", value: "10,000+", sub: "Globally" },
  ]

  return (
    <div className="p-12 lg:p-20 max-w-5xl mx-auto h-full flex flex-col justify-center">
      <div className="mb-12">
        <span className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">About</span>
        <h2 className="text-5xl font-bold mt-3 tracking-tight text-foreground">Company Overview</h2>
      </div>

      <div className="grid grid-cols-3 gap-6 mb-8">
        {stats.map((item, idx) => (
          <div key={idx} className={`animate-fade-up stagger-${idx + 1} p-6 card-clean`}>
            <span className="text-xs uppercase tracking-wider text-muted-foreground">{item.label}</span>
            <p className="text-4xl font-bold text-foreground mt-2">{item.value}</p>
            <p className="text-sm text-muted-foreground mt-1">{item.sub}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="animate-fade-up stagger-4 p-6 card-clean">
          <h3 className="font-semibold text-foreground mb-4">Product Portfolio</h3>
          <div className="flex flex-wrap gap-2">
            {["G6", "G7", "G7 15-Day", "Stelo (OTC)"].map((product) => (
              <span key={product} className="px-4 py-2 rounded-md bg-primary/10 text-primary text-sm font-medium">
                {product}
              </span>
            ))}
          </div>
        </div>
        <div className="animate-fade-up stagger-5 p-6 card-clean border-l-3 border-l-primary">
          <h3 className="font-semibold text-foreground mb-2">Global Presence</h3>
          <p className="text-5xl font-bold text-primary">52</p>
          <p className="text-muted-foreground">Countries worldwide</p>
        </div>
      </div>
    </div>
  )
}
