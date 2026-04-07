export default function CTABlock({
  headline,
  subtext,
  primaryLabel = "Get Tickets",
  primaryHref = "#events",
  secondaryLabel = "Partner With Us",
  secondaryHref = "mailto:partnerships@globalkickoff.com",
  centered = true,
}) {
  return (
    <div className={`flex flex-col gap-6 ${centered ? "items-center text-center" : "items-start"}`}>
      {headline && (
        <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-brand-white leading-none">
          {headline}
        </h2>
      )}
      {subtext && (
        <p className="text-brand-muted font-body text-lg max-w-2xl">{subtext}</p>
      )}
      <div className="flex flex-wrap gap-4 mt-2">
        <a href={primaryHref} className="btn-primary text-base">
          {primaryLabel}
        </a>
        <a href={secondaryHref} className="btn-secondary text-base">
          {secondaryLabel}
        </a>
      </div>
    </div>
  );
}
