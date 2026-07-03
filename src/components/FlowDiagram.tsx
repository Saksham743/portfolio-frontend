import { Fragment } from "react";
import { cn } from "../utils/cn";

/**
 * Compact horizontal flow diagram used across service pages and the workflow library.
 * Nodes wrap on small screens; connectors animate with a dashed flow.
 */
export default function FlowDiagram({ steps, className }: { steps: string[]; className?: string }) {
  return (
    <div className={cn("flex flex-wrap items-center gap-y-3", className)} role="img" aria-label={`Workflow: ${steps.join(", then ")}`}>
      {steps.map((step, i) => (
        <Fragment key={step + i}>
          <span
            className={cn(
              "rounded-lg border px-3 py-1.5 font-mono text-[11.5px] whitespace-nowrap",
              i === 0
                ? "border-accent/50 bg-accent/10 text-accent-soft"
                : i === steps.length - 1
                  ? "border-violet/50 bg-violet/10 text-violet"
                  : "border-line bg-raise text-mist"
            )}
          >
            {step}
          </span>
          {i < steps.length - 1 && (
            <svg width="28" height="10" viewBox="0 0 28 10" className="shrink-0 mx-0.5" aria-hidden>
              <line x1="0" y1="5" x2="22" y2="5" stroke="rgba(77,141,255,0.45)" strokeWidth="1.2" className="flow-line" />
              <path d="M21 1.5 26 5l-5 3.5" fill="none" stroke="rgba(77,141,255,0.45)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </Fragment>
      ))}
    </div>
  );
}
