import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import { favicon } from "../lib/images-base64";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Morden Labs | We build the bold web." },
      {
        name: "description",
        content:
          "Morden Labs is a digital studio shipping web, mobile, AI automations, and SEO that actually works. We build bold, fast, modern products.",
      },
      { name: "author", content: "Fadahunsi Miracle, Founder & CEO at Morden Labs" },
      { property: "og:title", content: "Morden Labs | We build the bold web." },
      {
        property: "og:description",
        content: "Digital studio for web, mobile, AI automations & SEO that ships.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "robots",
        content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
      },
      {
        name: "google-site-verification",
        content: "1U8gZhpzwM9ypOy6pJ-S2a2L0l5B0FKsoveksOC-SZA",
      },
    ],
    links: [
      { rel: "icon", type: "image/webp", href: favicon },
      { rel: "canonical", href: "https://mordenlabs.com.ng" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400..800&family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;700&display=swap",
      },
      { rel: "stylesheet", href: appCss },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  const schemaOrgGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://mordenlabs.com.ng/#organization",
        name: "Morden Labs",
        url: "https://mordenlabs.com.ng",
        logo: "https://mordenlabs.com.ng/morden-logo.png",
        description:
          "High-end digital engineering studio building web platforms, mobile apps, enterprise AI systems, and business automation.",
        founder: {
          "@type": "Person",
          "@id": "https://mordenlabs.com.ng/#founder",
          name: "Fadahunsi Miracle",
          jobTitle: "Founder & Chief Executive Officer",
          image:
            "https://www.image2url.com/r2/default/images/1788471400856-36701ac8-2925-4e9d-8462-b24257965e0a.png",
          worksFor: {
            "@id": "https://mordenlabs.com.ng/#organization",
          },
        },
        sameAs: [
          "https://www.linkedin.com/company/mordenlabs",
          "https://www.linkedin.com/in/miracle-fadahunsi-897149295/",
        ],
      },
      {
        "@type": "Person",
        "@id": "https://mordenlabs.com.ng/#founder",
        name: "Fadahunsi Miracle",
        jobTitle: "Founder & Chief Executive Officer",
        image:
          "https://www.image2url.com/r2/default/images/1788471400856-36701ac8-2925-4e9d-8462-b24257965e0a.png",
        worksFor: {
          "@id": "https://mordenlabs.com.ng/#organization",
        },
        url: "https://mordenlabs.com.ng/about#leadership",
        email: "mailto:fadahunsi.miracle@gmail.com",
        sameAs: ["https://www.linkedin.com/in/miracle-fadahunsi-897149295/"],
        knowsAbout: [
          "Software Architecture",
          "Artificial Intelligence",
          "Full-Stack Web Development",
          "Mobile Engineering",
          "Automation & CRM",
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://mordenlabs.com.ng/#website",
        url: "https://mordenlabs.com.ng",
        name: "Morden Labs",
        alternateName: ["MordenLabs", "Morden Labs Studio", "Morden Labs Digital Studio"],
        publisher: {
          "@id": "https://mordenlabs.com.ng/#organization",
        },
        inLanguage: "en-US",
      },
      {
        "@type": "ItemList",
        "@id": "https://mordenlabs.com.ng/#navigation",
        name: "Main Site Navigation",
        itemListElement: [
          {
            "@type": "SiteNavigationElement",
            position: 1,
            name: "About Us",
            description:
              "Meet Morden Labs, executive leadership by Fadahunsi Miracle, and our modern engineering approach.",
            url: "https://mordenlabs.com.ng/about",
          },
          {
            "@type": "SiteNavigationElement",
            position: 2,
            name: "Services",
            description:
              "Full-stack web engineering, mobile apps, enterprise AI automations, speed SEO, and CMS integrations.",
            url: "https://mordenlabs.com.ng/services",
          },
          {
            "@type": "SiteNavigationElement",
            position: 3,
            name: "Featured Projects",
            description:
              "Production case studies including UK commercial platforms, healthcare CRMs, and government AI systems.",
            url: "https://mordenlabs.com.ng/work",
          },
          {
            "@type": "SiteNavigationElement",
            position: 4,
            name: "Contact",
            description:
              "Initiate a project conversation or consultation with Morden Labs with a 24-hour reply window.",
            url: "https://mordenlabs.com.ng/contact",
          },
        ],
      },
    ],
  };

  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="1U8gZhpzwM9ypOy6pJ-S2a2L0l5B0FKsoveksOC-SZA"
        />
        <HeadContent />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrgGraph) }}
        />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
