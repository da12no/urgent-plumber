import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { StickyCallBar } from '@/components/layout/StickyCallBar'
import { BUSINESS_NAME, PHONE_DISPLAY, SITE_URL } from '@/lib/config'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${BUSINESS_NAME} | Plumber in Phoenix, AZ`,
    template: `%s | ${BUSINESS_NAME}`,
  },
  description: `Need a plumber in Phoenix? Urgent Plumber is available 24/7. Call ${PHONE_DISPLAY} for emergency plumbing, drain cleaning, water heater repair, slab leaks, and more throughout the Phoenix metro area.`,
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
