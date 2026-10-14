import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CTAButton } from '@/components/ui/CTAButton'
import { ServiceCard } from '@/components/ui/ServiceCard'
import { FAQAccordion } from '@/components/ui/FAQAccordion'
import { SERVICES } from '@/lib/services'
import { CITIES, REGION_LABELS } from '@/lib/cities'
import { BUSINESS_NAME, PHONE_DISPLAY, PHONE_HREF, SITE_URL, EMAIL } from '@/lib/config'

export const metadata: Metadata = {
  title: 'Plumber in Phoenix, AZ | Urgent Plumber - Connect With Local Contractors',
  description: 'Need a plumber in Phoenix? Urgent Plumber helps homeowners throughout the Phoenix metro area connect with independent local plumbing contractors for repairs, drain cleaning, water heaters, slab leaks, and more.',
  openGraph: {
    title: 'Plumber in Phoenix, AZ | Urgent Plumber',
    description: 'Connecting Phoenix metro homeowners with independent local plumbing contractors. Call for help with emergency plumbing, drain cleaning, water heaters, slab leaks, and more.',
    url: SITE_URL,
  },
  alternates: { canonical: SITE_URL },
}

const homepageFAQs = [
  {
    question: 'How do I find a plumber near me in Phoenix?',
    answer: "Call Urgent Plumber and tell us about your plumbing issue and your location. We'll help connect you with an independent local plumbing contractor who may be available to assist in your area of the Phoenix metropolitan area.",
  },
  {
    question: 'What should I do if a pipe bursts in my home?',
    answer: "First, turn off your main water shutoff valve to stop the flow of water. This is usually in your garage, utility room, or near the water meter at the street. Once the water is off, call for help. Take photos of any visible damage for your insurance company.",
  },
  {
    question: 'Why is my water heater not producing hot water?',
    answer: "The most common causes are a failed heating element (electric heaters), a pilot light that won't stay lit (gas heaters), a faulty thermostat, or significant sediment buildup at the bottom of the tank. Phoenix's very hard water accelerates sediment accumulation and can cause a water heater to fail sooner than it would in areas with softer water.",
  },
  {
    question: 'When should I call about a clogged drain?',
    answer: "If a plunger doesn't clear the drain after a few minutes of effort, or if multiple drains in your home are slow or backing up simultaneously, call for help. Multiple slow drains at once usually indicate a blockage in the main sewer line rather than an individual fixture drain, which requires professional equipment.",
  },
  {
    question: 'How do I know if I have a slab leak?',
    answer: "Common signs include a water bill that has increased without explanation, a warm or wet spot on the floor, the constant sound of running water when all fixtures are off, or cracks appearing in floor tiles. Phoenix homes are particularly susceptible to slab leaks because most sit on concrete foundations with copper supply lines running through the slab.",
  },
  {
    question: 'Can I request plumbing help in Mesa, Chandler, or other East Valley cities?',
    answer: "Yes. Urgent Plumber helps homeowners throughout the Greater Phoenix metropolitan area, including Mesa, Chandler, Gilbert, Tempe, Scottsdale, and other East Valley and West Valley communities. Call to discuss your location and plumbing needs.",
  },
  {
    question: 'How does Urgent Plumber connect homeowners with contractors?',
    answer: "Urgent Plumber is a free connection service. When you call, you tell us about your plumbing issue and location. We help connect you with independent local plumbing contractors who may be available to assist. The contractors are independent professionals, not employees of Urgent Plumber. You work directly with the contractor on the details of your service.",
  },
]

const commonProblems = [
  {
    question: 'No hot water',
    answer: "Could be a failed heating element, tripped breaker, pilot light issue, or sediment buildup that has overwhelmed your water heater. Phoenix's hard water shortens water heater life - if yours is more than 8 years old, consider evaluation.",
    service: '/services/water-heater-repair',
  },
  {
    question: 'Kitchen sink draining slowly',
    answer: "Grease and food debris accumulate along kitchen drain lines over time, narrowing the flow path. Hard water scale in Phoenix also builds up inside pipe walls. A drain snake or hydro jetting can clear the line.",
    service: '/services/drain-cleaning',
  },
  {
    question: 'Toilet running constantly',
    answer: "A continuously running toilet wastes hundreds to thousands of gallons per day. Usually caused by a worn flapper or fill valve - typically a straightforward, inexpensive repair.",
    service: '/services/toilet-repair',
  },
  {
    question: 'Water bill significantly higher than usual',
    answer: "A spike in your water bill with no change in usage is a classic sign of a hidden leak - often a slab leak in Phoenix homes. Turn off all water and watch your meter; if it keeps moving, water is going somewhere it shouldn't.",
    service: '/services/leak-detection',
  },
  {
    question: 'Low water pressure throughout the home',
    answer: "Whole-home low pressure can indicate a water main issue, failing pressure regulator, or - in older Phoenix homes - galvanized supply lines that have corroded internally to the point of restricting flow.",
    service: '/services/pipe-repair',
  },
  {
    question: 'Sewer odor in the home or yard',
    answer: "Sewer gas smell indoors usually points to a dry trap, failed wax ring on a toilet, or a crack in a drain line. Outdoors it often indicates a damaged or overloaded sewer line. Neither should be ignored.",
    service: '/services/sewer-line-repair',
  },
]

const whyUs = [
  {
    icon: 'M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25z',
    title: 'Simple Phone-Based Process',
    desc: "No online forms, no scheduling apps. Call us, describe your plumbing issue, and we help connect you with a local independent contractor. Straightforward.",
  },
  {
    icon: 'M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0z',
    title: 'Phoenix Metro Coverage',
    desc: "We connect homeowners throughout Greater Phoenix - from Surprise in the west to Queen Creek in the east, and communities throughout the East and West Valley.",
  },
  {
    icon: 'M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09zM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456z',
    title: 'Wide Range of Services',
    desc: "From emergency burst pipes to drain cleaning, water heater installation, slab leak repair, whole-home repiping, and more - we connect you with contractors for a broad range of plumbing needs.",
  },
  {
    icon: 'M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18',
    title: 'Transparent About How It Works',
    desc: "We're a connection service, not a plumbing company. Independent contractors perform the work. We're clear about that upfront so you know exactly what to expect.",
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: BUSINESS_NAME,
  url: SITE_URL,
  telephone: PHONE_DISPLAY,
  email: EMAIL,
  description: 'A free service connecting Phoenix metro homeowners with independent local plumbing contractors.',
  areaServed: {
    '@type': 'State',
    name: 'Arizona',
    containsPlace: { '@type': 'City', name: 'Phoenix' },
  },
}

const webSiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: BUSINESS_NAME,
  url: SITE_URL,
}

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }} />

      {/* Hero */}
      <section className="relative overflow-hidden" style={{ backgroundColor: 'var(--color-brand-navy)' }}>
        <div className="absolute inset-0">
          <Image
            src="/van.jpg"
            alt="Urgent Plumber service vehicle in Phoenix, Arizona"
            fill
            className="object-cover object-center opacity-20"
            priority
            sizes="100vw"
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-32">
          <div className="max-w-2xl">
            <p className="text-brand-blue-light text-sm font-bold uppercase tracking-widest mb-4">Phoenix Metro Plumbing Connections</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              Need a Plumber<br />in Phoenix?<br />
              <span className="text-brand-red">We Can Help.</span>
            </h1>
            <p className="text-white/80 text-lg sm:text-xl leading-relaxed mb-8 max-w-xl">
              Urgent Plumber helps homeowners throughout the Phoenix metro area connect with independent local plumbing contractors for repairs, installations, and urgent plumbing needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <CTAButton label={`Call Now · ${PHONE_DISPLAY}`} size="lg" />
              <Link href="/about" className="inline-flex items-center justify-center px-7 py-4 text-base font-semibold text-white border-2 border-white/30 rounded-lg hover:border-white/60 transition-colors">
                How It Works
              </Link>
            </div>
            <p className="text-white/50 text-sm">Serving Phoenix · Mesa · Chandler · Scottsdale · Tempe · Glendale and more</p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-20 bg-white" id="services">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-brand-red text-sm font-bold uppercase tracking-widest mb-2">What We Connect You For</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy mb-4">Plumbing Services Throughout Phoenix</h2>
            <p className="text-brand-muted max-w-2xl mx-auto">
              From burst pipe emergencies to routine drain cleaning, we connect Phoenix homeowners with independent contractors across a full range of plumbing services.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {SERVICES.map(s => <ServiceCard key={s.slug} service={s} />)}
          </div>
        </div>
      </section>

      {/* Common Problems */}
      <section className="py-16 md:py-20 bg-brand-surface" id="problems">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-brand-red text-sm font-bold uppercase tracking-widest mb-2">Sound Familiar?</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy mb-4">Common Plumbing Problems Phoenix Homeowners Face</h2>
            <p className="text-brand-muted max-w-2xl mx-auto">
              Phoenix&apos;s hard water, slab-on-grade construction, and desert climate create specific plumbing challenges. Here&apos;s what we hear about most.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {commonProblems.map((p, i) => (
              <div key={i} className="bg-white rounded-xl border border-brand-border p-6">
                <h3 className="font-bold text-brand-navy text-lg mb-2">{p.question}</h3>
                <p className="text-brand-muted text-sm leading-relaxed mb-4">{p.answer}</p>
                <Link href={p.service} className="text-sm font-semibold text-brand-blue hover:text-brand-red transition-colors flex items-center gap-1">
                  Learn about this service
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                    <path fillRule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-16 md:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-brand-red text-sm font-bold uppercase tracking-widest mb-2">Why Homeowners Call Us</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy mb-6">
                Connecting You With the Right Plumbing Help
              </h2>
              <p className="text-brand-muted leading-relaxed mb-8">
                When you have a plumbing problem, finding a qualified local contractor quickly matters. Urgent Plumber makes that process simpler - one call, and we work to connect you with an independent local contractor who can help with your specific situation in the Phoenix metro area.
              </p>
              <div className="space-y-6">
                {whyUs.map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-surface">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5 text-brand-blue" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-brand-navy mb-1">{item.title}</h3>
                      <p className="text-brand-muted text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <Image
                src="/van.jpg"
                alt="Urgent Plumber service vehicle ready to assist Phoenix homeowners"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-20" style={{ backgroundColor: 'var(--color-brand-navy)' }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-brand-blue-light text-sm font-bold uppercase tracking-widest mb-2">The Process</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">How Urgent Plumber Works</h2>
            <p className="text-white/60 max-w-xl mx-auto">Three steps from your plumbing problem to being connected with a contractor who can help.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                num: '01',
                title: 'Call Urgent Plumber',
                desc: 'Tell us about your plumbing issue and your location in the Phoenix metro area. No forms, no apps - just a phone call.',
              },
              {
                num: '02',
                title: 'Get Connected',
                desc: 'We help connect you with an independent local plumbing contractor who may be available to assist with your specific situation, subject to availability.',
              },
              {
                num: '03',
                title: 'Discuss Your Service',
                desc: 'The contractor speaks with you directly about the work needed, pricing, and scheduling. You work with the contractor on all service details.',
              },
            ].map((step, i) => (
              <div key={i} className="relative bg-white/5 rounded-xl p-8 border border-white/10">
                <span className="text-5xl font-extrabold text-white/10 absolute top-6 right-6">{step.num}</span>
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-red text-white font-bold text-xl mb-5">
                  {i + 1}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-white/60 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <CTAButton label={`Call Now · ${PHONE_DISPLAY}`} size="lg" />
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 md:py-20 bg-brand-surface" id="service-areas">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-brand-red text-sm font-bold uppercase tracking-widest mb-2">Where We Serve</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy mb-4">Phoenix Metro Service Area</h2>
            <p className="text-brand-muted max-w-xl mx-auto">We connect homeowners with plumbing contractors throughout the Greater Phoenix metropolitan area.</p>
          </div>
          {(['phoenix', 'east-valley', 'west-valley'] as const).map(region => (
            <div key={region} className="mb-8">
              <h3 className="text-lg font-bold text-brand-navy mb-4 flex items-center gap-2">
                <span className="inline-block h-1 w-6 bg-brand-red rounded" aria-hidden="true" />
                {REGION_LABELS[region]}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                {CITIES.filter(c => c.region === region).map(city => (
                  <Link
                    key={city.slug}
                    href={`/${city.slug}`}
                    className="rounded-lg border border-brand-border bg-white px-4 py-3 text-sm font-medium text-brand-navy hover:border-brand-blue hover:text-brand-red transition-all text-center"
                  >
                    {city.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-brand-red text-sm font-bold uppercase tracking-widest mb-2">Common Questions</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy">Frequently Asked Questions</h2>
          </div>
          <FAQAccordion faqs={homepageFAQs} />
          <div className="mt-8 text-center">
            <Link href="/faqs" className="text-brand-blue font-semibold hover:text-brand-red transition-colors">
              View all FAQs →
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-20 bg-brand-red">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Need Help With a Plumbing Problem?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            Call Urgent Plumber to discuss your plumbing needs and get help connecting with a local independent contractor in the Phoenix metro area.
          </p>
          <a
            href={PHONE_HREF}
            className="inline-flex items-center gap-3 px-10 py-5 text-xl font-extrabold text-brand-red bg-white rounded-xl hover:bg-white/90 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" aria-hidden="true">
              <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
            </svg>
            Call Now · {PHONE_DISPLAY}
          </a>
          <p className="mt-4 text-white/60 text-sm">
            Or email us at{' '}
            <a href={`mailto:${EMAIL}`} className="underline hover:text-white transition-colors">{EMAIL}</a>
          </p>
        </div>
      </section>
    </>
  )
}
