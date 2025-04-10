import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import heroImage from '@/public/hero-image.jpg'

export default function HomePage() {
  return (
    <>
      <Card className="bg-gray-300 shadow-sm transition-colors mb-4">
          <CardHeader>
            <div className="relative w-full h-[250px] mb-6">
              <Image
                src={heroImage}
                alt="Break the cycle"
                fill
                className="object-cover rounded-t-lg"
                style={{ objectPosition: 'center 40%' }}
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
              <li>Curated educational resources</li>
              <li>Support for those struggling with pornography</li>
              <li>A safe community for affected individuals</li>
              <li>Help and hope for healing</li>
            </ul>
          </CardContent>
        </Card>
    </>
  )
}