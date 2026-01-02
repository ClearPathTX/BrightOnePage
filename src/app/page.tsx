import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StartRecovery from "@/components/StartRecovery";
import AboutFacility from "@/components/AboutFacility";
import Testimonials from "@/components/Testimonials";
import WhatToExpect from "@/components/WhatToExpect";
import TreatmentPrograms from "@/components/TreatmentPrograms";
import OurFacility from "@/components/OurFacility";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <StartRecovery />
        <AboutFacility />
        <Testimonials />
        <WhatToExpect />
        <TreatmentPrograms />
        <OurFacility />
        <Contact />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
