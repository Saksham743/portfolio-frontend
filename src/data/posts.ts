export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  status: "published" | "coming-soon";
  date?: string;
}

export const posts: Post[] = [
  {
    slug: "ai-employee-architecture",
    title: "The anatomy of a production AI employee",
    excerpt:
      "Most 'AI agents' are a prompt in a while-loop. Here's the architecture we actually ship: bounded autonomy, typed tools, eval suites, and tracing — and why each layer exists.",
    category: "Architecture",
    readTime: "12 min",
    status: "coming-soon",
  },
  {
    slug: "n8n-vs-temporal",
    title: "n8n vs. Temporal: choosing your automation backbone",
    excerpt:
      "One is a visual integration layer your ops team can read. The other is durable execution for workflows that must never lose state. A decision framework from real projects.",
    category: "Workflow Automation",
    readTime: "9 min",
    status: "coming-soon",
  },
  {
    slug: "mcp-internal-tools",
    title: "Model Context Protocol for internal tools",
    excerpt:
      "MCP turns your internal systems into typed, permissioned tools any agent can use safely. A practical walkthrough of building your first MCP server for a real workflow.",
    category: "Model Context Protocol",
    readTime: "10 min",
    status: "coming-soon",
  },
  {
    slug: "evals-before-launch",
    title: "Why we won't ship an agent without an eval suite",
    excerpt:
      "If you can't measure an agent's quality, you can't improve it — and you definitely can't trust it with customers. How we build regression suites from historical cases.",
    category: "AI Engineering",
    readTime: "8 min",
    status: "coming-soon",
  },
  {
    slug: "langgraph-state-machines",
    title: "LangGraph in production: state machines over vibes",
    excerpt:
      "Agent loops fail in creative ways. Explicit state machines fail in debuggable ways. Patterns we use for checkpoints, retries, and human handoff in LangGraph.",
    category: "LangGraph",
    readTime: "11 min",
    status: "coming-soon",
  },
  {
    slug: "prompts-are-code",
    title: "Prompts are code. Version them like it.",
    excerpt:
      "Prompt changes are deploys. They need diffs, reviews, evals, and rollbacks. The lightweight prompt-ops setup we install on every project.",
    category: "Prompt Engineering",
    readTime: "7 min",
    status: "coming-soon",
  },
  {
    slug: "automation-audit-playbook",
    title: "The automation audit: finding your 100 wasted hours",
    excerpt:
      "A step-by-step playbook for mapping where your team's week actually goes, scoring workflows for automation fit, and sequencing the roadmap by ROI and risk.",
    category: "Automation Playbooks",
    readTime: "14 min",
    status: "coming-soon",
  },
  {
    slug: "integration-failure-modes",
    title: "Eight ways integrations fail silently (and how to catch all of them)",
    excerpt:
      "Schema drift, cursor loss, rate-limit decay, timezone bugs. The failure catalog we design against on every integration project, with detection patterns for each.",
    category: "Integrations",
    readTime: "10 min",
    status: "coming-soon",
  },
  {
    slug: "hiring-vs-building",
    title: "When to hire a human and when to build an AI employee",
    excerpt:
      "Not every workflow should be automated. An honest decision framework: where agents genuinely outperform, where they quietly fail, and where a human is simply better.",
    category: "AI Employees",
    readTime: "9 min",
    status: "coming-soon",
  },
];
