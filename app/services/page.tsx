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
      "Transform your home with the professional residential painting services from Majestic Painting and Decorating. Whether you’re updating a single room, refreshing your exterior, or planning a complete home makeover, our skilled painters deliver beautiful, long-lasting results that enhance both the comfort and value of your property.",
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
    icon: Home,
    title: "Wood Varnish",
    description:
      "At Majestic Painting and Decorating, our premium wood varnishing services are designed to protect, preserve, and enhance the natural beauty of your timber surfaces. We bring out the richness of the wood grain while applying a strong, long-lasting protective finish that stands up to moisture, sunlight, and everyday wear and tear.",
    features: [
      "Enhanced Natural Beauty",
      "UV Resistance",
      "Versatile Finishes",
      "Chemical Resistance",
    ],
   image: "/services/wood-vanish.jpeg",
  },
  {
    icon: Building2,
    title: "Commercial Painting",
    description:
      "We deliver professional commercial painting services tailored to businesses of all sizes. We understand that your workplace represents your brand, which is why we focus on creating clean, modern, and professional-looking spaces that leave a lasting impression on clients and staff alike.",
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
      "Create the perfect atmosphere inside your property with the expert interior painting services from Majestic Painting and Decorating. Whether you’re refreshing a single room or planning a complete interior makeover, our skilled painters deliver smooth, flawless finishes that transform your space",
    features: [
      "Walls and ceilings",
      "Feature walls and accents",
      "Kitchen and bathroom repaints",
      "Wallpaper removal and preparation",
    ],
     image: "/services/interior-painting.jpeg",
  },
  {
    icon: PaintBucket,
    title: "Exterior Painting",
    description:
      "Enhance the appearance of your property while protecting it from harsh weather with expert exterior painting services from Majestic Painting and Decorating. We combine skilled workmanship with high-quality, weather-resistant paints specially formulated for tough Australian conditions — including strong sun, heavy rain, wind, and coastal air.",
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
      "Protect your home and boost its street appeal with expert roof painting services from Majestic Painting and Decorating. A properly painted roof doesn’t just look great — it also helps extend the life of your roofing materials by providing an extra layer of protection against harsh Australian weather conditions.",
    features: [
      "Tile and metal roof painting",
      "Pressure cleaning and preparation",
      "Protective sealant application",
      "Rust treatment and prevention",
    ],
    image: "/services/roof-painting.jpeg",
  },

  {
    icon: Layers,
    title: "Water Proofing",
    description:
      "We provide reliable and long-lasting waterproofing solutions to protect your property from water damage, leaks, and moisture-related issues. Proper waterproofing not only prevents costly structural damage but also helps maintain a safe and healthy environment inside your home or building.",
    features: [
      "Impermeable Barrier",
      "Structural Preservation",
      "Mildew and Mold Prevention",
      "Enhanced Durability and Value",
    ],
    image: "/services/water-proofing.jpeg",
  },
  {
    icon: Layers,
    title: "Venetian Plaster Walls",
    description:
      "A wall Venetian refers to a decorative wall finish created using Venetian plaster. This technique gives walls a smooth, polished, and often marble-like appearance, adding depth, texture, and elegance to any space. It’s more than just paint — it’s a finishing art that transforms plain walls into a luxurious surface.",
    features: [
      "Distinctive Visual Depth",
      "Versatile Sheen Levels",
      "Natural Durability",
      "Breathability and Mold Resistance",
    ],
    image: "/services/venetian-plaster.jpeg",
  },


   {
    icon: Layers,
    title: "Concrete Sealing",
    description:
      "At Majestic Painting and Decorating, we use high-quality sealers and professional techniques to ensure a long-lasting, even finish that protects your concrete while improving its look",
    features: [
      "Moisture and Freeze-Thaw Protection",
      "Stain and Chemical Resistance",
      "Surface Strengthening and Dustproofing",
      "Color and Texture Enhancement",
    ],
    image: "/services/concrete.jpeg",
  },
  {
    icon: Layers,
    title: "Specialty Finishes",
    description:
      "We go beyond standard painting to create distinctive surfaces that add personality, depth, and elegance to your space. Our specialty finishing services are perfect for clients who want something unique and eye-catching rather than a simple flat colour.",
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
              At Majestic Painting and Decorating, we provide high-quality painting solutions for both residential and commercial properties. Whether you’re refreshing a single room, renovating your home, or upgrading the look of a large commercial building, our experienced team delivers outstanding results with precision and care.
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
