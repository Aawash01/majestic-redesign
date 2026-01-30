import { Award, Clock, Shield, Users } from "lucide-react"

const features = [
  {
    icon: Award,
    title: "10+ Years Experience",
    description:
      "Decades of expertise delivering exceptional painting results for homes and businesses across Sydney.",
  },
  {
    icon: Shield,
    title: "Fully Licensed & Insured",
    description:
      "Complete peace of mind with our comprehensive insurance coverage and professional licensing.",
  },
  {
    icon: Clock,
    title: "On-Time Completion",
    description:
      "We respect your time and always deliver projects on schedule without compromising quality.",
  },
  {
    icon: Users,
    title: "Customer Satisfaction",
    description:
      "Hundreds of happy customers and 5-star reviews speak to our commitment to excellence.",
  },
]

export function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-3 mb-4 text-balance">
            Sydney&apos;s Trusted Painting Professionals
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            At Majestic Painting, we take pride in transforming spaces with exceptional craftsmanship and attention to detail. Our team of skilled painters is committed to delivering results that exceed your expectations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature) => (
            <div key={feature.title} className="text-center p-6 bg-card rounded-lg border border-border">
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-5">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="aspect-[16/9] rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1562259949-e8e7689d7828?q=80&w=2031&auto=format&fit=crop"
              alt="Professional painter at work"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-22 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-8 py-4 rounded-xl shadow-xl text-center">
            <div className="text-4xl font-bold">5000+</div>
            <div className="text-sm opacity-90">Projects Completed</div>
          </div>
          
        </div>
      </div>
    </section>
  )
}
