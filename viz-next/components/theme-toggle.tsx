"use client"

import { useEffect, useState } from "react"
import { Sun, Moon } from "lucide-react"

// Minimalist icon-only theme toggle — shared visual language with datasources-ui.
export function ThemeToggle() {
  const [dark, setDark] = useState(true)

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"))
  }, [])

  function toggle() {
    const next = document.documentElement.classList.contains("dark") ? "light" : "dark"
    document.documentElement.classList.remove("light", "dark")
    document.documentElement.classList.add(next)
    try {
      localStorage.setItem("tbm-theme", next)
    } catch {}
    setDark(next === "dark")
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle light / dark theme"
      title="Toggle theme"
      className="flex size-7 items-center justify-center text-muted-foreground transition-colors hover:text-[var(--signal)]"
    >
      {dark ? <Sun className="size-4" /> : <Moon className="size-4" />}
    </button>
  )
}
