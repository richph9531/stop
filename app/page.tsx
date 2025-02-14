import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import heroImage from '@/public/hero-image.jpg'

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
      <main className="flex-grow container mx-auto px-4">
        <Card className="content-card">
          <CardHeader>
            <div className="relative w-full h-[200px] mb-6">
              <Image
                src={heroImage}
                alt="Break the cycle"
                fill
                className="object-cover rounded-t-lg"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                quality={85}
              />
            </div>
            <CardTitle>Welcome to S.T.O.P.</CardTitle>
            <CardDescription>Standing Together to Oppose Pornography</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              We are dedicated to providing support, resources, and information to help individuals break free from pornography addiction and build healthier lives.
            </p>
            <p className="mb-4 text-muted-foreground italic">
              Our mission is to promote a society in which children are nurtured in an environment of sound family values and in which women and children in particular are protected from sexual crime, sexual exploitation, abuse and violence in accordance with their constitutional rights.
            </p>
            <p>
              Our community offers:
            </p>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li>A connection point for those struggling with porn consumption</li>
              <li>Curated educational resources and information</li>
              <li>Video content for recovery and education</li>
              <li>A safe space for those who have been affected by pornography</li>
              <li>A community of support and understanding</li>
              <li>A place to find help and hope</li>
            </ul>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}

