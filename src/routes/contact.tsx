import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Morden Labs" },
      {
        name: "description",
        content:
          "Get in touch with Morden Labs. Tell us about your project — we reply within 24 hours.",
      },
      { property: "og:title", content: "Contact — Morden Labs" },
      { property: "og:description", content: "Reach out — we reply within 24 hours." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <section className="border-b-2 border-ink py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="grid items-start gap-16 lg:grid-cols-2">
              <div>
                <div className="mb-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Contact
                </div>
                <h1 className="font-display text-5xl font-bold leading-[1.02] md:text-6xl lg:text-7xl">
                  Let's <span className="text-accent-brand">connect.</span>
                </h1>
                <p className="mt-8 max-w-md text-lg text-muted-foreground">
                  Got a project in mind? A weird idea? An impossible deadline? Send it our way — we
                  read every message and reply within 24 hours.
                </p>

                <div className="mt-12 space-y-5">
                  <ContactRow
                    icon={Mail}
                    label="Email"
                    value="hello@mordenlabs.com"
                    href="mailto:hello@mordenlabs.com"
                  />
                  <ContactRow
                    icon={Phone}
                    label="Phone"
                    value="+234 907 171 7079"
                    href="tel:+2349071717079"
                  />
                  <ContactRow icon={MapPin} label="Studio" value="Remote-first · Lagos, Nigeria" />
                </div>
              </div>

              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function ContactRow({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof Mail;
  label: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <>
      <span className="grid h-12 w-12 shrink-0 place-items-center brutal-border bg-card">
        <Icon className="h-5 w-5" />
      </span>
      <span className="min-w-0">
        <span className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          {label}
        </span>
        <span className="block truncate font-display text-lg font-bold md:text-xl">{value}</span>
      </span>
    </>
  );
  return href ? (
    <a href={href} className="flex items-center gap-4 transition-transform hover:translate-x-1">
      {inner}
    </a>
  ) : (
    <div className="flex items-center gap-4">{inner}</div>
  );
}

function ContactForm() {
  const [sent, setSent] = useState(false);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="brutal-border brutal-shadow-lg bg-card p-6 md:p-10"
    >
      <h2 className="font-display text-2xl font-bold md:text-3xl">Start your project</h2>
      <p className="mt-2 text-sm text-muted-foreground">
        Tell us what you're building. We'll get back within 24 hours.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <Field name="name" placeholder="Your name *" required />
        <Field name="email" type="email" placeholder="Your email *" required />
      </div>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <Select name="service" defaultValue="">
          <option value="" disabled>
            Service you need
          </option>
          <option>Web Development</option>
          <option>Mobile App</option>
          <option>AI Automation</option>
          <option>AI Solution</option>
          <option>SEO & Speed</option>
          <option>CMS Integration</option>
        </Select>
        <Select name="budget" defaultValue="">
          <option value="" disabled>
            Budget range
          </option>
          <option>Under $5k</option>
          <option>$5k – $15k</option>
          <option>$15k – $50k</option>
          <option>$50k+</option>
        </Select>
      </div>
      <div className="mt-4">
        <Field name="project" placeholder="Project or company name" />
      </div>
      <div className="mt-4">
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Tell us about your project, goals, and how we can help *"
          className="w-full brutal-border bg-background px-4 py-3 font-sans text-sm text-ink placeholder:text-muted-foreground focus:outline-none focus:brutal-shadow-sm"
        />
      </div>
      <button
        type="submit"
        className="mt-6 inline-flex w-full items-center justify-center gap-2 brutal-border brutal-shadow bg-ink px-6 py-4 font-semibold text-cream transition-transform hover:-translate-x-[2px] hover:-translate-y-[2px] sm:w-auto"
      >
        {sent ? "Got it — we'll be in touch" : "Send message"}
        <ArrowRight className="h-5 w-5" />
      </button>
    </form>
  );
}

function Field(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className="w-full brutal-border bg-background px-4 py-3 font-sans text-sm text-ink placeholder:text-muted-foreground focus:outline-none focus:brutal-shadow-sm"
    />
  );
}

function Select(
  props: React.SelectHTMLAttributes<HTMLSelectElement> & { children: React.ReactNode },
) {
  return (
    <select
      {...props}
      className="w-full brutal-border bg-background px-4 py-3 font-sans text-sm text-ink focus:outline-none focus:brutal-shadow-sm"
    >
      {props.children}
    </select>
  );
}
