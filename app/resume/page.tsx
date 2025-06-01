import { Suspense } from "react"
import { Resume } from "@/components/resume"
import { SkeletonCard } from "@/components/skeleton-loader"
import type { Metadata } from "next"
import { linksData } from "@/data/static/links-data"

export const metadata: Metadata = {
  title: "Resume - Professional Experience & Education",
  description:
    "View Aryan Raj's professional resume including work experience at Quinnox and FA8S, education from Sambhram Institute of Technology, certifications, and technical skills in software development and data science.",
  keywords: [
    "software developer resume",
    "data scientist resume",
    "professional experience",
    "technical skills",
    "education",
    "certifications",
    "work experience",
  ],
  openGraph: {
    title: "Resume - Aryan Raj's Professional Experience",
    description:
      "Professional resume showcasing experience in software development, data science, and AI engineering with detailed work history and technical skills.",
    url: `${linksData.domain_url}resume`,
  },
  alternates: {
    canonical: `${linksData.domain_url}resume`,
  },
}
function ResumeSkeleton() {
  return (
    <div className="min-h-screen pt-20 bg-3d">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <div className="skeleton h-12 w-48 mx-auto mb-6 rounded"></div>
          <div className="skeleton h-6 w-96 mx-auto mb-8 rounded"></div>
          <div className="skeleton h-10 w-48 mx-auto rounded"></div>
        </div>
        <div className="max-w-4xl mx-auto space-y-8">
          {Array.from({ length: 5 }).map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default function ResumePage() {
  return (
    <Suspense fallback={<ResumeSkeleton />}>
      <Resume />
    </Suspense>
  )
}
