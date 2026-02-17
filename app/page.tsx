"use client"

import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { MarqueeSection } from "@/components/marquee-section"
import { ProcessSection } from "@/components/process-section"
import { ExpertiseSection } from "@/components/expertise-section"
import { ProjectsSection } from "@/components/projects-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import { SectionDivider } from "@/components/section-divider"
import { PageLoader } from "@/components/page-loader"
import { CustomCursor } from "@/components/custom-cursor"

export default function Home() {
  return (
    <>
      <PageLoader />
      <CustomCursor />
      <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
        <Navbar />
        <HeroSection />
        <MarqueeSection />
        <SectionDivider />
        <ProcessSection />
        <SectionDivider />
        <ExpertiseSection />
        <SectionDivider />
        <ProjectsSection />
        <SectionDivider />
        <ContactSection />
        <Footer />
        <ScrollToTop />
      </main>
    </>
  )
}
