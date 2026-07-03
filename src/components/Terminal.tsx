import { ReactNode } from "react";
import { cn } from "../utils/cn";

export default function Terminal({
  title,
  children,
  className,
}: {
  title: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("overflow-hidden rounded-xl border border-line bg-[#0a0c10] shadow-xl shadow-black/40", className)}>
      <div className="flex items-center gap-2 border-b border-line-soft bg-panel px-4 py-2.5">
        <div className="flex items-center gap-1.5" aria-hidden>
          <span className="h-2.5 w-2.5 rounded-full bg-[#2a3140]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#2a3140]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#2a3140]" />
        </div>
        <span className="ml-2 font-mono text-[11px] text-faint">{title}</span>
      </div>
      <div className="p-4 font-mono text-[12px] leading-[1.8] text-mist overflow-x-auto">{children}</div>
    </div>
  );
}
