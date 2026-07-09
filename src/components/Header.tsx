import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { mordenLogo } from "../lib/images-base64";

const logoAsset = mordenLogo;

const NAV = [
  { label: "Work", to: "/work" as const },
  { label: "Services", to: "/services" as const },
  { label: "About", to: "/about" as const },
  { label: "Contact", to: "/contact" as const },
];

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b-2 border-ink bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 lg:px-8">
        <Link to="/" className="flex items-center gap-2">
          <img
            src={logoAsset}
            alt="Morden Labs"
            className="h-12 md:h-16 w-auto object-contain mix-blend-multiply transition-all hover:scale-[1.02]"
          />
        </Link>
        <nav className="hidden items-center gap-8 lg:flex">
          {NAV.map((n) => (
            <Link
              key={n.label}
              to={n.to}
              activeProps={{ className: "text-ink" }}
              inactiveProps={{ className: "text-ink/60" }}
              activeOptions={{ exact: true }}
              className="text-sm font-semibold uppercase tracking-wide transition-colors hover:text-ink"
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <Link
          to="/contact"
          className="hidden lg:inline-flex items-center gap-2 brutal-border brutal-shadow-sm bg-ink px-5 py-2.5 text-sm font-semibold text-cream transition-transform hover:-translate-x-[1px] hover:-translate-y-[1px]"
        >
          Get in touch <ArrowUpRight className="h-4 w-4" />
        </Link>
        <button
          aria-label="Menu"
          onClick={() => setOpen(!open)}
          className="lg:hidden brutal-border bg-card p-2"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="border-t-2 border-ink bg-background lg:hidden">
          <div className="flex flex-col px-5 py-4">
            {NAV.map((n) => (
              <Link
                key={n.label}
                to={n.to}
                onClick={() => setOpen(false)}
                className="border-b border-ink/10 py-3 font-semibold uppercase tracking-wide"
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-4 brutal-border bg-ink px-5 py-3 text-center font-semibold text-cream"
            >
              Get in touch
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
