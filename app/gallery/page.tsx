"use client"

import { useState } from "react"
import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, X } from "lucide-react"

const categories = ["All", "Residential", "Commercial", "Interior", "Exterior"]

const projects = [
  {
    id: 1,
    title: "Modern Family Home",
    category: "Residential",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
    description: "Complete interior and exterior repaint with modern colour palette",
  },
  {
    id: 2,
    title: "Corporate Office Fitout",
    category: "Commercial",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
    description: "Professional office painting with minimal business disruption",
  },
  {
    id: 3,
    title: "Living Room Transformation",
    category: "Interior",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop",
    description: "Feature wall and ceiling repaint with designer finishes",
  },
  {
    id: 4,
    title: "Heritage Home Exterior",
    category: "Exterior",
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2070&auto=format&fit=crop",
    description: "Careful restoration and repainting of heritage facade",
  },
  {
    id: 5,
    title: "Apartment Complex",
    category: "Commercial",
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1935&auto=format&fit=crop",
    description: "Multi-unit strata painting project completed on schedule",
  },
  {
    id: 6,
    title: "Kitchen Refresh",
    category: "Interior",
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=2070&auto=format&fit=crop",
    description: "Cabinet painting and wall refresh for modern kitchen upgrade",
  },
  {
    id: 7,
    title: "Coastal Beach House",
    category: "Residential",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
    description: "Weather-resistant exterior painting for coastal property",
  },
  {
    id: 8,
    title: "Retail Storefront",
    category: "Commercial",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop",
    description: "Eye-catching storefront painting to attract customers",
  },
  {
    id: 9,
    title: "Bedroom Suite",
    category: "Interior",
    image:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070&auto=format&fit=crop",
    description: "Calming colour scheme for master bedroom suite",
  },
  {
    id: 10,
    title: "Weatherboard Home",
    category: "Exterior",
    image:
      "https://images.unsplash.com/photo-1598228723793-52759bba239c?q=80&w=1974&auto=format&fit=crop",
    description: "Complete weatherboard preparation and premium paint finish",
  },
  {
    id: 11,
    title: "Contemporary Townhouse",
    category: "Residential",
    image:
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1974&auto=format&fit=crop",
    description: "Modern colour scheme for contemporary townhouse",
  },
  {
    id: 12,
    title: "Warehouse Conversion",
    category: "Commercial",
    image:
      "https://images.unsplash.com/photo-1504297050568-910d24c426d3?q=80&w=1974&auto=format&fit=crop",
    description: "Industrial space transformation with specialty finishes",
  },
]

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory)

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-muted py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Our Portfolio
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mt-3 mb-6 text-balance">
              Project Gallery
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              Browse our collection of completed painting projects. Each project showcases our commitment to quality craftsmanship and attention to detail.
            </p>
          </div>
        </section>

        {/* Filter Tabs */}
        <section className="py-8 border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === category
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <button
                  key={project.id}
                  onClick={() => setSelectedProject(project)}
                  className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-muted text-left"
                >
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-foreground/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <span className="text-secondary text-sm font-medium mb-1">
                      {project.category}
                    </span>
                    <h3 className="text-background text-xl font-semibold">
                      {project.title}
                    </h3>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Lightbox */}
        {selectedProject && (
          <div
            className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <div
              className="bg-background rounded-2xl max-w-4xl w-full overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={selectedProject.image || "/placeholder.svg"}
                  alt={selectedProject.title}
                  className="w-full aspect-video object-cover"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-background/90 rounded-full flex items-center justify-center hover:bg-background transition-colors"
                  aria-label="Close lightbox"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="p-6">
                <span className="text-primary text-sm font-medium">
                  {selectedProject.category}
                </span>
                <h2 className="text-2xl font-bold text-foreground mt-1 mb-3">
                  {selectedProject.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* CTA Section */}
        <section className="py-20 lg:py-28 bg-primary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-4 text-balance">
              Ready to Start Your Project?
            </h2>
            <p className="text-primary-foreground/90 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              Let us help you transform your space. Contact us today for a free consultation and quote.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">
                Get Your Free Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
