const partnerBenefits = [
  {
    icon: "👥",
    stat: "5,000+",
    label: "Attendees Per Market",
    desc: "Reach a captive, high-energy audience across every event in the series.",
  },
  {
    icon: "🌐",
    stat: "8+ Cities",
    label: "Multi-City Visibility",
    desc: "One partnership, national reach. Your brand appears across every market we activate.",
  },
  {
    icon: "📱",
    stat: "100K+",
    label: "Social Impressions",
    desc: "Content from every event reaches fans before, during, and after — organic and amplified.",
  },
  {
    icon: "🏆",
    stat: "32 Nations",
    label: "Diverse Demographics",
    desc: "Tap into a genuinely multicultural audience united by the world's biggest sporting event.",
  },
];

const tiers = [
  {
    name: "Venue Partner",
    highlight: false,
    features: [
      "Exclusive venue deal structure",
      "Revenue share on ticket sales",
      "Co-branded event promotion",
      "Social media tagging & features",
      "Post-event performance report",
    ],
    cta: "Apply as Venue",
    href: "mailto:venues@globalkickoff.com",
  },
  {
    name: "Title Sponsor",
    highlight: true,
    features: [
      "Brand name in event title",
      "Stage & screen logo placement",
      "Staff and activation presence",
      "VIP table at every event",
      "Social content collaboration",
      "Multi-city campaign rollout",
      "Dedicated partnership report",
    ],
    cta: "Become Title Sponsor",
    href: "mailto:partnerships@globalkickoff.com",
  },
  {
    name: "Brand Partner",
    highlight: false,
    features: [
      "Logo on all marketing materials",
      "On-site branded activation space",
      "Product/sampling opportunity",
      "Sponsored social posts",
      "Event photography usage rights",
    ],
    cta: "Get Partnership Info",
    href: "mailto:partnerships@globalkickoff.com",
  },
];

export default function Partners() {
  return (
    <section id="partners" className="relative py-28 overflow-hidden">
      {/* Gold top glow */}
      <div
        className="absolute top-0 right-1/4 w-[600px] h-64 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(212,175,55,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mb-20 reveal">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-px bg-brand-gold" />
            <span className="font-mono text-xs tracking-[0.4em] text-brand-gold uppercase">
              For Brands & Venues
            </span>
          </div>
          <h2 className="font-display text-[clamp(44px,6vw,80px)] leading-none text-brand-white mb-6">
            PARTNER WITH<br />
            <span className="text-gradient-gold">GLOBAL KICKOFF™</span>
          </h2>
          <p className="font-body text-brand-muted text-xl leading-relaxed">
            The World Cup only happens every four years. The brands and venues that show up now will own the conversation. Here's your seat at the table.
          </p>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {partnerBenefits.map((b, i) => (
            <div
              key={b.label}
              className={`card-dark rounded-sm p-6 text-center flex flex-col items-center gap-3 reveal reveal-delay-${i + 1}`}
            >
              <span className="text-3xl">{b.icon}</span>
              <span className="font-display text-3xl text-brand-gold">{b.stat}</span>
              <span className="font-display text-sm text-brand-white tracking-wide">{b.label}</span>
              <p className="font-body text-brand-muted text-xs leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>

        {/* Tiers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
          {tiers.map((tier, i) => (
            <div
              key={tier.name}
              className={`rounded-sm flex flex-col reveal reveal-delay-${i + 1}
                ${tier.highlight
                  ? "border-gold-glow bg-brand-gold/5 relative"
                  : "card-dark"
                }
              `}
            >
              {tier.highlight && (
                <>
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-brand-gold text-brand-black font-mono text-xs tracking-widest font-medium whitespace-nowrap">
                    MOST POPULAR
                  </div>
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold to-transparent" />
                </>
              )}

              <div className="p-7 flex flex-col flex-1 gap-6">
                <div>
                  <h3 className={`font-display text-2xl tracking-wide mb-1 ${tier.highlight ? "text-brand-gold" : "text-brand-white"}`}>
                    {tier.name}
                  </h3>
                  <div className="w-8 h-px bg-brand-gold/30" />
                </div>

                <ul className="flex flex-col gap-3 flex-1">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <span className={`flex-shrink-0 mt-0.5 text-xs ${tier.highlight ? "text-brand-gold" : "text-brand-green"}`}>
                        ✓
                      </span>
                      <span className="font-body text-brand-muted text-sm leading-relaxed">{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={tier.href}
                  className={`mt-auto block text-center py-3 font-display tracking-widest text-sm transition-all duration-300 ${
                    tier.highlight
                      ? "bg-brand-gold text-brand-black hover:bg-brand-gold-light hover:shadow-[0_0_30px_rgba(212,175,55,0.4)]"
                      : "border border-white/10 text-brand-white hover:border-white/30 hover:bg-white/5"
                  }`}
                >
                  {tier.cta} →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Contact strip */}
        <div className="border-t border-white/5 pt-12 text-center reveal">
          <p className="font-body text-brand-muted mb-2">
            Custom partnership packages available for agencies and national brands.
          </p>
          <a
            href="mailto:partnerships@globalkickoff.com"
            className="font-mono text-sm text-brand-gold hover:text-brand-gold-light transition-colors duration-300 tracking-widest underline underline-offset-4"
          >
            partnerships@globalkickoff.com
          </a>
        </div>
      </div>
    </section>
  );
}
