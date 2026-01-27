import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  Home,
  Building2,
  Paintbrush,
  PaintBucket,
  Droplets,
  Layers,
  ArrowRight,
  CheckCircle,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Our Services | Majestic Painting",
  description:
    "Professional painting services including residential, commercial, interior, exterior, and specialty coatings. Quality workmanship guaranteed.",
}

const services = [
  {
    icon: Home,
    title: "Residential Painting",
    description:
      "Transform your home with our comprehensive residential painting services. From single rooms to complete home makeovers, we deliver stunning results that enhance your living space.",
    features: [
      "Interior and exterior painting",
      "Wall preparation and repairs",
      "Trim and detail work",
      "Colour matching and consultation",
    ],
    image:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070&auto=format&fit=crop",
  },
  {
    icon: Building2,
    title: "Commercial Painting",
    description:
      "Professional painting solutions for businesses of all sizes. We work around your schedule to minimize disruption while delivering exceptional results that enhance your professional image.",
    features: [
      "Office and retail spaces",
      "Industrial facilities",
      "Strata and multi-unit buildings",
      "Scheduled maintenance programs",
    ],
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
  },
  {
    icon: Paintbrush,
    title: "Interior Painting",
    description:
      "Create the perfect atmosphere inside your property with our expert interior painting services. We handle everything from feature walls to complete interior transformations.",
    features: [
      "Walls and ceilings",
      "Feature walls and accents",
      "Kitchen and bathroom repaints",
      "Wallpaper removal and preparation",
    ],
    image:
      "https://images.unsplash.com/photo-1562259949-e8e7689d7828?q=80&w=2031&auto=format&fit=crop",
  },
  {
    icon: PaintBucket,
    title: "Exterior Painting",
    description:
      "Protect and beautify your property exterior with our durable painting solutions. We use premium paints designed to withstand Australian weather conditions.",
    features: [
      "Weatherboard and brick painting",
      "Render and masonry coatings",
      "Fascias, eaves, and gutters",
      "Fence and gate painting",
    ],
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
  },
  {
    icon: Droplets,
    title: "Roof Painting",
    description:
      "Extend the life of your roof and improve your property's curb appeal with our professional roof painting services. We use specialized coatings for lasting protection.",
    features: [
      "Tile and metal roof painting",
      "Pressure cleaning and preparation",
      "Protective sealant application",
      "Rust treatment and prevention",
    ],
    image:
      "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?q=80&w=2065&auto=format&fit=crop",
  },
  {
    icon: Layers,
    title: "Specialty Finishes",
    description:
      "Add unique character to your space with our specialty finishing services. From textured walls to faux finishes, we bring artistic touches to your property.",
    features: [
      "Textured and decorative finishes",
      "Epoxy floor coatings",
      "Anti-graffiti coatings",
      "Heritage restoration work",
    ],
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop",
  },
]

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-muted py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Our Services
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mt-3 mb-6 text-balance">
              Professional Painting Services
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              From residential homes to commercial buildings, we offer a comprehensive range of painting services to meet all your needs with quality and care.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-20">
              {services.map((service, index) => (
                <div
                  key={service.title}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-5">
                      <service.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h2 className="text-3xl font-bold text-foreground mb-4">
                      {service.title}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                          <span className="text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button asChild>
                      <Link href="/contact">
                        Get a Quote
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </div>
                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                      <img
                        src={service.image || "/placeholder.svg"}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 lg:py-28 bg-primary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-4 text-balance">
              Need a Custom Painting Solution?
            </h2>
            <p className="text-primary-foreground/90 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              Contact us today to discuss your project requirements. We offer free consultations and competitive quotes for all painting projects.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">
                Request a Free Quote
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
