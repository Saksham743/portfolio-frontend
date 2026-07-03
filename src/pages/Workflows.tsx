import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PageHero, Section, Reveal, Tag, ButtonLink, Arrow } from "../components/ui";
import FlowDiagram from "../components/FlowDiagram";
import CTABand from "../components/CTABand";
import { workflows, workflowCategories } from "../data/workflows";
import { cn } from "../utils/cn";
import { useSeo } from "../components/Seo";

export default function Workflows() {
  useSeo(
    "Workflow Library",
    "A library of real workflow architectures: sales, support, lead research, CRM automation, reporting, scheduling, and email — with tools, triggers, and time saved."
  );

  const [filter, setFilter] = useState<string>("All");
  const filtered = filter === "All" ? workflows : workflows.filter((w) => w.category === filter);

  return (
    <>
      <PageHero
        kicker="workflow library"
        title="Workflows, drawn in the open."
        lede="Most studios hide how things work. We'd rather show you the architecture. Each entry below is a system pattern we build — the trigger, the steps, the tools, and the hours it hands back. Every one is customized to your stack before it ships."
      />

      <Section className="pb-6">
        <Reveal>
          <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter workflows by category">
            {["All", ...workflowCategories].map((cat) => (
              <button
                key={cat}
                role="tab"
                aria-selected={filter === cat}
                onClick={() => setFilter(cat)}
                className={cn(
                  "rounded-lg border px-3.5 py-2 font-mono text-[12px] transition-all",
                  filter === cat
                    ? "border-accent/60 bg-accent/10 text-accent-soft"
                    : "border-line bg-panel text-mist hover:text-white hover:border-line"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </Reveal>
      </Section>

      <Section className="py-10 pb-16">
        <motion.div layout className="space-y-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((w) => (
              <motion.div
                key={w.slug}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <div className="card-hover rounded-xl border border-line bg-panel p-6 md:p-8">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <p className="mono-label text-violet">{w.category}</p>
                      <h2 className="mt-2 text-xl font-semibold text-white">{w.name}</h2>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Tag>⏱ {w.timeSaved}</Tag>
                    </div>
                  </div>
                  <p className="mt-4 max-w-3xl text-[14px] leading-relaxed text-mist">{w.overview}</p>

                  <div className="mt-7 rounded-lg border border-line-soft bg-[#0a0c10] p-5">
                    <p className="mb-4 font-mono text-[10.5px] text-faint">
                      <span className="text-accent">trigger:</span> {w.trigger}
                    </p>
                    <FlowDiagram steps={w.steps} />
                  </div>

                  <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-1.5">
                      {w.tools.map((t) => (
                        <Tag key={t}>{t}</Tag>
                      ))}
                    </div>
                    <ButtonLink to="/contact" variant="ghost" className="!px-4 !py-2 text-[12.5px]">
                      Build this for my team <Arrow />
                    </ButtonLink>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <Reveal className="mt-10">
          <div className="rounded-xl border border-dashed border-line bg-panel/50 p-8 text-center">
            <p className="font-mono text-[12px] text-faint">
              Your workflow isn't here? That's normal — the best automations are usually the weird, company-specific ones.
            </p>
            <p className="mt-2 text-[14px] text-mist">
              Describe it on a call and we'll sketch the architecture live.
            </p>
          </div>
        </Reveal>
      </Section>

      <CTABand
        title="Pick a workflow. We'll adapt it to your stack."
        lede="Every pattern in this library gets rebuilt around your tools, your data, and your edge cases. The diagram is the starting point — the engineering is the product."
      />
    </>
  );
}
