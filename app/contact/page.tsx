"use client"

import React from "react"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle,
  Send,
  AlertCircle,
} from "lucide-react"
import { sendQuoteRequest, getMailtoLink } from "@/app/actions/send-quote"

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    content: "+61 415 894 507",
    href: "tel:+61415894507",
  },
  {
    icon: Mail,
    title: "Email",
    content: "info.majesticpainting@gmmail.com",
    href: "info.majesticpainting@gmmail.com",
  },
 
  {
    icon: Clock,
    title: "Business Hours",
    content: "Mon - Fri: 7am - 5pm",
    href: null,
  },
]

const services = [
  "Residential Painting",
  "Commercial Painting",
  "Interior Painting",
  "Exterior Painting",
  "Roof Painting",
  "Other",
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)
    
    const result = await sendQuoteRequest(formData)
    
    setIsSubmitting(false)
    
    if (result.success) {
      // If fallback is needed, open mailto link
      if ('fallback' in result && result.fallback && 'mailtoLink' in result) {
        window.open(result.mailtoLink as string, '_blank')
      }
      setIsSubmitted(true)
    } else {
      setError(result.error || "Something went wrong. Please try again.")
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-muted py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Contact Us
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mt-3 mb-6 text-balance">
              Get Your Free Quote
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              Ready to transform your space? Contact us today for a free, no-obligation quote. Our team is here to help bring your vision to life.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Contact Form */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Send Us a Message
                </h2>
                
                {isSubmitted ? (
                  <div className="bg-primary/10 border border-primary/20 rounded-xl p-8 text-center">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      Thank You!
                    </h3>
                    <p className="text-muted-foreground">
                      Your message has been sent successfully. We&apos;ll get back to you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {error && (
                      <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4 flex items-start gap-3">
                        <AlertCircle className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                        <p className="text-sm text-destructive">{error}</p>
                      </div>
                    )}
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          placeholder="John Smith"
                          required
                          value={formData.name}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="john@example.com"
                          required
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="0400 000 000"
                          value={formData.phone}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="service">Service Required</Label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                          <option value="">Select a service</option>
                          {services.map((service) => (
                            <option key={service} value={service}>
                              {service}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Your Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us about your project..."
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                      />
                    </div>

                    <Button type="submit" size="lg" disabled={isSubmitting} className="w-full sm:w-auto">
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          Send Message
                          <Send className="w-4 h-4 ml-2" />
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </div>

              {/* Contact Information */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Contact Information
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Have questions or ready to start your painting project? Reach out to us through any of the following channels. We typically respond within 24 hours.
                </p>

                <div className="space-y-6 mb-10">
                  {contactInfo.map((item) => (
                    <div key={item.title} className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">
                          {item.title}
                        </h3>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            {item.content}
                          </a>
                        ) : (
                          <p className="text-muted-foreground">{item.content}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Service Area */}
                <div className="bg-muted rounded-xl p-6">
                  <h3 className="font-semibold text-foreground mb-3">
                    Service Areas
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    We proudly serve the greater Sydney metropolitan area, including:
                  </p>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    {[
                      "Sydney CBD",
                      "Eastern Suburbs",
                      "Northern Beaches",
                      "North Shore",
                      "Inner West",
                      "Western Sydney",
                      "Southern Sydney",
                      "Hills District",
                    ].map((area) => (
                      <div key={area} className="flex items-center gap-2 text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span>{area}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        
      </main>
      <Footer />
    </>
  )
}
