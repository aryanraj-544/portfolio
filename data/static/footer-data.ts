import { linksData } from "./links-data"

export const footerData = {
  brand: {
    name: "Aryan Raj",
    tagline: "Software Developer, Data Analyst & Data Scientist",
  },
  socialLinks: [
    {
      name: linksData.social.github.label,
      url: linksData.social.github.url,
      icon: linksData.social.github.icon,
    },
    {
      name: linksData.social.linkedin.label,
      url: linksData.social.linkedin.url,
      icon: linksData.social.linkedin.icon,
    },
    {
      name: "Email",
      url: `mailto:${linksData.email}`,
      icon: "Mail",
    },
  ],
  quickLinks: {
    title: "Quick Links",
    links: [
      { name: "Home", url: linksData.navigation.home },
      { name: "Projects", url: linksData.navigation.projects },
      //{ name: "Blog", url: linksData.navigation.blog },
      { name: "Resume", url: linksData.navigation.resume },
    ],
  },
  contact: {
    title: "Contact Info",
    email: linksData.email,
    availability: "Available for freelance opportunities",
  },
  copyright: `© ${new Date().getFullYear()} Aryan Raj. All rights reserved.`,
}
