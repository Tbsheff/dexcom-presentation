import * as React from "react"
import { cn } from "@/lib/utils"

interface StatCardProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string
  label: string
  subtext?: string
  valueColor?: string
}

function StatCard({
  value,
  label,
  subtext,
  valueColor,
  className,
  ...props
}: StatCardProps) {
  return (
    <div
      className={cn(
        "p-5 rounded-lg bg-card border border-border shadow-sm text-center",
        className
      )}
      {...props}
    >
      <p
        className="text-2xl font-semibold"
        style={valueColor ? { color: valueColor } : undefined}
      >
        {value}
      </p>
      <p className="text-sm text-muted-foreground mt-1">{label}</p>
      {subtext && (
        <p className="text-xs text-muted-foreground/70 mt-0.5">{subtext}</p>
      )}
    </div>
  )
}

export { StatCard }
