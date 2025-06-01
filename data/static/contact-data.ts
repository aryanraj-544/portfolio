import { linksData } from "./links-data"

export const contactData = {
  title: "Let's Work Together",
  subtitle: "Have a project in mind? I'd love to hear about it and discuss how we can bring your ideas to life.",
  form: {
    fields: {
      name: "Full Name",
      email: "Email Address",
      subject: "Subject",
      message: "Message",
    },
    submitButton: "Send Message",
  },
  contactInfo: [
    {
      icon: "Mail",
      label: "Email",
      value: linksData.email,
      href: `mailto:${linksData.email}`,
    },
    {
      icon: "Phone",
      label: "Phone",
      value: linksData.phone,
      href: `tel:${linksData.phone}`,
    },
    {
      icon: "MapPin",
      label: "Location",
      value: linksData.location,
      href: linksData.locationUrl,
    },
  ],
  socialLinks: [
    {
      icon: linksData.social.github.icon,
      label: linksData.social.github.label,
      href: linksData.social.github.url,
    },
    {
      icon: linksData.social.linkedin.icon,
      label: linksData.social.linkedin.label,
      href: linksData.social.linkedin.url,
    },
    {
      icon: linksData.social.twitter.icon, // This will be "X"
      label: linksData.social.twitter.label,
      href: linksData.social.twitter.url,
    },
  ],
  getInTouch: {
    title: "Get in Touch",
    description:
      "I'm always interested in hearing about new opportunities and exciting projects. Whether you have a question or just want to say hi, feel free to reach out!",
  },
}
