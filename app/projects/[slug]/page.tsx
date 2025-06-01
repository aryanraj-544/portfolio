import { Suspense } from "react"
import { ProjectDetails } from "@/components/project-details"
import { projectData } from "@/data/static/project-details"
import { Button } from "@/components/ui/button"
import { ArrowLeft, AlertTriangle } from "lucide-react"
import { SkeletonText, SkeletonImage, SkeletonCard } from "@/components/skeleton-loader"
import Link from "next/link"
import { linksData } from "@/data/static/links-data"
import type { Metadata } from "next"
export const runtime = "edge"

interface ProjectPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = projectData[params.slug]

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

function ProjectNotFound() {
  return (
    <div className="min-h-screen pt-20 flex items-center justify-center relative bg-3d">
      {/* Background grid */}
      <div className="absolute inset-0 grid-background opacity-20 -z-10" />

      <div className="container mx-auto px-4 text-center">
        <div className="max-w-2xl mx-auto space-y-8">
          <div className="flex justify-center mb-8">
            <div className="w-24 h-24 bg-orange-500/20 rounded-full flex items-center justify-center">
              <AlertTriangle className="w-12 h-12 text-orange-500" />
            </div>
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold text-glow">Sorry! Page not found</h1>
            <p className="text-xl text-muted-foreground/90 max-w-lg mx-auto leading-relaxed">
              It is not in public stage and details will be made available for public soon.
            </p>
          </div>

          <Button asChild size="lg" className="group">
            <Link href="/projects" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Projects
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projectData[params.slug]

  if (!project) {
    return <ProjectNotFound />
  }

  return (
    <Suspense fallback={<ProjectDetailsSkeleton />}>
      <ProjectDetails project={project} />
    </Suspense>
  )
}
