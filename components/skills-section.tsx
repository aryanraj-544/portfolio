"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import dynamic from 'next/dynamic'
import { skillsData } from "@/data/static/skills-data"
import { Shuffle } from "lucide-react"

// Dynamically import heavy components
const MotionDiv = dynamic(() => import('framer-motion').then((mod) => mod.motion.div))
const Button = dynamic(() => import('@/components/ui/button').then(mod => mod.Button))

interface SkillCardProps {
  name: string
  level: number
  category: string
  index: number
  containerRef: React.RefObject<HTMLDivElement | null>
  shuffleKey: number
}

const SkillCard = ({ name, level, category, index, containerRef, shuffleKey }: SkillCardProps) => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const [showCategory, setShowCategory] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  // Calculate card size based on text length
  const getCardSize = () => {
    const baseWidth = 120
    const baseHeight = 100
    const textLength = name.length
    const extraWidth = Math.max(0, (textLength - 8) * 3)
    return {
      width: Math.min(baseWidth + extraWidth, 180),
      height: baseHeight,
    }
  }

  const cardSize = getCardSize()

  // Generate random position on shuffle with collision detection
  const generateRandomPosition = () => {
    if (!containerRef.current) return { x: 0, y: 0 }
    
    const containerRect = containerRef.current.getBoundingClientRect()
    const maxX = Math.max(0, containerRect.width - cardSize.width - 40)
    const maxY = Math.max(0, containerRect.height - cardSize.height - 80)

    // Get all existing positions from other cards
    const existingCards = containerRef.current.querySelectorAll("[data-skill-card]")
    const existingPositions: { x: number; y: number; width: number; height: number }[] = []

    existingCards.forEach((card) => {
      const rect = card.getBoundingClientRect()
      const containerRect = containerRef.current!.getBoundingClientRect()
      existingPositions.push({
        x: rect.left - containerRect.left,
        y: rect.top - containerRect.top,
        width: rect.width,
        height: rect.height,
      })
    })

    // Try to find a non-overlapping position
    let attempts = 0
    let newPosition = { x: 0, y: 0 }

    do {
      newPosition = {
        x: Math.random() * maxX + 20,
        y: Math.random() * maxY + 20,
      }
      attempts++
    } while (attempts < 50 && hasOverlap(newPosition, existingPositions))

    return newPosition
  }

  // Check if a position overlaps with existing cards
  const hasOverlap = (
    newPos: { x: number; y: number },
    existingPositions: { x: number; y: number; width: number; height: number }[],
  ) => {
    const buffer = 20 // Minimum distance between cards

    return existingPositions.some((existing) => {
      return (
        newPos.x < existing.x + existing.width + buffer &&
        newPos.x + cardSize.width + buffer > existing.x &&
        newPos.y < existing.y + existing.height + buffer &&
        newPos.y + cardSize.height + buffer > existing.y
      )
    })
  }

  useEffect(() => {
    const newPosition = generateRandomPosition()
    setPosition(newPosition)
  }, [shuffleKey, containerRef, cardSize.width, cardSize.height])

  return (
    <MotionDiv
      ref={cardRef}
      className="absolute select-none touch-none"
      data-skill-card="true"
      style={{
        width: cardSize.width,
        height: cardSize.height,
        zIndex: isDragging ? 50 : showCategory ? 40 : index + 10,
      }}
      initial={{ x: position.x, y: position.y, scale: 0, rotate: 0 }}
      animate={{
        x: position.x,
        y: position.y,
        scale: 1,
        rotate: Math.random() * 10 - 5,
        transition: {
          type: "spring",
          stiffness: 120,
          damping: 15,
          delay: index * 0.08,
          duration: 0.8,
        },
      }}
      drag
      dragConstraints={containerRef}
      dragElastic={0.1}
      dragMomentum={false}
      onDragStart={() => setIsDragging(true)}
      onDragEnd={() => {
        setIsDragging(false)
        if (cardRef.current && containerRef.current) {
          const cardRect = cardRef.current.getBoundingClientRect()
          const containerRect = containerRef.current.getBoundingClientRect()

          setPosition({
            x: cardRect.left - containerRect.left,
            y: cardRect.top - containerRect.top,
          })
        }
      }}
      whileDrag={{ scale: 1.1, zIndex: 50, rotate: 0 }}
      onHoverStart={() => setShowCategory(true)}
      onHoverEnd={() => setShowCategory(false)}
    >
      <div
        className="w-full h-full rounded-lg overflow-hidden flex flex-col items-center justify-center p-3 transition-all duration-300 cursor-grab active:cursor-grabbing relative"
        style={{
          background: "linear-gradient(135deg, rgba(30, 30, 35, 0.95), rgba(25, 25, 30, 0.98))",
          borderWidth: "1px",
          borderStyle: "solid",
          borderColor: "rgba(75, 85, 99, 0.3)",
          boxShadow: showCategory ? "0 8px 25px rgba(0, 0, 0, 0.4)" : "0 4px 15px rgba(0, 0, 0, 0.2)",
        }}
      >
        {/* Category tooltip */}
        {showCategory && (
          <MotionDiv
            className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black/90 text-white text-xs px-2 py-1 rounded whitespace-nowrap z-50"
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 5 }}
          >
            {category}
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-t-2 border-transparent border-t-black/90" />
          </MotionDiv>
        )}

        <h3
          className="text-sm font-medium z-10 mb-2 text-center leading-tight"
          style={{ color: "rgba(255, 255, 255, 0.9)" }}
        >
          {name}
        </h3>
        <div className="absolute bottom-3 flex items-center justify-center z-10 w-full px-3">
          <div className="w-full h-1.5 bg-neutral-800 rounded-full overflow-hidden mr-1">
            <div
              className="h-full transition-all duration-300"
              style={{
                width: `${level}%`,
                background: `linear-gradient(90deg, rgb(59, 130, 246) 0%, rgb(96, 165, 250) ${level}%)`,
              }}
            />
          </div>
          <span className="text-xs font-medium text-blue-200 ml-1 w-8 text-right">{level}%</span>
        </div>
      </div>
    </MotionDiv>
  )
}

export function SkillsSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [shuffleKey, setShuffleKey] = useState(0)

  const handleShuffle = () => {
    // Add smooth transition effect
    setShuffleKey((prev) => prev + 1)

    // Optional: Add a brief loading state
    const container = containerRef.current
    if (container) {
      container.style.transition = "opacity 0.3s ease"
      container.style.opacity = "0.7"

      setTimeout(() => {
        container.style.opacity = "1"
      }, 300)
    }
  }

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Left column - Text content */}
          <div className="lg:col-span-3 space-y-6">
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-light tracking-wider mb-4 text-white">SKILLS</h2>
              <p className="text-lg font-light leading-relaxed text-gray-300 mb-4">{skillsData.subtitle}</p>
              <p className="text-sm font-light text-gray-400 mb-6">{skillsData.description}</p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {skillsData.stats.map((stat, index) => (
                  <MotionDiv
                    key={index}
                    className="text-center p-4 bg-gray-900/50 rounded-lg border border-gray-700 card-hover"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className={`text-2xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </MotionDiv>
                ))}
              </div>

              <Button
                onClick={handleShuffle}
                variant="outline"
                className="flex items-center gap-2 group border-gray-600 text-gray-200 hover:bg-gray-800"
              >
                <Shuffle className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
                Shuffle Skills
              </Button>
            </MotionDiv>
          </div>

          {/* Right column - Interactive skills */}
          <div className="lg:col-span-9">
            <MotionDiv
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative min-h-[32rem] sm:min-h-[36rem] lg:min-h-[38rem] bg-gradient-to-br from-gray-900/30 to-gray-800/30 rounded-lg p-6 overflow-hidden border border-gray-700"
              ref={containerRef}
            >
              {skillsData.skills.map((skill, index) => (
                <SkillCard
                  key={`${skill.name}-${shuffleKey}`}
                  name={skill.name}
                  level={skill.level}
                  category={skill.category}
                  index={index}
                  containerRef={containerRef}
                  shuffleKey={shuffleKey}
                />
              ))}

              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-xs sm:text-sm font-light text-gray-500 italic text-center">
                  Drag to move skills • Hover to see categories
                </p>
              </div>
            </MotionDiv>
          </div>
        </div>
      </div>
    </section>
  )
}
