import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, Phone } from "lucide-react"

const highlights = [
  "Licensed & Insured Painters",
  "Free Quotes & Consultations",
  "Quality Guaranteed Work",
]

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2070&auto=format&fit=crop')`,
        }}
      >
        <div className="absolute inset-0 bg-foreground/70" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          <span className="inline-block px-4 py-2 bg-primary/20 text-primary-foreground rounded-full text-sm font-medium mb-6 backdrop-blur-sm border border-primary/30">
            Professional Painting Services
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-background leading-tight mb-6 text-balance">
            Transform Your Space with{" "}
            <span className="text-secondary">Majestic Painting</span>
          </h1>

          <p className="text-lg sm:text-xl text-background/90 mb-8 leading-relaxed max-w-2xl">
            Expert residential and commercial painting services in Sydney. We bring colour to life with precision, care, and over 15 years of experience.
          </p>

          <ul className="space-y-3 mb-10">
            {highlights.map((item) => (
              <li key={item} className="flex items-center gap-3 text-background/90">
                <CheckCircle className="w-5 h-5 text-secondary shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild className="text-base">
              <Link href="/contact">
                Get a Free Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="text-base border-background/30 text-background hover:bg-background/10 bg-transparent"
            >
              <a href="tel:+61415894507">
                <Phone className="w-5 h-5 mr-2" />
                +61 415 894 507
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
