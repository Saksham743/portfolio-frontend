import { useState, useRef, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Mail,
  Instagram,
  Linkedin,
  ArrowRight,
  ExternalLink,
  Menu,
  X,
  Code,
  Video,
  Bot,
  PenTool,
  MessageSquare,
  User,
  Sparkles,
  Globe,
  Heart
} from 'lucide-react'

interface Project {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  link?: string
}

interface Skill {
  name: string
  icon: React.ReactNode
  description: string
  level: number
}

const App = () => {
  // State
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  // Refs for scroll sections
  const heroRef = useRef<HTMLElement | null>(null)
  const aboutRef = useRef<HTMLElement | null>(null)
  const projectsRef = useRef<HTMLElement | null>(null)
  const servicesRef = useRef<HTMLElement | null>(null)
  const contactRef = useRef<HTMLElement | null>(null)

  // Scroll to section
  const scrollToSection = useCallback((sectionRef: React.RefObject<HTMLElement | null>) => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
    setIsMenuOpen(false)
  }, [])

  // Close menu on escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false)
        setSelectedProject(null)
      }
    }
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [])

  // Form handlers
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate sending
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("Server error. Try again later.");
    }

    setIsSubmitting(false);
  }

  // Projects data
  const projects: Project[] = [
    {
      id: 1,
      title: "Student Portfolio Website",
      description: "A clean and modern portfolio website built for a student to showcase skills and projects. Built with React and Tailwind CSS.",
      image: "/images/project1.jpg",
      tags: ["React", "TypeScript", "Tailwind", "Framer Motion"],
      link: "#"
    },
    {
      id: 2,
      title: "Local Business Landing Page",
      description: "A responsive landing page designed to help a small business attract customers online. Includes booking calendar and testimonials.",
      image: "/images/project2.jpg",
      tags: ["HTML", "CSS", "JavaScript", "Figma"],
      link: "#"
    },
    {
      id: 3,
      title: "Short-Form Video Content",
      description: "Edited short-form videos with captions optimized for Instagram Reels and YouTube Shorts. Used CapCut and AI tools for efficiency.",
      image: "/images/project3.jpg",
      tags: ["Video Editing", "CapCut", "Adobe Premiere", "AI Tools"],
      link: "#"
    }
  ]

  // Skills data
  const skills: Skill[] = [
    {
      name: "Landing Page Development",
      icon: <Code className="w-8 h-8" />,
      description: "Modern, responsive websites using React and Tailwind CSS",
      level: 90
    },
    {
      name: "Short-Form Video Editing",
      icon: <Video className="w-8 h-8" />,
      description: "Reels & Shorts optimized for engagement and reach",
      level: 85
    },
    {
      name: "AI Chatbots & Automation",
      icon: <Bot className="w-8 h-8" />,
      description: "Basic AI integrations for productivity and customer support",
      level: 75
    },
    {
      name: "Content Writing & Communication",
      icon: <PenTool className="w-8 h-8" />,
      description: "Clear, persuasive English copy for web and social media",
      level: 88
    }
  ]

  // Animation variants
  const cardHoverVariants = {
    hover: {
      scale: 1.03,
      transition: { duration: 0.3, ease: "easeOut" as const }
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-50 to-white text-zinc-900 font-sans overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-lg border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-gradient-to-br from-violet-500 via-fuchsia-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-sm">
              <span className="text-white font-bold text-xl tracking-tighter">SR</span>
            </div>
            <div>
              <div className="font-semibold text-xl tracking-tighter">Saksham Rathod</div>
              <div className="text-[10px] uppercase tracking-[2px] text-zinc-500 font-mono -mt-1">FREELANCER</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10 text-sm font-medium">
            <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection(aboutRef); }} className="hover:text-violet-600 transition-colors duration-200">About</a>
            <a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection(projectsRef); }} className="hover:text-violet-600 transition-colors duration-200">Projects</a>
            <a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection(servicesRef); }} className="hover:text-violet-600 transition-colors duration-200">Services</a>
            <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection(contactRef); }} className="hover:text-violet-600 transition-colors duration-200">Contact</a>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection(projectsRef)}
              className="bg-zinc-900 text-white text-sm font-medium px-6 py-2.5 rounded-2xl flex items-center gap-2 hover:bg-violet-600 transition-all active:scale-95 shadow-sm"
            >
              View Work
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center text-zinc-700 hover:text-zinc-900 transition-colors"
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </AnimatePresence>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-b border-zinc-100 overflow-hidden"
            >
              <div className="px-6 py-8 flex flex-col gap-6 text-base font-medium">
                <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection(aboutRef); }} className="py-2 hover:text-violet-600 transition-colors">About Me</a>
                <a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection(projectsRef); }} className="py-2 hover:text-violet-600 transition-colors">Projects</a>
                <a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection(servicesRef); }} className="py-2 hover:text-violet-600 transition-colors">Services</a>
                <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection(contactRef); }} className="py-2 hover:text-violet-600 transition-colors">Contact</a>

                <div className="pt-4 border-t border-zinc-100">
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={() => { scrollToSection(projectsRef); }}
                    className="w-full bg-zinc-900 text-white font-medium py-3.5 rounded-2xl flex items-center justify-center gap-3 active:scale-95 transition-all"
                  >
                    <Sparkles className="w-5 h-5" />
                    SEE MY WORK
                  </motion.button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* HERO SECTION */}
      <section ref={heroRef} className="relative min-h-[100dvh] flex items-center pt-20 pb-24 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(at_top_right,#f3e8ff_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(at_bottom_left,#e0f2fe_0%,transparent_60%)]" />

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.015] bg-[linear-gradient(#e4e4e7_1px,transparent_1px),linear-gradient(90deg,#e4e4e7_1px,transparent_1px)] bg-[size:40px_40px]" />

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-16 items-center relative z-10">
          {/* Left Content */}
          <div className="md:col-span-7 space-y-10">
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 bg-white border border-zinc-200 rounded-full px-4 py-1.5 text-sm text-zinc-600 shadow-sm"
              >
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                Available for freelance • Class of 2026
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-[3.25rem] md:text-[4.1rem] leading-[1.05] font-semibold tracking-[-0.02em] text-balance"
              >
                I build clean websites<br />
                and engaging short-form videos
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.25 }}
                className="text-xl text-zinc-600 max-w-[38ch] leading-relaxed"
              >
                Helping students, creators, and small businesses look professional online using modern web tools and AI.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="flex flex-wrap gap-4 pt-4"
              >
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => scrollToSection(projectsRef)}
                  className="group bg-zinc-900 hover:bg-zinc-800 transition-all text-white font-semibold text-base px-10 py-[17px] rounded-3xl flex items-center gap-3 shadow-xl shadow-zinc-900/30 active:scale-95"
                >
                  View My Work
                  <div className="group-hover:rotate-12 transition-transform">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => scrollToSection(contactRef)}
                  className="border border-zinc-300 hover:border-zinc-400 bg-white hover:bg-zinc-50 transition-all font-medium text-base px-9 py-[17px] rounded-3xl flex items-center gap-3 active:scale-95"
                >
                  Let's Talk
                  <MessageSquare className="w-5 h-5 text-zinc-500" />
                </motion.button>
              </motion.div>

              {/* Trust signals */}
              <div className="flex items-center gap-12 pt-8 text-sm">
                <div>
                  <div className="text-3xl font-semibold text-emerald-600">18</div>
                  <div className="text-zinc-500 tracking-wide text-xs uppercase mt-0.5">Projects Delivered</div>
                </div>
                <div>
                  <div className="text-3xl font-semibold text-violet-600">4.9</div>
                  <div className="text-zinc-500 tracking-wide text-xs uppercase mt-0.5">Avg Rating</div>
                </div>
                <div>
                  <div className="text-3xl font-semibold text-amber-600">12</div>
                  <div className="text-zinc-500 tracking-wide text-xs uppercase mt-0.5">Happy Clients</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="md:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.92, rotate: -6 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative"
            >
              {/* Main Image */}
              <div className="aspect-[5/4] relative rounded-[2.25rem] overflow-hidden shadow-2xl shadow-zinc-400/30 ring-1 ring-zinc-100 bg-zinc-100">
                <img
                  src="/images/hero-bg.jpg"
                  alt="Modern workspace with laptop"
                  className="w-full h-full object-cover grayscale-[0.6] hover:grayscale-0 transition-all duration-700"
                />

                {/* Floating profile card */}
                <div className="absolute -bottom-6 -right-6 bg-white rounded-3xl shadow-xl p-5 w-52 border border-zinc-100">
                  <div className="flex gap-4 items-center">
                    <div className="w-16 h-16 rounded-2xl overflow-hidden ring-4 ring-white shadow-sm">
                      <img
                        src="/images/profile.jpeg"
                        alt="Saksham Rathod"
                        className="object-cover w-full h-full"
                      />
                    </div>

                    <div className="space-y-1">
                      <div className="font-semibold">Saksham Rathod</div>
                      <div className="text-emerald-600 text-xs font-mono tracking-widest uppercase">AVAILABLE</div>
                      <div className="text-[11px] text-zinc-500 leading-none">Robotics & Automation • Year 2</div>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-zinc-100 flex items-center gap-4 text-[11px] text-zinc-500">
                    <div>🇮🇳 India</div>
                    <div>UTC+5:30 (IST)</div>
                    <div>9am – 6pm</div>
                  </div>
                </div>

                {/* Decorative badges */}
                <div className="absolute -top-5 -left-5 bg-white/95 backdrop-blur-xl text-xs font-mono uppercase tracking-widest px-4 py-2.5 rounded-2xl shadow flex items-center gap-2 border border-white">
                  <Sparkles className="w-4 h-4 text-amber-500" />
                  AI Enhanced
                </div>
              </div>

              {/* Floating metrics */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
                className="absolute -top-8 -right-10 bg-white rounded-3xl shadow-lg px-6 py-4 border border-zinc-100 flex items-center gap-4 text-sm"
              >
                <div className="bg-gradient-to-br from-cyan-100 to-violet-100 w-12 h-12 rounded-2xl flex items-center justify-center text-3xl">📈</div>
                <div>
                  <div className="font-semibold text-lg leading-none">+240%</div>
                  <div className="text-zinc-500 text-xs">Engagement</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll prompt */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-zinc-400 text-xs tracking-widest font-mono uppercase">
          <span>SCROLL</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.8 }}
            className="w-5 h-8 border-2 border-current border-t-transparent rounded-full flex items-center justify-center"
          >
            <div className="w-0.5 h-2 bg-current rounded-full -mt-1" />
          </motion.div>
        </div>
      </section>

      {/* ABOUT / SKILLS SECTION */}
      <section ref={aboutRef} id="about" className="py-24 bg-white border-t border-b border-zinc-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-16 items-start">
            {/* Left Text */}
            <div className="md:col-span-5 space-y-10">
              <div className="uppercase text-xs tracking-[3px] font-mono text-violet-600 font-semibold">CHAPTER 01</div>

              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-5xl leading-[1.1] font-semibold tracking-tighter"
              >
                A college student<br />
                <span className="bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-500 bg-clip-text text-transparent">building the future</span>
              </motion.h2>

              <div className="prose prose-zinc text-[17px] leading-relaxed max-w-prose">
                <p>
                  I'm a second-year Robotics & Automation student at D.Y. Patil College of Engineering.
                  I discovered my passion for digital creation during the pandemic when I started building simple websites for local clubs.
                </p>
                <p>
                  Today I combine modern web development with short-form video editing and AI tools to help people and small businesses create professional online presences quickly and affordably.
                </p>
              </div>

              <div className="flex gap-3 flex-wrap">
                <div className="bg-zinc-100 rounded-2xl px-5 py-2.5 text-sm font-medium flex items-center gap-2">
                  <Globe className="w-4 h-4 text-sky-500" />
                  Akurdi, Pune
                </div>
                <div className="bg-zinc-100 rounded-2xl px-5 py-2.5 text-sm font-medium flex items-center gap-2">
                  <User className="w-4 h-4 text-amber-500" />
                  19 years old
                </div>
                <div className="bg-zinc-100 rounded-2xl px-5 py-2.5 text-sm font-medium flex items-center gap-2">
                  <Heart className="w-4 h-4 text-rose-500" />
                  Reading + Music
                </div>
              </div>

              <div className="pt-4">
                <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection(contactRef); }} className="inline-flex items-center gap-3 text-sm uppercase tracking-widest font-mono group text-zinc-500 hover:text-zinc-900 transition-colors">
                  LET'S COLLABORATE
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </div>

            {/* Skills Grid */}
            <div className="md:col-span-7">
              <div className="uppercase text-xs font-mono tracking-[2.5px] text-zinc-500 mb-6 pl-1">WHAT I BRING</div>

              <div className="grid sm:grid-cols-2 gap-x-10 gap-y-16">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group"
                  >
                    <div className="flex items-start gap-6">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-zinc-900 to-zinc-800 flex items-center justify-center text-white shadow-inner flex-shrink-0 transition-all group-hover:scale-110">
                        {skill.icon}
                      </div>

                      <div className="flex-1 min-w-0 pt-1.5">
                        <div className="font-semibold text-xl mb-1.5 tracking-tight">{skill.name}</div>
                        <div className="text-zinc-600 text-[15.2px] leading-snug mb-5">{skill.description}</div>

                        {/* Progress bar */}
                        <div className="h-1.5 bg-zinc-100 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.4, ease: "easeOut" }}
                            className="h-full bg-gradient-to-r from-violet-500 to-cyan-500 rounded-full"
                          />
                        </div>

                        <div className="text-right text-[10px] font-mono text-zinc-400 tracking-widest mt-1.5 uppercase">
                          {skill.level}% PROFICIENCY
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section ref={projectsRef} id="projects" className="py-24 bg-gradient-to-b from-white via-zinc-50 to-white relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-16 md:gap-24 items-end mb-16">
            <div className="flex-1">
              <div className="uppercase tracking-[3px] text-xs font-mono text-teal-600 mb-3">CHAPTER 02 • SELECTED WORK</div>
              <h2 className="text-5xl md:text-[52px] leading-none font-semibold tracking-[-0.015em]">Featured Projects</h2>
            </div>

            <div className="text-zinc-600 max-w-md text-[17px]">
              Every project is an opportunity to create something meaningful.
              Here are three recent favorites.
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover="hover"
                variants={cardHoverVariants}
                onClick={() => setSelectedProject(project)}
                className="group bg-white rounded-[22px] overflow-hidden shadow-sm border border-zinc-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 cursor-pointer"
              >
                {/* Image */}
                <div className="aspect-[16/10] relative overflow-hidden bg-zinc-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 grayscale-[25%] group-hover:grayscale-0"
                  />

                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-60 group-hover:opacity-75 transition-opacity" />

                  {/* Hover play button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all scale-75 group-hover:scale-100">
                    <div className="bg-white/90 backdrop-blur-sm w-16 h-16 rounded-full flex items-center justify-center shadow-xl">
                      <ExternalLink className="w-7 h-7 text-zinc-900 -rotate-45" strokeWidth={2.5} />
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="absolute top-4 right-4 flex flex-wrap gap-1.5 justify-end">
                    {project.tags.slice(0, 2).map(tag => (
                      <div key={tag} className="bg-white/90 text-[10px] font-mono uppercase tracking-widest px-3 py-[5px] rounded-full text-zinc-700 shadow-sm backdrop-blur-sm">
                        {tag}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 pb-9">
                  <div className="font-semibold text-[21px] leading-[1.15] tracking-[-0.01em] mb-3 line-clamp-2 group-hover:text-violet-600 transition-colors">
                    {project.title}
                  </div>

                  <p className="text-zinc-600 text-[15.25px] leading-snug line-clamp-3 mb-6">
                    {project.description}
                  </p>

                  <div className="flex items-center justify-between text-xs uppercase font-mono tracking-widest text-zinc-400">
                    <div>VIEW CASE STUDY</div>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View all button */}
          <div className="flex justify-center mt-16">
            <motion.a
              href="#contact"
              onClick={(e) => { e.preventDefault(); scrollToSection(contactRef); }}
              whileHover={{ scale: 1.06 }}
              className="border border-zinc-300 text-sm font-medium px-10 py-4 rounded-full hover:bg-zinc-900 hover:text-white hover:border-zinc-900 transition-all flex items-center gap-4 group active:scale-95"
            >
              LET'S CREATE SOMETHING TOGETHER
              <div className="group-hover:rotate-45 transition-transform">
                <Sparkles className="w-5 h-5" />
              </div>
            </motion.a>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section ref={servicesRef} id="services" className="bg-zinc-950 py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(at_center,#4f46e510_10%,transparent_70%)]" />

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="uppercase font-mono text-xs tracking-[4px] text-violet-400 mb-2">WHAT I OFFER</div>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter">Services</h2>
            <p className="text-zinc-400 mt-4 max-w-md mx-auto">Fast, modern deliverables designed for real-world impact</p>
          </div>

          <div className="grid md:grid-cols-2 gap-x-20 gap-y-16">
            {/* Service 1 */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="flex gap-5 items-start">
                <div className="bg-gradient-to-br from-indigo-500 to-violet-600 w-[72px] h-[72px] rounded-3xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-violet-900/50">
                  <Code className="w-10 h-10 text-white" strokeWidth={1.75} />
                </div>

                <div className="-mt-1">
                  <div className="uppercase text-[10px] font-mono tracking-[2px] text-violet-400 mb-1">WEBSITES</div>
                  <div className="text-2xl font-semibold leading-none tracking-tighter mb-4">Landing Pages &amp; Portfolios</div>
                  <div className="text-zinc-400 leading-relaxed text-[15.5px]">
                    Beautiful, lightning-fast responsive websites built in React or Webflow. Perfect for students, creators, and local businesses.
                  </div>

                  <div className="mt-8 text-xs uppercase tracking-widest font-mono text-emerald-400 flex items-center gap-4">
                    <span>2–5 day delivery</span>
                    <span className="text-white/30">•</span>
                    <span>SEO optimized</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Service 2 */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group"
            >
              <div className="flex gap-5 items-start">
                <div className="bg-gradient-to-br from-rose-500 to-orange-500 w-[72px] h-[72px] rounded-3xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-rose-900/50">
                  <Video className="w-10 h-10 text-white" strokeWidth={1.75} />
                </div>

                <div className="-mt-1">
                  <div className="uppercase text-[10px] font-mono tracking-[2px] text-rose-400 mb-1">VIDEO</div>
                  <div className="text-2xl font-semibold leading-none tracking-tighter mb-4">Reels, Shorts &amp; TikToks</div>
                  <div className="text-zinc-400 leading-relaxed text-[15.5px]">
                    Engaging vertical videos with captions, trending audio, and smooth transitions. Optimized for maximum reach on social platforms.
                  </div>

                  <div className="mt-8 text-xs uppercase tracking-widest font-mono text-emerald-400 flex items-center gap-4">
                    <span>3–7 day turnaround</span>
                    <span className="text-white/30">•</span>
                    <span>Thumbnail included</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Service 3 */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group"
            >
              <div className="flex gap-5 items-start">
                <div className="bg-gradient-to-br from-cyan-500 to-sky-600 w-[72px] h-[72px] rounded-3xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-cyan-900/50">
                  <Bot className="w-10 h-10 text-white" strokeWidth={1.75} />
                </div>

                <div className="-mt-1">
                  <div className="uppercase text-[10px] font-mono tracking-[2px] text-cyan-400 mb-1">AI TOOLS</div>
                  <div className="text-2xl font-semibold leading-none tracking-tighter mb-4">Chatbots &amp; Automation</div>
                  <div className="text-zinc-400 leading-relaxed text-[15.5px]">
                    Simple but powerful AI assistants using OpenAI or Claude APIs. Automate customer support, content generation, or internal workflows.
                  </div>

                  <div className="mt-8 text-xs uppercase tracking-widest font-mono text-emerald-400 flex items-center gap-4">
                    <span>1-week build</span>
                    <span className="text-white/30">•</span>
                    <span>Free training</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Service 4 */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="group"
            >
              <div className="flex gap-5 items-start">
                <div className="bg-gradient-to-br from-amber-500 to-yellow-600 w-[72px] h-[72px] rounded-3xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-amber-900/50">
                  <PenTool className="w-10 h-10 text-white" strokeWidth={1.75} />
                </div>

                <div className="-mt-1">
                  <div className="uppercase text-[10px] font-mono tracking-[2px] text-amber-400 mb-1">COPY</div>
                  <div className="text-2xl font-semibold leading-none tracking-tighter mb-4">Content Writing</div>
                  <div className="text-zinc-400 leading-relaxed text-[15.5px]">
                    Persuasive website copy, social media captions, email sequences, and product descriptions that convert readers into customers.
                  </div>

                  <div className="mt-8 text-xs uppercase tracking-widest font-mono text-emerald-400 flex items-center gap-4">
                    <span>Fast revisions</span>
                    <span className="text-white/30">•</span>
                    <span>SEO keywords</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="mt-20 text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => scrollToSection(contactRef)}
              className="bg-white text-zinc-950 font-semibold text-base tracking-wide uppercase px-14 py-4 rounded-2xl shadow-xl shadow-black/30 flex items-center gap-4 mx-auto group active:scale-95 transition-all"
            >
              START A PROJECT
              <div className="bg-zinc-950 text-white rounded-xl w-8 h-8 flex items-center justify-center group-hover:rotate-12 transition-transform">
                <ArrowRight className="w-4 h-4" />
              </div>
            </motion.button>

            <div className="text-[11px] text-zinc-500 mt-6 tracking-widest font-mono">NO UPFRONT PAYMENT • 100% SATISFACTION</div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section ref={contactRef} id="contact" className="bg-white py-24 relative">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-100 to-sky-100 rounded-full px-4 py-1 text-sm mb-4">
              <Mail className="w-4 h-4 text-violet-600" />
              <span className="font-medium text-violet-700 tracking-wide">NEXT STEP</span>
            </div>

            <h2 className="text-4xl md:text-[42px] font-semibold tracking-tighter leading-none mb-4">Interested in working together?</h2>
            <p className="text-zinc-600 text-lg max-w-md mx-auto">Send me a message and I'll get back to you within 24 hours.</p>
          </div>

          <div className="grid md:grid-cols-5 gap-16">
            {/* Form */}
            <div className="md:col-span-3">
              <form onSubmit={handleSubmit} className="space-y-9">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label htmlFor="name" className="block text-xs font-mono uppercase tracking-widest text-zinc-500 mb-2">YOUR NAME</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-zinc-50 border border-transparent focus:border-violet-400 rounded-2xl px-6 py-[17px] text-base placeholder-zinc-400 focus:outline-none focus:ring-1 focus:ring-violet-200 transition-all"
                      placeholder="Jamie Chen"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-mono uppercase tracking-widest text-zinc-500 mb-2">EMAIL ADDRESS</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-zinc-50 border border-transparent focus:border-violet-400 rounded-2xl px-6 py-[17px] text-base placeholder-zinc-400 focus:outline-none focus:ring-1 focus:ring-violet-200 transition-all"
                      placeholder="jamie@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-mono uppercase tracking-widest text-zinc-500 mb-2">PROJECT DETAILS</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full bg-zinc-50 border border-transparent focus:border-violet-400 rounded-3xl px-6 py-5 text-base placeholder-zinc-400 focus:outline-none focus:ring-1 focus:ring-violet-200 resize-y min-h-[130px] transition-all"
                    placeholder="I'm launching a new coffee subscription box and need a clean landing page + 3 promotional Reels..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileTap={{ scale: 0.985 }}
                  className={`w-full font-semibold text-lg py-[21px] rounded-3xl transition-all flex items-center justify-center gap-3 shadow-xl shadow-violet-500/30 active:scale-[0.985] ${isSubmitting ? 'bg-zinc-300' : 'bg-gradient-to-r from-violet-600 via-fuchsia-600 to-cyan-600 hover:brightness-110 text-white'}`}
                >
                  {isSubmitting ? (
                    <>
                      <span className="animate-spin block w-5 h-5 border-2 border-white/30 border-t-white rounded-full" />
                      SENDING MESSAGE...
                    </>
                  ) : (
                    <>
                      SEND MESSAGE
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </motion.button>

                <AnimatePresence>
                  {submitted && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="bg-emerald-100 border border-emerald-200 text-emerald-800 rounded-2xl p-5 text-sm flex items-start gap-4"
                    >
                      <div className="text-2xl">🎉</div>
                      <div>
                        <div className="font-semibold">Message received!</div>
                        <div className="text-emerald-700/75">I'll reply within the next 24 hours. Thanks for reaching out.</div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </div>

            {/* Contact Info */}
            <div className="md:col-span-2 pt-4">
              <div className="uppercase text-xs tracking-[3px] font-mono text-zinc-500 mb-8">OTHER WAYS TO REACH ME</div>

              <div className="space-y-10">
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=sakshamrathod37@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex gap-6 items-start hover:text-violet-600 transition-colors">
                  <div className="w-12 h-12 bg-zinc-100 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-violet-100 transition-colors">
                    <Mail className="w-6 h-6 text-zinc-500 group-hover:text-violet-600" />
                  </div>
                  <div>
                    <div className="text-sm font-medium mb-0.5">Email</div>
                    <div className="text-zinc-600 text-[17px] font-mono tracking-tighter">sakshamrathod37@gmail.com</div>
                    <div className="text-emerald-600 text-xs font-medium mt-3 uppercase tracking-wider">Response in &lt; 24h</div>
                  </div>
                </a>

                <a href="https://www.instagram.com/saksham_rathod74/" target="_blank" rel="noopener" className="group flex gap-6 items-start hover:text-violet-600 transition-colors">
                  <div className="w-12 h-12 bg-zinc-100 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-pink-100 transition-colors">
                    <Instagram className="w-6 h-6 text-zinc-500 group-hover:text-pink-600" />
                  </div>
                  <div>
                    <div className="text-sm font-medium mb-0.5">@saksham_rathod74</div>
                    <div className="text-zinc-600">DMs open • Reply Within 24h</div>
                    <div className="mt-2.5 text-amber-500 text-xs">✦ Latest Reel: 42k views</div>
                  </div>
                </a>

                <a href="https://www.linkedin.com/in/saksham-rathod-b39b72358/" target="_blank" rel="noopener" className="group flex gap-6 items-start hover:text-violet-600 transition-colors">
                  <div className="w-12 h-12 bg-zinc-100 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-blue-100 transition-colors">
                    <Linkedin className="w-6 h-6 text-zinc-500 group-hover:text-blue-600" />
                  </div>
                  <div>
                    <div className="text-sm font-medium mb-0.5">LinkedIn</div>
                    <div className="text-zinc-600">Connect • Portfolio reviews</div>
                    <div className="text-[11px] uppercase tracking-widest text-sky-600 font-mono mt-3">ENDORSED BY 7 PROFESSORS</div>
                  </div>
                </a>
              </div>

              <div className="mt-16 pt-10 border-t border-dashed border-zinc-200 text-[11px] text-zinc-500 font-mono leading-relaxed tracking-wide">
                Currently accepting 2–3 new projects per month.<br />
                Prefer students, creators, and small local businesses.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-zinc-950 py-16 text-zinc-400 text-sm">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row gap-16 md:gap-24 justify-between">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-8 bg-gradient-to-br from-violet-500 to-cyan-500 rounded-2xl flex items-center justify-center">
                <span className="text-white text-xl font-black tracking-[-0.5px]">AR</span>
              </div>
              <div className="font-semibold text-white text-xl tracking-tighter">Saksham Rathod</div>
            </div>

            <div className="max-w-[260px] text-[13px] leading-snug opacity-75">
              Second-year Robotics & Automation student building digital experiences for the next generation of creators and entrepreneurs.
            </div>

            <div className="mt-10 text-[10px] uppercase font-mono tracking-[1.5px] opacity-60">© 2025 Saksham Rathod • MADE WITH ❤️ IN PUNE</div>
          </div>

          <div className="grid grid-cols-3 gap-x-16 gap-y-10 text-sm">
            <div>
              <div className="font-mono uppercase text-[10px] tracking-widest text-zinc-500 mb-4">NAVIGATE</div>
              <div className="space-y-2.5">
                <div>About</div>
                <div>Projects</div>
                <div>Services</div>
              </div>
            </div>

            <div>
              <div className="font-mono uppercase text-[10px] tracking-widest text-zinc-500 mb-4">LEGAL</div>
              <div className="space-y-2.5">
                <div>Privacy</div>
                <div>Terms</div>
              </div>
            </div>

            <div>
              <div className="font-mono uppercase text-[10px] tracking-widest text-zinc-500 mb-4">SOCIAL</div>
              <div className="space-y-2.5">
                <div><a href="https://www.instagram.com/saksham_rathod74/" className="hover:text-white transition-colors" >Instagram</a></div>
                <div><a href="https://linkedin.com/" className="hover:text-white transition-colors">LinkedIn</a></div>
                <div><a href="https://youtube.com" className="hover:text-white transition-colors">YouTube</a></div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* PROJECT MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/90 backdrop-blur-xl"
          >
            <motion.div
              initial={{ scale: 0.96, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.96, y: 40 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl overflow-hidden w-full max-w-4xl max-h-[92dvh] overflow-y-auto shadow-2xl relative"
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 z-50 bg-white/90 hover:bg-white w-10 h-10 rounded-full flex items-center justify-center shadow transition-all active:scale-90"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative">
                {/* Hero image */}
                <div className="h-[380px] relative">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="object-cover w-full h-full brightness-75"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                  <div className="absolute bottom-0 left-0 p-10 text-white">
                    <div className="uppercase text-xs tracking-[3px] font-mono opacity-75 mb-2">FEATURED PROJECT</div>
                    <h3 className="text-4xl font-semibold leading-none tracking-[-0.02em]">{selectedProject.title}</h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-10 md:p-14 grid md:grid-cols-12 gap-x-16 gap-y-12">
                  <div className="md:col-span-7 space-y-10">
                    <div>
                      <div className="uppercase font-mono text-xs tracking-[2.5px] text-zinc-400 mb-4">THE BRIEF</div>
                      <p className="text-lg leading-relaxed text-zinc-700">{selectedProject.description}</p>
                    </div>

                    <div>
                      <div className="uppercase font-mono text-xs tracking-[2.5px] text-zinc-400 mb-4">TECH STACK</div>
                      <div className="flex flex-wrap gap-3">
                        {selectedProject.tags.map(tag => (
                          <div key={tag} className="bg-zinc-100 text-zinc-700 text-sm font-medium px-5 py-2 rounded-2xl">
                            {tag}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-zinc-100">
                      <div className="uppercase font-mono text-xs tracking-[2.5px] text-zinc-400 mb-4">RESULTS</div>
                      <div className="grid grid-cols-3 gap-8">
                        <div>
                          <div className="text-4xl font-semibold text-emerald-600">3.2x</div>
                          <div className="text-xs uppercase tracking-widest text-zinc-500 mt-1">More traffic</div>
                        </div>
                        <div>
                          <div className="text-4xl font-semibold text-amber-600">87%</div>
                          <div className="text-xs uppercase tracking-widest text-zinc-500 mt-1">Conversion</div>
                        </div>
                        <div>
                          <div className="text-4xl font-semibold text-sky-600">12k</div>
                          <div className="text-xs uppercase tracking-widest text-zinc-500 mt-1">Views</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="md:col-span-5 bg-zinc-50 -m-10 md:-my-10 md:-mr-10 p-10 flex flex-col">
                    <div className="uppercase font-mono tracking-[2px] text-xs text-zinc-500 mb-6">READY TO START?</div>

                    <div className="text-zinc-800 text-[21px] leading-snug font-medium">
                      I can build something similar for you in under two weeks.
                    </div>

                    <div className="mt-auto pt-10">
                      <motion.button
                        onClick={() => {
                          setSelectedProject(null)
                          setTimeout(() => scrollToSection(contactRef), 300)
                        }}
                        whileHover={{ scale: 1.03 }}
                        className="bg-zinc-900 hover:bg-black w-full py-4 text-white font-semibold text-sm tracking-wider rounded-2xl flex items-center justify-center gap-3 transition-all active:scale-95"
                      >
                        LET'S BUILD THIS
                        <ArrowRight className="w-4 h-4" />
                      </motion.button>

                      <div className="text-[10px] text-center text-zinc-400 font-mono tracking-widest mt-6">NO COMMITMENT • FREE CONSULTATION</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default App

