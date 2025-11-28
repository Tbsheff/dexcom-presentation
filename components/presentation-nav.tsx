"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import { slides } from "@/lib/presentation-data"

interface PresentationNavProps {
  currentSlide: number
  goToSlide: (index: number) => void
  nextSlide: () => void
  prevSlide: () => void
}

export function PresentationNav({ currentSlide, goToSlide, nextSlide, prevSlide }: PresentationNavProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent">
      <div className="max-w-6xl mx-auto h-full flex items-center justify-between px-8">
        <div className="flex items-center gap-4">
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="p-2 rounded-lg bg-secondary/50 hover:bg-secondary disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className="p-2 rounded-lg bg-secondary/50 hover:bg-secondary disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-xs text-muted-foreground font-mono">
            {String(currentSlide + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
          </span>
          <div className="flex gap-1">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                className={`w-1.5 h-1.5 rounded-full transition-all ${
                  idx === currentSlide ? "bg-primary w-4" : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="text-xs text-muted-foreground">{slides[currentSlide].title}</div>
      </div>
    </div>
  )
}
