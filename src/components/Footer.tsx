import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Twitter, Instagram, Linkedin, Github, Check } from "lucide-react";
import { mordenLogo } from "../lib/images-base64";

const logoAsset = mordenLogo;

export function Footer() {
  const [newsletterStatus, setNewsletterStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [emailInput, setEmailInput] = useState("");

  const handleNewsletterSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!emailInput) return;
    setNewsletterStatus("submitting");

    try {
      const res = await fetch("https://formspree.io/f/xaewnqwq", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: emailInput,
          formType: "Newsletter Subscription",
          _subject: `New Newsletter Subscription: ${emailInput}`,
        }),
      });

      if (res.ok) {
        setNewsletterStatus("success");
        setEmailInput("");
      } else {
        setNewsletterStatus("error");
      }
    } catch {
      setNewsletterStatus("error");
    }
  };
  return (
    <footer className="bg-background pt-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <img
              src={logoAsset}
              alt="Morden Labs"
              className="h-28 md:h-36 w-auto object-contain transition-all hover:scale-[1.02] filter drop-shadow-sm font-bold"
            />
            <p className="mt-6 max-w-md text-base text-muted-foreground">
              A digital studio building web, mobile, AI solutions, and SEO that actually moves the
              needle. We're a partner, not a vendor.
            </p>

            {/* Social Proof Badge */}
            <div className="mt-6 inline-flex flex-col gap-1.5 brutal-border bg-card p-3.5 rounded-xl">
              <div className="flex items-center gap-1.5 text-accent-brand">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                <span className="text-xs font-bold text-neutral-900">Active Live Deployments</span>
              </div>
              <p className="text-xs font-medium text-muted-foreground">
                Trusted by organizations in{" "}
                <span className="font-bold text-neutral-900">UK · Nigeria</span>
              </p>
            </div>
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
                { label: "AI Solutions & Automation", to: "/services" as const },
                { label: "SEO & Speed", to: "/services" as const },
                { label: "CMS Integration", to: "/services" as const },
              ]}
            />
          </div>
        </div>

        <div className="mt-16 brutal-border bg-card p-6 md:p-8">
          <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                Stay Connected
              </div>
              <div className="mt-2 font-display text-2xl font-bold md:text-3xl">
                Studio insights & engineering updates, delivered to your inbox.
              </div>
            </div>
            <form
              className="flex w-full max-w-md md:w-auto flex-col sm:flex-row gap-2 sm:gap-0"
              onSubmit={handleNewsletterSubmit}
            >
              <div className="flex-1 flex min-w-0">
                <input
                  type="email"
                  required
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  placeholder="Your email address"
                  className="min-w-0 flex-1 brutal-border bg-background px-4 py-3 text-sm focus:outline-none placeholder:text-muted-foreground"
                />
                <button
                  type="submit"
                  disabled={newsletterStatus === "submitting"}
                  className="grid w-12 shrink-0 place-items-center brutal-border bg-ink text-cream [border-left-width:0] disabled:opacity-50 cursor-pointer hover:bg-accent-brand transition-colors"
                  aria-label="Subscribe"
                >
                  {newsletterStatus === "success" ? (
                    <Check className="h-5 w-5 text-emerald-400" />
                  ) : (
                    <ArrowRight className="h-5 w-5" />
                  )}
                </button>
              </div>
              {newsletterStatus === "success" && (
                <div className="text-xs font-semibold text-emerald-600 mt-2 sm:mt-0 sm:ml-3 flex items-center gap-1.5 self-center">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" /> Subscribed!
                </div>
              )}
              {newsletterStatus === "error" && (
                <div className="text-xs font-semibold text-rose-600 mt-2 sm:mt-0 sm:ml-3 flex items-center gap-1.5 self-center">
                  Try again.
                </div>
              )}
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
