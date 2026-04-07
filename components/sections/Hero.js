import CTABlock from "@/components/ui/CTABlock";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden noise-overlay"
    >
      {/* ── Background layers ── */}
      <div className="absolute inset-0 bg-brand-black" />

      {/* Radial glow — green top */}
      <div
        className="orb w-[700px] h-[700px] -top-48 left-1/2 -translate-x-1/2"
        style={{ background: "radial-gradient(circle, rgba(57,255,20,0.12) 0%, transparent 70%)" }}
      />
      {/* Radial glow — gold bottom-right */}
      <div
        className="orb w-[500px] h-[500px] bottom-0 right-0 translate-x-1/3 translate-y-1/3 animate-[float_10s_ease-in-out_infinite]"
        style={{ background: "radial-gradient(circle, rgba(212,175,55,0.08) 0%, transparent 70%)" }}
      />

      {/* Grid texture */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Diagonal accent line */}
      <div
        className="absolute bottom-0 left-0 w-full h-px opacity-20"
        style={{
          background: "linear-gradient(90deg, transparent 0%, rgba(57,255,20,0.6) 40%, rgba(212,175,55,0.4) 70%, transparent 100%)",
        }}
      />

      {/* ── Content ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20 flex flex-col gap-8">
        {/* Pre-label */}
        <div className="flex items-center gap-3 animate-[fadeIn_0.6s_ease_forwards]">
          <div className="w-8 h-px bg-brand-green" />
          <span className="font-mono text-xs tracking-[0.4em] text-brand-green uppercase">
            World Cup 2026 · Official Watch Party Series
          </span>
        </div>

        {/* Main headline */}
        <div className="flex flex-col gap-0 animate-[fadeUp_0.7s_ease_0.1s_forwards] opacity-0">
          <h1 className="font-display leading-none text-[clamp(72px,12vw,160px)] text-brand-white tracking-tight">
            GLOBAL
          </h1>
          <div className="flex items-end gap-4">
            <h1 className="font-display leading-none text-[clamp(72px,12vw,160px)] text-gradient-green tracking-tight">
              KICKOFF
            </h1>
            <span className="font-display text-brand-gold text-[clamp(24px,3vw,48px)] mb-2 md:mb-4">
              ™
            </span>
          </div>
        </div>

        {/* Tagline */}
        <div className="animate-[fadeUp_0.7s_ease_0.25s_forwards] opacity-0">
          <p className="font-display text-[clamp(20px,4vw,40px)] text-brand-white/60 tracking-[0.25em]">
            Live.&nbsp; Loud.&nbsp; Global.
          </p>
        </div>

        {/* Supporting copy */}
        <p className="max-w-xl font-body text-brand-muted text-lg leading-relaxed animate-[fadeUp_0.7s_ease_0.35s_forwards] opacity-0">
          The most electric World Cup watch parties in America. Premium venues, live DJs, giant screens, and a crowd that brings the world to your city.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 animate-[fadeUp_0.7s_ease_0.45s_forwards] opacity-0">
          <a href="#events" className="btn-primary text-base">
            ⚽ Get Tickets
          </a>
          <a href="mailto:partnerships@globalkickoff.com" className="btn-secondary text-base">
            Partner With Us
          </a>
        </div>

        {/* Stats row */}
        <div className="flex flex-wrap gap-8 pt-8 border-t border-white/5 mt-4 animate-[fadeUp_0.7s_ease_0.55s_forwards] opacity-0">
          {[
            { value: "8+", label: "Cities Launching" },
            { value: "32", label: "Nations Represented" },
            { value: "5K+", label: "Fans Expected" },
            { value: "2026", label: "World Cup Year" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1">
              <span className="font-display text-3xl text-brand-green">{stat.value}</span>
              <span className="font-mono text-xs tracking-widest text-brand-muted uppercase">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-[fadeIn_1s_ease_1s_forwards] opacity-0">
        <span className="font-mono text-xs tracking-widest text-brand-muted/40 uppercase">
          Scroll
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-brand-muted/40 to-transparent" />
      </div>
    </section>
  );
}
