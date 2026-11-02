type SectionHeadingProps = {
  id?: string
  eyebrow: string
  title: string
  description?: string
  centered?: boolean
}

export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  centered = false,
}: SectionHeadingProps) {
  return (
    <div className={`section-heading${centered ? " section-heading--center" : ""}`}>
      <p className="section-eyebrow">{eyebrow}</p>
      <h2 id={id}>{title}</h2>
      {description ? <p className="section-description">{description}</p> : null}
    </div>
  )
}
