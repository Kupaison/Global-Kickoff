const pillars = [
  {
    icon: "🎧",
    title: "Live DJ Sets",
    desc: "International anthems, live mixing, and energy that doesn't stop from first whistle to final trophy.",
  },
  {
    icon: "📺",
    title: "Cinematic Screens",
    desc: "Giant HD displays positioned for every angle. You'll see every tackle, every goal, every heartbreak.",
  },
  {
    icon: "🌍",
    title: "Global Crowd",
    desc: "Fans repping every nation. Your section, their section — all under one roof. Pure football culture.",
  },
  {
    icon: "👑",
    title: "VIP Sections",
    desc: "Reserved areas, bottle service, premium sightlines. Experience the World Cup the way it deserves.",
  },
  {
    icon: "🍻",
    title: "Full Bar & Food",
    desc: "Curated menus, craft cocktails, and international bites that match the global energy of the night.",
  },
  {
    icon: "🎉",
    title: "Themed Nights",
    desc: "Every match is an event. Dress your colors, bring your flags, and turn a watch party into a movement.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-28 overflow-hidden">
      {/* Background accent */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 opacity-30 pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(57,255,20,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="max-w-3xl mb-20 reveal">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-px bg-brand-green" />
            <span className="font-mono text-xs tracking-[0.4em] text-brand-green uppercase">
              The Experience
            </span>
          </div>
          <h2 className="font-display text-[clamp(48px,7vw,96px)] leading-none text-brand-white mb-6">
            THIS ISN'T{" "}
            <span className="text-gradient-green">
              JUST
            </span>
            <br />
            A WATCH PARTY.
          </h2>
          <p className="font-body text-brand-muted text-xl leading-relaxed">
            GLOBAL KICKOFF™ is a premium live event series built for the world's biggest football moment. We take the raw electricity of the World Cup and turn it into an immersive, nightlife-grade experience unlike anything in your city.
          </p>
        </div>

        {/* Pillars grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {pillars.map((p, i) => (
            <div
              key={p.title}
              className={`card-dark rounded-sm p-7 flex flex-col gap-4 reveal reveal-delay-${Math.min(i + 1, 6)}`}
            >
              <div className="text-3xl">{p.icon}</div>
              <div>
                <h3 className="font-display text-xl text-brand-white tracking-wide mb-2">
                  {p.title}
                </h3>
                <p className="font-body text-brand-muted text-sm leading-relaxed">{p.desc}</p>
              </div>
              <div className="mt-auto pt-4 border-t border-white/5">
                <div className="w-8 h-px bg-brand-green/40" />
              </div>
            </div>
          ))}
        </div>

        {/* Pull quote */}
        <div className="mt-20 reveal">
          <blockquote className="relative border-l-2 border-brand-green pl-8 max-w-2xl">
            <p className="font-display text-3xl md:text-4xl text-brand-white/80 leading-tight">
              "When the world watches, we watch{" "}
              <span className="text-gradient-green">together</span>."
            </p>
            <cite className="mt-4 block font-mono text-xs tracking-widest text-brand-muted uppercase not-italic">
              — Global Kickoff™
            </cite>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
