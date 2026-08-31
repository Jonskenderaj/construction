"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Bath, BedDouble, Home, MapPin, Ruler } from "lucide-react"
import { getAllApartments } from "@/lib/data"

export default function ApartmentsPage() {
  const allApartments = getAllApartments()
  const [apartments, setApartments] = useState(allApartments)
  const [filters, setFilters] = useState({
    location: "Any Location",
    bedrooms: "Any",
    priceRange: "Any Price",
  })

  const locations = [
    "Any Location",
    "Downtown",
    "Riverside District",
    "Green Valley",
    "Central District",
    "Suburban Area",
    "Arts District",
  ]

  const bedroomOptions = ["Any", "Studio", "1 Bedroom", "2 Bedrooms", "3+ Bedrooms"]

  const priceRanges = ["Any Price", "Under $300,000", "$300,000 - $500,000", "$500,000 - $700,000", "$700,000+"]

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target
    setFilters((prev) => ({ ...prev, [name]: value }))
  }

  const applyFilters = () => {
    let filtered = allApartments

    // Filter by location
    if (filters.location !== "Any Location") {
      filtered = filtered.filter((apt) => apt.location.includes(filters.location))
    }

    // Filter by bedrooms
    if (filters.bedrooms !== "Any") {
      if (filters.bedrooms === "Studio") {
        filtered = filtered.filter((apt) => apt.bedrooms === 0)
      } else if (filters.bedrooms === "1 Bedroom") {
        filtered = filtered.filter((apt) => apt.bedrooms === 1)
      } else if (filters.bedrooms === "2 Bedrooms") {
        filtered = filtered.filter((apt) => apt.bedrooms === 2)
      } else if (filters.bedrooms === "3+ Bedrooms") {
        filtered = filtered.filter((apt) => apt.bedrooms >= 3)
      }
    }

    // Filter by price range
    if (filters.priceRange !== "Any Price") {
      if (filters.priceRange === "Under $300,000") {
        filtered = filtered.filter((apt) => {
          const price = Number.parseInt(apt.price.replace(/[^0-9]/g, ""))
          return price < 300000
        })
      } else if (filters.priceRange === "$300,000 - $500,000") {
        filtered = filtered.filter((apt) => {
          const price = Number.parseInt(apt.price.replace(/[^0-9]/g, ""))
          return price >= 300000 && price <= 500000
        })
      } else if (filters.priceRange === "$500,000 - $700,000") {
        filtered = filtered.filter((apt) => {
          const price = Number.parseInt(apt.price.replace(/[^0-9]/g, ""))
          return price > 500000 && price <= 700000
        })
      } else if (filters.priceRange === "$700,000+") {
        filtered = filtered.filter((apt) => {
          const price = Number.parseInt(apt.price.replace(/[^0-9]/g, ""))
          return price > 700000
        })
      }
    }

    setApartments(filtered)
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[40vh]">
        <Image
          src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1920&auto=format&fit=crop"
          alt="Apartments"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Apartments For Sale</h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Discover your dream home in our premium residential developments
          </p>
        </div>
      </section>

      {/* Search Filters */}
      <section className="py-8 px-4 md:px-6 bg-gray-100">
        <div className="container mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Find Your Perfect Home</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                  Location
                </label>
                <select
                  id="location"
                  name="location"
                  className="w-full p-2 border rounded-md"
                  value={filters.location}
                  onChange={handleFilterChange}
                >
                  {locations.map((location) => (
                    <option key={location} value={location}>
                      {location}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="bedrooms" className="block text-sm font-medium text-gray-700 mb-1">
                  Bedrooms
                </label>
                <select
                  id="bedrooms"
                  name="bedrooms"
                  className="w-full p-2 border rounded-md"
                  value={filters.bedrooms}
                  onChange={handleFilterChange}
                >
                  {bedroomOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="priceRange" className="block text-sm font-medium text-gray-700 mb-1">
                  Price Range
                </label>
                <select
                  id="priceRange"
                  name="priceRange"
                  className="w-full p-2 border rounded-md"
                  value={filters.priceRange}
                  onChange={handleFilterChange}
                >
                  {priceRanges.map((range) => (
                    <option key={range} value={range}>
                      {range}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex items-end">
                <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black" onClick={applyFilters}>
                  Search
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Apartments Grid */}
      <section className="py-12 px-4 md:px-6">
        <div className="container mx-auto">
          {apartments.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium mb-4">No apartments found matching your criteria</h3>
              <Button
                onClick={() => {
                  setFilters({
                    location: "Any Location",
                    bedrooms: "Any",
                    priceRange: "Any Price",
                  })
                  setApartments(allApartments)
                }}
              >
                Reset Filters
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {apartments.map((apartment) => (
                <div key={apartment.id} className="group overflow-hidden rounded-lg shadow-md bg-white">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={apartment.image || "/placeholder.svg"}
                      alt={apartment.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-medium">
                      {apartment.price}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{apartment.name}</h3>
                    <div className="flex items-center mb-4 text-sm text-gray-600">
                      <MapPin className="w-4 h-4 mr-1" />
                      {apartment.location}
                    </div>
                    <div className="flex flex-wrap gap-4 mb-4 text-sm">
                      <div className="flex items-center">
                        <BedDouble className="w-4 h-4 mr-1 text-gray-600" />
                        {apartment.bedrooms} {apartment.bedrooms === 1 ? "Bedroom" : "Bedrooms"}
                      </div>
                      <div className="flex items-center">
                        <Bath className="w-4 h-4 mr-1 text-gray-600" />
                        {apartment.bathrooms} {apartment.bathrooms === 1 ? "Bathroom" : "Bathrooms"}
                      </div>
                      <div className="flex items-center">
                        <Ruler className="w-4 h-4 mr-1 text-gray-600" />
                        {apartment.area}
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">{apartment.description}</p>
                    <Button asChild className="w-full bg-yellow-500 hover:bg-yellow-600 text-black">
                      <Link href={`/apartments/${apartment.id}`}>View Details</Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Featured Development */}
      <section className="py-16 px-4 md:px-6 bg-gray-100">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Riverside Residences</h2>
              <p className="text-gray-600 mb-6">
                Our newest luxury development featuring 120 premium apartments with stunning river views,
                state-of-the-art amenities, and sustainable design. Located in the heart of the city with easy access to
                transportation, shopping, and entertainment.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <Home className="w-5 h-5 mr-2 text-yellow-500" />
                  Multiple floor plans available
                </li>
                <li className="flex items-center">
                  <Home className="w-5 h-5 mr-2 text-yellow-500" />
                  Premium finishes and appliances
                </li>
                <li className="flex items-center">
                  <Home className="w-5 h-5 mr-2 text-yellow-500" />
                  Community amenities including pool, gym, and lounge
                </li>
                <li className="flex items-center">
                  <Home className="w-5 h-5 mr-2 text-yellow-500" />
                  Energy-efficient design
                </li>
              </ul>
              <Button asChild className="bg-yellow-500 hover:bg-yellow-600 text-black">
                <Link href="/contact">Schedule a Viewing</Link>
              </Button>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1470&auto=format&fit=crop"
                alt="Riverside Residences"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 md:px-6 bg-gray-900 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Find Your Dream Home Today</h2>
          <p className="text-white/80 text-xl max-w-2xl mx-auto mb-8">
            Contact our sales team to learn more about our available apartments and schedule a viewing.
          </p>
          <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black">
            <Link href="/contact">Contact Sales Team</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
