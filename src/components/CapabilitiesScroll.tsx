import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import type { LucideIcon } from "lucide-react";
import { Code2, Smartphone, Bot, Search, Database, CheckCircle2, ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { N8nWorkflowBlock } from "./N8nWorkflowBlock";

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
      "https://www.image2url.com/r2/default/images/1786012399483-f4c0a214-cfbd-4866-a2c6-567e3ecedfeb.png",
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
      "https://www.image2url.com/r2/default/images/1786012465140-f8b62bc9-ee53-47ba-ac54-0d4d18fd7742.png",
  },
  {
    id: "ai-solutions-automation",
    number: "03",
    title: "AI Solutions & Automation",
    short: "Your tools talking to each other — and your clients.",
    icon: Bot,
    description:
      "We build the AI layer for your business — from custom conversational agents and voice interfaces to background automations that connect your tools, parse documents, and keep data moving without manual work.",
    deliverables: [
      "Domain-trained conversational text & voice agents",
      "Workflow & API automation across CRM, Slack, Email, and DBs",
      "Vector search / RAG for accurate, source-cited responses",
      "Automated document parsing, structuring & alerting",
    ],
    stack: ["Google Gemini API", "Node.js", "RAG Vector DB", "Webhooks", "TypeScript"],
    image:
      "https://www.image2url.com/r2/default/images/1785759868043-9b252c53-69fb-4dcf-be2e-145af1f3ed48.png",
  },
  {
    id: "seo-speed",
    number: "04",
    title: "SEO & Speed Optimization",
    short: "Fast pages. Better rankings.",
    icon: Search,
    description:
      "Performance is a fundamental growth metric. We run deep technical audits on existing codebases, optimize asset delivery pipelines, eliminate render-blocking scripts, and structure micro-data for maximum search indexing.",
    deliverables: [
      "Optimized Core Web Vitals across mobile & desktop",
      "Dynamic WebP/AVIF image compression & lazy loading",
      "Structured JSON-LD schema markup for search snippets",
      "Canonical routing, sitemaps, & crawler efficiency fixes",
    ],
    stack: ["Lighthouse", "Schema.org", "Vite SSG", "Cloudflare Edge"],
    image:
      "https://www.image2url.com/r2/default/images/1786020310457-85681786-ffdc-48d4-b3e7-3656534733ff.png",
  },
  {
    id: "cms-integration",
    number: "05",
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
      "https://www.image2url.com/r2/default/images/1786019038737-a87c4090-a413-47d8-9702-b5493b288441.png",
  },
];

function CapabilityVisualFrame({ cap }: { cap: CapabilityItem }) {
  if (cap.id === "ai-solutions-automation") {
    return (
      <div className="w-[92%] sm:w-[88%] mx-auto h-full flex flex-col justify-center">
        <N8nWorkflowBlock />
      </div>
    );
  }

  return (
    <div className="w-full h-full flex items-center justify-center p-2">
      <img
        src={cap.image}
        alt={cap.title}
        className="w-[90%] sm:w-[85%] max-w-[520px] h-auto max-h-[380px] object-contain rounded-2xl border border-white/10 shadow-2xl transition-all duration-300"
      />
    </div>
  );
}

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
        const distance = Math.abs(rect.top + rect.height * 0.3 - targetY);
        if (distance < minDistance) {
          minDistance = distance;
          currentBest = index;
        }
      });

      setActiveIdx(currentBest);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

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
          {/* LEFT COLUMN: Scrolling Items */}
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
                      {cap.number} / 05
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
                    {cap.id === "ai-solutions-automation" ? (
                      <N8nWorkflowBlock />
                    ) : (
                      <img
                        src={cap.image}
                        alt={cap.title}
                        className="w-full h-auto rounded-xl object-contain max-h-[300px]"
                        loading="lazy"
                      />
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* RIGHT COLUMN: Sticky Pinned Visual Container (Desktop only) */}
          <div className="hidden lg:block lg:col-span-6 lg:sticky lg:top-[144px]">
            <div
              className="bg-gradient-to-b from-[#121212] via-[#161616] to-[#1A1A1A] rounded-[32px] p-8 shadow-[0_30px_80px_rgba(0,0,0,0.35)] relative overflow-hidden flex flex-col justify-between max-h-[calc(100vh-170px)] min-h-[480px]"
              style={{ border: "1px solid rgba(255, 255, 255, 0.08)" }}
            >
              {/* Sticky Card Top Header */}
              <div className="flex items-center justify-between gap-4 mb-4 z-10 shrink-0">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] text-white font-mono text-xs font-semibold uppercase tracking-widest border border-white/10">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  <span>{activeCapability.title}</span>
                </div>

                <div className="flex items-center gap-1.5 font-mono text-xs font-medium text-neutral-400 tracking-wider">
                  <span>DISCIPLINE</span>
                  <span className="text-accent-brand font-bold">{activeCapability.number}</span>
                  <span>/ 05</span>
                </div>
              </div>

              {/* Visual Container */}
              <div className="relative w-full flex-1 flex items-center justify-center my-2 overflow-hidden rounded-2xl bg-transparent">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeCapability.id}
                    initial={{ opacity: 0, y: 12, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -12, scale: 0.98 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full h-full flex flex-col items-center justify-center relative"
                  >
                    <CapabilityVisualFrame cap={activeCapability} />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Integrated Footer Bar */}
              <div className="pt-6 border-t border-white/[0.08] flex items-center justify-between gap-4 z-10 shrink-0 mt-2">
                <div className="text-left min-w-0">
                  <span className="text-[10px] font-mono font-bold text-accent-brand uppercase tracking-widest block truncate mb-0.5">
                    MORDEN LABS CAPABILITY
                  </span>
                  <span className="text-base font-bold text-white block truncate tracking-tight">
                    {activeCapability.title}
                  </span>
                </div>

                <Link to="/services">
                  <button className="h-[52px] px-6 rounded-xl bg-accent-brand text-cream font-bold text-xs uppercase tracking-wider hover:bg-orange-600 shadow-[0_4px_20px_rgba(224,86,31,0.25)] hover:shadow-[0_6px_28px_rgba(224,86,31,0.4)] transition-all duration-300 inline-flex items-center gap-2 cursor-pointer shrink-0">
                    <span>Explore Service</span>
                    <ArrowUpRight className="h-4 w-4" />
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
