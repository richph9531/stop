"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FloatingChatbot } from "./floating-chatbot"
import { HelpfulLinks } from "./components/helpful-links"
import { VideoResources } from "./components/video-resources"
import Image from "next/image"

export default function MentalHealthWebsite() {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-primary text-primary-foreground py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold">S.T.O.P. - Standing Together to Oppose Pornography</h1>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8 overflow-auto">
        <Tabs defaultValue="home" className="space-y-4">
          <TabsList className="sticky top-0 bg-background z-10">
            <TabsTrigger value="home">Home</TabsTrigger>
            <TabsTrigger value="contact">Contact Us</TabsTrigger>
            <TabsTrigger value="helpful-links">Helpful Links</TabsTrigger>
            <TabsTrigger value="video-resources">Video Resources</TabsTrigger>
          </TabsList>
          <TabsContent value="home">
            <Card>
              <CardHeader>
                <div className="relative w-full h-[200px] mb-6">
                  <Image
                    src="/hero-image.jpg"
                    alt="People supporting each other"
                    fill
                    className="object-cover rounded-t-lg"
                    priority
                  />
                </div>
                <CardTitle>Welcome to S.T.O.P.</CardTitle>
                <CardDescription>Standing Together to Oppose Pornography</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  We are dedicated to providing support, resources, and information to help individuals break free from pornography addiction and build healthier lives.
                </p>
                <p>
                  Our community offers:
                </p>
                <ul className="list-disc pl-5 space-y-2 mt-2">
                  <li>Educational resources and information</li>
                  <li>Support through our AI chatbot assistant</li>
                  <li>Curated helpful links and resources</li>
                  <li>Video content for recovery and education</li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="contact">
            <Card>
              <CardHeader>
                <CardTitle>Contact Us</CardTitle>
                <CardDescription>Get in touch with our support team</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* Social Links */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Connect With Us</h3>
                    <div className="flex space-x-4">
                      <a
                        href="https://www.facebook.com/groups/294768610534132"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-blue-600 hover:text-blue-800"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook">
                          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                        </svg>
                        <span>Facebook</span>
                      </a>
                      <a
                        href="https://wa.me/0722129531"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-green-600 hover:text-green-800"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle">
                          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                        </svg>
                        <span>WhatsApp</span>
                      </a>
                    </div>
                  </div>

                  {/* Email Form */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Send us a message</h3>
                    <form className="space-y-4">
                      <div className="grid gap-4">
                        <div className="grid gap-2">
                          <label htmlFor="name" className="text-sm font-medium">Name</label>
                          <input
                            id="name"
                            type="text"
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
                            placeholder="Your name"
                          />
                        </div>
                        <div className="grid gap-2">
                          <label htmlFor="email" className="text-sm font-medium">Email</label>
                          <input
                            id="email"
                            type="email"
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
                            placeholder="your@email.com"
                          />
                        </div>
                        <div className="grid gap-2">
                          <label htmlFor="message" className="text-sm font-medium">Message</label>
                          <textarea
                            id="message"
                            className="flex min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
                            placeholder="Your message..."
                          />
                        </div>
                      </div>
                      <button
                        type="submit"
                        className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground h-10 px-4 py-2 text-sm font-medium hover:bg-primary/90"
                      >
                        Send Message
                      </button>
                    </form>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="helpful-links">
            <HelpfulLinks />
          </TabsContent>
          <TabsContent value="video-resources">
            <VideoResources />
          </TabsContent>
        </Tabs>
      </main>

      <footer className="bg-muted py-4 mt-auto">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          © S.T.O.P. 2025
        </div>
      </footer>

      <FloatingChatbot />
    </div>
  )
}

