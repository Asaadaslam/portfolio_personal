import { MessageCircle } from "lucide-react"
import { Navbar } from "./navbar"
import { Hero } from "./hero"
import { AboutSection } from "./about-section"
import { SkillsSection } from "./skills-section"
import { ProjectsSection } from "./projects-section"
import { ExperienceSection } from "./experience-section"
import { CertificationsSection } from "./certifications-section"
import { ServicesSection } from "./services-section"
import { ContactSection } from "./contact-section"
import { Footer } from "./footer"
import { profile } from "@/lib/portfolio-data"

export function PortfolioPage() {
  return (
    <div className="portfolio-site">
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <CertificationsSection />
        <ServicesSection />
        <ContactSection />
      </main>
      <Footer />
      <a
        aria-label="Chat with Muhammad Asaad on WhatsApp"
        className="floating-whatsapp"
        href={profile.whatsapp}
        rel="noreferrer"
        target="_blank"
      >
        <MessageCircle aria-hidden="true" size={24} />
        <span className="floating-whatsapp-tooltip">Chat on WhatsApp</span>
      </a>
    </div>
  )
}
