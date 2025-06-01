import { Suspense } from "react"
import { ProjectDetails } from "@/components/project-details"
import { projectData } from "@/data/static/project-details"
import { Button } from "@/components/ui/button"
import { ArrowLeft, AlertTriangle } from "lucide-react"
import { SkeletonText, SkeletonImage, SkeletonCard } from "@/components/skeleton-loader"
import Link from "next/link"
import { linksData } from "@/data/static/links-data"
import type { Metadata } from "next"
import { notFound } from "next/navigation"

interface ProjectPageProps {
  params: {
    slug: string
  }
}

// Generate static params for ALL projects - completely static
export async function generateStaticParams() {
  const projectSlugs = Object.keys(projectData)
  
  return projectSlugs.map((slug) => ({
    slug: slug,
  }))
}

// Disable dynamic params - only allow pre-generated pages
export const dynamicParams = false

// Generate metadata statically
export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = projectData[params.slug]

  // This should never happen with dynamicParams = false, but keep for safety
  if (!project) {
    return {
      title: "Project Not Found",
      description: "The requested project could not be found.",
    }
  }

  return {
    title: `${project.title} - Project Details`,
    description: project.description,
    keywords: [
      ...project.tech,
      "software project",
      "development project",
      project.category.toLowerCase(),
      "portfolio project",
    ],
    openGraph: {
      title: `${project.title} - Aryan Raj's Project`,
      description: project.description,
      url: `${linksData.domain_url}projects/${params.slug}`,
      images: [
        {
          url: project.image || "/placeholder.svg",
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
    alternates: {
      canonical: `${linksData.domain_url}projects/${params.slug}`,
    },
  }
}

function ProjectDetailsSkeleton() {
  return (
    <div className="min-h-screen pt-20 bg-3d">
      <div className="container mx-auto px-4 py-16">
        <div className="skeleton h-10 w-32 mb-8 rounded"></div>
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-4">
              <div className="skeleton h-8 w-48 rounded"></div>
              <div className="skeleton h-12 w-full rounded"></div>
              <SkeletonText lines={3} />
              <div className="flex gap-4">
                <div className="skeleton h-10 w-32 rounded"></div>
                <div className="skeleton h-10 w-32 rounded"></div>
              </div>
              <SkeletonImage className="w-full h-64" />
            </div>
            <SkeletonCard />
            <SkeletonCard />
          </div>
          <div className="space-y-6">
            {Array.from({ length: 4 }).map((_, i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projectData[params.slug]

  // With dynamicParams = false, this should trigger Next.js 404
  // But we'll handle it gracefully just in case
  if (!project) {
    notFound()
  }

  // Remove Suspense since everything is static now
  return <ProjectDetails project={project} />
}