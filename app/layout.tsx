import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Manrope } from 'next/font/google'
import './globals.css'

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
})

const siteUrl = 'https://projectgaj.in'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Project GAJ | Technology Made Simple',
  description:
    'Project GAJ is building practical, accessible and reliable digital solutions for schools, institutions and growing businesses.',
  generator: 'v0.app',
  applicationName: 'Project GAJ',
  keywords: [
    'Project GAJ',
    'technology made simple',
    'digital solutions',
    'school software',
    'small business software',
    'India technology venture',
  ],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: 'website',
    url: siteUrl,
    siteName: 'Project GAJ',
    title: 'Project GAJ | Technology Made Simple',
    description:
      'Practical, accessible and reliable digital solutions for schools, institutions and growing businesses.',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Project GAJ | Technology Made Simple',
    description:
      'Practical, accessible and reliable digital solutions for schools, institutions and growing businesses.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#0d1b2a',
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Project GAJ',
  url: siteUrl,
  slogan: 'Technology made simple.',
  email: 'hello@projectgaj.in',
  description:
    'An early-stage technology venture building practical, accessible and reliable digital solutions for schools, institutions and growing businesses.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${manrope.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
