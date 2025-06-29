"use client"

import { ProjectCard } from "./project-card"
import { useLanguage } from "@/contexts/language-context"
import { generateProjectStructuredData } from "@/lib/structured-data"

export function Projects() {
  const { t, projects } = useLanguage()

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground animate-fade-in">
          {t.projectsTitle}
        </h2>
        <div className={`projects-grid ${projects.length % 2 === 0 ? "equal-heights" : ""}`}>
          {projects.map((project, index) => (
            <div key={index} className="animate-slide-up" style={{ animationDelay: `${index * 150}ms` }}>
              <ProjectCard project={project} />

              {/* Structured Data for each project */}
              <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify(generateProjectStructuredData(project)),
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
