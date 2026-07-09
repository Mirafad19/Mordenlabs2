import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PROJECTS } from "@/lib/site-data";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Featured Projects — Morden Labs" },
      {
        name: "description",
        content:
          "Featured projects from Morden Labs: real AI, web, and CRM solutions delivered for government agencies and growing businesses.",
      },
      { property: "og:title", content: "Featured Projects — Morden Labs" },
      {
        property: "og:description",
        content:
          "Selected client work across government AI, business websites, and custom CRM platforms.",
      },
    ],
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
              <div className="mb-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Featured Projects
              </div>
              <h1 className="font-display text-5xl font-bold leading-[1.02] md:text-6xl lg:text-7xl">
                Real work. <span className="text-accent-brand">Real outcomes.</span>
              </h1>
              <p className="mt-8 text-lg text-muted-foreground md:text-xl">
                Real solutions we've designed and delivered for government agencies and growing
                businesses.
              </p>
            </div>
          </div>
        </section>

        <section className="border-b-2 border-ink py-20 lg:py-28">
          <div className="mx-auto max-w-7xl space-y-16 px-5 lg:px-8">
            {PROJECTS.map((p, i) => (
              <article
                key={p.slug}
                className="grid gap-0 overflow-hidden brutal-border brutal-shadow-lg bg-card md:grid-cols-5"
              >
                <div
                  className={`flex items-center justify-center border-ink bg-cream p-10 md:col-span-2 ${
                    i % 2 === 1 ? "md:order-2 md:border-l-2" : "md:border-r-2"
                  }`}
                >
                  <img
                    src={p.logo}
                    alt={`${p.name} logo`}
                    className="max-h-40 w-auto max-w-full object-contain mix-blend-multiply transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col gap-4 p-8 md:col-span-3 md:p-12">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="brutal-border bg-background px-3 py-1 font-mono text-xs font-bold uppercase">
                      {p.category}
                    </span>
                    {p.badge && (
                      <span className="brutal-border bg-accent-brand px-3 py-1 font-mono text-xs font-bold uppercase text-cream">
                        {p.badge}
                      </span>
                    )}
                  </div>
                  <h2 className="font-display text-3xl font-bold leading-tight md:text-4xl">
                    {p.name}
                  </h2>
                  <div className="text-sm font-semibold text-muted-foreground">
                    Client: <span className="text-ink">{p.client}</span>
                  </div>
                  <p className="text-base leading-relaxed text-muted-foreground">{p.description}</p>
                  <div>
                    <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Technologies
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {p.technologies.map((t) => (
                        <span
                          key={t}
                          className="brutal-border bg-background px-3 py-1 text-xs font-medium"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="border-b-2 border-ink bg-ink py-20 text-cream lg:py-24">
          <div className="mx-auto max-w-4xl px-5 text-center lg:px-8">
            <h2 className="font-display text-4xl font-bold md:text-5xl">
              Your project could be next.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-cream/70">
              We take on a limited number of engagements each quarter. If your problem sounds like
              something we can help with, let's talk.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 brutal-border bg-accent-brand px-6 py-3.5 font-semibold text-cream transition-transform hover:-translate-x-[2px] hover:-translate-y-[2px]"
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
