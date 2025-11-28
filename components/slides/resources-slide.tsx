export function ResourcesSlide() {
  return (
    <div className="p-12 lg:p-20 max-w-5xl mx-auto h-full flex flex-col justify-center">
      <div className="mb-12">
        <span className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">Tangible & Intangible</span>
        <h2 className="text-5xl font-bold mt-3 tracking-tight text-foreground">Resources</h2>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="space-y-5">
          <div className="animate-fade-up stagger-1 p-6 card-clean border-l-3 border-l-primary">
            <h4 className="font-bold text-foreground mb-2">Patents & IP</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Protected CGM technology and proprietary algorithms that competitors cannot easily replicate
            </p>
          </div>

          <div className="animate-fade-up stagger-2 p-6 card-clean border-l-3 border-l-primary">
            <h4 className="font-bold text-foreground mb-2">Brand Reputation</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Trusted name among physicians and patients built over 25+ years of innovation
            </p>
          </div>
        </div>

        <div className="space-y-5">
          <div className="animate-fade-up stagger-3 p-6 card-clean">
            <h4 className="font-semibold text-foreground mb-2">Manufacturing Infrastructure</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              3 large facilities including international presence, enabling high-volume precision production
            </p>
          </div>

          <div className="animate-fade-up stagger-4 p-6 card-clean">
            <h4 className="font-semibold text-foreground mb-2">Human Capital</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              10,000+ employees with specialized expertise in biosensors, regulatory affairs, and clinical development
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
