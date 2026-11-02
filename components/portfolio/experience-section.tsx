import { ArrowUpRight, GraduationCap, MapPin } from "lucide-react"
import { education, experience } from "@/lib/portfolio-data"
import { Reveal } from "./animations"
import { SectionHeading } from "./section-heading"

export function ExperienceSection() {
  return (
    <section aria-labelledby="experience-title" className="section-block section-block--tinted" id="experience">
      <div className="section-container">
        <Reveal>
          <SectionHeading
            description="Software, AI education, and pharmaceutical quality work — connected by a focus on clear systems and dependable outcomes."
            eyebrow="Experience & education"
            id="experience-title"
            title="Different disciplines. One quality mindset."
          />
        </Reveal>

        <div className="experience-layout">
          <div className="timeline-column">
            <h3 className="subsection-title">Professional experience</h3>
            <ol className="timeline-list">
              {experience.map((item) => (
                <li className={`timeline-item${item.current ? " timeline-item--current" : ""}`} key={`${item.role}-${item.company}`}>
                  <span className="timeline-marker" aria-hidden="true" />
                  <article className="timeline-card">
                    <div className="timeline-card-topline">
                      <span className="timeline-date">{item.date}</span>
                      {item.current ? <span className="current-label">Current</span> : null}
                    </div>
                    <h4>{item.role}</h4>
                    <p className="timeline-company">{item.company}</p>
                    <p className="timeline-focus">{item.focus}</p>
                    {item.topics ? (
                      <ul className="topic-list" aria-label="Teaching topics">
                        {item.topics.map((topic) => <li key={topic}>{topic}</li>)}
                      </ul>
                    ) : null}
                  </article>
                </li>
              ))}
            </ol>
          </div>

          <aside className="education-column" aria-label="Education">
            <h3 className="subsection-title">Academic foundation</h3>
            <Reveal>
              <article className="education-card">
                <div className="education-card-top">
                  <span className="education-icon"><GraduationCap aria-hidden="true" size={21} /></span>
                  <span className="education-mark">01 / DEGREE</span>
                </div>
                <p className="education-date">{education.date}</p>
                <h4>{education.degree}</h4>
                <p className="education-institution">{education.institution}</p>
                <div className="education-divider" />
                <p className="education-focus">{education.focus}</p>
                <div className="education-location">
                  <MapPin aria-hidden="true" size={14} />
                  Karachi, Pakistan
                </div>
              </article>
            </Reveal>
            <div className="experience-note">
              <span className="experience-note-mark" aria-hidden="true">↗</span>
              <p>
                My pharmaceutical background informs how I think about process, traceability,
                and trustworthy information in software.
              </p>
              <a className="text-link" href="#contact">
                Start a conversation
                <ArrowUpRight aria-hidden="true" size={15} />
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
