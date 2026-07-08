import { createFileRoute } from "@tanstack/react-router";
import heroReef from "@/assets/hero-reef.jpg";
import tourSharkRayAsset from "@/assets/tour-sharkray-real.jpg.asset.json";
import tourCayeCaulkerAsset from "@/assets/tour-cayecaulker-real.jpg.asset.json";
import tourBbqAsset from "@/assets/tour-bbq-real.jpg.asset.json";
import tourCaveAsset from "@/assets/tour-cave.jpg.asset.json";
import tourBacalarAsset from "@/assets/gallery-img_6029.jpeg.asset.json";
import galleryImg1 from "@/assets/gallery-img_6029.jpeg.asset.json";
import galleryImg2 from "@/assets/gallery-img_60242.jpeg.asset.json";
import galleryImg3 from "@/assets/gallery-img_6022.jpeg.asset.json";
import galleryImg4 from "@/assets/gallery-img_6026.jpeg.asset.json";
import galleryImg5 from "@/assets/gallery-img_5560.jpeg.asset.json";
import galleryVid1 from "@/assets/gallery-video-2025-10-29-21-21-38-2.mov.asset.json";
import galleryVid2 from "@/assets/gallery-video-2025-10-29-21-21-38.mov.asset.json";
import galleryVid3 from "@/assets/gallery-video-2025-10-29-21-21-39.mov.asset.json";
import { useEffect, useState } from "react";
import ChatWidget from "@/components/ChatWidget";

const tourSharkRay = tourSharkRayAsset.url;
const tourCayeCaulker = tourCayeCaulkerAsset.url;
const tourBbq = tourBbqAsset.url;
const tourCave = tourCaveAsset.url;
const tourBacalar = tourBacalarAsset.url;

export const Route = createFileRoute("/")({
  component: Index,
});

const PHONE = "+5016228957";
const PHONE_DISPLAY = "+501 622-8957";
const WHATSAPP = `https://wa.me/5016228957?text=${encodeURIComponent(
  "Hi Belize Masters Tours! I'd like to book a tour."
)}`;

type Tour = {
  title: string;
  price: string;
  duration: string;
  tag: string;
  desc: string;
  image: string;
  highlights: string[];
};

const tours: Tour[] = [
  {
    title: "Hol Chan & Shark Ray Alley",
    price: "From $75",
    duration: "3h 30m",
    tag: "Most Popular",
    desc: "Snorkel the crown jewel of Belize's barrier reef and swim beside nurse sharks and stingrays in crystal-clear water.",
    image: tourSharkRay,
    highlights: ["Hol Chan Marine Reserve", "Swim with sharks & rays", "All gear included"],
  },
  {
    title: "Caye Caulker Island Day Trip",
    price: "From $100",
    duration: "7h",
    tag: "Full Day",
    desc: "Two-reef snorkel plus island time on laid-back Caye Caulker — fresh seafood, palm trees and the famous Split.",
    image: tourCayeCaulker,
    highlights: ["Hol Chan + Shark Ray Alley", "Free time on Caye Caulker", "Round-trip boat"],
  },
  {
    title: "Fishing, Snorkel & Beach BBQ",
    price: "From $135",
    duration: "Private Day",
    tag: "Private Charter",
    desc: "Your own boat, your own captain. Reef fishing, snorkeling stops and a fresh-caught barbecue on a private beach.",
    image: tourBbq,
    highlights: ["Private group charter", "Catch & grill on the beach", "Fully customizable"],
  },
  {
    title: "Bacalar Chico Snorkel & Beach BBQ",
    price: "From $165",
    duration: "Full Day",
    tag: "Hidden Gem",
    desc: "Cruise the mangrove river hunting for manatees, snorkel pristine Rocky Point reef, then feast on a fresh BBQ lunch on a secluded beach — capped with sharks and rays on the way home.",
    image: tourBacalar,
    highlights: ["Manatee spotting river", "Rocky Point reef snorkel", "Private beach BBQ lunch"],
  },
  {
    title: "Cave Tubing & Zip Line Adventure",
    price: "From $230",
    duration: "Full Day",
    tag: "Epic Adventure",
    desc: "The ultimate mainland day: soar through the jungle canopy on zip lines, then float on a tube through ancient Mayan caves. Boat transfer, breakfast and lunch all included.",
    image: tourCave,
    highlights: ["Jungle zip lining", "Guided cave tubing", "Breakfast & lunch included"],
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="absolute top-0 left-0 right-0 z-20">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8">
          <a href="#top" className="flex items-center gap-2 text-white">
            <span className="grid h-9 w-9 place-items-center rounded-full gradient-sun font-display text-lg font-black text-deep">
              B
            </span>
            <span className="font-display text-lg font-bold tracking-tight">
              Belize Masters Tours
            </span>
          </a>
          <div className="hidden items-center gap-8 text-sm font-medium text-white/90 md:flex">
            <a href="#tours" className="hover:text-white">Tours</a>
            <a href="#about" className="hover:text-white">About</a>
            <a href="#gallery" className="hover:text-white">Gallery</a>
            <a href="#reviews" className="hover:text-white">Reviews</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
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

      <section id="top" className="relative min-h-[92vh] overflow-hidden">
        <img
          src={heroReef}
          alt="Aerial view of Belize Barrier Reef with turquoise water"
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-deep/70 via-deep/30 to-deep/80" />

        <div className="relative mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-end px-5 pb-16 pt-32 sm:px-8 sm:pb-24">
          <div className="max-w-3xl text-white">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-sun" />
              San Pedro · Ambergris Caye, Belize
            </span>
            <h1 className="mt-5 font-display text-5xl font-black leading-[0.95] text-balance sm:text-7xl lg:text-8xl">
              Dive into the <span className="italic text-sun">real</span> Belize.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/85 sm:text-xl">
              Snorkel the world's second-largest barrier reef, swim beside sharks
              and rays, and set sail with the highest-rated captains on the island.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#tours"
                className="rounded-full gradient-sun px-6 py-3 text-base font-bold text-deep shadow-xl transition hover:scale-105"
              >
                Explore Tours
              </a>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/40 bg-white/10 px-6 py-3 text-base font-semibold text-white backdrop-blur transition hover:bg-white/20"
              >
                Chat on WhatsApp
              </a>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-white/80">
              <div className="flex items-center gap-2">
                <Stars />
                <span><b className="text-white">4.9</b> · 958 Google reviews</span>
              </div>
              <div>🏝️ 10+ years on the reef</div>
              <div>🤿 All gear included</div>
            </div>
          </div>
        </div>
      </section>

      <section id="tours" className="relative py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mb-14 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-coral">
                Our Tours
              </p>
              <h2 className="mt-2 max-w-2xl font-display text-4xl font-black leading-tight text-balance sm:text-5xl">
                Adventures made for postcards.
              </h2>
            </div>
            <p className="max-w-md text-muted-foreground">
              Small groups, local captains, and the best reef spots in Belize —
              picked and priced for an unforgettable day on the water.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {tours.map((t) => (
              <article
                key={t.title}
                className="group flex flex-col overflow-hidden rounded-2xl bg-card shadow-sm ring-1 ring-border transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={t.image}
                    alt={t.title}
                    width={1200}
                    height={900}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-bold uppercase tracking-wider text-deep">
                    {t.tag}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="font-display text-2xl font-bold">{t.title}</h3>
                    <div className="text-right">
                      <div className="font-display text-2xl font-black text-coral">
                        {t.price}
                      </div>
                      <div className="text-xs font-medium text-muted-foreground">
                        {t.duration}
                      </div>
                    </div>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {t.desc}
                  </p>
                  <ul className="mt-4 space-y-1.5 text-sm">
                    {t.highlights.map((h) => (
                      <li key={h} className="flex items-center gap-2">
                        <span className="text-primary">✦</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={WHATSAPP}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex items-center justify-center rounded-full bg-deep px-5 py-3 text-sm font-semibold text-white transition hover:bg-primary"
                  >
                    Book this tour →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="relative overflow-hidden gradient-sea py-20 text-white sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-sun">
              Why Belize Masters
            </p>
            <h2 className="mt-2 font-display text-4xl font-black leading-tight text-balance sm:text-5xl">
              Local captains. Legendary reefs. Zero tourist traps.
            </h2>
            <p className="mt-5 max-w-xl text-white/85">
              We're a family-run crew from San Pedro who've grown up on these
              waters. Every trip is small, safe and full of the little moments
              that make Belize unforgettable — from spotting a sea turtle to
              cracking a cold Belikin on the way home.
            </p>
            <div className="mt-8 grid max-w-md grid-cols-3 gap-4">
              <Stat number="4.9★" label="Google rating" />
              <Stat number="958+" label="Happy guests" />
              <Stat number="10+" label="Years on reef" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src={tourSharkRay} alt="Snorkeling with rays" width={1200} height={900} loading="lazy" className="aspect-[4/5] w-full rounded-2xl object-cover shadow-2xl" />
            <img src={tourCayeCaulker} alt="Caye Caulker" width={1200} height={900} loading="lazy" className="mt-10 aspect-[4/5] w-full rounded-2xl object-cover shadow-2xl" />
          </div>
        </div>
      </section>

      <GallerySection />

      <section id="reviews" className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mb-12 text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-coral">
              Guest Stories
            </p>
            <h2 className="mt-2 font-display text-4xl font-black sm:text-5xl">
              4.9★ from 958 travelers
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                name: "Sarah M.",
                from: "🇺🇸 USA",
                text: "Best day of our Belize trip! Captain was hilarious and the snorkeling at Shark Ray Alley was unreal. Booking again next year.",
              },
              {
                name: "Liam K.",
                from: "🇨🇦 Canada",
                text: "Private charter with the BBQ was worth every penny. Fresh fish grilled on a deserted beach — it doesn't get better.",
              },
              {
                name: "Elena R.",
                from: "🇬🇧 UK",
                text: "So professional and warm. Saw sharks, rays, turtles and a moray eel. The Caye Caulker trip flew by. 10/10.",
              },
            ].map((r) => (
              <figure
                key={r.name}
                className="flex flex-col rounded-2xl bg-secondary p-7 shadow-sm ring-1 ring-border"
              >
                <Stars />
                <blockquote className="mt-4 flex-1 text-base leading-relaxed">
                  "{r.text}"
                </blockquote>
                <figcaption className="mt-6 text-sm font-semibold">
                  {r.name} <span className="text-muted-foreground">· {r.from}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="relative overflow-hidden pb-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="relative overflow-hidden rounded-3xl gradient-sun p-8 sm:p-14">
            <div className="relative grid gap-8 lg:grid-cols-2 lg:items-center">
              <div className="text-deep">
                <h2 className="font-display text-4xl font-black leading-tight text-balance sm:text-5xl">
                  Ready to hit the water?
                </h2>
                <p className="mt-4 max-w-md text-deep/80">
                  Message us on WhatsApp for the quickest reply, or call the
                  office. We'll match you to the perfect tour for your dates.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={WHATSAPP}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full bg-deep px-6 py-3 text-sm font-bold text-white shadow-lg transition hover:scale-105"
                  >
                    WhatsApp us
                  </a>
                  <a
                    href={`tel:${PHONE}`}
                    className="rounded-full bg-white/90 px-6 py-3 text-sm font-bold text-deep shadow transition hover:bg-white"
                  >
                    Call {PHONE_DISPLAY}
                  </a>
                </div>
              </div>
              <div className="grid gap-3 rounded-2xl bg-white/70 p-6 text-sm text-deep backdrop-blur">
                <Info label="Address" value="D.F.C 31.A, 1 Front Street, San Pedro" />
                <Info label="Phone" value={PHONE_DISPLAY} />
                <Info label="Hours" value="Daily · Closes 10:30 pm" />
                <Info label="Website" value="belizemastertour.com" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border bg-deep py-10 text-sm text-white/70">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 sm:flex-row sm:px-8">
          <div className="flex items-center gap-2 text-white">
            <span className="grid h-8 w-8 place-items-center rounded-full gradient-sun font-display text-sm font-black text-deep">
              B
            </span>
            <span className="font-display font-bold">Belize Masters Tours</span>
          </div>
          <p>© {new Date().getFullYear()} Belize Masters Tours · San Pedro, Belize</p>
        </div>
      </footer>

      <ChatWidget />
    </div>
  );
}

function Stat({ number, label }: { number: string; label: string }) {
  return (
    <div>
      <div className="font-display text-3xl font-black text-sun">{number}</div>
      <div className="mt-1 text-xs uppercase tracking-wider text-white/70">{label}</div>
    </div>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start justify-between gap-4 border-b border-deep/10 pb-2 last:border-0 last:pb-0">
      <span className="text-xs font-semibold uppercase tracking-wider text-deep/60">{label}</span>
      <span className="text-right font-medium">{value}</span>
    </div>
  );
}

function Stars() {
  return (
    <div className="flex gap-0.5 text-sun" aria-label="5 out of 5 stars">
      {[0, 1, 2, 3, 4].map((i) => (
        <svg key={i} viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
          <path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 14.9l-5.3 2.8 1-5.8L1.5 7.7l5.9-.9L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}

type GalleryItem = { type: "image" | "video"; src: string; alt: string };

const galleryItems: GalleryItem[] = [
  { type: "image", src: galleryImg1.url, alt: "Guests on a mangrove boat tour" },
  { type: "video", src: galleryVid1.url, alt: "Tour highlights video" },
  { type: "image", src: galleryImg2.url, alt: "Beach BBQ feast on the sand" },
  { type: "video", src: galleryVid2.url, alt: "On-the-water moments" },
  { type: "image", src: galleryImg3.url, alt: "Exploring Mayan ruins" },
  { type: "video", src: galleryVid3.url, alt: "Tour experience clip" },
  { type: "image", src: galleryImg4.url, alt: "Captain with a fresh catch" },
  { type: "image", src: galleryImg5.url, alt: "Fresh ceviche served on the boat" },
];

function GallerySection() {
  const [idx, setIdx] = useState(0);
  const total = galleryItems.length;
  const current = galleryItems[idx];

  useEffect(() => {
    if (current.type === "video") return;
    const t = setTimeout(() => setIdx((i) => (i + 1) % total), 4500);
    return () => clearTimeout(t);
  }, [idx, current.type, total]);

  const go = (delta: number) => setIdx((i) => (i + delta + total) % total);

  return (
    <section id="gallery" className="bg-deep py-20 text-white sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mb-10 text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-sun">
            Our Gallery
          </p>
          <h2 className="mt-2 font-display text-4xl font-black sm:text-5xl">
            Real days on the water.
          </h2>
        </div>

        <div className="relative overflow-hidden rounded-3xl bg-black shadow-2xl">
          <div className="relative aspect-[4/3] w-full sm:aspect-[16/9]">
            {current.type === "image" ? (
              <img
                key={current.src}
                src={current.src}
                alt={current.alt}
                className="h-full w-full animate-in fade-in object-cover duration-700"
              />
            ) : (
              <video
                key={current.src}
                src={current.src}
                autoPlay
                muted
                playsInline
                controls
                onEnded={() => go(1)}
                className="h-full w-full object-cover"
              />
            )}
          </div>

          <button
            type="button"
            aria-label="Previous"
            onClick={() => go(-1)}
            className="absolute left-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-deep shadow-lg transition hover:scale-110"
          >
            ‹
          </button>
          <button
            type="button"
            aria-label="Next"
            onClick={() => go(1)}
            className="absolute right-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-deep shadow-lg transition hover:scale-110"
          >
            ›
          </button>

          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
            {galleryItems.map((_, i) => (
              <button
                key={i}
                aria-label={`Slide ${i + 1}`}
                onClick={() => setIdx(i)}
                className={`h-2 rounded-full transition-all ${
                  i === idx ? "w-8 bg-sun" : "w-2 bg-white/50 hover:bg-white/80"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="mt-6 grid grid-cols-4 gap-2 sm:grid-cols-8">
          {galleryItems.map((item, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              className={`relative aspect-square overflow-hidden rounded-lg ring-2 transition ${
                i === idx ? "ring-sun" : "ring-transparent hover:ring-white/40"
              }`}
            >
              {item.type === "image" ? (
                <img src={item.src} alt="" className="h-full w-full object-cover" />
              ) : (
                <video src={item.src} muted playsInline className="h-full w-full object-cover" />
              )}
              {item.type === "video" && (
                <span className="absolute inset-0 grid place-items-center bg-black/30 text-white">
                  ▶
                </span>
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
