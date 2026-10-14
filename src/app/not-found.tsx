import Link from 'next/link'
import { CTAButton } from '@/components/ui/CTAButton'
import { PHONE_DISPLAY } from '@/lib/config'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 py-20 text-center">
      <p className="text-brand-red text-sm font-bold uppercase tracking-widest mb-4">404 - Page Not Found</p>
      <h1 className="text-4xl sm:text-5xl font-extrabold text-brand-navy mb-4">
        This page doesn&apos;t exist.
      </h1>
      <p className="text-brand-muted text-lg max-w-md mb-8 leading-relaxed">
        The page you&apos;re looking for may have moved or the URL might be incorrect. Try one of the links below.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 mb-10">
        <CTAButton label={`Call · ${PHONE_DISPLAY}`} size="lg" />
        <Link
          href="/"
          className="inline-flex items-center justify-center px-7 py-4 text-base font-semibold text-brand-navy border-2 border-brand-border rounded-lg hover:border-brand-navy transition-colors"
        >
          Back to Home
        </Link>
      </div>
      <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
        <Link href="/services" className="text-brand-blue hover:text-brand-red transition-colors">All Services</Link>
        <Link href="/about" className="text-brand-blue hover:text-brand-red transition-colors">About</Link>
        <Link href="/faqs" className="text-brand-blue hover:text-brand-red transition-colors">FAQs</Link>
        <Link href="/contact" className="text-brand-blue hover:text-brand-red transition-colors">Contact</Link>
      </div>
    </div>
  )
}
