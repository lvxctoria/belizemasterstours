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

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

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
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

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
      { title: "San Pedro Belize Tours | Hol Chan Snorkel & Private Boat Charters" },
      {
        name: "description",
        content:
          "Book top-rated San Pedro Belize tours with Belize Masters Tours. Snorkel Hol Chan & Shark Ray Alley, Caye Caulker day trips, private boat charters & beach BBQ on Ambergris Caye. 4.9★ local guides — reserve on WhatsApp.",
      },
      {
        name: "keywords",
        content:
          "San Pedro Belize tours, Belize tours, Ambergris Caye tours, San Pedro excursions, Belize snorkeling tours, Hol Chan Shark Ray Alley tour, Caye Caulker day trip Belize, private boat tours Belize, Belize adventure tours, things to do in San Pedro Belize, best tours in Belize, Belize Masters Tours",
      },
      { name: "author", content: "Belize Masters Tours" },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { name: "geo.region", content: "BZ-BZ" },
      { name: "geo.placename", content: "San Pedro, Ambergris Caye, Belize" },
      { property: "og:site_name", content: "Belize Masters Tours" },
      { property: "og:locale", content: "en_US" },
      { property: "og:title", content: "San Pedro Belize Tours | Hol Chan Snorkel & Private Boat Charters" },
      {
        property: "og:description",
        content:
          "Snorkel Hol Chan & Shark Ray Alley, cruise to Caye Caulker, and book private boat charters from San Pedro, Ambergris Caye. 4.9★ local guides.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://belizemasterstours.lovable.app/" },
      { property: "og:image", content: "https://belizemasterstours.lovable.app/favicon.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "San Pedro Belize Tours | Hol Chan Snorkel & Private Boat Charters" },
      {
        name: "twitter:description",
        content:
          "Top-rated snorkeling, Caye Caulker day trips and private boat charters from San Pedro, Ambergris Caye.",
      },
      { name: "twitter:image", content: "https://belizemasterstours.lovable.app/favicon.png" },
      { name: "theme-color", content: "#f59e0b" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,700;9..144,900&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "TravelAgency",
          "@id": "https://belizemasterstours.lovable.app/#business",
          name: "Belize Masters Tours",
          description:
            "Local tour operator in San Pedro, Ambergris Caye offering snorkeling tours to Hol Chan Marine Reserve & Shark Ray Alley, Caye Caulker day trips, private boat charters, fishing trips and beach BBQ excursions.",
          url: "https://belizemasterstours.lovable.app/",
          image: "https://belizemasterstours.lovable.app/favicon.png",
          logo: "https://belizemasterstours.lovable.app/favicon.png",
          telephone: "+501-622-8957",
          priceRange: "$$",
          address: {
            "@type": "PostalAddress",
            streetAddress: "1 Front Street",
            addressLocality: "San Pedro",
            addressRegion: "Belize District",
            addressCountry: "BZ",
          },
          areaServed: [
            { "@type": "Place", name: "San Pedro, Ambergris Caye, Belize" },
            { "@type": "Place", name: "Caye Caulker, Belize" },
            { "@type": "Place", name: "Hol Chan Marine Reserve" },
            { "@type": "Place", name: "Bacalar Chico National Park" },
          ],
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "200",
          },
          sameAs: ["https://belizemasterstours.lovable.app/"],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "What are the best tours in San Pedro, Belize?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "The most popular San Pedro tours are snorkeling at Hol Chan Marine Reserve & Shark Ray Alley, the Caye Caulker island day trip, private boat charters with fishing and beach BBQ, and full-day cave tubing & zip line adventures on the mainland.",
              },
            },
            {
              "@type": "Question",
              name: "How much do Belize snorkeling tours cost?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Half-day snorkel tours from San Pedro to Hol Chan & Shark Ray Alley start at $75 USD per person. Full-day Caye Caulker trips start at $150, and private charters with beach BBQ start at $135 per person.",
              },
            },
            {
              "@type": "Question",
              name: "How do I book a private boat tour in Belize?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "You can book any Belize Masters Tours experience directly on WhatsApp at +501 622-8957 or by calling the same number. We confirm most bookings within minutes.",
              },
            },
            {
              "@type": "Question",
              name: "What is the best time to visit Hol Chan Marine Reserve?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Hol Chan is great year-round, but visibility is best from March through June. Morning departures typically have the calmest water and the clearest snorkeling conditions.",
              },
            },
          ],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
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
