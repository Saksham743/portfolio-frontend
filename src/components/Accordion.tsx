import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "../utils/cn";

export interface AccordionItem {
  q: string;
  a: string;
}

export default function Accordion({ items, className }: { items: AccordionItem[]; className?: string }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className={cn("divide-y divide-line-soft rounded-xl border border-line bg-panel", className)}>
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q}>
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-raise/50"
            >
              <span className={cn("text-[14.5px] font-medium transition-colors", isOpen ? "text-white" : "text-mist")}>
                {item.q}
              </span>
              <span
                className={cn(
                  "flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-line font-mono text-xs transition-all",
                  isOpen ? "rotate-45 border-accent/50 text-accent" : "text-faint"
                )}
                aria-hidden
              >
                +
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.28, ease: [0.21, 0.47, 0.32, 0.98] }}
                  className="overflow-hidden"
                >
                  <p className="px-5 pb-5 text-[13.5px] leading-relaxed text-mist max-w-2xl">{item.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
