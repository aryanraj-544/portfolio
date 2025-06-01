import { Suspense } from "react"
import { ProjectsGrid } from "@/components/projects-grid"
import { SkeletonCard } from "@/components/skeleton-loader"
import { allProjectsData } from "@/data/static/projects-data"
import type { Metadata } from "next"
import { linksData } from "@/data/static/links-data"

export const metadata: Metadata = {
  title: "Projects - Software Development & Data Science Portfolio",
  description:
    "Explore Aryan Raj's portfolio of software development and data science projects. Featuring web applications, machine learning models, and innovative solutions built with Python, React, TensorFlow, and more.",
  keywords: [
    "software projects",
    "data science projects",
    "machine learning projects",
    "web development portfolio",
    "Python projects",
    "React applications",
    "portfolio projects",
  ],
  openGraph: {
    title: "Projects - Aryan Raj's Software Development Portfolio",
    description:
      "Explore innovative software development and data science projects by Aryan Raj. Web applications, ML models, and scalable solutions.",
    url: "`${linksData.domain_url}projects",
  },
  alternates: {
    canonical: `${linksData.domain_url}/projects`,
  },
}

function ProjectsSkeleton() {
  return (
    <div className="min-h-screen pt-20 bg-3d">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <div className="skeleton h-12 w-96 mx-auto mb-6 rounded"></div>
          <div className="skeleton h-6 w-[600px] mx-auto rounded"></div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: 6 }).map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default function ProjectsPage() {
  return (
    <Suspense fallback={<ProjectsSkeleton />}>
      <div className="min-h-screen pt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-glow">{allProjectsData.title}</h1>
            <p className="text-xl text-muted-foreground/90 max-w-3xl mx-auto">{allProjectsData.subtitle}</p>
          </div>
          <ProjectsGrid />
        </div>
      </div>
    </Suspense>
  )
}
