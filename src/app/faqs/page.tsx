import type { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { FAQAccordion } from '@/components/ui/FAQAccordion'
import { CTAButton } from '@/components/ui/CTAButton'
import { SITE_URL, PHONE_DISPLAY, BUSINESS_NAME } from '@/lib/config'

export const metadata: Metadata = {
  title: `Plumbing FAQs | ${BUSINESS_NAME} - Phoenix, AZ`,
  description: 'Answers to common questions about plumbing in Phoenix - slab leaks, hard water, water heaters, drain problems, and how our contractor connection service works.',
  alternates: { canonical: `${SITE_URL}/faqs` },
}

const faqSections = [
  {
    heading: 'How Urgent Plumber Works',
    faqs: [
      {
        question: 'What is Urgent Plumber?',
        answer: 'Urgent Plumber is a free contractor connection service. We help homeowners throughout the Greater Phoenix metropolitan area connect with independent local plumbing contractors for a wide range of plumbing needs. We are not a plumbing company and do not send our own technicians to your home.',
      },
      {
        question: 'Is there a cost to use this service?',
        answer: "There is no charge to call Urgent Plumber and use the connection service. The service is free to homeowners. You work directly with the contractor on pricing for the actual plumbing work - those costs are between you and the contractor.",
      },
      {
        question: 'How do I get connected with a contractor?',
        answer: 'Call the phone number listed on this site. Tell us about your plumbing issue and your location. We work to connect you with an independent local contractor who may be available to assist.',
      },
      {
        question: 'Are the plumbers employed by Urgent Plumber?',
        answer: "No. The contractors connected through this service are independent professionals. They operate their own businesses and are not employees or agents of Urgent Plumber. You work directly with the contractor on all service details.",
      },
      {
        question: 'Do you serve all of the Phoenix metro area?',
        answer: 'We help homeowners throughout Greater Phoenix, including the City of Phoenix, Mesa, Scottsdale, Chandler, Tempe, Gilbert, Glendale, Peoria, Surprise, Goodyear, Avondale, Buckeye, Queen Creek, and many other communities across the East and West Valley.',
      },
    ],
  },
  {
    heading: 'Plumbing in Phoenix - Common Questions',
    faqs: [
      {
        question: 'Does Phoenix have hard water?',
        answer: "Yes. Phoenix has very hard water - typically 200 to 350 mg/L of total dissolved solids depending on which water district supplies your home. This is considered very hard to extremely hard. It accelerates scale buildup in water heaters, pipes, faucets, and appliances throughout the home, and shortens the effective lifespan of water heaters compared to areas with softer water.",
      },
      {
        question: "What is a slab leak and why is it common in Phoenix?",
        answer: "A slab leak is a leak in a copper water line running through or under the concrete slab foundation of a home. Most Phoenix-area homes built between the 1950s and 1990s have copper supply lines embedded in the slab. Phoenix's combination of hard water chemistry, soil conditions, and temperature extremes accelerates a phenomenon called pinhole corrosion in copper pipes. Slab leaks can go undetected for months and cause significant damage if not addressed.",
      },
      {
        question: 'How do I know if I have a slab leak?',
        answer: "Common indicators include: a water bill that has increased significantly with no change in usage, a warm or damp spot on tile or hardwood floors, the sound of running water when all fixtures are off, cracks in floor tiles or baseboards, or mold/mildew smell without a visible source. If you notice any of these, call for professional leak detection.",
      },
      {
        question: "How long does a water heater last in Phoenix?",
        answer: "The average lifespan of a tank water heater nationally is 8-12 years. In Phoenix, hard water causes sediment to accumulate at the bottom of the tank faster than in most cities, often shortening the effective lifespan to 6-10 years. Regular flushing can extend the life somewhat. Tankless water heaters can last longer but also require descaling maintenance in hard water areas.",
      },
      {
        question: 'What should I do if multiple drains are slow or backing up?',
        answer: "Multiple slow drains simultaneously usually indicate a problem in the main sewer line, not an individual fixture. This can be a partial or complete blockage from grease accumulation, tree root intrusion, or a damaged line. This type of problem typically requires professional equipment (like a sewer snake or hydro jetter) and sometimes camera inspection to diagnose properly. Call for help rather than trying to treat it as a simple clog.",
      },
      {
        question: 'Can I use chemical drain cleaners on my drains?',
        answer: "Chemical drain cleaners can clear minor clogs but have some drawbacks: they can damage older pipes (especially if used repeatedly), they don't address root or grease blockages in sewer lines, and they're hazardous if mishandled. For recurring clogs or main line issues, mechanical clearing with professional equipment is more effective and safer for your pipes long-term.",
      },
      {
        question: 'What is hydro jetting and when is it used?',
        answer: "Hydro jetting uses high-pressure water to clean the inside of drain and sewer lines. It's more effective than snaking for heavy grease buildup, scale accumulation, and thoroughly clearing lines. It's commonly used as a follow-up to sewer camera inspection to clear confirmed blockages, or as preventive maintenance for homes with chronic drain problems. It's typically not suitable for older pipes in fragile condition.",
      },
      {
        question: 'Do I need to turn off my water before calling for plumbing help?',
        answer: "Only if water is actively flooding or you have a burst pipe. For non-emergency issues, there is no need to shut off your water before calling. However, it's worth knowing where your main water shutoff valve is located in your home in case you ever need it quickly. In most Phoenix homes it's in the garage or near the water heater.",
      },
    ],
  },
  {
    heading: 'Homeowner Tips',
    faqs: [
      {
        question: "What maintenance can I do to reduce plumbing problems?",
        answer: "In Phoenix specifically: flush your water heater annually to remove sediment, clean aerators and showerheads yearly to remove scale buildup, have your sewer line inspected if you have large trees in the yard, and check under sinks and around appliances periodically for drips or moisture. Knowing where your main water shutoff valve is before you need it is also very helpful.",
      },
      {
        question: "What is a pressure reducing valve (PRV) and do I need one?",
        answer: "A pressure reducing valve controls the water pressure coming into your home from the street. Phoenix municipal water systems often deliver water at higher pressure than is ideal for home plumbing. Most homes in the Valley already have PRVs installed. If yours is aging or failing, you may notice pressure fluctuations. PRVs typically last 10-15 years and then need replacement.",
      },
      {
        question: "Should I install a whole-house water softener in Phoenix?",
        answer: "Many Phoenix homeowners find water softeners beneficial given the very hard local water. A softener can reduce scale buildup in water heaters and pipes and extend appliance life. However, softeners require ongoing maintenance and salt refills. Speak with a licensed contractor if you are considering one - they can advise on sizing and installation requirements for your specific home.",
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
          <Breadcrumbs crumbs={[
            { label: 'Home', href: '/' },
            { label: 'FAQs' },
          ]} />
        </div>
      </div>

      <section className="py-14 md:py-18" style={{ backgroundColor: 'var(--color-brand-navy)' }}>
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            Plumbing FAQs - Phoenix, AZ
          </h1>
          <p className="text-white/70 text-lg leading-relaxed">
            Common questions about plumbing in Phoenix, how our connection service works, and tips for homeowners.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-14 space-y-14">
        {faqSections.map(section => (
          <div key={section.heading}>
            <h2 className="text-2xl font-bold text-brand-navy mb-6 pb-3 border-b-2 border-brand-red inline-block">
              {section.heading}
            </h2>
            <FAQAccordion faqs={section.faqs} />
          </div>
        ))}

        <div className="rounded-xl bg-brand-navy text-white p-8 text-center">
          <h2 className="text-2xl font-bold mb-3">Have a Question Not Listed Here?</h2>
          <p className="text-white/70 mb-6 max-w-xl mx-auto">
            Call Urgent Plumber and ask us directly. We&apos;re happy to discuss your plumbing situation and help connect you with a local contractor if needed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton label={`Call · ${PHONE_DISPLAY}`} size="lg" />
            <Link href="/contact" className="inline-flex items-center justify-center px-7 py-4 text-base font-semibold text-white border-2 border-white/30 rounded-lg hover:border-white/60 transition-colors">
              Contact Page
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
