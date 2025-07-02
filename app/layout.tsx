import type React from "react"
import type { Metadata } from "next"
import { Plus_Jakarta_Sans } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/contexts/theme-context"
import { LanguageProvider } from "@/contexts/language-context"
import { generateSEO, defaultSEO } from "@/lib/seo"

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
})

export const metadata: Metadata = generateSEO({
  title: defaultSEO.title,
  description: defaultSEO.description,
  keywords: defaultSEO.keywords,
  url: "https://kholilapras.vercel.app",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preload critical resources */}
        <link rel="preload" href="/placeholder.svg?height=200&width=200&text=KAP&bg=374151&color=ffffff" as="image" />

        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//api.web3forms.com" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Kholil Abdi Prasetiyo",
              //jobTitle: "",
              description:
                "Experienced web developer specializing in modern UI development with React, Next.js, and TypeScript.",
              url: "https://kholil-portfolio.vercel.app",
              image: "https://kholil-portfolio.vercel.app/profile.jpg",
              sameAs: ["https://github.com/kholilapras", "https://linkedin.com/in/kholilapras", "mailto:kholilapras@gmail.com"],
              knowsAbout: [
                "Web Development",
                "Frontend Development",
                "HTML",
                "CSS",
                "Responsive Design",
                "UI/UX Design",
                "React",
                "Next.js",
                "TypeScript",
                "JavaScript",
                "PHP",
                "Laravel",
              ],
            }),
          }}
        />
      </head>
      <body className={`${plusJakartaSans.variable} font-sans`}>
        <ThemeProvider defaultTheme="dark">
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
