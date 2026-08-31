"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin } from "lucide-react"
import { getAllProjects } from "@/lib/data"

export default function ProjectsPage() {
  const allProjects = getAllProjects()
  const [projects, setProjects] = useState(allProjects)
  const [activeFilter, setActiveFilter] = useState("All")

  const categories = ["All", "Commercial", "Residential", "Infrastructure", "Healthcare", "Industrial"]

  const filterProjects = (category: string) => {
    setActiveFilter(category)
    if (category === "All") {
      setProjects(allProjects)
    } else {
      setProjects(allProjects.filter((project) => project.category === category))
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[40vh]">
        <Image
          src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1920&auto=format&fit=crop"
          alt="Projects"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Projects</h1>
          <p className="text-xl text-white/90 max-w-3xl">Explore our portfolio of completed construction projects</p>
        </div>
      </section>

      {/* Project Filters */}
      <section className="py-8 px-4 md:px-6 bg-gray-100">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeFilter === category ? "default" : "outline"}
                className={activeFilter === category ? "bg-yellow-500 text-black" : "bg-white"}
                onClick={() => filterProjects(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 px-4 md:px-6">
        <div className="container mx-auto">
          {projects.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium mb-4">No projects found in this category</h3>
              <Button onClick={() => filterProjects("All")}>View All Projects</Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <div
                  key={project.id}
                  id={`project-${project.id}`}
                  className="group overflow-hidden rounded-lg shadow-md bg-white"
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600">
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {project.location}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {project.year}
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <Button asChild variant="outline" className="w-full">
                      <Link href={`/projects/${project.id}`}>View Project Details</Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 md:px-6 bg-gray-900 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Have a Project in Mind?</h2>
          <p className="text-white/80 text-xl max-w-2xl mx-auto mb-8">
            Let's discuss how IMF Construction can bring your vision to life with our expertise and dedication to
            quality.
          </p>
          <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black">
            <Link href="/contact">Contact Our Team</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
