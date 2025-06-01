"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"
import { footerData } from "@/data/static/footer-data"

const iconMap = {
  Github,
  Linkedin,
  Mail,
}

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-2">{footerData.brand.name}</h3>
            <p className="text-muted-foreground mb-4">{footerData.brand.tagline}</p>
            <div className="flex space-x-4">
              {footerData.socialLinks.map((link, index) => {
                const Icon = iconMap[link.icon as keyof typeof iconMap]
                return (
                  <Button key={index} variant="ghost" size="icon" asChild>
                    <a href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.name}>
                      <Icon className="w-5 h-5" />
                    </a>
                  </Button>
                )
              })}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{footerData.quickLinks.title}</h4>
            <ul className="space-y-2">
              {footerData.quickLinks.links.map((link, index) => (
                <li key={index}>
                  <Link href={link.url} className="text-muted-foreground hover:text-foreground transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{footerData.contact.title}</h4>
            <div className="space-y-2 text-muted-foreground">
              <p>{footerData.contact.email}</p>
              <p>{footerData.contact.availability}</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>{footerData.copyright}</p>
        </div>
      </div>
    </footer>
  )
}
