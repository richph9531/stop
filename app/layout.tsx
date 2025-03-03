import type { Metadata } from 'next'
import './globals.css'
import { ReactNode } from "react"
import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
export const metadata: Metadata = {
  title: 'S.T.O.P.',
  description: 'Standing Together to Oppose Pornography',
}

interface RootLayoutProps {
  children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <link 
          rel="shortcut icon" 
          href="/favicon.ico?v=1" 
          type="image/x-icon"
        />
        <link 
          rel="icon" 
          href="/favicon.ico?v=1" 
          type="image/x-icon"
        />
      </head>
      <body>
        <div className="flex flex-col min-h-screen relative bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
          <Header />

          <main className="flex-grow container mx-auto px-4 py-4 md:py-8">
            {children}
          </main>

          <Footer />
        </div>
      </body>
    </html>
  )
}
