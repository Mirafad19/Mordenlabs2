import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, ArrowRight, Check } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SERVICES, STATS } from "@/lib/site-data";
import { ProjectVault } from "@/components/ProjectVault";
import { AIDashboardHero } from "@/components/AIDashboardHero";
import { AnimatedNumber } from "@/components/AnimatedNumber";
import { LogoMarquee } from "@/components/LogoMarquee";
import { ProcessSection } from "@/components/ProcessSection";
import { CapabilitiesScroll } from "@/components/CapabilitiesScroll";
import { motion } from "motion/react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Morden Labs | Digital studio building modern software" },
      {
        name: "description",
        content:
          "Morden Labs is a digital studio building web platforms, mobile apps, AI solutions, and automation for companies that move forward.",
      },
      { property: "og:title", content: "Morden Labs | Digital studio building modern software" },
      {
        property: "og:description",
        content: "Custom AI, Web platforms, Automation & Mobile apps.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <LogoMarquee />
        <Highlights />
        <CapabilitiesScroll />
        <ProjectVault />
        <ProcessSection />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden border-b-2 border-ink bg-background py-20 lg:py-28">
      {/* Background elegant grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, black 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      <div className="mx-auto max-w-7xl px-5 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Copywriting & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="mb-6 inline-flex items-center gap-2 brutal-border bg-card px-3 py-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-muted-foreground"
            >
              <span className="h-2 w-2 rounded-full bg-accent-brand" />
              DIGITAL ENGINEERING STUDIO
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-5xl font-extrabold leading-[1.02] tracking-tight sm:text-6xl md:text-7xl lg:text-[5.25rem] text-neutral-900"
            >
              We build software <br className="hidden sm:inline" />
              that moves <br className="hidden sm:inline" />
              <span className="text-accent-brand">businesses forward.</span>
            </motion.h1>

            {/* Subheading Bullet Stack */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 text-base md:text-lg font-medium text-muted-foreground"
            >
              <span className="flex items-center gap-2 text-neutral-900 font-semibold">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-brand" /> Custom AI
              </span>
              <span className="text-neutral-300">•</span>
              <span className="flex items-center gap-2 text-neutral-900 font-semibold">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-brand" /> Web Platforms
              </span>
              <span className="text-neutral-300">•</span>
              <span className="flex items-center gap-2 text-neutral-900 font-semibold">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-brand" /> Automation
              </span>
              <span className="text-neutral-300">•</span>
              <span className="flex items-center gap-2 text-neutral-900 font-semibold">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-brand" /> Mobile Apps
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Link to="/contact">
                <motion.button
                  whileHover="hover"
                  initial="initial"
                  className="inline-flex items-center gap-2.5 brutal-border brutal-shadow bg-ink px-7 py-4 font-bold text-cream transition-transform duration-300 hover:-translate-x-[2px] hover:-translate-y-[2px] cursor-pointer"
                >
                  Start a project
                  <motion.span
                    variants={{
                      initial: { x: 0, y: 0 },
                      hover: { x: 4, y: -4 },
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <ArrowUpRight className="h-5 w-5 text-accent-brand" />
                  </motion.span>
                </motion.button>
              </Link>

              <Link to="/work">
                <motion.button
                  whileHover="hover"
                  initial="initial"
                  className="inline-flex items-center gap-2.5 brutal-border bg-card px-7 py-4 font-bold transition-transform duration-300 hover:-translate-x-[2px] hover:-translate-y-[2px] hover:brutal-shadow cursor-pointer"
                >
                  See our work
                  <motion.span
                    variants={{
                      initial: { x: 0 },
                      hover: { x: 5 },
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <ArrowRight className="h-5 w-5" />
                  </motion.span>
                </motion.button>
              </Link>
            </motion.div>
          </div>

          {/* Right Column: Clean AI Console/Dashboard Panel */}
          <div className="lg:col-span-5 w-full flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="w-full"
            >
              <AIDashboardHero />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Highlights() {
  return (
    <section className="border-b-2 border-ink bg-ink py-20 lg:py-28 text-cream relative overflow-hidden">
      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-5 md:grid-cols-4 lg:px-8 relative z-10 text-left">
        {STATS.map((s, idx) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="p-4 rounded-xl bg-neutral-900/40 border border-neutral-800"
          >
            <div className="font-display text-4xl font-extrabold md:text-5xl text-white">
              <AnimatedNumber value={s.value} />
            </div>
            <div className="mt-2 text-xs font-mono font-bold uppercase tracking-wider text-accent-brand">
              {s.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="border-b-2 border-ink py-20 lg:py-28 bg-background">
      <div className="mx-auto max-w-4xl px-5 text-center lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-4xl font-black leading-[1.05] md:text-6xl text-neutral-900"
        >
          Ready to build something exceptional?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground leading-relaxed"
        >
          Whether it's AI, mobile, automation, or a custom platform, let's discuss your project.
        </motion.p>

        <motion.ul
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-8 grid max-w-2xl gap-3 text-left sm:grid-cols-2"
        >
          {[
            "Free 30-minute discovery call",
            "Fixed-scope transparent proposals",
            "Weekly live demos & rapid iteration",
            "Long-term engineering partnership",
          ].map((f) => (
            <li key={f} className="flex items-center gap-3 text-sm font-semibold">
              <span className="grid h-6 w-6 shrink-0 place-items-center brutal-border bg-accent-brand text-cream">
                <Check className="h-3.5 w-3.5 stroke-[3px]" />
              </span>
              {f}
            </li>
          ))}
        </motion.ul>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10"
        >
          <Link to="/contact">
            <motion.button
              whileHover="hover"
              initial="initial"
              className="inline-flex items-center gap-2.5 brutal-border brutal-shadow bg-ink px-8 py-4 font-extrabold text-cream transition-transform duration-300 hover:-translate-x-[2px] hover:-translate-y-[2px] cursor-pointer text-base"
            >
              Start a project
              <motion.span
                variants={{
                  initial: { x: 0, y: 0 },
                  hover: { x: 4, y: -4 },
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <ArrowUpRight className="h-5 w-5 text-accent-brand" />
              </motion.span>
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
