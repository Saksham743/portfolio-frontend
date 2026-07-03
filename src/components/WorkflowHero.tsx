import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "../utils/cn";

const steps = [
  { label: "Lead", meta: "webhook · new signup", log: "lead.captured  id=ld_8f2k  source=inbound" },
  { label: "AI Research", meta: "clay · crunchbase", log: "research.done  signals=3  stack=detected" },
  { label: "Qualification", meta: "icp score: rules v12", log: "qualify.pass   score=87/100  tier=A" },
  { label: "Personalized Outreach", meta: "draft · grounded in signals", log: "email.sent     seq=intro_v4  spam_score=0.1" },
  { label: "Meeting Booked", meta: "cal.com · 30 min", log: "meeting.booked thu 14:00  owner=founder" },
  { label: "CRM Updated", meta: "hubspot · full provenance", log: "crm.synced     deal=created  fields=14" },
  { label: "Slack Notification", meta: "#pipeline", log: "notify.sent    → #pipeline  ✓ run complete" },
];

const STEP_MS = 1350;
const RESET_PAUSE = 2;

export default function WorkflowHero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((a) => (a + 1) % (steps.length + RESET_PAUSE));
    }, STEP_MS);
    return () => clearInterval(id);
  }, []);

  const runComplete = active >= steps.length;

  return (
    <div className="relative w-full max-w-md">
      <div
        className="absolute -inset-8 rounded-[32px] opacity-40 blur-3xl"
        style={{ background: "radial-gradient(closest-side, rgba(77,141,255,0.25), rgba(139,124,246,0.12), transparent)" }}
        aria-hidden
      />
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.25, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="relative rounded-2xl border border-line bg-panel/90 backdrop-blur-sm shadow-2xl shadow-black/50"
      >
        {/* Window chrome */}
        <div className="flex items-center justify-between border-b border-line-soft px-4 py-3">
          <div className="flex items-center gap-1.5" aria-hidden>
            <span className="h-2.5 w-2.5 rounded-full bg-[#2a3140]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#2a3140]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#2a3140]" />
          </div>
          <span className="font-mono text-[11px] text-faint">outbound-engine · run #4,217</span>
          <span className={cn("flex items-center gap-1.5 font-mono text-[10px]", runComplete ? "text-emerald-400" : "text-accent")}>
            <span className={cn("h-1.5 w-1.5 rounded-full", runComplete ? "bg-emerald-400" : "bg-accent animate-pulse")} />
            {runComplete ? "COMPLETE" : "RUNNING"}
          </span>
        </div>

        {/* Pipeline */}
        <div className="p-5">
          <ol className="relative">
            {steps.map((step, i) => {
              const done = active > i;
              const current = active === i;
              return (
                <li key={step.label} className="relative flex gap-3.5 pb-4 last:pb-0">
                  {/* connector */}
                  {i < steps.length - 1 && (
                    <span className="absolute left-[11px] top-6 bottom-0 w-px" aria-hidden>
                      <span className="absolute inset-0 bg-line" />
                      <motion.span
                        className="absolute inset-x-0 top-0 bg-gradient-to-b from-accent to-violet"
                        initial={false}
                        animate={{ height: done ? "100%" : "0%" }}
                        transition={{ duration: 0.45, ease: "easeOut" }}
                      />
                    </span>
                  )}
                  {/* node */}
                  <span
                    className={cn(
                      "relative z-10 mt-0.5 flex h-[23px] w-[23px] shrink-0 items-center justify-center rounded-full border transition-colors duration-300",
                      done
                        ? "border-accent/60 bg-accent/15"
                        : current
                          ? "border-accent bg-accent/20"
                          : "border-line bg-raise"
                    )}
                  >
                    {done ? (
                      <svg width="10" height="10" viewBox="0 0 12 12" fill="none" aria-hidden>
                        <path d="M2.5 6.5 5 9l4.5-5.5" stroke="#79aaff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    ) : (
                      <span
                        className={cn(
                          "h-1.5 w-1.5 rounded-full",
                          current ? "bg-accent animate-[pulse-node_0.9s_ease-in-out_infinite]" : "bg-faint/50"
                        )}
                      />
                    )}
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-baseline justify-between gap-3">
                      <span
                        className={cn(
                          "text-[13.5px] font-medium transition-colors duration-300",
                          done ? "text-white" : current ? "text-accent-soft" : "text-faint"
                        )}
                      >
                        {step.label}
                      </span>
                      <span className={cn("font-mono text-[10px] transition-colors", done || current ? "text-faint" : "text-faint/40")}>
                        {step.meta}
                      </span>
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>

        {/* Trace log */}
        <div className="border-t border-line-soft bg-[#0a0c10] px-5 py-3 rounded-b-2xl min-h-[42px]">
          <AnimatePresence mode="wait">
            <motion.p
              key={runComplete ? "done" : active}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.25 }}
              className="font-mono text-[11px] text-faint truncate"
            >
              <span className="text-violet">trace</span>{" "}
              <span className="text-mist">{runComplete ? "run.complete  duration=41s  human_minutes_saved≈45" : steps[active]?.log}</span>
            </motion.p>
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}
