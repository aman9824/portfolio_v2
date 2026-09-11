// =============================================================================
// SINGLE SOURCE OF TRUTH for all site content. Edit text here.
//
// This is a PUBLIC site: client work is described generically (no client names,
// no confidential project specifics). Customers are referred to by industry +
// scale only ("Fortune-50 automotive / telecom").
//
// Integrity rule: no metric appears here unless it was actually measured.
// Where a number is n=1 or scoped, that scope is stated inline.
// =============================================================================

export const profile = {
  name: "Aman Patel",
  role: "Forward-Deployed AI Engineer · Backend & Distributed Systems",
  location: "Toronto, Canada",
  availability:
    "Canadian citizen · TN-eligible for US roles · Open to relocation",
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
  sub: "Customer-embedded software engineer, five years building for Fortune-50 enterprises. I build production multi-agent systems on Claude — discovery to deployment — on a foundation of Java/Spring Boot microservices and distributed-systems production ownership. The second half is what makes the first half reliable.",
  highlights: [
    "Multi-agent GenAI on Claude (Claude Agent SDK, LangGraph)",
    "MCP servers · retrieval grounding · test-case-driven evals",
    "Java 17 · Spring Boot · Kafka · Kubernetes · OpenShift",
    "2+ years production on-call: concurrency, locking, index performance",
  ],
};

export const stats: { value: string; label: string }[] = [
  { value: "5+ yrs", label: "Shipping production software" },
  { value: "2", label: "Fortune-50 enterprises embedded with" },
  { value: "6mo → 6wk", label: "Pilot app: manual baseline vs GenAI-assisted" },
  { value: "4", label: "Open-source AI projects live" },
];

export const marquee: string[] = [
  "Claude",
  "Claude Agent SDK",
  "MCP",
  "LangGraph",
  "RAG",
  "Evals",
  "Python",
  "TypeScript",
  "Java 17",
  "Spring Boot",
  "Concurrency",
  "AWS",
  "GCP",
  "Vertex AI",
  "OpenShift",
  "Kubernetes",
  "Kafka",
  "Elasticsearch",
  "PostgreSQL",
];

export const about = {
  heading: "The Forward-Deployed pattern, by default",
  paragraphs: [
    "I'm a customer-embedded software engineer who specializes in deploying generative AI inside large enterprises. Since January 2025 I've built production multi-agent GenAI for a Fortune-50 automotive customer's legacy-modernization program — running on Claude (Claude Agent SDK, Claude Code, and Claude models via Vertex AI), converting legacy mainframe COBOL/JCL into Java 17 Spring Boot services. Hybrid lexical + dense retrieval over Elasticsearch keeps generated code grounded in the customer's own source rather than model priors, and test-case-driven evaluation gates what ships. On the pilot application, delivery fell from roughly six months on the prior all-manual baseline to roughly six weeks.",
    "Before that I spent 27 months at Amdocs as a customer-embedded full-stack engineer on a Fortune-50 US telecom account — running discovery directly with the carrier's teams and shipping React + Spring Boot services on AWS + OpenShift. Just over two of those years were on a 24/7 on-call rotation, owning production incident triage: concurrency and race conditions, lock contention, and database index performance, diagnosed live under load with incomplete information.",
    "What I bring isn't just “I know Claude.” It's the full loop — own the customer relationship, the architecture, and the production deployment end-to-end, then codify what's repeatable. Plenty of people can call an LLM API; far fewer can reason about why a distributed system fails at 3am, and that turns out to be exactly the skill production GenAI needs. I've worked this way for five years.",
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
      "A multi-agent Claude system that extracts KPIs and risk signals from 10-K / 10-Q filings with span-level citations. The design problem: an LLM asked to read a filing will produce confident numbers that aren't in the document — so a separate citation verifier re-reads the cited span and rejects any claim it doesn't support. Hybrid BM25 + dense retrieval, because filings are full of exact terms embeddings miss. Eval thresholds enforced in CI. Personal engineering exercise; not financial advice.",
    tags: ["Claude", "RAG", "Citations", "Evals", "Python"],
    repo: "https://github.com/aman9824/finance-filings-analyst",
  },
  {
    title: "YTC — Dual-Engine Research Platform",
    status: "Live",
    blurb:
      "A paper-trading research platform built around one architectural rule: no model in the hot path. Slow, Claude-driven narrative analysis runs on one path; a completely separate deterministic execution engine makes the decisions, gated by arithmetic risk checks. The C++ risk gate is exposed through pybind11 and parity-tested against the Python reference, so the fast path is provably equivalent to the readable one. The backtester replays the exact live decision path rather than a reimplementation of it. Sandbox only — not financial advice.",
    tags: ["C++ / pybind11", "asyncio", "FastAPI", "Backtesting", "Evals"],
    repo: "https://github.com/aman9824/ytc",
  },
  {
    title: "FactorForge — Auditable Research Engine",
    status: "Live",
    blurb:
      "Answers questions over a document corpus without using embeddings at all. Instead of vector similarity it navigates documents directly with an LLM and traverses a knowledge graph built from what it finds, so every fact carries a span-level citation and the retrieval path is auditable end-to-end. The trade-off is deliberate: slower per query than a vector store, but you can show exactly why a fact was retrieved — which is what an audit trail actually requires. Served as a standalone MCP server. Research/educational — not financial advice.",
    tags: [
      "MCP",
      "Vectorless retrieval",
      "Knowledge graph",
      "Multi-agent",
      "Evals",
    ],
    repo: "https://github.com/aman9824/factorforge",
  },
  {
    title: "Real Estate — Investment Analyzer",
    status: "Live",
    blurb:
      "Generates investment memos — cap rate, cash-on-cash, IRR — through a staged pipeline: Researcher, then Underwriter, then Reviewer. The rule the whole design enforces is that the language models never perform arithmetic. Every number originates from a deterministic, unit-tested finance core exposed to the agents as a tool, and the orchestrator independently re-verifies each figure against that core. Agents decide what to compute; they never compute it. Not financial advice.",
    tags: ["Claude", "Multi-agent", "Tool use", "Deterministic core", "Python"],
    repo: "https://github.com/aman9824/real-estate-analyzer",
  },
  {
    title: "This Portfolio",
    status: "Live",
    blurb:
      "Designed and built from scratch in Next.js — animated, fast, and fully responsive. The site you're reading is itself the project.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    repo: "https://github.com/aman9824/portfolio_v2",
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
      "Designed and built a production multi-agent system (Python, Claude Agent SDK, LangGraph) with structured retrieval that converts legacy mainframe COBOL/JCL into Java 17 Spring Boot services. On the pilot application, delivery fell from roughly six months on the prior all-manual baseline to roughly six weeks (measured on one application).",
      "Own the target Java architecture the generated output has to conform to — service boundaries, interfaces, and coding standards — alongside the pipeline that produces it.",
      "Built the retrieval layer: hybrid lexical and dense search over Elasticsearch with chunking and query rewriting, so generated code is grounded in the customer's own source and standards rather than model priors.",
      "Ran discovery directly with the customer's engineering teams; translated ambiguous business and system requirements into written technical specifications, and gated output accuracy on test-case-driven evaluation.",
      "Deployed and operate the system on Vertex AI + OpenShift as distributed services on Kubernetes — model invocation, retrieval, error handling, retries, and structured logging.",
    ],
  },
  {
    company: "16597629 Canada Inc.",
    role: "Software Developer (Freelance)",
    period: "May 2024 — Dec 2024",
    location: "Toronto, ON",
    bullets: [
      "Delivered cloud-native backend services in Java 17, Spring Boot, Spring Security, and Hibernate on OpenShift + GCP for an enterprise modernization program.",
      "Designed microservices around pub/sub messaging for real-time data flow and high availability; configured OpenShift Deployments, Services, and Routes.",
      "Tuned application performance through multi-threading and memory management; automated operational tasks with Unix shell scripting.",
      "Integrated Splunk + Dynatrace for logging and performance monitoring; ran code reviews and mentored junior developers.",
    ],
  },
  {
    company: "Amdocs",
    role: "Software Developer",
    period: "Jan 2022 — Apr 2024",
    location: "Mississauga, ON",
    customer: "Fortune-50 US telecom carrier",
    bullets: [
      "Spent just over two years on the 24/7 on-call rotation owning production incident triage for high-throughput Java/Spring services on AWS + OpenShift — diagnosing concurrency and race conditions, lock contention, and database index performance under live load.",
      "Customer-embedded engineer partnering directly with the carrier's teams across three countries — discovery, technical specs, and shipping to production.",
      "Built resilient React micro-frontends backed by Node.js / Spring Boot microservices, end-to-end from analysis and design through implementation and support.",
      "Documented system components and architecture designs against security, integration, and operability standards; tracked analysis and delivery in Jira and Confluence.",
    ],
  },
  {
    company: "Equifax",
    role: "Quality Automation Engineer",
    period: "Jul 2021 — Jan 2022",
    location: "Toronto, ON",
    customer: "Credit-risk scoring platform (fintech)",
    bullets: [
      "Built Selenium + JUnit automation in CI/CD/CT pipelines for a regulated credit-risk scoring platform, covering functional and non-functional behaviour (performance, reliability, security).",
      "Designed and maintained manual and automated test suites with traceability matrices derived from business requirements, design specs, and architecture blueprints.",
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
      "Selected as one of approximately 40 ambassadors across Canada.",
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
      "Hybrid Retrieval",
      "Prompt Engineering",
      "LLM Evaluation",
      "LangChain",
      "Gemini",
      "Vertex AI",
      "Amazon Bedrock",
    ],
  },
  {
    label: "Languages",
    items: [
      "Python",
      "Java (JDK 17)",
      "TypeScript",
      "JavaScript",
      "C++",
      "SQL",
      "Bash",
    ],
  },
  {
    label: "Backend & Architecture",
    items: [
      "Core Java",
      "Spring Boot",
      "Spring Security",
      "Hibernate",
      "FastAPI",
      "Node.js",
      "Microservices",
      "REST APIs",
      "Apache Kafka",
      "Event-Driven Architecture",
      "Concurrency & Multi-threading",
      "Distributed Systems",
      "System Design",
    ],
  },
  {
    label: "Cloud & DevOps",
    items: [
      "AWS",
      "Google Cloud",
      "OpenShift",
      "Docker",
      "Kubernetes",
      "Helm",
      "Linux",
      "CI/CD",
      "Jenkins",
      "GitHub Actions",
    ],
  },
  {
    label: "Data",
    items: ["PostgreSQL", "Oracle", "Elasticsearch", "Redis", "Couchbase"],
  },
  {
    label: "Testing & Observability",
    items: ["JUnit", "pytest", "Selenium", "Splunk", "Dynatrace", "Kibana"],
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
    "Become a Spring Boot Developer",
    "Kubernetes: Package Management with Helm",
    "Learn Apache Kafka for Beginners",
    "Building RAG Applications",
    "Vector Databases for RAG",
    "AWS (Amplify CLI, A-to-Z)",
    "Docker for Developers",
  ],
};
