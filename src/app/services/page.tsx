import type { Metadata } from "next";
import Services from "@/components/Services";
import CTABanner from "@/components/CTABanner";
import ServicesHero from "./ServicesHero";

export const metadata: Metadata = {
  title: "Services | Satellite Engineers — Electrical Panels, Turnkey Projects & More",
  description:
    "Explore Satellite Engineers' complete range of services: CPRI approved electrical panels, turnkey electrical projects, material handling equipment, coal handling plants, dust control, conveyor belt services.",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <Services />
      <CTABanner />
    </>
  );
}
