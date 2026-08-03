import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import type { LucideIcon } from "lucide-react";
import {
  Code2,
  Smartphone,
  Workflow,
  Bot,
  Search,
  Database,
  CheckCircle2,
  ArrowUpRight,
} from "lucide-react";
import { Link } from "@tanstack/react-router";

export interface CapabilityItem {
  id: string;
  number: string;
  title: string;
  short: string;
  icon: LucideIcon;
  description: string;
  deliverables: string[];
  stack: string[];
  image: string;
  projectTag: string;
  projectTitle: string;
  projectClient: string;
}

export const CAPABILITIES: CapabilityItem[] = [
  {
    id: "web-dev",
    number: "01",
    title: "Web Development",
    short: "Clean code. Real performance.",
    icon: Code2,
    description:
      "We build web platforms engineered for speed, stability, and scale. By avoiding bloated page builders, we ship custom web applications with pristine Core Web Vitals, resilient serverless APIs, and global edge caching.",
    deliverables: [
      "Semantic HTML & accessible component architecture",
      "Sub-second global page loads & zero layout shift",
      "Scalable React 19 & TypeScript edge frontend",
      "Custom design system tailored to brand rules",
    ],
    stack: ["React 19", "TypeScript", "Vite", "Tailwind CSS", "Cloud Run"],
    image:
      "https://www.image2url.com/r2/default/files/1785761967417-335801c0-e331-4406-8d52-0f6af5f2b61c.png",
    projectTag: "LIVE COMMERCIAL DEPLOYMENT",
    projectTitle: "TidyScot Platform",
    projectClient: "TidyScot Ltd (UK)",
  },
  {
    id: "mobile-apps",
    number: "02",
    title: "Mobile Apps",
    short: "iOS & Android, done properly.",
    icon: Smartphone,
    description:
      "Smooth, responsive, native-feeling mobile applications built for iOS and Android simultaneously. We construct tactile layouts with optimized memory management, offline sync support, and crisp interactions.",
    deliverables: [
      "Single high-performance codebase for iOS & Android",
      "Offline-first database sync & local storage engines",
      "Push notifications, biometric auth & camera flows",
      "Complete App Store & Google Play launch compliance",
    ],
    stack: ["React Native", "Expo", "TypeScript", "SQLite", "Firebase Auth"],
    image:
      "https://www.image2url.com/r2/default/files/1785761422623-3d338629-9348-4c6f-94b4-337089d6785e.png",
    projectTag: "MOBILE CRM & DISPATCH",
    projectTitle: "Citicare Mobile Direct",
    projectClient: "Citicare Health Integrated Solutions",
  },
  {
    id: "ai-automations",
    number: "03",
    title: "AI Automations",
    short: "Your tools, talking to each other.",
    icon: Workflow,
    description:
      "No more repetitive manual data entry or copying text between disconnected tools. We design and connect background automation pipelines that classify leads, parse multi-page PDFs, draft client documentation, and alert teams instantly.",
    deliverables: [
      "Zero-friction background webhook & API pipelines",
      "Automated PDF/document parsing & JSON structuring",
      "Multi-system sync across CRM, Slack, Email, and DBs",
      "Audit logging & automatic error recovery safeguards",
    ],
    stack: ["Node.js", "Gemini API", "PostgreSQL", "Queues", "Webhooks"],
    image:
      "https://www.image2url.com/r2/default/files/1785761353465-1cc97d30-b41d-4150-8303-9c6a84264f5e.png",
    projectTag: "OPERATIONAL WORKFLOW ENGINE",
    projectTitle: "Citicare Health CRM",
    projectClient: "Automated Enquiry Pipeline",
  },
  {
    id: "ai-solutions",
    number: "04",
    title: "AI Solutions",
    short: "Custom agents, tuned to your data.",
    icon: Bot,
    description:
      "We build intelligent conversational voice and text assistants trained on your organization's specific domain knowledge. Using vector search and RAG, our agents deliver accurate, source-cited responses 24/7.",
    deliverables: [
      "Domain-trained conversational text & voice agents",
      "Vector database search for factual, cited responses",
      "Real-time streaming UI & interactive audio interfaces",
      "Granular safety guardrails & operational telemetry",
    ],
    stack: ["Google Gemini 2.5", "RAG Vector DB", "WebRTC Voice", "Express Proxy"],
    image:
      "https://www.image2url.com/r2/default/images/1785759868043-9b252c53-69fb-4dcf-be2e-145af1f3ed48.png",
    projectTag: "CIVIC AI & VOICE ASSISTANT",
    projectTitle: "PSSDC AI Conversational Assistant",
    projectClient: "Lagos State Public Service",
  },
  {
    id: "seo-speed",
    number: "05",
    title: "SEO & Speed Optimization",
    short: "Fast pages. Better rankings.",
    icon: Search,
    description:
      "Performance is a fundamental growth metric. We run deep technical audits on existing codebases, optimize asset delivery pipelines, eliminate render-blocking scripts, and structure micro-data for maximum search indexing.",
    deliverables: [
      "100/100 Core Web Vitals optimization on mobile & desktop",
      "Dynamic WebP/AVIF image compression & lazy loading",
      "Structured JSON-LD schema markup for search snippets",
      "Canonical routing, sitemaps, & crawler efficiency fixes",
    ],
    stack: ["Lighthouse", "Schema.org", "Vite SSG", "Cloudflare Edge"],
    image:
      "https://www.image2url.com/r2/default/files/1785762007649-2973d059-284e-4928-a8c6-80f5f1fc9ba7.png",
    projectTag: "PERFORMANCE & WEB VITALS",
    projectTitle: "Sub-Second LCP Engine",
    projectClient: "TidyScot Mobile Platform",
  },
  {
    id: "cms-integration",
    number: "06",
    title: "CMS Integration",
    short: "Content systems your team can use.",
    icon: Database,
    description:
      "Empower non-technical marketing and content teams to publish articles, adjust landing page sections, and launch campaigns independently—without breaking site layout or requiring developer intervention.",
    deliverables: [
      "Tailored visual editor configured strictly to brand rules",
      "Role-based permission workflows & draft previews",
      "Headless API integration with automatic edge revalidation",
      "Modular component blocks for rapid landing page builds",
    ],
    stack: ["Sanity.io", "Strapi", "Contentful", "Decoupled React"],
    image:
      "https://www.image2url.com/r2/default/images/1785759935249-3ae81f9f-d354-40a2-9761-d85e66c881ea.png",
    projectTag: "PUBLIC CONTENT PORTAL",
    projectTitle: "PSSDC Course Repository & CMS",
    projectClient: "Lagos State Government",
  },
];

export function CapabilitiesScroll() {
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const viewportHeight = window.innerHeight;
      const targetY = viewportHeight * 0.4; // Trigger line at 40% from top of viewport

      let currentBest = 0;
      let minDistance = Infinity;

      sectionRefs.current.forEach((ref, index) => {
        if (!ref) return;
        const rect = ref.getBoundingClientRect();
        // Distance of block top/center to target line
        const distance = Math.abs(rect.top + rect.height * 0.3 - targetY);
        if (distance < minDistance) {
          minDistance = distance;
          currentBest = index;
        }
      });

      setActiveIdx(currentBest);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial evaluation

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const activeCapability = CAPABILITIES[activeIdx];

  return (
    <section className="border-b-2 border-ink py-20 lg:py-28 bg-background relative">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* Section Header */}
        <div className="mb-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end text-left">
          <div>
            <div className="mb-2 text-xs font-mono font-bold uppercase tracking-wider text-accent-brand">
              OUR CAPABILITIES
            </div>
            <h2 className="max-w-2xl font-display text-4xl font-bold leading-[1.05] md:text-5xl lg:text-6xl text-neutral-900">
              Digital products built to last.
            </h2>
          </div>
          <Link to="/services">
            <motion.button
              whileHover={{ x: 2, y: -2 }}
              className="inline-flex items-center gap-2 brutal-border bg-card px-5 py-3 font-bold transition-all duration-300 hover:brutal-shadow-sm cursor-pointer"
            >
              View all services <ArrowUpRight className="h-4 w-4 text-accent-brand" />
            </motion.button>
          </Link>
        </div>

        {/* Scroll-Driven Pinned Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* LEFT COLUMN: Scrolling Items (1 block per viewport approx) */}
          <div className="lg:col-span-6 flex flex-col gap-16 lg:gap-24 text-left">
            {CAPABILITIES.map((cap, idx) => {
              const IconComp = cap.icon;
              const isActive = idx === activeIdx;

              return (
                <div
                  key={cap.id}
                  ref={(el) => {
                    sectionRefs.current[idx] = el;
                  }}
                  className={`transition-all duration-500 py-6 sm:py-8 lg:py-12 border-b lg:border-b-0 border-neutral-200 ${
                    isActive ? "opacity-100 scale-[1.01]" : "opacity-50 lg:opacity-60"
                  }`}
                >
                  {/* Badge & Number */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-mono text-xs font-bold text-accent-brand bg-accent-brand/10 border border-accent-brand/20 px-2.5 py-1 rounded-md">
                      {cap.number} / 06
                    </span>
                    <span className="text-xs font-mono font-bold text-muted-foreground uppercase tracking-wider">
                      {cap.short}
                    </span>
                  </div>

                  {/* Title */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-9 w-9 rounded-lg bg-neutral-900 text-cream flex items-center justify-center shrink-0">
                      <IconComp className="h-5 w-5 text-accent-brand" />
                    </div>
                    <h3 className="font-display text-2xl sm:text-3xl font-black text-neutral-900">
                      {cap.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-neutral-700 leading-relaxed font-normal mb-6">
                    {cap.description}
                  </p>

                  {/* Key Deliverables */}
                  <div className="space-y-2 mb-6">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-muted-foreground block">
                      KEY DELIVERABLES
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {cap.deliverables.map((item) => (
                        <div
                          key={item}
                          className="flex items-start gap-2 bg-neutral-50/80 p-2.5 rounded-lg border border-neutral-200/80 text-xs text-neutral-800 font-medium"
                        >
                          <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span className="leading-snug">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-1.5">
                    {cap.stack.map((t) => (
                      <span
                        key={t}
                        className="text-[11px] font-mono font-bold bg-neutral-900 text-cream px-2.5 py-0.5 rounded-md"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Mobile Inline Visual (shown only on mobile/tablet) */}
                  <div className="mt-6 block lg:hidden brutal-border border-ink rounded-2xl overflow-hidden bg-neutral-900 p-2">
                    <img
                      src={cap.image}
                      alt={cap.title}
                      className="w-full h-auto rounded-xl object-cover max-h-[300px]"
                      loading="lazy"
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* RIGHT COLUMN: Sticky Pinned Visual Container (Desktop only) */}
          <div className="hidden lg:block lg:col-span-6 lg:sticky lg:top-28">
            <div className="brutal-border border-ink bg-card rounded-3xl p-6 md:p-8 shadow-2xl relative overflow-hidden flex flex-col justify-between min-h-[520px]">
              {/* Sticky Card Top Header */}
              <div className="flex items-center justify-between gap-4 mb-4 z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-neutral-900 text-cream font-mono text-xs font-bold uppercase tracking-wider border border-neutral-800">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>{activeCapability.projectTag}</span>
                </div>

                <div className="flex items-center gap-1.5 font-mono text-xs font-bold text-neutral-500">
                  <span>DISCIPLINE</span>
                  <span className="text-accent-brand font-black">{activeCapability.number}</span>
                  <span>/ 06</span>
                </div>
              </div>

              {/* Smooth Animated Image Swap Container */}
              <div className="relative w-full flex-1 flex items-center justify-center my-4 min-h-[340px] overflow-hidden rounded-2xl bg-neutral-950/90 border border-neutral-800/80 p-3">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeCapability.id}
                    initial={{ opacity: 0, y: 18, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -18, scale: 0.98 }}
                    transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full h-full flex flex-col items-center justify-center relative group"
                  >
                    <img
                      src={activeCapability.image}
                      alt={activeCapability.title}
                      className="w-full h-auto max-h-[380px] object-contain rounded-xl shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Sticky Card Bottom Bar */}
              <div className="bg-neutral-900 text-white p-4 rounded-xl border border-neutral-800 flex items-center justify-between gap-4 z-10">
                <div className="text-left">
                  <span className="text-[10px] font-mono font-bold text-accent-brand uppercase tracking-wider block">
                    {activeCapability.projectClient}
                  </span>
                  <span className="text-sm font-bold text-white block">
                    {activeCapability.projectTitle}
                  </span>
                </div>

                <Link to="/work">
                  <button className="brutal-border bg-accent-brand text-cream px-3 py-2 text-xs font-bold hover:bg-orange-600 transition-colors inline-flex items-center gap-1.5 cursor-pointer">
                    <span>Explore Case Study</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
