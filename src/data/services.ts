export interface ServiceFAQ {
  q: string;
  a: string;
}

export interface Service {
  slug: string;
  name: string;
  kicker: string;
  tagline: string;
  summary: string;
  problem: { title: string; points: string[] };
  solution: string[];
  workflow: string[];
  architecture: { layer: string; detail: string }[];
  integrations: string[];
  timeline: { phase: string; duration: string; detail: string }[];
  results: string[];
  faq: ServiceFAQ[];
}

export const services: Service[] = [
  {
    slug: "ai-sdr",
    name: "AI SDR",
    kicker: "Outbound, without the grind",
    tagline: "An outbound system that researches, qualifies, and books — while your team sleeps.",
    summary:
      "A production pipeline that finds accounts matching your ICP, researches each one, writes outreach a human would be proud of, and books qualified meetings directly onto your calendar.",
    problem: {
      title: "Outbound eats your best people",
      points: [
        "Founders and early reps spend hours researching accounts that never convert.",
        "Personalization gets skipped when volume goes up, so reply rates collapse.",
        "Lead data lives in five tools and none of them agree with each other.",
        "Follow-ups are forgotten. Pipeline dies in silence, not in a lost deal.",
      ],
    },
    solution: [
      "We build a versioned outbound pipeline: sourcing, enrichment, qualification, sequencing, and booking run as observable steps — not a black box.",
      "Every message is grounded in real research pulled at send time: funding events, hiring signals, tech stack, recent product changes.",
      "Qualification logic is explicit and editable. You can read the rules that decided why a lead was pursued or dropped.",
      "Humans stay in the loop where it matters: approval queues for new segments, automatic handoff the moment a reply needs judgment.",
    ],
    workflow: ["Lead sourced", "AI research", "Qualification", "Personalized outreach", "Reply triage", "Meeting booked", "CRM updated"],
    architecture: [
      { layer: "Sourcing", detail: "ICP filters against data providers; deduplicated against your CRM before anything runs." },
      { layer: "Enrichment", detail: "Structured research per account: signals, stack, news — cached and versioned." },
      { layer: "Reasoning", detail: "Qualification and drafting steps with explicit prompts, evals, and fallbacks." },
      { layer: "Delivery", detail: "Sequencing through your sending infrastructure with deliverability guardrails." },
      { layer: "Observability", detail: "Every step logged. Every decision traceable. Alerts on anomalies, not just failures." },
    ],
    integrations: ["HubSpot", "Salesforce", "Attio", "Apollo", "Clay", "Instantly", "Smartlead", "Gmail", "Outlook", "Slack", "Cal.com", "Calendly"],
    timeline: [
      { phase: "Discover", duration: "Week 1", detail: "ICP definition, current funnel review, data audit, success criteria." },
      { phase: "Blueprint", duration: "Week 1–2", detail: "Pipeline architecture, qualification rules, messaging system, approval flow." },
      { phase: "Build", duration: "Week 2–4", detail: "Pipeline implementation, integration wiring, eval suite, staging runs." },
      { phase: "Deploy", duration: "Week 4–5", detail: "Supervised launch on a small segment, then progressive rollout." },
      { phase: "Optimize", duration: "Ongoing", detail: "Weekly iteration on segments, messaging, and qualification thresholds." },
    ],
    results: [
      "Research and first-touch work removed from your team's calendar entirely.",
      "Consistent follow-up on every lead — no more pipeline dying from neglect.",
      "A qualification layer you can read, edit, and version like code.",
      "Clean CRM data as a side effect: every touch logged automatically.",
    ],
    faq: [
      {
        q: "Will this hurt our domain reputation?",
        a: "No system we ship sends without deliverability guardrails: warmed sending domains, volume ramps, spam-signal monitoring, and hard caps. Deliverability is treated as infrastructure, not an afterthought.",
      },
      {
        q: "Can we review messages before they go out?",
        a: "Yes. Most teams start with an approval queue in Slack. Once the message quality is proven on a segment, you can graduate it to autonomous sending — or keep review forever. Your call.",
      },
      {
        q: "What happens when a lead replies?",
        a: "Replies are classified: interested, objection, not now, wrong person. Interested replies are handed to a human immediately with full context. The system never negotiates on your behalf.",
      },
    ],
  },
  {
    slug: "customer-support-agent",
    name: "Customer Support Agent",
    kicker: "Support that scales without headcount",
    tagline: "An agent that resolves the repetitive 60% so your team can own the hard 40%.",
    summary:
      "A support agent grounded in your docs, your product, and your past tickets. It resolves routine questions instantly, drafts responses for complex ones, and escalates with full context when a human should decide.",
    problem: {
      title: "Your team answers the same question 40 times a week",
      points: [
        "Password resets, billing questions, and how-do-I tickets consume skilled people.",
        "Response times stretch as you grow; quality drops as you rush.",
        "Tribal knowledge lives in someone's head, not in a system.",
        "Support data never makes it back to product — the loop is broken.",
      ],
    },
    solution: [
      "We build a retrieval-grounded agent on your actual documentation, changelogs, and resolved tickets — with citations, so answers can be trusted and audited.",
      "Confidence thresholds are explicit: high-confidence answers resolve automatically, medium-confidence answers become drafts for your team, low-confidence tickets escalate immediately.",
      "Escalations arrive with a summary, the customer's history, and the agent's reasoning — your team starts from context, not from zero.",
      "Every resolution is logged and categorized, giving you a live map of what customers actually struggle with.",
    ],
    workflow: ["Ticket received", "Intent classified", "Knowledge retrieved", "Answer drafted", "Confidence check", "Resolve or escalate", "Loop closed"],
    architecture: [
      { layer: "Ingestion", detail: "Docs, changelogs, and historical tickets indexed with versioned embeddings." },
      { layer: "Classification", detail: "Intent and severity routing before any generation happens." },
      { layer: "Grounding", detail: "Retrieval with citations. If the source doesn't exist, the agent says so." },
      { layer: "Policy", detail: "Explicit rules for refunds, security topics, and anything requiring a human." },
      { layer: "Feedback", detail: "Resolutions rated and fed back into evals; knowledge gaps surfaced weekly." },
    ],
    integrations: ["Intercom", "Zendesk", "Plain", "Help Scout", "Linear", "Notion", "Slack", "Stripe", "GitHub"],
    timeline: [
      { phase: "Discover", duration: "Week 1", detail: "Ticket audit, category analysis, knowledge source review." },
      { phase: "Blueprint", duration: "Week 1–2", detail: "Escalation policy, confidence thresholds, tone guidelines." },
      { phase: "Build", duration: "Week 2–4", detail: "Knowledge pipeline, agent implementation, eval suite on historical tickets." },
      { phase: "Deploy", duration: "Week 4–5", detail: "Draft-only mode first. Autonomous resolution earned per category." },
      { phase: "Optimize", duration: "Ongoing", detail: "Weekly review of escalations, gaps, and resolution quality." },
    ],
    results: [
      "Routine tickets resolved in seconds instead of hours.",
      "Your team's time reallocated to genuinely hard problems.",
      "A knowledge base that stays current because gaps are surfaced automatically.",
      "A structured feed of customer friction going straight to product.",
    ],
    faq: [
      {
        q: "What stops it from making things up?",
        a: "Grounding and honesty policies. Answers must cite retrieved sources. When retrieval comes back empty or ambiguous, the agent escalates instead of improvising. We test this behavior against your historical tickets before launch.",
      },
      {
        q: "Does it replace our support team?",
        a: "No — it removes the repetitive layer. The pattern that works: the agent owns high-volume routine categories, your team owns judgment, empathy, and edge cases. Both get better at their jobs.",
      },
      {
        q: "How does it handle angry customers?",
        a: "Sentiment is part of routing. Frustrated customers skip the agent and go straight to a human, with a context summary attached so they never repeat themselves.",
      },
    ],
  },
  {
    slug: "workflow-automation",
    name: "Workflow Automation",
    kicker: "Internal ops on rails",
    tagline: "The glue work between your tools — onboarding, reporting, syncing — done by software.",
    summary:
      "We map the repetitive workflows your team runs by hand, then rebuild them as reliable, observable pipelines: triggered automatically, monitored continuously, and owned by you.",
    problem: {
      title: "Your team is the integration layer",
      points: [
        "Someone copies data from Stripe into a spreadsheet every Monday.",
        "Onboarding a customer means fifteen manual steps across six tools.",
        "Reports are assembled by hand, late, and slightly different every time.",
        "When the person who 'knows the process' is out, the process stops.",
      ],
    },
    solution: [
      "We start with a workflow audit: what runs weekly, who runs it, where it breaks. The output is a prioritized map of automatable work with honest effort estimates.",
      "Each workflow becomes a pipeline with explicit triggers, steps, retries, and failure alerts — built on n8n, Temporal, or custom services depending on complexity.",
      "Idempotency and error handling are first-class. A pipeline that silently fails is worse than no pipeline; ours page you before your customers notice.",
      "Everything is documented and handed over. Your team can read, modify, and extend every workflow we ship.",
    ],
    workflow: ["Trigger fires", "Data fetched", "Transform + validate", "Systems updated", "Humans notified", "Run logged"],
    architecture: [
      { layer: "Triggers", detail: "Webhooks, schedules, and event streams — never polling when a push exists." },
      { layer: "Orchestration", detail: "n8n or Temporal depending on durability needs; custom services for hot paths." },
      { layer: "Validation", detail: "Schema checks at every boundary. Bad data stops the pipeline, not your ops." },
      { layer: "Recovery", detail: "Retries with backoff, dead-letter queues, and one-click replays." },
      { layer: "Observability", detail: "Run history, latency, and failure alerts routed to Slack." },
    ],
    integrations: ["n8n", "Temporal", "Stripe", "Slack", "Notion", "Airtable", "Google Sheets", "PostgreSQL", "HubSpot", "Linear", "Zapier (migration off)"],
    timeline: [
      { phase: "Discover", duration: "Week 1", detail: "Workflow audit across teams. Prioritization by hours saved and risk." },
      { phase: "Blueprint", duration: "Week 1–2", detail: "Pipeline designs, failure-mode analysis, tool selection." },
      { phase: "Build", duration: "Week 2–4", detail: "Implementation in dependency order, staging validation with real data." },
      { phase: "Deploy", duration: "Week 4", detail: "Parallel run against the manual process, then cutover." },
      { phase: "Optimize", duration: "Ongoing", detail: "New workflows added as the backlog is worked through." },
    ],
    results: [
      "Recurring manual work removed from calendars, permanently.",
      "Processes that survive vacations, departures, and busy weeks.",
      "Reports that arrive on time and are computed the same way every time.",
      "A documented automation layer your team actually owns.",
    ],
    faq: [
      {
        q: "n8n, Temporal, or custom code — how do you choose?",
        a: "n8n for integration-heavy workflows your ops team should be able to inspect and tweak. Temporal for long-running, durability-critical processes. Custom services when latency or logic complexity demands it. We choose per workflow and document why.",
      },
      {
        q: "What happens when an automation fails at 2 a.m.?",
        a: "The pipeline retries with backoff. If retries exhaust, the run lands in a dead-letter queue and an alert fires with the exact failing step and payload. Nothing fails silently, ever.",
      },
      {
        q: "We already have some Zapier automations. Do we start over?",
        a: "We audit what exists first. Some zaps stay, fragile ones get rebuilt on infrastructure with proper error handling, and the whole layer gets documented in one place.",
      },
    ],
  },
  {
    slug: "lead-generation",
    name: "Lead Generation Automation",
    kicker: "A pipeline that fills itself",
    tagline: "Signal-driven lead sourcing that finds companies the week they start needing you.",
    summary:
      "An always-on system that monitors hiring, funding, tech-stack, and intent signals, scores accounts against your ICP, and delivers enriched, research-backed leads into your CRM — continuously.",
    problem: {
      title: "Lists go stale the moment you buy them",
      points: [
        "Static lead lists are outdated before the first email sends.",
        "Timing is everything, and manual research always finds companies too late.",
        "Enrichment is a copy-paste job across LinkedIn, Crunchbase, and five tabs.",
        "Your CRM fills with junk because sourcing quality is inconsistent.",
      ],
    },
    solution: [
      "We build signal monitors: new funding rounds, relevant job posts, tech adoption, leadership changes — whatever predicts need for your product.",
      "Accounts are scored against an explicit ICP rubric you can read and edit. Scores come with reasons, not just numbers.",
      "Each qualified account is enriched into a research brief: the right contacts, the trigger event, and suggested angle.",
      "Everything lands in your CRM deduplicated, structured, and ready for outreach — human or automated.",
    ],
    workflow: ["Signals monitored", "Account detected", "ICP scoring", "Enrichment", "Research brief", "CRM delivery"],
    architecture: [
      { layer: "Signals", detail: "Scheduled monitors over funding, hiring, and tech-stack data sources." },
      { layer: "Scoring", detail: "Explicit ICP rubric with reasoned scoring — auditable, editable, versioned." },
      { layer: "Enrichment", detail: "Contact discovery and account research compiled into structured briefs." },
      { layer: "Dedup", detail: "Matched against existing CRM records before anything is created." },
      { layer: "Delivery", detail: "CRM records with full provenance: which signal, when, and why it scored." },
    ],
    integrations: ["Clay", "Apollo", "Crunchbase", "LinkedIn data providers", "HubSpot", "Attio", "Salesforce", "Slack", "Google Sheets"],
    timeline: [
      { phase: "Discover", duration: "Week 1", detail: "ICP workshop, signal identification, data source selection." },
      { phase: "Blueprint", duration: "Week 1–2", detail: "Scoring rubric, enrichment schema, CRM field mapping." },
      { phase: "Build", duration: "Week 2–3", detail: "Monitors, scoring pipeline, enrichment flow, dedup logic." },
      { phase: "Deploy", duration: "Week 3–4", detail: "Backfill run reviewed together, then continuous operation." },
      { phase: "Optimize", duration: "Ongoing", detail: "Rubric tuning based on which leads actually convert." },
    ],
    results: [
      "A continuous feed of timed, researched leads instead of stale lists.",
      "Hours of weekly research work converted into an automated pipeline.",
      "An ICP definition that sharpens over time because scoring is measured.",
      "CRM data you can finally trust for reporting.",
    ],
    faq: [
      {
        q: "Where does the data come from?",
        a: "Established data providers you likely already know — Clay, Apollo, Crunchbase, and public sources. We work within provider terms and your compliance requirements, and we're explicit about data provenance in every record.",
      },
      {
        q: "How is this different from buying a list?",
        a: "Lists are snapshots. This is a stream. It catches companies at the moment a signal fires — a funding round, a key hire — which is when outreach actually works. And every lead arrives pre-researched.",
      },
    ],
  },
  {
    slug: "custom-ai-agents",
    name: "Custom AI Agents",
    kicker: "Built for your weirdest workflow",
    tagline: "When no off-the-shelf tool fits, we build the AI employee your operation actually needs.",
    summary:
      "Purpose-built agents for the workflows that make your company unusual: document processing, research operations, quality review, data operations — designed, evaluated, and shipped as production software.",
    problem: {
      title: "Your most expensive workflow is the one no tool serves",
      points: [
        "Off-the-shelf AI tools cover the generic 80% and ignore your critical 20%.",
        "The workflow that differentiates you is often the most manual one.",
        "Chaining generic tools together creates fragile systems nobody owns.",
        "Prompt-in-a-wrapper products break the moment your case gets specific.",
      ],
    },
    solution: [
      "We start from the workflow, not the model: what decisions get made, what data informs them, what does 'correct' mean, and what happens on failure.",
      "Agents are built with explicit tool access, permission boundaries, and human checkpoints — using LangGraph, MCP, or plain, well-structured services.",
      "Every agent ships with an eval suite built from your real historical cases. If we can't measure quality, we don't ship it.",
      "You own the code, the prompts, and the evals. This is your software, in your infrastructure, with our support.",
    ],
    workflow: ["Task received", "Context assembled", "Reasoning steps", "Tool calls", "Human checkpoint", "Output delivered", "Run traced"],
    architecture: [
      { layer: "Interface", detail: "Slack, email, API, or internal dashboard — wherever the work arrives." },
      { layer: "Orchestration", detail: "LangGraph state machines or custom control loops with bounded autonomy." },
      { layer: "Tools", detail: "Typed tool interfaces via MCP; least-privilege access to your systems." },
      { layer: "Evals", detail: "Regression suites from historical cases, run on every prompt or model change." },
      { layer: "Tracing", detail: "Full run traces: every step, every token, every tool call inspectable." },
    ],
    integrations: ["LangGraph", "Model Context Protocol", "OpenAI", "Anthropic", "Your internal APIs", "PostgreSQL", "Slack", "Linear", "Notion"],
    timeline: [
      { phase: "Discover", duration: "Week 1–2", detail: "Workflow deep-dive, feasibility assessment, quality definition." },
      { phase: "Blueprint", duration: "Week 2–3", detail: "Agent architecture, tool design, eval plan, checkpoint policy." },
      { phase: "Build", duration: "Week 3–6", detail: "Implementation with weekly demos against real cases." },
      { phase: "Deploy", duration: "Week 6–7", detail: "Supervised operation, then progressive autonomy per category." },
      { phase: "Optimize", duration: "Ongoing", detail: "Eval-driven iteration as edge cases surface." },
    ],
    results: [
      "A system purpose-built for the workflow that matters most to you.",
      "Measured quality — you know exactly how good the agent is, per category.",
      "Full ownership: code, prompts, evals, and infrastructure are yours.",
      "A foundation to extend as adjacent workflows become obvious candidates.",
    ],
    faq: [
      {
        q: "How do you decide if a workflow is a good fit for an agent?",
        a: "We look for three things: the work is repetitive with definable quality, the context an expert uses can be made available to software, and failure is recoverable. If a workflow fails these tests, we'll tell you in the first call — before you spend anything.",
      },
      {
        q: "Which models do you use?",
        a: "Whatever the eval suite says performs best for your case at acceptable cost and latency. Model choice is an implementation detail we revisit as the landscape moves — the architecture doesn't lock you to any vendor.",
      },
    ],
  },
  {
    slug: "custom-integrations",
    name: "Custom Integrations",
    kicker: "When the connector doesn't exist",
    tagline: "Reliable, well-documented bridges between the tools that were never meant to talk.",
    summary:
      "Production-grade integrations between your internal systems, legacy tools, and modern stack — with proper auth, retries, monitoring, and documentation. The unglamorous work, done properly.",
    problem: {
      title: "The connector you need doesn't exist",
      points: [
        "Your industry tool has an API from 2011 and no Zapier support.",
        "Off-the-shelf connectors sync the fields you don't need and skip the ones you do.",
        "Someone exports CSVs between systems every week and calls it 'the process'.",
        "Half-finished integration scripts live on one engineer's laptop.",
      ],
    },
    solution: [
      "We build the integration as real software: typed clients, schema validation at boundaries, idempotent writes, and sensible rate-limit handling.",
      "Sync direction, conflict resolution, and field mapping are decided explicitly and documented — not discovered in production.",
      "Monitoring is included, not extra: sync health dashboards, drift detection, and alerts routed to your Slack.",
      "Delivered into your repositories with tests and a runbook. Your engineers can maintain it without calling us.",
    ],
    workflow: ["Event or schedule", "Fetch + authenticate", "Validate schema", "Transform", "Idempotent write", "Verify + log"],
    architecture: [
      { layer: "Clients", detail: "Typed API clients with retry, backoff, and rate-limit awareness." },
      { layer: "Contracts", detail: "Schema validation at every boundary; drift detected, not discovered." },
      { layer: "State", detail: "Sync cursors and idempotency keys so replays are always safe." },
      { layer: "Monitoring", detail: "Sync lag, error rates, and record counts on a live dashboard." },
      { layer: "Handover", detail: "Tests, runbook, and architecture docs in your repo." },
    ],
    integrations: ["REST + GraphQL APIs", "Webhooks", "PostgreSQL", "Snowflake", "Legacy SOAP/XML systems", "SFTP feeds", "Internal tools", "Anything with an API"],
    timeline: [
      { phase: "Discover", duration: "Week 1", detail: "API assessment, data mapping, volume and latency requirements." },
      { phase: "Blueprint", duration: "Week 1–2", detail: "Sync architecture, conflict policy, failure-mode design." },
      { phase: "Build", duration: "Week 2–3", detail: "Implementation with tests against sandbox environments." },
      { phase: "Deploy", duration: "Week 3–4", detail: "Backfill, parallel verification, cutover." },
      { phase: "Optimize", duration: "Ongoing", detail: "Monitoring review and extension as systems evolve." },
    ],
    results: [
      "Systems that agree with each other, continuously and automatically.",
      "CSV-export rituals deleted from your team's week.",
      "Integration code your engineers can read, test, and extend.",
      "Failures that page you with context instead of corrupting silently.",
    ],
    faq: [
      {
        q: "The tool we use barely has an API. Can you still help?",
        a: "Usually, yes. We've worked with SOAP endpoints, SFTP drops, email-based exports, and undocumented internal APIs. If data can get out of the system at all, a reliable pipeline can usually be built around it. We'll tell you honestly if it can't.",
      },
      {
        q: "Do you host the integration or do we?",
        a: "Your infrastructure by default — your cloud, your repos, your secrets manager. We can operate it for you during an optimization period, but the destination is always your ownership.",
      },
    ],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
