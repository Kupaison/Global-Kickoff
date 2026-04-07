const items = [
  "World Cup 2026",
  "Jacksonville",
  "Live DJ",
  "Big Screen",
  "VIP Experience",
  "International Crowd",
  "Global Football",
  "Massive Venues",
  "Fan Zones",
  "Country Pride",
  "Sold Out Events",
  "Premium Nightlife",
];

const Dot = () => (
  <span className="inline-block w-1.5 h-1.5 rounded-full bg-brand-green mx-6 flex-shrink-0 relative top-px" />
);

export default function Ticker() {
  const doubled = [...items, ...items];

  return (
    <div className="relative overflow-hidden border-y border-white/5 py-3 bg-brand-dark/60">
      {/* Green left fade */}
      <div className="absolute left-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-r from-brand-dark to-transparent pointer-events-none" />
      {/* Right fade */}
      <div className="absolute right-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-l from-brand-dark to-transparent pointer-events-none" />

      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center flex-shrink-0">
            <span className="font-mono text-xs tracking-[0.3em] text-brand-muted uppercase whitespace-nowrap">
              {item}
            </span>
            <Dot />
          </span>
        ))}
      </div>
    </div>
  );
}
