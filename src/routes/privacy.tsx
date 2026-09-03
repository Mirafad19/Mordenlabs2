import { createFileRoute, Link } from "@tanstack/react-router";
import { Lock, ArrowLeft, Mail, CheckCircle2 } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "motion/react";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Morden Labs" },
      {
        name: "description",
        content:
          "Official Privacy Policy of Morden Labs. How we protect client information, preserve confidentiality, and enforce zero-training policies for AI automations.",
      },
      { property: "og:title", content: "Privacy Policy | Morden Labs" },
      {
        property: "og:description",
        content:
          "Enterprise privacy standards, NDPR and GDPR alignment, and responsible data engineering by Morden Labs.",
      },
    ],
  }),
  component: PrivacyPage,
});

const PRIVACY_SECTIONS = [
  {
    id: "overview",
    num: "01",
    title: "Our Privacy Philosophy",
    content: (
      <>
        <p className="text-muted-foreground leading-relaxed">
          Morden Labs ("Morden Labs", "we", "our") respects your privacy and is committed to
          protecting personal and commercial data. As a technical studio building high-performance
          web, mobile, and AI platforms, we maintain high standards of data security,
          confidentiality, and transparency.
        </p>
        <p className="mt-3 text-muted-foreground leading-relaxed">
          This Privacy Policy outlines how we collect, store, and process personal data when you
          visit our website (<strong>mordenlabs.com.ng</strong>), submit project inquiries, or
          engage our studio for engineering services.
        </p>
      </>
    ),
  },
  {
    id: "data-collected",
    num: "02",
    title: "Information We Collect",
    content: (
      <>
        <p className="text-muted-foreground leading-relaxed">
          We collect only the minimum information required to deliver high-quality engineering
          services:
        </p>
        <ul className="mt-3 space-y-2 text-muted-foreground list-disc pl-5">
          <li>
            <strong>Contact & Discovery Data:</strong> Name, professional email address,
            organization name, and project requirements submitted through our contact and
            consultation forms.
          </li>
          <li>
            <strong>Project Communication:</strong> Feedback, scope specifications, design
            documents, and technical briefs exchanged during discovery and development.
          </li>
          <li>
            <strong>Technical Telemetry:</strong> Anonymized metrics such as browser type, operating
            system, and aggregate page views used strictly to optimize page speed and Core Web
            Vitals.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "ai-privacy",
    num: "03",
    title: "AI Automations & Zero-Training Guarantee",
    content: (
      <>
        <p className="text-muted-foreground leading-relaxed">
          As builders of conversational AI solutions, voice interfaces, and automated workflows
          (including n8n pipelines), we strictly safeguard client and proprietary data:
        </p>
        <div className="mt-4 p-4 brutal-border bg-emerald-500/10 rounded-lg flex items-start gap-3">
          <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
          <div className="text-sm font-medium text-emerald-950 space-y-1">
            <p>
              <strong>Zero Model Training:</strong> Your business records, documents, prompts, and
              customer transcripts are never used to train public foundation models or third-party
              AI systems.
            </p>
            <p className="text-emerald-900/80">
              We configure enterprise APIs with strict zero-data-retention (ZDR) agreements and
              isolated vector indexes where applicable.
            </p>
          </div>
        </div>
      </>
    ),
  },
  {
    id: "usage",
    num: "04",
    title: "How We Use Your Information",
    content: (
      <>
        <p className="text-muted-foreground leading-relaxed">
          The information we collect is used exclusively to:
        </p>
        <ul className="mt-3 space-y-2 text-muted-foreground list-disc pl-5">
          <li>
            Respond to technical consultations, project inquiries, and scope requests within 24
            hours.
          </li>
          <li>Formulate architectural proposals, project estimates, and milestone deliverables.</li>
          <li>Manage active development pipelines, staging environments, and client handoffs.</li>
          <li>
            Deliver occasional studio engineering newsletters (which can be opted out of at any
            time).
          </li>
        </ul>
        <p className="mt-3 text-muted-foreground leading-relaxed">
          <strong>We never sell, rent, or monetize your contact details or project data.</strong>
        </p>
      </>
    ),
  },
  {
    id: "compliance",
    num: "05",
    title: "Data Protection & Regulatory Compliance",
    content: (
      <>
        <p className="text-muted-foreground leading-relaxed">
          We operate across international jurisdictions and adhere to modern global data protection
          frameworks:
        </p>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div className="p-4 brutal-border bg-background rounded-lg">
            <h4 className="font-display font-bold text-base mb-1">
              Nigeria Data Protection Act (NDPA / NDPR)
            </h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Full alignment with Nigerian statutory regulations regarding lawful basis, consent,
              and secure data handling.
            </p>
          </div>
          <div className="p-4 brutal-border bg-background rounded-lg">
            <h4 className="font-display font-bold text-base mb-1">UK & EU GDPR Principles</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              For our United Kingdom and European clients, we honor standard contractual clauses,
              data minimization, and cross-border transfer safeguards.
            </p>
          </div>
        </div>
      </>
    ),
  },
  {
    id: "cookies",
    num: "06",
    title: "Cookies & Tracking Policy",
    content: (
      <>
        <p className="text-muted-foreground leading-relaxed">
          Morden Labs does not use aggressive advertising trackers, third-party pixel eavesdroppers,
          or retargeting networks. We utilize only essential technical cookies necessary for session
          state, security tokens, and high-level anonymous performance metrics.
        </p>
      </>
    ),
  },
  {
    id: "rights",
    num: "07",
    title: "Your Data Rights",
    content: (
      <>
        <p className="text-muted-foreground leading-relaxed">
          You have the right to request access to the personal data we hold about you, request
          corrections, or request permanent deletion of your contact records from our systems at any
          time.
        </p>
        <p className="mt-3 text-muted-foreground leading-relaxed">
          To exercise your data privacy rights, email our team at{" "}
          <a
            href="mailto:support@mordenlabs.com.ng?subject=Data%20Privacy%20Request"
            className="font-bold underline text-ink hover:text-accent-brand"
          >
            support@mordenlabs.com.ng
          </a>
          . All verified requests are processed within 5 business days.
        </p>
      </>
    ),
  },
];

function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="border-b-2 border-ink py-16 lg:py-24 bg-muted/20">
          <div className="mx-auto max-w-5xl px-5 lg:px-8">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-muted-foreground hover:text-ink mb-6 transition-colors"
            >
              <ArrowLeft className="h-3.5 w-3.5" /> Back to Home
            </Link>
            <div className="flex items-center gap-2 mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 font-mono text-xs font-bold uppercase tracking-wider">
                <Lock className="h-3.5 w-3.5" />
                Data Privacy & Security
              </span>
              <span className="font-mono text-xs text-muted-foreground">
                Updated: September 2026
              </span>
            </div>
            <h1 className="font-display text-4xl font-bold leading-[1.05] md:text-5xl lg:text-6xl">
              Privacy Policy
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
              How Morden Labs handles client communications, protects intellectual data, and
              enforces strict zero-training standards across all artificial intelligence and
              automation builds.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-5xl px-5 lg:px-8">
            <div className="grid gap-12">
              {PRIVACY_SECTIONS.map((sec) => (
                <motion.div
                  key={sec.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4 }}
                  className="p-8 lg:p-10 brutal-border bg-card shadow-sm"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-mono text-xs font-bold text-accent-brand bg-accent-brand/10 px-2.5 py-1 rounded">
                      SECTION {sec.num}
                    </span>
                    <h2 className="font-display text-2xl font-bold">{sec.title}</h2>
                  </div>
                  <div className="mt-4">{sec.content}</div>
                </motion.div>
              ))}

              {/* Data Controller Card */}
              <div className="p-8 lg:p-10 brutal-border bg-card">
                <h3 className="font-display text-2xl font-bold">Data Controller & Studio Entity</h3>
                <p className="mt-2 text-muted-foreground text-sm leading-relaxed">
                  For inquiries regarding data processing, confidentiality agreements, or privacy
                  requests:
                </p>
                <div className="mt-6 grid sm:grid-cols-2 gap-4 text-sm font-mono">
                  <div className="p-4 brutal-border bg-background">
                    <div className="text-xs text-muted-foreground uppercase font-bold">
                      Organization
                    </div>
                    <div className="font-bold text-ink mt-1">Morden Labs</div>
                    <div className="text-xs text-muted-foreground mt-0.5">
                      Lagos, Nigeria · Serving Clients Worldwide
                    </div>
                  </div>
                  <div className="p-4 brutal-border bg-background">
                    <div className="text-xs text-muted-foreground uppercase font-bold">
                      Data Protection & Support
                    </div>
                    <div className="font-bold text-ink mt-1">Morden Labs Support Team</div>
                    <a
                      href="mailto:support@mordenlabs.com.ng"
                      className="text-xs text-accent-brand font-bold underline mt-0.5 block font-mono"
                    >
                      support@mordenlabs.com.ng
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
