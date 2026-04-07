"use client";

import { useState } from "react";

export default function EmailCapture() {
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setErrorMsg("Please enter a valid email address.");
      return;
    }
    setStatus("loading");
    setErrorMsg("");

    // ── REPLACE THIS with your actual email capture logic ──
    // Options: Mailchimp, ConvertKit, Resend, Supabase insert, etc.
    // Example Mailchimp endpoint: process.env.NEXT_PUBLIC_MAILCHIMP_URL
    try {
      await new Promise((resolve) => setTimeout(resolve, 1200)); // Simulate API call
      setStatus("success");
      setEmail("");
      setCity("");
    } catch {
      setStatus("error");
      setErrorMsg("Something went wrong. Try again.");
    }
  }

  return (
    <section id="notify" className="relative py-28 bg-brand-dark/50 overflow-hidden">
      {/* Green bottom glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-64 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(57,255,20,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-3xl mx-auto px-6 text-center">
        {/* Icon */}
        <div className="reveal mb-6 flex justify-center">
          <div className="w-16 h-16 rounded-sm bg-brand-green/10 border border-brand-green/20 flex items-center justify-center">
            <span className="text-2xl">📣</span>
          </div>
        </div>

        {/* Header */}
        <div className="reveal">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="w-8 h-px bg-brand-green" />
            <span className="font-mono text-xs tracking-[0.4em] text-brand-green uppercase">
              Stay In The Loop
            </span>
            <div className="w-8 h-px bg-brand-green" />
          </div>
          <h2 className="font-display text-[clamp(40px,6vw,72px)] leading-none text-brand-white mb-5">
            DON'T MISS<br />
            <span className="text-gradient-green">YOUR CITY.</span>
          </h2>
          <p className="font-body text-brand-muted text-lg leading-relaxed max-w-xl mx-auto mb-10">
            Be the first to know when we drop new events, pre-sale tickets, and city announcements. Join the GLOBAL KICKOFF™ list now.
          </p>
        </div>

        {/* Form */}
        <div className="reveal reveal-delay-2">
          {status === "success" ? (
            <div className="border border-brand-green/30 bg-brand-green/5 rounded-sm p-8 flex flex-col items-center gap-3">
              <span className="text-4xl">⚽</span>
              <p className="font-display text-2xl text-brand-green tracking-wide">
                You're on the list.
              </p>
              <p className="font-mono text-sm text-brand-muted tracking-wider">
                We'll hit you with drops before anyone else. Stay loud.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3"
              noValidate
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="flex-1 bg-brand-dark border border-white/10 text-brand-white font-mono text-sm tracking-wider px-5 py-4 placeholder:text-brand-muted/40 focus:outline-none focus:border-brand-green/50 focus:shadow-[0_0_20px_rgba(57,255,20,0.1)] transition-all duration-300 rounded-sm"
              />
              <select
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="sm:w-44 bg-brand-dark border border-white/10 text-brand-muted font-mono text-xs tracking-wider px-4 py-4 focus:outline-none focus:border-brand-green/50 transition-all duration-300 rounded-sm appearance-none cursor-pointer"
              >
                <option value="">My City</option>
                <option value="jacksonville">Jacksonville</option>
                <option value="miami">Miami</option>
                <option value="orlando">Orlando</option>
                <option value="tampa">Tampa</option>
                <option value="atlanta">Atlanta</option>
                <option value="houston">Houston</option>
                <option value="la">Los Angeles</option>
                <option value="nyc">New York</option>
                <option value="other">Other</option>
              </select>
              <button
                type="submit"
                disabled={status === "loading"}
                className={`btn-primary whitespace-nowrap px-8 py-4 text-sm transition-all duration-300 ${
                  status === "loading" ? "opacity-60 cursor-wait" : ""
                }`}
              >
                {status === "loading" ? "Joining..." : "Count Me In →"}
              </button>
            </form>
          )}

          {errorMsg && (
            <p className="mt-3 font-mono text-xs text-red-400 tracking-wider">{errorMsg}</p>
          )}

          <p className="mt-4 font-mono text-xs text-brand-muted/40 tracking-wider">
            No spam. Just drops. Unsubscribe anytime.
          </p>
        </div>

        {/* Social proof */}
        <div className="mt-14 reveal reveal-delay-3">
          <div className="flex flex-wrap justify-center gap-8">
            {[
              { num: "2,400+", label: "On the List" },
              { num: "8 Cities", label: "Launching 2026" },
              { num: "Zero Spam", label: "Promise" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-display text-2xl text-brand-green">{s.num}</div>
                <div className="font-mono text-xs tracking-widest text-brand-muted uppercase mt-1">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
