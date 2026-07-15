import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  WHATSAPP,
  PHONE,
  PHONE_DISPLAY,
  PHONE_SECONDARY,
  PHONE_SECONDARY_DISPLAY,
} from "@/lib/tours";

export const Route = createFileRoute("/cancellation-policy")({
  head: () => ({
    meta: [
      { title: "Cancellation Policy | Belize Masters Tours" },
      {
        name: "description",
        content:
          "Read the Belize Masters Tours cancellation, weather, no-show and refund policy for San Pedro tours, snorkeling trips and private charters.",
      },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: "Cancellation Policy | Belize Masters Tours" },
      {
        property: "og:description",
        content:
          "Our clear and fair cancellation, refund, weather and rescheduling terms for all Belize Masters Tours experiences.",
      },
      {
        rel: "canonical",
        href: "https://belizemasterstours.lovable.app/cancellation-policy",
      },
    ],
  }),
  component: CancellationPolicy,
});

const sections: { title: string; body: React.ReactNode }[] = [
  {
    title: "Booking Confirmation",
    body: (
      <>
        <p>
          Reservations are considered confirmed once Belize Masters Tours receives the required
          booking information and any applicable payment or deposit required to secure the
          reservation.
        </p>
        <p>Guests are encouraged to review these cancellation terms before confirming their booking.</p>
      </>
    ),
  },
  {
    title: "Guest Cancellation Policy",
    body: (
      <>
        <p>Guests who need to cancel their reservation must notify Belize Masters Tours in writing as soon as possible.</p>
        <ul>
          <li>All cancellations must be submitted at least <strong>7 days prior</strong> to the scheduled tour date.</li>
          <li>Cancellations made within the required 7-day period may qualify for a refund according to the cancellation terms.</li>
          <li>Failure to cancel within the required timeframe will result in the reservation becoming <strong>non-refundable</strong>.</li>
        </ul>
      </>
    ),
  },
  {
    title: "No Show Policy",
    body: (
      <>
        <p>
          Guests who fail to arrive on the scheduled tour date, arrive late beyond the departure
          time, or do not participate in the tour without prior notice will be considered a
          <strong> "No Show."</strong>
        </p>
        <ul>
          <li>No-show reservations are non-refundable.</li>
          <li>The full tour price will be charged.</li>
        </ul>
      </>
    ),
  },
  {
    title: "Weather Policy",
    body: (
      <>
        <p><strong>Guest safety is our highest priority.</strong></p>
        <p>
          If weather conditions, sea conditions, or other safety concerns prevent Belize Masters
          Tours from operating the scheduled tour, guests will have the option of:
        </p>
        <ul>
          <li>Rescheduling their tour to another available date, or</li>
          <li>Receiving a full refund</li>
        </ul>
        <p>Weather-related cancellations made by Belize Masters Tours will receive a full refund.</p>
      </>
    ),
  },
  {
    title: "Cancellation by Belize Masters Tours",
    body: (
      <>
        <p>
          In the unlikely event that Belize Masters Tours must cancel a tour due to circumstances
          within our control or operational reasons, guests will receive:
        </p>
        <ul>
          <li>A full refund, or</li>
          <li>The option to reschedule their experience</li>
        </ul>
        <p>We will always communicate with guests as soon as possible regarding any changes.</p>
      </>
    ),
  },
  {
    title: "Payment Processing Fees & Taxes",
    body: (
      <>
        <p>Belize requires a <strong>12.5% Government Sales Tax (GST)</strong>.</p>
        <ul>
          <li>Credit card payments are subject to the applicable 12.5% GST.</li>
          <li>Guests will be informed of any applicable taxes or payment-related charges before completing their reservation.</li>
        </ul>
      </>
    ),
  },
  {
    title: "Health & Medical Disclosure",
    body: (
      <>
        <p><strong>Guest safety is extremely important to us.</strong></p>
        <p>Guests must inform Belize Masters Tours before the tour date if any participant:</p>
        <ul>
          <li>Is pregnant</li>
          <li>Has diabetes</li>
          <li>Has severe allergies</li>
          <li>Has medical conditions</li>
          <li>Is taking medication that may affect participation</li>
          <li>Has any health concerns that may impact their ability to safely participate</li>
        </ul>
        <p>
          For certain medical conditions, guests may be required to provide medical clearance or a
          doctor's endorsement confirming participation is safe.
        </p>
        <p>
          Belize Masters Tours cannot be held responsible for risks, injuries, complications, or
          inability to participate resulting from medical conditions that were not disclosed before
          the tour.
        </p>
      </>
    ),
  },
  {
    title: "Guest Responsibility",
    body: (
      <>
        <p>Guests are responsible for:</p>
        <ul>
          <li>Providing accurate booking information</li>
          <li>Arriving on time</li>
          <li>Following safety instructions provided by guides</li>
          <li>Informing staff of medical conditions or concerns</li>
          <li>Following local regulations and tour guidelines</li>
        </ul>
        <p>
          Failure to follow safety instructions may result in removal from the activity without
          refund if necessary for guest or group safety.
        </p>
      </>
    ),
  },
  {
    title: "Changes to Reservations",
    body: (
      <>
        <p>Guests may request changes to:</p>
        <ul>
          <li>Tour dates</li>
          <li>Number of participants</li>
          <li>Tour preferences</li>
        </ul>
        <p>Requests are subject to availability and cannot be guaranteed.</p>
      </>
    ),
  },
  {
    title: "Force Majeure / Unforeseen Events",
    body: (
      <>
        <p>
          Belize Masters Tours is not responsible for cancellations or delays caused by
          circumstances outside our reasonable control, including but not limited to:
        </p>
        <ul>
          <li>Natural disasters</li>
          <li>Government restrictions</li>
          <li>Airport closures</li>
          <li>Extreme weather events</li>
          <li>Unforeseen emergencies</li>
          <li>Other events beyond our control</li>
        </ul>
        <p>
          Belize Masters Tours will make reasonable efforts to assist guests with alternative
          arrangements whenever possible.
        </p>
      </>
    ),
  },
  {
    title: "Travel Insurance",
    body: (
      <p>
        Guests are encouraged to purchase travel insurance to protect against unexpected
        circumstances, including illness, emergencies, travel delays, or personal reasons preventing
        participation.
      </p>
    ),
  },
];

function CancellationPolicy() {
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-20 border-b border-border bg-deep">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8">
          <Link to="/" className="flex items-center gap-2 text-white">
            <span className="grid h-9 w-9 place-items-center rounded-full gradient-sun font-display text-lg font-black text-deep">
              B
            </span>
            <span className="font-display text-lg font-bold tracking-tight">
              Belize Masters Tours
            </span>
          </Link>
          <div className="hidden items-center gap-8 text-sm font-medium text-white/90 md:flex">
            <Link to="/" className="hover:text-white">Home</Link>
            <Link to="/" hash="tours" className="hover:text-white">Tours</Link>
            <Link to="/" hash="contact" className="hover:text-white">Contact</Link>
            <Link to="/cancellation-policy" className="text-white">Cancellation Policy</Link>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="hidden rounded-full gradient-sun px-4 py-2 text-sm font-semibold text-deep shadow-lg shadow-black/20 transition hover:scale-105 sm:inline-block"
            >
              Book Now
            </a>
            <button
              type="button"
              aria-label="Open menu"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
              className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white backdrop-blur md:hidden"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="pointer-events-none h-5 w-5">
                <path d={mobileOpen ? "M18 6L6 18M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </nav>
        {mobileOpen && (
          <div className="border-t border-white/10 bg-deep px-5 pb-6 pt-4 md:hidden">
            <div className="flex flex-col gap-3 text-base font-medium text-white/90">
              <Link to="/" onClick={() => setMobileOpen(false)} className="py-1 hover:text-white">Home</Link>
              <Link to="/" hash="tours" onClick={() => setMobileOpen(false)} className="py-1 hover:text-white">Tours</Link>
              <Link to="/" hash="contact" onClick={() => setMobileOpen(false)} className="py-1 hover:text-white">Contact</Link>
              <Link to="/cancellation-policy" onClick={() => setMobileOpen(false)} className="py-1 text-white">Cancellation Policy</Link>
            </div>
          </div>
        )}
      </header>

      <section className="relative overflow-hidden gradient-sun">
        <div className="mx-auto max-w-4xl px-5 py-16 sm:px-8 sm:py-20 text-deep">
          <p className="text-xs font-semibold uppercase tracking-[0.2em]">Booking Terms</p>
          <h1 className="mt-3 font-display text-4xl font-black leading-tight sm:text-5xl">
            Cancellation Policy
          </h1>
          <p className="mt-4 max-w-2xl text-deep/80">
            Clear, fair, and easy to understand. Please review our booking, cancellation, weather,
            and safety terms before your Belize Masters Tours adventure.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-14 sm:px-8">
        <div className="rounded-3xl bg-card p-6 shadow-sm ring-1 ring-border sm:p-10">
          <Accordion type="multiple" defaultValue={["item-0"]} className="w-full">
            {sections.map((s, i) => (
              <AccordionItem key={s.title} value={`item-${i}`}>
                <AccordionTrigger className="text-left font-display text-lg font-bold sm:text-xl">
                  {s.title}
                </AccordionTrigger>
                <AccordionContent className="prose prose-sm max-w-none text-base leading-relaxed text-foreground/90 [&_ul]:my-3 [&_ul]:list-disc [&_ul]:pl-6 [&_p]:my-3">
                  {s.body}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-8 grid gap-4 rounded-2xl bg-secondary p-6 text-sm sm:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Primary phone</p>
            <a href={`tel:${PHONE}`} className="mt-1 block font-semibold text-foreground hover:underline">
              {PHONE_DISPLAY}
            </a>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Secondary phone</p>
            <a href={`tel:${PHONE_SECONDARY}`} className="mt-1 block font-semibold text-foreground hover:underline">
              {PHONE_SECONDARY_DISPLAY}
            </a>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden pb-20">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <div className="relative overflow-hidden rounded-3xl gradient-sun p-8 sm:p-14 text-deep">
            <h2 className="font-display text-3xl font-black leading-tight text-balance sm:text-4xl">
              Have questions about your reservation?
            </h2>
            <p className="mt-3 max-w-xl text-deep/80">
              Our team is happy to help you plan, change, or reschedule your Belize adventure.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-deep px-6 py-3 text-sm font-bold text-white shadow-lg transition hover:scale-105"
              >
                Book on WhatsApp
              </a>
              <Link
                to="/"
                hash="contact"
                className="rounded-full bg-white/90 px-6 py-3 text-sm font-bold text-deep shadow transition hover:bg-white"
              >
                Contact Us
              </Link>
              <Link
                to="/"
                hash="tours"
                className="rounded-full border-2 border-deep px-6 py-3 text-sm font-bold text-deep transition hover:bg-deep hover:text-white"
              >
                View Tours
              </Link>
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
          <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-4">
            <Link to="/cancellation-policy" className="hover:text-white">Cancellation Policy</Link>
            <p>© {new Date().getFullYear()} Belize Masters Tours · San Pedro, Belize</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
