"use client"

import { SUBSTRATES } from "@/lib/constants"

export function Legend() {
  return (
    <div className="pointer-events-none absolute bottom-3 right-3 z-10 select-none rounded-lg border border-border bg-card/90 p-3 text-[11px] backdrop-blur-sm">
      <p className="mb-1.5 font-semibold uppercase tracking-wider text-muted-foreground">
        Substrate
      </p>
      <div className="mb-3 grid gap-1">
        {SUBSTRATES.map((s) => (
          <div key={s.id} className="flex items-center gap-2">
            <span
              className="size-2.5 rounded-[3px]"
              style={{ backgroundColor: s.color }}
            />
            <span className="text-foreground/80">{s.label}</span>
          </div>
        ))}
      </div>
      <p className="mb-1.5 font-semibold uppercase tracking-wider text-muted-foreground">
        Shape
      </p>
      <div className="flex flex-col gap-1 text-foreground/80">
        <div className="flex items-center gap-2">
          <span className="size-2.5 rotate-45 bg-muted-foreground" />
          <span>primitive</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="size-2.5 rounded-full bg-muted-foreground" />
          <span>company</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="size-2.5 bg-muted-foreground" />
          <span>idea</span>
        </div>
      </div>
    </div>
  )
}
