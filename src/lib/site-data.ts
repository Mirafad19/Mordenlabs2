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
    body: "From landing pages to full-scale web platforms, we ship fast, scalable, accessible builds on modern stacks with a focus on maintainability and long-term ownership.",
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
    body: "We build the AI layer for your business, from custom conversational agents and voice interfaces to background automations that connect your tools, parse documents, and keep data moving.",
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
    body: "Sanity, Strapi, WordPress, Payload: we integrate the right CMS for your workflow so your team can ship content without pinging a developer.",
  },
];

export const PROJECTS = [
  {
    slug: "dumpit",
    name: "Dumpit: Gesture-Controlled File Transfer",
    category: "CAMERA-BASED FILE TRANSFER",
    ownershipBadge: "FOUNDER’S PRODUCT",
    badge: "FOUNDER’S PRODUCT",
    creatorLine: "Creator: Fadahunsi Miracle, Founder of Morden Labs",
    client: "In-House Innovation · Fadahunsi Miracle, Founder of Morden Labs",
    url: "https://www.dumpit.tech/",
    displayUrl: "dumpit.tech",
    description:
      "Designed, developed, and launched Dumpit, a browser-based application that turns file sharing into a visible hand gesture. Users stage files, create a private room, and share a code with receiving devices. The sender grabs with a fist, and receivers open their hands to catch the files. Transfers run directly between connected devices on the same Wi-Fi, with no account or cloud storage required.",
    technologies: [
      "Web Development",
      "WebRTC",
      "MediaPipe Hand Tracking",
      "Real-Time Signaling",
      "Responsive Design",
    ],
    buttonText: "VISIT LIVE PROJECT",
    logo: "/dumpit-showcase.png",
    logoBg: "bg-[#070b14]",
    isFounderProduct: true,
  },
  {
    slug: "pssdc",
    name: "PSSDC AI Conversational Service Assistant",
    category: "Government AI Platform",
    client: "Lagos State Public Service Staff Development Centre (PSSDC), Nigeria",
    url: "https://pssdc.ng",
    displayUrl: "pssdc.ng",
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
    url: "https://tidyscot.co.uk",
    displayUrl: "tidyscot.co.uk",
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
    url: "https://citicarehealth.com",
    displayUrl: "citicarehealth.com",
    description:
      "Built a professional healthcare website and a custom CRM platform that streamlines patient enquiries, improves internal workflows, and enhances the digital experience for administrators and clients.",
    technologies: ["Custom CRM", "Web Development", "Database Design", "Business Automation"],
    badge: null,
    logo: citicareLogo,
  },
];

export const STATS = [
  { value: "99.9%", label: "Production reliability" },
  { value: "2–6 wks", label: "Average turnaround" },
  { value: "UK & NG", label: "Active markets" },
  { value: "100%", label: "Code & IP ownership" },
];

export const LEADERSHIP = {
  name: "Miracle Fadahunsi",
  fullName: "Fadahunsi Miracle",
  role: "Founder & Lead Engineer",
  company: "Morden Labs",
  location: "Lagos, Nigeria & UK",
  image: "/miracle-fadahunsi.jpg",
  fullImageUrl: "https://mordenlabs.com.ng/miracle-fadahunsi.jpg",
  headline:
    "Engineering robust web platforms, applied AI systems, and scalable digital infrastructure.",
  bio: [
    "At Morden Labs, our focus is simple: deliver high-quality engineering without agency bureaucracy. As founder and lead engineer, I work directly with clients to design, build, and deploy systems that solve real operational problems with zero compromise on taste or speed.",
    "From gesture-controlled file transfers with Dumpit to conversational voice AI for government institutions and UK commercial operations, we build software designed to stand the test of time.",
  ],
  quote:
    "We build software with taste and precision, engineered to help our clients move faster and scale with confidence.",
  expertise: [
    "Full-Stack Web & Cloud Infrastructure",
    "Computer Vision & WebRTC (MediaPipe)",
    "Applied AI & Workflow Automation",
    "Cross-Platform Mobile Systems",
  ],
  socials: {
    linkedin: "https://www.linkedin.com/in/miracle-fadahunsi-897149295/",
    twitter: "",
    email: "support@mordenlabs.com.ng",
  },
};
