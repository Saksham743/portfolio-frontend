export interface Workflow {
  slug: string;
  category: string;
  name: string;
  overview: string;
  steps: string[];
  tools: string[];
  timeSaved: string;
  trigger: string;
}

export const workflows: Workflow[] = [
  {
    slug: "outbound-engine",
    category: "Sales",
    name: "Outbound Engine",
    overview:
      "End-to-end outbound: accounts sourced on ICP signals, researched, qualified, and sequenced with personalized messaging. Replies triaged; meetings land on the calendar.",
    steps: ["Lead sourced", "AI research", "Qualification", "Personalized outreach", "Meeting booked", "CRM updated", "Slack notification"],
    tools: ["Clay", "Instantly", "HubSpot", "Cal.com", "Slack"],
    timeSaved: "~15 hrs / week of SDR work",
    trigger: "Daily signal scan",
  },
  {
    slug: "support-resolution",
    category: "Customer Support",
    name: "Tier-1 Resolution Loop",
    overview:
      "Inbound tickets classified by intent, answered from grounded documentation with citations, and escalated with full context when confidence is low or sentiment is negative.",
    steps: ["Ticket received", "Intent classified", "Docs retrieved", "Answer drafted", "Confidence gate", "Resolve or escalate"],
    tools: ["Intercom", "Notion", "Anthropic", "Linear", "Slack"],
    timeSaved: "~60% of routine tickets automated",
    trigger: "New ticket webhook",
  },
  {
    slug: "lead-research-brief",
    category: "Lead Research",
    name: "Account Research Briefs",
    overview:
      "Before every sales call, a structured brief is generated: company signals, stack, recent news, key contacts, and suggested talking points — delivered to Slack 30 minutes before the meeting.",
    steps: ["Calendar event detected", "Account identified", "Signals gathered", "Brief compiled", "Delivered to Slack"],
    tools: ["Google Calendar", "Apollo", "Crunchbase", "OpenAI", "Slack"],
    timeSaved: "~30 min of prep per call",
    trigger: "Upcoming meeting (T-30m)",
  },
  {
    slug: "crm-hygiene",
    category: "CRM Automation",
    name: "CRM Hygiene Daemon",
    overview:
      "A background process that keeps the CRM honest: logs touches, dedupes records, fills missing fields from enrichment, and flags deals that have gone quiet.",
    steps: ["Nightly run", "Records scanned", "Duplicates merged", "Fields enriched", "Stale deals flagged", "Digest posted"],
    tools: ["HubSpot", "Clay", "n8n", "Slack"],
    timeSaved: "~5 hrs / week of data cleanup",
    trigger: "Nightly at 02:00",
  },
  {
    slug: "customer-onboarding",
    category: "Internal Operations",
    name: "Customer Onboarding Rail",
    overview:
      "One closed-won event fires fifteen previously-manual steps: workspace provisioning, welcome sequence, internal channels, billing setup, and kickoff scheduling.",
    steps: ["Deal closed-won", "Workspace provisioned", "Billing configured", "Channels created", "Welcome sequence", "Kickoff scheduled"],
    tools: ["Stripe", "Slack", "Notion", "Temporal", "Gmail"],
    timeSaved: "~2 hrs per new customer",
    trigger: "CRM stage → Closed Won",
  },
  {
    slug: "weekly-metrics",
    category: "Reporting",
    name: "Monday Metrics Compiler",
    overview:
      "Revenue, pipeline, product usage, and support metrics pulled from source systems, computed identically every week, and posted as a narrative digest before the Monday standup.",
    steps: ["Scheduled Monday 07:00", "Sources queried", "Metrics computed", "Anomalies flagged", "Narrative drafted", "Posted to Slack"],
    tools: ["PostgreSQL", "Stripe", "PostHog", "n8n", "Slack"],
    timeSaved: "~4 hrs / week of manual reporting",
    trigger: "Cron: Mon 07:00",
  },
  {
    slug: "smart-scheduling",
    category: "Scheduling",
    name: "Scheduling Concierge",
    overview:
      "Inbound meeting requests parsed from email, qualified against routing rules, matched to the right person's availability, and confirmed — with prep notes attached to the invite.",
    steps: ["Email parsed", "Request qualified", "Owner routed", "Slots proposed", "Meeting confirmed", "Prep notes attached"],
    tools: ["Gmail", "Cal.com", "OpenAI", "Slack"],
    timeSaved: "Scheduling ping-pong eliminated",
    trigger: "Inbound email",
  },
  {
    slug: "inbox-triage",
    category: "Email",
    name: "Founder Inbox Triage",
    overview:
      "Every inbound email classified, prioritized, and pre-processed: intros get drafts, invoices get filed, newsletters get summarized weekly, and only decisions reach the founder.",
    steps: ["Email received", "Classified", "Drafts prepared", "Documents filed", "Priority queue updated", "Daily digest"],
    tools: ["Gmail", "Anthropic", "Notion", "Slack"],
    timeSaved: "~1 hr / day of inbox management",
    trigger: "Real-time inbox events",
  },
];

export const workflowCategories = [...new Set(workflows.map((w) => w.category))];
