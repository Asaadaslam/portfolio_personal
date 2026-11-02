import { BrainCircuit, Code2, Layers3 } from "lucide-react"
import { skillGroups } from "@/lib/portfolio-data"
import { Reveal } from "./animations"
import { SectionHeading } from "./section-heading"

const skillIcons = {
  code: Code2,
  brain: BrainCircuit,
  layers: Layers3,
}

export function SkillsSection() {
  return (
    <section aria-labelledby="skills-title" className="section-block section-block--tinted" id="skills">
      <div className="section-container">
        <Reveal>
          <SectionHeading
            description="A cross-functional toolkit for designing, building, and explaining practical digital products."
            eyebrow="Capabilities"
            id="skills-title"
            title="Skills built around useful outcomes."
          />
        </Reveal>

        <div className="skills-grid">
          {skillGroups.map((group, index) => {
            const Icon = skillIcons[group.icon]

            return (
              <Reveal className="skill-card-wrap" delay={index * 0.04} key={group.title}>
                <article className="skill-card">
                  <div className="skill-card-heading">
                    <span className="skill-icon">
                      <Icon aria-hidden="true" size={20} />
                    </span>
                    <span className="skill-card-index">0{index + 1}</span>
                  </div>
                  <h3>{group.title}</h3>
                  <p className="skill-summary">{group.summary}</p>
                  <ul className="skill-list" aria-label={group.title}>
                    {group.skills.map((skill) => (
                      <li key={skill}>{skill}</li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
