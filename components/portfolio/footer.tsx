import { ArrowUp, Code2, Mail, Network } from "lucide-react"
import { profile } from "@/lib/portfolio-data"

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="footer-inner section-container">
        <div className="footer-identity">
          <a className="footer-name" href="#home">{profile.name}</a>
          <p>{profile.headline}</p>
        </div>
        <div className="footer-links" aria-label="Social links">
          <a aria-label="LinkedIn" href={profile.linkedin} rel="noreferrer" target="_blank">
            <Network aria-hidden="true" size={17} />
          </a>
          <a aria-label="GitHub" href={profile.github} rel="noreferrer" target="_blank">
            <Code2 aria-hidden="true" size={17} />
          </a>
          <a aria-label="Email" href={`mailto:${profile.email}`}>
            <Mail aria-hidden="true" size={17} />
          </a>
          <a className="back-to-top" href="#home">
            Back to top
            <ArrowUp aria-hidden="true" size={14} />
          </a>
        </div>
        <p className="footer-copyright">© {year} {profile.name}. All rights reserved.</p>
      </div>
    </footer>
  )
}
