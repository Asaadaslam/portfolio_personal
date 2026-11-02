import Image from "next/image"
import {
  ArrowDownRight,
  ArrowRight,
  CalendarDays,
  FileText,
  ShieldCheck,
  Sparkles,
} from "lucide-react"
import type { Project } from "@/lib/portfolio-data"

type ProjectPreviewProps = {
  project: Project
}

function AttendancePreview() {
  return (
    <div className="preview-dashboard">
      <div className="preview-sidebar">
        <span className="preview-sidebar-logo" />
        <span className="preview-sidebar-active" />
        <span />
        <span />
        <span />
        <span />
      </div>
      <div className="preview-main">
        <div className="preview-heading-lines">
          <span />
          <span />
        </div>
        <div className="preview-summary-row">
          <div className="preview-stat-card">
            <span className="preview-stat-icon"><CalendarDays size={13} /></span>
            <span className="preview-line preview-line--short" />
            <span className="preview-line preview-line--long" />
          </div>
          <div className="preview-stat-card">
            <span className="preview-stat-icon preview-stat-icon--accent"><ShieldCheck size={13} /></span>
            <span className="preview-line preview-line--short" />
            <span className="preview-line preview-line--long" />
          </div>
          <div className="preview-stat-card preview-stat-card--third">
            <span className="preview-stat-icon preview-stat-icon--muted"><ArrowDownRight size={13} /></span>
            <span className="preview-line preview-line--short" />
            <span className="preview-line preview-line--long" />
          </div>
        </div>
        <div className="preview-record-card">
          <div className="preview-record-heading">
            <span />
            <span />
            <span />
          </div>
          {[0, 1, 2].map((row) => (
            <div className="preview-record-row" key={row}>
              <span className="preview-avatar" />
              <span className="preview-record-name" />
              <span className="preview-record-detail" />
              <span className={`preview-record-state preview-record-state--${row}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function RagPreview() {
  return (
    <div className="preview-rag-scene">
      <div className="preview-document-card">
        <span className="preview-document-icon"><FileText size={16} /></span>
        <span className="preview-line preview-line--document" />
        <span className="preview-line preview-line--document preview-line--medium" />
        <span className="preview-line preview-line--document preview-line--short" />
        <div className="preview-document-paragraph">
          <span />
          <span />
          <span />
        </div>
      </div>
      <div className="preview-retrieval-path">
        <span className="preview-retrieval-node" />
        <span className="preview-retrieval-dash" />
        <span className="preview-retrieval-node preview-retrieval-node--active" />
      </div>
      <div className="preview-answer-card">
        <span className="preview-answer-label"><Sparkles size={12} /> Grounded response</span>
        <span className="preview-line preview-line--answer" />
        <span className="preview-line preview-line--answer preview-line--medium" />
        <span className="preview-source-chip"><span /> Source passage</span>
      </div>
    </div>
  )
}

function AgentPreview() {
  return (
    <div className="preview-agent-scene">
      <div className="preview-agent-prompt">
        <span className="preview-agent-spark"><Sparkles size={16} /></span>
        <span className="preview-line preview-line--long" />
        <span className="preview-line preview-line--medium" />
      </div>
      <div className="preview-agent-flow">
        <div className="preview-flow-node"><span className="preview-flow-node-icon" /><span /></div>
        <span className="preview-flow-connector"><ArrowRight size={14} /></span>
        <div className="preview-flow-node preview-flow-node--active"><span className="preview-flow-node-icon" /><span /></div>
        <span className="preview-flow-connector"><ArrowRight size={14} /></span>
        <div className="preview-flow-node"><span className="preview-flow-node-icon" /><span /></div>
      </div>
      <div className="preview-agent-footer">
        <span className="preview-agent-check" />
        <span className="preview-line preview-line--medium" />
        <span className="preview-approval-chip">Review step</span>
      </div>
    </div>
  )
}

function PharmaPreview() {
  return (
    <div className="preview-pharma-scene">
      <div className="preview-pharma-sidebar">
        <span className="preview-pharma-mark"><ShieldCheck size={17} /></span>
        <span />
        <span />
        <span />
      </div>
      <div className="preview-pharma-content">
        <div className="preview-pharma-heading">
          <span className="preview-line preview-line--medium" />
          <span className="preview-pharma-tag">Concept</span>
        </div>
        <div className="preview-pharma-document">
          <span className="preview-document-icon"><FileText size={15} /></span>
          <span className="preview-line preview-line--long" />
          <span className="preview-line preview-line--medium" />
          <span className="preview-line preview-line--short" />
        </div>
        <div className="preview-citation-card">
          <span className="preview-citation-mark" />
          <span className="preview-line preview-line--medium" />
          <span className="preview-line preview-line--short" />
        </div>
      </div>
    </div>
  )
}

function RamadanPreview() {
  return (
    <div className="preview-calendar-scene">
      <div className="preview-calendar-heading">
        <span className="preview-calendar-icon"><CalendarDays size={15} /></span>
        <span className="preview-line preview-line--medium" />
        <span className="preview-calendar-location" />
      </div>
      <div className="preview-calendar-grid">
        {Array.from({ length: 12 }, (_, index) => (
          <span
            className={`preview-calendar-cell${index === 5 ? " preview-calendar-cell--active" : ""}`}
            key={index}
          />
        ))}
      </div>
      <div className="preview-prayer-row">
        <span className="preview-prayer-mark" />
        <span className="preview-line preview-line--medium" />
        <span className="preview-line preview-line--short" />
      </div>
      <div className="preview-prayer-row preview-prayer-row--second">
        <span className="preview-prayer-mark" />
        <span className="preview-line preview-line--medium" />
        <span className="preview-line preview-line--short" />
      </div>
    </div>
  )
}

function PortfolioPreview() {
  return (
    <div className="preview-portfolio-scene">
      <div className="preview-portfolio-profile">
        <span className="preview-portfolio-avatar" />
        <span className="preview-line preview-line--medium" />
        <span className="preview-line preview-line--short" />
      </div>
      <div className="preview-portfolio-copy">
        <span className="preview-line preview-line--long" />
        <span className="preview-line preview-line--medium" />
        <span className="preview-portfolio-button" />
      </div>
      <div className="preview-portfolio-cards">
        <span />
        <span />
        <span />
      </div>
    </div>
  )
}

const previewLabels: Record<Project["visual"], string> = {
  attendance: "Academic workspace",
  rag: "Knowledge workspace",
  agent: "Workflow orchestration",
  pharma: "Pharma knowledge concept",
  ramadan: "Multi-city calendar",
  portfolio: "Personal brand system",
}

export function ProjectPreview({ project }: ProjectPreviewProps) {
  if (project.image) {
    return (
      <div aria-hidden="true" className={`project-preview project-preview--${project.visual}`}>
        <Image
          alt=""
          className="project-custom-image"
          fill
          sizes="(max-width: 560px) 100vw, 50vw"
          src={project.image}
        />
      </div>
    )
  }

  const scenes = {
    attendance: <AttendancePreview />,
    rag: <RagPreview />,
    agent: <AgentPreview />,
    pharma: <PharmaPreview />,
    ramadan: <RamadanPreview />,
    portfolio: <PortfolioPreview />,
  }

  return (
    <div
      aria-hidden="true"
      className={`project-preview project-preview--${project.visual}`}
    >
      <div className="preview-window">
        <div className="preview-chrome">
          <div className="preview-chrome-dots"><span /><span /><span /></div>
          <span>{previewLabels[project.visual]}</span>
          <span className="preview-chrome-mark" />
        </div>
        <div className="preview-scene">{scenes[project.visual]}</div>
      </div>
    </div>
  )
}
