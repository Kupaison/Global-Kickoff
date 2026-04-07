/**
 * GLOBAL KICKOFF™ — Site Configuration
 * ─────────────────────────────────────
 * Edit this file to update brand info, events, cities, and links.
 * This is your central source of truth for all dynamic content.
 */

export const BRAND = {
  name: "GLOBAL KICKOFF™",
  tagline: "Live. Loud. Global.",
  description:
    "The premier World Cup watch party experience. Premium events, live DJs, massive screens, and electric crowds.",
  baseCity: "Jacksonville, FL",
  email: {
    general: "hello@globalkickoff.com",
    partnerships: "partnerships@globalkickoff.com",
    venues: "venues@globalkickoff.com",
    cities: "cities@globalkickoff.com",
  },
  social: {
    instagram: "https://instagram.com/globalkickoff",
    tiktok: "https://tiktok.com/@globalkickoff",
    twitter: "https://twitter.com/globalkickoff",
    youtube: "https://youtube.com/@globalkickoff",
  },
};

export const EVENTS = [
  {
    id: "jax-001",
    city: "Jacksonville",
    state: "FL",
    venue: "TBA — Downtown Jacksonville",
    match: "USA vs TBD — Group Stage",
    date: "June 2026 — TBA",
    time: "Doors 5:00 PM · Kickoff 6:00 PM",
    badge: "FLAGSHIP",
    ticketUrl: "https://eventbrite.com", // ← Replace with actual link
    soldOut: false,
    featured: true,
  },
  {
    id: "jax-002",
    city: "Jacksonville",
    state: "FL",
    venue: "TBA — Riverside District",
    match: "England vs France — Round of 16",
    date: "July 2026 — TBA",
    time: "Doors 6:00 PM · Kickoff 9:00 PM",
    badge: "VIP ONLY",
    ticketUrl: "https://eventbrite.com",
    soldOut: false,
    featured: false,
  },
  {
    id: "jax-003",
    city: "Jacksonville",
    state: "FL",
    venue: "TBA — St. Johns Town Center",
    match: "World Cup Final — Watch Party",
    date: "July 19, 2026",
    time: "Doors 10:00 AM · Kickoff 12:00 PM",
    badge: "FINAL",
    ticketUrl: "https://eventbrite.com",
    soldOut: false,
    featured: false,
  },
];

export const CITIES = [
  { city: "Jacksonville", state: "Florida", flag: "🏴", status: "active" },
  { city: "Miami", state: "Florida", flag: "🌴", status: "next" },
  { city: "Orlando", state: "Florida", flag: "🎡", status: "coming-soon" },
  { city: "Tampa", state: "Florida", flag: "⚡", status: "coming-soon" },
  { city: "Atlanta", state: "Georgia", flag: "🍑", status: "coming-soon" },
  { city: "Houston", state: "Texas", flag: "🤠", status: "coming-soon" },
  { city: "Los Angeles", state: "California", flag: "🌆", status: "coming-soon" },
  { city: "New York", state: "New York", flag: "🗽", status: "coming-soon" },
];
