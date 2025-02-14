import type { Metadata } from 'next'
import './globals.css'
import { ReactNode } from "react"
import Link from "next/link"
import { FloatingMenu } from "./components/floating-menu"

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
        <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
          <header className="bg-primary text-primary-foreground">
            <div className="container mx-auto">
              <div className="flex items-center gap-2 md:gap-4">
                <FloatingMenu />
                <Link href="/" className="header-link py-4">
                  <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">S.T.O.P. - Standing Together to Oppose Pornography</h1>
                </Link>
              </div>
            </div>
          </header>

          <main className="flex-grow container mx-auto px-4 py-4 md:py-8">
            {children}
          </main>

          <footer className="bg-muted py-4 mt-auto">
            <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
              © S.T.O.P. 2025
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}
