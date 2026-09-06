import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SERVICES } from "@/lib/site-data";
import { CapabilitiesScroll } from "@/components/CapabilitiesScroll";
import { motion } from "motion/react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services | Morden Labs" },
      {
        name: "description",
        content:
          "Web development, mobile apps, AI automations, AI solutions, SEO & speed optimization, and CMS integration from Morden Labs.",
      },
      { property: "og:title", content: "Services | Morden Labs" },
      {
        property: "og:description",
        content:
          "The five disciplines Morden Labs delivers for growing businesses and government partners.",
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
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="mb-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground"
              >
                Services
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="font-display text-5xl font-bold leading-[1.02] md:text-6xl lg:text-7xl"
              >
                What we <span className="text-accent-brand">build</span>.
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="mt-8 text-lg text-muted-foreground md:text-xl"
              >
                Five focused disciplines. We keep our lanes narrow on purpose: deep expertise in a
                handful of things beats a buffet of mediocre.
              </motion.p>
            </div>
          </div>
        </section>

        <CapabilitiesScroll />

        <section className="border-b-2 border-ink bg-card py-20 text-foreground lg:py-24">
          <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-5 md:flex-row md:items-center lg:px-8">
            <div>
              <h2 className="font-display text-3xl font-bold md:text-5xl text-white">
                Have a project in mind?
              </h2>
              <p className="mt-3 max-w-lg text-muted-foreground">
                Tell us what you're building. We'll come back within 24 hours with next steps.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 brutal-border brutal-shadow bg-accent-brand px-6 py-3.5 font-bold text-white transition-all hover:bg-orange-600 hover:-translate-x-[2px] hover:-translate-y-[2px]"
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
