import { Link, Navigate, useParams } from "react-router-dom";
import { PageHero, Section, Reveal, SectionHeading, Tag, ButtonLink, Arrow } from "../components/ui";
import FlowDiagram from "../components/FlowDiagram";
import Accordion from "../components/Accordion";
import CTABand from "../components/CTABand";
import { getService, services } from "../data/services";
import { useSeo } from "../components/Seo";

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = slug ? getService(slug) : undefined;

  useSeo(service ? service.name : "Services", service?.summary);

  if (!service) return <Navigate to="/services" replace />;

  const others = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <PageHero kicker={`services / ${service.kicker}`} title={service.tagline} lede={service.summary}>
        <div className="flex flex-wrap gap-3">
          <ButtonLink to="/contact">
            Book a Call <Arrow />
          </ButtonLink>
          <ButtonLink to="/process" variant="ghost">
            How we deliver
          </ButtonLink>
        </div>
      </PageHero>

      {/* Problem */}
      <Section className="py-20 border-t border-line-soft">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading kicker="the problem" title={service.problem.title} />
          <Reveal delay={0.08}>
            <ul className="space-y-4">
              {service.problem.points.map((p) => (
                <li key={p} className="flex gap-3.5 rounded-lg border border-line-soft bg-panel p-4">
                  <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-violet" aria-hidden />
                  <span className="text-[14px] leading-relaxed text-mist">{p}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>

      {/* Solution */}
      <Section className="py-20 border-t border-line-soft">
        <SectionHeading kicker="how it works" title="The system we build." />
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {service.solution.map((s, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <div className="h-full rounded-xl border border-line bg-panel p-6">
                <p className="font-mono text-[11px] text-accent">{String(i + 1).padStart(2, "0")}</p>
                <p className="mt-3 text-[14px] leading-relaxed text-mist">{s}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Workflow diagram */}
      <Section className="py-20 border-t border-line-soft">
        <SectionHeading kicker="workflow" title="One run, end to end." />
        <Reveal delay={0.08} className="mt-10">
          <div className="rounded-xl border border-line bg-panel p-6 md:p-8">
            <FlowDiagram steps={service.workflow} />
            <p className="mt-6 font-mono text-[11px] text-faint">
              Every step logged · every decision traceable · failures alert before customers notice
            </p>
          </div>
        </Reveal>
      </Section>

      {/* Architecture */}
      <Section className="py-20 border-t border-line-soft">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading
            kicker="architecture"
            title="Layers, not magic."
            lede="We show you the architecture before we build it, and document it after. You should be able to explain your own system."
          />
          <Reveal delay={0.08}>
            <div className="overflow-hidden rounded-xl border border-line">
              {service.architecture.map((layer, i) => (
                <div
                  key={layer.layer}
                  className={`grid gap-2 p-5 sm:grid-cols-[150px_1fr] ${i % 2 === 0 ? "bg-panel" : "bg-raise/40"} ${i > 0 ? "border-t border-line-soft" : ""}`}
                >
                  <p className="font-mono text-[12px] font-medium text-accent-soft">{layer.layer}</p>
                  <p className="text-[13.5px] leading-relaxed text-mist">{layer.detail}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Integrations */}
      <Section className="py-20 border-t border-line-soft">
        <SectionHeading
          kicker="integrations"
          title="Plugs into your stack."
          lede="Common integrations for this system. If your tool has an API — or even if it barely does — we can usually connect it."
        />
        <Reveal delay={0.08} className="mt-10">
          <div className="flex flex-wrap gap-2">
            {service.integrations.map((tool) => (
              <span key={tool} className="rounded-lg border border-line bg-panel px-3.5 py-2 font-mono text-[12px] text-mist hover:border-accent/40 hover:text-white transition-colors">
                {tool}
              </span>
            ))}
          </div>
        </Reveal>
      </Section>

      {/* Timeline */}
      <Section className="py-20 border-t border-line-soft">
        <SectionHeading kicker="implementation timeline" title="From first call to production." />
        <div className="mt-12 space-y-0">
          {service.timeline.map((t, i) => (
            <Reveal key={t.phase} delay={i * 0.05}>
              <div className="relative grid gap-2 border-l border-line pl-8 pb-10 last:pb-0 sm:grid-cols-[140px_120px_1fr] sm:gap-6">
                <span className="absolute -left-[5px] top-1.5 h-[9px] w-[9px] rounded-full border-2 border-accent bg-ink" aria-hidden />
                <p className="text-[15px] font-semibold text-white">{t.phase}</p>
                <p className="font-mono text-[12px] text-violet pt-0.5">{t.duration}</p>
                <p className="text-[13.5px] leading-relaxed text-mist">{t.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Results */}
      <Section className="py-20 border-t border-line-soft">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading
            kicker="expected outcomes"
            title="What done looks like."
            lede="No invented percentages here — public numbers arrive with our first case studies. These are the outcomes the system is engineered to produce."
          />
          <Reveal delay={0.08}>
            <ul className="space-y-3">
              {service.results.map((r) => (
                <li key={r} className="flex gap-3.5 rounded-lg border border-line bg-panel p-4">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mt-0.5 shrink-0" aria-hidden>
                    <rect x="1" y="1" width="14" height="14" rx="4" stroke="#4D8DFF" strokeWidth="1.2" opacity="0.5" />
                    <path d="M5 8.2 7.2 10.4 11 5.8" stroke="#4D8DFF" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="text-[14px] leading-relaxed text-mist">{r}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>

      {/* FAQ */}
      <Section className="py-20 border-t border-line-soft">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading kicker="faq" title={`Questions about the ${service.name}.`} />
          <Reveal delay={0.08}>
            <Accordion items={service.faq} />
          </Reveal>
        </div>
      </Section>

      {/* Related */}
      <Section className="py-20 border-t border-line-soft">
        <SectionHeading kicker="related systems" title="Often built alongside." />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {others.map((s, i) => (
            <Reveal key={s.slug} delay={i * 0.05}>
              <Link to={`/services/${s.slug}`} className="card-hover group block h-full rounded-xl border border-line bg-panel p-6">
                <h3 className="text-[15px] font-semibold text-white group-hover:text-accent-soft transition-colors">{s.name}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-mist">{s.tagline}</p>
                <p className="mt-4 flex flex-wrap gap-1.5">
                  {s.integrations.slice(0, 3).map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      <CTABand
        title={`Want a ${service.name} built for your stack?`}
        lede="Thirty minutes. We'll map your current workflow, sketch the system live, and give you an honest read on fit, timeline, and price."
      />
    </>
  );
}
