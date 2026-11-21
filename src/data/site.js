// =============================================================
// ALL SITE CONTENT LIVES HERE.
// Edit text, numbers, links and photos in this one file;
// the pages and components read from it automatically.
// =============================================================

export const site = {
  name: "Maheshwaran",
  role: "Solution AI Architect",
  location: "Chennai",
  links: {
    linkedin: "https://www.linkedin.com/in/maheshwaranvk/",
    substack: "https://substack.com/@maheshwaranvk",
    x: "https://x.com/maheshwaranvk",
    github: "https://github.com/maheshwaranvk",
    email: "mailto:vkmaheshwaran@gmail.com",
  },
  // Your Substack publication address (Substack > Settings). Subscribe forms send people here.
  substackPublication: "https://maheshwaranvk.substack.com",
  popup: { delaySeconds: 12, scrollPercent: 25, hideDays: 14 },
};

export const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/work-with-me", label: "Work with me" },
  { to: "/newsletter", label: "Newsletter" },
];

export const nowWorkingOn = [
  "multi-agent orchestration",
  "hybrid RAG pipelines",
  "LLM evaluation & guardrails",
  "MCP-powered agents",
  "teaching AI to 1,000+ engineers",
];

export const stats = [
  { icon: "briefcase", value: 15, suffix: "", label: "Years in industry", sub: "Banking · Healthcare · Linguistics" },
  { icon: "layers", value: 10, suffix: "+", label: "AI projects shipped", sub: "Agents · RAG · Evaluation pipelines" },
  { icon: "cap", value: 1000, suffix: "+", label: "Engineers & students trained", sub: "Colleges · Workshops · Conferences" },
];

export const tools = [
  "LangGraph", "CrewAI", "Model Context Protocol", "OpenAI", "Mistral", "Hybrid RAG", "GraphRAG",
  "BM25 + Vector", "Reranking", "DeepEval", "Guardrails", "Microsoft Presidio", "Prompt engineering",
  "Python", "Java", "Playwright", "CI/CD", "Vector databases",
];

// size: "conf" (row 1, large) | "uni" (row 2, featured) | "other" (row 3)
// badge style: "live" (green) | "star" (amber) | "" (white)
export const sessions = [
  { img: "navigo.jpg", size: "conf", badge: "Conference talk", style: "live", title: "Navigo DevOps & Testing Summit", sub: "Bangalore · Industry conference", alt: "Maheshwaran speaking on stage at Navigo DevOps and Testing Summit" },
  { img: "confq.jpg", size: "conf", badge: "Conference talk", style: "live", title: "ConfQ 2026 · AI & Testing", sub: "Bangalore · \"Testing the Tester\"", alt: "Maheshwaran presenting at ConfQ 2026", pos: "center 45%" },
  { img: "anna-chennai.jpg", size: "uni", badge: "Anna University", style: "star", title: "Anna University", sub: "Chennai · 5-day bootcamp", alt: "Maheshwaran addressing students at Anna University", pos: "center 35%" },
  { img: "srm.jpg", size: "uni", badge: "SRM University", style: "star", title: "SRM Institute of Science and Technology", sub: "Kattankulathur · Workshop", alt: "Maheshwaran lecturing at SRM University", pos: "center 60%" },
  { img: "virtual-vit.jpg", size: "uni", badge: "VIT University", style: "star", title: "VIT University", sub: "Agentic AI session · Online", alt: "Online agentic AI session for VIT University", pos: "70% center" },
  { img: "dsce.jpg", size: "other", badge: "1-day workshop", style: "", title: "Dhanalakshmi Srinivasan College of Engineering", sub: "ECR, Chennai · 1-day workshop", alt: "Maheshwaran teaching a full classroom", pos: "70% 55%" },
  { img: "virtual-anna-kanchipuram.jpg", size: "other", badge: "Online · Mentorship", style: "", title: "AI project mentorship", sub: "Anna University, Kanchipuram", alt: "Online AI project mentorship session" },
  { img: "virtual-ss-arts.jpg", size: "other", badge: "Online · 5-day workshop", style: "", title: "Placement & training workshop", sub: "SS Arts and Science College, Thiruthani", alt: "Online placement and training workshop" },
];

export const services = [
  { icon: "layers", title: "Architect", text: "End-to-end design of multi-agent systems and retrieval pipelines: model choice, embeddings, vector stores, orchestration and observability.", link: "/projects", linkText: "See the work" },
  { icon: "shield", title: "Advise", text: "Solution reviews, proposal support and AI readiness for teams who need their AI to be accurate, safe and compliant, not just impressive.", link: "/work-with-me", linkText: "Consulting" },
  { icon: "cap", title: "Teach", text: "Masterclasses and bootcamps for colleges, and one-to-one coaching for professionals moving into AI roles.", link: "/work-with-me#coaching", linkText: "Coaching & sessions" },
];

export const pipeline = [
  { title: "Design the agents", text: "Multi-agent workflows that plan, act and self-correct, with clear tool boundaries.", kw: "LangGraph · CrewAI · MCP" },
  { title: "Ground the answers", text: "Hybrid retrieval (keyword, vector and graph), reranking and context engineering.", kw: "BM25 + Vector · GraphRAG" },
  { title: "Measure everything", text: "Evaluation pipelines for faithfulness and hallucination, run before anything reaches users.", kw: "DeepEval · Human-in-the-loop" },
  { title: "Guard the edges", text: "PII protection, bias checks and guardrails, so outputs hold up to compliance review.", kw: "Presidio · Guardrails" },
];

export const journey = [
  { when: "2026 — Now", role: "Solution AI Architect", org: "Virtusa", text: "Architecting production-grade agentic AI and hybrid RAG systems for enterprise clients, owning design, evaluation and deployment. Lifted retrieval accuracy on a production system from 30% to 70% with hybrid search, semantic chunking, reranking and human-in-the-loop feedback." },
  { when: "2022 — 2026", role: "Senior Lead Engineer", org: "Elixr Labs Technologies", text: "Led engineering delivery, set best practices and mentored the team. Recognised for leadership in building and delivering agentic AI platforms.", award: "Most Valuable Professional" },
  { when: "2021 — 2022", role: "Senior Engineer", org: "Lionbridge Technologies", text: "Owned framework delivery and CI pipelines, and built an in-house failure-analysis tool that sped up result triage." },
  { when: "2013 — 2021", role: "Functional System Analyst", org: "Wipro", text: "Eight years across enterprise products, from financial systems to embedded medical devices, where I built an embedded web driver for device automation." },
];

export const expertise = [
  { key: "agents", title: "Agentic AI & orchestration", text: "Workflows that plan, execute and self-correct with minimal human intervention.", tags: ["LangGraph", "CrewAI", "MCP", "Tool calling"] },
  { key: "rag", title: "Advanced RAG & GraphRAG", text: "Lexical, vector and graph retrieval for grounded, explainable answers.", tags: ["BM25 + vector", "Knowledge graphs", "Reranking"] },
  { key: "eval", title: "LLM evaluation & safety", text: "Pipelines that catch hallucinations before they reach production.", tags: ["DeepEval", "Faithfulness", "PII & bias", "Guardrails"] },
  { key: "embed", title: "Embeddings & vector search", text: "Fast, accurate retrieval across structured and unstructured data.", tags: ["OpenAI", "Mistral", "Vector DBs"] },
  { key: "prompt", title: "Prompt & context engineering", text: "Reliable, cost-efficient outputs from every model call.", tags: ["Structured outputs", "Token optimisation"] },
  { key: "devops", title: "AI engineering & DevOps", text: "AI features shipped with production rigour: tested, automated, observable.", tags: ["Python", "Java", "CI/CD"] },
];

// Projects: shown on the Projects page.
//   code = GitHub repo · live = a link people can open
//   categories = the filter chips each project appears under (first one sets the card colour)
//   icon = leaf | bolt | book | checklist | cursor | swap
//   highlights = the four tiles on the dark panel
export const projectCategories = ["Agents", "RAG & Evaluation", "Computer Vision", "Automation"];

export const projects = [
  {
    tag: "Computer Vision · Multi-agent",
    title: "Paddy Doctor",
    text: "A farmer snaps a paddy leaf; a vision model spots the disease and a team of 8 agents explains the remedy and prevention in simple Tamil, with guardrails on every step.",
    stack: ["PyTorch MobileNetV3", "Multi-agent", "GPT-4o", "FastAPI"],
    code: "https://github.com/maheshwaranvk/paddy-doctor",
    categories: ["Computer Vision", "Agents"],
    icon: "leaf",
    highlights: [
      { value: "10", label: "diseases & pests detected" },
      { value: "85.4%", label: "validation accuracy" },
      { value: "8", label: "agents with guardrails" },
      { value: "தமிழ்", label: "answers by text or voice" },
    ],
  },
  {
    tag: "Daily AI digest",
    title: "Tech Shorts",
    text: "A daily feed of AI news as short swipeable cards, with save-for-later and one-tap LinkedIn post drafts.",
    stack: ["Daily automation", "Summarisation"],
    live: "https://claude.ai/artifact/XsZW6M4U1cC6J49ACyqSmt",
    categories: ["Automation"],
    icon: "bolt",
    highlights: [
      { value: "Daily", label: "fresh AI news digest" },
      { value: "Swipe", label: "short news cards" },
      { value: "Save", label: "stories for later" },
      { value: "1-tap", label: "LinkedIn post drafts" },
    ],
  },
  {
    tag: "RAG · Evaluation",
    title: "ExamSmith",
    text: "Generates exam-ready questions from textbooks and past papers, with an evaluation layer that checks faithfulness and hallucination.",
    stack: ["FastAPI", "Hybrid RAG", "MongoDB", "React"],
    code: "https://github.com/maheshwaranvk/ExamSmith",
    categories: ["RAG & Evaluation"],
    icon: "book",
    highlights: [
      { value: "6", label: "evaluation checks per output" },
      { value: "Hybrid", label: "BM25 + vector retrieval" },
      { value: "JSON", label: "schema-validated questions" },
      { value: "3", label: "user roles, JWT secured" },
    ],
  },
  {
    tag: "Hybrid RAG · Test generation",
    title: "TestGenie",
    text: "Turns user stories into test cases, grounded in similar past cases found with hybrid search and reranking.",
    stack: ["MongoDB Vector Search", "BM25", "Mistral", "Groq"],
    code: "https://github.com/maheshwaranvk/userStory-to-testCase",
    categories: ["RAG & Evaluation"],
    icon: "checklist",
    highlights: [
      { value: "Hybrid", label: "BM25 + vector search" },
      { value: "Rerank", label: "results scored with Groq" },
      { value: "1024", label: "dimension Mistral embeddings" },
      { value: "XLSX", label: "bulk import from Excel" },
    ],
  },
  {
    tag: "Agents · MCP",
    title: "No-Code UI Automation",
    text: "Write a test in plain Gherkin; an AI agent runs it in the browser and generates readable Playwright code.",
    stack: ["Playwright", "MCP", "TypeScript"],
    code: "https://github.com/maheshwaranvk/noCodeAutomationToolUsingPlaywright",
    categories: ["Agents", "Automation"],
    icon: "cursor",
    highlights: [
      { value: "Gherkin", label: "tests in plain English" },
      { value: "MCP", label: "agent drives the browser" },
      { value: "Code", label: "readable Playwright generated" },
      { value: "2", label: "ways to run: CLI or REST API" },
    ],
  },
  {
    tag: "LLM code migration",
    title: "Selenium → Playwright Converter",
    text: "Java pipeline where an LLM rewrites existing Selenium tests as Playwright and drops them into the suite.",
    stack: ["Java", "Groq", "DeepSeek R1"],
    code: "https://github.com/maheshwaranvk/GenAISeleniumToPlaywright",
    categories: ["Automation"],
    icon: "swap",
    highlights: [
      { value: "Selenium", label: "existing tests in" },
      { value: "Playwright", label: "converted tests out" },
      { value: "R1", label: "DeepSeek via Groq" },
      { value: "Java", label: "pipeline into the suite" },
    ],
  },
];

export const programs = [
  { len: "3 hours", title: "AI Masterclass", text: "A high-level, high-energy tour of where AI is today and where careers are heading. Ideal for a large audience.", points: ["GenAI, LLMs and SLMs explained simply", "Prompting that actually works", "RAG and agents, with live examples"] },
  { len: "Full day · Hands-on", title: "AI Bootcamp", featured: true, text: "Morning theory, afternoon building. Students leave having made something real with AI.", points: ["Everything in the masterclass", "Hands-on labs: RAG, agents, AI coding tools", "Vibe coding and agentic AI in practice"] },
  { len: "5 days · Capstone", title: "AI Engineering Bootcamp", text: "A deep, structured program that ends with each team presenting a working capstone project.", points: ["Everything in the full-day bootcamp", "Graph RAG, MCP and multi-agent systems", "Capstone project with review and feedback"] },
];

export const topics = [
  "Generative AI fundamentals", "LLMs & SLMs", "Prompt engineering", "RAG & Graph RAG", "Agentic AI",
  "Multi-agent systems", "Model Context Protocol (MCP)", "AI coding tools & vibe coding", "Playwright + AI",
  "Evaluating AI output", "AI careers & placements",
];

export const coachingSteps = [
  { title: "Where you are", text: "A first conversation about your background, goals and the role you want next." },
  { title: "Your roadmap", text: "A focused learning plan: the skills that matter for your target role, in the right order." },
  { title: "Build proof", text: "One or two portfolio projects, reviewed like real production work, that show what you can do." },
  { title: "Get hired", text: "LinkedIn, resume, interview practice and how to talk about your AI work with confidence." },
];

// Newsletter reading list: add new picks at the top.
export const readingList = [
  {
    kind: "Podcast",
    title: "Why AI will replace these jobs, and the skills you need next",
    url: "https://www.youtube.com/watch?v=8ol3j7o1U7o",
    source: "Figuring Out with Raj Shamani · guest Sachin Puri, CEO of Newfold Digital",
    summary: "Puri expects most web traffic to come from AI agents, not people. Websites now have to be readable by agents: clean structure, verified identity, and an agent of their own to talk to other agents.",
    take: "The jobs most at risk are the ones that only move data around: reports, dashboards, slide decks. The skill that survives is knowing which question to ask.",
  },
];

// About page: institutions (each gets its own photo card). Photos live in public/assets/sessions/
export const institutions = [
  { name: "Anna University", place: "Chennai", type: "5-day bootcamp", img: "anna-chennai.jpg", pos: "center 35%", featured: true },
  { name: "SRM Institute of Science and Technology", place: "Kattankulathur", type: "Workshop", img: "srm.jpg", pos: "center 60%", featured: true },
  { name: "VIT University", place: "Online", type: "Agentic AI session", img: "virtual-vit.jpg", pos: "70% center", featured: true },
  { name: "Anna University", place: "Kanchipuram", type: "AI project mentorship", img: "virtual-anna-kanchipuram.jpg" },
  { name: "Dhanalakshmi Srinivasan College of Engineering", place: "ECR, Chennai", type: "1-day workshop", img: "dsce.jpg", pos: "70% 55%" },
  { name: "SS Arts and Science College", place: "Thiruthani", type: "5-day placement workshop", img: "virtual-ss-arts.jpg" },
];

export const conferences = [
  { name: "ConfQ 2026 · AI & Testing", place: "Bangalore", img: "confq.jpg", pos: "center 45%" },
  { name: "Navigo DevOps & Testing Summit", place: "Bangalore", img: "navigo.jpg" },
];

// Home page logo strip. Save each logo file in public/assets/logos/ with the file name below
// (PNG or SVG with a transparent background works best). Until a file exists, the college
// name is shown in its place automatically. `caption` adds the name beside crest-only logos.
export const collegeLogos = [
  { name: "Anna University", short: "Anna University", file: "anna-university.png", caption: ["Anna University", "Chennai"] },
  { name: "SRM Institute of Science and Technology", short: "SRM IST", file: "srm.png" },
  { name: "VIT University", short: "VIT", file: "vit.png" },
  { name: "Dhanalakshmi Srinivasan College of Engineering", short: "Dhanalakshmi Srinivasan", file: "dsce.png", caption: ["Dhanalakshmi Srinivasan", "College of Engineering"] },
  { name: "SS Arts and Science College", short: "SS Arts & Science", file: "ss-arts.png", caption: ["SS Arts & Science", "College, Thiruthani"] },
];
