import type { Metadata } from 'next'
import StyledComponentsRegistry from '@/lib/registry'
import './globals.css'

const BASE_URL = 'https://portfolio-ebon-nine-95.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Vinicius Jesus da Silva — QA Analyst',
    template: '%s | Vinicius J. Silva',
  },
  description:
    'Vinicius Jesus da Silva is a QA Analyst in Porto, Portugal, focused on software testing, test automation, API validation and reliable user experiences.',
  keywords: [
    'QA Analyst',
    'Software Testing',
    'Test Automation',
    'Quality Engineering',
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
    title: 'Vinicius Jesus da Silva — QA Analyst',
    description:
      'QA Analyst focused on software testing, test automation and API validation. Based in Porto, Portugal.',
    siteName: 'Vinicius J. Silva Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vinicius Jesus da Silva — QA Analyst',
    description: 'QA Analyst focused on software testing and test automation.',
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
    <html lang="en">
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  )
}
