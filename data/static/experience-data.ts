import { resumeData } from "./resume-data"

export const experienceData = {
  title: {
    line1: "BUILDING",
    highlight1: "SYSTEMS",
    line2: "THAT",
    bold1: "SCALE",
    highlight2: "WITH",
    bold2: "PRECISION",
  },
  subtitle: "Software Architecture",
  description:
    "Specialized in designing high-performance distributed systems that efficiently handle millions of requests. From microservices to event-driven architectures, delivering robust solutions for enterprise-scale challenges.",
  positions: resumeData.workExperience.map((exp, index) => ({
    title: exp.title,
    company: exp.company,
    location: exp.location,
    period: exp.period,
    description: exp.description,
    color: index === 0 ? "bg-blue-400" : index === 1 ? "bg-green-402" : "bg-purple-400",
  })),
  stats: [
    {
      value: "6+",
      label: "Months Experience",
      color: "text-blue-400",
    },
    {
      value: "10+",
      label: "Projects Delivered",
      color: "text-green-400",
    },
    {
      value: "2+",
      label: "ML Models in Production",
      color: "text-purple-400",
    },
    {
      value: "₹20K+",
      label: "Revenue Impact",
      color: "text-orange-400",
    },
  ],
  achievementsTitle: "Key Achievements",
  achievements: [
    {
      text: "Building agentic AI systems",
      color: "text-blue-400",
    },
    {
      text: "Reducing model training time by 60% through optimization",
      color: "text-green-400",
    },
    {
      text: "Led cross-functional team of 8 developers",
      color: "text-purple-400",
    },
    {
      text: "Implemented CI/CD pipelines reducing deployment time by 80%",
      color: "text-orange-400",
    },
  ],
}
