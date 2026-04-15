import EventCard from "@/components/ui/EventCard";

// ── EDIT THIS DATA to update events ──
const EVENTS = [
  {
    city: "Jacksonville",
    venue: "TBA — Downtown Jacksonville",
    match: "USA vs TBD — Group Stage",
    date: "June 2026 — TBA",
    time: "Doors 5:00 PM · Kickoff 6:00 PM",
    badge: "FLAGSHIP",
    ticketUrl: "https://tickets.globalkickoff.live", // Replace with your actual Eventbrite link
    soldOut: false,
    featured: true,
  },
  {
    city: "Jacksonville",
    venue: "TBA — Riverside District",
    match: "England vs France — Round of 16",
    date: "July 2026 — TBA",
    time: "Doors 6:00 PM · Kickoff 9:00 PM",
    badge: "VIP ONLY",
    ticketUrl: "https://tickets.globalkickoff.live",
    soldOut: false,
    featured: false,
  },
  {
    city: "Jacksonville",
    venue: "TBA — St. Johns Town Center",
    match: "World Cup Final — Watch Party",
    date: "July 19, 2026",
    time: "Doors 10:00 AM · Kickoff 12:00 PM",
    badge: "FINAL",
    ticketUrl: "https://tickets.globalkickoff.live",
    soldOut: false,
    featured: false,
  },
];

export default function Events() {
  return (
    <section id="events" className="relative py-28 bg-brand-dark/40 overflow-hidden">
      {/* Gold accent glow */}
      <div
        className="absolute right-0 top-1/3 w-96 h-96 pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(212,175,55,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 reveal">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-px bg-brand-gold" />
              <span className="font-mono text-xs tracking-[0.4em] text-brand-gold uppercase">
                Jacksonville, FL · 2026
              </span>
            </div>
            <h2 className="font-display text-[clamp(44px,6vw,80px)] leading-none text-brand-white">
              UPCOMING<br />
              <span className="text-gradient-gold">EVENTS</span>
            </h2>
          </div>
          <p className="font-body text-brand-muted text-base max-w-sm md:text-right leading-relaxed">
            Jacksonville's flagship World Cup watch party series. Secure your spot before it's gone — these fill fast.
          </p>
        </div>

        {/* Event cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {EVENTS.map((event, i) => (
            <div key={i} className={`reveal reveal-delay-${i + 1}`}>
              <EventCard {...event} />
            </div>
          ))}
        </div>

        {/* Alert bar */}
        <div className="mt-12 border border-brand-green/20 bg-brand-green/5 rounded-sm p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4 reveal">
          <span className="text-2xl">🔔</span>
          <div className="flex-1">
            <p className="font-display text-lg text-brand-white tracking-wide">
              More events dropping soon.
            </p>
            <p className="font-mono text-xs text-brand-muted mt-1 tracking-wider">
              Get on the list to be first in line for new cities and match drops.
            </p>
          </div>
          <a href="#notify" className="btn-outline-green flex-shrink-0 text-sm">
            Notify Me
          </a>
        </div>
      </div>
    </section>
  );
}
