import type { MetadataRoute } from "next"
import {linksData} from "@/data/static/links-data"

export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/admin/"],
    },
    sitemap: `${linksData.domain_url}/sitemap.xml`,
  }
}
