import type { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { FAQAccordion } from '@/components/ui/FAQAccordion'
import { CTAButton } from '@/components/ui/CTAButton'
import { SITE_URL, PHONE_DISPLAY, BUSINESS_NAME } from '@/lib/config'

export const metadata: Metadata = {
  title: `Plumbing FAQs | ${BUSINESS_NAME} - Phoenix, AZ`,
  description: 'Answers to common plumbing questions for Phoenix homeowners - slab leaks, hard water, water heaters, drain problems, and more.',
  alternates: { canonical: `${SITE_URL}/faqs` },
}

const faqSections = [
  {
    heading: 'Emergency & Urgent Issues',
    faqs: [
      {
        question: 'What should I do first if a pipe bursts?',
        answer: "Turn off your main water shutoff valve immediately. In most Phoenix homes it's in the garage, a utility closet, or near the water heater. Once the water is off, call for help and take photos of any damage for insurance.",
      },
      {
        question: 'What counts as a plumbing emergency?',
        answer: "Active water flooding, sewage backing up into the home, no water supply to the whole house, a ruptured water heater, or a gas line smell near plumbing appliances. A slow drip under the sink is a problem but not an emergency.",
      },
      {
        question: "Can I turn off just part of my home's water?",
        answer: "Yes. Most fixtures have individual shutoff valves - behind toilets, under sinks, on the cold water line going into the water heater. Isolating a single fixture lets the rest of the home stay on.",
      },
    ],
  },
  {
    heading: 'Phoenix-Specific Plumbing',
    faqs: [
      {
        question: 'Does Phoenix have hard water?',
        answer: "Yes - very hard. Phoenix water typically measures 200-350 mg/L total dissolved solids depending on the source. It accelerates scale buildup in water heaters, pipes, and fixtures, and shortens the life of plumbing equipment compared to softer-water cities.",
      },
      {
        question: 'What is a slab leak and why is it so common in Phoenix?',
        answer: "A slab leak is a leak in a water line running through or under the concrete foundation. Most Phoenix homes built from the 1950s through 1990s have copper supply lines embedded in the slab. Phoenix's hard water chemistry, soil conditions, and temperature swings cause pinhole corrosion in those copper pipes over time. It's one of the most common plumbing problems in the Valley.",
      },
      {
        question: 'How do I know if I have a slab leak?',
        answer: "Watch for: an unexplained spike in your water bill, a warm or wet spot on the floor, the sound of running water when nothing is on, or cracks appearing in floor tiles or baseboards.",
      },
      {
        question: 'How long does a water heater last in Phoenix?',
        answer: "Nationally the average is 8-12 years. In Phoenix, hard water sediment buildup often shortens that to 6-10 years for tank water heaters. Regular flushing helps extend the life.",
      },
      {
        question: 'Why are multiple drains slow at the same time?',
        answer: "Multiple slow drains usually indicate a blockage in the main sewer line, not individual fixtures. That requires professional equipment - a sewer snake, hydro jetter, or camera inspection - not a plunger.",
      },
    ],
  },
  {
    heading: 'Homeowner Tips',
    faqs: [
      {
        question: 'What basic maintenance reduces plumbing problems?',
        answer: "In Phoenix: flush your water heater annually to remove sediment, clean aerators and showerheads yearly to remove scale, check under sinks and around appliances periodically for drips, and have sewer lines inspected if you have large trees. Know where your main shutoff valve is before you need it.",
      },
      {
        question: 'Should I use chemical drain cleaners?',
        answer: "For minor clogs they can help in a pinch, but they don't address main line blockages, can damage older pipes with repeated use, and are hazardous if mishandled. For recurring clogs or any main line issue, mechanical clearing is more effective.",
      },
      {
        question: 'What is a pressure reducing valve (PRV)?',
        answer: "A PRV controls the water pressure entering your home from the street. Phoenix municipal systems often deliver high pressure, and most homes in the Valley already have a PRV installed. They typically last 10-15 years. Pressure fluctuations or banging pipes can signal a failing PRV.",
      },
    ],
  },
]

const allFaqs = faqSections.flatMap(s => s.faqs)

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: allFaqs.map(f => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: { '@type': 'Answer', text: f.answer },
  })),
}

export default function FAQsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="bg-brand-surface border-b border-brand-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <Breadcrumbs crumbs={[{ label: 'Home', href: '/' }, { label: 'FAQs' }]} />
        </div>
      </div>

      <section className="py-14" style={{ backgroundColor: 'var(--color-brand-navy)' }}>
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">Plumbing FAQs - Phoenix, AZ</h1>
          <p className="text-white/70 text-lg">Common questions from Phoenix area homeowners.</p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-14 space-y-12">
        {faqSections.map(section => (
          <div key={section.heading}>
            <h2 className="text-xl font-bold text-brand-navy mb-5 pb-2 border-b border-brand-border">{section.heading}</h2>
            <FAQAccordion faqs={section.faqs} />
          </div>
        ))}

        <div className="rounded-xl bg-brand-navy text-white p-8 text-center">
          <h2 className="text-2xl font-bold mb-3">Still Have Questions?</h2>
          <p className="text-white/70 mb-6">Call us - we&apos;re happy to talk through your plumbing situation.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton label={`Call · ${PHONE_DISPLAY}`} size="lg" />
            <Link href="/contact" className="inline-flex items-center justify-center px-7 py-4 text-base font-semibold text-white border-2 border-white/30 rounded-lg hover:border-white/60 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
