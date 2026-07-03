import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Section, Reveal, SectionHeading, Kicker, ButtonLink, Arrow, Tag } from "../components/ui";
import WorkflowHero from "../components/WorkflowHero";
import FlowDiagram from "../components/FlowDiagram";
import Accordion from "../components/Accordion";
import CTABand from "../components/CTABand";
import Terminal from "../components/Terminal";
import { services } from "../data/services";
import { workflows } from "../data/workflows";
import { faqGroups } from "../data/faqs";
import { useSeo } from "../components/Seo";

const problems = [
  { role: "Sales", pain: "Reps spend mornings researching accounts and evenings updating the CRM. Selling happens in between, if there's time." },
  { role: "Support", pain: "Skilled people answer the same fifteen questions on a loop while hard tickets wait in the queue." },
  { role: "Founders", pain: "You became the human integration layer — copying data between tools, chasing status, assembling the Monday report." },
  { role: "Operations", pain: "Onboarding, invoicing, reporting: fifteen manual steps each, held together by memory and a checklist in Notion." },
];

const principles = [
  { title: "Production software, not demos", body: "Error handling, retries, monitoring, and rollbacks. If it can't fail gracefully, it doesn't ship." },
  { title: "You own everything", body: "Code, prompts, evals, and infrastructure live in your repos and your cloud. No lock-in, ever." },
  { title: "Measured before autonomous", body: "Every agent is tested against your historical cases. Autonomy is earned per category, not assumed." },
  { title: "Boring tools, deliberate choices", body: "TypeScript, Python, PostgreSQL, Temporal, n8n. Proven infrastructure, and a documented reason for every pick." },
];

const steps = [
  { n: "01", name: "Discover", body: "We map where your team's hours actually go and find the workflows worth automating." },
  { n: "02", name: "Blueprint", body: "A concrete system design: architecture, integrations, failure modes, and a fixed price." },
  { n: "03", name: "Build", body: "Weekly shipped progress you can click, not status decks. Demos against your real data." },
  { n: "04", name: "Deploy", body: "Supervised launch in your infrastructure. Draft mode first; autonomy once evals prove it." },
  { n: "05", name: "Optimize", body: "Weekly iteration on real runs. Edge cases become eval cases become fixes." },
];

export default function Home() {
  useSeo(
    "Custom AI Employees for Startups",
    "Build With Saksham builds production-ready AI employees that automate sales, support, and operations for startups. We don't sell AI — we sell time."
  );

  const homeFaq = [
    faqGroups[0].items[0],
    faqGroups[0].items[1],
    faqGroups[1].items[1],
    faqGroups[0].items[3],
    faqGroups[3].items[0],
  ];

  return (
    <>
      {/* ============ HERO ============ */}
      <Section className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden">
        <div className="dot-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_70%_65%_at_50%_0%,black,transparent)]" aria-hidden />
        <div
          className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[900px] -translate-x-1/2 rounded-full blur-3xl opacity-30"
          style={{ background: "radial-gradient(closest-side, rgba(77,141,255,0.35), rgba(139,124,246,0.15), transparent)" }}
          aria-hidden
        />
        <div className="relative grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}>
              <p className="inline-flex items-center gap-2 rounded-full border border-line bg-panel px-3.5 py-1.5 font-mono text-[11px] text-mist">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" aria-hidden />
                Early partner program open — limited seats
              </p>
              <h1 className="mt-7 text-[42px] md:text-[64px] font-semibold tracking-tight leading-[1.04] text-white">
                Give your team <br />
                <span className="text-gradient">their time back.</span>
              </h1>
              <p className="mt-7 max-w-lg text-lg leading-relaxed text-mist">
                AI employees built specifically for startups. We build custom systems that automate sales, customer
                support, internal operations, and repetitive workflows — so your team can spend more time building.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <ButtonLink to="/contact">
                  Book a Call <Arrow />
                </ButtonLink>
                <ButtonLink to="/workflows" variant="ghost">
                  Explore Live Workflows
                </ButtonLink>
              </div>
              <p className="mt-8 font-mono text-[11px] text-faint">
                We don't sell AI. We sell time. <span className="text-mist">AI employees are the mechanism.</span>
              </p>
            </motion.div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <WorkflowHero />
          </div>
        </div>
      </Section>

      {/* ============ TRUST STRIP ============ */}
      <Section className="border-y border-line-soft bg-panel/40 py-10">
        <Reveal>
          <div className="grid gap-6 md:grid-cols-4">
            {[
              ["Built as software", "Typed, tested, versioned, monitored"],
              ["Shipped in weeks", "First production version in 3–6 weeks"],
              ["Runs in your cloud", "Your repos, your secrets, your data"],
              ["No black boxes", "Every decision traceable and editable"],
            ].map(([t, d]) => (
              <div key={t} className="flex items-start gap-3">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mt-0.5 shrink-0" aria-hidden>
                  <rect x="1" y="1" width="14" height="14" rx="4" stroke="#4D8DFF" strokeWidth="1.2" opacity="0.5" />
                  <path d="M5 8.2 7.2 10.4 11 5.8" stroke="#4D8DFF" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div>
                  <p className="text-[13.5px] font-medium text-white">{t}</p>
                  <p className="mt-0.5 text-xs text-faint">{d}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </Section>

      {/* ============ PROBLEM ============ */}
      <Section className="py-24 md:py-32">
        <SectionHeading
          kicker="the problem"
          title="Startups lose hundreds of hours a month to work software should be doing."
          lede="Not the interesting work. The glue work: qualifying, copying, answering, syncing, reporting. It doesn't show up on any roadmap, but it quietly sets your velocity."
        />
        <div className="mt-14 grid gap-4 md:grid-cols-2">
          {problems.map((p, i) => (
            <Reveal key={p.role} delay={i * 0.06}>
              <div className="card-hover h-full rounded-xl border border-line bg-panel p-6">
                <p className="mono-label text-violet">{p.role}</p>
                <p className="mt-3 text-[14.5px] leading-relaxed text-mist">{p.pain}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.15} className="mt-10">
          <p className="max-w-2xl text-[15px] leading-relaxed text-mist">
            <span className="text-white font-medium">We remove repetitive work.</span> We build software that quietly
            does the work your team shouldn't have to — and hands back the hours.
          </p>
        </Reveal>
      </Section>

      {/* ============ SERVICES OVERVIEW ============ */}
      <Section className="py-24 md:py-32 border-t border-line-soft">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            kicker="what we build"
            title="Every system, built like a product."
            lede="Not scripts. Not zaps. Versioned, observable software with explicit failure modes — delivered into your infrastructure."
          />
          <Reveal>
            <ButtonLink to="/services" variant="ghost">
              All services <Arrow />
            </ButtonLink>
          </Reveal>
        </div>
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={i * 0.05}>
              <Link
                to={`/services/${s.slug}`}
                className="card-hover group flex h-full flex-col rounded-xl border border-line bg-panel p-6"
              >
                <p className="mono-label text-faint">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="mt-4 text-lg font-semibold text-white group-hover:text-accent-soft transition-colors">
                  {s.name}
                </h3>
                <p className="mt-2 flex-1 text-[13.5px] leading-relaxed text-mist">{s.tagline}</p>
                <p className="mt-5 inline-flex items-center gap-1.5 font-mono text-[11px] text-accent">
                  view system <Arrow />
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ============ HOW IT WORKS ============ */}
      <Section className="py-24 md:py-32 border-t border-line-soft">
        <SectionHeading
          kicker="how it works"
          title="Discovery to deployment in weeks, not quarters."
          lede="A process built for founders who'd rather see shipped software than status meetings."
        />
        <div className="mt-14 grid gap-px overflow-hidden rounded-xl border border-line bg-line md:grid-cols-5">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.07} className="bg-panel">
              <div className="h-full p-6">
                <p className="font-mono text-[11px] text-accent">{s.n}</p>
                <h3 className="mt-3 text-[15px] font-semibold text-white">{s.name}</h3>
                <p className="mt-2 text-[12.5px] leading-relaxed text-faint">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-8">
          <Link to="/process" className="inline-flex items-center gap-1.5 font-mono text-[12px] text-accent hover:text-accent-soft transition-colors">
            Read the full process <Arrow />
          </Link>
        </Reveal>
      </Section>

      {/* ============ WHY US ============ */}
      <Section className="py-24 md:py-32 border-t border-line-soft">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              kicker="why build with saksham"
              title="Engineering principles, not agency promises."
              lede="Most automation breaks quietly and nobody notices until a customer does. Ours is built the way production software is built — because that's what it is."
            />
            <div className="mt-10 space-y-6">
              {principles.map((p, i) => (
                <Reveal key={p.title} delay={i * 0.06}>
                  <div className="flex gap-4">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                    <div>
                      <h3 className="text-[15px] font-semibold text-white">{p.title}</h3>
                      <p className="mt-1 text-[13.5px] leading-relaxed text-mist">{p.body}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal delay={0.1}>
            <Terminal title="deploy — production checklist">
              <p><span className="text-emerald-400">✓</span> integration tests passing <span className="text-faint">(142/142)</span></p>
              <p><span className="text-emerald-400">✓</span> eval suite <span className="text-faint">— quality gate: 94.2% on historical cases</span></p>
              <p><span className="text-emerald-400">✓</span> retry + dead-letter queues configured</p>
              <p><span className="text-emerald-400">✓</span> alerting routed → <span className="text-accent">#ops-alerts</span></p>
              <p><span className="text-emerald-400">✓</span> secrets in client vault <span className="text-faint">— zero credentials held by us</span></p>
              <p><span className="text-emerald-400">✓</span> rollback plan documented + rehearsed</p>
              <p><span className="text-emerald-400">✓</span> runbook delivered to client repo</p>
              <p className="mt-2 text-faint">$ <span className="text-white">ship --supervised</span></p>
              <p className="text-emerald-400">→ deployed to client-cloud/prod · monitoring live</p>
            </Terminal>
          </Reveal>
        </div>
      </Section>

      {/* ============ WORKFLOW SHOWCASE ============ */}
      <Section className="py-24 md:py-32 border-t border-line-soft">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            kicker="workflow library"
            title="Systems we build, drawn in the open."
            lede="Real workflow architectures — triggers, steps, tools, and the time they hand back."
          />
          <Reveal>
            <ButtonLink to="/workflows" variant="ghost">
              Full library <Arrow />
            </ButtonLink>
          </Reveal>
        </div>
        <div className="mt-14 space-y-4">
          {workflows.slice(0, 3).map((w, i) => (
            <Reveal key={w.slug} delay={i * 0.07}>
              <div className="card-hover rounded-xl border border-line bg-panel p-6 md:p-8">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <p className="mono-label text-violet">{w.category}</p>
                    <h3 className="mt-2 text-lg font-semibold text-white">{w.name}</h3>
                  </div>
                  <Tag>{w.timeSaved}</Tag>
                </div>
                <FlowDiagram steps={w.steps} className="mt-6" />
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ============ EARLY PARTNER PROGRAM ============ */}
      <Section className="py-24 md:py-32 border-t border-line-soft">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl border border-violet/25 bg-panel p-8 md:p-12">
            <div
              className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full blur-3xl opacity-40"
              style={{ background: "radial-gradient(closest-side, rgba(139,124,246,0.35), transparent)" }}
              aria-hidden
            />
            <div className="relative grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
              <div>
                <Kicker className="mb-4">early partner program</Kicker>
                <h2 className="text-3xl font-semibold tracking-tight text-white leading-[1.15]">
                  We're building our first public case studies. Deliberately, with a few startups at a time.
                </h2>
                <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-mist">
                  No invented logos, no fabricated metrics on this site — ever. Instead, early partners get our full
                  attention, founder-level access, and preferential terms in exchange for one thing: letting us publish
                  the real numbers once the system has earned them.
                </p>
                <div className="mt-7">
                  <ButtonLink to="/contact">
                    Apply for a partner seat <Arrow />
                  </ButtonLink>
                </div>
              </div>
              <div className="space-y-3">
                {[
                  ["Full-attention delivery", "A small studio's entire focus, not a junior team's leftovers."],
                  ["Founder-level access", "Direct line to the person writing the code. No account managers."],
                  ["Published transparency", "Your results become our first public case study — with your sign-off."],
                ].map(([t, d]) => (
                  <div key={t} className="rounded-lg border border-line-soft bg-raise/50 p-4">
                    <p className="text-[13.5px] font-medium text-white">{t}</p>
                    <p className="mt-1 text-[12.5px] text-faint leading-relaxed">{d}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* ============ FAQ ============ */}
      <Section className="py-24 md:py-32 border-t border-line-soft">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading
            kicker="faq"
            title="Questions founders actually ask."
            lede="More on engineering, security, and pricing on the full FAQ page."
          />
          <Reveal delay={0.1}>
            <Accordion items={homeFaq} />
            <Link to="/faq" className="mt-6 inline-flex items-center gap-1.5 font-mono text-[12px] text-accent hover:text-accent-soft transition-colors">
              All questions <Arrow />
            </Link>
          </Reveal>
        </div>
      </Section>

      <CTABand />
    </>
  );
}
