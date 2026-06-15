// =============================================================================
// SINGLE SOURCE OF TRUTH for all site content. Edit text here.
//
// This is a PUBLIC site: client work is described generically (no client names,
// no confidential project specifics). Customers are referred to by industry +
// scale only ("Fortune-50 automotive / telecom").
// =============================================================================

export const profile = {
  name: "Aman Patel",
  role: "Forward-Deployed AI Engineer",
  location: "Toronto, Canada",
  availability: "TN-visa eligible · Open to US relocation",
  email: "pateljaman@outlook.com",
  github: "https://github.com/aman9824",
  linkedin: "https://www.linkedin.com/in/amanjpatel",
  portfolio: "https://amanpatel.vercel.app",
  resumeHref: "/Aman_Patel_Resume.pdf",
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const hero = {
  eyebrow: "Forward-Deployed AI Engineer · Applied AI",
  // words wrapped in *asterisks* render as gradient highlights
  headline: "I ship *production GenAI* where the customer lives.",
  sub: "Customer-embedded software engineer with 4 years building for Fortune-50 enterprises. I build production multi-agent systems on Claude — discovery to deployment — that modernize legacy systems and cut real cost.",
  highlights: [
    "Multi-agent GenAI on Claude (Claude Agent SDK, LangGraph)",
    "MCP servers · sub-agents · agent skills",
    "Evaluation frameworks + prompt-cache cost telemetry",
    "Python · Java/Spring Boot · TypeScript · AWS · GCP · OpenShift",
  ],
};

export const stats: { value: string; label: string }[] = [
  { value: "4+ yrs", label: "Shipping production software" },
  { value: "2", label: "Fortune-50 enterprises embedded with" },
  { value: "~40%", label: "Manual effort cut with multi-agent GenAI" },
  { value: "3", label: "Open-source AI projects live" },
];

export const marquee: string[] = [
  "Claude",
  "Claude Agent SDK",
  "MCP",
  "LangGraph",
  "CrewAI",
  "RAG",
  "Evals",
  "Python",
  "TypeScript",
  "Java",
  "Spring Boot",
  "AWS",
  "GCP",
  "Vertex AI",
  "OpenShift",
  "Kubernetes",
  "Kafka",
  "PostgreSQL",
];

export const about = {
  heading: "The Forward-Deployed pattern, by default",
  paragraphs: [
    "I'm a customer-embedded software engineer who specializes in deploying generative AI inside large enterprises. For the past year and a half I've built production multi-agent GenAI for a Fortune-50 automotive customer's legacy-modernization program — running on Claude (Claude Agent SDK, Claude Code, and Claude models via Vertex AI), with structured retrieval, evaluation-driven iteration, and production observability on OpenShift + GCP. We've cut targeted manual effort by ~40%.",
    "Before that I spent 27 months at Amdocs as a customer-embedded full-stack engineer on a Fortune-50 US telecom account — running discovery directly with the carrier's teams and shipping React + Spring Boot services on AWS + OpenShift, cutting downtime ~30% and incident-resolution time ~20%.",
    "What I bring isn't just “I know Claude.” It's the full loop — own the customer relationship, the architecture, and the production deployment end-to-end, then codify what's repeatable. I've worked this way for four years.",
  ],
};

export type Project = {
  title: string;
  status: "Live" | "Shipping soon";
  blurb: string;
  tags: string[];
  repo?: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    title: "Finance — AI Filings Analyst",
    status: "Live",
    blurb:
      "A multi-agent Claude system that ingests 10-K / 10-Q and earnings reports and extracts KPIs and risk signals with span-level citations — RAG-grounded and eval-gated for accuracy. Built for the financial-services vertical.",
    tags: ["Claude Agent SDK", "RAG", "Citations", "Evals", "Python"],
    repo: "https://github.com/aman9824/finance-filings-analyst",
  },
  {
    title: "Real Estate — Investment Analyzer",
    status: "Live",
    blurb:
      "Turns property listings and comparables into investment memos — cap rate, cash-on-cash, IRR — with agent reasoning and cited assumptions. The same Claude stack, applied to a second vertical.",
    tags: ["Claude Agent SDK", "Multi-agent", "RAG", "Financial modeling"],
    repo: "https://github.com/aman9824/real-estate-analyzer",
  },
  {
    title: "FactorForge — Auditable Quant-Research Engine",
    status: "Live",
    blurb:
      "Capstone: turns quant-finance research (papers, filings, news) into an evidence-linked knowledge graph using vectorless retrieval — no embeddings; the model navigates document structure + graph traversal, and every fact is cited. A Claude multi-agent pipeline then researches, hypothesizes, and backtests factor strategies with a built-in overfitting critic. MCP-served, eval-gated. Research/educational — not financial advice.",
    tags: ["Claude Agent SDK", "Vectorless RAG", "Knowledge graph", "MCP", "Backtesting", "Evals"],
    repo: "https://github.com/aman9824/factorforge",
  },
  {
    title: "This Portfolio",
    status: "Live",
    blurb:
      "Designed and built from scratch in Next.js — animated, fast, and fully responsive. The site you're reading is itself the project.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    repo: "https://github.com/aman9824",
    demo: "https://amanpatel.vercel.app",
  },
];

export type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  customer?: string;
  bullets: string[];
};

export const experience: Experience[] = [
  {
    company: "Cascade Cloud Tech",
    role: "Software Engineer — GenAI (Contract)",
    period: "Jan 2025 — Present",
    location: "Toronto, ON (Remote)",
    customer: "Fortune-50 automotive customer",
    bullets: [
      "Architected a multi-agent system on Claude (Claude Agent SDK, LangGraph, with Google ADK) plus structured retrieval (RAG) that automates large-scale legacy system modernization — cutting targeted manual effort ~40%.",
      "Ran discovery directly with the customer's engineering teams; translated business and system requirements into shippable architecture.",
      "Built and operate the production deployment on Vertex AI + OpenShift across Claude and Gemini models — invocation, retrieval, observability, and cost telemetry.",
    ],
  },
  {
    company: "16597629 Canada Inc.",
    role: "Software Developer (Freelance)",
    period: "May 2024 — Dec 2024",
    location: "Toronto, ON",
    bullets: [
      "Delivered cloud-native backend services in Java 17, Spring Boot, Spring Security, and Hibernate on OpenShift + GCP for an enterprise modernization program.",
      "Designed microservices for modularity and high availability with pub/sub patterns; integrated Splunk + Dynatrace for logging and performance monitoring.",
    ],
  },
  {
    company: "Amdocs",
    role: "Software Developer",
    period: "Jan 2022 — Apr 2024",
    location: "Mississauga, ON",
    customer: "Fortune-50 US telecom carrier",
    bullets: [
      "Customer-embedded engineer partnering directly with the carrier's teams — discovery, technical specs, and shipping to production.",
      "Built resilient React micro-frontends backed by Node.js / Spring Boot microservices on AWS + OpenShift.",
      "Reduced production downtime ~30% and cut incident-resolution time ~20% through hands-on triage and clear stakeholder comms.",
    ],
  },
  {
    company: "Equifax",
    role: "Quality Automation Engineer",
    period: "Jul 2021 — Jan 2022",
    location: "Toronto, ON",
    customer: "Credit-risk scoring platform (fintech)",
    bullets: [
      "Built Selenium + JUnit automation in CI/CD/CT pipelines, lifting defect detection ~15% and cutting test-cycle time ~20%.",
      "Implemented functional + non-functional automation (performance, reliability, security).",
    ],
  },
  {
    company: "The Graduate Network",
    role: "Software Developer Intern",
    period: "Jan 2021 — Jun 2021",
    location: "Toronto, ON",
    bullets: [
      "Built full-stack web-application features as clean, testable code; collaborated with senior developers on code reviews, testing, and debugging (IntelliJ, Kibana).",
    ],
  },
  {
    company: "Microsoft",
    role: "Microsoft Learn Student Ambassador",
    period: "Jan 2021 — May 2021",
    location: "Ontario, Canada",
    bullets: [
      "Selected as 1 of ~40 Canadian ambassadors from thousands of global applicants.",
      "Ran enablement sessions explaining Azure to university peers; gathered requirements and trained others.",
    ],
  },
];

export const skills: { label: string; items: string[] }[] = [
  {
    label: "AI / LLM Engineering",
    items: [
      "Anthropic Claude",
      "Claude Agent SDK",
      "Claude Code",
      "Multi-Agent Systems",
      "Model Context Protocol (MCP)",
      "LangGraph",
      "CrewAI",
      "RAG",
      "Prompt Engineering",
      "LLM Evaluation",
      "LangChain",
      "Google ADK",
      "Gemini",
      "Vertex AI",
      "Amazon Bedrock",
    ],
  },
  {
    label: "Languages",
    items: ["Python", "Java", "TypeScript", "JavaScript", "SQL"],
  },
  {
    label: "Backend & Architecture",
    items: [
      "Spring Boot",
      "FastAPI",
      "Node.js",
      "Microservices",
      "REST APIs",
      "Apache Kafka",
      "System Design",
    ],
  },
  {
    label: "Cloud & DevOps",
    items: ["AWS", "Google Cloud", "OpenShift", "Docker", "Kubernetes", "CI/CD"],
  },
  {
    label: "Data",
    items: ["PostgreSQL", "Oracle", "Elasticsearch", "Redis", "Couchbase"],
  },
];

export const certifications = {
  primary: ["AWS Certified Cloud Practitioner"],
  academy: [
    "Building with the Claude API",
    "Introduction to Model Context Protocol",
    "MCP: Advanced Topics",
    "Introduction to Sub-agents",
    "Introduction to Agent Skills",
    "Claude Code in Action",
    "Claude with Vertex AI",
    "Claude with Amazon Bedrock",
  ],
  coursework: [
    "Building RAG Applications",
    "Vector Databases for RAG",
    "AWS (Amplify CLI, A-to-Z)",
    "Docker for Developers",
  ],
};
