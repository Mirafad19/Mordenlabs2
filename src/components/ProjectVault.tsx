import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowUpRight,
  ExternalLink,
  Smartphone,
  Laptop,
  CheckCircle2,
  Calendar,
  Sparkles,
  Bot,
  Stethoscope,
  Building2,
  Globe2,
  TrendingUp,
  ShieldCheck,
  ChevronRight,
  Search,
} from "lucide-react";
import { Link } from "@tanstack/react-router";

export const SHOWCASE_PROJECTS = [
  {
    id: "tidyscot",
    name: "TidyScot",
    tagline: "Commercial Web & AI Booking Engine",
    client: "TidyScot Ltd, Scotland (UK)",
    url: "https://tidyscot.co.uk",
    displayUrl: "tidyscot.co.uk",
    category: "Commercial Web & AI",
    metric: "Live Booking Engine",
    description:
      "A fast business platform with an integrated online booking calculator and a conversational AI assistant that handles customer quotes 24/7.",
    badges: ["BOOKING ENGINE", "AI CHATBOT", "UK"],
    color: "#10b981", // Emerald
    accentBg: "bg-emerald-500/10 border-emerald-500/30 text-emerald-400",
    desktopMockup:
      "https://www.image2url.com/r2/default/files/1785761967417-335801c0-e331-4406-8d52-0f6af5f2b61c.png",
    mobileMockup:
      "https://www.image2url.com/r2/default/files/1785762007649-2973d059-284e-4928-a8c6-80f5f1fc9ba7.png",
    phoneScreen: {
      title: "TidyScot Assistant",
      status: "AI ONLINE",
      chat: [
        { sender: "user", text: "Can I book a 3-bedroom deep clean for Tuesday in Edinburgh?" },
        {
          sender: "ai",
          text: "Yes! Slot available at 10:00 AM. Estimated cost: £140. Should I reserve this for you?",
        },
      ],
      actionText: "Confirm Booking",
    },
    laptopScreen: {
      header: "TidyScot Commercial Platform",
      stats: [
        { label: "Weekly Bookings", val: "142" },
        { label: "AI Response Time", val: "0.8s" },
        { label: "Customer Satisfaction", val: "99.2%" },
      ],
      recent: [
        { name: "Deep Clean — EH12 Edinburgh", price: "£140", status: "CONFIRMED" },
        { name: "End of Tenancy — Leith", price: "£210", status: "SCHEDULED" },
        { name: "Office Contract — Glasgow", price: "£450", status: "ACTIVE" },
      ],
    },
  },
  {
    id: "pssdc",
    name: "PSSDC AI Conversational Service Assistant",
    tagline: "Public Sector Portal & Voice AI Assistant",
    client: "Lagos State Public Service Staff Development Centre",
    url: "https://pssdc.gov.ng",
    displayUrl: "pssdc.gov.ng",
    category: "Government & AI",
    metric: "Public Sector Voice & AI",
    description:
      "An official government digital portal featuring institutional course registration, voice-enabled AI support, and structured public service information architecture.",
    badges: ["CIVIC TECH", "VOICE AI", "NIGERIA"],
    color: "#6366f1", // Indigo
    accentBg: "bg-indigo-500/10 border-indigo-500/30 text-indigo-400",
    desktopMockup:
      "https://www.image2url.com/r2/default/images/1785759868043-9b252c53-69fb-4dcf-be2e-145af1f3ed48.png",
    mobileMockup:
      "https://www.image2url.com/r2/default/images/1785759935249-3ae81f9f-d354-40a2-9761-d85e66c881ea.png",
    phoneScreen: {
      title: "PSSDC Voice Agent",
      status: "LISTENING...",
      chat: [
        {
          sender: "user",
          text: "Where can I register for the Senior Executive Management Course?",
        },
        {
          sender: "ai",
          text: "Registration for Batch B is open until Aug 15. You can complete it online in 2 minutes.",
        },
      ],
      actionText: "Open Registration Form",
    },
    laptopScreen: {
      header: "Lagos State PSSDC Assistant",
      stats: [
        { label: "Active Courses", val: "48" },
        { label: "Portal Uptime", val: "99.98%" },
        { label: "Enquiries Automated", val: "88%" },
      ],
      recent: [
        { name: "Executive Leadership Program", price: "Batch B", status: "ENROLLING" },
        { name: "Digital Governance Workshop", price: "Batch A", status: "COMPLETED" },
        { name: "Public Policy Analytics", price: "Batch C", status: "UPCOMING" },
      ],
    },
  },
  {
    id: "citicare",
    name: "Citicare Health",
    tagline: "Healthcare Portal & Clinical CRM",
    client: "Citicare Health Integrated Solutions, Nigeria",
    url: "https://citicare.ng",
    displayUrl: "citicare.ng",
    category: "Healthcare & CRM",
    metric: "Healthcare Portal & CRM",
    description:
      "Integrated healthcare portal and CRM platform that automates patient enquiries, appointment scheduling, and internal clinical notification workflows.",
    badges: ["HEALTHCARE CRM", "PATIENT PORTAL", "AUTOMATION"],
    color: "#f43f5e", // Rose
    accentBg: "bg-rose-500/10 border-rose-500/30 text-rose-400",
    desktopMockup:
      "https://www.image2url.com/r2/default/files/1785761353465-1cc97d30-b41d-4150-8303-9c6a84264f5e.png",
    mobileMockup:
      "https://www.image2url.com/r2/default/files/1785761422623-3d338629-9348-4c6f-94b4-337089d6785e.png",
    phoneScreen: {
      title: "Citicare Health Direct",
      status: "CRM DISPATCH",
      chat: [
        { sender: "user", text: "I'd like to schedule a specialist consultation for tomorrow." },
        {
          sender: "ai",
          text: "Dr. Adebayo is available at 2:30 PM. I've sent a pre-screening form to your email.",
        },
      ],
      actionText: "View Consultation Details",
    },
    laptopScreen: {
      header: "Citicare Clinical Portal & Telemetry",
      stats: [
        { label: "Daily Consultations", val: "86" },
        { label: "Avg Wait Time", val: "4 mins" },
        { label: "Patient Retention", val: "96.5%" },
      ],
      recent: [
        { name: "Specialist Consultation — Ikeja", price: "Priority", status: "CONFIRMED" },
        { name: "Preventive Health Screening", price: "Standard", status: "SCHEDULED" },
        { name: "Corporate Wellness Program", price: "Enterprise", status: "ACTIVE" },
      ],
    },
  },
];

export function ProjectVault() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-cycle through the showcased projects every 6 seconds
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % SHOWCASE_PROJECTS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const activeProject = SHOWCASE_PROJECTS[activeIdx];

  return (
    <section className="relative overflow-hidden border-b-2 border-ink bg-neutral-950 text-cream py-20 lg:py-28 select-none">
      {/* Background Radial Grid */}
      <div
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      {/* Glow highlight */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(249,115,22,0.06),transparent_60%)] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-5 lg:px-8 relative z-10">
        {/* Section Title Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-14 text-left">
          <div>
            <div className="mb-2 inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-[0.2em] text-accent-brand">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-brand animate-pulse" />
              RECENT DELIVERIES
            </div>
            <h2 className="font-display text-4xl font-bold leading-[1.05] md:text-5xl lg:text-6xl text-white">
              Products we've built.
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-xs font-mono text-neutral-400 font-medium hidden sm:inline-block">
              Auto-cycling apps (hover to pause)
            </span>
            <Link to="/work">
              <button className="inline-flex items-center gap-2 brutal-border bg-neutral-900 px-4 py-2.5 text-xs font-bold text-white hover:bg-neutral-800 transition-colors cursor-pointer">
                View all case studies
                <ArrowUpRight className="h-4 w-4 text-accent-brand" />
              </button>
            </Link>
          </div>
        </div>

        {/* 2-Column Showcase Grid */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
        >
          {/* Left Column: Selector Cards */}
          <div className="lg:col-span-5 flex flex-col gap-4 text-left justify-center">
            {SHOWCASE_PROJECTS.map((proj, idx) => {
              const isActive = idx === activeIdx;

              return (
                <div
                  key={proj.id}
                  onClick={() => setActiveIdx(idx)}
                  className={`p-6 rounded-2xl border-2 transition-all duration-300 cursor-pointer relative overflow-hidden ${
                    isActive
                      ? "bg-neutral-900 border-accent-brand shadow-2xl scale-[1.02]"
                      : "bg-neutral-950/60 border-neutral-800/80 hover:border-neutral-700 hover:bg-neutral-900/40 opacity-75 hover:opacity-100"
                  }`}
                >
                  {/* Active Indicator Line */}
                  {isActive && (
                    <motion.div
                      layoutId="activeGlowLine"
                      className="absolute top-0 left-0 bottom-0 w-1.5 bg-accent-brand"
                    />
                  )}

                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-neutral-400">
                      {proj.client}
                    </span>
                    <span
                      className={`text-[9px] font-mono font-bold px-2 py-0.5 rounded border uppercase ${proj.accentBg}`}
                    >
                      {proj.metric}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl font-black text-white flex items-center gap-2">
                    {proj.name}
                    {isActive && <ChevronRight className="h-5 w-5 text-accent-brand" />}
                  </h3>

                  <p className="text-xs text-neutral-400 mt-1 line-clamp-2 leading-relaxed">
                    {proj.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {proj.badges.map((b) => (
                      <span
                        key={b}
                        className="text-[9px] font-mono font-semibold text-neutral-400 bg-neutral-950 border border-neutral-800 px-2 py-0.5 rounded"
                      >
                        {b}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: High-Impact Device Stage */}
          <div className="lg:col-span-7 bg-neutral-900/60 brutal-border border-ink rounded-3xl p-4 sm:p-6 md:p-8 flex items-center justify-center relative overflow-hidden min-h-[440px] md:min-h-[500px]">
            {/* Ambient Backlight Glow corresponding to project theme */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProject.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.35 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at 50% 50%, ${activeProject.color}, transparent 65%)`,
                }}
              />
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeProject.id}
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -15 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="w-full h-full flex items-center justify-center relative z-10"
              >
                {activeProject.desktopMockup || activeProject.mobileMockup ? (
                  <div className="w-full flex flex-row items-center justify-center gap-2 sm:gap-4 relative py-2">
                    {/* Desktop Mockup - Large & Bold */}
                    {activeProject.desktopMockup && (
                      <div className="relative flex-1 flex items-center justify-center max-w-[75%] transition-transform duration-500 hover:scale-[1.02]">
                        <img
                          src={activeProject.desktopMockup}
                          alt={`${activeProject.name} Desktop Showcase`}
                          referrerPolicy="no-referrer"
                          className="w-full max-h-[440px] object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.85)]"
                        />
                      </div>
                    )}

                    {/* Mobile Mockup - Bold Floating Device */}
                    {activeProject.mobileMockup && (
                      <div className="relative w-[32%] max-w-[210px] flex items-center justify-center -ml-6 sm:-ml-12 z-20 transition-transform duration-500 hover:scale-105 hover:z-30">
                        <img
                          src={activeProject.mobileMockup}
                          alt={`${activeProject.name} Mobile Showcase`}
                          referrerPolicy="no-referrer"
                          className="w-full max-h-[400px] object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.95)]"
                        />
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="w-full flex flex-col md:flex-row items-center justify-center gap-6 relative z-10">
                    {/* Laptop Mockup Display Frame */}
                    <div className="w-full md:w-[65%] bg-neutral-950 border-2 border-neutral-800 rounded-2xl overflow-hidden shadow-2xl text-left flex flex-col h-[340px] justify-between">
                      <div className="bg-neutral-900 px-3.5 py-2.5 border-b border-neutral-800 flex items-center justify-between text-[10px] font-mono">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                          <span className="w-2.5 h-2.5 rounded-full bg-amber-500/60" />
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/60" />
                          <span className="text-neutral-400 font-semibold ml-2 truncate max-w-[140px]">
                            {activeProject.displayUrl}
                          </span>
                        </div>
                        <span className="text-emerald-400 font-bold hidden sm:inline">
                          HTTPS SECURE
                        </span>
                      </div>

                      <div className="p-4 flex-1 flex flex-col justify-between font-sans">
                        <div className="flex items-center justify-between pb-3 border-b border-neutral-850">
                          <div>
                            <span className="text-[9px] font-mono text-neutral-400 uppercase font-bold block">
                              APPLICATION PLATFORM
                            </span>
                            <h4 className="text-sm font-black text-white mt-0.5">
                              {activeProject.laptopScreen.header}
                            </h4>
                          </div>
                          <span
                            className="text-[9px] font-mono font-bold px-2 py-1 rounded"
                            style={{
                              backgroundColor: `${activeProject.color}20`,
                              color: activeProject.color,
                            }}
                          >
                            {activeProject.category}
                          </span>
                        </div>

                        <div className="grid grid-cols-3 gap-2 my-2">
                          {activeProject.laptopScreen.stats.map((s) => (
                            <div
                              key={s.label}
                              className="bg-neutral-900/80 p-2 rounded-lg border border-neutral-850 text-center"
                            >
                              <span className="text-[8px] font-mono text-neutral-400 block uppercase font-bold truncate">
                                {s.label}
                              </span>
                              <span className="text-xs font-black text-white mt-0.5 block">
                                {s.val}
                              </span>
                            </div>
                          ))}
                        </div>

                        <div className="space-y-1.5">
                          <span className="text-[8px] font-mono text-neutral-400 uppercase font-bold block">
                            LIVE RECENT ACTIVITY
                          </span>
                          {activeProject.laptopScreen.recent.map((item, i) => (
                            <div
                              key={i}
                              className="bg-neutral-900/50 p-2 rounded-md border border-neutral-850/60 flex items-center justify-between text-[10px]"
                            >
                              <span className="text-neutral-200 font-medium truncate max-w-[140px]">
                                {item.name}
                              </span>
                              <div className="flex items-center gap-2 shrink-0">
                                <span className="font-mono text-neutral-400">{item.price}</span>
                                <span className="text-[8px] font-mono bg-emerald-500/10 text-emerald-400 px-1.5 py-0.5 rounded font-bold">
                                  {item.status}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Smartphone Mockup Display Frame */}
                    <div className="w-[200px] bg-neutral-950 border-2 border-neutral-800 rounded-[2rem] p-3 shadow-2xl text-left flex flex-col h-[340px] justify-between relative shrink-0 overflow-hidden">
                      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-3 bg-black rounded-full z-20 flex items-center justify-center">
                        <span className="w-1 h-1 rounded-full bg-neutral-800" />
                      </div>

                      <div className="pt-3 flex flex-col justify-between h-full font-sans">
                        <div>
                          <div className="flex items-center justify-between border-b border-neutral-850 pb-2 mb-2">
                            <div>
                              <h5 className="text-[10px] font-bold text-white">
                                {activeProject.phoneScreen.title}
                              </h5>
                              <span className="text-[8px] font-mono text-emerald-400 font-bold block">
                                {activeProject.phoneScreen.status}
                              </span>
                            </div>
                            <Bot className="h-4 w-4 text-accent-brand" />
                          </div>

                          <div className="space-y-2 my-2 text-[9px] font-mono">
                            {activeProject.phoneScreen.chat.map((msg, idx) => (
                              <div
                                key={idx}
                                className={`p-2 rounded-lg leading-relaxed ${
                                  msg.sender === "user"
                                    ? "bg-accent-brand/10 border border-accent-brand/30 text-neutral-200"
                                    : "bg-neutral-900 border border-neutral-800 text-white font-medium"
                                }`}
                              >
                                <span className="text-[7px] text-neutral-400 block font-bold mb-0.5 uppercase">
                                  {msg.sender === "user" ? "USER ENQUIRY" : "AI RESPONSE"}
                                </span>
                                {msg.text}
                              </div>
                            ))}
                          </div>
                        </div>

                        <button className="w-full bg-accent-brand text-white font-bold py-1.5 rounded-lg text-[9px] hover:bg-opacity-90 transition-all flex items-center justify-center gap-1 mt-1">
                          <span>{activeProject.phoneScreen.actionText}</span>
                          <ChevronRight className="h-3 w-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
