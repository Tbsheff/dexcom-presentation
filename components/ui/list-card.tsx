import * as React from "react"
import { cn } from "@/lib/utils"

interface ListCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  items: string[]
  accentColor?: string
}

function ListCard({
  title,
  items,
  accentColor,
  className,
  ...props
}: ListCardProps) {
  return (
    <div
      className={cn(
        "p-6 rounded-lg bg-card border border-border shadow-sm",
        className
      )}
      {...props}
    >
      <h3 className="font-semibold text-foreground mb-4">{title}</h3>
      <ul className="space-y-2">
        {items.map((item, idx) => (
          <li
            key={idx}
            className="text-sm text-muted-foreground flex items-start gap-3"
          >
            <span
              className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 bg-muted-foreground/50"
              style={accentColor ? { backgroundColor: accentColor } : undefined}
            />
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

export { ListCard }
