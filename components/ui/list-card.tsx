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
        "p-8 rounded-lg bg-card border border-border shadow-sm",
        className
      )}
      {...props}
    >
      <h3 className="font-bold text-foreground text-2xl mb-6">{title}</h3>
      <ul className="space-y-4">
        {items.map((item, idx) => (
          <li
            key={idx}
            className="text-xl text-muted-foreground flex items-start gap-3"
          >
            <span
              className="w-2.5 h-2.5 rounded-full mt-2.5 shrink-0 bg-muted-foreground/50"
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
