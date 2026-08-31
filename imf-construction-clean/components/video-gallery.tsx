"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react"
import { Button } from "@/components/ui/button"

const constructionImages = [
  "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1920&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1470&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1470&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1577760258779-e787a1733016?q=80&w=1470&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?q=80&w=1470&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=1473&auto=format&fit=crop",
]

export default function VideoGallery() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [progress, setProgress] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % constructionImages.length)
    setProgress(0)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + constructionImages.length) % constructionImages.length)
    setProgress(0)
  }

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  useEffect(() => {
    let interval: NodeJS.Timeout

    if (isPlaying) {
      interval = setInterval(() => {
        setProgress((prevProgress) => {
          if (prevProgress >= 100) {
            nextSlide()
            return 0
          }
          return prevProgress + 0.5
        })
      }, 50)
    }

    return () => clearInterval(interval)
  }, [isPlaying, currentIndex])

  return (
    <div className="relative w-full h-[80vh] overflow-hidden">
      {constructionImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={image || "/placeholder.svg"}
            alt={`Construction project ${index + 1}`}
            fill
            className="object-cover brightness-50"
          />
        </div>
      ))}

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 md:px-6">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">IFM 06 Construction</h1>
        <p className="text-xl md:text-2xl text-white/90 max-w-3xl mb-8">
          Building the future with quality, innovation, and excellence
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black">
            <a href="/projects">Our Projects</a>
          </Button>
          <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
            <a href="/contact">Contact Us</a>
          </Button>
        </div>
      </div>

      {/* Video controls */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center items-center gap-4 px-4">
        <Button
          variant="outline"
          size="icon"
          className="bg-black/30 border-white text-white hover:bg-black/50"
          onClick={prevSlide}
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="bg-black/30 border-white text-white hover:bg-black/50"
          onClick={togglePlayPause}
        >
          {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="bg-black/30 border-white text-white hover:bg-black/50"
          onClick={nextSlide}
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-800">
        <div
          className="h-full bg-yellow-500 transition-all duration-50 ease-linear"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  )
}
