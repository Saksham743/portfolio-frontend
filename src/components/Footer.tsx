import { Link } from "react-router-dom";
import { services } from "../data/services";

const columns = [
  {
    title: "Services",
    links: services.map((s) => ({ label: s.name, to: `/services/${s.slug}` })),
  },
  {
    title: "Studio",
    links: [
      { label: "Process", to: "/process" },
      { label: "Workflow Library", to: "/workflows" },
      { label: "About", to: "/about" },
      { label: "Resources", to: "/resources" },
      { label: "FAQ", to: "/faq" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "Book a Call", to: "/contact" },
      { label: "Contact", to: "/contact" },
      { label: "Privacy Policy", to: "/privacy" },
      { label: "Terms of Service", to: "/terms" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-line-soft bg-[#090b0e]">
      <div className="mx-auto max-w-6xl px-6 py-16 md:px-10">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <svg width="24" height="24" viewBox="0 0 32 32" aria-hidden>
                <rect width="32" height="32" rx="7" fill="#12161d" stroke="#232a36" />
                <path d="M9 22 L16 9 L23 22" stroke="#4D8DFF" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="16" cy="22" r="2.2" fill="#8B7CF6" />
              </svg>
              <span className="text-sm font-semibold text-white">Build With Saksham</span>
            </div>
            <p className="mt-4 max-w-xs text-[13px] leading-relaxed text-faint">
              A product engineering studio building custom AI employees for startups. We don't sell AI — we sell time.
            </p>
            <p className="mt-6 font-mono text-[11px] text-faint">
              <span className="text-accent">$</span> status: taking on a limited number of partners
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="mono-label text-faint">{col.title}</h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link to={l.to} className="text-[13px] text-mist transition-colors hover:text-white">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-line-soft pt-8 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-faint">© {new Date().getFullYear()} Build With Saksham. Handcrafted, like everything we ship.</p>
          <p className="font-mono text-[11px] text-faint">
            hello@buildwithsaksham.com · <span className="text-mist">LinkedIn</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
