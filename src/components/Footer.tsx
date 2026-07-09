import { Link } from "@tanstack/react-router";
import { ArrowRight, Twitter, Instagram, Linkedin, Github } from "lucide-react";

const logoAsset = "/morden-logo.png";

export function Footer() {
  return (
    <footer className="bg-background pt-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <img
              src={logoAsset}
              alt="Morden Labs"
              className="h-20 md:h-24 w-auto object-contain mix-blend-multiply transition-all hover:scale-[1.02]"
            />
            <p className="mt-6 max-w-md text-base text-muted-foreground">
              A digital studio building web, mobile, AI solutions, and SEO that actually moves the
              needle. We're a partner, not a vendor.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 lg:col-span-6">
            <FooterCol
              title="Studio"
              links={[
                { label: "Work", to: "/work" as const },
                { label: "Services", to: "/services" as const },
                { label: "About", to: "/about" as const },
                { label: "Contact", to: "/contact" as const },
              ]}
            />
            <FooterCol
              title="Services"
              links={[
                { label: "Web Development", to: "/services" as const },
                { label: "Mobile Apps", to: "/services" as const },
                { label: "AI Solutions", to: "/services" as const },
                { label: "SEO & Speed", to: "/services" as const },
              ]}
            />
          </div>
        </div>

        <div className="mt-16 brutal-border bg-card p-6 md:p-8">
          <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                Newsletter
              </div>
              <div className="mt-2 font-display text-2xl font-bold md:text-3xl">
                Field notes from the studio — once a month, no fluff.
              </div>
            </div>
            <form className="flex w-full max-w-md md:w-auto" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email address"
                className="min-w-0 flex-1 brutal-border bg-background px-4 py-3 text-sm focus:outline-none"
              />
              <button
                className="grid w-12 shrink-0 place-items-center brutal-border bg-ink text-cream [border-left-width:0]"
                aria-label="Subscribe"
              >
                <ArrowRight className="h-5 w-5" />
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t-2 border-ink py-6 md:flex-row md:items-center">
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Morden Labs. All rights reserved.
          </div>
          <div className="flex items-center gap-3">
            {[Twitter, Instagram, Linkedin, Github].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social link"
                className="grid h-10 w-10 place-items-center brutal-border bg-card transition-colors hover:bg-ink hover:text-cream"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { label: string; to: "/" | "/work" | "/services" | "/about" | "/contact" }[];
}) {
  return (
    <div>
      <div className="font-display text-sm font-bold uppercase tracking-wider">{title}</div>
      <ul className="mt-4 space-y-2">
        {links.map((l, i) => (
          <li key={`${l.label}-${i}`}>
            <Link
              to={l.to}
              className="text-base text-foreground/70 transition-colors hover:text-ink"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
