export function CapabilitiesSlide() {
  return (
    <div className="p-12 lg:p-20 max-w-5xl mx-auto h-full flex flex-col justify-center">
      <div className="mb-12">
        <span className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">Core Competencies</span>
        <h2 className="text-5xl font-bold mt-3 tracking-tight text-foreground">Capabilities</h2>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="space-y-5">
          <div className="animate-fade-up stagger-1 p-6 card-clean border-l-3 border-l-primary">
            <h4 className="font-bold text-foreground mb-2">Rapid R&D Innovation</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              G6 (2018) → G7 (2023) → G7 15-Day (2025). Newest sensor is 50% longer-lasting and 60% smaller
            </p>
          </div>

          <div className="animate-fade-up stagger-2 p-6 card-clean border-l-3 border-l-primary">
            <h4 className="font-bold text-foreground mb-2">Strategic Partnerships</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Deep connections with insulin pump manufacturers (Tandem, Omnipod) enabling integrated care solutions
            </p>
          </div>
        </div>

        <div className="space-y-5">
          <div className="animate-fade-up stagger-3 p-6 card-clean">
            <h4 className="font-semibold text-foreground mb-2">Manufacturing Excellence</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              High-volume, precision manufacturing with effective B2B and expanding D2C distribution
            </p>
          </div>

          <div className="animate-fade-up stagger-4 p-6 card-clean">
            <h4 className="font-semibold text-foreground mb-2">Regulatory Navigation</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Proven expertise in FDA approvals and global regulatory requirements
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
