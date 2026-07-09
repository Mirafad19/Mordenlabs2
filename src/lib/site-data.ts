import type { LucideIcon } from "lucide-react";
import { Code2, Smartphone, Bot, Search, Database, Workflow } from "lucide-react";

const pssdcLogo = "/pssdc-logo.png";
const tidyscotLogo = "/tidyscot-logo.png";
const citicareLogo = "/citicare-logo.png";

export const SERVICES: {
  icon: LucideIcon;
  title: string;
  short: string;
  body: string;
}[] = [
  {
    icon: Code2,
    title: "Web Development",
    short: "Clean code. Real performance.",
    body: "From landing pages to full-scale web platforms — we ship fast, scalable, accessible builds on modern stacks with a focus on maintainability and long-term ownership.",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    short: "iOS & Android, done properly.",
    body: "Native-feeling mobile apps built once and shipped everywhere. Smooth interactions, tight resource use, and interfaces that respect the platform.",
  },
  {
    icon: Bot,
    title: "AI Automations",
    short: "Your tools, talking to each other.",
    body: "We connect your stack end-to-end. Lead routing, content pipelines, internal ops — repetitive work moves into automated flows so your team can focus on real work.",
  },
  {
    icon: Workflow,
    title: "AI Solutions",
    short: "Custom agents, tuned to your data.",
    body: "Purpose-built AI assistants, RAG systems, and copilots trained on your knowledge base. Solutions designed to actually help — not to demo well and quietly die.",
  },
  {
    icon: Search,
    title: "SEO & Speed Optimization",
    short: "Fast pages. Better rankings.",
    body: "On-page SEO, Core Web Vitals, and technical audits. We fix what's slowing you down and set up the fundamentals that keep you visible.",
  },
  {
    icon: Database,
    title: "CMS Integration",
    short: "Content systems your team can use.",
    body: "Sanity, Strapi, WordPress, Payload — we integrate the right CMS for your workflow so your team can ship content without pinging a developer.",
  },
];

export const PROJECTS = [
  {
    slug: "pssdc",
    name: "PSSDC AI Conversational Service Assistant",
    category: "Government AI Platform",
    client: "Lagos State Public Service Staff Development Centre (PSSDC), Nigeria",
    description:
      "Designed, developed, and deployed an intelligent AI conversational assistant that supports both voice and text interactions. The assistant answers user questions, intelligently navigates visitors to relevant pages, and performs website actions to improve digital service delivery. This project earned an official Letter of Recommendation from PSSDC.",
    technologies: ["Conversational AI", "Voice AI", "AI Automation", "Website Integration"],
    badge: "Government Project",
    logo: pssdcLogo,
  },
  {
    slug: "tidyscot",
    name: "TidyScot Website & AI Assistant",
    category: "Business Website & AI Assistant",
    client: "TidyScot, Scotland, UK",
    description:
      "Designed and developed a modern business website with an AI customer assistant that helps visitors receive instant responses, access company information, and improve customer engagement.",
    technologies: ["Website Development", "AI Chatbot", "Automation", "Responsive Design"],
    badge: null,
    logo: tidyscotLogo,
  },
  {
    slug: "citicare",
    name: "Citicare Health Integrated Solutions",
    category: "Healthcare Website & CRM",
    client: "Citicare Health Integrated Solutions, Lagos, Nigeria",
    description:
      "Built a professional healthcare website and a custom CRM platform that streamlines patient enquiries, improves internal workflows, and enhances the digital experience for administrators and clients.",
    technologies: ["Custom CRM", "Web Development", "Database Design", "Business Automation"],
    badge: null,
    logo: citicareLogo,
  },
];

export const STATS = [
  { value: "50+", label: "Projects shipped" },
  { value: "6", label: "Countries served" },
  { value: "98%", label: "Client retention" },
  { value: "24/7", label: "Eyes on prod" },
];
