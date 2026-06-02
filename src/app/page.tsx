import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Industries from "@/components/Industries";
import WhyUs from "@/components/WhyUs";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import ContactSection from "@/components/ContactSection";
import CTABanner from "@/components/CTABanner";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services preview={true} />
      <Industries />
      <WhyUs />
      <Projects preview={true} />
      <Testimonials />
      <CTABanner />
      <ContactSection />
    </>
  );
}
