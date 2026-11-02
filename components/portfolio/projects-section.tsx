import { ArrowUpRight, Code2, ShieldCheck } from "lucide-react"
import { projects } from "@/lib/portfolio-data"
import { Reveal } from "./animations"
import { ProjectPreview } from "./project-preview"
import { SectionHeading } from "./section-heading"

export function ProjectsSection() {
  return (
    <section aria-labelledby="projects-title" className="section-block" id="projects">
      <div className="section-container">
        <Reveal>
          <SectionHeading
            description="A selection of software projects and AI explorations. Live links are included only where they are available."
            eyebrow="Selected work"
            id="projects-title"
            title="Building useful things, thoughtfully."
          />
        </Reveal>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <Reveal
              className={`project-card-wrap${index === 0 || index === projects.length - 1 ? " project-card-wrap--wide" : ""}`}
              delay={Math.min(index * 0.035, 0.14)}
              key={project.number}
            >
              <article className="project-card">
                <ProjectPreview project={project} />
                <div className="project-content">
                  <div className="project-meta-row">
                    <span className="project-number">PROJECT / {project.number}</span>
                    {project.status ? (
                      <span
                        className={`project-status${project.status === "Concept / In Development" ? " project-status--concept" : ""}`}
                      >
                        <span aria-hidden="true" />
                        {project.status}
                      </span>
                    ) : null}
                  </div>
                  <p className="project-category">{project.category}</p>
                  <h3>{project.title}</h3>
                  <p className="project-description">{project.description}</p>

                  {project.note ? (
                    <p className="project-note">
                      <ShieldCheck aria-hidden="true" size={14} />
                      {project.note}
                    </p>
                  ) : null}

                  <ul className="project-tags" aria-label={`${project.title} focus areas`}>
                    {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
                  </ul>

                  {project.github || project.demo ? (
                    <div className="project-links">
                      {project.github ? (
                        <a href={project.github} rel="noreferrer" target="_blank">
                          <Code2 aria-hidden="true" size={15} />
                          GitHub
                        </a>
                      ) : null}
                      {project.demo ? (
                        <a href={project.demo} rel="noreferrer" target="_blank">
                          Live demo
                          <ArrowUpRight aria-hidden="true" size={15} />
                        </a>
                      ) : null}
                    </div>
                  ) : null}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
