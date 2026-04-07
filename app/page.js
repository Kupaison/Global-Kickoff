import Nav from "@/components/Nav";
import Hero from "@/components/sections/Hero";
import Ticker from "@/components/sections/Ticker";
import About from "@/components/sections/About";
import Events from "@/components/sections/Events";
import WhyAttend from "@/components/sections/WhyAttend";
import Cities from "@/components/sections/Cities";
import Partners from "@/components/sections/Partners";
import EmailCapture from "@/components/sections/EmailCapture";
import Footer from "@/components/sections/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Ticker />
        <About />
        <Events />
        <WhyAttend />
        <Cities />
        <Partners />
        <EmailCapture />
      </main>
      <Footer />
      <ScrollReveal />
    </>
  );
}
