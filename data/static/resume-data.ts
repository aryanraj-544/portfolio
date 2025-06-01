import { linksData } from "./links-data"

export const resumeData = {
  title: "Resume",
  subtitle:
    "A comprehensive overview of my professional experience, education, and achievements in software development and data science.",
  downloadButtonText: "Download PDF Resume",
  contact: {
    email: linksData.email,
    phone: linksData.phone,
    location: linksData.location,
    linkedin: linksData.social.linkedin.url,
    github: linksData.social.github.url,
  },
  workExperience: [
    {
      title: "A3 - Software Trainee",
      company: "Quinnox Consultancy Services Limited",
      location: "Bengaluru, India",
      period: "2025 - Present",
      description: "Started my journey as a Software Trainee at Quinnox Consultancy Services Limited.",
      achievements: ["Learning about the basics of Software Development and Data Science."],
    },
    {
      title: "AI Engineer",
      company: "FA8S",
      location: "Bengaluru, India",
      period: "2024 - Present",
      description: "Designed and Developed AI Models for the company's products.",
      achievements: [
        "Developed a competetive model to find out the vurnability of the products.",
        "Improved data accuracy by 95% through validation processes",
      ],
    },
    {
      title: "Software Developer Intern",
      company: "VCare Technologies",
      location: "Remote",
      period: "Nov, 2023 - Apr, 2024",
      description:
        "Contributed to the development of a GPT-based chat platform by designing and implementing functionalities using React.js, Python, and Node.js.",
      achievements: [
        "Built responsive web applications serving 100K+ users",
        "Implemented CI/CD pipelines reducing deployment time by 80%",
        "Optimized database queries improving performance by 50%",
      ],
    },
  ],
  education: [
    {
      degree: "Bachelor of Engineering in Computer Science & Engineering",
      school: "Sambhram Institute of Technology, Bangalore",
      location: "Bangalore, India",
      period: "2021 - 2025",
      gpa: "8.8/10.0",
      coursework: ["Data Structures", "Algorithms", "Database Systems", "Software Engineering"],
    },
    {
      degree: "Class 12th",
      school: "St. Josephs' PU College, Mysore",
      location: "Mysore, India",
      period: "2019 - 2021",
      gpa: "97.5/100.0",
      coursework: ["Physics", "Chemistry", "Mathematics", "Computer Science"],
    },
    {
      degree: "Class 10th",
      school: "D.A.V. Public School, C.R.R.C., Medical Unit, Gaya",
      location: "Gaya, India",
      period: "2018 - 2019",
      gpa: "93.33/100.0",
      coursework: ["Physics", "Chemistry", "Mathematics", "Computer Science", "English", "Social Studies", "Sanskrit"],
    },
  ],
  certifications: [
    {
      name: "Data Science Masters",
      issuer: "PW Skills",
      date: "2024",
      credentialId: "15f87c32-54de-44cs-bcad-616ea97f899b",
      verificationStatus: "verified",
    },
  ],
  extracurricular: [
    {
      role: "Co-Lead",
      organization: "OS Code SaIT Chapter",
      period: "2024 - Present",
      description:
        "Managing a group of 10+ teams, empowering students with real-world projects and open-source collaborations",
    },
    {
      role: "NSS Volunteer",
      organization: "Sambhram NSS Society",
      period: "2022 - Present",
      description: "Volunteering for the society, helping the society to grow and develop",
    },
  ],
  hobbies: [
    { name: "Photography", icon: "📸" },
    { name: "Hiking", icon: "🥾" },
    { name: "Gaming", icon: "🎮" },
    { name: "Cooking", icon: "👨‍🍳" },
    { name: "Reading", icon: "📚" },
    { name: "Bike Ridding", icon: "🏍️" },
  ],
}
