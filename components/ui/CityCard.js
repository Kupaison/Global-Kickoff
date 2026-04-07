export default function CityCard({ city, state, flag, status = "coming-soon", index = 0 }) {
  const isActive = status === "active";
  const isNext = status === "next";

  return (
    <div
      className={`relative group overflow-hidden rounded-sm transition-all duration-500 cursor-default
        ${isActive ? "border-green-glow bg-brand-green/5" : "card-dark"}
        ${isNext ? "border-gold-glow" : ""}
      `}
    >
      {/* Top line */}
      <div
        className={`absolute top-0 left-0 right-0 h-px transition-all duration-500
          ${isActive
            ? "bg-brand-green opacity-100"
            : "bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100"
          }
        `}
      />

      <div className="p-5 flex items-center gap-4">
        {/* Flag / emoji */}
        <div
          className={`w-12 h-12 flex items-center justify-center text-2xl rounded-sm flex-shrink-0 transition-transform duration-300 group-hover:scale-110
            ${isActive ? "bg-brand-green/20" : "bg-white/5"}
          `}
        >
          {flag}
        </div>

        {/* Info */}
        <div className="flex-1 min-w-0">
          <div className="font-display text-xl text-brand-white tracking-wide">{city}</div>
          <div className="font-mono text-xs text-brand-muted tracking-widest uppercase">{state}</div>
        </div>

        {/* Status */}
        <div className="flex-shrink-0">
          {isActive ? (
            <span className="flex items-center gap-1.5 font-mono text-xs text-brand-green tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse" />
              LIVE
            </span>
          ) : isNext ? (
            <span className="font-mono text-xs text-brand-gold tracking-wider">NEXT</span>
          ) : (
            <span className="font-mono text-xs text-brand-muted/50 tracking-wider">SOON</span>
          )}
        </div>
      </div>
    </div>
  );
}
