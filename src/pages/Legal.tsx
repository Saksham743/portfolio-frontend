import { PageHero, Section, Reveal } from "../components/ui";
import { useSeo } from "../components/Seo";

function LegalBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <Reveal>
      <div className="border-b border-line-soft pb-8 last:border-0">
        <h2 className="text-lg font-semibold text-white">{title}</h2>
        <div className="mt-3 space-y-3 text-[13.5px] leading-relaxed text-mist max-w-3xl">{children}</div>
      </div>
    </Reveal>
  );
}

export function Privacy() {
  useSeo("Privacy Policy", "How Build With Saksham handles data: minimal collection, no selling, client data stays in client infrastructure.");
  return (
    <>
      <PageHero
        kicker="legal"
        title="Privacy Policy"
        lede="The short version: we collect as little as possible, we sell nothing, and client systems run in client infrastructure. The longer version is below."
      />
      <Section className="pb-24">
        <div className="space-y-8">
          <LegalBlock title="What we collect">
            <p>
              When you contact us or book a call, we collect what you choose to share: your name, email, company, and
              anything you tell us about your workflows. This website itself sets no marketing trackers and runs no
              third-party advertising scripts.
            </p>
          </LegalBlock>
          <LegalBlock title="How we use it">
            <p>
              To respond to you, prepare for calls, scope projects, and deliver work. That's the list. We do not sell,
              rent, or trade your information, and we don't add you to a newsletter you didn't ask for.
            </p>
          </LegalBlock>
          <LegalBlock title="Client project data">
            <p>
              Systems we build run in your infrastructure, under your accounts, with credentials held in your secrets
              manager. We access production data only as needed to build and debug, under the terms of our agreement
              and any NDA in place. After handover, we retain no credentials and no copies of your data.
            </p>
          </LegalBlock>
          <LegalBlock title="AI model providers">
            <p>
              Where a system sends data to model providers (such as OpenAI or Anthropic), that data is scoped to what
              the task requires. We configure zero-retention API options where providers offer them, and document
              exactly what flows where as part of every project's architecture docs.
            </p>
          </LegalBlock>
          <LegalBlock title="Your rights">
            <p>
              Ask us what we hold about you, ask us to correct it, or ask us to delete it — we'll do so promptly.
              Email hello@buildwithsaksham.com for any privacy request.
            </p>
          </LegalBlock>
          <LegalBlock title="Changes">
            <p>
              If this policy changes materially, we'll update this page and note the date. Last updated: 2025.
            </p>
          </LegalBlock>
        </div>
      </Section>
    </>
  );
}

export function Terms() {
  useSeo("Terms of Service", "Terms of service for Build With Saksham: project agreements, ownership, and responsibilities.");
  return (
    <>
      <PageHero
        kicker="legal"
        title="Terms of Service"
        lede="Plain-language terms for using this website and working with the studio. Individual projects are governed by their own written agreements."
      />
      <Section className="pb-24">
        <div className="space-y-8">
          <LegalBlock title="This website">
            <p>
              Content on this site is provided for information. Workflow patterns, timelines, and outcome descriptions
              illustrate how we work; specifics for any engagement are defined in a written project agreement, not by
              this website.
            </p>
          </LegalBlock>
          <LegalBlock title="Project engagements">
            <p>
              Every project runs under a signed agreement covering scope, price, timeline, confidentiality, and IP
              assignment. Where anything on this site and a signed agreement differ, the agreement wins.
            </p>
          </LegalBlock>
          <LegalBlock title="Ownership">
            <p>
              Unless a project agreement states otherwise, code, prompts, evaluations, and documentation produced for a
              client project are assigned to the client on payment. We may retain and reuse general-purpose techniques,
              patterns, and know-how that contain no client confidential information.
            </p>
          </LegalBlock>
          <LegalBlock title="No fabricated claims">
            <p>
              We publish no invented metrics, testimonials, or client logos. Any performance figures that appear on
              this site in future will come from real engagements, published with client consent.
            </p>
          </LegalBlock>
          <LegalBlock title="Liability">
            <p>
              This website is provided as-is. To the extent permitted by law, we are not liable for decisions made
              solely on the basis of website content. Project-specific warranties and liability terms live in project
              agreements.
            </p>
          </LegalBlock>
          <LegalBlock title="Contact">
            <p>Questions about these terms: hello@buildwithsaksham.com.</p>
          </LegalBlock>
        </div>
      </Section>
    </>
  );
}
