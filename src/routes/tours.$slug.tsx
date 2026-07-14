import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { tours, WHATSAPP, PHONE, PHONE_DISPLAY, type Tour } from "@/lib/tours";

export const Route = createFileRoute("/tours/$slug")({
  loader: ({ params }) => {
    const tour = tours.find((t) => t.slug === params.slug);
    if (!tour) throw notFound();
    return { tour };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return { meta: [{ title: "Tour not found — Belize Masters Tours" }, { name: "robots", content: "noindex" }] };
    }
    const { tour } = loaderData;
    const title = `${tour.title} in San Pedro, Belize | Belize Masters Tours`;
    const description = `${tour.desc} Book this ${tour.duration} tour from San Pedro, Ambergris Caye with local guides — ${tour.price} per person.`;
    const url = `https://belizemasterstours.lovable.app/tours/${params.slug}`;
    const image = tour.image.startsWith("http") ? tour.image : `https://belizemasterstours.lovable.app${tour.image}`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { name: "keywords", content: `${tour.title}, San Pedro Belize tours, Ambergris Caye tours, ${tour.tag}, Belize snorkeling, Belize excursions, Belize Masters Tours` },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "product" },
        { property: "og:url", content: url },
        { property: "og:image", content: image },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
        { name: "twitter:image", content: image },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TouristTrip",
            name: tour.title,
            description: tour.longDesc.join(" "),
            image,
            url,
            touristType: "Snorkeling, adventure, family, private charter",
            provider: {
              "@type": "TravelAgency",
              name: "Belize Masters Tours",
              telephone: "+501-622-8957",
              url: "https://belizemasterstours.lovable.app/",
            },
            offers: {
              "@type": "Offer",
              price: tour.price.replace(/[^0-9.]/g, ""),
              priceCurrency: "USD",
              availability: "https://schema.org/InStock",
              url,
            },
            itinerary: tour.highlights.map((h) => ({ "@type": "Place", name: h })),
          }),
        },
      ],
    };
  },
  component: TourDetail,
  notFoundComponent: TourNotFound,
});

function TourNotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4 text-center">
      <div>
        <h1 className="font-display text-4xl font-black">Tour not found</h1>
        <p className="mt-3 text-muted-foreground">That tour doesn't exist or has moved.</p>
        <Link to="/" className="mt-6 inline-block rounded-full gradient-sun px-6 py-3 text-sm font-bold text-deep">
          Back to tours
        </Link>
      </div>
    </div>
  );
}

function TourDetail() {
  const { tour } = Route.useLoaderData() as { tour: Tour };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="absolute top-0 left-0 right-0 z-20">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8">
          <Link to="/" className="flex items-center gap-2 text-white">
            <span className="grid h-9 w-9 place-items-center rounded-full gradient-sun font-display text-lg font-black text-deep">B</span>
            <span className="font-display text-lg font-bold tracking-tight">Belize Masters Tours</span>
          </Link>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="rounded-full gradient-sun px-4 py-2 text-sm font-semibold text-deep shadow-lg shadow-black/20 transition hover:scale-105"
          >
            Book Now
          </a>
        </nav>
      </header>

      <section className="relative min-h-[60vh] overflow-hidden">
        <img src={tour.image} alt={tour.title} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-deep/70 via-deep/40 to-deep/80" />
        <div className="relative mx-auto flex min-h-[60vh] max-w-5xl flex-col justify-end px-5 pb-14 pt-32 text-white sm:px-8">
          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider backdrop-blur">
            {tour.tag}
          </span>
          <h1 className="mt-4 font-display text-5xl font-black leading-[1.02] sm:text-6xl">{tour.title}</h1>
          <div className="mt-4 flex flex-wrap items-center gap-4 text-white/90">
            <span className="font-display text-2xl font-black text-sun">{tour.price}</span>
            <span>· {tour.duration}</span>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-14 sm:px-8 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_320px]">
          <div>
            <h2 className="font-display text-3xl font-black">About this tour</h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-foreground/85">
              {tour.longDesc.map((p, i) => (<p key={i}>{p}</p>))}
            </div>

            <h3 className="mt-10 font-display text-2xl font-bold">Highlights</h3>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {tour.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2 rounded-xl bg-secondary p-3 text-sm">
                  <span className="text-primary">✦</span><span>{h}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 grid gap-8 sm:grid-cols-2">
              <div>
                <h3 className="font-display text-xl font-bold">What's included</h3>
                <ul className="mt-3 space-y-1.5 text-sm text-foreground/85">
                  {tour.includes.map((h) => (
                    <li key={h} className="flex gap-2"><span className="text-primary">✓</span><span>{h}</span></li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-display text-xl font-bold">What to bring</h3>
                <ul className="mt-3 space-y-1.5 text-sm text-foreground/85">
                  {tour.bringAlong.map((h) => (
                    <li key={h} className="flex gap-2"><span className="text-coral">•</span><span>{h}</span></li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-10 rounded-2xl bg-secondary p-5 text-sm">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Meeting point</p>
              <p className="mt-1 font-medium">{tour.meetingPoint}</p>
            </div>
          </div>

          <aside className="lg:sticky lg:top-6 lg:self-start">
            <div className="rounded-2xl bg-card p-6 shadow-lg ring-1 ring-border">
              <div className="font-display text-3xl font-black text-coral">{tour.price}</div>
              <div className="text-sm text-muted-foreground">{tour.duration}</div>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="mt-5 flex items-center justify-center rounded-full gradient-sun px-5 py-3 text-sm font-bold text-deep shadow-lg transition hover:scale-105"
              >
                Book this tour
              </a>
              <a
                href={`tel:${PHONE}`}
                className="mt-3 flex items-center justify-center rounded-full bg-deep px-5 py-3 text-sm font-semibold text-white transition hover:bg-primary"
              >
                Call {PHONE_DISPLAY}
              </a>
              <Link
                to="/"
                className="mt-3 block text-center text-sm font-medium text-muted-foreground hover:text-foreground"
              >
                ← Back to all tours
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
