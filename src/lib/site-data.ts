import type { LucideIcon } from "lucide-react";
import { Code2, Smartphone, Bot, Search, Database, Workflow } from "lucide-react";
import { pssdcLogo, tidyscotLogo, citicareLogo } from "./images-base64";

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
    title: "AI Solutions & Automation",
    short: "Your tools, talking to each other.",
    body: "We build the AI layer for your business — from custom conversational agents and voice interfaces to background automations that connect your tools, parse documents, and keep data moving.",
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
    name: "TidyScot Platform, Mobile App & AI Assistant",
    category: "Business Web, Mobile App & AI",
    client: "TidyScot, Scotland, UK",
    description:
      "Designed and developed a modern business web platform and native mobile app with an integrated AI customer assistant that provides instant quotes, booking management, and 24/7 customer engagement.",
    technologies: [
      "Website Development",
      "Mobile App",
      "AI Chatbot",
      "Automation",
      "Responsive Design",
    ],
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
  { value: "3", label: "Live deployments" },
  { value: "UK & NG", label: "Active markets" },
  { value: "100%", label: "On-time delivery" },
  { value: "24/7", label: "Production support" },
];

export const LEADERSHIP = {
  name: "Fadahunsi Miracle",
  role: "Founder & Chief Executive Officer",
  company: "Morden Labs",
  location: "Lagos, Nigeria",
  image:
    "https://www.image2url.com/r2/default/images/1788471400856-36701ac8-2925-4e9d-8462-b24257965e0a.png",
  headline:
    "Pioneering software engineering, intelligent AI systems, and scalable digital architecture.",
  bio: [
    "At Morden Labs, our mission is straightforward: eliminate bloated agency promises and replace them with high-velocity, precision engineering. As Founder & CEO, I guide our studio's strategic vision, technical architecture, and product delivery across the UK, Nigeria, and international markets.",
    "From voice and conversational AI platforms deployed for official government bodies to mission-critical healthcare CRMs and UK commercial booking ecosystems, I lead our teams to build software that scales reliably and generates lasting competitive edge.",
  ],
  quote:
    "We build software with taste, speed, and real stakes — engineered to establish our clients as undeniable leaders in their category.",
  expertise: [
    "Software & Cloud Architecture",
    "Enterprise AI & Automation",
    "High-Performance Web Platforms",
    "Mobile & Cross-Platform Systems",
  ],
  socials: {
    linkedin: "https://www.linkedin.com/in/miracle-fadahunsi-897149295/",
    twitter: "",
    email: "fadahunsi.miracle@gmail.com",
  },
};
