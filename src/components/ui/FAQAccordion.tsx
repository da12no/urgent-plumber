'use client'
import { useState } from 'react'

interface FAQ {
  question: string
  answer: string
}

interface FAQAccordionProps {
  faqs: FAQ[]
  className?: string
}

export function FAQAccordion({ faqs, className = '' }: FAQAccordionProps) {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div className={`divide-y divide-brand-border ${className}`}>
      {faqs.map((faq, i) => (
        <div key={i}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="flex w-full items-center justify-between gap-4 py-5 text-left text-brand-navy font-semibold hover:text-brand-red transition-colors"
            aria-expanded={open === i}
          >
            <span>{faq.question}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className={`w-5 h-5 shrink-0 transition-transform duration-200 ${open === i ? 'rotate-180' : ''}`}
              aria-hidden="true"
            >
              <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06z" clipRule="evenodd" />
            </svg>
          </button>
          {open === i && (
            <div className="pb-5 text-brand-muted leading-relaxed">{faq.answer}</div>
          )}
        </div>
      ))}
    </div>
  )
}
