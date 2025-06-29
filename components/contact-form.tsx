"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Mail, Github, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/contexts/language-context"

interface AnimatedInputProps {
  name: string
  type?: string
  placeholder: string
  required?: boolean
  rows?: number
  isTextarea?: boolean
}

function AnimatedInput({
  name,
  type = "text",
  placeholder,
  required = false,
  rows,
  isTextarea = false,
}: AnimatedInputProps) {
  const [currentPlaceholder, setCurrentPlaceholder] = useState("")
  const [isTyping, setIsTyping] = useState(true)
  const [inputValue, setInputValue] = useState("")
  const [isFocused, setIsFocused] = useState(false)
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null)

  useEffect(() => {
    let timeout: NodeJS.Timeout
    let currentIndex = 0

    const typeText = () => {
      // Don't animate if input has value or is focused
      if (inputValue || isFocused) {
        setCurrentPlaceholder("")
        setIsTyping(false)
        return
      }

      if (currentIndex < placeholder.length) {
        setCurrentPlaceholder(placeholder.slice(0, currentIndex + 1))
        currentIndex++
        timeout = setTimeout(typeText, 100)
      } else {
        setIsTyping(false)
        setTimeout(() => {
          if (!inputValue && !isFocused) {
            currentIndex = 0
            setCurrentPlaceholder("")
            setIsTyping(true)
            typeText()
          }
        }, 2000)
      }
    }

    typeText()

    return () => clearTimeout(timeout)
  }, [placeholder, inputValue, isFocused])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInputValue(e.target.value)
  }

  const handleFocus = () => {
    setIsFocused(true)
    setCurrentPlaceholder("")
    setIsTyping(false)
  }

  const handleBlur = () => {
    setIsFocused(false)
  }

  const baseClasses =
    "bg-input transition-all duration-200 focus:scale-[1.02] hover:shadow-sm border-0 focus:ring-0 focus:ring-offset-0 focus:outline-none focus:shadow-lg text-base relative"

  const showAnimatedPlaceholder = !inputValue && !isFocused && currentPlaceholder

  if (isTextarea) {
    return (
      <div className="relative">
        <textarea
          ref={inputRef as React.RefObject<HTMLTextAreaElement>}
          name={name}
          rows={rows}
          required={required}
          value={inputValue}
          onChange={handleInputChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className={`${baseClasses} resize-none w-full p-3`}
          placeholder={!showAnimatedPlaceholder ? placeholder : ""}
        />
        {showAnimatedPlaceholder && (
          <div className="absolute top-3 left-3 pointer-events-none text-muted-foreground">
            {currentPlaceholder}
            {isTyping && <span className="animate-pulse">|</span>}
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="relative">
      <input
        ref={inputRef as React.RefObject<HTMLInputElement>}
        name={name}
        type={type}
        required={required}
        value={inputValue}
        onChange={handleInputChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className={`${baseClasses} w-full py-3 px-3`}
        placeholder={!showAnimatedPlaceholder ? placeholder : ""}
      />
      {showAnimatedPlaceholder && (
        <div className="absolute top-1/2 left-3 transform -translate-y-1/2 pointer-events-none text-muted-foreground">
          {currentPlaceholder}
          {isTyping && <span className="animate-pulse">|</span>}
        </div>
      )}
    </div>
  )
}

export function ContactForm() {
  const { t, language } = useLanguage()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "")

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      })

      if (response.ok) {
        setIsSubmitted(true)
        ;(e.target as HTMLFormElement).reset()
      }
    } catch (error) {
      console.error("Error submitting form:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-20 px-4">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground animate-fade-in">
          {t.contactTitle}
        </h2>

        <Card className="mb-8 animate-slide-up hover:shadow-2xl transition-shadow duration-300 border-0 shadow-xl bg-card">
          <CardContent className="p-8">
            {isSubmitted ? (
              <div className="text-center py-8 animate-fade-in">
                <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-foreground font-medium">
                  {language === "en" ? "Message sent successfully!" : "Pesan berhasil dikirim!"}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <AnimatedInput name="name" placeholder={t.contact.namePlaceholder} required />
                <AnimatedInput name="email" type="email" placeholder={t.contact.emailPlaceholder} required />
                <AnimatedInput name="message" placeholder={t.contact.messagePlaceholder} rows={6} required isTextarea />
                <Button
                  type="submit"
                  className="w-full hover:scale-[1.02] transition-transform duration-200 bg-foreground text-background hover:bg-muted-foreground border-0 font-bold text-base py-4"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-background/30 border-t-background rounded-full animate-spin" />
                      {language === "en" ? "Sending..." : "Mengirim..."}
                    </div>
                  ) : (
                    t.contact.submitButton
                  )}
                </Button>
              </form>
            )}
          </CardContent>
        </Card>

        <div className="flex justify-center gap-4 mb-8 animate-slide-up-delay">
          {[
            { href: "mailto:kholil@example.com", icon: Mail, label: "Email" },
            { href: "https://github.com/kholil", icon: Github, label: "GitHub" },
            { href: "https://linkedin.com/in/kholil", icon: Linkedin, label: "LinkedIn" },
          ].map(({ href, icon: Icon, label }, index) => (
            <Button
              key={label}
              variant="default"
              size="icon"
              asChild
              className="hover:scale-110 hover:rotate-6 transition-all duration-200 border-0 bg-foreground text-background hover:bg-muted-foreground"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <a
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={label}
              >
                <Icon className="h-4 w-4" />
              </a>
            </Button>
          ))}
        </div>

        <footer className="text-center text-sm text-muted-foreground animate-fade-in-delay">
          © 2025 | Kholil Abdi Prasetiyo
        </footer>
      </div>
    </section>
  )
}
