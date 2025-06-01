"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download, Mail, Phone, MapPin, Linkedin, Github, CheckCircle } from "lucide-react"
import { resumeData } from "@/data/static/resume-data"
import { linksData } from "@/data/static/links-data"
import { motion } from "framer-motion"

export function Resume() {
  return (
    <div className="min-h-screen pt-20 relative">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-6xl font-bold text-glow mb-6">{resumeData.title}</h1>
          </motion.div>
          <p className="text-xl text-muted-foreground/90 max-w-3xl mx-auto mb-8">{resumeData.subtitle}</p>
          <Button asChild size="lg" className="group">
            <a href={linksData.resume} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <Download className="w-4 h-4 group-hover:scale-110 transition-transform" />
              {resumeData.downloadButtonText}
            </a>
          </Button>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Contact Information */}
          <Card className="card-hover">
            <CardHeader>
              <CardTitle className="text-2xl">Contact Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-muted-foreground" />
                  <span className="text-muted-foreground/90">{resumeData.contact.email}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-muted-foreground" />
                  <span className="text-muted-foreground/90">{resumeData.contact.phone}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-muted-foreground" />
                  <span className="text-muted-foreground/90">{resumeData.contact.location}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Linkedin className="w-5 h-5 text-muted-foreground" />
                  <a
                    href={resumeData.contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    LinkedIn
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Github className="w-5 h-5 text-muted-foreground" />
                  <a
                    href={resumeData.contact.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Work Experience */}
          <Card className="card-hover">
            <CardHeader>
              <CardTitle className="text-2xl">Work Experience</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {resumeData.workExperience.map((job, index) => (
                  <motion.div
                    key={index}
                    className="border-l-2 border-blue-400 pl-6 pb-6"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-xl font-semibold">{job.title}</h3>
                      <Badge variant="outline">{job.period}</Badge>
                    </div>
                    <div className="text-lg text-muted-foreground/90 mb-2">
                      {job.company} • {job.location}
                    </div>
                    <p className="text-muted-foreground/90 mb-4">{job.description}</p>
                    <ul className="space-y-1">
                      {job.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="text-muted-foreground/90 flex items-start">
                          <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Education */}
          <Card className="card-hover">
            <CardHeader>
              <CardTitle className="text-2xl">Education</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {resumeData.education.map((edu, index) => (
                  <motion.div
                    key={index}
                    className="border-l-2 border-green-400 pl-6 pb-6"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-xl font-semibold">{edu.degree}</h3>
                      <Badge variant="outline">{edu.period}</Badge>
                    </div>
                    <div className="text-lg text-muted-foreground/90 mb-2">
                      {edu.school} • {edu.location}
                    </div>
                    <div className="text-muted-foreground/90 mb-2">GPA: {edu.gpa}</div>
                    <div className="flex flex-wrap gap-2">
                      {edu.coursework.map((course, courseIndex) => (
                        <Badge key={courseIndex} variant="secondary">
                          {course}
                        </Badge>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Certifications */}
          <Card className="card-hover">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-3">
                Certifications
                <div className="flex items-center gap-2 bg-green-500/20 px-3 py-1 rounded-full">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm font-medium text-green-500">Verified</span>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {resumeData.certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    className="border-l-2 border-purple-400 pl-6 pb-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-lg font-semibold">{cert.name}</h3>
                      <Badge variant="outline">{cert.date}</Badge>
                    </div>
                    <div className="text-muted-foreground/90 mb-2">{cert.issuer}</div>
                    <div className="text-sm text-muted-foreground/90">Credential ID: {cert.credentialId}</div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Extracurricular Activities */}
          <Card className="card-hover">
            <CardHeader>
              <CardTitle className="text-2xl">Extracurricular Activities</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {resumeData.extracurricular.map((activity, index) => (
                  <motion.div
                    key={index}
                    className="border-l-2 border-orange-400 pl-6 pb-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-lg font-semibold">{activity.role}</h3>
                      <Badge variant="outline">{activity.period}</Badge>
                    </div>
                    <div className="text-muted-foreground/90 mb-2">{activity.organization}</div>
                    <p className="text-muted-foreground/90">{activity.description}</p>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Hobbies */}
          <Card className="card-hover">
            <CardHeader>
              <CardTitle className="text-2xl">Hobbies & Interests</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {resumeData.hobbies.map((hobby, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-3 p-3 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors card-hover"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <span className="text-2xl">{hobby.icon}</span>
                    <span className="text-muted-foreground/90">{hobby.name}</span>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
