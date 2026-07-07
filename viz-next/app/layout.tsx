import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import localFont from 'next/font/local'
import './globals.css'

// Neue Haas Grotesk (self-hosted) + JetBrains Mono — shared with datasources-ui.
const nhgText = localFont({
  variable: '--font-nhg',
  display: 'swap',
  src: [
    { path: './fonts/nhg-text-roman.woff2', weight: '400', style: 'normal' },
    { path: './fonts/nhg-text-italic.woff2', weight: '400', style: 'italic' },
    { path: './fonts/nhg-text-medium.woff2', weight: '500', style: 'normal' },
    { path: './fonts/nhg-text-bold.woff2', weight: '700', style: 'normal' },
  ],
})
const nhgDisplay = localFont({
  variable: '--font-nhg-display',
  display: 'swap',
  src: [
    { path: './fonts/nhg-display-light.woff2', weight: '300', style: 'normal' },
    { path: './fonts/nhg-display-medium.woff2', weight: '500', style: 'normal' },
    { path: './fonts/nhg-display-bold.woff2', weight: '700', style: 'normal' },
  ],
})
export const metadata: Metadata = {
  title: 'tech-bio-map · techbio primitive & venture explorer',
  description:
    'Interactive relational map of technical primitives, companies and startup ideas across the tech-bio landscape.',
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f6f4ee' },
    { media: '(prefers-color-scheme: dark)', color: '#1a1713' },
  ],
  userScalable: false,
}

// Set the theme class before paint (no flash). Mirrors datasources-ui.
const themeInit = `(function(){try{var t=localStorage.getItem('tbm-theme');if(t!=='light'&&t!=='dark')t=matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';document.documentElement.classList.add(t)}catch(e){document.documentElement.classList.add('dark')}})()`

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${nhgText.variable} ${nhgDisplay.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
      </head>
      <body className="bg-background font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
