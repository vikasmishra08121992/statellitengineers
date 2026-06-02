import type { Metadata } from "next";
import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle, Award, Users, Target, Briefcase, ArrowRight } from "lucide-react";
import CTABanner from "@/components/CTABanner";
import AboutHero from "./AboutHero";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About Us | Satellite Engineers — Industrial Engineering Since 2001",
  description:
    "Learn about Satellite Engineers — a trusted industrial engineering company based in Ahmedabad, Gujarat. CPRI approved manufacturer with 20+ years of experience.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutContent />
      <CTABanner />
    </>
  );
}
