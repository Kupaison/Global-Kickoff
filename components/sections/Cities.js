import CityCard from "@/components/ui/CityCard";

// ── EDIT THIS DATA to update city expansion list ──
const CITIES = [
  { city: "Jacksonville", state: "Florida", flag: "🏴", status: "active" },
  { city: "Miami", state: "Florida", flag: "🌴", status: "next" },
  { city: "Orlando", state: "Florida", flag: "🎡", status: "coming-soon" },
  { city: "Tampa", state: "Florida", flag: "⚡", status: "coming-soon" },
  { city: "Atlanta", state: "Georgia", flag: "🍑", status: "coming-soon" },
  { city: "Houston", state: "Texas", flag: "🤠", status: "coming-soon" },
  { city: "Los Angeles", state: "California", flag: "🌆", status: "coming-soon" },
  { city: "New York", state: "New York", flag: "🗽", status: "coming-soon" },
];

export default function Cities() {
  return (
    <section id="cities" className="relative py-28 bg-brand-dark/30 overflow-hidden">
      {/* Background orbs */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(57,255,20,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-16 reveal">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-px bg-brand-green" />
              <span className="font-mono text-xs tracking-[0.4em] text-brand-green uppercase">
                The Expansion
              </span>
            </div>
            <h2 className="font-display text-[clamp(44px,6vw,80px)] leading-none text-brand-white">
              ONE BRAND.<br />
              <span className="text-gradient-green">EVERY CITY.</span>
            </h2>
          </div>
          <p className="font-body text-brand-muted text-lg max-w-md leading-relaxed lg:text-right">
            GLOBAL KICKOFF™ is built to scale. Jacksonville is the launchpad. By the time the World Cup final hits, we'll be in every major market in America.
          </p>
        </div>

        {/* City grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {CITIES.map((city, i) => (
            <div key={city.city} className={`reveal reveal-delay-${Math.min(i + 1, 6)}`}>
              <CityCard {...city} index={i} />
            </div>
          ))}
        </div>

        {/* Movement statement */}
        <div className="mt-20 relative reveal">
          <div className="border border-white/5 bg-brand-dark/50 p-10 md:p-14 text-center relative overflow-hidden">
            {/* Glow */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(57,255,20,0.04) 0%, transparent 70%)",
              }}
            />
            <div className="relative z-10">
              <p className="font-display text-[clamp(28px,5vw,60px)] text-brand-white leading-tight mb-4">
                THIS IS A{" "}
                <span className="text-gradient-green">MOVEMENT</span>.
              </p>
              <p className="font-body text-brand-muted text-lg max-w-xl mx-auto leading-relaxed mb-8">
                Not just a party. Not just a game. A nationwide cultural moment that unites football fans across every background, every city, every nation.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="mailto:cities@globalkickoff.com" className="btn-outline-green">
                  Bring GK to My City
                </a>
                <a href="#notify" className="btn-secondary text-sm px-6 py-3">
                  Join the Waitlist
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Marquee — second one, reversed, with city names */}
        <div className="mt-16 overflow-hidden py-4 border-t border-white/5">
          <div className="marquee-track-reverse">
            {[...CITIES, ...CITIES].map((c, i) => (
              <span key={i} className="flex items-center flex-shrink-0">
                <span className="font-display text-2xl text-white/5 tracking-[0.4em] uppercase whitespace-nowrap mx-6">
                  {c.city}
                </span>
                <span className="text-brand-green/20 text-xl mx-2">⚽</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
