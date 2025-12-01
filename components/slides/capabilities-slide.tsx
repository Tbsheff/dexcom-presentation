import { SlideHeader, SlideTitle, Card, CardContent } from "@/components/ui"

export function CapabilitiesSlide() {
  return (
    <div className="p-8 lg:p-10 max-w-7xl mx-auto h-full flex flex-col justify-center">
      <div className="mb-12">
        <SlideHeader>Core Competencies</SlideHeader>
        <SlideTitle>Capabilities</SlideTitle>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="space-y-5">
          <Card className="animate-fade-up stagger-1 bg-muted">
            <CardContent className="pt-6">
              <h4 className="font-semibold text-foreground mb-2">Rapid R&D Innovation</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                G6 (2018) → G7 (2023) → G7 15-Day (2025). Newest sensor is 50% longer-lasting and 60% smaller
              </p>
            </CardContent>
          </Card>

          <Card className="animate-fade-up stagger-2 bg-muted">
            <CardContent className="pt-6">
              <h4 className="font-semibold text-foreground mb-2">Strategic Partnerships</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Deep connections with insulin pump manufacturers (Tandem, Omnipod) enabling integrated care solutions
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-5">
          <Card className="animate-fade-up stagger-3">
            <CardContent className="pt-6">
              <h4 className="font-semibold text-foreground mb-2">Manufacturing Excellence</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                High-volume, precision manufacturing with effective B2B and expanding D2C distribution
              </p>
            </CardContent>
          </Card>

          <Card className="animate-fade-up stagger-4">
            <CardContent className="pt-6">
              <h4 className="font-semibold text-foreground mb-2">Regulatory Navigation</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Proven expertise in FDA approvals and global regulatory requirements
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
