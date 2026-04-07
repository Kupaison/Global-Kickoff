const socials = [
  { label: "Instagram", href: "https://instagram.com/globalkickoff", icon: "IG" },
  { label: "TikTok", href: "https://tiktok.com/@globalkickoff", icon: "TK" },
  { label: "Twitter/X", href: "https://twitter.com/globalkickoff", icon: "𝕏" },
  { label: "YouTube", href: "https://youtube.com/@globalkickoff", icon: "YT" },
];

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Events", href: "#events" },
  { label: "Cities", href: "#cities" },
  { label: "Partners", href: "#partners" },
  { label: "Contact", href: "mailto:hello@globalkickoff.com" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-brand-black overflow-hidden">
      {/* Ticker strip at top of footer */}
      <div className="border-b border-white/5 overflow-hidden py-3 bg-brand-dark/30">
        <div className="marquee-track">
          {Array(20)
            .fill(null)
            .map((_, i) => (
              <span key={i} className="flex items-center flex-shrink-0">
                <span className="font-display text-sm text-white/10 tracking-[0.5em] uppercase whitespace-nowrap mx-4">
                  GLOBAL KICKOFF™
                </span>
                <span className="text-brand-green/20 mx-3">⚽</span>
              </span>
            ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand col */}
          <div className="flex flex-col gap-5 md:col-span-1">
            <div>
              <div className="font-display text-3xl tracking-wider">
                <span className="text-brand-green">GLOBAL</span>{" "}
                <span className="text-brand-white">KICKOFF</span>
                <span className="text-brand-gold">™</span>
              </div>
              <p className="font-mono text-xs tracking-[0.3em] text-brand-muted/60 uppercase mt-1">
                Live. Loud. Global.
              </p>
            </div>
            <p className="font-body text-brand-muted text-sm leading-relaxed max-w-xs">
              The premier World Cup watch party series. Starting in Jacksonville, FL — expanding everywhere.
            </p>
            <div className="flex items-center gap-3 mt-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 flex items-center justify-center border border-white/10 font-mono text-xs text-brand-muted hover:border-brand-green/50 hover:text-brand-green transition-all duration-300"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links col */}
          <div className="flex flex-col gap-4">
            <h4 className="font-mono text-xs tracking-[0.4em] text-brand-muted/60 uppercase mb-2">
              Navigation
            </h4>
            {footerLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="font-body text-sm text-brand-muted hover:text-brand-white transition-colors duration-300 w-fit"
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Contact col */}
          <div className="flex flex-col gap-4">
            <h4 className="font-mono text-xs tracking-[0.4em] text-brand-muted/60 uppercase mb-2">
              Get In Touch
            </h4>
            <div className="flex flex-col gap-3 font-body text-sm text-brand-muted">
              <div>
                <p className="text-brand-white/40 font-mono text-xs tracking-widest uppercase mb-1">
                  General
                </p>
                <a
                  href="mailto:hello@globalkickoff.com"
                  className="hover:text-brand-white transition-colors duration-300"
                >
                  hello@globalkickoff.com
                </a>
              </div>
              <div>
                <p className="text-brand-white/40 font-mono text-xs tracking-widest uppercase mb-1">
                  Partnerships
                </p>
                <a
                  href="mailto:partnerships@globalkickoff.com"
                  className="hover:text-brand-white transition-colors duration-300"
                >
                  partnerships@globalkickoff.com
                </a>
              </div>
              <div>
                <p className="text-brand-white/40 font-mono text-xs tracking-widest uppercase mb-1">
                  Venue Inquiries
                </p>
                <a
                  href="mailto:venues@globalkickoff.com"
                  className="hover:text-brand-white transition-colors duration-300"
                >
                  venues@globalkickoff.com
                </a>
              </div>
              <div className="pt-2">
                <p className="text-brand-white/40 font-mono text-xs tracking-widest uppercase mb-1">
                  Based In
                </p>
                <span>Jacksonville, FL 🏴</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs text-brand-muted/40 tracking-wider">
            © {new Date().getFullYear()} GLOBAL KICKOFF™. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="font-mono text-xs text-brand-muted/40 hover:text-brand-muted tracking-wider transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="font-mono text-xs text-brand-muted/40 hover:text-brand-muted tracking-wider transition-colors duration-300"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
