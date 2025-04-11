import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { ExternalLink } from "lucide-react"
import snapScanQR from '@/public/snapscan-qr.png'

export default function DonatePage() {
  return (
    <div className="space-y-6">
      <Card className="content-card bg-gray-300">
        <CardHeader>
          <CardTitle>Support Our Mission</CardTitle>
          <CardDescription>Your donation helps us make a difference</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            S.T.O.P. relies on the generosity of supporters like you to continue our work. 
            Your donation helps us provide resources, education, and support to those affected by pornography.
          </p>
          <p className="mb-6">
            Every contribution, no matter the size, makes a significant impact in our mission to create 
            a safer society for women and children.
          </p>
          <p className="mb-6">
            Your support is crucial in our fight against pornography and sexual abuse.
          </p>
        </CardContent>
      </Card>

      <Card className="content-card bg-gray-300">
        <CardHeader>
          <CardTitle>Donate via SnapScan</CardTitle>
          <CardDescription>Fast, secure, and convenient</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center">
          <div className="relative w-[350px] h-[350px] mb-6">
            <Image
              src={snapScanQR}
              alt="SnapScan QR Code for donations"
              fill
              className="object-contain"
              priority
              sizes="350px"
              quality={90}
            />
          </div>
          
          <h3 className="text-lg font-semibold mb-2">How to donate using SnapScan:</h3>
          <ol className="list-decimal pl-5 space-y-2 mb-6">
            <li>Open the SnapScan app on your smartphone</li>
            <li>Scan the QR code above</li>
            <li>Enter the amount you wish to donate</li>
            <li>Complete the payment process in the app</li>
          </ol>
          
          <div className="text-sm text-muted-foreground mb-4 space-y-2">
            <p>Don&apos;t have SnapScan? Download the app:</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link 
                href="https://play.google.com/store/apps/details?id=com.fireid.snapscan" 
                className="text-primary hover:underline inline-flex items-center" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <svg className="h-5 w-5 mr-1" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
                Android
                <ExternalLink className="ml-1 h-3 w-3" />
              </Link>
              <Link 
                href="https://apps.apple.com/za/app/snapscan/id594791461" 
                className="text-primary hover:underline inline-flex items-center" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <svg className="h-5 w-5 mr-1" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                </svg>
                iOS
                <ExternalLink className="ml-1 h-3 w-3" />
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card className="content-card bg-gray-300">
        <CardHeader>
          <CardTitle>Other Ways to Support</CardTitle>
          <CardDescription>Beyond financial contributions</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            In addition to donations, there are many other ways you can support our cause:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Share our website and resources with those who need them</li>
            <li>Spread awareness about our mission on social media</li>
            <li>Partner with us to organize events and workshops</li>
          </ul>
          <div className="mt-6">
            <Link href="/contact" className="text-primary hover:underline flex items-center">
              Contact us to learn more about getting involved
            </Link>
          </div>
        </CardContent>
      </Card>
      <div className="mb-12"></div>
    </div>
  )
}
