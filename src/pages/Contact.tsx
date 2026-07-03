import { PageHero, Section, Reveal, SectionHeading } from "../components/ui";
import Terminal from "../components/Terminal";
import FlowDiagram from "../components/FlowDiagram";
import { useSeo } from "../components/Seo";

const agenda = [
  { time: "0–10 min", title: "Your workflow, mapped", detail: "You describe the repetitive work eating your team's week. We ask the questions an engineer asks: triggers, tools, volumes, failure cost." },
  { time: "10–20 min", title: "Live system sketch", detail: "We sketch the architecture in real time — what the pipeline looks like, where humans stay in the loop, which tools we'd use and why." },
  { time: "20–30 min", title: "Honest fit assessment", detail: "Timeline, price range, and a straight answer: build it, wait on it, or don't automate it at all. Roughly a third of calls end with 'not yet' — and that's fine." },
];

const goodFit = [
  "Seed to Series A, roughly 5–100 people",
  "A workflow that repeats weekly and eats real hours",
  "Technical founder or team who values owning the code",
  "Willing to give a system a supervised launch period",
];

const notFit = [
  "Looking for a chatbot widget by Friday",
  "Wanting 'AI strategy' decks rather than shipped software",
  "Expecting autonomy without any human review phase",
];

export default function Contact() {
  useSeo(
    "Book a Call",
    "Book a 30-minute discovery call with Build With Saksham. We map your workflow live, sketch the system, and give an honest fit assessment — no pitch deck."
  );

  return (
    <>
      <PageHero
        kicker="contact / book a call"
        title="Thirty minutes. One workflow. An honest answer."
        lede="No discovery-call theater. You bring the most repetitive workflow in your company; we take it apart live and tell you exactly what we'd build — or why you shouldn't build anything yet."
      />

      <Section className="pb-24">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Left: what happens */}
          <div>
            <SectionHeading kicker="what happens on the call" title="A working session, not a pitch." />
            <div className="mt-10 space-y-0">
              {agenda.map((a, i) => (
                <Reveal key={a.time} delay={i * 0.06}>
                  <div className="relative grid gap-2 border-l border-line pl-8 pb-10 last:pb-2 sm:grid-cols-[110px_1fr] sm:gap-6">
                    <span className="absolute -left-[5px] top-1.5 h-[9px] w-[9px] rounded-full border-2 border-accent bg-ink" aria-hidden />
                    <p className="font-mono text-[12px] text-violet pt-0.5">{a.time}</p>
                    <div>
                      <h3 className="text-[15px] font-semibold text-white">{a.title}</h3>
                      <p className="mt-1.5 text-[13.5px] leading-relaxed text-mist">{a.detail}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.1}>
              <div className="mt-8 rounded-xl border border-line bg-panel p-6">
                <p className="mono-label text-faint mb-4">after the call</p>
                <FlowDiagram steps={["Discovery call", "Written summary", "Blueprint proposal", "Fixed price", "Build starts"]} />
                <p className="mt-4 text-[12.5px] text-faint leading-relaxed">
                  If it's a fit, you get a written summary within 24 hours and a blueprint proposal within a week. If
                  it's not, you get a straight explanation and, where we can, a pointer to a better option.
                </p>
              </div>
            </Reveal>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <Reveal delay={0.12}>
                <div className="h-full rounded-xl border border-line bg-panel p-6">
                  <p className="mono-label text-accent mb-4">this call is for you if</p>
                  <ul className="space-y-2.5">
                    {goodFit.map((g) => (
                      <li key={g} className="flex gap-2.5 text-[13px] text-mist leading-relaxed">
                        <span className="text-emerald-400 mt-px">✓</span> {g}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
              <Reveal delay={0.16}>
                <div className="h-full rounded-xl border border-line bg-panel p-6">
                  <p className="mono-label text-violet mb-4">probably not, if</p>
                  <ul className="space-y-2.5">
                    {notFit.map((n) => (
                      <li key={n} className="flex gap-2.5 text-[13px] text-mist leading-relaxed">
                        <span className="text-faint mt-px">✕</span> {n}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>

          {/* Right: booking */}
          <div className="space-y-6 lg:sticky lg:top-24 self-start">
            <Reveal delay={0.08}>
              <div className="rounded-xl border border-accent/30 bg-panel p-6 glow-accent">
                <p className="mono-label text-accent">book directly</p>
                <h2 className="mt-3 text-xl font-semibold text-white">Pick a slot that suits you.</h2>
                <p className="mt-2 text-[13px] text-mist leading-relaxed">
                  30 minutes · video call · come with one workflow in mind.
                </p>
                {/* Calendly embed placeholder */}
                <div className="mt-5 rounded-lg border border-dashed border-line bg-[#0a0c10] p-6 text-center">
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="mx-auto" aria-hidden>
                    <rect x="2" y="4" width="24" height="21" rx="4" stroke="#4D8DFF" strokeWidth="1.4" opacity="0.6" />
                    <path d="M2 10h24M9 2v5M19 2v5" stroke="#4D8DFF" strokeWidth="1.4" strokeLinecap="round" opacity="0.6" />
                    <rect x="7" y="14" width="5" height="4" rx="1" fill="#8B7CF6" opacity="0.8" />
                  </svg>
                  <p className="mt-3 font-mono text-[11px] text-faint">calendly embed</p>
                  <p className="mt-1 text-[12.5px] text-mist">calendly.com/buildwithsaksham/discovery</p>
                  <a
                    href="mailto:hello@buildwithsaksham.com?subject=Discovery%20call"
                    className="mt-4 inline-block rounded-lg bg-accent px-5 py-2.5 text-[13px] font-semibold text-ink transition-all hover:bg-accent-soft"
                  >
                    Request a time by email
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <Terminal title="reach us — other channels">
                <p><span className="text-accent">email</span>     hello@buildwithsaksham.com</p>
                <p><span className="text-accent">linkedin</span>  /in/buildwithsaksham</p>
                <p><span className="text-accent">response</span>  within 24h on weekdays</p>
                <p className="mt-2 text-faint"># NDAs signed happily before details are shared</p>
              </Terminal>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="rounded-xl border border-line bg-panel p-5">
                <p className="text-[12.5px] leading-relaxed text-faint">
                  <span className="text-mist font-medium">A note on capacity:</span> we take on a small number of
                  projects at a time so each one gets senior attention. If we're full, we'll say so on the call and
                  give you a real start date instead of overpromising.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>
    </>
  );
}
