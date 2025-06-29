"use client"

import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/contexts/theme-context"
import { useLanguage } from "@/contexts/language-context"

export function Header() {
  const { theme, setTheme } = useTheme()
  const { language, setLanguage } = useLanguage()

  return (
    <header className="fixed top-4 right-4 z-50 flex gap-2">
      <Button
        variant="default"
        size="sm"
        onClick={() => setLanguage(language === "en" ? "id" : "en")}
        className="bg-foreground text-background hover:scale-105 transition-all duration-200 hover:shadow-lg border-0 hover:bg-muted-foreground font-bold"
      >
        {language.toUpperCase()}
      </Button>
      <Button
        variant="default"
        size="sm"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="bg-foreground text-background hover:shadow-lg border-0 hover:bg-muted-foreground transition-colors duration-200"
      >
        {theme === "light" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
      </Button>
    </header>
  )
}
