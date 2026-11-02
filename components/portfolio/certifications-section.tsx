import Image from "next/image"
import { ArrowUpRight, Award, BrainCircuit, ShieldCheck } from "lucide-react"
import { certifications } from "@/lib/portfolio-data"
import { Reveal } from "./animations"
import { SectionHeading } from "./section-heading"

const credentialIcons = [ShieldCheck, BrainCircuit, Award]

export function CertificationsSection() {
  return (
    <section aria-labelledby="certifications-title" className="section-block" id="certifications">
      <div className="section-container">
        <Reveal>
          <SectionHeading
            description="Professional learning across quality systems, AI fluency, and digital work."
            eyebrow="Certifications"
            id="certifications-title"
            title="Continually learning, across domains."
          />
        </Reveal>

        <div className="certifications-grid">
          {certifications.map((credential, index) => {
            const Icon = credentialIcons[index]

            return (
              <Reveal className="credential-card-wrap" delay={index * 0.05} key={credential.name}>
                <article className="credential-card">
                  <div className="credential-card-top">
                    {credential.image ? (
                      <Image
                        alt={`${credential.name} certificate`}
                        className="credential-image"
                        height={48}
                        src={credential.image}
                        width={72}
                      />
                    ) : (
                      <span className="credential-icon"><Icon aria-hidden="true" size={20} /></span>
                    )}
                    <span className="credential-index">0{index + 1}</span>
                  </div>
                  <p className="card-eyebrow">{credential.type}</p>
                  <h3>{credential.name}</h3>
                  <p className="credential-issuer">{credential.issuer}</p>
                  {credential.credentialUrl ? (
                    <a className="credential-link" href={credential.credentialUrl} rel="noreferrer" target="_blank">
                      View credential
                      <ArrowUpRight aria-hidden="true" size={14} />
                    </a>
                  ) : null}
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
