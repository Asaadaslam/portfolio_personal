import Image from "next/image"
import { ArrowDownRight, ArrowUpRight, Code2, Mail, MapPin, Network } from "lucide-react"
import { profile } from "@/lib/portfolio-data"

const portraitUrl =
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/passport%20pic%20size%20-%20Copy-KUvgXDzB7WeeEvEUC6trWUSkSWl6eh.jpeg"

const socialLinks = [
  { label: "LinkedIn", href: profile.linkedin, icon: Network },
  { label: "GitHub", href: profile.github, icon: Code2 },
  { label: "Email", href: `mailto:${profile.email}`, icon: Mail },
]

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="hero-section" id="home">
      <div className="hero-grid section-container">
        <div className="hero-copy">
          <p className="hero-kicker">
            <span className="status-indicator" aria-hidden="true" />
            Building practical intelligence from Karachi
          </p>
          <h1 className="hero-title" id="hero-title">
            Muhammad
            <span>Asaad.</span>
          </h1>
          <p className="hero-role">
            Agentic AI Developer <span aria-hidden="true">/</span> Full Stack Developer
            <span aria-hidden="true">/</span> AI Educator
          </p>
          <p className="hero-intro">{profile.intro}</p>

          <div className="hero-actions">
            <a className="button button-primary" href="#projects">
              Explore My Work
              <ArrowDownRight aria-hidden="true" size={17} />
            </a>
            <a className="button button-secondary" href="#contact">
              Let&apos;s Connect
              <ArrowUpRight aria-hidden="true" size={16} />
            </a>
          </div>

          <div className="hero-social-row" aria-label="Social links">
            <span className="hero-social-label">Find me on</span>
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a
                aria-label={label}
                className="social-icon-link"
                href={href}
                key={label}
                rel={label === "Email" ? undefined : "noreferrer"}
                target={label === "Email" ? undefined : "_blank"}
              >
                <Icon aria-hidden="true" size={17} />
              </a>
            ))}
          </div>
        </div>

        <div className="hero-visual">
          <div className="portrait-orbit portrait-orbit--one" aria-hidden="true" />
          <div className="portrait-orbit portrait-orbit--two" aria-hidden="true" />
          <div className="portrait-frame">
            <div className="portrait-topline">
              <span>PROFILE / 01</span>
              <span className="portrait-live-dot" aria-hidden="true" />
            </div>
            <div className="portrait-image-wrap">
              <Image
                alt="Professional portrait of Muhammad Asaad"
                className="portrait-image"
                height={945}
                preload
                sizes="(max-width: 760px) 84vw, (max-width: 1100px) 42vw, 420px"
                src={portraitUrl}
                width={709}
              />
              <div className="portrait-gradient" aria-hidden="true" />
              <div className="portrait-caption">
                <div>
                  <strong>{profile.name}</strong>
                  <span>AI · Full-stack · Education</span>
                </div>
                <span className="portrait-location">
                  <MapPin aria-hidden="true" size={13} />
                  Karachi
                </span>
              </div>
            </div>
          </div>
          <div className="orbit-note orbit-note--top" aria-hidden="true">
            <span className="orbit-note-mark">AI</span>
            <span>Intelligent systems</span>
          </div>
          <div className="orbit-note orbit-note--bottom" aria-hidden="true">
            <span className="orbit-note-mark orbit-note-mark--cyan">&lt;/&gt;</span>
            <span>Thoughtful software</span>
          </div>
        </div>
      </div>

      <div className="hero-footline section-container">
        <span className="hero-footline-label">A multidisciplinary practice</span>
        <div className="hero-disciplines">
          <span>Agentic AI</span>
          <span>Full-stack engineering</span>
          <span>AI education</span>
          <span>Pharmaceutical quality</span>
        </div>
      </div>
    </section>
  )
}
