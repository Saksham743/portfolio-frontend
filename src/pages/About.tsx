import { PageHero, Section, Reveal, SectionHeading, Tag, ButtonLink, Arrow } from "../components/ui";
import CTABand from "../components/CTABand";
import Terminal from "../components/Terminal";
import { useSeo } from "../components/Seo";

const beliefs = [
  {
    t: "Repetitive work is a velocity tax.",
    d: "Every hour a startup spends on glue work is an hour not spent on product. At 10 people, that tax is annoying. At 40, it quietly decides whether you ship the roadmap.",
  },
  {
    t: "AI is the mechanism, not the product.",
    d: "Nobody needs 'AI'. Teams need the Monday report to exist without anyone writing it, and leads to be qualified while everyone sleeps. We name the outcome, then choose the technology.",
  },
  {
    t: "Automation is production software.",
    d: "A workflow your business depends on deserves the same rigor as your product: tests, monitoring, versioning, rollback. Anything less is a demo wearing a suit.",
  },
  {
    t: "Trust is built with transparency, not logos.",
    d: "We show our architecture, our process, and our reasoning — and we refuse to invent metrics. When our first case studies publish, the numbers will be real.",
  },
];

const engineeringPrinciples = [
  ["Explicit over clever", "Readable state machines beat impressive prompt chains. Boring code survives."],
  ["Fail loudly", "Silent failure is the worst failure. Every pipeline pages someone before a customer notices."],
  ["Measure or don't ship", "Eval suites from real historical cases gate every agent. No vibes-based launches."],
  ["Least privilege", "Agents get the narrowest credentials that do the job. Autonomy is scoped, never blanket."],
  ["Document the why", "Every architectural choice ships with its reasoning, so your team can disagree with us later."],
  ["Handover as a feature", "Success is your engineers maintaining the system without us. We build toward our own redundancy."],
];

const stack = {
  Languages: ["TypeScript", "Python"],
  Orchestration: ["Temporal", "n8n", "LangGraph"],
  "Agent tooling": ["Model Context Protocol", "OpenAI", "Anthropic"],
  Data: ["PostgreSQL", "Redis", "pgvector"],
  Infra: ["Your cloud (AWS / GCP / Fly)", "Docker", "GitHub Actions"],
  Observability: ["Structured tracing", "Grafana", "Slack alerting"],
};

export default function About() {
  useSeo(
    "About",
    "Why Build With Saksham exists: repetitive work kills startup velocity. Our philosophy, engineering principles, technology stack, and security posture."
  );

  return (
    <>
      <PageHero
        kicker="about"
        title="A studio built on one conviction: your team's time is the product."
        lede="Build With Saksham exists because startups keep solving repetitive work with headcount, spreadsheets, and heroics — when what they need is software that quietly does the job."
      />

      {/* Why we exist */}
      <Section className="py-20 border-t border-line-soft">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading
            kicker="why we exist"
            title="Repetitive work kills startup velocity."
            lede="Not dramatically. Gradually. A qualification here, a copy-paste there — until half the company's week is spent operating the company instead of building it."
          />
          <div className="space-y-4">
            {beliefs.map((b, i) => (
              <Reveal key={b.t} delay={i * 0.05}>
                <div className="rounded-xl border border-line bg-panel p-6">
                  <h3 className="text-[15px] font-semibold text-white">{b.t}</h3>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-mist">{b.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* Founder */}
      <Section className="py-20 border-t border-line-soft">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              kicker="the founder"
              title="Hi, I'm Saksham."
              lede="I'm a product engineer who kept watching brilliant startup teams spend their best hours on work a well-built system could do."
            />
            <Reveal delay={0.08}>
              <div className="mt-8 space-y-4 text-[14.5px] leading-relaxed text-mist max-w-xl">
                <p>
                  I started Build With Saksham after building automation and agent systems the hard way — shipping them,
                  watching them break at 2 a.m., and learning what separates a demo from infrastructure a company can
                  actually lean on.
                </p>
                <p>
                  This studio is deliberately small. You work directly with the person designing and writing your
                  system. No account managers, no handoffs to a bench, no telephone game between your requirements and
                  the code.
                </p>
                <p>
                  The bet behind the studio is simple: in a few years, every strong startup will run a layer of AI
                  employees under their human team. The ones who build that layer properly — owned, observable, secure —
                  will move faster than everyone else. I want to build that layer with you.
                </p>
              </div>
              <div className="mt-8">
                <ButtonLink to="/contact">
                  Talk to me directly <Arrow />
                </ButtonLink>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.12}>
            <Terminal title="saksham@studio — whoami">
              <p><span className="text-accent">$</span> whoami</p>
              <p className="text-white">product engineer · systems thinker · founder</p>
              <p className="mt-3"><span className="text-accent">$</span> cat focus.txt</p>
              <p>building AI employees that survive contact</p>
              <p>with production — and handing over the keys.</p>
              <p className="mt-3"><span className="text-accent">$</span> ls principles/</p>
              <p>ship-weekly/  own-nothing-of-yours/  measure-everything/</p>
              <p>say-no-early/  document-the-why/</p>
              <p className="mt-3"><span className="text-accent">$</span> uptime --studio</p>
              <p className="text-faint">small by design · senior by default · async-friendly</p>
            </Terminal>
          </Reveal>
        </div>
      </Section>

      {/* Engineering principles */}
      <Section className="py-20 border-t border-line-soft">
        <SectionHeading
          kicker="engineering principles"
          title="The rules the code is written by."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {engineeringPrinciples.map(([t, d], i) => (
            <Reveal key={t} delay={i * 0.04}>
              <div className="card-hover h-full rounded-xl border border-line bg-panel p-6">
                <p className="font-mono text-[11px] text-accent">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="mt-3 text-[15px] font-semibold text-white">{t}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-mist">{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Stack */}
      <Section className="py-20 border-t border-line-soft">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading
            kicker="technology stack"
            title="Boring where possible. Sharp where it counts."
            lede="We choose proven infrastructure and document every deviation. Your engineers should recognize everything in the repo."
          />
          <Reveal delay={0.08}>
            <div className="overflow-hidden rounded-xl border border-line">
              {Object.entries(stack).map(([category, tools], i) => (
                <div
                  key={category}
                  className={`grid gap-3 p-5 sm:grid-cols-[160px_1fr] ${i % 2 === 0 ? "bg-panel" : "bg-raise/40"} ${i > 0 ? "border-t border-line-soft" : ""}`}
                >
                  <p className="font-mono text-[12px] font-medium text-accent-soft pt-1">{category}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {tools.map((t) => (
                      <Tag key={t}>{t}</Tag>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Ownership & security */}
      <Section className="py-20 border-t border-line-soft">
        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-xl border border-line bg-panel p-8">
              <p className="mono-label text-accent">code ownership</p>
              <h3 className="mt-3 text-xl font-semibold text-white">If we vanished tomorrow, nothing you run would stop.</h3>
              <ul className="mt-5 space-y-3 text-[13.5px] text-mist leading-relaxed">
                <li className="flex gap-3"><span className="text-accent mt-0.5">→</span> All code committed to your repositories from the first day.</li>
                <li className="flex gap-3"><span className="text-accent mt-0.5">→</span> Prompts, evals, and configs versioned alongside the code.</li>
                <li className="flex gap-3"><span className="text-accent mt-0.5">→</span> Infrastructure in your cloud accounts, under your billing.</li>
                <li className="flex gap-3"><span className="text-accent mt-0.5">→</span> Runbooks written so your engineers can operate everything.</li>
                <li className="flex gap-3"><span className="text-accent mt-0.5">→</span> No proprietary platform between you and your system. Ever.</li>
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="h-full rounded-xl border border-line bg-panel p-8">
              <p className="mono-label text-violet">security philosophy</p>
              <h3 className="mt-3 text-xl font-semibold text-white">Least privilege, zero retention, full auditability.</h3>
              <ul className="mt-5 space-y-3 text-[13.5px] text-mist leading-relaxed">
                <li className="flex gap-3"><span className="text-violet mt-0.5">→</span> Credentials scoped to the minimum each integration needs.</li>
                <li className="flex gap-3"><span className="text-violet mt-0.5">→</span> Secrets live in your vault; we hold nothing after handover.</li>
                <li className="flex gap-3"><span className="text-violet mt-0.5">→</span> Model calls scoped to task data; zero-retention APIs where offered.</li>
                <li className="flex gap-3"><span className="text-violet mt-0.5">→</span> Every agent action logged and attributable.</li>
                <li className="flex gap-3"><span className="text-violet mt-0.5">→</span> NDAs signed before your workflows are discussed in detail.</li>
              </ul>
            </div>
          </Reveal>
        </div>
      </Section>

      <CTABand
        title="Now you know how we think."
        lede="The rest is better shown than written. Bring a workflow to a call and watch how we take it apart."
      />
    </>
  );
}
