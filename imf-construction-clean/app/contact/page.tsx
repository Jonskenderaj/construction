"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      })
    }, 1500)
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[40vh]">
        <Image
          src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1920&auto=format&fit=crop"
          alt="Contact Us"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Get in touch with our team to discuss your construction needs
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12 px-4 md:px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <Phone className="h-10 w-10 text-yellow-500 mb-4" />
              <h3 className="text-lg font-bold mb-2">Call Us</h3>
              <p className="text-gray-600">+355682067060</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <Mail className="h-10 w-10 text-yellow-500 mb-4" />
              <h3 className="text-lg font-bold mb-2">Email Us</h3>
              <p className="text-gray-600">fm06shpk@yahoo.com</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <MapPin className="h-10 w-10 text-yellow-500 mb-4" />
              <h3 className="text-lg font-bold mb-2">Visit Us</h3>
              <p className="text-gray-600">Rruga Frederik Shiroka</p>
              <p className="text-gray-600">Tirane, Albania</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <Clock className="h-10 w-10 text-yellow-500 mb-4" />
              <h3 className="text-lg font-bold mb-2">Business Hours</h3>
              <p className="text-gray-600">Monday - Friday: 8am - 6pm</p>
              <p className="text-gray-600">Saturday: 9am - 1pm</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-16 px-4 md:px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 text-green-700 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-2">Thank You!</h3>
                  <p>Your message has been sent successfully. Our team will get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Name *
                      </label>
                      <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <Input id="phone" name="phone" value={formData.phone} onChange={handleChange} />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                        Subject *
                      </label>
                      <Input id="subject" name="subject" value={formData.subject} onChange={handleChange} required />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-yellow-500 hover:bg-yellow-600 text-black"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              )}
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Location</h2>
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1579609424835-6c1c84d0a29d?q=80&w=1470&auto=format&fit=crop"
                  alt="Map of Tirana, Albania"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="mt-6 bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold mb-2">IFM 06 Construction Headquarters</h3>
                <p className="text-gray-600">
                  Rruga Frederik Shiroka
                  <br />
                  Tirane, Albania
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 md:px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about our services and processes.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold mb-2">What types of projects does IFM 06 Construction handle?</h3>
              <p className="text-gray-600">
                IFM 06 Construction specializes in commercial, residential, and infrastructure projects of various
                scales, from small renovations to large-scale developments.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold mb-2">How do I request a quote for my project?</h3>
              <p className="text-gray-600">
                You can request a quote by filling out our contact form, calling our office at +355682067060, or sending
                us an email with details about your project.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold mb-2">What is your typical project timeline?</h3>
              <p className="text-gray-600">
                Project timelines vary based on scope and complexity. During the consultation phase, we'll provide a
                detailed timeline specific to your project.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold mb-2">Do you offer financing options for residential projects?</h3>
              <p className="text-gray-600">
                Yes, we work with several financial institutions to offer competitive financing options for our
                residential developments. Contact our sales team for details.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
