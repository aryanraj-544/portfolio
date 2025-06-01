import { linksData } from "@/data/static/links-data"

export function JsonLd() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Aryan Raj",
    url: `${linksData.domain_url}`,
    image: linksData.profileImage,
    sameAs: [
      linksData.social.github.url,
      linksData.social.linkedin.url,
      linksData.social.twitter.url,
      linksData.social.instagram.url,
    ],
    jobTitle: "Software Developer & Data Scientist",
    worksFor: {
      "@type": "Organization",
      name: "Quinnox Consultancy Services Limited",
    },
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Sambhram Institute of Technology",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bengaluru",
      addressCountry: "India",
    },
    email: linksData.email,
    telephone: linksData.phone,
    knowsAbout: [
      "Software Development",
      "Data Science",
      "Machine Learning",
      "Python",
      "React",
      "JavaScript",
      "TensorFlow",
      "Web Development",
      "AI Engineering",
    ],
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Aryan Raj Portfolio",
    url: `${linksData.domain_url}`,
    description:
      "Software Developer, Data Scientist & AI Engineer portfolio showcasing projects and professional experience",
    author: {
      "@type": "Person",
      name: "Aryan Raj",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: "`${linksData.domain_url}projects?search={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  }

  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Aryan Raj - Software Development Services",
    description: "Professional software development, data science, and AI engineering services",
    provider: {
      "@type": "Person",
      name: "Aryan Raj",
    },
    areaServed: "Worldwide",
    serviceType: ["Software Development", "Data Science", "Machine Learning", "Web Development", "AI Engineering"],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
      />
    </>
  )
}
