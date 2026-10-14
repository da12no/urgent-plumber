import { SERVICES, type Service } from './services'
import { SITE_URL, BUSINESS_NAME, PHONE_DISPLAY } from './config'

// Full offer catalog for a given city - all 19 services with rich descriptions
// Injected as JSON-LD structured data so AI crawlers and Google's schema parser
// consume keyword-dense service content without cluttering the visible page UI.
export function buildOfferCatalog(cityName: string) {
  return {
    '@type': 'OfferCatalog',
    name: `Plumbing Services in ${cityName}, Arizona`,
    itemListElement: SERVICES.map((s: Service) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: `${s.name} in ${cityName}, AZ`,
        description: `${s.intro} ${s.serviceDescription} ${s.phoenixContext}`,
        url: `${SITE_URL}/services/${s.slug}`,
        provider: {
          '@type': 'Organization',
          name: BUSINESS_NAME,
          url: SITE_URL,
        },
        areaServed: {
          '@type': 'City',
          name: cityName,
          containedInPlace: { '@type': 'State', name: 'Arizona' },
        },
        additionalProperty: [
          ...s.symptoms.map(symptom => ({
            '@type': 'PropertyValue',
            name: 'symptom',
            value: symptom,
          })),
          ...s.causes.map(cause => ({
            '@type': 'PropertyValue',
            name: 'cause',
            value: cause,
          })),
        ],
      },
    })),
  }
}

// Full local business schema for a city page
export function buildCitySchema(cityName: string, citySlug: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: BUSINESS_NAME,
    description: `Plumbing services in ${cityName}, Arizona. Emergency plumbing, drain cleaning, water heater repair and replacement, slab leak detection and repair, toilet repair, faucet repair, garbage disposal repair, pipe repair, whole-home repiping, hydro jetting, sewer camera inspection, water line repair, gas line plumbing, shower and bathtub plumbing, and plumbing inspections.`,
    url: `${SITE_URL}/${citySlug}`,
    telephone: PHONE_DISPLAY,
    areaServed: {
      '@type': 'City',
      name: cityName,
      containedInPlace: { '@type': 'State', name: 'Arizona' },
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: cityName,
      addressRegion: 'AZ',
      addressCountry: 'US',
    },
    hasOfferCatalog: buildOfferCatalog(cityName),
    knowsAbout: SERVICES.map(s => s.name),
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '00:00',
        closes: '23:59',
      },
    ],
  }
}

// Rich service schema for individual service pages - includes all city variants
export function buildServiceSchema(service: Service) {
  const cityNames = [
    'Phoenix', 'Mesa', 'Scottsdale', 'Chandler', 'Tempe', 'Gilbert',
    'Glendale', 'Peoria', 'Surprise', 'Goodyear', 'Avondale', 'Buckeye',
    'Queen Creek', 'Ahwatukee', 'North Phoenix', 'Paradise Valley',
    'Fountain Hills', 'Apache Junction', 'San Tan Valley', 'El Mirage',
    'Sun City', 'Litchfield Park',
  ]

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: `${service.intro} ${service.serviceDescription} ${service.phoenixContext}`,
    url: `${SITE_URL}/services/${service.slug}`,
    provider: {
      '@type': 'Organization',
      name: BUSINESS_NAME,
      url: SITE_URL,
      telephone: PHONE_DISPLAY,
    },
    areaServed: cityNames.map(city => ({
      '@type': 'City',
      name: city,
      containedInPlace: { '@type': 'State', name: 'Arizona' },
    })),
    serviceType: service.name,
    additionalProperty: [
      ...service.symptoms.map(s => ({
        '@type': 'PropertyValue',
        name: 'symptom',
        value: s,
      })),
      ...service.causes.map(c => ({
        '@type': 'PropertyValue',
        name: 'commonCause',
        value: c,
      })),
      {
        '@type': 'PropertyValue',
        name: 'whenToCall',
        value: service.whenToCall,
      },
    ],
    knowsAbout: service.relatedSlugs.map(slug => {
      const rel = SERVICES.find(s => s.slug === slug)
      return rel ? rel.name : slug
    }),
  }
}

// FAQ schema builder
export function buildFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(f => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  }
}
