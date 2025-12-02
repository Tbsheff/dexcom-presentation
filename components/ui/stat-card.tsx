import * as React from "react"
import { cn } from "@/lib/utils"

interface StatCardProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string
  label: string
  subtext?: string
  valueColor?: string
  size?: "default" | "large"
}

function StatCard({
  value,
  label,
  subtext,
  valueColor,
  size = "default",
  className,
  ...props
}: StatCardProps) {
  return (
    <div
      className={cn(
        "p-6 rounded-lg bg-card border border-border shadow-sm text-center",
        className
      )}
      {...props}
    >
      <p
        className={cn(
          "font-bold",
          size === "large" ? "text-5xl" : "text-4xl"
        )}
        style={valueColor ? { color: valueColor } : undefined}
      >
        {value}
      </p>
      <p className={cn("text-muted-foreground mt-2", size === "large" ? "text-xl" : "text-lg")}>{label}</p>
      {subtext && (
        <p className="text-base text-muted-foreground/70 mt-1">{subtext}</p>
      )}
    </div>
  )
}

export { StatCard }
