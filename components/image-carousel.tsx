"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Expand } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ImageCarouselProps {
  images: string[]
  alt: string
  autoPlay?: boolean
  autoPlayInterval?: number
  onImageClick?: (index: number) => void
}

export function ImageCarousel({
  images,
  alt,
  autoPlay = true,
  autoPlayInterval = 4000,
  onImageClick,
}: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  // Auto-play functionality
  useEffect(() => {
    if (!autoPlay || isHovered || images.length <= 1) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
    }, autoPlayInterval)

    return () => clearInterval(interval)
  }, [autoPlay, autoPlayInterval, isHovered, images.length])

  const goToPrevious = (e: React.MouseEvent) => {
    e.stopPropagation()
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1)
  }

  const goToNext = (e: React.MouseEvent) => {
    e.stopPropagation()
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1)
  }

  const goToSlide = (index: number, e: React.MouseEvent) => {
    e.stopPropagation()
    setCurrentIndex(index)
  }

  const handleImageClick = () => {
    if (onImageClick) {
      onImageClick(currentIndex)
    }
  }

  if (images.length === 0) {
    return (
      <div className="aspect-video bg-muted flex items-center justify-center">
        <span className="text-muted-foreground">No images available</span>
      </div>
    )
  }

  if (images.length === 1) {
    return (
      <div className="aspect-video relative overflow-hidden cursor-pointer group" onClick={handleImageClick}>
        <Image
          src={images[0] || "/placeholder.svg"}
          alt={alt}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
          <Button
            variant="secondary"
            size="icon"
            className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-background/80 hover:bg-background/90 border-0"
          >
            <Expand className="h-4 w-4" />
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div
      className="aspect-video relative overflow-hidden group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleImageClick}
    >
      {/* Main Image */}
      <div className="relative w-full h-full">
        <Image
          src={images[currentIndex] || "/placeholder.svg"}
          alt={`${alt} - Image ${currentIndex + 1}`}
          fill
          className="object-cover transition-all duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />

        {/* Expand Icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <Button
            variant="secondary"
            size="icon"
            className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-background/80 hover:bg-background/90 border-0"
          >
            <Expand className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Navigation Arrows */}
      <Button
        variant="secondary"
        size="icon"
        className="absolute left-2 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-background/80 hover:bg-background/90 border-0 w-8 h-8"
        onClick={goToPrevious}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>

      <Button
        variant="secondary"
        size="icon"
        className="absolute right-2 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-background/80 hover:bg-background/90 border-0 w-8 h-8"
        onClick={goToNext}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>

      {/* Dot Indicators */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-foreground scale-125" : "bg-foreground/50 hover:bg-foreground/75"
            }`}
            onClick={(e) => goToSlide(index, e)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Image Counter */}
      <div className="absolute top-2 right-2 bg-background/80 text-foreground px-2 py-1 rounded text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {currentIndex + 1} / {images.length}
      </div>

      {/* Auto-play Indicator */}
      {autoPlay && !isHovered && (
        <div className="absolute top-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-6 h-1 bg-background/30 rounded-full overflow-hidden">
            <div
              className="h-full bg-foreground/60 rounded-full transition-all duration-100"
              style={{
                width: `${((currentIndex + 1) / images.length) * 100}%`,
              }}
            />
          </div>
        </div>
      )}
    </div>
  )
}
