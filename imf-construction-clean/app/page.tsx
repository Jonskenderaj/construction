import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Building, Building2, Phone, Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import VideoGallery from "@/components/video-gallery"
import { getAllProjects } from "@/lib/data"

export default function Home() {
  // Get 4 featured projects from the projects data
  const featuredProjects = getAllProjects().slice(0, 4)

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with Video Gallery */}
      <VideoGallery />

      {/* Services Section */}
      <section className="py-16 px-4 md:px-6 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Building className="w-12 h-12 text-yellow-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Commercial Construction</h3>
              <p className="text-gray-600 mb-4">
                We build high-quality commercial spaces that meet your business needs.
              </p>
              <Link href="/projects" className="text-yellow-500 font-medium flex items-center">
                Learn More <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Building2 className="w-12 h-12 text-yellow-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Residential Development</h3>
              <p className="text-gray-600 mb-4">
                Luxury apartments and residential complexes built with attention to detail.
              </p>
              <Link href="/apartments" className="text-yellow-500 font-medium flex items-center">
                View Apartments <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <MapPin className="w-12 h-12 text-yellow-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Infrastructure Projects</h3>
              <p className="text-gray-600 mb-4">
                Building the infrastructure that connects communities and drives growth.
              </p>
              <Link href="/projects" className="text-yellow-500 font-medium flex items-center">
                See Projects <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 px-4 md:px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProjects.map((project) => (
              <div key={project.id} className="group overflow-hidden rounded-lg shadow-md">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 bg-white">
                  <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                  <p className="text-gray-600 mb-4">{project.description.substring(0, 100)}...</p>
                  <Link href={`/projects/${project.id}`} className="text-yellow-500 font-medium flex items-center">
                    View Details <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black">
              <Link href="/projects">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 md:px-6 bg-gray-900 text-white">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg">
              <p className="italic mb-4">
                "IFM 06 Construction delivered our office building on time and within budget. Their attention to detail
                and quality workmanship exceeded our expectations."
              </p>
              <p className="font-bold">- John Smith, CEO of TechCorp</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <p className="italic mb-4">
                "We've worked with IFM 06 on multiple projects, and they consistently deliver exceptional results. Their
                team is professional, skilled, and a pleasure to work with."
              </p>
              <p className="font-bold">- Sarah Johnson, Real Estate Developer</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <p className="italic mb-4">
                "The apartment complex built by IFM 06 has become the landmark of our neighborhood. The quality of
                construction and attention to detail is remarkable."
              </p>
              <p className="font-bold">- Michael Brown, City Planner</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 md:px-6 bg-yellow-500">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Ready to Start Your Project?</h2>
          <p className="text-black/80 text-xl max-w-2xl mx-auto mb-8">
            Contact us today to discuss how IFM 06 Construction can bring your vision to life.
          </p>
          <Button asChild size="lg" className="bg-black hover:bg-gray-800 text-white">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="py-12 px-4 md:px-6 bg-gray-100">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center">
              <Phone className="w-8 h-8 text-yellow-500 mr-4" />
              <div>
                <h3 className="font-bold">Call Us</h3>
                <p>+355682067060</p>
              </div>
            </div>
            <div className="flex items-center">
              <Mail className="w-8 h-8 text-yellow-500 mr-4" />
              <div>
                <h3 className="font-bold">Email Us</h3>
                <p>fm06shpk@yahoo.com</p>
              </div>
            </div>
            <div className="flex items-center">
              <MapPin className="w-8 h-8 text-yellow-500 mr-4" />
              <div>
                <h3 className="font-bold">Visit Us</h3>
                <p>Rruga Frederik Shiroka, Tirane, Albania</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
