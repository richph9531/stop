import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'S.T.O.P.',
  description: 'Standing Together to Oppose Pornography',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
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
      <body>{children}</body>
    </html>
  )
}
