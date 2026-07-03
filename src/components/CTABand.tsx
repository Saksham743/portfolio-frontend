import { Section, Reveal, ButtonLink, Arrow } from "./ui";

export default function CTABand({
  title = "Ready to get your team's time back?",
  lede = "A 30-minute discovery call. We map your most expensive repetitive workflow, tell you honestly if automation fits, and outline what we'd build. No deck, no pressure.",
}: {
  title?: string;
  lede?: string;
}) {
  return (
    <Section className="py-24 md:py-32">
      <Reveal>
        <div className="relative overflow-hidden rounded-2xl border border-line bg-panel px-8 py-16 text-center md:px-16 md:py-20">
          <div className="hairline-grid absolute inset-0 opacity-70" aria-hidden />
          <div
            className="absolute left-1/2 top-0 h-64 w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
            style={{ background: "radial-gradient(closest-side, rgba(77,141,255,0.22), rgba(139,124,246,0.1), transparent)" }}
            aria-hidden
          />
          <div className="relative">
            <p className="mono-label text-accent">next step</p>
            <h2 className="mx-auto mt-4 max-w-xl text-3xl font-semibold tracking-tight text-white md:text-4xl leading-[1.15]">
              {title}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-mist">{lede}</p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <ButtonLink to="/contact">
                Book a Call <Arrow />
              </ButtonLink>
              <ButtonLink to="/workflows" variant="ghost">
                Explore Live Workflows
              </ButtonLink>
            </div>
            <p className="mt-6 font-mono text-[11px] text-faint">
              Currently partnering with a small number of startups. Honest fit assessment on every call.
            </p>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
