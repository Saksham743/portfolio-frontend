import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PageHero, Section, Reveal, Tag } from "../components/ui";
import CTABand from "../components/CTABand";
import { posts } from "../data/posts";
import { cn } from "../utils/cn";
import { useSeo } from "../components/Seo";

const categories = ["All", ...new Set(posts.map((p) => p.category))];

export default function Resources() {
  useSeo(
    "Resources",
    "Technical writing on AI engineering, workflow automation, n8n, Temporal, LangGraph, Model Context Protocol, prompt engineering, and automation playbooks."
  );

  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? posts : posts.filter((p) => p.category === filter);

  return (
    <>
      <PageHero
        kicker="resources"
        title="Engineering notes, published as we go."
        lede="Writing on how AI employees actually get built: architecture decisions, orchestration trade-offs, eval practice, and automation playbooks. Written for technical founders, from real project work — no thought-leadership filler."
      />

      <Section className="pb-6">
        <Reveal>
          <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter articles by topic">
            {categories.map((cat) => (
              <button
                key={cat}
                role="tab"
                aria-selected={filter === cat}
                onClick={() => setFilter(cat)}
                className={cn(
                  "rounded-lg border px-3.5 py-2 font-mono text-[11.5px] transition-all",
                  filter === cat
                    ? "border-accent/60 bg-accent/10 text-accent-soft"
                    : "border-line bg-panel text-mist hover:text-white"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </Reveal>
      </Section>

      <Section className="py-10 pb-16">
        <motion.div layout className="grid gap-4 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => (
              <motion.article
                key={p.slug}
                layout
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.28 }}
                className="card-hover group relative flex h-full flex-col rounded-xl border border-line bg-panel p-6 md:p-7"
              >
                <div className="flex items-center justify-between gap-3">
                  <Tag>{p.category}</Tag>
                  <span className="font-mono text-[11px] text-faint">{p.readTime}</span>
                </div>
                <h2 className="mt-4 text-lg font-semibold leading-snug text-white group-hover:text-accent-soft transition-colors">
                  {p.title}
                </h2>
                <p className="mt-3 flex-1 text-[13.5px] leading-relaxed text-mist">{p.excerpt}</p>
                <div className="mt-5 flex items-center justify-between border-t border-line-soft pt-4">
                  <span className="inline-flex items-center gap-2 font-mono text-[11px] text-violet">
                    <span className="h-1.5 w-1.5 rounded-full bg-violet/70 animate-pulse" aria-hidden />
                    In progress — publishing soon
                  </span>
                  <span className="font-mono text-[11px] text-faint">draft v0.{(p.slug.length % 7) + 1}</span>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        <Reveal className="mt-10">
          <div className="rounded-xl border border-dashed border-line bg-panel/50 p-8 text-center">
            <p className="font-mono text-[12px] text-accent">$ subscribe --notify-on-publish</p>
            <p className="mt-3 text-[14.5px] text-mist max-w-xl mx-auto">
              We publish when a piece is genuinely useful, not on a content calendar. Want a note when the first
              articles ship? Mention it when you <span className="text-white">book a call</span> or email{" "}
              <span className="text-white">hello@buildwithsaksham.com</span>.
            </p>
          </div>
        </Reveal>
      </Section>

      <CTABand
        title="Prefer answers to articles?"
        lede="Most of what we'll eventually publish, we're happy to explain live — applied to your stack instead of a hypothetical one."
      />
    </>
  );
}
