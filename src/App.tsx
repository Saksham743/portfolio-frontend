import { useEffect, useRef } from "react";
import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import Process from "./pages/Process";
import Workflows from "./pages/Workflows";
import About from "./pages/About";
import Resources from "./pages/Resources";
import FAQPage from "./pages/FAQPage";
import Contact from "./pages/Contact";
import { Privacy, Terms } from "./pages/Legal";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);
  return null;
}

/** Subtle cursor-following glow, rendered behind everything. */
function MouseGlow() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        el.style.transform = `translate(${e.clientX - 300}px, ${e.clientY - 300}px)`;
      });
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);
  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-0 hidden h-[600px] w-[600px] rounded-full opacity-[0.07] blur-3xl lg:block"
      style={{ background: "radial-gradient(closest-side, #4d8dff, transparent)" }}
    />
  );
}

export default function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="relative min-h-screen bg-ink text-white">
        <MouseGlow />
        <Nav />
        <main className="relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:slug" element={<ServiceDetail />} />
            <Route path="/process" element={<Process />} />
            <Route path="/workflows" element={<Workflows />} />
            <Route path="/about" element={<About />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/book-a-call" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
}
