import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PROJECTS } from "@/lib/site-data";
import { motion } from "motion/react";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Featured Projects | Dumpit, PSSDC AI, TidyScot | Morden Labs" },
      {
        name: "description",
        content:
          "Featured software systems and products from Morden Labs and founder Miracle Fadahunsi: Dumpit gesture file transfer, Lagos State PSSDC AI assistant, TidyScot UK, and Citicare.",
      },
      {
        name: "keywords",
        content:
          "Dumpit, Dumpit gesture file transfer, dumpit.tech, Miracle Fadahunsi, Fadahunsi Miracle, Morden Labs projects, PSSDC AI, TidyScot, Citicare, software engineer Nigeria UK",
      },
      {
        property: "og:title",
        content: "Featured Projects | Dumpit, PSSDC AI, TidyScot | Morden Labs",
      },
      {
        property: "og:description",
        content:
          "Featured systems from Morden Labs: Dumpit gesture-controlled file transfer, government AI platforms, and commercial apps.",
      },
      { property: "og:image", content: "https://mordenlabs.com.ng/dumpit-showcase.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://mordenlabs.com.ng/dumpit-showcase.png" },
    ],
    links: [{ rel: "canonical", href: "https://mordenlabs.com.ng/work" }],
  }),
  component: WorkPage,
});

function WorkPage() {
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
                Featured Projects
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="font-display text-5xl font-bold leading-[1.02] md:text-6xl lg:text-7xl"
              >
                Real work. <span className="text-accent-brand">Real outcomes.</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="mt-8 text-lg text-muted-foreground md:text-xl"
              >
                Real solutions we've designed and delivered for government agencies and growing
                businesses.
              </motion.p>
            </div>
          </div>
        </section>

        <section className="border-b-2 border-ink py-20 lg:py-28">
          <div className="mx-auto max-w-7xl space-y-16 px-5 lg:px-8">
            {PROJECTS.map((p, i) => (
              <motion.article
                key={p.slug}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="grid gap-0 overflow-hidden brutal-border brutal-shadow-lg bg-[#121214] md:grid-cols-5"
              >
                <div
                  className={`flex items-center justify-center p-8 sm:p-12 md:p-14 md:col-span-2 min-h-[200px] md:min-h-[280px] border-ink ${
                    (p as { logoBg?: string }).logoBg || "bg-white"
                  } ${i % 2 === 1 ? "md:order-2 md:border-l-2" : "md:border-r-2"}`}
                >
                  <img
                    src={p.logo}
                    alt={`${p.name} logo`}
                    className="max-h-24 sm:max-h-32 md:max-h-36 w-auto max-w-[85%] object-contain transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="flex flex-col gap-4 p-8 md:col-span-3 md:p-12 bg-[#121214]">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="brutal-border bg-[#0b0b0c] px-3 py-1 font-mono text-xs font-bold uppercase text-neutral-300">
                      {p.category}
                    </span>
                    {(p.badge || (p as { ownershipBadge?: string }).ownershipBadge) && (
                      <span
                        className={`brutal-border px-3 py-1 font-mono text-xs font-bold uppercase tracking-wider ${
                          (p as { isFounderProduct?: boolean }).isFounderProduct
                            ? "bg-cyan-400 text-black border-cyan-300 font-extrabold shadow-[2px_2px_0px_#06b6d4]"
                            : "bg-accent-brand text-white"
                        }`}
                      >
                        {(p as { ownershipBadge?: string }).ownershipBadge || p.badge}
                      </span>
                    )}
                  </div>
                  <h2 className="font-display text-3xl font-bold leading-tight md:text-4xl text-white">
                    {p.name}
                  </h2>
                  <div className="text-sm font-semibold text-neutral-400">
                    {(p as { creatorLine?: string }).creatorLine ? (
                      <div>
                        <span className="text-neutral-400">Creator: </span>
                        <span className="text-white font-semibold">
                          {(p as { creatorLine?: string }).creatorLine?.replace(
                            /^Creator:\s*/i,
                            "",
                          )}
                        </span>
                      </div>
                    ) : (
                      <div>
                        Client: <span className="text-white font-semibold">{p.client}</span>
                      </div>
                    )}
                  </div>
                  <p className="text-base leading-relaxed text-neutral-300">{p.description}</p>
                  <div>
                    <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-neutral-400">
                      Technologies
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {p.technologies.map((t) => (
                        <span
                          key={t}
                          className="brutal-border bg-[#0b0b0c] px-3 py-1 text-xs font-medium text-neutral-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  {p.url && (
                    <div className="pt-3 flex flex-wrap items-center gap-4">
                      <a
                        href={p.url}
                        target="_blank"
                        rel="noopener"
                        className="inline-flex items-center gap-2 brutal-border bg-accent-brand px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition-all hover:bg-orange-600 hover:-translate-x-[2px] hover:-translate-y-[2px]"
                      >
                        <span>
                          {(p as { buttonText?: string }).buttonText || "Visit Live Project"}
                        </span>
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                      <a
                        href={p.url}
                        target="_blank"
                        rel="noopener"
                        className="font-mono text-xs font-semibold text-neutral-400 hover:text-white transition-colors underline decoration-neutral-700 underline-offset-4"
                      >
                        {p.displayUrl}
                      </a>
                    </div>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="border-b-2 border-ink bg-card py-20 text-foreground lg:py-24">
          <div className="mx-auto max-w-4xl px-5 text-center lg:px-8">
            <h2 className="font-display text-4xl font-bold md:text-5xl text-white">
              Your project could be next.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              We take on a limited number of engagements each quarter. If your problem sounds like
              something we can help with, let's talk.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 brutal-border bg-accent-brand px-6 py-3.5 font-bold text-white transition-all hover:bg-orange-600 hover:-translate-x-[2px] hover:-translate-y-[2px]"
            >
              Get in touch <ArrowUpRight className="h-5 w-5" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
