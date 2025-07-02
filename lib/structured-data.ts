export function generatePersonStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Kholil Abdi Prasetiyo",
    jobTitle: "Web Developer",
    description: "Experienced web developer specializing in modern UI development with React, Next.js, and TypeScript.",
    url: "https://kholilapras.vercel.app",
    //image: "https://kholil-portfolio.vercel.app/profile.jpg",
    sameAs: ["https://github.com/kholilapras", "https://linkedin.com/in/kholilapras", "mailto:kholilapras@gmail.com"],
    knowsAbout: [
      "Web Development",
      "Frontend Development",
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
      "Responsive Design",
      "UI/UX Design",
    ],
    alumniOf: {
      "@type": "Organization",
      name: "Telkom University",
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "ID",
      addressRegion: "Your Region",
    },
  }
}

export function generateWebsiteStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Kholil Abdi Prasetiyo Portfolio",
    description: "Professional portfolio showcasing web development projects and skills",
    url: "https://kholil-portfolio.vercel.app",
    author: {
      "@type": "Person",
      name: "Kholil Abdi Prasetiyo",
    },
    inLanguage: ["en", "id"],
    potentialAction: {
      "@type": "SearchAction",
      target: "https://kholil-portfolio.vercel.app/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  }
}

export function generateProjectStructuredData(project: any) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.description,
    creator: {
      "@type": "Person",
      name: "Kholil Abdi Prasetiyo",
    },
    dateCreated: "2024",
    programmingLanguage: project.technologies,
    url: project.viewLiveUrl,
    codeRepository: project.viewCodeUrl,
    image: project.images[0],
  }
}
