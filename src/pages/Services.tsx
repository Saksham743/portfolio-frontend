import { Link } from "react-router-dom";
import { PageHero, Section, Reveal, SectionHeading, Tag, Arrow } from "../components/ui";
import CTABand from "../components/CTABand";
import { services } from "../data/services";
import { useSeo } from "../components/Seo";

const capabilities = [
  { name: "Appointment Booking", detail: "Inbound requests parsed, qualified, routed, and confirmed automatically.", link: "/workflows" },
  { name: "Email Outreach", detail: "Research-grounded sequencing with deliverability guardrails built in.", link: "/services/ai-sdr" },
  { name: "Reporting Pipelines", detail: "Metrics computed identically every week and delivered as a narrative.", link: "/workflows" },
  { name: "CRM Hygiene", detail: "Deduplication, enrichment, and stale-deal detection running nightly.", link: "/workflows" },
];

export default function Services() {
  useSeo(
    "Services",
    "AI SDR, customer support agents, workflow automation, lead generation, custom AI agents, and custom integrations — each built and shipped like a software product."
  );

  return (
    <>
      <PageHero
        kicker="services"
        title="Systems, not services."
        lede="Everything we build is presented — and engineered — like a software product: a defined problem, an explicit architecture, a delivery timeline, and outcomes you can inspect. Pick the system; we'll tell you honestly if it fits."
      />

      <Section className="pb-24">
        <div className="space-y-4">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={i * 0.05}>
              <Link
                to={`/services/${s.slug}`}
                className="card-hover group grid gap-6 rounded-xl border border-line bg-panel p-6 md:grid-cols-[0.9fr_1.4fr_auto] md:items-center md:p-8"
              >
                <div>
                  <p className="mono-label text-faint">{String(i + 1).padStart(2, "0")} / {s.kicker}</p>
                  <h2 className="mt-3 text-xl font-semibold text-white group-hover:text-accent-soft transition-colors">
                    {s.name}
                  </h2>
                </div>
                <div>
                  <p className="text-[14px] leading-relaxed text-mist">{s.summary}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {s.integrations.slice(0, 5).map((tool) => (
                      <Tag key={tool}>{tool}</Tag>
                    ))}
                    {s.integrations.length > 5 && <Tag>+{s.integrations.length - 5}</Tag>}
                  </div>
                </div>
                <span className="hidden md:flex h-10 w-10 items-center justify-center rounded-lg border border-line text-mist transition-all group-hover:border-accent/50 group-hover:text-accent">
                  <Arrow />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="pb-24 border-t border-line-soft pt-24">
        <SectionHeading
          kicker="also in scope"
          title="Capabilities that ship inside larger systems."
          lede="These usually arrive as modules within an AI SDR, support agent, or automation project — but they can stand alone when that's what you need."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {capabilities.map((c, i) => (
            <Reveal key={c.name} delay={i * 0.05}>
              <Link to={c.link} className="card-hover group block h-full rounded-xl border border-line bg-panel p-6">
                <h3 className="text-[15px] font-semibold text-white group-hover:text-accent-soft transition-colors">{c.name}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-mist">{c.detail}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      <CTABand
        title="Not sure which system fits?"
        lede="That's what the discovery call is for. Bring your messiest workflow — we'll map it live and tell you what we'd build, or whether you should build anything at all."
      />
    </>
  );
}
