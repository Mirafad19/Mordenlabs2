import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SERVICES } from "@/lib/site-data";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Morden Labs" },
      {
        name: "description",
        content:
          "Web development, mobile apps, AI automations, AI solutions, SEO & speed optimization, and CMS integration — from Morden Labs.",
      },
      { property: "og:title", content: "Services — Morden Labs" },
      {
        property: "og:description",
        content:
          "The six disciplines Morden Labs delivers for growing businesses and government partners.",
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <section className="border-b-2 border-ink py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="max-w-3xl">
              <div className="mb-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Services
              </div>
              <h1 className="font-display text-5xl font-bold leading-[1.02] md:text-6xl lg:text-7xl">
                What we <span className="text-accent-brand">build</span>.
              </h1>
              <p className="mt-8 text-lg text-muted-foreground md:text-xl">
                Six focused disciplines. We keep our lanes narrow on purpose — deep expertise in a
                handful of things beats a buffet of mediocre.
              </p>
            </div>
          </div>
        </section>

        <section className="border-b-2 border-ink py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="grid gap-0 brutal-border md:grid-cols-2">
              {SERVICES.map((s, i) => {
                const Icon = s.icon;
                return (
                  <div
                    key={s.title}
                    className={`p-10 lg:p-12 ${i % 2 === 0 ? "md:border-r-2" : ""} ${
                      i < SERVICES.length - 2 ? "border-b-2" : ""
                    } border-ink bg-card`}
                  >
                    <div className="mb-6 inline-flex h-14 w-14 items-center justify-center brutal-border bg-background">
                      <Icon className="h-6 w-6" strokeWidth={2} />
                    </div>
                    <h2 className="font-display text-2xl font-bold md:text-3xl">{s.title}</h2>
                    <p className="mt-2 text-sm font-semibold uppercase tracking-wider text-accent-brand">
                      {s.short}
                    </p>
                    <p className="mt-5 text-base leading-relaxed text-muted-foreground">{s.body}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="border-b-2 border-ink bg-ink py-20 text-cream lg:py-24">
          <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-5 md:flex-row md:items-center lg:px-8">
            <div>
              <h2 className="font-display text-3xl font-bold md:text-5xl">
                Have a project in mind?
              </h2>
              <p className="mt-3 max-w-lg text-cream/70">
                Tell us what you're building. We'll come back within 24 hours with next steps.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 brutal-border bg-accent-brand px-6 py-3.5 font-semibold text-cream transition-transform hover:-translate-x-[2px] hover:-translate-y-[2px]"
              style={{ boxShadow: "5px 5px 0 0 #F5F1EA" }}
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
