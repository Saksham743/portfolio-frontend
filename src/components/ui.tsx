import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { cn } from "../utils/cn";

/* ---------- Buttons ---------- */

export function ButtonLink({
  to,
  children,
  variant = "primary",
  className,
}: {
  to: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
}) {
  const base =
    "inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium transition-all duration-200";
  const styles =
    variant === "primary"
      ? "bg-accent text-ink hover:bg-accent-soft shadow-[0_0_24px_-6px_rgba(77,141,255,0.55)] hover:shadow-[0_0_32px_-4px_rgba(77,141,255,0.7)] font-semibold"
      : "border border-line text-mist hover:text-white hover:border-[rgba(77,141,255,0.4)] bg-panel/60";
  return (
    <Link to={to} className={cn(base, styles, className)}>
      {children}
    </Link>
  );
}

export function Arrow() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ---------- Typography ---------- */

export function Kicker({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p className={cn("mono-label text-accent flex items-center gap-2", className)}>
      <span className="inline-block h-px w-6 bg-accent/60" aria-hidden />
      {children}
    </p>
  );
}

export function SectionHeading({
  kicker,
  title,
  lede,
  className,
}: {
  kicker?: string;
  title: string;
  lede?: string;
  className?: string;
}) {
  return (
    <Reveal className={cn("max-w-2xl", className)}>
      {kicker && <Kicker className="mb-4">{kicker}</Kicker>}
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white leading-[1.15]">{title}</h2>
      {lede && <p className="mt-4 text-mist leading-relaxed text-[15px] md:text-base">{lede}</p>}
    </Reveal>
  );
}

/* ---------- Layout ---------- */

export function Section({ children, className, id }: { children: ReactNode; className?: string; id?: string }) {
  return (
    <section id={id} className={cn("px-6 md:px-10", className)}>
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}

export function Card({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn("rounded-xl border border-line bg-panel p-6", className)}>{children}</div>
  );
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-md border border-line bg-raise px-2.5 py-1 font-mono text-[11px] text-mist">
      {children}
    </span>
  );
}

/* ---------- Motion ---------- */

export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </motion.div>
  );
}

/* ---------- Page hero (interior pages) ---------- */

export function PageHero({
  kicker,
  title,
  lede,
  children,
}: {
  kicker: string;
  title: string;
  lede?: string;
  children?: ReactNode;
}) {
  return (
    <Section className="relative pt-36 pb-16 md:pt-44 md:pb-20">
      <div className="dot-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black,transparent)]" aria-hidden />
      <div className="relative max-w-3xl">
        <Reveal>
          <Kicker className="mb-5">{kicker}</Kicker>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white leading-[1.08]">{title}</h1>
          {lede && <p className="mt-6 text-lg text-mist leading-relaxed max-w-2xl">{lede}</p>}
          {children && <div className="mt-8">{children}</div>}
        </Reveal>
      </div>
    </Section>
  );
}
