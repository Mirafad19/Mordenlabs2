import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Linkedin, Mail, ShieldCheck, CheckCircle2, Award } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { STATS, LEADERSHIP } from "@/lib/site-data";
import { motion } from "motion/react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | Fadahunsi Miracle, Founder & CEO | Morden Labs" },
      {
        name: "description",
        content:
          "Meet Fadahunsi Miracle, Founder & CEO at Morden Labs. Leading software engineering, enterprise AI systems, and scalable digital platforms across the UK and Nigeria.",
      },
      { name: "author", content: "Fadahunsi Miracle, Founder & CEO at Morden Labs" },
      {
        property: "og:title",
        content: "About Us | Fadahunsi Miracle, Founder & CEO | Morden Labs",
      },
      {
        property: "og:description",
        content:
          "Meet Fadahunsi Miracle, Founder & CEO at Morden Labs. Engineering digital products with taste, velocity, and real stakes.",
      },
    ],
  }),
  component: AboutPage,
});

const VALUES = [
  {
    title: "Do work worth signing.",
    body: "If we wouldn't put our name on it, we don't ship it. That standard applies to every button, migration, and email.",
  },
  {
    title: "Small team, senior work.",
    body: "You work directly with the people building your product. No handoffs, no account managers reading from a slide.",
  },
  {
    title: "Honest scope, honest bills.",
    body: "Fixed proposals. Weekly demos. If something changes, we tell you before it lands on an invoice.",
  },
  {
    title: "Own the outcome.",
    body: "We measure success by whether the thing actually works in production, not by hours logged or tickets closed.",
  },
];

function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <section className="border-b-2 border-ink py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="mb-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground"
              >
                About us
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="font-display text-5xl font-bold leading-[1.02] md:text-6xl lg:text-7xl"
              >
                A small team. <span className="text-accent-brand">Serious work.</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="mt-8 text-lg text-muted-foreground md:text-xl"
              >
                We're designers, engineers, and strategists working together as one team. We build
                for founders, marketing leads, product teams, and government partners: anyone
                shipping things that need to actually work.
              </motion.p>
            </div>
          </div>
        </section>

        <section className="border-b-2 border-ink bg-card py-20 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-12 lg:gap-16 lg:px-8">
            <div className="lg:col-span-5">
              <h2 className="font-display text-3xl font-bold leading-[1.05] md:text-5xl">
                Our story.
              </h2>
            </div>
            <div className="space-y-6 text-lg leading-relaxed text-muted-foreground lg:col-span-7">
              <p>
                Morden Labs started as late-night side projects between friends who kept meeting the
                same problem: most software gets shipped tired.
              </p>
              <p>
                We wanted to build differently: smaller teams, senior work, and enough taste to say
                no. That's still the whole point.
              </p>
              <p>
                Today we work across web, mobile, AI, and integrations for clients in the UK and
                Nigeria. Some are early-stage founders. Some are government agencies. What they
                share is a bias for doing things properly.
              </p>
            </div>
          </div>
        </section>

        {/* Founder & Leadership Section */}
        <section
          id="leadership"
          className="border-b-2 border-ink bg-background py-20 lg:py-28 relative"
        >
          {/* Schema.org Person Structured Data for Google Search Indexing */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Person",
                name: LEADERSHIP.name,
                jobTitle: LEADERSHIP.role,
                image: LEADERSHIP.image,
                worksFor: {
                  "@type": "Organization",
                  name: LEADERSHIP.company,
                  url: "https://mordenlabs.com.ng",
                },
                url: "https://mordenlabs.com.ng/about#leadership",
                description: LEADERSHIP.headline,
                email: `mailto:${LEADERSHIP.socials.email}`,
                sameAs: [LEADERSHIP.socials.linkedin].filter(Boolean),
                knowsAbout: LEADERSHIP.expertise,
              }),
            }}
          />

          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="mb-14 max-w-3xl"
            >
              <div className="mb-4 inline-flex items-center gap-2 brutal-border bg-card px-3 py-1.5 font-mono text-xs font-semibold uppercase tracking-wider text-accent-brand">
                <span className="h-2 w-2 rounded-full bg-accent-brand" />
                LEADERSHIP
              </div>
              <h2 className="font-display text-4xl font-bold leading-[1.05] md:text-5xl lg:text-6xl">
                Built and Led by Miracle Fadahunsi.
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Direct hands-on engineering and architectural leadership across every client
                project.
              </p>
            </motion.div>

            {/* Leadership Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="brutal-border brutal-shadow-lg bg-card overflow-hidden grid lg:grid-cols-12"
            >
              {/* Profile Identity Card */}
              <div className="lg:col-span-5 border-b-2 lg:border-b-0 lg:border-r-2 border-ink p-8 lg:p-10 bg-muted/40 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 font-mono text-xs font-bold uppercase tracking-wider">
                      <span className="h-2 w-2 rounded-full bg-emerald-500" />
                      FOUNDER & LEAD ENGINEER
                    </span>
                  </div>

                  {/* Profile Portrait Photo */}
                  <div className="mb-6 shrink-0">
                    <img
                      src={LEADERSHIP.image}
                      alt={`${LEADERSHIP.name}, ${LEADERSHIP.role}`}
                      className="w-28 h-28 sm:w-32 sm:h-32 rounded-full object-cover border-0 outline-none shadow-none"
                      loading="eager"
                    />
                  </div>

                  <h3 className="font-display text-3xl font-bold leading-tight">
                    {LEADERSHIP.name}
                  </h3>
                  <div className="mt-1 font-mono text-sm font-semibold text-accent-brand uppercase tracking-wider">
                    {LEADERSHIP.role}
                  </div>
                  <div className="mt-2 text-xs font-medium text-muted-foreground flex items-center gap-2">
                    <span>{LEADERSHIP.company}</span>
                    <span>·</span>
                    <span>{LEADERSHIP.location}</span>
                  </div>

                  <div className="mt-6 pt-6 border-t border-ink/10 space-y-2">
                    <div className="flex items-center gap-2 text-xs font-mono text-neutral-600">
                      <ShieldCheck className="h-4 w-4 text-emerald-600" />
                      <span>Technical Architecture & Hands-on Delivery</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-mono text-neutral-600">
                      <Award className="h-4 w-4 text-accent-brand" />
                      <span>Commercial & Government Project Experience</span>
                    </div>
                  </div>
                </div>

                {/* Direct Contact Buttons */}
                <div className="mt-8 pt-6 border-t border-ink/10 flex flex-wrap items-center gap-3">
                  <a
                    href={LEADERSHIP.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 brutal-border bg-card hover:bg-muted text-xs font-mono font-semibold transition-transform hover:-translate-y-[1px]"
                  >
                    <Linkedin className="h-3.5 w-3.5 text-[#0A66C2]" />
                    LinkedIn
                  </a>
                  <a
                    href={`mailto:${LEADERSHIP.socials.email}`}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 brutal-border bg-card hover:bg-muted text-xs font-mono font-semibold transition-transform hover:-translate-y-[1px]"
                  >
                    <Mail className="h-3.5 w-3.5 text-accent-brand" />
                    Email
                  </a>
                </div>
              </div>

              {/* Bio Content */}
              <div className="lg:col-span-7 p-8 lg:p-12 flex flex-col justify-between space-y-8">
                <div>
                  {/* Quote */}
                  <div className="p-6 bg-muted/40 mb-8 border-l-4 border-l-accent-brand rounded-r-lg">
                    <p className="font-display text-xl lg:text-2xl font-bold leading-snug">
                      "{LEADERSHIP.quote}"
                    </p>
                  </div>

                  <h4 className="font-display text-2xl font-bold mb-4">{LEADERSHIP.headline}</h4>

                  <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
                    {LEADERSHIP.bio.map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}
                  </div>

                  {/* Core Strategic Domains */}
                  <div className="mt-8 pt-6 border-t border-ink/10">
                    <div className="font-mono text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">
                      Core Technical Focus
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {LEADERSHIP.expertise.map((skill) => (
                        <div
                          key={skill}
                          className="flex items-center gap-2 text-xs font-semibold text-foreground"
                        >
                          <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                          <span>{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-ink/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="text-xs text-muted-foreground">
                    Ready to start a project or discuss an engineering engagement?
                  </div>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 brutal-border brutal-shadow bg-ink px-5 py-2.5 font-semibold text-cream text-xs transition-transform hover:-translate-x-[2px] hover:-translate-y-[2px]"
                  >
                    Start a Project <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="border-b-2 border-ink py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="mb-14 max-w-2xl"
            >
              <div className="mb-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                What we believe
              </div>
              <h2 className="font-display text-4xl font-bold leading-[1.05] md:text-5xl">
                Four things that shape our work.
              </h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="grid gap-0 brutal-border md:grid-cols-2"
            >
              {VALUES.map((v, i) => (
                <div
                  key={v.title}
                  className={`p-8 lg:p-10 ${i % 2 === 0 ? "md:border-r-2" : ""} ${
                    i < VALUES.length - 2 ? "border-b-2" : ""
                  } border-ink bg-card`}
                >
                  <div className="mb-3 font-mono text-xs font-bold text-accent-brand">0{i + 1}</div>
                  <h3 className="font-display text-2xl font-bold">{v.title}</h3>
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground">{v.body}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="border-b-2 border-ink bg-ink py-20 text-cream lg:py-24">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-5 md:grid-cols-4 lg:px-8">
            {STATS.map((s) => (
              <div key={s.label}>
                <div className="font-display text-4xl font-bold md:text-5xl">{s.value}</div>
                <div className="mt-2 text-xs font-semibold uppercase tracking-wider text-cream/60">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="border-b-2 border-ink py-20 lg:py-28">
          <div className="mx-auto max-w-4xl px-5 text-center lg:px-8">
            <h2 className="font-display text-4xl font-bold md:text-5xl">Want to work with us?</h2>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 brutal-border brutal-shadow bg-ink px-6 py-3.5 font-semibold text-cream transition-transform hover:-translate-x-[2px] hover:-translate-y-[2px]"
            >
              Start a conversation <ArrowUpRight className="h-5 w-5" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
