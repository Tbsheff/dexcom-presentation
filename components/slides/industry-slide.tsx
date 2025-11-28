export function IndustrySlide() {
  return (
    <div className="p-12 lg:p-20 max-w-5xl mx-auto h-full flex flex-col justify-center">
      <div className="mb-12">
        <span className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">Market Context</span>
        <h2 className="text-5xl font-bold mt-3 tracking-tight text-foreground">Industry Definition</h2>
      </div>

      <div className="animate-fade-up mb-12 accent-bar py-4">
        <p className="text-xl text-foreground leading-relaxed">
          Dexcom competes in the{" "}
          <span className="text-primary font-semibold">global continuous glucose monitoring (CGM) market</span> within
          the medical device and digital health industry.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="animate-fade-up stagger-1 p-8 card-clean">
          <h3 className="font-semibold text-foreground mb-5 text-lg">Products</h3>
          <ul className="space-y-3 text-muted-foreground">
            {["CGM systems", "Mobile apps", "Data-sharing platforms", "Connected health devices"].map((item, idx) => (
              <li key={idx} className="flex items-center gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="animate-fade-up stagger-2 p-8 card-clean">
          <h3 className="font-semibold text-foreground mb-5 text-lg">Customer Segments</h3>
          <ul className="space-y-3 text-muted-foreground">
            {[
              "Type 1 & Type 2 diabetes patients",
              "Healthcare providers & clinics",
              "Insurance organizations",
              "Wellness-focused consumers & athletes",
            ].map((item, idx) => (
              <li key={idx} className="flex items-center gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
