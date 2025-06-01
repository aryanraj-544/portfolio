import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageLoader } from "@/components/page-loader"
import { ScrollToTop } from "@/components/scroll-to-top"
import { linksData } from "@/data/static/links-data"
const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL(`${linksData.domain_url}`),
  title: {
    default: "Aryan Raj - Software Developer & Data Scientist",
    template: "%s | Aryan Raj",
  },
  description:
    "Experienced Software Developer, Data Scientist & AI Engineer specializing in Python, React, Machine Learning, and scalable web applications. Available for freelance projects.",
  keywords: [
    "Software Developer",
    "Data Scientist",
    "AI Engineer",
    "Machine Learning",
    "Python Developer",
    "React Developer",
    "Full Stack Developer",
    "Web Development",
    "Data Analysis",
    "Portfolio",
    "Freelancer",
    "Bengaluru",
    "India",
    "TensorFlow",
    "Next.js",
    "PostgreSQL",
    "AWS",
  ],
  authors: [{ name: "Aryan Raj", url: `${linksData.domain_url}` }],
  creator: "Aryan Raj",
  publisher: "Aryan Raj",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: `${linksData.domain_url}`,
    title: "Aryan Raj - Software Developer & Data Scientist",
    description:
      "Experienced Software Developer, Data Scientist & AI Engineer specializing in Python, React, Machine Learning, and scalable web applications.",
    siteName: "Aryan Raj Portfolio",
    images: [
      {
        url: `${linksData.linkPreview}`,
        width: 1200,
        height: 630,
        alt: "Aryan Raj - Software Developer & Data Scientist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aryan Raj - Software Developer & Data Scientist",
    description:
      "Experienced Software Developer, Data Scientist & AI Engineer specializing in Python, React, Machine Learning, and scalable web applications.",
    creator: "@aryanraj544",
    images: `${linksData.linkPreview}`,
  },
  alternates: {
    canonical: `${linksData.domain_url}`,
  },
  category: "Technology",  
    
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="canonical" href= {linksData.domain_url} />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#000000" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <PageLoader />
          <ScrollToTop />
          <div className="min-h-screen bg-black relative">
            {/* Global 3D Background Elements */}
            <div className="fixed inset-0 -z-10 pointer-events-none">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900/30 via-black to-gray-900/30" />
              <div className="shape-3d cube top-20 left-20 opacity-15" />
              <div className="shape-3d sphere bottom-20 right-20 opacity-10" />
              <div className="shape-3d pyramid top-1/2 left-10 opacity-20" />
              <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-500/5 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-purple-500/5 rounded-full blur-3xl" />

              {/* Geometric pattern overlay */}
              <div className="absolute inset-0 opacity-10">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `
                    linear-gradient(45deg, #3b82f6 1px, transparent 1px),
                    linear-gradient(-45deg, #8b5cf6 1px, transparent 1px),
                    linear-gradient(90deg, #10b981 1px, transparent 1px)
                  `,
                    backgroundSize: "60px 60px, 60px 60px, 30px 30px",
                    backgroundPosition: "0 0, 0 0, 0 0",
                  }}
                />
              </div>
            </div>
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
