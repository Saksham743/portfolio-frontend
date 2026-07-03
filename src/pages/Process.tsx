import { PageHero, Section, Reveal, SectionHeading, Tag } from "../components/ui";
import CTABand from "../components/CTABand";
import Terminal from "../components/Terminal";
import { useSeo } from "../components/Seo";

const phases = [
  {
    n: "01",
    name: "Discover",
    duration: "Week 1",
    goal: "Find the workflows worth automating — and the ones that aren't.",
    detail:
      "We interview the people doing the work, watch the actual process, and audit where the hours go. The output is a prioritized workflow map scored by hours saved, failure risk, and build effort. Some workflows will score badly. We'll tell you.",
    deliverables: ["Workflow audit map", "Automation fit scores", "Honest no-go list", "Success criteria"],
  },
  {
    n: "02",
    name: "Blueprint",
    duration: "Week 1–2",
    goal: "A system design you could hand to any competent engineer.",
    detail:
      "Architecture diagrams, integration inventory, data flow, failure-mode analysis, and the human-checkpoint policy. This is where we decide n8n vs. Temporal vs. custom, which models where, and what 'correct' means. It ends with a fixed price and a committed timeline.",
    deliverables: ["Architecture document", "Failure-mode analysis", "Eval plan", "Fixed price + timeline"],
  },
  {
    n: "03",
    name: "Build",
    duration: "Week 2–5",
    goal: "Shipped progress every week — clickable, not slideable.",
    detail:
      "We build in your repositories from day one. Every Friday you get a demo against your real data and a written changelog: what shipped, what's next, what's blocked. Prompts are versioned like code. Evals run on every change.",
    deliverables: ["Weekly demos", "Written changelogs", "Eval suite from your cases", "Code in your repos"],
  },
  {
    n: "04",
    name: "Deploy",
    duration: "Week 4–6",
    goal: "Production, without the cliff.",
    detail:
      "Supervised launch first: draft modes, approval queues, small segments. Autonomy is granted per category as the eval numbers earn it. Monitoring, alerting, and rollback are configured before the first real run — not after the first incident.",
    deliverables: ["Supervised rollout", "Monitoring + alerting", "Rollback plan", "Runbook + docs"],
  },
  {
    n: "05",
    name: "Optimize",
    duration: "Ongoing",
    goal: "The system gets better every week it runs.",
    detail:
      "Real runs surface edge cases; edge cases become eval cases; eval cases become fixes. We review the numbers with you weekly during the optimization period. After that, your team owns it fully — or we stay on a light retainer. Your choice, genuinely.",
    deliverables: ["Weekly performance reviews", "Edge-case fixes", "Extension roadmap", "Clean handover"],
  },
];

const commitments = [
  { t: "Weekly written updates", d: "Every Friday: shipped, next, blocked. In writing, in your Slack. No status meetings required." },
  { t: "You own the code", d: "Repos, prompts, evals, infra config — delivered into your accounts from the first commit." },
  { t: "Fixed prices", d: "The number is agreed before the build starts. Scope changes are re-quoted, not silently billed." },
  { t: "Honest no's", d: "If a workflow shouldn't be automated, we say so in week one — not after the invoice." },
];

export default function Process() {
  useSeo(
    "Process",
    "How Build With Saksham delivers: Discover, Blueprint, Build, Deploy, Optimize. Weekly demos, fixed prices, full code ownership, and supervised production launches."
  );

  return (
    <>
      <PageHero
        kicker="process"
        title="Exactly how a project runs."
        lede="No mystery, no methodology theater. Five phases, weekly shipped progress, and a system that lands in your infrastructure with your name on the deed."
      />

      <Section className="pb-8">
        <Reveal>
          <div className="flex flex-wrap gap-2">
            {phases.map((p) => (
              <span key={p.n} className="flex items-center gap-2 rounded-lg border border-line bg-panel px-3.5 py-2 font-mono text-[12px] text-mist">
                <span className="text-accent">{p.n}</span> {p.name}
              </span>
            ))}
          </div>
        </Reveal>
      </Section>

      <Section className="py-16">
        <div className="space-y-6">
          {phases.map((p, i) => (
            <Reveal key={p.n} delay={i * 0.04}>
              <div className="card-hover grid gap-8 rounded-xl border border-line bg-panel p-7 md:p-9 lg:grid-cols-[220px_1fr_220px]">
                <div>
                  <p className="font-mono text-[12px] text-accent">{p.n}</p>
                  <h2 className="mt-2 text-2xl font-semibold text-white">{p.name}</h2>
                  <p className="mt-1 font-mono text-[11px] text-violet">{p.duration}</p>
                </div>
                <div>
                  <p className="text-[15px] font-medium text-white">{p.goal}</p>
                  <p className="mt-3 text-[13.5px] leading-relaxed text-mist">{p.detail}</p>
                </div>
                <div>
                  <p className="mono-label text-faint mb-3">deliverables</p>
                  <ul className="space-y-2">
                    {p.deliverables.map((d) => (
                      <li key={d} className="flex items-center gap-2 text-[12.5px] text-mist">
                        <span className="h-1 w-1 rounded-full bg-accent" aria-hidden />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="py-20 border-t border-line-soft">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-start">
          <div>
            <SectionHeading
              kicker="communication"
              title="You'll never wonder what's happening."
              lede="Agencies go quiet between invoices. We work like a team you hired: visible commits, weekly demos, and updates written the way engineers write them."
            />
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {commitments.map((c, i) => (
                <Reveal key={c.t} delay={i * 0.05}>
                  <div className="h-full rounded-xl border border-line bg-panel p-5">
                    <h3 className="text-[14px] font-semibold text-white">{c.t}</h3>
                    <p className="mt-2 text-[12.5px] leading-relaxed text-mist">{c.d}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal delay={0.1}>
            <Terminal title="#project-updates — friday changelog">
              <p className="text-faint">— Friday, Week 3 —</p>
              <p><span className="text-accent">shipped</span>  reply-triage classifier · 96% on eval set</p>
              <p><span className="text-accent">shipped</span>  hubspot sync — idempotent writes + replay</p>
              <p><span className="text-accent">shipped</span>  approval queue in #outbound-review</p>
              <p><span className="text-violet">next</span>     deliverability ramp config · segment B research</p>
              <p><span className="text-amber-400">blocked</span>  awaiting sandbox creds for cal.com <span className="text-faint">(pinged Tue)</span></p>
              <p className="mt-2 text-faint">demo: friday 15:00 · against live staging data</p>
              <p className="text-faint">full diff: github.com/your-org/outbound-engine</p>
            </Terminal>
            <div className="mt-6 rounded-xl border border-line bg-panel p-6">
              <p className="mono-label text-faint">post-launch support</p>
              <p className="mt-3 text-[13.5px] leading-relaxed text-mist">
                Every project includes a supervised launch and an optimization period. After that, choose your mode:
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <Tag>Self-serve — docs + runbook, you own it</Tag>
                <Tag>Retainer — monitoring, iteration, extensions</Tag>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      <CTABand
        title="See the process applied to your workflow."
        lede="Bring one repetitive workflow to a 30-minute call. We'll run a miniature discovery live and show you what the blueprint would look like."
      />
    </>
  );
}
