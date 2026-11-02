import {
  Bot,
  Braces,
  GraduationCap,
  Layers3,
  MessageSquareText,
  Workflow,
} from "lucide-react"
import { services } from "@/lib/portfolio-data"
import { Reveal } from "./animations"
import { SectionHeading } from "./section-heading"

const serviceIcons = {
  agent: Bot,
  chat: MessageSquareText,
  workflow: Workflow,
  code: Braces,
  web: Layers3,
  education: GraduationCap,
}

export function ServicesSection() {
  return (
    <section aria-labelledby="services-title" className="section-block section-block--tinted" id="services">
      <div className="section-container">
        <Reveal>
          <SectionHeading
            description="Ways I can help bring a useful, well-considered digital product from idea to implementation."
            eyebrow="Services"
            id="services-title"
            title="From a clear problem to a working product."
          />
        </Reveal>

        <div className="services-grid">
          {services.map((service, index) => {
            const Icon = serviceIcons[service.icon as keyof typeof serviceIcons]

            return (
              <Reveal className="service-card-wrap" delay={(index % 3) * 0.04} key={service.title}>
                <article className="service-card">
                  <div className="service-icon"><Icon aria-hidden="true" size={19} /></div>
                  <span className="service-index">0{index + 1}</span>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
