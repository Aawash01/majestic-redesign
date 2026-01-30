import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, Building2, Paintbrush, Palette, ArrowRight } from "lucide-react"

const services = [
  {
    icon: Home,
    title: "Residential Painting",
    description:
      "Transform your home with our expert interior and exterior painting services. We deliver flawless finishes that last.",
  },
  {
    icon: Building2,
    title: "Commercial Painting",
    description:
      "Professional painting solutions for offices, retail spaces, and industrial buildings with minimal disruption to your business.",
  },
  {
    icon: Paintbrush,
    title: "Interior Painting",
    description:
      "From feature walls to complete interior transformations, we bring your vision to life with precision and care.",
  },
  {
    icon: Palette,
    title: "Colour Consultation",
    description:
      "Our expert colour consultants help you choose the perfect palette to complement your space and style.",
  },
]

export function ServicesPreview() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-3 mb-4 text-balance">
            Comprehensive Painting Solutions
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            From residential homes to large commercial projects, we provide a full range of painting services tailored to your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group p-6 bg-card rounded-lg border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild variant="outline" size="lg">
            <Link href="/services">
              View All Services
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
