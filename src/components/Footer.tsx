import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Linkedin, Mail, MapPin, Phone, Check } from "lucide-react";
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
          <div className="lg:col-span-5">
            <img
              src={logoAsset}
              alt="Morden Labs"
              className="h-28 md:h-36 w-auto object-contain transition-all hover:scale-[1.02] filter drop-shadow-sm font-bold"
            />
            <p className="mt-6 max-w-md text-base text-muted-foreground">
              A digital studio building web, mobile, AI solutions, and SEO that actually moves the
              needle. We're a partner, not a vendor.
            </p>

            {/* Studio Engineering Badge */}
            <div className="mt-6 inline-flex flex-col gap-1.5 brutal-border bg-card p-3.5 rounded-xl">
              <div className="flex items-center gap-1.5 text-accent-brand">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                <span className="text-xs font-bold text-white">Production-Grade Engineering</span>
              </div>
              <p className="text-xs font-medium text-muted-foreground">
                Trusted by organizations in{" "}
                <span className="font-bold text-white">UK · Nigeria</span>
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 lg:col-span-7">
            <FooterCol
              title="Studio"
              links={[
                { label: "Work", to: "/work" },
                { label: "Services", to: "/services" },
                { label: "About", to: "/about" },
                { label: "Contact", to: "/contact" },
              ]}
            />
            <FooterCol
              title="Services"
              links={[
                { label: "Web Development", to: "/services" },
                { label: "Mobile Apps", to: "/services" },
                { label: "AI & Automation", to: "/services" },
                { label: "SEO & Speed", to: "/services" },
                { label: "CMS Integration", to: "/services" },
              ]}
            />
            <div className="col-span-2 sm:col-span-1">
              <div className="font-display text-sm font-bold uppercase tracking-wider text-white">
                Legal &amp; Connect
              </div>
              <ul className="mt-4 space-y-3 text-sm">
                <li>
                  <Link
                    to="/terms"
                    className="text-neutral-400 transition-colors hover:text-white font-medium block"
                  >
                    Terms &amp; Conditions
                  </Link>
                </li>
                <li>
                  <Link
                    to="/privacy"
                    className="text-neutral-400 transition-colors hover:text-white font-medium block"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li className="pt-2.5 border-t border-neutral-800">
                  <div className="text-[11px] uppercase font-mono font-semibold text-muted-foreground tracking-wider mb-1">
                    Email Us
                  </div>
                  <a
                    href="mailto:support@mordenlabs.com.ng"
                    className="text-sm font-semibold text-white hover:text-accent-brand transition-colors block"
                  >
                    support@mordenlabs.com.ng
                  </a>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-1 text-sm font-semibold text-accent-brand hover:text-white transition-colors"
                  >
                    Start a Project <span aria-hidden="true">→</span>
                  </Link>
                </li>
                <li className="text-xs text-muted-foreground">
                  Lagos, Nigeria · Serving Worldwide
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 brutal-border bg-card p-6 md:p-8">
          <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                Stay Connected
              </div>
              <div className="mt-2 font-display text-2xl font-bold md:text-3xl text-white">
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
                  className="min-w-0 flex-1 brutal-border bg-background px-4 py-3 text-sm text-foreground focus:outline-none placeholder:text-muted-foreground"
                />
                <button
                  type="submit"
                  disabled={newsletterStatus === "submitting"}
                  className="grid w-12 shrink-0 place-items-center brutal-border bg-accent-brand text-white [border-left-width:0] disabled:opacity-50 cursor-pointer hover:bg-orange-600 transition-colors"
                  aria-label="Subscribe"
                >
                  {newsletterStatus === "success" ? (
                    <Check className="h-5 w-5 text-emerald-300" />
                  ) : (
                    <ArrowRight className="h-5 w-5" />
                  )}
                </button>
              </div>
              {newsletterStatus === "success" && (
                <div className="text-xs font-semibold text-emerald-400 mt-2 sm:mt-0 sm:ml-3 flex items-center gap-1.5 self-center">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" /> Subscribed!
                </div>
              )}
              {newsletterStatus === "error" && (
                <div className="text-xs font-semibold text-rose-400 mt-2 sm:mt-0 sm:ml-3 flex items-center gap-1.5 self-center">
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
            <a
              href="https://www.linkedin.com/in/miracle-fadahunsi-897149295/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="grid h-10 w-10 place-items-center brutal-border bg-card text-foreground transition-colors hover:bg-accent-brand hover:text-white"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="mailto:support@mordenlabs.com.ng"
              aria-label="Email"
              className="grid h-10 w-10 place-items-center brutal-border bg-card text-foreground transition-colors hover:bg-accent-brand hover:text-white"
            >
              <Mail className="h-4 w-4" />
            </a>
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
  links: {
    label: string;
    to: "/" | "/work" | "/services" | "/about" | "/contact" | "/terms" | "/privacy";
  }[];
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
