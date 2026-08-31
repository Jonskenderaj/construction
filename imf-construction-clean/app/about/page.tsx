import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Award, Clock, Users, Briefcase } from "lucide-react"

export default function AboutPage() {
  // Company stats
  const stats = [
    { icon: <Clock className="h-8 w-8 text-yellow-500" />, value: "25+", label: "Years of Experience" },
    { icon: <Briefcase className="h-8 w-8 text-yellow-500" />, value: "500+", label: "Projects Completed" },
    { icon: <Users className="h-8 w-8 text-yellow-500" />, value: "250+", label: "Team Members" },
    { icon: <Award className="h-8 w-8 text-yellow-500" />, value: "30+", label: "Industry Awards" },
  ]

  // Team members
  const team = [
    {
      name: "John Smith",
      position: "CEO & Founder",
      bio: "With over 30 years of experience in construction, John founded IFM 06 Construction with a vision to build quality structures that stand the test of time.",
      image: "/placeholder.svg?height=400&width=400&text=John%20Smith",
    },
    {
      name: "Sarah Johnson",
      position: "Chief Architect",
      bio: "Sarah leads our architectural team with innovative designs that blend functionality, aesthetics, and sustainability.",
      image: "/placeholder.svg?height=400&width=400&text=Sarah%20Johnson",
    },
    {
      name: "Michael Brown",
      position: "Construction Director",
      bio: "Michael oversees all construction operations, ensuring projects are completed on time, within budget, and to the highest standards.",
      image: "/placeholder.svg?height=400&width=400&text=Michael%20Brown",
    },
    {
      name: "Emily Davis",
      position: "Project Manager",
      bio: "Emily excels at coordinating complex projects, managing resources efficiently, and delivering exceptional results for our clients.",
      image: "/placeholder.svg?height=400&width=400&text=Emily%20Davis",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[40vh]">
        <Image
          src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1920&auto=format&fit=crop"
          alt="About Us"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About IFM 06 Construction</h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Building excellence through innovation, quality, and dedication
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-4 md:px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1470&auto=format&fit=crop"
                alt="Our Story"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 1995, IFM 06 Construction began as a small family business with a big vision: to transform
                the urban landscape with buildings that combine functionality, aesthetics, and sustainability.
              </p>
              <p className="text-gray-600 mb-4">
                Over the past 25+ years, we've grown from a local contractor to one of the region's leading construction
                firms, with a portfolio spanning commercial, residential, and infrastructure projects.
              </p>
              <p className="text-gray-600 mb-4">
                Throughout our journey, we've remained committed to our founding principles: delivering exceptional
                quality, embracing innovation, and building lasting relationships with our clients and communities.
              </p>
              <p className="text-gray-600">
                Today, IFM 06 Construction continues to push boundaries and set new standards in the construction
                industry, guided by our passion for excellence and our dedication to building a better future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 md:px-6 bg-gray-900 text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">{stat.icon}</div>
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 px-4 md:px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Mission & Values</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              At IFM 06 Construction, we're guided by a clear mission and a strong set of values that inform everything
              we do.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gray-50 p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-600 mb-4">
                To deliver exceptional construction projects that exceed client expectations, enhance communities, and
                stand the test of time.
              </p>
              <p className="text-gray-600">
                We strive to be the most trusted name in construction, known for our integrity, quality, and innovation
                in every project we undertake.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4">Our Values</h3>
              <ul className="space-y-4">
                <li className="flex">
                  <span className="font-bold mr-2">Quality:</span>
                  <span className="text-gray-600">We never compromise on the quality of our work.</span>
                </li>
                <li className="flex">
                  <span className="font-bold mr-2">Integrity:</span>
                  <span className="text-gray-600">
                    We conduct business with honesty, transparency, and ethical standards.
                  </span>
                </li>
                <li className="flex">
                  <span className="font-bold mr-2">Innovation:</span>
                  <span className="text-gray-600">We embrace new technologies and methods to improve our craft.</span>
                </li>
                <li className="flex">
                  <span className="font-bold mr-2">Sustainability:</span>
                  <span className="text-gray-600">
                    We build with the future in mind, minimizing environmental impact.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 px-4 md:px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Leadership Team</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Meet the experienced professionals who lead IFM 06 Construction with vision, expertise, and dedication.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-64">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-yellow-500 font-medium mb-4">{member.position}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 px-4 md:px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Certifications & Affiliations</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              IFM 06 Construction maintains the highest industry standards through professional certifications and
              affiliations.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((cert) => (
              <div key={cert} className="bg-gray-50 p-6 rounded-lg shadow-md text-center">
                <div className="relative h-20 mb-4">
                  <Image
                    src={`/placeholder.svg?height=100&width=200&text=Certification%20${cert}`}
                    alt={`Certification ${cert}`}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="font-bold">Certification Name {cert}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 md:px-6 bg-yellow-500">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Ready to Work With Us?</h2>
          <p className="text-black/80 text-xl max-w-2xl mx-auto mb-8">
            Contact our team today to discuss your construction project needs and discover the IFM 06 difference.
          </p>
          <Button asChild size="lg" className="bg-black hover:bg-gray-800 text-white">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
