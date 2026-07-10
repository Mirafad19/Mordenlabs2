import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, ArrowRight, Check } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SERVICES, PROJECTS, STATS } from "@/lib/site-data";
import { ProjectVault } from "@/components/ProjectVault";
import { AIDashboardHero } from "@/components/AIDashboardHero";
import { AnimatedNumber } from "@/components/AnimatedNumber";
import { motion } from "motion/react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Morden Labs — Digital studio building the modern web" },
      {
        name: "description",
        content:
          "Morden Labs is a digital studio building web, mobile, AI solutions, and SEO for teams that ship. Trusted by government agencies and growing businesses.",
      },
      { property: "og:title", content: "Morden Labs — Digital studio building the modern web" },
      {
        property: "og:description",
        content: "Web, mobile, AI solutions & SEO — built by a small, focused team.",
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
        <Highlights />
        <ServicesPreview />
        <ProjectVault />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden border-b-2 border-ink bg-background">
      {/* Background elegant grid pattern for the whole hero block */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, black 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Copywriting & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="mb-8 inline-flex items-center gap-2 brutal-border bg-card px-3 py-1.5 text-xs font-semibold uppercase tracking-wider"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-accent-brand animate-pulse" />A digital
              studio · est. 2021
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-5xl font-bold leading-[1.02] tracking-tight sm:text-6xl md:text-7xl lg:text-[5.5rem] text-left"
            >
              We build the software behind{" "}
              <span className="text-accent-brand">modern businesses.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 max-w-2xl text-lg text-muted-foreground md:text-xl text-left"
            >
              Morden Labs is a small, senior team designing and shipping web, mobile, and AI
              products for growing companies and government partners. We build things worth signing
              our name to.
            </motion.p>

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
                  className="inline-flex items-center gap-2.5 brutal-border brutal-shadow bg-ink px-6 py-3.5 font-semibold text-cream transition-transform duration-300 hover:-translate-x-[2px] hover:-translate-y-[2px] cursor-pointer"
                >
                  Start a project
                  <motion.span
                    variants={{
                      initial: { x: 0, y: 0 },
                      hover: { x: 4, y: -4 },
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <ArrowUpRight className="h-5 w-5" />
                  </motion.span>
                </motion.button>
              </Link>

              <Link to="/work">
                <motion.button
                  whileHover="hover"
                  initial="initial"
                  className="inline-flex items-center gap-2.5 brutal-border bg-card px-6 py-3.5 font-semibold transition-transform duration-300 hover:-translate-x-[2px] hover:-translate-y-[2px] hover:brutal-shadow cursor-pointer"
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

          {/* Right Column: Premium AI Console/Dashboard Panel */}
          <div className="lg:col-span-5 w-full flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
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
    <section className="border-b-2 border-ink bg-ink py-16 text-cream relative overflow-hidden">
      {/* Subtle grid pattern inside Highlights too */}
      <div
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-5 md:grid-cols-4 lg:px-8 relative z-10">
        {STATS.map((s, idx) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="font-display text-4xl font-bold md:text-5xl text-white">
              <AnimatedNumber value={s.value} />
            </div>
            <div className="mt-2 text-xs font-semibold uppercase tracking-wider text-cream/60">
              {s.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function ServicesPreview() {
  return (
    <section className="border-b-2 border-ink py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end"
        >
          <div>
            <div className="mb-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              What we do
            </div>
            <h2 className="max-w-2xl font-display text-4xl font-bold leading-[1.05] md:text-5xl lg:text-6xl">
              Six disciplines. All done properly.
            </h2>
          </div>
          <Link to="/services">
            <motion.button
              whileHover="hover"
              initial="initial"
              className="inline-flex items-center gap-2 brutal-border bg-card px-5 py-3 font-semibold transition-transform duration-300 hover:-translate-x-[2px] hover:-translate-y-[2px] hover:brutal-shadow-sm cursor-pointer"
            >
              View all services{" "}
              <motion.span
                variants={{
                  initial: { x: 0, y: 0 },
                  hover: { x: 3, y: -3 },
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <ArrowUpRight className="h-4 w-4" />
              </motion.span>
            </motion.button>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="grid gap-0 brutal-border md:grid-cols-2 lg:grid-cols-3"
        >
          {SERVICES.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                whileHover={{ y: -6, zIndex: 10 }}
                transition={{ type: "spring", stiffness: 350, damping: 25 }}
                className={`p-8 lg:p-10 ${(i + 1) % 3 !== 0 ? "lg:border-r-2" : ""} ${
                  i % 2 === 0 ? "md:border-r-2 lg:border-r-2" : ""
                } ${i < SERVICES.length - 3 ? "border-b-2" : "md:border-b-2 lg:border-b-0"} border-ink bg-card hover:bg-neutral-50/40 hover:shadow-[0_15px_40px_rgba(249,115,22,0.06)] hover:border-accent-brand/50 transition-colors duration-300 relative group cursor-pointer`}
              >
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center brutal-border bg-background transition-transform duration-300 group-hover:scale-115 group-hover:bg-accent-brand/10 group-hover:border-accent-brand">
                  <Icon
                    className="h-5 w-5 transition-transform duration-300 group-hover:rotate-3 group-hover:text-accent-brand"
                    strokeWidth={2}
                  />
                </div>
                <h3 className="font-display text-xl font-bold transition-colors duration-300 group-hover:text-accent-brand">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.short}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="border-b-2 border-ink py-20 lg:py-28">
      <div className="mx-auto max-w-4xl px-5 text-center lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-4xl font-bold leading-[1.05] md:text-6xl"
        >
          Have something to build?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground"
        >
          We take on a limited number of projects each quarter to keep the work at a high standard.
          If it sounds like a fit, we'd love to hear from you.
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
            "Fixed-scope proposals",
            "Weekly demos & transparent updates",
            "Long-term partnership optional",
          ].map((f) => (
            <li key={f} className="flex items-center gap-3 text-sm font-medium">
              <span className="grid h-6 w-6 shrink-0 place-items-center brutal-border bg-accent-brand text-cream">
                <Check className="h-3.5 w-3.5" />
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
              className="inline-flex items-center gap-2.5 brutal-border brutal-shadow bg-ink px-8 py-4 font-semibold text-cream transition-transform duration-300 hover:-translate-x-[2px] hover:-translate-y-[2px] cursor-pointer"
            >
              Start a conversation{" "}
              <motion.span
                variants={{
                  initial: { x: 0, y: 0 },
                  hover: { x: 4, y: -4 },
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <ArrowUpRight className="h-5 w-5" />
              </motion.span>
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
