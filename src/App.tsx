import { MotionConfig } from "framer-motion";
import Background from "./components/Background";
import Spotlight from "./components/Spotlight";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Chapa from "./components/Chapa";
import Marquee from "./components/Marquee";
import Manifesto from "./components/Manifesto";
import Pillars from "./components/Pillars";
import Proposals from "./components/Proposals";
import Team from "./components/Team";
import Stats from "./components/Stats";
import Gallery from "./components/Gallery";
import FAQ from "./components/FAQ";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="vz-grain relative min-h-screen">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-cyan focus:px-5 focus:py-2.5 focus:font-display focus:text-sm focus:font-semibold focus:text-void"
        >
          Pular para o conteúdo
        </a>

        <Background />
        <Spotlight />
        <Nav />

        <main id="main">
          <Hero />
          <Chapa />
          <Marquee />
          <Manifesto />
          <Pillars />
          <Proposals />
          <Team />
          <Stats />
          <Gallery />
          <FAQ />
          <FinalCTA />
        </main>

        <Footer />
      </div>
    </MotionConfig>
  );
}
