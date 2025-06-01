"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { featuredProjectsData } from "@/data/static/projects-data"
import { FolderSymlink } from "lucide-react"

export function FeaturedProjectsSection() {
  return (
    <section className="py-20 bg-muted/50 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-glow">Featured Projects</h2>
          <p className="text-xl text-muted-foreground/90 max-w-3xl mx-auto">{featuredProjectsData.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProjectsData.projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 card-hover">
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={500}
                    height={300}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-muted-foreground/90 mb-4 line-clamp-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 3).map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                    {project.tech.length > 3 && <Badge variant="outline">+{project.tech.length - 3}</Badge>}
                  </div>
                  <Button asChild variant="outline" className="w-full">
                    <Link href={`/projects/${project.slug}`}>
                      <FolderSymlink className="w-4 h-4" />
                      View Details
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg">
            <Link href="/projects">{featuredProjectsData.viewAllText}</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
