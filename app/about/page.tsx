import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  Award,
  Users,
  Clock,
  Shield,
  Target,
  Heart,
  ArrowRight,
  CheckCircle,
} from "lucide-react"

export const metadata: Metadata = {
  title: "About Us | Majestic Painting Sydney - Professional House Painters",
  description:
    "Learn about Majestic Painting - Sydney's trusted residential and commercial painting professionals with over 15 years of experience. Expert tips, FAQs, and painting insights.",
  keywords: [
    "house painters Sydney",
    "professional painting services",
    "residential painters",
    "commercial painters Sydney",
    "interior painting",
    "exterior painting",
    "painting contractors NSW",
    "Majestic Painting",
  ],
}

const values = [
  {
    icon: Target,
    title: "Quality First",
    description:
      "We never compromise on quality. Every project receives our full attention and the highest standard of workmanship.",
  },
  {
    icon: Heart,
    title: "Customer Focus",
    description:
      "Your satisfaction is our priority. We listen, communicate clearly, and deliver results that exceed expectations.",
  },
  {
    icon: Shield,
    title: "Integrity",
    description:
      "Honest pricing, transparent communication, and reliable service. We stand behind every job we complete.",
  },
  {
    icon: Clock,
    title: "Reliability",
    description:
      "We show up on time, work efficiently, and always meet our deadlines. Your time is valuable to us.",
  },
]

const stats = [
  { value: "15+", label: "Years Experience" },
  { value: "5000+", label: "Projects Completed" },
  { value: "100%", label: "Satisfaction Rate" },
  { value: "500+", label: "5-Star Reviews" },
]

const team = [
  {
    name: "Michael Thompson",
    role: "Founder & Lead Painter",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
    bio: "With over 20 years in the industry, Michael founded Majestic Painting to deliver exceptional quality to Sydney homeowners.",
  },
  {
    name: "Sarah Chen",
    role: "Operations Manager",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop",
    bio: "Sarah ensures every project runs smoothly, coordinating our team and keeping clients informed every step of the way.",
  },
  {
    name: "David Martinez",
    role: "Senior Painter",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop",
    bio: "David brings 15 years of expertise to every job, specializing in detailed finishes and heritage restorations.",
  },
]

const blogPosts = [
  {
    title: "How to Choose the Right Paint Colour for Your Sydney Home",
    excerpt: "Selecting the perfect paint colour can be overwhelming. Learn our expert tips for choosing colours that complement Sydney's unique light conditions and architectural styles.",
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2070&auto=format&fit=crop",
    date: "January 15, 2026",
    readTime: "5 min read",
    category: "Tips & Advice",
  },
  {
    title: "Interior vs Exterior Paint: What's the Difference?",
    excerpt: "Understanding the key differences between interior and exterior paints is crucial for a lasting finish. We break down the science behind paint formulations and when to use each type.",
    image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?q=80&w=2031&auto=format&fit=crop",
    date: "January 8, 2026",
    readTime: "4 min read",
    category: "Education",
  },
  {
    title: "The Benefits of Professional House Painting Services",
    excerpt: "While DIY painting might seem cost-effective, professional painters deliver superior results. Discover why hiring experts like Majestic Painting saves you time, money, and stress.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2032&auto=format&fit=crop",
    date: "December 28, 2025",
    readTime: "6 min read",
    category: "Industry Insights",
  },
]

const paintingTips = [
  {
    title: "Surface Preparation is Key",
    content: "The secret to a flawless paint job lies in thorough preparation. Before any paint touches your walls, our team meticulously cleans, sands, fills holes and cracks, and primes surfaces. This essential groundwork ensures paint adheres properly and lasts for years without peeling or bubbling. Skipping preparation is the most common mistake in DIY painting projects.",
  },
  {
    title: "Understanding Paint Finishes",
    content: "Different rooms require different paint finishes. Flat and matte finishes hide imperfections and work well for ceilings and low-traffic areas. Eggshell and satin finishes offer a subtle sheen perfect for living rooms and bedrooms. Semi-gloss and gloss finishes are ideal for kitchens, bathrooms, and trim as they're easy to clean and resist moisture.",
  },
  {
    title: "Colour Psychology in Home Design",
    content: "Colours profoundly affect mood and perception. Blues and greens create calm, relaxing environments ideal for bedrooms. Warm yellows and oranges energize spaces like kitchens and dining rooms. Neutral tones provide versatility and make rooms feel larger. Our colour consultants help you choose palettes that achieve your desired atmosphere.",
  },
  {
    title: "Weather Considerations for Exterior Painting",
    content: "Sydney's climate significantly impacts exterior painting projects. Ideal painting conditions are between 10-30°C with low humidity and no rain forecast for 24-48 hours. Spring and autumn typically offer the best conditions. We carefully monitor weather patterns to ensure optimal application and drying for lasting results.",
  },
]

const faqs = [
  {
    question: "How long does a typical house painting project take?",
    answer: "The duration depends on the project size and scope. A single room typically takes 1-2 days, while a full interior repaint of an average Sydney home takes 4-7 days. Exterior painting usually requires 5-10 days depending on the home's size and condition. We provide accurate timelines during our free quote consultation.",
  },
  {
    question: "What type of paint do you use?",
    answer: "We exclusively use premium quality paints from trusted Australian brands like Dulux, Taubmans, and Haymes. These paints offer superior coverage, durability, and colour retention. We select the appropriate paint type (water-based or oil-based) based on the surface and location. All our paints are low-VOC for better indoor air quality.",
  },
  {
    question: "Do you offer colour consultation services?",
    answer: "Yes! Our experienced colour consultants help you navigate the thousands of available colours to find the perfect palette for your space. We consider factors like natural light, room size, existing furnishings, and your personal style. This complimentary service ensures you're confident in your colour choices before we begin.",
  },
  {
    question: "Are you fully licensed and insured?",
    answer: "Absolutely. Majestic Painting is fully licensed and carries comprehensive insurance including public liability and workers' compensation. This protects both our team and your property. We're also members of the Master Painters Association, demonstrating our commitment to industry standards.",
  },
  {
    question: "How do you protect furniture and floors during painting?",
    answer: "We take extensive precautions to protect your belongings. This includes moving furniture to the centre of rooms and covering with drop sheets, laying protective coverings on floors, masking off fixtures and fittings, and sealing doorways to prevent dust spread. After completion, we thoroughly clean up, leaving your space spotless.",
  },
  {
    question: "What preparation work is included in your service?",
    answer: "Comprehensive preparation is included in every quote. This covers washing and cleaning surfaces, sanding rough areas, filling cracks and holes, scraping loose paint, applying primer where needed, and caulking gaps. Proper preparation is essential for a professional, long-lasting finish.",
  },
]

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-muted py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                  About Us
                </span>
                <h1 className="text-4xl sm:text-5xl font-bold text-foreground mt-3 mb-6 text-balance">
                  Sydney&apos;s Trusted Painting Professionals
                </h1>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  For over 10 years, Majestic Painting has been transforming homes and businesses across Sydney with exceptional painting services. Our commitment to quality, reliability, and customer satisfaction has made us a trusted name in the industry.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We believe that a fresh coat of paint can do more than just change the look of a space—it can transform how you feel in it. That&apos;s why we approach every project with care, precision, and a genuine passion for our craft.
                </p>
              </div>
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2070&auto=format&fit=crop"
                    alt="Majestic Painting team at work"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-primary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-4xl sm:text-5xl font-bold text-primary-foreground mb-2">
                    {stat.value}
                  </div>
                  <div className="text-primary-foreground/80">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Our Values
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-3 mb-4 text-balance">
                What Drives Us
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Our core values guide everything we do, from how we treat our customers to the quality of work we deliver.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value) => (
                <div key={value.title} className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-5">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="py-20 lg:py-28 bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Our Team
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-3 mb-4 text-balance">
                Meet the Experts
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Our skilled team brings years of experience and a passion for painting to every project.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {team.map((member) => (
                <div
                  key={member.name}
                  className="bg-card rounded-xl overflow-hidden border border-border"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-1">
                      {member.name}
                    </h3>
                    <p className="text-primary font-medium text-sm mb-3">
                      {member.role}
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1562259949-e8e7689d7828?q=80&w=2031&auto=format&fit=crop"
                    alt="Quality painting workmanship"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div>
                <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                  Why Choose Us
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-3 mb-6 text-balance">
                  The Majestic Difference
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  When you choose Majestic Painting, you&apos;re choosing a team that cares about your project as much as you do. Here&apos;s what sets us apart:
                </p>
                <ul className="space-y-4">
                  {[
                    "Free detailed quotes with no hidden costs",
                    "Premium quality paints and materials",
                    "Thorough surface preparation for lasting results",
                    "Clean and respectful work practices",
                    "Full insurance and workmanship guarantee",
                    "Clear communication throughout your project",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Painting Tips & Knowledge Section */}
        <section className="py-20 lg:py-28 bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Expert Knowledge
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-3 mb-4 text-balance">
                Professional Painting Tips & Insights
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                With over 15 years of experience painting Sydney homes and businesses, we&apos;ve gathered valuable insights to help you understand what makes a great paint job.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {paintingTips.map((tip) => (
                <article key={tip.title} className="bg-card rounded-xl p-8 border border-border">
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    {tip.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {tip.content}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Posts Section */}
        <section className="py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Latest Articles
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-3 mb-4 text-balance">
                Painting News & Advice
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Stay informed with the latest painting trends, tips, and industry insights from our expert team.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <article key={post.title} className="bg-card rounded-xl overflow-hidden border border-border group cursor-pointer">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                        {post.category}
                      </span>
                      <span className="text-xs text-muted-foreground">{post.readTime}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {post.excerpt}
                    </p>
                    <p className="text-xs text-muted-foreground">{post.date}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Our Process Section */}
        <section className="py-20 lg:py-28 bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                How We Work
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-3 mb-4 text-balance">
                Our Proven Painting Process
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We follow a systematic approach to ensure every project meets our high standards and exceeds your expectations.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Consultation",
                  description: "We visit your property, discuss your vision, assess the scope of work, and provide a detailed, no-obligation quote. This is also where we offer our complimentary colour consultation service.",
                },
                {
                  step: "02",
                  title: "Preparation",
                  description: "Our team thoroughly prepares all surfaces including cleaning, sanding, filling, and priming. We protect your furniture, floors, and fixtures with premium drop sheets and masking.",
                },
                {
                  step: "03",
                  title: "Painting",
                  description: "Using premium paints and professional techniques, we apply multiple coats for a flawless, even finish. We work efficiently while maintaining the highest quality standards.",
                },
                {
                  step: "04",
                  title: "Final Inspection",
                  description: "We conduct a thorough walkthrough with you, address any touch-ups needed, clean up completely, and ensure you're 100% satisfied before the project is complete.",
                },
              ].map((item) => (
                <div key={item.step} className="bg-card rounded-xl p-8 border border-border relative">
                  <span className="text-6xl font-bold text-primary/10 absolute top-4 right-4">
                    {item.step}
                  </span>
                  <h3 className="text-xl font-semibold text-foreground mb-3 relative">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed relative">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                FAQs
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-3 mb-4 text-balance">
                Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Find answers to common questions about our painting services, process, and what to expect when working with Majestic Painting.
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-6">
              {faqs.map((faq) => (
                <div key={faq.question} className="bg-card rounded-xl p-6 border border-border">
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Areas Section */}
        <section className="py-20 lg:py-28 bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                  Service Areas
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-3 mb-6 text-balance">
                  Proudly Serving Greater Sydney
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Majestic Painting provides professional painting services across the entire Sydney metropolitan area. Whether you&apos;re in the heart of the CBD, the Northern Beaches, Western Sydney, or the Southern suburbs, our team is ready to transform your space.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  We understand the unique character of different Sydney neighbourhoods and tailor our recommendations accordingly. From heritage homes in the Inner West to modern apartments in Parramatta, we have the expertise to handle any project.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {[
                    "Sydney CBD",
                    "North Sydney",
                    "Eastern Suburbs",
                    "Inner West",
                    "Northern Beaches",
                    "Western Sydney",
                    "Parramatta",
                    "Sutherland Shire",
                    "Hills District",
                  ].map((area) => (
                    <div key={area} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                      <span className="text-foreground text-sm">{area}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop"
                    alt="Sydney Harbour Bridge and city skyline"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 lg:py-28 bg-primary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-4 text-balance">
              Ready to Work With Us?
            </h2>
            <p className="text-primary-foreground/90 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              Contact us today to discuss your painting project. We&apos;d love to help bring your vision to life.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">
                Get in Touch
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
