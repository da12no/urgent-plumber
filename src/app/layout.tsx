import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { StickyCallBar } from '@/components/layout/StickyCallBar'
import { BUSINESS_NAME, PHONE_DISPLAY, SITE_URL, TAGLINE } from '@/lib/config'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${BUSINESS_NAME} | Connecting Phoenix Homeowners With Local Plumbers`,
    template: `%s | ${BUSINESS_NAME}`,
  },
  description: `${TAGLINE}. Call ${PHONE_DISPLAY} to connect with an independent local plumbing contractor in the Phoenix metropolitan area.`,
  openGraph: {
    type: 'website',
    siteName: BUSINESS_NAME,
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <StickyCallBar />
      </body>
    </html>
  )
}
