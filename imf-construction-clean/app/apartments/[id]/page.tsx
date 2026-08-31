import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Bath, BedDouble, Ruler, MapPin, ArrowLeft, Phone, Mail, Check } from "lucide-react"
import { getApartmentById } from "@/lib/data"

export default function ApartmentDetailPage({ params }: { params: { id: string } }) {
  const apartment = getApartmentById(Number.parseInt(params.id))

  if (!apartment) {
    return (
      <div className="container mx-auto py-20 px-4 text-center">
        <h1 className="text-3xl font-bold mb-6">Apartment Not Found</h1>
        <p className="mb-8">The apartment you're looking for doesn't exist or has been removed.</p>
        <Button asChild>
          <Link href="/apartments">Back to Apartments</Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[50vh]">
        <Image
          src={apartment.image || "/placeholder.svg"}
          alt={apartment.name}
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{apartment.name}</h1>
          <div className="flex flex-wrap gap-4 justify-center mb-6">
            <span className="bg-yellow-500 text-black px-4 py-1 rounded-full text-sm font-medium">
              {apartment.price}
            </span>
            <div className="flex items-center text-white">
              <MapPin className="w-4 h-4 mr-1" />
              {apartment.location}
            </div>
          </div>
        </div>
      </section>

      {/* Apartment Details */}
      <section className="py-12 px-4 md:px-6">
        <div className="container mx-auto">
          <Link href="/apartments" className="flex items-center text-yellow-500 mb-8 hover:underline">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to All Apartments
          </Link>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <div className="flex flex-wrap gap-6 mb-8">
                <div className="flex items-center bg-gray-100 px-4 py-2 rounded-lg">
                  <BedDouble className="w-5 h-5 mr-2 text-yellow-500" />
                  <div>
                    <p className="text-sm text-gray-500">Bedrooms</p>
                    <p className="font-medium">
                      {apartment.bedrooms} {apartment.bedrooms === 1 ? "Bedroom" : "Bedrooms"}
                    </p>
                  </div>
                </div>
                <div className="flex items-center bg-gray-100 px-4 py-2 rounded-lg">
                  <Bath className="w-5 h-5 mr-2 text-yellow-500" />
                  <div>
                    <p className="text-sm text-gray-500">Bathrooms</p>
                    <p className="font-medium">
                      {apartment.bathrooms} {apartment.bathrooms === 1 ? "Bathroom" : "Bathrooms"}
                    </p>
                  </div>
                </div>
                <div className="flex items-center bg-gray-100 px-4 py-2 rounded-lg">
                  <Ruler className="w-5 h-5 mr-2 text-yellow-500" />
                  <div>
                    <p className="text-sm text-gray-500">Area</p>
                    <p className="font-medium">{apartment.area}</p>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold mb-6">Description</h2>
              <p className="text-gray-600 mb-6">{apartment.description}</p>
              <p className="text-gray-600 mb-8">{apartment.fullDescription}</p>

              <h2 className="text-2xl font-bold mb-6">Apartment Gallery</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {apartment.gallery.map((image, index) => (
                  <div key={index} className="relative h-64 rounded-lg overflow-hidden">
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${apartment.name} - Gallery ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>

              <h2 className="text-2xl font-bold mb-6">Features & Amenities</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 mb-8">
                {apartment.features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <Check className="w-5 h-5 text-yellow-500 mr-2 flex-shrink-0" />
                    <span className="text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>

              <h2 className="text-2xl font-bold mb-6">Location</h2>
              <div className="relative h-80 rounded-lg overflow-hidden mb-8">
                <Image
                  src="/placeholder.svg?height=600&width=1200&text=Map"
                  alt="Location Map"
                  fill
                  className="object-cover"
                />
              </div>

              <h2 className="text-2xl font-bold mb-6">Floor Plan</h2>
              <div className="relative h-80 rounded-lg overflow-hidden mb-8 border border-gray-200">
                <Image
                  src={apartment.floorPlan || "/placeholder.svg"}
                  alt="Floor Plan"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            <div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md sticky top-24">
                <h3 className="text-xl font-bold mb-4">Interested in this property?</h3>
                <p className="text-gray-600 mb-6">
                  Contact our sales team to schedule a viewing or request more information.
                </p>
                <div className="space-y-4 mb-6">
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-yellow-500 mr-3" />
                    <span>(123) 456-7890</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-yellow-500 mr-3" />
                    <span>sales@imfconstruction.com</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <Button asChild className="w-full bg-yellow-500 hover:bg-yellow-600 text-black">
                    <Link href="/contact?subject=Apartment%20Inquiry">Schedule a Viewing</Link>
                  </Button>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/contact?subject=Apartment%20Inquiry">Request Information</Link>
                  </Button>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h3 className="text-xl font-bold mb-4">Property Details</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Price:</span>
                      <span className="font-medium">{apartment.price}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Property Type:</span>
                      <span className="font-medium">{apartment.type}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Year Built:</span>
                      <span className="font-medium">{apartment.yearBuilt}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Status:</span>
                      <span className="font-medium">{apartment.status}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Parking:</span>
                      <span className="font-medium">{apartment.parking}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Similar Properties */}
      <section className="py-12 px-4 md:px-6 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8">Similar Properties</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {apartment.similarProperties.map((property) => (
              <div key={property.id} className="group overflow-hidden rounded-lg shadow-md bg-white">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={property.image || "/placeholder.svg"}
                    alt={property.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-medium">
                    {property.price}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{property.name}</h3>
                  <div className="flex items-center mb-4 text-sm text-gray-600">
                    <MapPin className="w-4 h-4 mr-1" />
                    {property.location}
                  </div>
                  <div className="flex flex-wrap gap-4 mb-4 text-sm">
                    <div className="flex items-center">
                      <BedDouble className="w-4 h-4 mr-1 text-gray-600" />
                      {property.bedrooms} {property.bedrooms === 1 ? "Bedroom" : "Bedrooms"}
                    </div>
                    <div className="flex items-center">
                      <Bath className="w-4 h-4 mr-1 text-gray-600" />
                      {property.bathrooms} {property.bathrooms === 1 ? "Bathroom" : "Bathrooms"}
                    </div>
                    <div className="flex items-center">
                      <Ruler className="w-4 h-4 mr-1 text-gray-600" />
                      {property.area}
                    </div>
                  </div>
                  <Button asChild className="w-full bg-yellow-500 hover:bg-yellow-600 text-black">
                    <Link href={`/apartments/${property.id}`}>View Details</Link>
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
