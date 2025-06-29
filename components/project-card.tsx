"use client"

import { useState } from "react"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ImageCarousel } from "./image-carousel"
import { ImageDialog } from "./image-dialog"
import type { ProjectData } from "@/config/project-data"
import { useLanguage } from "@/contexts/language-context"

interface ProjectCardProps {
  project: ProjectData
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { t } = useLanguage()
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index)
    setIsDialogOpen(true)
  }

  const closeDialog = () => {
    setIsDialogOpen(false)
  }

  return (
    <>
      <Card className="overflow-hidden bg-card group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg h-full flex flex-col">
        <ImageCarousel
          images={project.images}
          alt={project.title}
          autoPlay={true}
          autoPlayInterval={4000}
          onImageClick={handleImageClick}
        />

        <CardContent className="p-6 flex flex-col flex-grow">
          {/* Category Badge */}
          <div className="mb-3">
            <Badge
              variant="secondary"
              className="text-xs font-medium px-3 py-1 bg-muted text-muted-foreground"
            >
              {project.category}
            </Badge>
          </div>

          <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-muted-foreground transition-colors duration-200">
            {project.title}
          </h3>
          <p className="text-muted-foreground mb-4 text-sm leading-relaxed flex-grow">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech, index) => (
              <Badge
                key={tech}
                variant="secondary"
                className="text-xs hover:bg-foreground hover:text-background transition-colors duration-200 border-0 font-medium"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {tech}
              </Badge>
            ))}
          </div>
          <div className="flex gap-2 mt-auto">
            {project.viewCodeUrl && (
              <Button
                variant="default"
                size="sm"
                asChild
                className="hover:scale-105 transition-transform duration-200 border-0 bg-foreground text-background hover:bg-muted-foreground font-medium"
              >
                <a href={project.viewCodeUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-1" />
                  {t.buttons.viewCode}
                </a>
              </Button>
            )}
            {project.viewLiveUrl && (
              <Button
                variant="secondary"
                size="sm"
                asChild
                className="hover:scale-105 transition-transform duration-200 border-0 bg-foreground text-background hover:bg-muted-foreground font-medium"
              >
                <a href={project.viewLiveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-1" />
                  {t.buttons.viewLive}
                </a>
              </Button>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Image Dialog */}
      <ImageDialog
        isOpen={isDialogOpen}
        onClose={closeDialog}
        images={project.images}
        initialIndex={selectedImageIndex}
        projectTitle={project.title}
        projectUrl={project.viewLiveUrl}
      />
    </>
  )
}
