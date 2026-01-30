import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
]

const services = [
  "Interior and Exterior Painting",
  "Epoxy floor coating",
  "Residential and Commercial Painting",
  "Roof Painting",
  "Deck and patio Staining",
  "Ceiling and Fence Painting",
  "Wall venetian",
  "Texture and plaster painting",
  "Cabinet and furniture painting",
  "Industrial painting",
  
]

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/logo.webp"
                alt="Majestic Painting Logo"
                width={50}
                height={50}
                className="w-12 h-12 brightness-0 invert"
              />
              <span className="text-xl font-bold">Majestic Painting</span>
            </Link>
            <p className="text-background/70 leading-relaxed">
              Professional painting services delivering quality workmanship and exceptional results for residential and commercial properties.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-background/70 hover:text-background transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-background/70">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="flex items-center gap-3 mb-6">
              <a
                href="https://www.facebook.com/people/Majestic-painting-and-decorating-pty-ltd/61567667855424/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-secondary hover:text-foreground transition-colors"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/majestic_painting_decorating_/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-secondary hover:text-foreground transition-colors"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 mt-0.5 shrink-0" />
                <div>
                  <p className="text-background/70">Phone</p>
                  <a href="tel:+61415894507" className="hover:text-secondary transition-colors">
                    +61 415 894 507
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 mt-0.5 shrink-0" />
                <div>
                  <p className="text-background/70">Email</p>
                  <a href="mailto:info.majesticpainting@gmail.com" className="hover:text-secondary transition-colors">
                    info.majesticpainting@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 shrink-0" />
                <div>
                  <p className="text-background/70">Location</p>
                  <span>34 Bowden Street, Guildford, NSW 2161</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8 text-center">
          <p className="text-background/60">&copy; {new Date().getFullYear()} Majestic Painting. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
