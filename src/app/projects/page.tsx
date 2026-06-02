import type { Metadata } from "next";
import Projects from "@/components/Projects";
import CTABanner from "@/components/CTABanner";
import ProjectsHero from "./ProjectsHero";

export const metadata: Metadata = {
  title: "Projects | Satellite Engineers — Industrial Project Portfolio",
  description:
    "Explore Satellite Engineers' portfolio of successfully delivered industrial engineering projects across Gujarat and India — coal handling plants, electrical systems, conveyor services, and more.",
};

export default function ProjectsPage() {
  return (
    <>
      <ProjectsHero />
      <Projects />
      <CTABanner />
    </>
  );
}
