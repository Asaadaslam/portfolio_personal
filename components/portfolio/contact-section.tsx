import {
  ArrowUpRight,
  Code2,
  Network,
  Mail,
  MapPin,
  MessageCircle,
} from "lucide-react"
import { profile } from "@/lib/portfolio-data"
import { Reveal } from "./animations"
import { SectionHeading } from "./section-heading"

const contactLinks = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, icon: Mail },
  { label: "WhatsApp", value: profile.phone, href: profile.whatsapp, icon: MessageCircle },
  { label: "LinkedIn", value: "Professional profile", href: profile.linkedin, icon: Network },
  { label: "GitHub", value: "Code and projects", href: profile.github, icon: Code2 },
]

export function ContactSection() {
  return (
    <section aria-labelledby="contact-title" className="section-block contact-section" id="contact">
      <div className="section-container">
        <Reveal>
          <SectionHeading
            centered
            description="Whether you're exploring an AI-powered application, need a modern web solution, or want to discuss a collaboration, feel free to reach out."
            eyebrow="Get in touch"
            id="contact-title"
            title="Have an Idea? Let's Build Something Intelligent."
          />
        </Reveal>

        <Reveal className="contact-panel" delay={0.08}>
          <div className="contact-panel-copy">
            <span className="contact-availability">
              <span aria-hidden="true" />
              Open to thoughtful collaborations
            </span>
            <h3>Let&apos;s make the next idea useful.</h3>
            <p>
              Share what you&apos;re working on. I&apos;d be glad to talk through the product,
              the workflow, or the AI behind it.
            </p>
            <div className="contact-actions">
              <a
                className="button button-whatsapp"
                href={profile.whatsapp}
                rel="noreferrer"
                target="_blank"
              >
                <MessageCircle aria-hidden="true" size={17} />
                Message me on WhatsApp
                <ArrowUpRight aria-hidden="true" size={16} />
              </a>
              <a className="button button-secondary" href={`mailto:${profile.email}`}>
                <Mail aria-hidden="true" size={16} />
                Send an email
              </a>
            </div>
          </div>

          <div className="contact-details">
            <p className="contact-details-label">Connect directly</p>
            {contactLinks.map(({ label, value, href, icon: Icon }) => (
              <a
                className="contact-detail-link"
                href={href}
                key={label}
                rel={label === "Email" ? undefined : "noreferrer"}
                target={label === "Email" ? undefined : "_blank"}
              >
                <span className="contact-detail-icon"><Icon aria-hidden="true" size={17} /></span>
                <span className="contact-detail-copy">
                  <span>{label}</span>
                  <strong>{value}</strong>
                </span>
                <ArrowUpRight aria-hidden="true" className="contact-detail-arrow" size={15} />
              </a>
            ))}
            <div className="contact-location">
              <MapPin aria-hidden="true" size={16} />
              <span>{profile.location}</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
