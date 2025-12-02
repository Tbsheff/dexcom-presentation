"use client"

import { fiveForcesDetailed } from "@/lib/presentation-data"
import { Package } from "lucide-react"

export function FiveForcesSupplierSlide() {
  const supplier = fiveForcesDetailed.supplierPower

  const getRatingColor = (rating: string) => {
    if (rating === "HIGH") return "bg-red-500"
    if (rating === "MODERATE") return "bg-amber-500"
    return "bg-green-500"
  }

  return (
    <div className="p-10 pb-24 max-w-6xl mx-auto">
      <div className="mb-6">
        <span className="text-[11px] uppercase tracking-[0.3em] text-primary font-medium">
          Section 02 · Porter's Five Forces
        </span>
        <h2 className="text-5xl font-bold mt-2 tracking-tight text-foreground">Supplier Power</h2>
        <p className="text-muted-foreground mt-2">Bargaining power of component and material suppliers</p>
      </div>

      <div className="flex gap-4">
        <div className="flex-1 space-y-3">
          {supplier.points.map((point, idx) => (
            <div
              key={idx}
              className={`animate-fade-up stagger-${idx + 1} p-4 rounded-lg bg-card border-l-4 border-l-amber-500`}
            >
              <p className="text-foreground leading-relaxed">{point}</p>
            </div>
          ))}
        </div>

        <div className="w-80 space-y-4">
          <div className="animate-fade-up stagger-1 p-4 rounded-lg bg-card border border-border sticky top-16">
            <div className="flex items-center gap-3 mb-4">
              <Package className="w-8 h-8 text-amber-500" />
              <div>
                <h3 className="text-sm uppercase tracking-wide text-muted-foreground">Force Rating</h3>
                <div className="flex items-center gap-2 mt-1">
                  <span className={`px-3 py-1 rounded-full text-white text-sm font-bold ${getRatingColor(supplier.rating)}`}>
                    {supplier.rating}
                  </span>
                </div>
              </div>
            </div>
            <div className="h-px bg-border my-4" />
            <p className="text-sm text-muted-foreground leading-relaxed">
              Suppliers have <span className="font-semibold text-foreground">moderate power</span> due to specialized component
              requirements, but this is balanced by Dexcom's scale and ability to develop in-house capabilities for critical
              technologies.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
