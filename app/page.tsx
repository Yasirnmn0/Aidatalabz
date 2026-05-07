import Hero from "@/components/hero";
import VPSServices from "@/components/vps-services";
import VPSPricing from "@/components/vps-pricing";
import WhyChooseUs from "@/components/why-choose-us";
import AISolutions from "@/components/ai-solutions";
import About from "@/components/about";
import CTA from "@/components/cta";
import Header from "@/components/header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col">
        <Hero />
        <VPSServices />
        <VPSPricing />
        <WhyChooseUs />
        <AISolutions />
        <About />
        <CTA />
      </main>
    </>
  );
}
