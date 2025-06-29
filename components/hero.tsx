"use client"

import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"

export function Hero() {
  const { t } = useLanguage()

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
      <div className="mb-8 animate-fade-in">
        <div className="relative group mb-6">
          <Image
            //src="/placeholder.svg?height=200&width=200&text=KAP&bg=374151&color=ffffff"
            src="/image/profile.jpg"
            alt={t.name}
            width={200}
            height={200}
            className="rounded-full mx-auto transition-transform duration-300 hover:scale-105 shadow-xl"
            priority
          />
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-muted/20 to-muted-foreground/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <h1 className="text-4xl md:text-5xl font-black mb-4 text-foreground animate-slide-up">{t.name}</h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-slide-up-delay font-medium">
          {t.description}
        </p>
      </div>
    </section>
  )
}
