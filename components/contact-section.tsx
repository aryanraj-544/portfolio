"use client"

import type React from "react"
import { useState } from "react"
import dynamic from 'next/dynamic'
import { Mail, Phone, MapPin, Github, Linkedin, X } from "lucide-react"
import { contactData } from "@/data/static/contact-data"
import { linksData } from "@/data/static/links-data"

// Dynamically import UI components
const Button = dynamic(() => import('@/components/ui/button').then(mod => mod.Button))
const Input = dynamic(() => import('@/components/ui/input').then(mod => mod.Input))
const Textarea = dynamic(() => import('@/components/ui/textarea').then(mod => mod.Textarea))
const Card = dynamic(() => import('@/components/ui/card').then(mod => mod.Card))
const CardContent = dynamic(() => import('@/components/ui/card').then(mod => mod.CardContent))
const CardHeader = dynamic(() => import('@/components/ui/card').then(mod => mod.CardHeader))
const CardTitle = dynamic(() => import('@/components/ui/card').then(mod => mod.CardTitle))

const iconMap = {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  X, 
}

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null
    message: string
  }>({ type: null, message: "" })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: "" })

    // Validate form data before sending
    const trimmedData = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      subject: formData.subject.trim(),
      message: formData.message.trim(),
    }

    // Client-side validation
    if (!trimmedData.name || trimmedData.name.length < 2) {
      setSubmitStatus({
        type: "error",
        message: "Please provide a valid name (at least 2 characters)",
      })
      setIsSubmitting(false)
      return
    }

    if (!trimmedData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedData.email)) {
      setSubmitStatus({
        type: "error",
        message: "Please provide a valid email address",
      })
      setIsSubmitting(false)
      return
    }

    if (!trimmedData.subject || trimmedData.subject.length < 3) {
      setSubmitStatus({
        type: "error",
        message: "Please provide a subject (at least 3 characters)",
      })
      setIsSubmitting(false)
      return
    }

    if (!trimmedData.message || trimmedData.message.length < 10) {
      setSubmitStatus({
        type: "error",
        message: "Please provide a detailed message (at least 10 characters)",
      })
      setIsSubmitting(false)
      return
    }

    try {
      const response = await fetch(linksData.mail_server_url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          name: trimmedData.name,
          email: trimmedData.email,
          subject: trimmedData.subject,
          message: trimmedData.message,
        }),
      })

      // Log the response for debugging
      console.log("Response status:", response.status)
      console.log("Response headers:", response.headers)

      let result
      const contentType = response.headers.get("content-type")
      
      if (contentType && contentType.includes("application/json")) {
        result = await response.json()
      } else {
        const textResult = await response.text()
        console.log("Non-JSON response:", textResult)
        result = { message: textResult }
      }

      console.log("Response data:", result)

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: result.message || "Message sent successfully! Thank you for reaching out.",
        })
        setFormData({ name: "", email: "", subject: "", message: "" })
      } else {
        // Handle error response from your Supabase function
        setSubmitStatus({
          type: "error",
          message: result.details || result.error || "Failed to send message. Please try again.",
        })
      }
      
    } catch (error) {
      console.error("Contact form error:", error)
      
      let errorMessage = "Network error. Please check your connection and try again."
      
      if (error instanceof TypeError && error.message.includes('fetch')) {
        errorMessage = "Unable to connect to the server. Please check if the email service is running."
      } else if (error instanceof Error) {
        errorMessage = `Error: ${error.message}`
      }
      
      setSubmitStatus({
        type: "error",
        message: errorMessage,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-glow">{contactData.title}</h2>
          <p className="text-xl text-muted-foreground/90 max-w-3xl mx-auto">{contactData.subtitle}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <Card className="card-hover">
              <CardHeader>
                <CardTitle>{contactData.getInTouch.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground/90 mb-6">{contactData.getInTouch.description}</p>
                <div className="space-y-4">
                  {contactData.contactInfo.map((info, index) => {
                    const Icon = iconMap[info.icon as keyof typeof iconMap]
                    return (
                      <div key={index} className="flex items-center space-x-3">
                        <Icon className="w-5 h-5 text-muted-foreground" />
                        <div>
                          <div className="font-medium">{info.label}</div>
                          <a
                            href={info.href}
                            className="text-muted-foreground/90 hover:text-foreground transition-colors"
                          >
                            {info.value}
                          </a>
                        </div>
                      </div>
                    )
                  })}
                </div>
                <div className="flex space-x-4 mt-6">
                  {contactData.socialLinks.map((link, index) => {
                    const Icon = iconMap[link.icon as keyof typeof iconMap]
                    return (
                      <Button key={index} variant="ghost" size="icon" asChild>
                        <a href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label}>
                          <Icon className="w-5 h-5" />
                        </a>
                      </Button>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="card-hover">
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      {contactData.form.fields.name} *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={
                        formData.name.trim().length > 0 && formData.name.trim().length < 2 ? "border-red-500" : ""
                      }
                    />
                    {formData.name.trim().length > 0 && formData.name.trim().length < 2 && (
                      <p className="text-red-500 text-xs mt-1">Name must be at least 2 characters</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      {contactData.form.fields.email} *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={
                        formData.email.trim().length > 0 && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())
                          ? "border-red-500"
                          : ""
                      }
                    />
                    {formData.email.trim().length > 0 && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim()) && (
                      <p className="text-red-500 text-xs mt-1">Please enter a valid email address</p>
                    )}
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    {contactData.form.fields.subject} *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className={
                      formData.subject.trim().length > 0 && formData.subject.trim().length < 3 ? "border-red-500" : ""
                    }
                  />
                  {formData.subject.trim().length > 0 && formData.subject.trim().length < 3 && (
                    <p className="text-red-500 text-xs mt-1">Subject must be at least 3 characters</p>
                  )}
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    {contactData.form.fields.message} *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className={
                      formData.message.trim().length > 0 && formData.message.trim().length < 10 ? "border-red-500" : ""
                    }
                  />
                  {formData.message.trim().length > 0 && formData.message.trim().length < 10 && (
                    <p className="text-red-500 text-xs mt-1">Message must be at least 10 characters</p>
                  )}
                  <p className="text-xs text-muted-foreground mt-1">
                    {formData.message.trim().length}/10 characters minimum
                  </p>
                </div>
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : contactData.form.submitButton}
                </Button>
              </form>
              {submitStatus.type && (
                <div
                  className={`mt-4 p-4 rounded-lg ${
                    submitStatus.type === "success"
                      ? "bg-green-100 text-green-800 border border-green-200 dark:bg-green-900/20 dark:text-green-400 dark:border-green-800"
                      : "bg-red-100 text-red-800 border border-red-200 dark:bg-red-900/20 dark:text-red-400 dark:border-red-800"
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}