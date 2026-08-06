import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Code2,
  Smartphone,
  Workflow,
  Bot,
  Search,
  Database,
  CheckCircle2,
  ArrowUpRight,
  Sparkles,
  Layers,
  Cpu,
  Check,
} from "lucide-react";
import { Link } from "@tanstack/react-router";

export function DetailedDisciplines() {
  const [activeIdx, setActiveIdx] = useState<number>(0);

  const disciplines = [
    {
      id: "web-dev",
      icon: Code2,
      title: "Web Development",
      accent: "High-Performance Web Platforms",
      short: "Clean code. Real performance.",
      description:
        "We build web platforms engineered for speed, stability, and scale. By avoiding bloated page builders, we ship custom web applications with pristine Lighthouse scores, resilient serverless APIs, and global edge caching.",
      audience:
        "Growth companies, digital platforms, and organizations requiring secure, fast corporate web architecture.",
      deliverables: [
        "Pristine SEO ranking structures & semantic HTML",
        "Sub-second global page loads & zero layout shift",
        "Scalable Node.js / React edge architecture",
        "Custom design system components tailored to brand",
      ],
      stack: ["React 19", "TypeScript", "Vite", "Tailwind CSS", "Cloud Run"],
      proofPoint: {
        name: "TidyScot Platform",
        link: "/work",
        text: "Live commercial booking engine delivered for UK cleaning business",
      },
    },
    {
      id: "mobile-apps",
      icon: Smartphone,
      title: "Mobile Apps",
      accent: "Cross-Platform Ecosystems",
      short: "iOS & Android, done properly.",
      description:
        "Smooth, responsive, native-feeling mobile applications built for iOS and Android simultaneously. We construct tactile layouts with optimized memory management, offline sync support, and crisp interactions.",
      audience:
        "SaaS founders and transactional businesses delivering essential consumer or operational mobile tools.",
      deliverables: [
        "Single high-performance codebase for iOS & Android",
        "Offline-first database sync & local storage engines",
        "Push notifications, biometric auth, & camera flows",
        "Complete App Store & Google Play launch compliance",
      ],
      stack: ["React Native", "Expo", "TypeScript", "SQLite", "Firebase Auth"],
      proofPoint: {
        name: "Citicare Mobile Direct",
        link: "/work",
        text: "Mobile-optimized clinical CRM and patient appointment dispatch",
      },
    },
    {
      id: "ai-solutions-automation",
      icon: Bot,
      title: "AI Solutions & Automation",
      accent: "Custom Intelligence & Automated Workflows",
      short: "Your tools, talking to each other — and to your customers.",
      description:
        "We build the AI layer for your business — from custom conversational agents and voice interfaces to background automations that connect your tools, parse documents, and keep data moving without manual work.",
      audience:
        "Operations teams, customer support hubs, public portals, and high-growth services.",
      deliverables: [
        "Domain-trained conversational text & voice agents",
        "Workflow & API automation across CRM, Slack, Email, and databases",
        "Vector search / RAG for accurate, source-cited responses",
        "Automated document parsing, structuring & alerting",
      ],
      stack: ["Google Gemini API", "Node.js", "RAG Vector DB", "Webhooks", "TypeScript"],
      proofPoint: {
        name: "PSSDC AI Conversational Assistant",
        link: "/work",
        text: "Official Lagos State public service AI voice & portal agent",
      },
    },
    {
      id: "seo-speed",
      icon: Search,
      title: "SEO & Speed Optimization",
      accent: "Technical Search & Web Vitals",
      short: "Fast pages. Better rankings.",
      description:
        "Performance is a fundamental growth metric. We run deep technical audits on existing codebases, optimize asset delivery pipelines, eliminate render-blocking scripts, and structure micro-data for maximum search indexing.",
      audience:
        "E-commerce platforms, media publishers, and local services relying on organic search acquisition.",
      deliverables: [
        "100/100 Core Web Vitals optimization on mobile & desktop",
        "Dynamic WebP/AVIF image compression & lazy loading",
        "Structured JSON-LD schema markup for search snippets",
        "Canonical routing, sitemaps, & crawler efficiency fixes",
      ],
      stack: ["Lighthouse", "Schema.org", "Vite SSG", "Cloudflare Edge"],
      proofPoint: {
        name: "TidyScot Web Vitals",
        link: "/work",
        text: "Sub-second LCP optimization for commercial booking site",
      },
    },
    {
      id: "cms-integration",
      icon: Database,
      title: "CMS Integration",
      accent: "Headless Content Architecture",
      short: "Content systems your team can use.",
      description:
        "Empower non-technical marketing and content teams to publish articles, adjust landing page sections, and launch campaigns independently—without breaking site layout or requiring developer intervention.",
      audience:
        "Marketing teams, media platforms, and growing companies needing flexible editorial control.",
      deliverables: [
        "Tailored visual editor configured strictly to brand rules",
        "Role-based permission workflows & draft previews",
        "Headless API integration with automatic edge revalidation",
        "Modular component blocks for rapid landing page builds",
      ],
      stack: ["Sanity.io", "Strapi", "Contentful", "Decoupled React"],
      proofPoint: {
        name: "PSSDC Content Hub",
        link: "/work",
        text: "Structured public service course repository and CMS",
      },
    },
  ];

  const activeDiscipline = disciplines[activeIdx];
  const IconComponent = activeDiscipline.icon;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
      {/* LEFT COLUMN: Discipline Navigation List */}
      <div className="lg:col-span-5 flex flex-col gap-6 text-left">
        <div className="space-y-3">
          <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-accent-brand block">
            CORE DISCIPLINES
          </span>
          <h2 className="font-display text-3xl font-black md:text-4xl text-neutral-900 leading-tight">
            Engineering capability. <br /> Built for production.
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Every service we offer is executed in-house with senior focus. Select a discipline below
            to explore full technical deliverables and architectural specifications.
          </p>
        </div>

        {/* Vertical Discipline Cards List */}
        <div className="flex flex-col gap-3">
          {disciplines.map((d, idx) => {
            const isActive = idx === activeIdx;
            const ItemIcon = d.icon;

            return (
              <div
                key={d.id}
                onClick={() => setActiveIdx(idx)}
                className={`group cursor-pointer p-4 rounded-xl border-2 transition-all duration-200 flex items-center justify-between ${
                  isActive
                    ? "bg-card border-ink shadow-md"
                    : "bg-neutral-50/70 border-neutral-200/80 hover:bg-card hover:border-neutral-300"
                }`}
              >
                <div className="flex items-center gap-3.5">
                  <div
                    className={`h-10 w-10 rounded-lg flex items-center justify-center shrink-0 border transition-colors ${
                      isActive
                        ? "bg-accent-brand text-white border-accent-brand"
                        : "bg-white text-neutral-700 border-neutral-200 group-hover:border-neutral-400"
                    }`}
                  >
                    <ItemIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3
                      className={`font-display text-base font-bold transition-colors ${
                        isActive
                          ? "text-neutral-900"
                          : "text-neutral-700 group-hover:text-neutral-900"
                      }`}
                    >
                      {d.title}
                    </h3>
                    <p className="text-xs text-muted-foreground font-medium">{d.short}</p>
                  </div>
                </div>

                <div
                  className={`h-2 w-2 rounded-full transition-all ${
                    isActive
                      ? "bg-accent-brand scale-125"
                      : "bg-neutral-300 opacity-0 group-hover:opacity-100"
                  }`}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* RIGHT COLUMN: Comprehensive Discipline Detail View Card */}
      <div className="lg:col-span-7 lg:sticky lg:top-24 text-left">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeDiscipline.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="brutal-border border-ink bg-card rounded-2xl p-6 sm:p-8 shadow-xl flex flex-col justify-between gap-6"
          >
            {/* Header Badge */}
            <div>
              <div className="flex items-center justify-between gap-4 mb-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-neutral-900 text-white font-mono text-[10px] font-bold uppercase tracking-wider">
                  <IconComponent className="h-3.5 w-3.5 text-accent-brand" />
                  <span>{activeDiscipline.accent}</span>
                </div>
                <span className="text-xs font-mono font-bold text-muted-foreground">
                  DISCIPLINE 0{activeIdx + 1} / 05
                </span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-black text-neutral-900 leading-tight">
                {activeDiscipline.title}
              </h3>
              <p className="text-sm font-semibold text-accent-brand mt-1">
                {activeDiscipline.short}
              </p>
            </div>

            {/* Detailed Description */}
            <div className="space-y-3 border-t border-neutral-200 pt-5">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-muted-foreground block">
                OVERVIEW & ARCHITECTURE
              </span>
              <p className="text-sm text-neutral-800 leading-relaxed font-normal">
                {activeDiscipline.description}
              </p>
            </div>

            {/* Audience / Ideal For */}
            <div className="bg-neutral-50 p-4 rounded-xl border border-neutral-200">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-neutral-500 block mb-1">
                IDEAL FOR
              </span>
              <p className="text-xs font-semibold text-neutral-900 leading-relaxed">
                {activeDiscipline.audience}
              </p>
            </div>

            {/* Key Deliverables */}
            <div className="space-y-2.5">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-muted-foreground block">
                KEY DELIVERABLES
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {activeDiscipline.deliverables.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-2.5 bg-white p-3 rounded-lg border border-neutral-200 text-xs text-neutral-800 font-medium"
                  >
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="leading-snug">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Recommended Stack */}
            <div className="space-y-2 border-t border-neutral-200 pt-5">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-muted-foreground block">
                PRODUCTION TECH STACK
              </span>
              <div className="flex flex-wrap gap-2">
                {activeDiscipline.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono font-bold bg-neutral-900 text-cream px-3 py-1 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Proof Point Link */}
            <div className="bg-neutral-900 text-white p-4 rounded-xl border border-neutral-800 flex items-center justify-between gap-4 mt-2">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-lg bg-accent-brand/20 border border-accent-brand/40 flex items-center justify-center shrink-0">
                  <Sparkles className="h-4 w-4 text-accent-brand" />
                </div>
                <div className="text-left">
                  <span className="text-[9px] font-mono font-bold text-accent-brand uppercase block">
                    LIVE REFERENCE DEPLOYMENT
                  </span>
                  <span className="text-xs font-bold text-white block">
                    {activeDiscipline.proofPoint.name}
                  </span>
                  <p className="text-[11px] text-neutral-400 line-clamp-1">
                    {activeDiscipline.proofPoint.text}
                  </p>
                </div>
              </div>

              <Link to="/work">
                <button className="brutal-border bg-accent-brand text-cream p-2 hover:bg-orange-600 transition-colors shrink-0">
                  <ArrowUpRight className="h-4 w-4" />
                </button>
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
