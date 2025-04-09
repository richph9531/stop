import type { Metadata } from 'next'
import './globals.css'
import { ReactNode } from "react"
import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import { League_Spartan } from 'next/font/google'

const leagueSpartan = League_Spartan({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-league-spartan',
})

export const metadata: Metadata = {
  title: 'S.T.O.P.',
  description: 'Standing Together to Oppose Pornography',
}

interface RootLayoutProps {
  children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={`${leagueSpartan.variable}`}>
      <head>
        <link 
          rel="shortcut icon" 
          href={`/favicon.ico?v=${Date.now()}`} 
          type="image/x-icon"
        />
        <link 
          rel="icon" 
          href={`/favicon.ico?v=${Date.now()}`} 
          type="image/x-icon"
        />
        {/* Cache-busting meta tags */}
        <meta httpEquiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />
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
