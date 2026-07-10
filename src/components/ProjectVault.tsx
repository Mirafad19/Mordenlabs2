import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowUpRight,
  ArrowRight,
  Folder,
  FolderOpen,
  ExternalLink,
  Briefcase,
} from "lucide-react";
import { Link } from "@tanstack/react-router";
import { PROJECTS } from "@/lib/site-data";

// Custom detailed metadata for the vault showcase to perfectly match the user's high-end design
const VAULT_PROJECTS = [
  {
    slug: "pssdc",
    name: "PSSDC",
    fullName: "PSSDC AI Conversational Service Assistant",
    url: "pssdc.gov.ng",
    client: "Lagos State Public Service Staff Development Centre",
    description:
      "A public-sector digital presence designed to feel more structured, accessible, and trustworthy for a broad audience. Features voice and text conversational AI.",
    badges: ["INSTITUTIONAL WEB", "INFORMATION DESIGN", "VOICE AI"],
    gradient: "from-blue-500/10 via-indigo-500/5 to-transparent",
    accent: "#6366f1",
    logo: PROJECTS[0]?.logo,
  },
  {
    slug: "tidyscot",
    name: "TidyScot",
    fullName: "TidyScot Website & AI Assistant",
    url: "tidyscot.co.uk",
    client: "TidyScot Ltd, Scotland",
    description:
      "A polished business website coupled with an intelligent booking flow and a conversational assistant that answers customer questions instantly.",
    badges: ["COMMERCIAL WEB", "AI CHATBOT", "AUTOMATION"],
    gradient: "from-emerald-500/10 via-teal-500/5 to-transparent",
    accent: "#10b981",
    logo: PROJECTS[1]?.logo,
  },
  {
    slug: "citicare",
    name: "Citicare",
    fullName: "Citicare Health Integrated Solutions",
    url: "citicare.ng",
    client: "Citicare Health Integrated Solutions, Nigeria",
    description:
      "A professional healthcare portal and integrated CRM platform that automates patient enquiries and simplifies internal scheduling workflows.",
    badges: ["HEALTHCARE CRM", "PORTAL WEB", "BUSINESS AUTOMATION"],
    gradient: "from-rose-500/10 via-amber-500/5 to-transparent",
    accent: "#f43f5e",
    logo: PROJECTS[2]?.logo,
  },
];

export function GoldenFolder({ isOpen }: { isOpen: boolean }) {
  return (
    <div className="relative w-48 h-36 [perspective:800px] flex items-center justify-center">
      {/* Back tab and back flap with premium golden gradients */}
      <div className="absolute top-0 left-6 w-16 h-4 bg-gradient-to-r from-amber-700 to-amber-800 rounded-t-md shadow-sm" />
      <div className="absolute top-3 left-0 w-full h-[85%] bg-gradient-to-br from-amber-700 via-amber-800 to-amber-900 rounded-2xl shadow-md border border-amber-600/20" />

      {/* Inserted papers (slide up when open) */}
      <motion.div
        animate={isOpen ? { y: -28, rotate: -4, scale: 1.02 } : { y: 0, rotate: 0, scale: 1 }}
        transition={{ type: "spring", stiffness: 180, damping: 14 }}
        className="absolute top-4 left-6 w-[80%] h-[75%] bg-white rounded-lg shadow-md border border-neutral-200 p-3 flex flex-col gap-1.5 overflow-hidden origin-bottom"
      >
        <div className="w-1/3 h-2 bg-neutral-300 rounded" />
        <div className="w-full h-1 bg-neutral-100 rounded" />
        <div className="w-full h-1 bg-neutral-100 rounded" />
        <div className="w-[90%] h-1 bg-neutral-100 rounded" />
        <div className="w-[95%] h-1 bg-neutral-100 rounded" />
        <div className="mt-1 w-1/2 h-1.5 bg-indigo-500/40 rounded" />
      </motion.div>

      <motion.div
        animate={isOpen ? { y: -18, rotate: 5, scale: 1.01 } : { y: 2, rotate: 0, scale: 1 }}
        transition={{ type: "spring", stiffness: 180, damping: 14, delay: 0.04 }}
        className="absolute top-4 left-10 w-[75%] h-[75%] bg-neutral-50 rounded-lg shadow-md border border-neutral-200 p-3 flex flex-col gap-1.5 overflow-hidden origin-bottom"
      >
        <div className="w-1/2 h-2 bg-neutral-400 rounded" />
        <div className="w-full h-1 bg-neutral-200 rounded" />
        <div className="w-4/5 h-1 bg-neutral-200 rounded" />
        <div className="mt-1 w-1/3 h-1.5 bg-emerald-500/40 rounded" />
      </motion.div>

      {/* Front flap (tilts forward when open) */}
      <motion.div
        style={{ originY: "bottom" }}
        animate={
          isOpen
            ? { rotateX: -28, skewX: -4, scaleY: 0.96, filter: "brightness(1.05)" }
            : { rotateX: 0, skewX: 0, scaleY: 1, filter: "brightness(1)" }
        }
        transition={{ type: "spring", stiffness: 140, damping: 12 }}
        className="absolute top-6 left-0 w-full h-[80%] bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 rounded-2xl shadow-xl border-t border-amber-300/40 flex items-center justify-center overflow-hidden"
      >
        {/* Shiny surface highlight */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/15 to-transparent pointer-events-none" />

        {/* Embossed style logo emblem */}
        <div className="w-9 h-9 rounded-full bg-amber-950/20 shadow-inner border border-white/5 flex items-center justify-center">
          <Briefcase className="w-4.5 h-4.5 text-amber-100" />
        </div>
      </motion.div>
    </div>
  );
}

export function ProjectVault() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-cycles project cards every 5 seconds if not hovered (adds highly polished interactive feel)
  useEffect(() => {
    if (!isOpen) return;
    const interval = setInterval(() => {
      if (!isHovered) {
        setActiveIndex((prev) => (prev + 1) % VAULT_PROJECTS.length);
      }
    }, 6000);
    return () => clearInterval(interval);
  }, [isOpen, isHovered]);

  return (
    <section className="relative overflow-hidden border-b-2 border-ink bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* Containerized Dark Capsule */}
        <div className="relative overflow-hidden bg-neutral-950 text-cream rounded-[2.5rem] border-2 border-ink p-8 md:p-12 lg:p-16 shadow-2xl">
          {/* Dynamic Background Grid Pattern inside the capsule */}
          <div
            className="absolute inset-0 opacity-15 pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />
          {/* Sleek radial gradient glow inside the capsule */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(245,158,11,0.06),transparent_50%)] pointer-events-none" />

          <div className="relative z-10">
            <AnimatePresence mode="wait">
              {!isOpen ? (
                /* CLOSED STATE: The elegant 2-column workspace layout */
                <motion.div
                  key="closed-vault"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="grid gap-12 lg:grid-cols-12 items-center"
                >
                  {/* Left Column: Rich Typography & Guiding Context */}
                  <div className="lg:col-span-7 flex flex-col items-start text-left gap-6">
                    <div className="inline-flex items-center gap-2 rounded-full bg-amber-500/10 border border-amber-500/20 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-amber-500 font-mono">
                      <span className="h-2 w-2 rounded-full bg-amber-500" />
                      PROJECT VAULT
                    </div>
                    <h2 className="font-display text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl text-white">
                      Selected{" "}
                      <span className="text-amber-500 italic font-serif font-medium">Work</span>{" "}
                      Room
                    </h2>
                    <p className="text-base md:text-lg text-neutral-300 max-w-xl leading-relaxed">
                      We secure and store our complex institutional portals, custom business
                      automations, and clinical software solutions in our secure digital showroom.
                      Click the interactive folder on the right to unlock live case studies and tech
                      stacks.
                    </p>

                    {/* Visual Checkpoints */}
                    <div className="grid gap-3 sm:grid-cols-2 w-full mt-2">
                      {[
                        "Lagos State PSSDC AI Portal",
                        "TidyScot Intelligent Booking",
                        "Citicare Health Integrated CRM",
                        "Custom Workflow Automation",
                      ].map((item) => (
                        <div
                          key={item}
                          className="flex items-center gap-3 text-sm font-semibold text-neutral-400 font-sans"
                        >
                          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-500/10 text-amber-500 text-xs font-bold">
                            ✓
                          </span>
                          {item}
                        </div>
                      ))}
                    </div>

                    {/* Interactive Assist Hint */}
                    <div className="hidden lg:flex items-center gap-3 text-xs font-mono font-bold tracking-wider text-neutral-500 mt-4">
                      <span>CLICK ON THE FOLDER TO UNLOCK THE DECK</span>
                      <ArrowRight className="h-4 w-4 text-amber-500 animate-bounce-horizontal" />
                    </div>
                  </div>

                  {/* Right Column: Premium Clickable Folder Card */}
                  <div className="lg:col-span-5 flex justify-center">
                    <div
                      onClick={() => setIsOpen(true)}
                      onMouseEnter={() => setIsHovered(true)}
                      onMouseLeave={() => setIsHovered(false)}
                      className="group relative w-full max-w-sm bg-neutral-900/80 backdrop-blur-md border border-neutral-800 rounded-[2rem] p-8 shadow-2xl cursor-pointer hover:border-neutral-700 hover:shadow-[0_0_50px_rgba(245,158,11,0.06)] transition-all duration-500 overflow-hidden"
                    >
                      {/* Glow ring */}
                      <div className="absolute -inset-px rounded-[2rem] bg-gradient-to-tr from-amber-500/10 via-transparent to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                      {/* Card Header */}
                      <div className="flex items-start justify-between mb-6">
                        <div>
                          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-500 font-mono">
                            INTERACTIVE VAULT
                          </span>
                          <h3 className="text-xl font-bold tracking-tight text-white mt-1">
                            Selected Work
                          </h3>
                        </div>
                        <div className="w-10 h-10 rounded-xl border border-neutral-800 flex items-center justify-center text-neutral-400 group-hover:text-amber-500 group-hover:border-amber-500/30 transition-all duration-300">
                          <Folder className="w-5 h-5 group-hover:hidden" />
                          <FolderOpen className="w-5 h-5 hidden group-hover:block text-amber-500" />
                        </div>
                      </div>

                      {/* Animated Folder Area */}
                      <div className="flex justify-center items-center py-6 my-2">
                        <GoldenFolder isOpen={isHovered} />
                      </div>

                      {/* Bottom Info */}
                      <div className="mt-6 text-center">
                        <h4 className="text-base font-semibold text-white tracking-tight group-hover:text-amber-400 transition-colors duration-300">
                          Tap Folder to Unlock
                        </h4>
                        <p className="text-[11px] text-neutral-400 mt-2 leading-relaxed max-w-xs mx-auto">
                          A sleek client directory showcasing real-world performance, crisp
                          graphics, and smart workflows.
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ) : (
                /* OPEN STATE: The full split horizontal client card deck (Our Clients Layout) */
                <motion.div
                  key="open-vault"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="grid gap-12 lg:grid-cols-12 items-center"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  {/* Left Column: Stacked 3D Card Deck */}
                  <div className="lg:col-span-7 flex justify-center items-center min-h-[480px] relative">
                    {/* Back Link to Close Folder */}
                    <button
                      onClick={() => setIsOpen(false)}
                      className="absolute top-0 left-0 z-40 flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-neutral-400 hover:text-white bg-neutral-900 border border-neutral-800 hover:border-neutral-700 px-4 py-2 rounded-full transition-all"
                    >
                      <Folder className="w-3.5 h-3.5 text-amber-500" /> Close Vault
                    </button>

                    <div className="relative w-full max-w-md h-[340px] flex items-center justify-center mt-8">
                      {VAULT_PROJECTS.map((p, idx) => {
                        // Calculate visual properties for stacked deck cards
                        const isCardActive = idx === activeIndex;
                        let offsetIndex = idx - activeIndex;

                        // Wrap index offset around to make a loop
                        if (offsetIndex < 0) {
                          offsetIndex += VAULT_PROJECTS.length;
                        }

                        // Card positions based on offset
                        const zIndex = 30 - offsetIndex * 10;
                        const rotate = isCardActive ? 0 : -4 - offsetIndex * 4;
                        const x = isCardActive ? 0 : -20 - offsetIndex * 16;
                        const y = isCardActive ? 0 : 20 + offsetIndex * 16;
                        const scale = isCardActive ? 1 : 0.95 - offsetIndex * 0.05;
                        const opacity = isCardActive ? 1 : 0.7 - offsetIndex * 0.2;

                        return (
                          <motion.div
                            key={p.slug}
                            style={{ zIndex }}
                            animate={{
                              x,
                              y,
                              rotate,
                              scale,
                              opacity,
                            }}
                            transition={{
                              type: "spring",
                              stiffness: 160,
                              damping: 15,
                            }}
                            onClick={() => setActiveIndex(idx)}
                            className={`absolute w-full max-w-[380px] bg-white text-neutral-950 rounded-[2rem] p-6 shadow-2xl border-2 border-neutral-900 cursor-pointer select-none origin-bottom-left group`}
                          >
                            {/* Dynamic background gradient accent */}
                            <div
                              className={`absolute inset-0 bg-gradient-to-tr ${p.gradient} rounded-[2rem] pointer-events-none`}
                            />

                            {/* Top Link info */}
                            <div className="flex items-center justify-between mb-6">
                              <span className="text-xs font-mono text-neutral-500 flex items-center gap-1">
                                {p.url} <ExternalLink className="w-3 h-3" />
                              </span>
                              {isCardActive && (
                                <span
                                  className="w-2 h-2 rounded-full"
                                  style={{ backgroundColor: p.accent }}
                                />
                              )}
                            </div>

                            {/* Title & Brand Logo */}
                            <div className="flex items-center justify-between gap-4 mb-4">
                              <h4 className="text-3xl font-bold tracking-tight text-neutral-900 leading-none">
                                {p.name}
                              </h4>
                              {p.logo && (
                                <div className="h-12 w-20 flex items-center justify-center p-1 bg-neutral-50 rounded-xl border border-neutral-100">
                                  <img
                                    src={p.logo}
                                    alt={`${p.name} Logo`}
                                    className="max-h-full max-w-full object-contain mix-blend-multiply"
                                  />
                                </div>
                              )}
                            </div>

                            {/* Description */}
                            <p className="text-sm leading-relaxed text-neutral-600 mb-6 font-medium">
                              {p.description}
                            </p>

                            {/* Badges */}
                            <div className="flex flex-wrap gap-1.5 mt-auto">
                              {p.badges.map((badge) => (
                                <span
                                  key={badge}
                                  className="text-[9px] font-bold tracking-wider font-mono bg-neutral-900 text-white py-1.5 px-3 rounded-full"
                                >
                                  {badge}
                                </span>
                              ))}
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Right Column: Title & Interactive Navigation Selector */}
                  <div className="lg:col-span-5 flex flex-col gap-8">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-[0.3em] text-neutral-400 font-mono">
                        SELECTED WORK
                      </span>
                      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif italic text-white mt-1">
                        Our clients
                      </h2>
                    </div>

                    {/* Vertical interactive list selectors */}
                    <div className="flex flex-col gap-3">
                      {VAULT_PROJECTS.map((p, idx) => {
                        const isSelected = idx === activeIndex;
                        return (
                          <button
                            key={p.slug}
                            onClick={() => setActiveIndex(idx)}
                            className={`flex items-center justify-between p-4 rounded-2xl border text-left transition-all duration-300 group ${
                              isSelected
                                ? "bg-neutral-900 border-neutral-700 shadow-lg text-white"
                                : "bg-transparent border-transparent text-neutral-500 hover:text-neutral-300 hover:bg-neutral-900/30"
                            }`}
                          >
                            <div className="flex items-center gap-4">
                              <span className="font-mono text-xs text-neutral-600 group-hover:text-amber-500 transition-colors">
                                0{idx + 1}
                              </span>
                              <span
                                className={`text-lg font-bold tracking-tight ${isSelected ? "text-white" : "text-neutral-400"}`}
                              >
                                {p.fullName}
                              </span>
                            </div>
                            <ArrowRight
                              className={`w-5 h-5 transition-transform duration-300 ${
                                isSelected
                                  ? "translate-x-0 text-white"
                                  : "-translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 text-neutral-500"
                              }`}
                            />
                          </button>
                        );
                      })}
                    </div>

                    {/* Bottom CTA block (Matches image layout perfectly) */}
                    <div className="p-5 rounded-2xl border border-neutral-800/80 bg-neutral-900/50 backdrop-blur-sm flex items-center justify-between gap-4 mt-2">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-neutral-400 font-mono">
                          NEED WORK LIKE THIS?
                        </span>
                        <p className="text-sm font-semibold text-white mt-1 leading-tight">
                          We can build your next client success story.
                        </p>
                      </div>
                      <Link
                        to="/contact"
                        className="w-12 h-12 rounded-full bg-white text-neutral-950 flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-transform duration-200 shrink-0"
                      >
                        <ArrowUpRight className="w-5 h-5" />
                      </Link>
                    </div>

                    {/* Miniature Site Map links shown in the image mockup */}
                    <div className="flex items-center gap-4 text-xs font-mono font-bold tracking-wider text-neutral-600 mt-2 select-none uppercase">
                      <Link to="/services" className="hover:text-amber-500 transition-colors">
                        SERVICES
                      </Link>
                      <span>→</span>
                      <Link to="/work" className="hover:text-amber-500 transition-colors">
                        WORK
                      </Link>
                      <span>→</span>
                      <Link to="/contact" className="hover:text-amber-500 transition-colors">
                        CONTACT
                      </Link>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
