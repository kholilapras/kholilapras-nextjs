import type { Metadata } from "next"

interface SEOConfig {
  title: string
  description: string
  keywords?: string[]
  author?: string
  url?: string
  image?: string
  type?: string
  locale?: string
  alternateLocales?: string[]
}

export function generateSEO({
  title,
  description,
  keywords = [],
  author = "Kholil Abdi Prasetiyo",
  url = "https://kholil-portfolio.vercel.app",
  image = "/og-image.jpg",
  type = "website",
  locale = "en",
  alternateLocales = ["id"],
}: SEOConfig): Metadata {
  const fullTitle = title.includes("Kholil") ? title : `${title} | Kholil Abdi Prasetiyo`

  return {
    title: fullTitle,
    description,
    keywords: keywords.join(", "),
    authors: [{ name: author }],
    creator: author,
    publisher: author,

    // Open Graph
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: "Kholil Abdi Prasetiyo - Portfolio",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale,
      type: type as any,
    },

    // Twitter
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
      creator: "@kholil_dev",
    },

    // Additional meta tags
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },

    // Verification
    verification: {
      google: "your-google-verification-code",
      yandex: "your-yandex-verification-code",
      yahoo: "your-yahoo-verification-code",
    },

    // Alternate languages
    alternates: {
      canonical: url,
      languages: {
        en: `${url}/en`,
        id: `${url}/id`,
      },
    },
  }
}

export const defaultSEO = {
  title: "Kholil Abdi Prasetiyo - Web Developer Portfolio",
  description:
    "Experienced web developer specializing in modern UI development with React, Next.js, and TypeScript. Building responsive and user-friendly web applications.",
  keywords: [
    "web developer",
    "frontend developer",
    "react developer",
    "nextjs developer",
    "typescript developer",
    "ui developer",
    "portfolio",
    "kholil abdi prasetiyo",
    "javascript developer",
    "responsive design",
    "modern web development",
  ],
}
