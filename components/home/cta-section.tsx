import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone, ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-20 lg:py-28 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-4 text-balance">
          Ready to Transform Your Space?
        </h2>
        <p className="text-primary-foreground/90 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Contact us today for a free, no-obligation quote. Our team is ready to bring your vision to life with professional painting services.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            variant="secondary"
            asChild
            className="text-base"
          >
            <Link href="/contact">
              Get Your Free Quote
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            asChild
            className="text-base border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
          >
            <a href="tel:+61 415 894 507">
              <Phone className="w-5 h-5 mr-2" />
              Call +61 415 894 507
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
