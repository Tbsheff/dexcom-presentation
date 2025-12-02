import * as React from "react"
import { cn } from "@/lib/utils"

interface SlideHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

function SlideHeader({ className, children, ...props }: SlideHeaderProps) {
  return (
    <div className={cn("mb-8", className)} {...props}>
      {children}
    </div>
  )
}

interface SlideLabelProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode
}

function SlideLabel({ className, children, ...props }: SlideLabelProps) {
  return (
    <p
      className={cn("text-xl text-muted-foreground font-medium uppercase tracking-wider", className)}
      {...props}
    >
      {children}
    </p>
  )
}

interface SlideTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode
}

function SlideTitle({ className, children, ...props }: SlideTitleProps) {
  return (
    <h2
      className={cn(
        "text-6xl font-bold tracking-tight text-foreground mt-2",
        className
      )}
      {...props}
    >
      {children}
    </h2>
  )
}

interface SlideSubtitleProps
  extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode
}

function SlideSubtitle({ className, children, ...props }: SlideSubtitleProps) {
  return (
    <p
      className={cn("text-2xl text-muted-foreground mt-4", className)}
      {...props}
    >
      {children}
    </p>
  )
}

export { SlideHeader, SlideLabel, SlideTitle, SlideSubtitle }
