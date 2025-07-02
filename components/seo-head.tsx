import Head from "next/head"
import { generatePersonStructuredData, generateWebsiteStructuredData } from "@/lib/structured-data"

interface SEOHeadProps {
  title?: string
  description?: string
  canonical?: string
  noindex?: boolean
}

export function SEOHead({
  title = "Kholil Abdi Prasetiyo - Portfolio",
  //description = "Experienced web developer specializing in modern UI development with React, Next.js, and TypeScript.",
  canonical,
  noindex = false,
}: SEOHeadProps) {
  const personData = generatePersonStructuredData()
  const websiteData = generateWebsiteStructuredData()

  return (
    <Head>
      {/* Basic Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      <meta name="color-scheme" content="dark light" />

      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={canonical} />}

      {/* Robots */}
      {noindex && <meta name="robots" content="noindex,nofollow" />}

      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteData),
        }}
      />
    </Head>
  )
}
