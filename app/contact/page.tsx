"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SocialMediaLinks } from './components/social-media-links';
import { ContactForm } from './components/contact-form';


export default function ContactPage() {
  return (
    <div className="space-y-6">
      <Card className="content-card bg-gray-300">
        <CardHeader>
          <CardTitle>Connect with Us</CardTitle>
          <CardDescription>Follow us on social media</CardDescription>
        </CardHeader>
        <CardContent>
          <SocialMediaLinks />
        </CardContent>
      </Card>

      <Card className="content-card bg-gray-300">
        <CardHeader>
          <CardTitle>Contact Us</CardTitle>
          <CardDescription>Get in touch with our team</CardDescription>
        </CardHeader>
        <CardContent>
          <ContactForm />
        </CardContent>
      </Card>
      <div className="mb-12"></div>
    </div>
  )
} 