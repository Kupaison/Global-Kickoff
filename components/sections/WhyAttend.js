const reasons = [
  {
    number: "01",
    title: "The Screen. The Sound. The Moment.",
    desc: "We source venues with massive projection walls, premium sound systems, and layouts built for crowd energy — not bar stools.",
    accent: "green",
  },
  {
    number: "02",
    title: "A DJ Who Knows the Room.",
    desc: "From pre-match hype to post-goal euphoria, our DJs read the crowd and dial up the energy exactly when it's needed.",
    accent: "gold",
  },
  {
    number: "03",
    title: "Flags. Colors. Fan Identity.",
    desc: "Wear your country. Wave your flag. GLOBAL KICKOFF™ is designed for genuine fan culture — not corporate blandness.",
    accent: "green",
  },
  {
    number: "04",
    title: "VIP or GA — Both Exceptional.",
    desc: "General admission puts you in the crowd energy. VIP gives you reserved seating, bottle service, and front-row sightlines.",
    accent: "gold",
  },
  {
    number: "05",
    title: "Crafted Food & Drink.",
    desc: "Full bar. Elevated bites. Drinks named after goal-scoring nations. The full experience, not just the match.",
    accent: "green",
  },
  {
    number: "06",
    title: "You'll Never Forget This.",
    desc: "When the final whistle blows, you were there. In the crowd. Surrounded by strangers who became fans together.",
    accent: "gold",
  },
];

export default function WhyAttend() {
  return (
    <section id="why" className="relative py-28 overflow-hidden">
      {/* Decorative large text background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden select-none">
        <span className="font-display text-[20vw] text-white/[0.015] whitespace-nowrap tracking-widest">
          GAME DAY
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-2xl mb-20 reveal">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-px bg-brand-green" />
            <span className="font-mono text-xs tracking-[0.4em] text-brand-green uppercase">
              Why Show Up
            </span>
          </div>
          <h2 className="font-display text-[clamp(44px,6vw,80px)] leading-none text-brand-white">
            SIX REASONS<br />
            TO BE <span className="text-gradient-green">THERE.</span>
          </h2>
        </div>

        {/* Reasons — alternating layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5">
          {reasons.map((r, i) => (
            <div
              key={r.number}
              className={`bg-brand-black p-8 md:p-10 flex flex-col gap-4 group hover:bg-brand-dark transition-colors duration-300 reveal reveal-delay-${Math.min(i + 1, 6)}`}
            >
              <div className="flex items-start gap-4">
                <span
                  className={`font-display text-5xl leading-none flex-shrink-0 transition-all duration-300
                    ${r.accent === "green"
                      ? "text-brand-green/30 group-hover:text-brand-green/60"
                      : "text-brand-gold/30 group-hover:text-brand-gold/60"
                    }
                  `}
                >
                  {r.number}
                </span>
                <div className="flex flex-col gap-2 pt-1">
                  <h3 className="font-display text-xl md:text-2xl text-brand-white tracking-wide leading-tight">
                    {r.title}
                  </h3>
                  <p className="font-body text-brand-muted text-sm leading-relaxed">{r.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-6 border border-white/5 bg-brand-dark/40 p-8 rounded-sm reveal">
          <div>
            <p className="font-display text-2xl text-brand-white tracking-wide">
              Ready to experience it?
            </p>
            <p className="font-mono text-xs text-brand-muted mt-1 tracking-wider">
              Limited tickets available for Jacksonville's first series.
            </p>
          </div>
          <a href="#events" className="btn-primary flex-shrink-0">
            Secure Your Spot
          </a>
        </div>
      </div>
    </section>
  );
}
