import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import Intro from "@/app/components/Intro";
import WhoWeHelp from "@/app/components/WhoWeHelp";
import Expertise from "@/app/components/Expertise";
import Approach from "@/app/components/Approach";
import Specialties from "@/app/components/Specialties";
import About from "@/app/components/About";
import Office from "@/app/components/Office";
import FAQ from "@/app/components/FAQ";
import CTA from "@/app/components/CTA";
import Footer from "@/app/components/Footer";
import SitePreloader from "./components/CurtainPreloader";

export default function Home() {
  return (
    <>
       <SitePreloader />  
      <Navbar />

      <main>

        <Hero />
        <Intro />
        <WhoWeHelp />
        <Expertise />
        <Approach />
        <Specialties />
        <About />
        <Office />
        <FAQ />
        <CTA />
      </main>

      <Footer />
    </>
  );
}