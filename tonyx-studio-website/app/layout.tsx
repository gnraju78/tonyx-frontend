import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Manrope } from 'next/font/google'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://tonyxstudio.com'),
  title: {
    default: 'TONYX Studio — Luxury Wedding Photography & Cinematography',
    template: '%s — TONYX Studio',
  },
  description:
    'TONYX Studio is an international luxury wedding photography and cinematography house. We preserve generations through timeless imagery, film, and handcrafted albums.',
  keywords: [
    'luxury wedding photography',
    'destination wedding',
    'wedding cinematography',
    'album design',
    'TONYX Studio',
  ],
  openGraph: {
    title: 'TONYX Studio — Luxury Wedding Photography & Cinematography',
    description:
      'We don’t just capture moments. We preserve generations. International luxury wedding photography, film, and album design.',
    type: 'website',
  },
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#0b0b0b',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${manrope.variable} bg-background`}>
      <body className="antialiased">
        <SiteHeader />
        {children}
        <SiteFooter />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
