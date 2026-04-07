export default function EventCard({
  city,
  venue,
  match,
  date,
  time,
  badge,
  ticketUrl = "#",
  soldOut = false,
  featured = false,
}) {
  return (
    <div
      className={`card-dark relative rounded-sm overflow-hidden group ${
        featured ? "border-green-glow" : ""
      }`}
    >
      {/* Top accent line */}
      <div
        className={`absolute top-0 left-0 right-0 h-0.5 ${
          featured
            ? "bg-gradient-to-r from-transparent via-brand-green to-transparent"
            : "bg-gradient-to-r from-transparent via-brand-gold/40 to-transparent"
        }`}
      />

      {/* Badge */}
      {badge && (
        <div className="absolute top-4 right-4">
          <span className="font-mono text-xs tracking-widest px-3 py-1 bg-brand-green text-brand-black font-medium">
            {badge}
          </span>
        </div>
      )}

      {/* Visual block */}
      <div className={`h-40 relative overflow-hidden ${featured ? "bg-green-glow" : "bg-gold-glow"}`}>
        <div
          className={`absolute inset-0 ${
            featured
              ? "bg-gradient-to-br from-brand-green/10 via-transparent to-brand-black/80"
              : "bg-gradient-to-br from-brand-gold/8 via-transparent to-brand-black/80"
          }`}
        />
        {/* Decorative soccer ball motif */}
        <div className="absolute inset-0 flex items-center justify-center opacity-10">
          <span className="font-display text-9xl text-brand-white select-none">⚽</span>
        </div>
        {/* City name watermark */}
        <div className="absolute bottom-3 left-4">
          <span className="font-display text-4xl text-brand-white/20 tracking-widest uppercase">
            {city}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col gap-4">
        <div>
          <div className="font-mono text-xs tracking-[0.3em] text-brand-green uppercase mb-1">
            {city}, FL
          </div>
          <h3 className="font-display text-2xl text-brand-white tracking-wide leading-tight">
            {match}
          </h3>
        </div>

        <div className="flex flex-col gap-2 text-sm font-mono text-brand-muted">
          <div className="flex items-center gap-2">
            <span className="text-brand-gold">📍</span>
            <span>{venue}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-brand-gold">📅</span>
            <span>{date}</span>
          </div>
          {time && (
            <div className="flex items-center gap-2">
              <span className="text-brand-gold">🕐</span>
              <span>{time}</span>
            </div>
          )}
        </div>

        <div className="pt-2 border-t border-white/5">
          {soldOut ? (
            <button
              disabled
              className="w-full py-3 font-display tracking-widest text-sm text-brand-muted border border-white/10 cursor-not-allowed"
            >
              SOLD OUT
            </button>
          ) : (
            <a
              href={ticketUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`block w-full text-center py-3 font-display tracking-widest text-sm transition-all duration-300 ${
                featured
                  ? "bg-brand-green text-brand-black hover:bg-brand-green/90 hover:shadow-[0_0_30px_rgba(57,255,20,0.4)]"
                  : "border border-brand-gold/40 text-brand-gold hover:bg-brand-gold/10 hover:border-brand-gold/80"
              }`}
            >
              GET TICKETS →
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
