import { HeroSection } from "@/components/hero-section"
import { SkillsSection } from "@/components/skills-section"
import { ExperienceSection } from "@/components/experience-section"
import { FeaturedProjectsSection } from "@/components/featured-projects-section"
import { ContactSection } from "@/components/contact-section"
import { JsonLd } from "@/components/json-ld"
import type { Metadata } from "next"
import { linksData } from "@/data/static/links-data"

export const metadata: Metadata = {
  title: "Aryan Raj - Software Developer & Data Scientist Portfolio",
  description:
    "Welcome to Aryan Raj's portfolio. Experienced Software Developer, Data Scientist & AI Engineer with expertise in Python, React, Machine Learning, and scalable web applications. View projects and get in touch.",
  openGraph: {
    title: "Aryan Raj - Software Developer & Data Scientist Portfolio",
    description:
      "Welcome to Aryan Raj's portfolio. Experienced Software Developer, Data Scientist & AI Engineer with expertise in Python, React, Machine Learning, and scalable web applications.",
    url: `${linksData.domain_url}`,
  },
  alternates: {
    canonical: `${linksData.domain_url}`,
  },
}
export default function Home() {
  return (
    <>
      <JsonLd />
      <HeroSection />
      <ExperienceSection />
      <SkillsSection />
      <FeaturedProjectsSection />
      <ContactSection />
    </>
  )
}
