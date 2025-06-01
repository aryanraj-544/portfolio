"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Instagram, X, Download, ArrowRight } from "lucide-react"
import { heroData } from "@/data/static/hero-data"
import { linksData } from "@/data/static/links-data"
import Image from "next/image"
import { motion } from "framer-motion"

const iconMap = {
  Github,
  Linkedin,
  Mail,
  Instagram,
  X,
}

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-4">
              <motion.p
                className="text-lg text-gray-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                {heroData.greeting}
              </motion.p>
              <motion.h1
                className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white"
                style={{ textShadow: "0 0 30px rgba(59, 130, 246, 0.5)" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                {heroData.name}
              </motion.h1>
              <motion.p
                className="text-xl text-gray-200 max-w-3xl leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                {heroData.description}
              </motion.p>
            </div>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-600 group"
              >
                <a href="#contact" className="flex items-center gap-2">
                  {heroData.buttons.contact}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="group border-gray-600 text-gray-200 hover:bg-gray-800"
              >
                <a
                  href={linksData.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Download className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  {heroData.buttons.resume}
                </a>
              </Button>
            </motion.div>

            <motion.div
              className="flex space-x-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              {heroData.socialLinks.map((link, index) => {
                const Icon = iconMap[link.icon as keyof typeof iconMap]
                return (
                  <Button
                    key={link.name}
                    variant="ghost"
                    size="icon"
                    asChild
                    className="hover:bg-gray-800 text-gray-300"
                  >
                    <motion.a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit Aryan Raj's ${link.name} profile`}
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Icon className="w-6 h-6" />
                    </motion.a>
                  </Button>
                )
              })}
            </motion.div>
          </motion.div>

          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              
              <div className="absolute -inset-4  rounded-2xl blur-xl opacity-60" />
              <div className="relative">
                <Image
                  src={linksData.profileImage || "/placeholder.svg"}
                  alt="Aryan Raj - Software Developer and Data Scientist"
                  width={320}
                  height={320}
                  className="rounded-2xl shadow-2xl object-cover"
                  style={{ maxWidth: "320px", height: "auto" }}
                  priority
                />
                {/* Subtle overlay that blends edges */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-2xl" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
