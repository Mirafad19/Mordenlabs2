import { motion } from "motion/react";
import { Search, Compass, Code2, Rocket, ArrowRight } from "lucide-react";

export function ProcessSection() {
  const STEPS = [
    {
      num: "01",
      title: "Discover",
      subtitle: "Scope & Architecture",
      desc: "We analyze your business goals, target audience, and system requirements to draft a precise technical roadmap with zero ambiguity.",
      icon: Search,
      deliverables: ["Product specification", "Technical architecture", "Fixed timeline"],
    },
    {
      num: "02",
      title: "Design",
      subtitle: "UI/UX & Interactive Prototypes",
      desc: "We craft clean, high-contrast visual layouts and tactile micro-interactions focused on conversion, readability, and speed.",
      icon: Compass,
      deliverables: ["High-fidelity Figma specs", "Design system tokens", "User journey flows"],
    },
    {
      num: "03",
      title: "Develop",
      subtitle: "Clean Code & AI Integration",
      desc: "We engineer production-ready web platforms, mobile apps, or autonomous background pipelines with strict TypeScript type safety.",
      icon: Code2,
      deliverables: ["Modular React/Vite code", "Serverless API endpoints", "Automated QA suite"],
    },
    {
      num: "04",
      title: "Launch",
      subtitle: "Global Edge Deployment",
      desc: "We deploy to global edge networks, configure custom domains and SSL, run Core Web Vitals optimizations, and hand over docs.",
      icon: Rocket,
      deliverables: [
        "100% PageSpeed setup",
        "CI/CD automated pipeline",
        "30-day post-launch support",
      ],
    },
  ];

  return (
    <section className="border-b-2 border-ink py-20 lg:py-28 bg-background relative overflow-hidden">
      {/* Background Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="mx-auto max-w-7xl px-5 lg:px-8 relative z-10">
        <div className="mb-14 text-left">
          <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground block mb-2">
            HOW WE WORK
          </span>
          <h2 className="font-display text-4xl font-bold leading-[1.05] md:text-5xl lg:text-6xl text-white">
            A disciplined engineering process.
          </h2>
          <p className="mt-4 max-w-xl text-base text-muted-foreground leading-relaxed">
            No endless meetings or opaque updates. We ship software predictably using four
            structured execution stages.
          </p>
        </div>

        {/* 4 Process Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="brutal-border bg-card p-6 md:p-8 flex flex-col justify-between hover:border-accent-brand hover:shadow-lg transition-all duration-300 group relative"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-display text-3xl font-black text-accent-brand">
                      {step.num}
                    </span>
                    <div className="h-10 w-10 rounded-xl brutal-border bg-background flex items-center justify-center text-foreground group-hover:bg-accent-brand group-hover:text-white transition-colors">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>

                  <h3 className="font-display text-2xl font-bold text-white group-hover:text-accent-brand transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs font-semibold text-accent-brand uppercase tracking-wider mt-1">
                    {step.subtitle}
                  </p>
                  <p className="mt-4 text-xs leading-relaxed text-muted-foreground">{step.desc}</p>
                </div>

                <div className="mt-6 border-t border-neutral-800 pt-4">
                  <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-neutral-400 block mb-2">
                    KEY DELIVERABLES
                  </span>
                  <div className="space-y-1">
                    {step.deliverables.map((d) => (
                      <div
                        key={d}
                        className="flex items-center gap-1.5 text-[11px] font-medium text-neutral-300"
                      >
                        <span className="h-1 w-1 rounded-full bg-accent-brand" />
                        <span>{d}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
