"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import dynamic from 'next/dynamic'
//import { Button } from "@/components/ui/button"
//import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
//import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Github, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react"
import type { Project } from "@/data/static/project-details"

// Dynamically import heavy components
const MotionDiv = dynamic(() => import('framer-motion').then((mod) => mod.motion.div))
const Button = dynamic(() => import('@/components/ui/button').then(mod => mod.Button))
const Card = dynamic(() => import('@/components/ui/card').then(mod => mod.Card))
const CardContent = dynamic(() => import('@/components/ui/card').then(mod => mod.CardContent))
const CardHeader = dynamic(() => import('@/components/ui/card').then(mod => mod.CardHeader))
const CardTitle = dynamic(() => import('@/components/ui/card').then(mod => mod.CardTitle))
const Badge = dynamic(() => import('@/components/ui/badge').then(mod => mod.Badge))

interface ProjectDetailsProps {
  project: Project
}

const ScreenshotCarousel = ({ screenshots, projectTitle }: { screenshots: string[]; projectTitle: string }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (screenshots.length > 1) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % screenshots.length)
      }, 4000)

      return () => clearInterval(interval)
    }
  }, [screenshots.length])

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % screenshots.length)
  }

  if (!screenshots || screenshots.length === 0) return null

  return (
    <Card className="card-hover">
      <CardHeader>
        <CardTitle>Screenshots</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative group">
          <div className="overflow-hidden rounded-lg">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {screenshots.map((screenshot, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <MotionDiv whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
                    <Image
                      src={screenshot || "/placeholder.svg"}
                      alt={`${projectTitle} screenshot ${index + 1}`}
                      width={600}
                      height={300}
                      className="w-full h-64 object-cover rounded-lg shadow-lg"
                    />
                  </MotionDiv>
                </div>
              ))}
            </div>
          </div>

          {screenshots.length > 1 && (
            <>
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-background/80 hover:bg-background/90 opacity-0 group-hover:opacity-100 transition-opacity"
                onClick={goToPrevious}
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-background/80 hover:bg-background/90 opacity-0 group-hover:opacity-100 transition-opacity"
                onClick={goToNext}
              >
                <ChevronRight className="w-4 h-4" />
              </Button>

              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {screenshots.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentIndex ? "bg-white" : "bg-white/50"
                    }`}
                    onClick={() => setCurrentIndex(index)}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

const formatArchitecture = (text: string) => {
  return text.split("\n").map((line, index) => {
    const formattedLine = line.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    return <p key={index} className="mb-2" dangerouslySetInnerHTML={{ __html: formattedLine }} />
  })
}

export function ProjectDetails({ project }: ProjectDetailsProps) {
  return (
    <div className="min-h-screen pt-20 relative">
      <div className="container mx-auto px-4 py-16 relative z-10">
        <Button asChild variant="ghost" className="mb-8 group text-gray-300 hover:text-white hover:bg-gray-800">
          <Link href="/projects" className="flex items-center gap-2">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Projects
          </Link>
        </Button>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <MotionDiv initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="flex items-center gap-4 mb-4">
                <Badge variant="outline" className="border-gray-600 text-gray-300">
                  {project.category}
                </Badge>
                {project.date && (
                  <Badge variant="secondary" className="bg-gray-800 text-gray-300">
                    {project.date}
                  </Badge>
                )}
              </div>
              <h1
                className="text-4xl font-bold mb-6 text-white"
                style={{ textShadow: "0 0 20px rgba(59, 130, 246, 0.3)" }}
              >
                {project.title}
              </h1>
              <p className="text-xl text-gray-300 mb-8">{project.description}</p>

              <div className="flex gap-4 mb-8">
                <Button asChild className="group">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Github className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    View Code
                  </a>
                </Button>
                {project.demo && (
                  <Button variant="outline" asChild className="group border-gray-600 text-gray-300 hover:bg-gray-800">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <ExternalLink className="w-4 h-4 group-hover:scale-110 transition-transform" />
                      Live Demo
                    </a>
                  </Button>
                )}
              </div>

              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={600}
                height={300}
                className="w-full h-64 object-cover rounded-lg mb-8 shadow-lg"
              />
            </MotionDiv>

            <Card className="card-hover bg-gray-900/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Project Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="prose prose-neutral dark:prose-invert max-w-none">
                  <p className="whitespace-pre-line text-gray-300">{project.longDescription}</p>
                </div>
              </CardContent>
            </Card>

            <Card className="card-hover bg-gray-900/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Architecture</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="prose prose-neutral dark:prose-invert max-w-none text-gray-300">
                  {formatArchitecture(project.architecture)}
                </div>
              </CardContent>
            </Card>

            <ScreenshotCarousel screenshots={project.screenshots} projectTitle={project.title} />
          </div>

          <div className="space-y-6">
            <Card className="card-hover bg-gray-900/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Technologies</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="bg-gray-800 text-gray-300 hover:bg-gray-700 transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="card-hover bg-gray-900/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Contributors</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {project.contributors.map((contributor, index) => (
                    <li key={index} className="text-gray-300">
                      {contributor}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="card-hover bg-gray-900/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Key Features</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {project.features.map((feature, index) => (
                    <li key={index} className="text-gray-300 flex items-start">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="card-hover bg-gray-900/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Challenges</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {project.challenges.map((challenge, index) => (
                    <li key={index} className="text-gray-300 flex items-start">
                      <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                      {challenge}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
