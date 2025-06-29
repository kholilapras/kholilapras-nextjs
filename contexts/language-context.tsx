"use client"

import type React from "react"

import { createContext, useContext, useState, useEffect } from "react"
import { content, type ContentData } from "@/config/content-data"
import { projects, type ProjectData } from "@/config/project-data"

type Language = "en" | "id"

type LanguageContextType = {
  language: Language
  setLanguage: (lang: Language) => void
  t: ContentData
  projects: ProjectData[]
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  useEffect(() => {
    const storedLanguage = localStorage.getItem("portfolio-language") as Language
    if (storedLanguage) {
      setLanguage(storedLanguage)
    }
  }, [])

  const handleSetLanguage = (lang: Language) => {
    localStorage.setItem("portfolio-language", lang)
    setLanguage(lang)
  }

  const value = {
    language,
    setLanguage: handleSetLanguage,
    t: content[language],
    projects: projects[language],
  }

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
