import type { Metadata } from "next";
import ContactSection from "@/components/ContactSection";
import ContactHero from "./ContactHero";

export const metadata: Metadata = {
  title: "Contact Us | Satellite Engineers — Ahmedabad, Gujarat",
  description:
    "Contact Satellite Engineers for electrical panels, turnkey projects, and industrial engineering services. Located in Jasodanagar, Ahmedabad, Gujarat.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactSection />
    </>
  );
}
