import Navbar from "../components/Navbar";
import LandingPage from "../components/LandingPage";
import Marquee from "../components/Marquee";
import About from "../components/About";
import TrustedBy from "../components/TrustedBy";
import PullQuote from "../components/PullQuote";
import Featured from "../components/Featured";
import AppShowcase from "../components/AppShowcase";
import FinalCTA from "../components/FinalCTA";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-[#fafaf7] overflow-x-hidden">
      <Navbar />
      <LandingPage />
      <Marquee />
      <About />
      <TrustedBy />
      <PullQuote />
      {/* Homepage sections continue with featured locations. */}
      <Featured />
      <AppShowcase />
      <FinalCTA />
      <Footer />
    </main>
  );
}