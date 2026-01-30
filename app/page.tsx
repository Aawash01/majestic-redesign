import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/home/hero-section"
import { ServicesPreview } from "@/components/home/services-preview"
import { GalleryPreview } from "@/components/home/gallery-preview"
import { WhyChooseUs } from "@/components/home/why-choose-us"
import { CTASection } from "@/components/home/cta-section"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ServicesPreview />
        <GalleryPreview />
        <WhyChooseUs />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
