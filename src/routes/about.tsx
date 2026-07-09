import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { STATS } from "@/lib/site-data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Morden Labs" },
      {
        name: "description",
        content:
          "Morden Labs is a small, senior team of designers, engineers, and strategists shipping digital products for growing businesses and government partners.",
      },
      { property: "og:title", content: "About — Morden Labs" },
      {
        property: "og:description",
        content: "The team, the values, and how we work at Morden Labs.",
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
    body: "We measure success by whether the thing actually works in production — not by hours logged or tickets closed.",
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
              <div className="mb-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                About us
              </div>
              <h1 className="font-display text-5xl font-bold leading-[1.02] md:text-6xl lg:text-7xl">
                A small team. <span className="text-accent-brand">Serious work.</span>
              </h1>
              <p className="mt-8 text-lg text-muted-foreground md:text-xl">
                We're designers, engineers, and strategists working together as one team. We build
                for founders, marketing leads, product teams, and government partners — anyone
                shipping things that need to actually work.
              </p>
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
                We wanted to build differently — smaller teams, senior work, and enough taste to say
                no. That's still the whole point.
              </p>
              <p>
                Today we work across web, mobile, AI, and integrations for clients on three
                continents. Some are early-stage founders. Some are government agencies. What they
                share is a bias for doing things properly.
              </p>
            </div>
          </div>
        </section>

        <section className="border-b-2 border-ink py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="mb-14 max-w-2xl">
              <div className="mb-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                What we believe
              </div>
              <h2 className="font-display text-4xl font-bold leading-[1.05] md:text-5xl">
                Four things that shape our work.
              </h2>
            </div>
            <div className="grid gap-0 brutal-border md:grid-cols-2">
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
            </div>
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
