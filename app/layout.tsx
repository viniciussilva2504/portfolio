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

export const metadata: Metadata = {
  title: 'Vinicius J. Silva — Frontend Developer',
  description:
    'Frontend Developer · React · TypeScript · Redux · Cypress | Architecture background | Porto, Portugal',
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
