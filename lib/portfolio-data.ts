export const profile = {
  name: "Muhammad Asaad",
  headline: "Agentic AI Developer | Full Stack Developer | AI Educator",
  intro:
    "I build intelligent AI-powered applications, autonomous agent systems, and modern web experiences. My work combines software engineering, agentic AI, and practical AI education.",
  location: "Karachi, Pakistan",
  email: "muhammadasaad30@gmail.com",
  phone: "+923272836739",
  linkedin: "https://www.linkedin.com/in/muhammad-asaad-aslam",
  github: "https://github.com/Asaadaslam",
  whatsapp:
    "https://wa.me/923272836739?text=Hi%20Asaad%2C%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project.",
}

export const navigationItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
]

export type SkillGroup = {
  title: string
  summary: string
  icon: "code" | "brain" | "layers"
  skills: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Programming & Development",
    summary: "Building blocks for modern web products and APIs.",
    icon: "code",
    skills: [
      "Python",
      "TypeScript",
      "JavaScript",
      "Next.js",
      "Full-Stack Development",
      "REST APIs",
    ],
  },
  {
    title: "Agentic AI & Generative AI",
    summary: "From grounded knowledge experiences to connected workflows.",
    icon: "brain",
    skills: [
      "Agentic AI Development",
      "Generative AI",
      "Prompt Engineering",
      "RAG Systems",
      "AI Application Development",
      "AI Workflow Automation",
    ],
  },
  {
    title: "Tools & Technologies",
    summary: "A practical toolkit across product and data layers.",
    icon: "layers",
    skills: [
      "Git",
      "GitHub",
      "FastAPI",
      "Tailwind CSS",
      "PostgreSQL",
      "MongoDB",
    ],
  },
]

export type Project = {
  number: string
  title: string
  category: string
  description: string
  status?: string
  tags: string[]
  visual: "attendance" | "rag" | "agent" | "pharma" | "ramadan" | "portfolio"
  image?: string
  github?: string
  demo?: string
  note?: string
}

export const projects: Project[] = [
  {
    number: "01",
    title: "ChronosSync",
    category: "Attendance Management System",
    description:
      "A full-stack academic attendance platform with admin, teacher, and student dashboards. Documented workflows cover attendance by date and subject, timetables, leave requests, and records backed by an Express and MongoDB API.",
    status: "Live project",
    tags: ["React", "Vite", "Express", "MongoDB"],
    visual: "attendance",
    github: "https://github.com/Asaadaslam/ChronosSync_attendance_system",
    demo: "https://chronos-sync-attendance-system.vercel.app",
  },
  {
    number: "02",
    title: "RAG-Based Document Assistant",
    category: "Knowledge retrieval",
    description:
      "A document assistant experience for exploring uploaded material, retrieving relevant passages, and producing context-aware answers grounded in source content.",
    tags: ["RAG", "Embeddings", "Semantic search", "Source-grounded answers"],
    visual: "rag",
  },
  {
    number: "03",
    title: "AI Workflow Automation Agent",
    category: "Agentic systems",
    description:
      "An agentic application concept for translating natural-language instructions into structured, multi-step work across connected tools, with review points where human approval matters.",
    tags: ["Agentic AI", "Tool integration", "Workflow state", "Human review"],
    visual: "agent",
  },
  {
    number: "04",
    title: "Health & Pharma Knowledge Assistant",
    category: "Healthcare knowledge retrieval",
    description:
      "A proposed RAG assistant for exploring trusted pharmaceutical and healthcare documents through source-linked, context-aware answers. It is intended for information retrieval, not diagnosis or treatment decisions.",
    status: "Concept / In Development",
    tags: ["Pharma documents", "RAG", "Information retrieval", "Citations"],
    visual: "pharma",
    note: "Knowledge exploration only — not for diagnosis or prescribing.",
  },
  {
    number: "05",
    title: "Ramadan Calendar Platform",
    category: "Location-based schedules",
    description:
      "A responsive calendar experience for presenting Ramadan schedules and prayer timings across multiple cities, with location as the organizing context.",
    tags: ["Multi-city", "Prayer timings", "Ramadan schedules", "Responsive UI"],
    visual: "ramadan",
  },
  {
    number: "06",
    title: "Portfolio Websites",
    category: "Personal brand experiences",
    description:
      "A collection of responsive portfolio websites for professionals, focused on clear personal branding, experience, skills, and selected work. The collection is designed to grow as more examples are added.",
    tags: ["Personal branding", "Responsive UI", "Professional profiles", "Web design"],
    visual: "portfolio",
  },
]

export type Experience = {
  role: string
  company: string
  date: string
  focus: string
  topics?: string[]
  current?: boolean
}

export const experience: Experience[] = [
  {
    role: "Lead AI Instructor",
    company: "Governor Sindh AI Summer Program 2026",
    date: "June 2026 — Present",
    focus:
      "Teaching practical AI concepts and helping students apply modern AI technologies.",
    topics: [
      "AI Prompting",
      "Prompt Engineering",
      "Loop Engineering",
      "Harness Engineering",
      "Graph Engineering",
    ],
    current: true,
  },
  {
    role: "Full Stack Developer",
    company: "Freelance",
    date: "August 2023 — Present",
    focus:
      "Developing full-stack web applications, APIs, and AI-powered product experiences.",
    current: true,
  },
  {
    role: "Senior Executive Validation",
    company: "Getz Pharma",
    date: "January 2024 — November 2024",
    focus:
      "Process and cleaning validation, equipment qualification, thermal mapping, OOS/OOT investigations, and CAPA.",
  },
  {
    role: "Executive Validation",
    company: "Getz Pharma",
    date: "April 2022 — January 2024",
    focus:
      "Validation protocols and reports, equipment qualification (IQ, OQ, PQ), and pharmaceutical quality operations.",
  },
  {
    role: "Senior Quality Control Officer",
    company: "Nabiqasim Group",
    date: "February 2021 — April 2022",
    focus:
      "Raw material and finished product testing, stability studies, analytical testing, and laboratory documentation.",
  },
  {
    role: "Validation Officer",
    company: "Pharmatec Pakistan",
    date: "June 2019 — February 2021",
    focus:
      "Process, equipment, cleaning, and method validation across pharmaceutical production areas.",
  },
]

export const education = {
  degree: "MSc Biochemistry",
  institution: "University of Karachi",
  date: "January 2018 — December 2018",
  focus:
    "Clinical Biochemistry, Molecular Biology, Biotechnology, and Molecular Biochemistry.",
}

export type Certification = {
  name: string
  issuer: string
  type: string
  image?: string
  credentialUrl?: string
}

export const certifications: Certification[] = [
  {
    name: "ISO 9001 Lead Auditor",
    issuer: "Exemplar Global",
    type: "Quality systems",
  },
  {
    name: "AI Fluency: Framework & Foundations",
    issuer: "Anthropic",
    type: "Artificial intelligence",
  },
  {
    name: "Freelancing & Digital Marketing",
    issuer: "Bano Qabil Karachi",
    type: "Professional development",
  },
]

export const services = [
  {
    title: "Agentic AI Application Development",
    description:
      "Build task-oriented AI applications that connect models, tools, and clear user workflows.",
    icon: "agent",
  },
  {
    title: "AI Chatbot & RAG Development",
    description:
      "Turn documents and knowledge sources into grounded conversational experiences.",
    icon: "chat",
  },
  {
    title: "AI Workflow Automation",
    description:
      "Design structured, reviewable AI-assisted workflows for multi-step work.",
    icon: "workflow",
  },
  {
    title: "Full-Stack Web Development",
    description:
      "Develop responsive web products across interfaces, APIs, and data layers.",
    icon: "code",
  },
  {
    title: "Custom Web Application Development",
    description:
      "Create focused digital tools shaped around your team, product, and users.",
    icon: "web",
  },
  {
    title: "AI Training & Education",
    description:
      "Teach practical AI concepts, prompt engineering, and emerging agent workflows.",
    icon: "education",
  },
]
