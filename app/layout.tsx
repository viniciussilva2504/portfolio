import type { Metadata } from 'next'
import { Sora, Space_Mono } from 'next/font/google'
import StyledComponentsRegistry from '@/lib/registry'
import './globals.css'

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  display: 'swap',
})

const spaceMono = Space_Mono({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-space-mono',
  display: 'swap',
})

const BASE_URL = 'https://portfolio-ebon-nine-95.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Vinicius J. Silva — Frontend Developer',
    template: '%s | Vinicius J. Silva',
  },
  description:
    'Frontend Developer based in Porto, Portugal. Specialised in React, TypeScript, Redux and styled-components. Architecture background with a strong eye for UX and visual systems.',
  keywords: [
    'Frontend Developer',
    'React',
    'TypeScript',
    'Redux',
    'Cypress',
    'Next.js',
    'Porto',
    'Portugal',
    'Open to work',
  ],
  authors: [{ name: 'Vinicius J. Silva', url: BASE_URL }],
  creator: 'Vinicius J. Silva',
  openGraph: {
    type: 'website',
    url: BASE_URL,
    title: 'Vinicius J. Silva — Frontend Developer',
    description:
      'Frontend Developer based in Porto, Portugal. React · TypeScript · Redux · Cypress. Architecture background, open to work.',
    siteName: 'Vinicius J. Silva Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Vinicius J. Silva — Frontend Developer Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vinicius J. Silva — Frontend Developer',
    description:
      'Frontend Developer based in Porto, Portugal. React · TypeScript · Redux · Cypress.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    },
  },
  alternates: {
    canonical: BASE_URL,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${sora.variable} ${spaceMono.variable}`}>
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  )
}
