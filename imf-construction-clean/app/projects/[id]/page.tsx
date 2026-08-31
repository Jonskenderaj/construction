import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, ArrowLeft, Phone, Mail } from "lucide-react"
import { getProjectById } from "@/lib/data"

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  const project = getProjectById(Number.parseInt(params.id))

  if (!project) {
    return (
      <div className="container mx-auto py-20 px-4 text-center">
        <h1 className="text-3xl font-bold mb-6">Project Not Found</h1>
        <p className="mb-8">The project you're looking for doesn't exist or has been removed.</p>
        <Button asChild>
          <Link href="/projects">Back to Projects</Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[50vh]">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.name}
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{project.name}</h1>
          <div className="flex flex-wrap gap-4 justify-center mb-6">
            <span className="bg-yellow-500 text-black px-4 py-1 rounded-full text-sm font-medium">
              {project.category}
            </span>
            <div className="flex items-center text-white">
              <MapPin className="w-4 h-4 mr-1" />
              {project.location}
            </div>
            <div className="flex items-center text-white">
              <Calendar className="w-4 h-4 mr-1" />
              {project.year}
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-12 px-4 md:px-6">
        <div className="container mx-auto">
          <Link href="/projects" className="flex items-center text-yellow-500 mb-8 hover:underline">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to All Projects
          </Link>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold mb-6">Project Overview</h2>
              <p className="text-gray-600 mb-6">{project.description}</p>
              <p className="text-gray-600 mb-6">{project.fullDescription}</p>

              <h2 className="text-2xl font-bold mb-6">Project Gallery</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {project.gallery.map((image, index) => (
                  <div key={index} className="relative h-64 rounded-lg overflow-hidden">
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${project.name} - Gallery ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>

              <h2 className="text-2xl font-bold mb-6">Project Features</h2>
              <ul className="list-disc pl-6 mb-8 space-y-2 text-gray-600">
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>

              <h2 className="text-2xl font-bold mb-6">Project Timeline</h2>
              <div className="space-y-6 mb-8">
                {project.timeline.map((item, index) => (
                  <div key={index} className="flex">
                    <div className="mr-4 flex flex-col items-center">
                      <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                      {index < project.timeline.length - 1 && <div className="w-0.5 h-full bg-gray-200 mt-1"></div>}
                    </div>
                    <div className="pb-6">
                      <h3 className="text-lg font-bold">{item.phase}</h3>
                      <p className="text-sm text-gray-500 mb-2">{item.date}</p>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md sticky top-24">
                <h3 className="text-xl font-bold mb-4">Project Information</h3>
                <div className="space-y-4 mb-6">
                  <div>
                    <p className="text-sm text-gray-500">Client</p>
                    <p className="font-medium">{project.client}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Location</p>
                    <p className="font-medium">{project.location}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Year Completed</p>
                    <p className="font-medium">{project.year}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Project Size</p>
                    <p className="font-medium">{project.size}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Project Value</p>
                    <p className="font-medium">{project.value}</p>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-4">Interested in a Similar Project?</h3>
                <p className="text-gray-600 mb-6">Contact our team to discuss your construction needs.</p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-yellow-500 mr-3" />
                    <span>(123) 456-7890</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-yellow-500 mr-3" />
                    <span>projects@imfconstruction.com</span>
                  </div>
                </div>
                <div className="mt-6">
                  <Button asChild className="w-full bg-yellow-500 hover:bg-yellow-600 text-black">
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="py-12 px-4 md:px-6 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8">Related Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {project.relatedProjects.map((relatedProject) => (
              <div key={relatedProject.id} className="group overflow-hidden rounded-lg shadow-md bg-white">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={relatedProject.image || "/placeholder.svg"}
                    alt={relatedProject.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-medium">
                    {relatedProject.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{relatedProject.name}</h3>
                  <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {relatedProject.location}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {relatedProject.year}
                    </div>
                  </div>
                  <Button asChild variant="outline" className="w-full">
                    <Link href={`/projects/${relatedProject.id}`}>View Project</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
