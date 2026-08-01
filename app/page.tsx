import { SiteNav } from "@/components/site-nav"
import { Hero } from "@/components/hero"
import { VisionSection } from "@/components/vision-section"
import { PrinciplesSection } from "@/components/principles-section"
import { BuildingSection } from "@/components/building-section"
import { WhyGajSection } from "@/components/why-gaj-section"
import { EarlyStageSection } from "@/components/early-stage-section"
import { ContactSection } from "@/components/contact-section"
import { SiteFooter } from "@/components/site-footer"
import { WhatsAppFloat } from "@/components/whatsapp"

export default function Page() {
  return (
    <>
      <a
        href="#top"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-navy focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-cream"
      >
        Skip to content
      </a>
      <SiteNav />
      <main>
        <Hero />
        <VisionSection />
        <PrinciplesSection />
        <BuildingSection />
        <WhyGajSection />
        <EarlyStageSection />
        <ContactSection />
      </main>
      <SiteFooter />
      <WhatsAppFloat />
    </>
  )
}
