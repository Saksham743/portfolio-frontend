export interface FAQItem {
  q: string;
  a: string;
}

export interface FAQGroup {
  group: string;
  items: FAQItem[];
}

export const faqGroups: FAQGroup[] = [
  {
    group: "Working together",
    items: [
      {
        q: "Who is Build With Saksham for?",
        a: "Seed to Series A startups — typically 5 to 100 people — where repetitive work is eating the team's week. Our best projects come from technical founders who want production software, not a no-code demo, and who care about owning what gets built.",
      },
      {
        q: "How is this different from hiring an automation agency?",
        a: "Agencies sell hours and hand you a Zapier account. We work like a product engineering team: we scope a system, write real software with error handling and observability, ship it into your infrastructure, and hand over code you own. The deliverable is working infrastructure, not a slide deck.",
      },
      {
        q: "How many clients do you work with at once?",
        a: "Deliberately few. Deep integration work doesn't parallelize well, and we'd rather ship three excellent systems than ten mediocre ones. If we're at capacity, we'll tell you and give you a realistic start date.",
      },
      {
        q: "Do you have case studies?",
        a: "We're currently partnering with a small number of startups to build our first public success stories. Until those are published with real, verifiable numbers, we'd rather show you our process, architecture, and thinking than invent social proof. Ask us anything on a call — we'll show real work under NDA where possible.",
      },
    ],
  },
  {
    group: "Engineering & delivery",
    items: [
      {
        q: "What does a typical project timeline look like?",
        a: "Most systems ship a first production version in 3–6 weeks: about a week of discovery and blueprinting, two to four weeks of build with weekly demos, then a supervised deployment. Complex custom agents can run longer — we'll give you an honest estimate before anything is signed.",
      },
      {
        q: "Who owns the code?",
        a: "You do. Everything is delivered into your repositories and your cloud accounts: source, prompts, eval suites, infrastructure config, and documentation. If we disappeared tomorrow, your engineers could maintain everything we shipped.",
      },
      {
        q: "What stack do you build on?",
        a: "TypeScript and Python services; n8n or Temporal for orchestration depending on durability needs; LangGraph and Model Context Protocol for agent systems; PostgreSQL for state; deployed to your cloud. We pick boring, proven tools and document every choice.",
      },
      {
        q: "How do you keep AI systems from behaving unpredictably?",
        a: "Bounded autonomy and measurement. Agents get typed tools with least-privilege access, explicit policies for what requires a human, and eval suites built from your historical cases that run on every change. New capabilities are earned per category — draft mode first, autonomy after the evals prove it.",
      },
      {
        q: "What happens after launch?",
        a: "Every project includes a supervised launch and an optimization period with weekly iteration. After that, you choose: your team runs it (it's documented for exactly that), or we stay on a light retainer for monitoring and improvements.",
      },
    ],
  },
  {
    group: "Security & data",
    items: [
      {
        q: "How do you handle our data?",
        a: "Systems run in your infrastructure with your secrets manager — we don't warehouse your data. Credentials are least-privilege and revocable at any time. Data sent to model providers is scoped to what the task requires, and we'll configure zero-retention API options where providers offer them.",
      },
      {
        q: "Can you work within our compliance requirements?",
        a: "Usually, yes. Because we build into your infrastructure rather than a shared platform, most SOC 2 / GDPR-driven requirements are straightforward: your cloud, your access controls, your audit logs. Bring your security team to the second call — we like those conversations.",
      },
      {
        q: "Do you sign NDAs?",
        a: "Yes, happily, before any detailed discussion of your workflows or data.",
      },
    ],
  },
  {
    group: "Pricing",
    items: [
      {
        q: "How do you price projects?",
        a: "Fixed-scope builds are priced per project after the discovery call, so you know the number before we start. Ongoing optimization is a flat monthly retainer. No hourly billing — it rewards slowness, and we're not slow.",
      },
      {
        q: "What if the project isn't a good fit?",
        a: "We'll tell you on the first call. Some workflows shouldn't be automated yet — wrong economics, immature process, or a human is genuinely better. Hearing 'don't build this' from us costs you thirty minutes, not a contract.",
      },
    ],
  },
];
