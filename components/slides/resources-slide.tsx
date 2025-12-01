import { SlideHeader, SlideTitle, Card, CardContent } from "@/components/ui"

export function ResourcesSlide() {
  return (
    <div className="p-8 lg:p-10 max-w-7xl mx-auto h-full flex flex-col justify-center">
      <div className="mb-12">
        <SlideHeader>Tangible & Intangible</SlideHeader>
        <SlideTitle>Resources</SlideTitle>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="space-y-5">
          <Card className="animate-fade-up stagger-1 bg-muted">
            <CardContent className="pt-6">
              <h4 className="font-semibold text-foreground mb-2">Patents & IP</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Protected CGM technology and proprietary algorithms that competitors cannot easily replicate
              </p>
            </CardContent>
          </Card>

          <Card className="animate-fade-up stagger-2 bg-muted">
            <CardContent className="pt-6">
              <h4 className="font-semibold text-foreground mb-2">Brand Reputation</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Trusted name among physicians and patients built over 25+ years of innovation
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-5">
          <Card className="animate-fade-up stagger-3">
            <CardContent className="pt-6">
              <h4 className="font-semibold text-foreground mb-2">Manufacturing Infrastructure</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                3 large facilities including international presence, enabling high-volume precision production
              </p>
            </CardContent>
          </Card>

          <Card className="animate-fade-up stagger-4">
            <CardContent className="pt-6">
              <h4 className="font-semibold text-foreground mb-2">Human Capital</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                10,000+ employees with specialized expertise in biosensors, regulatory affairs, and clinical development
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
