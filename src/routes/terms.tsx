import { createFileRoute, Link } from "@tanstack/react-router";
import { Shield, FileText, ArrowLeft, Mail, CheckCircle2 } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "motion/react";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions | Morden Labs" },
      {
        name: "description",
        content:
          "Official Terms & Conditions governing digital engineering, software architecture, AI automations, and consulting engagements with Morden Labs.",
      },
      { property: "og:title", content: "Terms & Conditions | Morden Labs" },
      {
        property: "og:description",
        content:
          "Clear, transparent engineering terms covering intellectual property ownership, milestone delivery, and client confidentiality.",
      },
    ],
  }),
  component: TermsPage,
});

const SECTIONS = [
  {
    id: "scope",
    num: "01",
    title: "Scope of Engineering & Services",
    content: (
      <>
        <p className="text-muted-foreground leading-relaxed">
          Morden Labs ("the Studio", "we", "us") provides digital engineering, bespoke web
          application development, mobile engineering, artificial intelligence automations, SEO
          optimization, and technical consulting. Each engagement is governed by an agreed Proposal,
          Statement of Work (SOW), or written specification detailing deliverables, milestones, and
          commercial terms.
        </p>
        <p className="mt-3 text-muted-foreground leading-relaxed">
          Any services requested outside the agreed scope will be estimated separately as a scope
          amendment prior to commencement of work.
        </p>
      </>
    ),
  },
  {
    id: "ip",
    num: "02",
    title: "100% Client Intellectual Property & Code Ownership",
    content: (
      <>
        <p className="text-muted-foreground leading-relaxed">
          We believe clients must fully own what they pay for. Upon receipt of full and final
          payment for the applicable milestone or project,{" "}
          <strong>
            all custom source code, design assets, database schemas, and application architecture
          </strong>{" "}
          developed specifically for the client transfer unconditionally to the client.
        </p>
        <div className="mt-4 p-4 brutal-border bg-emerald-500/10 rounded-lg flex items-start gap-3">
          <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
          <p className="text-sm font-medium text-emerald-950">
            <strong>No Vendor Lock-in:</strong> Morden Labs does not hold code hostage or charge
            recurring licensing fees for custom software built under work-for-hire client
            agreements.
          </p>
        </div>
      </>
    ),
  },
  {
    id: "milestones",
    num: "03",
    title: "Milestone Delivery, Revisions & Acceptance",
    content: (
      <>
        <p className="text-muted-foreground leading-relaxed">
          Projects are structured with clear deliverables and weekly staging deployments. Upon
          delivery of each milestone, the client has a{" "}
          <strong>10-business-day review period</strong> to test functionality and submit feedback
          or bug reports against the agreed specifications.
        </p>
        <p className="mt-3 text-muted-foreground leading-relaxed">
          Any demonstrable defects reported within this review period are corrected at no additional
          charge. Once approved or upon expiration of the review window without reported blockers,
          the milestone is deemed formally accepted.
        </p>
      </>
    ),
  },
  {
    id: "confidentiality",
    num: "04",
    title: "Confidentiality & Non-Disclosure",
    content: (
      <>
        <p className="text-muted-foreground leading-relaxed">
          We treat all proprietary information, customer data, internal workflows, and commercial
          trade secrets shared with Morden Labs with absolute confidentiality. We gladly execute
          mutual Non-Disclosure Agreements (NDAs) prior to receiving sensitive documentation or
          access credentials.
        </p>
        <p className="mt-3 text-muted-foreground leading-relaxed">
          Confidential information will never be shared with third parties or leveraged for
          competitive initiatives.
        </p>
      </>
    ),
  },
  {
    id: "ai-terms",
    num: "05",
    title: "Responsible AI Engineering & Data Privacy",
    content: (
      <>
        <p className="text-muted-foreground leading-relaxed">
          When deploying conversational AI agents, speech interfaces, or automated pipelines (such
          as n8n workflows or LLM orchestrations), Morden Labs ensures API integrations adhere
          strictly to zero-data-retention enterprise tier configurations wherever available.
        </p>
        <p className="mt-3 text-muted-foreground leading-relaxed">
          <strong>
            Client business data is never submitted to public AI models for model training.
          </strong>
        </p>
      </>
    ),
  },
  {
    id: "warranty",
    num: "06",
    title: "30-Day Post-Launch Warranty",
    content: (
      <>
        <p className="text-muted-foreground leading-relaxed">
          Every custom production build deployed by Morden Labs includes a{" "}
          <strong>complimentary 30-day warranty</strong> post-launch. During this period, we rectify
          any bugs, performance degradations, or deviations from original scope promptly and free of
          charge.
        </p>
        <p className="mt-3 text-muted-foreground leading-relaxed">
          Ongoing SLA support, infrastructure maintenance, and feature expansions can be arranged
          under our flexible monthly retainer agreements.
        </p>
      </>
    ),
  },
  {
    id: "liability",
    num: "07",
    title: "Limitation of Liability & External Services",
    content: (
      <>
        <p className="text-muted-foreground leading-relaxed">
          While we engineer robust software up to top modern standards, Morden Labs cannot be held
          liable for outages, pricing shifts, or API disruptions caused by third-party hosting
          providers (e.g., AWS, Vercel, Cloudflare, Google Cloud), payment gateways (Stripe,
          Paystack), or external SaaS endpoints.
        </p>
        <p className="mt-3 text-muted-foreground leading-relaxed">
          To the maximum extent permitted by applicable law, Morden Labs' aggregate liability
          arising out of any engagement shall not exceed the total fees paid by the client under the
          specific SOW.
        </p>
      </>
    ),
  },
  {
    id: "governing-law",
    num: "08",
    title: "Governing Law & Dispute Resolution",
    content: (
      <>
        <p className="text-muted-foreground leading-relaxed">
          These Terms and any non-contractual obligations arising out of them are governed by the
          laws of the Federal Republic of Nigeria, with international commercial arbitration
          provisions for our cross-border engagements across the United Kingdom, Europe, and North
          America. Both parties agree to attempt good-faith mediation prior to commencing legal
          proceedings.
        </p>
      </>
    ),
  },
];

function TermsPage() {
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
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent-brand/10 border border-accent-brand/30 text-accent-brand font-mono text-xs font-bold uppercase tracking-wider">
                <FileText className="h-3.5 w-3.5" />
                Legal Framework
              </span>
              <span className="font-mono text-xs text-muted-foreground">
                Updated: September 2026
              </span>
            </div>
            <h1 className="font-display text-4xl font-bold leading-[1.05] md:text-5xl lg:text-6xl text-white">
              Terms & Conditions
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
              Transparent, fair, and professional standards governing software engineering,
              intellectual property transfer, milestone delivery, and technical consulting with
              Morden Labs.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-5xl px-5 lg:px-8">
            <div className="grid gap-12">
              {SECTIONS.map((sec) => (
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
                    <h2 className="font-display text-2xl font-bold text-white">{sec.title}</h2>
                  </div>
                  <div className="mt-4">{sec.content}</div>
                </motion.div>
              ))}

              {/* Direct Legal Contact Card */}
              <div className="p-8 lg:p-10 brutal-border bg-card text-foreground">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div>
                    <div className="flex items-center gap-2 text-accent-brand font-mono text-xs font-bold uppercase tracking-wider mb-2">
                      <Shield className="h-4 w-4" /> Questions About Terms?
                    </div>
                    <h3 className="font-display text-2xl font-bold text-white">
                      Legal &amp; Contract Inquiries
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground max-w-md">
                      If you have questions about these terms or require a custom Master Services
                      Agreement (MSA), reach out to us directly.
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                    <a
                      href="mailto:support@mordenlabs.com.ng?subject=Legal%20Inquiry"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3.5 brutal-border bg-accent-brand text-white font-mono text-sm font-bold hover:bg-orange-600 transition-colors"
                    >
                      <Mail className="h-4 w-4" />
                      support@mordenlabs.com.ng
                    </a>
                    <Link
                      to="/contact"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3.5 brutal-border bg-background text-foreground font-mono text-sm font-bold hover:bg-neutral-800 transition-colors"
                    >
                      Contact Studio
                    </Link>
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
