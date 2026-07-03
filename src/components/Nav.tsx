import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { services } from "../data/services";
import { cn } from "../utils/cn";

const links = [
  { to: "/process", label: "Process" },
  { to: "/workflows", label: "Workflow Library" },
  { to: "/about", label: "About" },
  { to: "/resources", label: "Resources" },
  { to: "/faq", label: "FAQ" },
];

function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2.5 group" aria-label="Build With Saksham — home">
      <svg width="26" height="26" viewBox="0 0 32 32" aria-hidden>
        <rect width="32" height="32" rx="7" fill="#12161d" stroke="#232a36" />
        <path d="M9 22 L16 9 L23 22" stroke="#4D8DFF" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="16" cy="22" r="2.2" fill="#8B7CF6" />
      </svg>
      <span className="text-[15px] font-semibold tracking-tight text-white">
        Build With Saksham
      </span>
    </Link>
  );
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "bg-ink/85 backdrop-blur-xl border-b border-line-soft" : "bg-transparent border-b border-transparent"
      )}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 md:px-10">
        <Logo />

        {/* Desktop */}
        <div className="hidden items-center gap-1 lg:flex">
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <NavLink
              to="/services"
              className={({ isActive }) =>
                cn(
                  "flex items-center gap-1 rounded-md px-3 py-2 text-[13.5px] transition-colors",
                  isActive ? "text-white" : "text-mist hover:text-white"
                )
              }
            >
              Services
              <svg width="10" height="10" viewBox="0 0 12 12" fill="none" aria-hidden className={cn("transition-transform", servicesOpen && "rotate-180")}>
                <path d="M2.5 4.5 6 8l3.5-3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </NavLink>
            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 6, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 6, scale: 0.98 }}
                  transition={{ duration: 0.16 }}
                  className="absolute left-0 top-full w-[340px] pt-2"
                >
                  <div className="rounded-xl border border-line bg-panel p-2 shadow-2xl shadow-black/50">
                    {services.map((s) => (
                      <Link
                        key={s.slug}
                        to={`/services/${s.slug}`}
                        className="block rounded-lg px-3 py-2.5 hover:bg-raise transition-colors group"
                      >
                        <span className="block text-[13.5px] font-medium text-white group-hover:text-accent-soft transition-colors">
                          {s.name}
                        </span>
                        <span className="mt-0.5 block text-xs text-faint">{s.kicker}</span>
                      </Link>
                    ))}
                    <div className="mt-1 border-t border-line-soft pt-1">
                      <Link to="/services" className="block rounded-lg px-3 py-2 text-xs font-mono text-accent hover:bg-raise transition-colors">
                        View all services →
                      </Link>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                cn(
                  "rounded-md px-3 py-2 text-[13.5px] transition-colors",
                  isActive ? "text-white" : "text-mist hover:text-white"
                )
              }
            >
              {l.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            to="/contact"
            className="rounded-lg bg-accent px-4 py-2 text-[13.5px] font-semibold text-ink transition-all hover:bg-accent-soft shadow-[0_0_20px_-6px_rgba(77,141,255,0.6)]"
          >
            Book a Call
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-mist hover:text-white p-2"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
            {mobileOpen ? (
              <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            ) : (
              <path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22 }}
            className="lg:hidden overflow-hidden border-b border-line bg-ink/95 backdrop-blur-xl"
          >
            <div className="px-6 py-4 space-y-1">
              <Link to="/services" className="block rounded-md px-3 py-2.5 text-sm font-medium text-white hover:bg-raise">
                Services
              </Link>
              <div className="pl-3 space-y-0.5">
                {services.map((s) => (
                  <Link key={s.slug} to={`/services/${s.slug}`} className="block rounded-md px-3 py-2 text-[13px] text-mist hover:text-white hover:bg-raise">
                    {s.name}
                  </Link>
                ))}
              </div>
              {links.map((l) => (
                <Link key={l.to} to={l.to} className="block rounded-md px-3 py-2.5 text-sm font-medium text-white hover:bg-raise">
                  {l.label}
                </Link>
              ))}
              <Link to="/contact" className="mt-2 block rounded-lg bg-accent px-4 py-2.5 text-center text-sm font-semibold text-ink">
                Book a Call
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
