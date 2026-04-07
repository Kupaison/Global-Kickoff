import "./globals.css";
import { Bebas_Neue, DM_Sans, DM_Mono } from "next/font/google";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const dmMono = DM_Mono({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata = {
  title: "GLOBAL KICKOFF™ — Live. Loud. Global.",
  description:
    "The premier World Cup watch party experience. Premium events, live DJs, massive screens, and electric crowds. Jacksonville, FL and expanding nationwide.",
  keywords: [
    "World Cup watch party",
    "Jacksonville FL",
    "soccer event",
    "FIFA watch party",
    "premium sports event",
    "global kickoff",
  ],
  openGraph: {
    title: "GLOBAL KICKOFF™ — Live. Loud. Global.",
    description:
      "The premier World Cup watch party experience. Premium events, live DJs, massive screens, and electric crowds.",
    type: "website",
    url: "https://globalkickoff.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "GLOBAL KICKOFF™ — Live. Loud. Global.",
    description: "The World Cup watch party experience. Nationwide.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${bebasNeue.variable} ${dmSans.variable} ${dmMono.variable} bg-brand-black text-brand-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
