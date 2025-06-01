"use client"

import { experienceData } from "@/data/static/experience-data"
import { motion } from "framer-motion"

export function ExperienceSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Left column - Text content and metrics */}
          <div className="lg:col-span-4 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-light tracking-wider mb-6">
                <span className="text-muted-foreground">{experienceData.title.line1} </span>
                <span className="text-blue-400">{experienceData.title.highlight1}</span>
                <br />
                <span className="text-muted-foreground">{experienceData.title.line2} </span>
                <span className="font-black">{experienceData.title.bold1}</span>
                <br />
                <span className="text-green-400">{experienceData.title.highlight2} </span>
                <span className="font-black">{experienceData.title.bold2}</span>
              </h2>

              <p className="text-lg font-light leading-relaxed text-muted-foreground/90 mb-8">
                {experienceData.description}
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {experienceData.stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className="p-4 bg-muted/50 rounded-lg border border-border/50 card-hover"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className={`text-2xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
                    <div className="text-sm text-muted-foreground/90">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-12">
                <h3 className="text-xl font-semibold mb-6">{experienceData.achievementsTitle}</h3>
                <div className="space-y-4">
                  {experienceData.achievements.map((achievement, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <span className={`w-2 h-2 rounded-full ${achievement.color} mt-2 flex-shrink-0`} />
                      <p className="text-muted-foreground/90">{achievement.text}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right column - Experience timeline */}
          <div className="lg:col-span-8">
            <div className="relative pl-8 border-l border-border">
              {experienceData.positions.map((position, index) => (
                <motion.div
                  key={index}
                  className="mb-12 relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-[41px] top-0">
                    <div
                      className={`w-6 h-6 rounded-full ${position.color} border-4 border-background flex items-center justify-center`}
                    >
                      <div className="w-2 h-2 rounded-full bg-background"></div>
                    </div>
                  </div>

                  {/* Content card */}
                  <div className="bg-muted/30 rounded-lg p-6 border border-border/50 hover:border-border transition-all duration-300 hover:shadow-lg card-hover">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <h3 className="text-xl font-semibold">{position.title}</h3>
                      <span className="text-sm text-muted-foreground/90 px-3 py-1 bg-muted rounded-full">
                        {position.period}
                      </span>
                    </div>

                    <div className="text-lg text-blue-400 mb-4">
                      {position.company} • {position.location}
                    </div>

                    <p className="text-muted-foreground/90 mb-4">{position.description}</p>

                    {/* Animated line connecting to next item */}
                    {index < experienceData.positions.length - 1 && (
                      <motion.div
                        className="absolute h-[calc(100%-2rem)] w-px bg-gradient-to-b from-transparent via-border to-transparent left-[-8px] top-6"
                        initial={{ scaleY: 0, originY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        viewport={{ once: true }}
                      />
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
