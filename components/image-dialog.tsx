"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Download, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { useLanguage } from "@/contexts/language-context"

interface ImageDialogProps {
  isOpen: boolean
  onClose: () => void
  images: string[]
  initialIndex: number
  projectTitle: string
  projectUrl?: string
}

export function ImageDialog({ isOpen, onClose, images, initialIndex, projectTitle, projectUrl }: ImageDialogProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex)
  const [isLoading, setIsLoading] = useState(true)
  const { t } = useLanguage()

  useEffect(() => {
    setCurrentIndex(initialIndex)
    setIsLoading(true)
  }, [initialIndex, isOpen])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return

      switch (e.key) {
        case "ArrowLeft":
          e.preventDefault()
          goToPrevious()
          break
        case "ArrowRight":
          e.preventDefault()
          goToNext()
          break
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isOpen, currentIndex])

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
    setIsLoading(true)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
    setIsLoading(true)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsLoading(true)
  }

  const handleDownload = () => {
    const link = document.createElement("a")
    link.href = images[currentIndex]
    link.download = `${projectTitle}-image-${currentIndex + 1}.jpg`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const imageCounterText = t.modal.imageCounter
    .replace("{current}", (currentIndex + 1).toString())
    .replace("{total}", images.length.toString())

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-full max-w-[100vw] h-[100dvh] p-0 sm:max-w-7xl sm:h-[95vh] bg-background border-0 shadow-2xl flex flex-col">
        {/* HEADER */}
        <DialogHeader className="p-3 sm:p-4 pb-2 border-b border-border">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            {/* Title & Counter */}
            <div className="flex items-center justify-between sm:justify-start gap-4">
              <DialogTitle className="text-base sm:text-lg font-semibold text-foreground">
                {projectTitle}
              </DialogTitle>
              <span className="text-sm text-muted-foreground">{imageCounterText}</span>
            </div>

            {/* Buttons */}
            <div className="flex items-center justify-end gap-1 sm:gap-2">
              {images.length > 1 && (
                <>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={goToPrevious}
                    className="hover:bg-muted"
                    aria-label={t.modal.previousImage}
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={goToNext}
                    className="hover:bg-muted"
                    aria-label={t.modal.nextImage}
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </>
              )}
              <Button
                variant="ghost"
                size="icon"
                onClick={handleDownload}
                className="hover:bg-muted"
                aria-label={t.modal.downloadAlt}
              >
                <Download className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={onClose}
                className="hover:bg-muted"
                aria-label={t.modal.closeAlt}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </DialogHeader>

        {/* IMAGE CONTAINER */}
        <div className="relative flex-1 p-2 sm:p-4">
          <div className="relative w-full h-full aspect-[16/9] sm:aspect-auto min-h-[40vh] bg-muted/20 rounded-lg overflow-hidden">
            <Image
              src={images[currentIndex] || "/placeholder.svg"}
              alt={`${projectTitle} - ${imageCounterText}`}
              fill
              className="object-contain"
              onLoad={() => setIsLoading(false)}
              priority
            />
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-muted/50">
                <div className="w-8 h-8 border-2 border-muted-foreground/30 border-t-foreground rounded-full animate-spin" />
              </div>
            )}
          </div>
        </div>

        {/* THUMBNAIL */}
        {images.length > 1 && (
          <div className="p-2 sm:p-4 pt-0 border-t border-border">
            <div className="flex gap-2 overflow-x-auto max-w-full pb-2 scrollbar-thin scrollbar-thumb-muted-foreground/30">
              {images.map((image, index) => (
                <button
                  key={index}
                  className={`relative flex-shrink-0 w-16 h-12 sm:w-20 sm:h-14 rounded-md overflow-hidden transition-all duration-300 border-2 ${index === currentIndex
                    ? "border-foreground scale-105 shadow-md"
                    : "border-transparent opacity-70 hover:opacity-100 hover:border-muted-foreground/50"
                    }`}
                  onClick={() => goToSlide(index)}
                  aria-label={`${t.modal.imageCounter
                    .replace("{current}", (index + 1).toString())
                    .replace("{total}", images.length.toString())}`}
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`Thumbnail ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>

  )
}
