import { ArrowUpRight, FlaskConical, Microscope, Workflow } from "lucide-react"
import { Reveal } from "./animations"
import { SectionHeading } from "./section-heading"

const perspectiveCards = [
  {
    icon: FlaskConical,
    label: "Industry context",
    title: "Pharmaceutical quality",
    detail: "Validation, documentation, and reliable process thinking.",
  },
  {
    icon: Microscope,
    label: "Academic lens",
    title: "Biochemistry",
    detail: "A scientific foundation for analytical problem-solving.",
  },
  {
    icon: Workflow,
    label: "Current focus",
    title: "Applied AI",
    detail: "Intelligent products designed around real workflows.",
  },
]

export function AboutSection() {
  return (
    <section aria-labelledby="about-title" className="section-block" id="about">
      <div className="section-container">
        <Reveal>
          <SectionHeading
            description="A career shaped by scientific curiosity, quality-first work, and a growing focus on intelligent software."
            eyebrow="About me"
            id="about-title"
            title="Where science meets software."
          />
        </Reveal>

        <div className="about-layout">
          <Reveal className="about-story">
            <p className="about-lead">
              My journey combines pharmaceutical industry experience, scientific education,
              software development, and artificial intelligence.
            </p>
            <p>
              With an academic background in Biochemistry and professional experience in
              pharmaceutical validation and quality operations, I developed a strong
              understanding of structured processes, quality systems, and analytical
              thinking.
            </p>
            <p>
              I later expanded into full-stack development and Agentic AI, focusing on
              building intelligent applications and practical solutions.
            </p>
            <p>
              Alongside development, I contribute to AI education through teaching and
              mentoring students in emerging AI technologies.
            </p>
            <a className="text-link" href="#experience">
              Explore my experience
              <ArrowUpRight aria-hidden="true" size={16} />
            </a>
          </Reveal>

          <Reveal className="perspective-grid" delay={0.08}>
            {perspectiveCards.map(({ icon: Icon, label, title, detail }, index) => (
              <article className="perspective-card" key={title}>
                <span className="perspective-index">0{index + 1}</span>
                <span className="perspective-icon">
                  <Icon aria-hidden="true" size={18} />
                </span>
                <div>
                  <p className="card-eyebrow">{label}</p>
                  <h3>{title}</h3>
                  <p>{detail}</p>
                </div>
              </article>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
