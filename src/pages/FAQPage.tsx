import { PageHero, Section, Reveal, Kicker } from "../components/ui";
import Accordion from "../components/Accordion";
import CTABand from "../components/CTABand";
import { faqGroups } from "../data/faqs";
import { useSeo } from "../components/Seo";

export default function FAQPage() {
  useSeo(
    "FAQ",
    "Answers to the questions founders actually ask: engineering process, code ownership, security, data handling, timelines, and pricing."
  );

  return (
    <>
      <PageHero
        kicker="faq"
        title="Asked by founders. Answered without spin."
        lede="Everything below is how we actually operate. If your question isn't here, it's a good reason to book a call — the honest answers are the whole point."
      />

      <Section className="pb-16">
        <div className="space-y-16">
          {faqGroups.map((group, gi) => (
            <div key={group.group} className="grid gap-8 lg:grid-cols-[260px_1fr]">
              <Reveal delay={gi * 0.03}>
                <div className="lg:sticky lg:top-24">
                  <Kicker className="mb-3">{String(gi + 1).padStart(2, "0")}</Kicker>
                  <h2 className="text-xl font-semibold text-white">{group.group}</h2>
                  <p className="mt-2 font-mono text-[11px] text-faint">{group.items.length} questions</p>
                </div>
              </Reveal>
              <Reveal delay={gi * 0.03 + 0.06}>
                <Accordion items={group.items} />
              </Reveal>
            </div>
          ))}
        </div>
      </Section>

      <CTABand
        title="Still have a question?"
        lede="Ask it live. Thirty minutes, no pitch deck, and if we're not the right fit we'll point you somewhere better."
      />
    </>
  );
}
