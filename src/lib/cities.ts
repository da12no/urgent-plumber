export type CityRegion = 'phoenix' | 'east-valley' | 'west-valley'

export interface CityFAQ {
  question: string
  answer: string
}

export interface City {
  slug: string
  name: string
  region: CityRegion
  title: string
  metaDescription: string
  h1: string
  intro: string
  localFacts: string
  commonIssues: string[]
  nearbySlug: string[]
  faqs: CityFAQ[]
}

export const CITIES: City[] = [
  {
    slug: 'phoenix',
    name: 'Phoenix',
    region: 'phoenix',
    title: 'Plumbing Services in Phoenix, AZ | Urgent Plumber',
    metaDescription: 'Need a plumber in Phoenix, AZ? Urgent Plumber helps Phoenix homeowners connect with independent local plumbing contractors for repairs, drain cleaning, water heaters, and more.',
    h1: 'Need Plumbing Help in Phoenix, Arizona?',
    intro: 'Phoenix is one of the largest and most diverse cities in the country, with housing stock ranging from historic neighborhoods near downtown built in the 1920s and 1930s all the way to brand-new construction on the city\'s expanding boundaries. This range means plumbing problems in Phoenix span a wide spectrum - from century-old cast iron drain lines in Willo District homes to hard water issues in Ahwatukee townhomes built last decade. Urgent Plumber helps Phoenix homeowners connect with independent local plumbing contractors for a wide range of plumbing services.',
    localFacts: 'Phoenix\'s older central neighborhoods - Willo, Encanto, F.Q. Story, and Coronado - have housing stock from the 1920s through 1940s with original galvanized steel supply lines that are now at or past the end of their natural service life. Many of these homes also have original clay sewer lines. Further from downtown, homes from the 1950s through 1970s have copper supply lines embedded in concrete slabs - the combination most prone to Phoenix\'s documented pinhole leak problem. Phoenix\'s water chemistry, soil composition, and extreme temperature swings all contribute to an accelerated pace of plumbing wear compared to many other cities.',
    commonIssues: [
      'Pinhole leaks in copper supply lines in slab-on-grade homes',
      'Aging galvanized supply lines in central Phoenix homes built before 1950',
      'Sewer line root intrusion from mature trees in established neighborhoods',
      'Water heater problems accelerated by hard water scale buildup',
      'Hard water scale clogging aerators, showerheads, and appliances',
    ],
    nearbySlug: ['scottsdale', 'tempe', 'glendale', 'north-phoenix', 'ahwatukee'],
    faqs: [
      {
        question: 'How do I find a plumber in Phoenix?',
        answer: 'Call Urgent Plumber to connect with an independent local plumbing contractor in the Phoenix area. We help homeowners get connected with contractors who may be available to assist with a wide range of plumbing needs.',
      },
      {
        question: 'What plumbing problems are most common in Phoenix homes?',
        answer: 'Slab leaks (pinhole copper failures under the concrete foundation), hard water scale buildup, water heater issues, and drain problems are among the most common. The age of the home and its original plumbing materials significantly affect which problems occur.',
      },
      {
        question: 'Does Phoenix have hard water?',
        answer: 'Yes. Phoenix has very hard water, typically measuring 200-350 mg/L of total dissolved solids depending on the source. This accelerates scale buildup in water heaters, pipes, and fixtures throughout the home.',
      },
    ],
  },
  {
    slug: 'north-phoenix',
    name: 'North Phoenix',
    region: 'phoenix',
    title: 'Plumbing Services in North Phoenix, AZ | Urgent Plumber',
    metaDescription: 'Need a plumber in North Phoenix? Urgent Plumber connects homeowners with independent local plumbing contractors for repairs, water heaters, drain cleaning, and more in North Phoenix.',
    h1: 'Need Plumbing Help in North Phoenix?',
    intro: 'North Phoenix - encompassing areas like Anthem, Desert Ridge, Deer Valley, and the rapidly developing areas around the Loop 101 and I-17 - is home to a significant concentration of homes built in the 1990s through 2010s. While newer than much of the Valley, these homes still face Phoenix-specific challenges: exceptionally hard water, summer heat that stresses outdoor plumbing, and the soil conditions that affect all underground lines in the region. Urgent Plumber helps North Phoenix homeowners connect with independent local contractors for their plumbing needs.',
    localFacts: 'North Phoenix\'s newer housing stock means fewer galvanized steel or old copper-in-slab issues compared to central Phoenix, but water heater lifespan is still shortened by hard water, and PEX plumbing - common in homes built after 2000 - comes with its own set of considerations as fittings age. The Anthem community in far north Phoenix and some areas near Cave Creek Road have homes that were built rapidly during the 2000s housing boom, and those homes are now entering the age range where water heaters, main shutoff valves, and certain fittings commonly require attention.',
    commonIssues: [
      'Water heater failure and sediment buildup from hard water',
      'Hard water scale on fixtures, showerheads, and appliances',
      'Irrigation system leaks from UV-degraded PVC in the desert sun',
      'Garbage disposal and kitchen drain issues',
      'Pressure relief valve issues on aging water heaters',
    ],
    nearbySlug: ['phoenix', 'scottsdale', 'peoria', 'surprise'],
    faqs: [
      {
        question: 'What areas does North Phoenix include?',
        answer: 'North Phoenix generally refers to the areas north of Camelback Road, including Deer Valley, Desert Ridge, Anthem, areas along the I-17 north corridor, and neighborhoods approaching Cave Creek and Carefree.',
      },
      {
        question: 'Are plumbing problems in North Phoenix homes different from central Phoenix?',
        answer: 'In some ways. North Phoenix\'s newer housing stock avoids many of the galvanized pipe and older copper-in-slab issues common in central Phoenix. However, hard water scale, water heater issues, and irrigation system problems are universal across the Valley regardless of home age.',
      },
    ],
  },
  {
    slug: 'ahwatukee',
    name: 'Ahwatukee',
    region: 'phoenix',
    title: 'Plumbing Services in Ahwatukee, AZ | Urgent Plumber',
    metaDescription: 'Need a plumber in Ahwatukee? Urgent Plumber connects homeowners with independent local plumbing contractors for drain cleaning, water heaters, leak detection, and more in Ahwatukee Foothills.',
    h1: 'Need Plumbing Help in Ahwatukee, Arizona?',
    intro: 'Ahwatukee Foothills, tucked between South Mountain Park and the Chandler border, developed primarily during the 1980s and 1990s. Homes in this community are now 30-40 years old - an age range where original water heaters have long been replaced, but copper supply lines and original drain infrastructure are showing age. Urgent Plumber helps Ahwatukee homeowners connect with independent local plumbing contractors for a full range of plumbing services.',
    localFacts: 'Ahwatukee\'s 1980s and 1990s construction means most homes have copper supply lines in a slab-on-grade foundation - exactly the combination most affected by Phoenix\'s documented pinhole copper leak problem. Homeowners in Ahwatukee who haven\'t had a plumbing inspection in several years may have undetected slow leaks contributing to foundation moisture. The community\'s mature landscaping - desert palms, citrus, and oleander are common throughout Ahwatukee - also means root intrusion into sewer lines is a growing issue as plantings established in the 1980s and 90s have grown large root systems.',
    commonIssues: [
      'Copper-in-slab pinhole leaks in homes built in the 1980s-90s',
      'Sewer line root intrusion from mature landscaping',
      'Water heater replacement as original units have long exceeded service life',
      'Drain scale buildup in aging kitchen and bathroom lines',
      'Low water pressure from internal pipe corrosion',
    ],
    nearbySlug: ['phoenix', 'chandler', 'tempe', 'gilbert'],
    faqs: [
      {
        question: 'Are slab leaks common in Ahwatukee homes?',
        answer: 'Yes. Most Ahwatukee homes were built in the 1980s and 1990s with copper supply lines running through or under the concrete slab. This is precisely the construction type most associated with Phoenix\'s pinhole slab leak problem. Unexplained water bill increases or warm floor spots are worth investigating promptly.',
      },
      {
        question: 'My Ahwatukee home has had recurring drain problems. What could cause that?',
        answer: 'Ahwatukee\'s mature landscaping - established over 30-40 years - has developed extensive root systems that can infiltrate aging sewer lines. A sewer camera inspection would show whether roots are the cause of recurring blockages. If root intrusion is confirmed, options include hydro jetting and, where roots keep returning, trenchless pipe relining to seal the entry points.',
      },
    ],
  },
  {
    slug: 'paradise-valley',
    name: 'Paradise Valley',
    region: 'phoenix',
    title: 'Plumbing Services in Paradise Valley, AZ | Urgent Plumber',
    metaDescription: 'Need a plumber in Paradise Valley, AZ? Urgent Plumber connects homeowners with independent local contractors for plumbing repair, water heaters, leak detection, and more in Paradise Valley.',
    h1: 'Need Plumbing Help in Paradise Valley, Arizona?',
    intro: 'Paradise Valley is home to a mix of original midcentury ranch homes - many built in the 1950s and 1960s - alongside extensively renovated properties and newer custom construction. Plumbing in Paradise Valley ranges from aging original systems in historic homes to complex custom installations in newer builds with multiple bathrooms, outdoor kitchens, pool equipment rooms, and guest houses. Urgent Plumber helps Paradise Valley homeowners connect with independent contractors for their plumbing needs.',
    localFacts: 'Paradise Valley\'s original 1950s and 1960s homes often retain original galvanized steel supply lines or early copper plumbing that is now 60-70 years old. These systems require assessment and often replacement rather than continued repair. Larger custom homes and estates in Paradise Valley frequently have complex plumbing systems serving multiple structures, outdoor kitchens, elaborate pool and spa setups, and guest accommodations - all of which require coordination and experience to service properly.',
    commonIssues: [
      'Aging galvanized and early copper plumbing in original midcentury homes',
      'Pool and spa plumbing leaks and equipment issues',
      'Complex multi-structure plumbing in large custom homes',
      'Outdoor kitchen and gas line plumbing needs',
      'High-end fixture repair requiring specific parts and expertise',
    ],
    nearbySlug: ['scottsdale', 'phoenix', 'north-phoenix'],
    faqs: [
      {
        question: 'My Paradise Valley home was built in the 1960s. What plumbing concerns should I have?',
        answer: 'Homes from this era often have original galvanized steel supply lines that have corroded internally, reducing water pressure and releasing rust into the water supply. Original sewer lines may be cast iron or clay and may have deteriorated significantly. A plumbing inspection would give you an accurate picture of what you have and what its condition is.',
      },
    ],
  },
  {
    slug: 'mesa',
    name: 'Mesa',
    region: 'east-valley',
    title: 'Plumbing Services in Mesa, AZ | Urgent Plumber',
    metaDescription: 'Need a plumber in Mesa, AZ? Urgent Plumber connects Mesa homeowners with independent local plumbing contractors for repairs, drain cleaning, water heater service, slab leaks, and more.',
    h1: 'Need Plumbing Help in Mesa, Arizona?',
    intro: 'Mesa is one of the largest cities in the United States, and its size means an enormous variety of housing - from 1940s and 50s bungalows near downtown Mesa to sprawling new developments near the eastern city limits. Plumbing issues in Mesa vary significantly by neighborhood age and construction type, but virtually every Mesa home deals with the Valley\'s notoriously hard water. Urgent Plumber helps Mesa homeowners connect with independent local plumbing contractors for all types of plumbing service.',
    localFacts: 'Downtown Mesa and the neighborhoods west of Dobson Road have some of the oldest housing stock in the East Valley, with many homes built between the 1940s and 1970s. These homes frequently have galvanized steel supply lines that are past their service life and original cast iron or clay sewer lines that have deteriorated significantly. East Mesa - including areas like Las Sendas and Red Mountain - has newer construction from the 1990s and 2000s that is now entering the age range where copper-in-slab concerns and water heater replacements become common. Mesa\'s famously hard water affects every neighborhood in the city.',
    commonIssues: [
      'Galvanized steel supply lines causing low pressure and rust-colored water in older homes',
      'Copper-in-slab pinhole leaks in homes built from the 1960s through 1980s',
      'Sewer line root intrusion in older neighborhoods with mature trees',
      'Water heater scale buildup and premature failure from hard water',
      'Drain scale and grease accumulation in aging kitchen and bathroom lines',
    ],
    nearbySlug: ['tempe', 'chandler', 'gilbert', 'scottsdale', 'apache-junction', 'fountain-hills'],
    faqs: [
      {
        question: 'How do I find a plumber near me in Mesa?',
        answer: 'Call Urgent Plumber to be connected with an independent local plumbing contractor in the Mesa area. We help Mesa homeowners get connected with contractors who can assist with a wide range of plumbing needs.',
      },
      {
        question: 'My Mesa home was built in the 1970s. Should I be concerned about my plumbing?',
        answer: 'Mesa homes from the 1970s often have copper supply lines in a slab foundation, galvanized steel supply lines in older sections, and cast iron or clay drain lines. These systems are now 45-55 years old and are worth having assessed. Galvanized lines corrode internally and reduce water pressure. Copper-in-slab lines are susceptible to Phoenix\'s documented pinhole leak problem. A plumbing inspection gives you an accurate picture.',
      },
      {
        question: 'Does Mesa have hard water?',
        answer: 'Yes. Mesa, like the rest of the Phoenix metro area, has very hard water. Mesa Water Resources serves much of the city with water sourced from Salt River Project canals and groundwater, both of which carry significant mineral content. Hard water affects water heater efficiency, fixture longevity, and appliance performance throughout Mesa homes.',
      },
    ],
  },
  {
    slug: 'tempe',
    name: 'Tempe',
    region: 'east-valley',
    title: 'Plumbing Services in Tempe, AZ | Urgent Plumber',
    metaDescription: 'Need a plumber in Tempe, AZ? Urgent Plumber connects Tempe homeowners with independent local plumbing contractors for drain cleaning, water heaters, slab leak repair, and more.',
    h1: 'Need Plumbing Help in Tempe, Arizona?',
    intro: 'Tempe is one of the most densely built cities in the Valley, with a housing mix that skews heavily toward the 1950s, 60s, and 70s - the era of copper-in-slab construction that is most associated with Phoenix\'s slab leak problem. Tempe\'s mature tree canopy and relatively dense lot sizes also make sewer line root intrusion a persistent issue. Urgent Plumber helps Tempe homeowners and residents connect with independent local contractors for plumbing service.',
    localFacts: 'Most of Tempe was developed between 1950 and 1980. The city is largely built out with very little new construction, meaning the overwhelming majority of Tempe homes have original or once-replaced plumbing systems now 40-70 years old. Tempe\'s hard water chemistry is the same as the rest of the Valley, but the combination of older construction and mature landscaping (the trees lining Tempe streets have had 40-60 years to extend their roots into sewer lines) makes sewer and supply line issues particularly common here. The city also has a significant rental population, which means many homes have received minimal plumbing maintenance over the decades.',
    commonIssues: [
      'Slab leaks from copper supply lines in slab-on-grade homes throughout the city',
      'Sewer root intrusion from Tempe\'s mature street trees and landscaping',
      'Low water pressure from galvanized steel supply lines corroding internally',
      'Deferred maintenance issues common in rental properties',
      'Drain scale accumulation in aging cast iron lines under the slab',
    ],
    nearbySlug: ['phoenix', 'mesa', 'chandler', 'scottsdale'],
    faqs: [
      {
        question: 'Are slab leaks common in Tempe?',
        answer: 'Yes - Tempe is one of the areas in the Valley with the highest concentration of slab-on-grade homes with original copper supply lines. These homes are now 40-70 years old and are squarely in the age range where Phoenix\'s documented pinhole copper leak problem is most prevalent. An unexplained increase in your water bill is worth investigating.',
      },
      {
        question: 'What is the typical sewer line condition in older Tempe homes?',
        answer: 'Tempe\'s pre-1980 homes often have cast iron or clay sewer lines under the slab or in the yard. These materials deteriorate with age, and Tempe\'s established trees - many of which have grown for 40-60 years - send roots into any crack or joint. A sewer camera inspection reveals the actual condition and helps plan the appropriate repair approach.',
      },
    ],
  },
  {
    slug: 'scottsdale',
    name: 'Scottsdale',
    region: 'east-valley',
    title: 'Plumbing Services in Scottsdale, AZ | Urgent Plumber',
    metaDescription: 'Need a plumber in Scottsdale, AZ? Urgent Plumber connects Scottsdale homeowners with independent local plumbing contractors for water heaters, leak detection, drain cleaning, and more.',
    h1: 'Need Plumbing Help in Scottsdale, Arizona?',
    intro: 'Scottsdale spans one of the largest geographic areas in the Valley and has housing built across nearly every decade from the 1950s to the present. Old Town Scottsdale has midcentury homes with aging infrastructure, while North Scottsdale neighborhoods built in the 1990s and 2000s are now reaching the age where copper plumbing and water heaters need attention. Urgent Plumber helps Scottsdale homeowners connect with independent local plumbing contractors for a full range of plumbing services.',
    localFacts: 'South Scottsdale\'s older neighborhoods near the Tempe border have housing from the 1950s and 1960s with the plumbing challenges that come with that era - aging copper, original drain lines, and water heaters long since replaced. Central Scottsdale\'s 1970s and 80s master-planned communities often have mature landscaping with extensive root systems and original copper-in-slab supply lines entering the age range for pinhole failure. North Scottsdale\'s large-lot custom homes and HOA communities built in the 1990s and 2000s have more modern plumbing but frequently involve complex pool equipment, multiple water heaters, and outdoor kitchen plumbing that requires specialized service.',
    commonIssues: [
      'Pool and spa plumbing leaks and equipment connections in this pool-heavy market',
      'Copper-in-slab issues in south and central Scottsdale homes built in the 1960s-80s',
      'Water heater issues in large homes with multiple units',
      'Irrigation and outdoor kitchen plumbing in North Scottsdale properties',
      'High-end fixture repair in upscale homes requiring specific replacement components',
    ],
    nearbySlug: ['phoenix', 'tempe', 'mesa', 'paradise-valley', 'fountain-hills', 'north-phoenix'],
    faqs: [
      {
        question: 'My North Scottsdale home has two water heaters. Can a contractor service both?',
        answer: 'Yes. Large Scottsdale homes with multiple bathrooms often have two or more water heaters - sometimes one dedicated to each wing or floor. A contractor experienced with larger homes can assess both units and recommend repair or replacement for each based on their individual condition.',
      },
      {
        question: 'Is pool plumbing included in plumbing services in Scottsdale?',
        answer: 'Pool plumbing leaks (suction lines, return lines, equipment pad plumbing) are within the scope of plumbing service. Pool equipment issues involving the pump, filter, or electrical components are typically handled by pool service specialists rather than plumbers.',
      },
    ],
  },
  {
    slug: 'chandler',
    name: 'Chandler',
    region: 'east-valley',
    title: 'Plumbing Services in Chandler, AZ | Urgent Plumber',
    metaDescription: 'Need a plumber in Chandler, AZ? Urgent Plumber connects Chandler homeowners with independent local plumbing contractors for drain cleaning, water heater repair, slab leaks, and more.',
    h1: 'Need Plumbing Help in Chandler, Arizona?',
    intro: 'Chandler\'s development wave began in earnest in the 1970s near its historic downtown and expanded dramatically eastward through the 1980s, 1990s, and 2000s. This means Chandler has a wide range of housing ages - from 50-year-old slab homes near the original downtown to relatively new construction in master-planned communities near Gilbert Road and beyond. Hard water is a constant across all of Chandler regardless of home age. Urgent Plumber helps Chandler homeowners connect with independent local plumbing contractors.',
    localFacts: 'West Chandler - the older section near downtown and the Tempe border - has substantial housing from the 1970s and early 1980s with original copper supply lines in slab foundations that are now in the prime age range for Phoenix\'s pinhole leak problem. East Chandler\'s newer neighborhoods from the 1990s and 2000s have more modern plumbing but are reaching the age where water heaters are being replaced for the first time and certain fittings need attention. Chandler\'s water, served by the City of Chandler Water Division, is among the harder water in the Valley at approximately 280-320 mg/L hardness.',
    commonIssues: [
      'Copper-in-slab pinhole leaks in west Chandler homes from the 1970s-80s',
      'Water heater scale buildup and replacement throughout the city',
      'Drain scale and grease accumulation in aging lines',
      'Irrigation system leaks from UV-degraded PVC',
      'Sewer line root intrusion in established west Chandler neighborhoods',
    ],
    nearbySlug: ['gilbert', 'mesa', 'tempe', 'ahwatukee', 'queen-creek'],
    faqs: [
      {
        question: 'Does Chandler have hard water?',
        answer: 'Yes. Chandler water is served by the City of Chandler and comes from a combination of surface water and groundwater sources, both of which carry high mineral content. Chandler\'s water hardness is typical for the Phoenix metro area and creates the same scale buildup issues in water heaters, fixtures, and appliances.',
      },
      {
        question: 'How do I know if my Chandler home has a slab leak?',
        answer: 'Common signs include a water bill that\'s increased without explanation, warm or wet spots on the floor, the sound of running water when all fixtures are off, and cracks appearing in tile or flooring. Any of these symptoms in a slab-on-grade home warrants a leak detection inspection.',
      },
    ],
  },
  {
    slug: 'gilbert',
    name: 'Gilbert',
    region: 'east-valley',
    title: 'Plumbing Services in Gilbert, AZ | Urgent Plumber',
    metaDescription: 'Need a plumber in Gilbert, AZ? Urgent Plumber connects Gilbert homeowners with independent local plumbing contractors for water heaters, drain cleaning, leak detection, and more.',
    h1: 'Need Plumbing Help in Gilbert, Arizona?',
    intro: 'Gilbert transformed from a small agricultural town into one of the fastest-growing cities in America over the past three decades. The majority of Gilbert\'s housing was built between the 1990s and 2010s, making it newer on average than much of the Valley. But newer construction doesn\'t eliminate plumbing needs - Gilbert\'s hard water still stresses water heaters, fixtures, and appliances, and homes built in the 1990s are now 25-30 years old and entering a period where plumbing systems need attention. Urgent Plumber helps Gilbert homeowners connect with independent local plumbing contractors.',
    localFacts: 'Gilbert\'s newer housing stock is a relative advantage - fewer galvanized pipes, less copper-in-slab of the age most prone to Phoenix\'s pinhole leak pattern. However, Gilbert\'s rapid growth in the 1990s included substantial construction with copper supply lines in slab foundations, and those homes are now entering the age range where attention is warranted. Gilbert\'s water, supplied by the Town of Gilbert Water Department using primarily CAP (Central Arizona Project) water, is hard and leaves significant scale deposits in appliances and fixtures.',
    commonIssues: [
      'Water heater scale buildup and efficiency reduction from hard water',
      'Hard water fixture and appliance issues throughout the home',
      'Irrigation system problems from UV exposure on plastic components',
      'Copper-in-slab concerns in 1990s construction now entering middle age',
      'Garbage disposal and kitchen drain issues',
    ],
    nearbySlug: ['chandler', 'mesa', 'queen-creek', 'san-tan-valley'],
    faqs: [
      {
        question: 'My Gilbert home was built in the late 1990s - what plumbing maintenance should I be thinking about?',
        answer: 'For a 25-30 year old Gilbert home, priorities include the water heater (if original, it\'s well past typical service life in Phoenix\'s hard water conditions), the main water shutoff valve (which can seize up over time), any visible supply line connections to toilets and sinks (flexible supply lines have a typical 10-15 year lifespan), and a check of water pressure. A plumbing inspection gives you a full picture.',
      },
    ],
  },
  {
    slug: 'queen-creek',
    name: 'Queen Creek',
    region: 'east-valley',
    title: 'Plumbing Services in Queen Creek, AZ | Urgent Plumber',
    metaDescription: 'Need a plumber in Queen Creek, AZ? Urgent Plumber connects Queen Creek homeowners with independent local plumbing contractors for water heater repair, drain cleaning, and more.',
    h1: 'Need Plumbing Help in Queen Creek, Arizona?',
    intro: 'Queen Creek sits at the southeastern edge of the Phoenix metro and has grown dramatically since the early 2000s. Most homes in Queen Creek are relatively new construction, built during the housing boom of the 2000s or in the growth wave that followed the Great Recession. Hard water remains the dominant plumbing challenge regardless of home age. Urgent Plumber helps Queen Creek homeowners connect with independent local plumbing contractors.',
    localFacts: 'Queen Creek\'s newer housing stock means most homes have modern PEX or copper plumbing without the galvanized steel or early copper-in-slab concerns that affect older Valley communities. However, homes from the early 2000s are now approaching 20 years old - an age where original water heaters are well past due for replacement in Phoenix\'s hard water conditions, and where certain fittings and appliances need evaluation. Queen Creek\'s water supply, a mix of CAP water and groundwater, is hard and leaves mineral deposits throughout the home\'s plumbing system.',
    commonIssues: [
      'Water heater replacement in homes now 15-20 years old',
      'Hard water scale in fixtures, showerheads, and appliances',
      'Irrigation system issues',
      'Drain cleaning needs',
    ],
    nearbySlug: ['gilbert', 'san-tan-valley', 'chandler'],
    faqs: [
      {
        question: 'Is water service in Queen Creek affected by hard water?',
        answer: 'Yes. Queen Creek\'s water supply comes from a combination of CAP canal water and groundwater, both of which carry high mineral content typical of the Phoenix metro area. Hard water scale accumulates in water heaters, fixtures, and appliances throughout Queen Creek homes.',
      },
    ],
  },
  {
    slug: 'apache-junction',
    name: 'Apache Junction',
    region: 'east-valley',
    title: 'Plumbing Services in Apache Junction, AZ | Urgent Plumber',
    metaDescription: 'Need a plumber in Apache Junction, AZ? Urgent Plumber connects Apache Junction homeowners with independent local plumbing contractors for plumbing repair, water heaters, and more.',
    h1: 'Need Plumbing Help in Apache Junction, Arizona?',
    intro: 'Apache Junction sits at the base of the Superstition Mountains at the far eastern edge of the metro area. The city has a diverse mix of housing ages and types - from older mobile homes and manufactured housing communities to single-family homes built across several decades. Some properties in Apache Junction and nearby areas rely on private well systems rather than municipal water. Urgent Plumber helps Apache Junction homeowners connect with independent local plumbing contractors.',
    localFacts: 'Apache Junction\'s housing includes a significant proportion of older homes and manufactured housing. Older homes in the area can have plumbing materials that predate current standards. Properties on private well water have specific considerations for pressure tanks, well pumps, and water treatment systems that differ from municipal water connections. The area\'s groundwater tends to be particularly hard, with high mineral content from the surrounding desert geology.',
    commonIssues: [
      'Well system maintenance and pressure tank issues for properties on private wells',
      'Aging plumbing in older homes throughout the community',
      'Water heater issues from hard well water',
      'Drain and sewer issues in older construction',
    ],
    nearbySlug: ['mesa', 'fountain-hills', 'queen-creek', 'san-tan-valley'],
    faqs: [
      {
        question: 'Does Urgent Plumber connect homeowners in Apache Junction?',
        answer: 'Yes. We help homeowners in Apache Junction connect with independent local plumbing contractors for a range of plumbing needs. Call to discuss your specific situation and service needs.',
      },
    ],
  },
  {
    slug: 'fountain-hills',
    name: 'Fountain Hills',
    region: 'east-valley',
    title: 'Plumbing Services in Fountain Hills, AZ | Urgent Plumber',
    metaDescription: 'Need a plumber in Fountain Hills, AZ? Urgent Plumber connects Fountain Hills homeowners with independent local plumbing contractors for water heater repair, leak detection, and more.',
    h1: 'Need Plumbing Help in Fountain Hills, Arizona?',
    intro: 'Fountain Hills was master-planned and developed beginning in the early 1970s, with substantial construction through the 1980s and 1990s. The community\'s varied terrain and hillside construction creates unique plumbing considerations around water pressure and sewer line grades that don\'t exist in the flat sections of the Valley. Most Fountain Hills homes now have 30-50 years of plumbing age. Urgent Plumber helps Fountain Hills homeowners connect with independent local contractors.',
    localFacts: 'Fountain Hills\' hilly terrain means plumbing systems in elevated homes must account for water pressure variation - too low at the upper elevation, and systems serving lower areas may need pressure regulators. Homes built in the 1970s and 80s have the typical copper-in-slab construction that is susceptible to Phoenix\'s hard water corrosion pattern. The community\'s established desert landscaping, with significant saguaro, palo verde, and ironwood trees, includes mature root systems that can affect underground sewer lines over time.',
    commonIssues: [
      'Water pressure issues related to elevation variation in hilly terrain',
      'Copper-in-slab concerns in 1970s-1990s construction',
      'Water heater scale from hard water',
      'Sewer line assessment in aging homes',
    ],
    nearbySlug: ['scottsdale', 'mesa', 'apache-junction'],
    faqs: [
      {
        question: 'Does Fountain Hills\' hilly terrain affect home plumbing?',
        answer: 'It can. Homes at higher elevations sometimes experience lower water pressure than neighbors at lower elevations. Water pressure regulators can be installed to maintain consistent pressure. Sewer lines on steep slopes also require proper grade to maintain flow, and older installations can develop issues with this over time.',
      },
    ],
  },
  {
    slug: 'san-tan-valley',
    name: 'San Tan Valley',
    region: 'east-valley',
    title: 'Plumbing Services in San Tan Valley, AZ | Urgent Plumber',
    metaDescription: 'Need a plumber in San Tan Valley, AZ? Urgent Plumber connects San Tan Valley homeowners with independent local contractors for water heater repair, drain cleaning, and more.',
    h1: 'Need Plumbing Help in San Tan Valley, Arizona?',
    intro: 'San Tan Valley, located in Pinal County south of Gilbert, is one of the Valley\'s fastest-growing communities with development concentrated in the 2000s and 2010s. Most homes here are relatively new, though homes from the early 2000s growth wave are now 20 years old. Hard water remains a constant concern throughout San Tan Valley. Urgent Plumber helps San Tan Valley homeowners connect with independent local plumbing contractors.',
    localFacts: 'San Tan Valley\'s newer construction is an advantage for plumbing system age - few galvanized pipes or early copper-in-slab concerns. However, the area\'s groundwater supply has high mineral content, and homes from the early 2000s are reaching the age where original water heaters need replacement and first-time plumbing maintenance is overdue. The area\'s continued growth also means many properties are still in the first decade of ownership, making proactive maintenance planning valuable.',
    commonIssues: [
      'Water heater replacement in early 2000s construction',
      'Hard water scale in fixtures and appliances',
      'Irrigation and outdoor water feature issues',
      'Drain cleaning needs',
    ],
    nearbySlug: ['gilbert', 'queen-creek', 'chandler'],
    faqs: [
      {
        question: 'Does San Tan Valley have hard water?',
        answer: 'Yes. San Tan Valley relies primarily on groundwater which carries high mineral content. Hard water scale accumulates in water heaters, showerheads, faucet aerators, and dishwashers throughout homes in the area.',
      },
    ],
  },
  {
    slug: 'glendale',
    name: 'Glendale',
    region: 'west-valley',
    title: 'Plumbing Services in Glendale, AZ | Urgent Plumber',
    metaDescription: 'Need a plumber in Glendale, AZ? Urgent Plumber connects Glendale homeowners with independent local plumbing contractors for drain cleaning, water heaters, slab leaks, and more.',
    h1: 'Need Plumbing Help in Glendale, Arizona?',
    intro: 'Glendale is the second-largest city in the West Valley and has a housing stock as varied as any in the metro area. Historic Glendale near downtown - known for its antique shops and craftsman bungalows - has some of the oldest housing in the West Valley, with homes dating to the 1920s and 1930s. The city expanded significantly through the mid-20th century and continues to develop near Westgate and along the northern and western boundaries. Urgent Plumber helps Glendale homeowners connect with independent local plumbing contractors.',
    localFacts: 'Glendale\'s historic downtown neighborhoods have original cast iron and galvanized plumbing in structures now 80-100 years old. Further from downtown, 1950s through 1980s neighborhoods have the copper-in-slab construction characteristic of mid-century Valley development. Glendale\'s established neighborhoods have mature trees - including large palms and oleanders common throughout the West Valley - whose roots have had decades to work into aging sewer lines. Glendale\'s water, supplied by the City of Glendale Water Services, is hard like all Valley water.',
    commonIssues: [
      'Very old galvanized plumbing in historic downtown Glendale properties',
      'Copper-in-slab slab leaks in mid-century neighborhoods',
      'Sewer root intrusion from mature West Valley trees',
      'Water heater issues from hard water',
      'Drain scale buildup in aging infrastructure',
    ],
    nearbySlug: ['peoria', 'phoenix', 'surprise', 'el-mirage'],
    faqs: [
      {
        question: 'What plumbing concerns are typical in older Glendale homes?',
        answer: 'Historic Glendale homes from the 1920s-40s may have original galvanized steel supply lines (now well past their natural service life) and original clay or cast iron drain lines. Homes from the 1950s-70s typically have copper supply lines in slab foundations susceptible to Phoenix\'s pinhole leak pattern. A plumbing inspection is particularly worthwhile for homes in Glendale\'s older neighborhoods.',
      },
    ],
  },
  {
    slug: 'peoria',
    name: 'Peoria',
    region: 'west-valley',
    title: 'Plumbing Services in Peoria, AZ | Urgent Plumber',
    metaDescription: 'Need a plumber in Peoria, AZ? Urgent Plumber connects Peoria homeowners with independent local plumbing contractors for water heater repair, drain cleaning, leak detection, and more.',
    h1: 'Need Plumbing Help in Peoria, Arizona?',
    intro: 'Peoria spans a large territory in the northwest Valley, from its older southern sections (which include parts of Sun City) to rapidly developing northern areas approaching the Loop 303. Homes in Peoria range from 1960s construction in the older southern portions to brand-new development in the far north. Urgent Plumber helps Peoria homeowners connect with independent local plumbing contractors.',
    localFacts: 'Southern Peoria (including areas adjacent to Sun City and along Grand Avenue) has housing from the 1960s and 1970s with the copper-in-slab construction and aging sewer infrastructure typical of that era. North Peoria\'s newer master-planned communities have modern plumbing but still contend with Peoria\'s hard water. Peoria\'s water is among the harder water in the metro area, supplied by a combination of CAP water and groundwater from the West Valley\'s aquifer systems.',
    commonIssues: [
      'Copper-in-slab and galvanized concerns in south Peoria\'s older housing',
      'Water heater scale and replacement throughout the city',
      'Hard water fixture and appliance issues',
      'Drain cleaning in aging homes',
      'Irrigation system issues in established neighborhoods',
    ],
    nearbySlug: ['glendale', 'surprise', 'phoenix', 'sun-city'],
    faqs: [
      {
        question: 'Does Peoria have hard water?',
        answer: 'Yes. Peoria\'s water supply, like most of the West Valley, comes from a combination of CAP (Central Arizona Project) canal water and groundwater. Both sources carry high mineral content. Hard water is a consistent challenge throughout Peoria for water heaters, fixtures, and appliances.',
      },
    ],
  },
  {
    slug: 'surprise',
    name: 'Surprise',
    region: 'west-valley',
    title: 'Plumbing Services in Surprise, AZ | Urgent Plumber',
    metaDescription: 'Need a plumber in Surprise, AZ? Urgent Plumber connects Surprise homeowners with independent local plumbing contractors for water heaters, drain cleaning, leak detection, and more.',
    h1: 'Need Plumbing Help in Surprise, Arizona?',
    intro: 'Surprise grew dramatically during the 2000s housing boom and is home to a large number of active-adult communities - particularly Sun City Grand - alongside traditional single-family neighborhoods. Most Surprise homes were built between 1995 and 2015. Hard water is a consistent challenge, and homes from the early 2000s are reaching the point where original plumbing components need attention. Urgent Plumber connects Surprise homeowners with independent local plumbing contractors.',
    localFacts: 'Surprise\'s active-adult communities represent a significant portion of the housing market. Sun City Grand, with homes built primarily in the late 1990s and 2000s, now has a housing stock that is 20-25 years old. Water heaters in these homes are well past typical service life in Phoenix\'s hard water conditions. Surprise\'s water is supplied by the City of Surprise and EPCOR, using primarily CAP water - high in mineral content and requiring regular maintenance of water heaters and appliances to maintain efficiency.',
    commonIssues: [
      'Water heater replacement in aging active-adult community homes',
      'Hard water scale accumulation throughout the home',
      'Drain cleaning and minor fixture repair',
      'Irrigation system maintenance',
    ],
    nearbySlug: ['peoria', 'glendale', 'sun-city', 'el-mirage', 'goodyear'],
    faqs: [
      {
        question: 'My Surprise home was built in the early 2000s. What plumbing should I prioritize?',
        answer: 'For a 20-year-old Surprise home, the water heater is the first priority if it\'s original - in Phoenix\'s hard water, water heaters typically last 8-10 years without regular maintenance. Also worth checking: the main water shutoff valve, flexible supply lines to toilets and sinks, and any visible signs of slow leaks under sinks. A plumbing inspection gives you a complete picture.',
      },
    ],
  },
  {
    slug: 'goodyear',
    name: 'Goodyear',
    region: 'west-valley',
    title: 'Plumbing Services in Goodyear, AZ | Urgent Plumber',
    metaDescription: 'Need a plumber in Goodyear, AZ? Urgent Plumber connects Goodyear homeowners with independent local plumbing contractors for water heater repair, drain cleaning, and more.',
    h1: 'Need Plumbing Help in Goodyear, Arizona?',
    intro: 'Goodyear has been one of the fastest-growing cities in the western United States over the past two decades. Most of Goodyear\'s housing was built after 2000, concentrated in master-planned communities like Palm Valley and Estrella Mountain Ranch. Newer construction means fewer aging-infrastructure concerns, but hard water and the wear that comes with 15-20 years of use still create plumbing needs. Urgent Plumber connects Goodyear homeowners with independent local contractors.',
    localFacts: 'Goodyear\'s newer housing stock largely features PEX plumbing systems rather than the copper-in-slab construction that affects older Valley homes. However, homes from the early 2000s development wave are now entering their second decade - an age where water heaters need replacement, certain fittings show wear, and plumbing systems benefit from a professional assessment. Goodyear\'s water, supplied by the City of Goodyear Water Division using primarily CAP water, is hard.',
    commonIssues: [
      'Water heater replacement in early 2000s homes',
      'Hard water scale in fixtures and appliances',
      'Irrigation and outdoor plumbing',
      'Drain cleaning needs',
    ],
    nearbySlug: ['avondale', 'buckeye', 'surprise', 'litchfield-park'],
    faqs: [
      {
        question: 'Are there slab leak concerns in Goodyear homes?',
        answer: 'Less so than in older Valley communities, because Goodyear\'s newer construction often uses PEX rather than copper supply lines. PEX is significantly more resistant to the corrosion pattern that causes copper-in-slab pinhole leaks in the Phoenix metro area. However, homes built with copper in the early 2000s may still be at some risk as they age.',
      },
    ],
  },
  {
    slug: 'avondale',
    name: 'Avondale',
    region: 'west-valley',
    title: 'Plumbing Services in Avondale, AZ | Urgent Plumber',
    metaDescription: 'Need a plumber in Avondale, AZ? Urgent Plumber connects Avondale homeowners with independent local plumbing contractors for water heater repair, drain cleaning, slab leaks, and more.',
    h1: 'Need Plumbing Help in Avondale, Arizona?',
    intro: 'Avondale has a mix of older housing near its historic core - including some homes dating to the mid-20th century - and newer development that expanded outward over the past 30 years. The city\'s older sections in particular have the plumbing concerns common to mid-century Valley construction. Urgent Plumber helps Avondale homeowners connect with independent local plumbing contractors.',
    localFacts: 'Avondale\'s older central neighborhoods near Avondale Boulevard have housing from the 1950s through 1970s with copper supply lines in slab foundations and aging sewer infrastructure. Newer Avondale neighborhoods built in the 1990s and 2000s have more modern plumbing but are entering the age range where attention is appropriate. Hard water is consistent throughout Avondale.',
    commonIssues: [
      'Copper-in-slab concerns in older Avondale neighborhoods',
      'Water heater maintenance and replacement',
      'Hard water fixture and appliance issues',
      'Drain cleaning in aging lines',
    ],
    nearbySlug: ['goodyear', 'glendale', 'phoenix', 'litchfield-park'],
    faqs: [
      {
        question: 'Does Urgent Plumber serve Avondale?',
        answer: 'Yes. Call Urgent Plumber to connect with an independent local plumbing contractor who may be available to assist with your Avondale plumbing needs.',
      },
    ],
  },
  {
    slug: 'buckeye',
    name: 'Buckeye',
    region: 'west-valley',
    title: 'Plumbing Services in Buckeye, AZ | Urgent Plumber',
    metaDescription: 'Need a plumber in Buckeye, AZ? Urgent Plumber connects Buckeye homeowners with independent local contractors for water heater repair, drain cleaning, and more in the far West Valley.',
    h1: 'Need Plumbing Help in Buckeye, Arizona?',
    intro: 'Buckeye has been one of the fastest-growing cities in the United States over the past decade, with substantial new construction pushing west along the I-10 corridor. Most of Buckeye\'s housing is relatively new, concentrated in the 2000s through the present, though the city\'s historic core has older homes. Hard water is a consistent issue throughout Buckeye. Urgent Plumber helps Buckeye homeowners connect with independent local contractors.',
    localFacts: 'Buckeye\'s aggressive growth has created a large inventory of homes under 20 years old, with modern PEX and copper plumbing. The newest homes are less likely to have age-related plumbing failures, but hard water scale is immediate regardless of home age. Homes from Buckeye\'s early 2000s growth phase are now entering the age range where water heater replacement and first plumbing assessments are appropriate.',
    commonIssues: [
      'Water heater maintenance in 2000s-era homes',
      'Hard water scale in all homes',
      'Irrigation system issues',
      'Newer appliance plumbing connections',
    ],
    nearbySlug: ['goodyear', 'avondale', 'litchfield-park'],
    faqs: [
      {
        question: 'Does Urgent Plumber connect homeowners in Buckeye?',
        answer: 'Yes. Call to get connected with an independent local plumbing contractor who may be available to assist with your Buckeye plumbing needs.',
      },
    ],
  },
  {
    slug: 'el-mirage',
    name: 'El Mirage',
    region: 'west-valley',
    title: 'Plumbing Services in El Mirage, AZ | Urgent Plumber',
    metaDescription: 'Need a plumber in El Mirage, AZ? Urgent Plumber connects El Mirage homeowners with independent local plumbing contractors for drain cleaning, water heaters, and repairs.',
    h1: 'Need Plumbing Help in El Mirage, Arizona?',
    intro: 'El Mirage is a small community in the northwest Valley with housing built primarily across the mid-to-late 20th century. Many homes in El Mirage are in the age range where plumbing systems require assessment and potentially replacement of aging components. Urgent Plumber helps El Mirage homeowners connect with independent local plumbing contractors.',
    localFacts: 'El Mirage\'s housing stock is largely from the 1960s through 1990s, meaning many homes have copper supply lines of a vintage susceptible to Phoenix\'s hard water corrosion patterns. Water heaters in the area are frequently past their service life in the region\'s hard water conditions, and drain lines in older homes have decades of scale accumulation.',
    commonIssues: [
      'Aging copper and galvanized supply lines in older homes',
      'Water heater maintenance and replacement',
      'Hard water scale and drain issues',
      'Sewer assessment in older construction',
    ],
    nearbySlug: ['surprise', 'glendale', 'peoria', 'sun-city'],
    faqs: [
      {
        question: 'Does Urgent Plumber serve El Mirage?',
        answer: 'Yes. Call Urgent Plumber to get connected with an independent local plumbing contractor who may be available to assist with plumbing needs in El Mirage.',
      },
    ],
  },
  {
    slug: 'sun-city',
    name: 'Sun City',
    region: 'west-valley',
    title: 'Plumbing Services in Sun City, AZ | Urgent Plumber',
    metaDescription: 'Need a plumber in Sun City, AZ? Urgent Plumber connects Sun City homeowners with independent local plumbing contractors for water heater repair, drain cleaning, pipe repair, and more.',
    h1: 'Need Plumbing Help in Sun City, Arizona?',
    intro: 'Sun City, developed by Del Webb beginning in 1960, is the original active-adult retirement community in Arizona. Homes in Sun City span the 1960s through 1980s - making this one of the oldest residential communities in the West Valley and one where original plumbing infrastructure is well past its expected service life. Urgent Plumber helps Sun City homeowners connect with independent local plumbing contractors for a full range of plumbing services.',
    localFacts: 'Sun City\'s housing stock from the 1960s through 1980s presents some of the most significant plumbing age concerns in the Valley. Original homes from the 1960s may still have galvanized steel supply lines or early copper pipe that is now 60 years old. Homes from the 1970s and 80s have copper-in-slab construction that is exactly the age and type most associated with Phoenix\'s documented pinhole leak problem. Water heaters in Sun City homes have been replaced multiple times, but supply lines, sewer lines, and other infrastructure may not have been touched since original installation. Sun City\'s original sewer infrastructure is also aging significantly.',
    commonIssues: [
      'Aging galvanized supply lines in original 1960s construction',
      'Copper-in-slab slab leaks throughout 1970s-80s construction',
      'Aging sewer infrastructure with root intrusion from mature landscaping',
      'Water heater maintenance (repeated replacements in these hard water conditions)',
      'Low water pressure from internal pipe corrosion',
    ],
    nearbySlug: ['peoria', 'surprise', 'glendale', 'el-mirage'],
    faqs: [
      {
        question: 'My Sun City home was built in the 1970s. Should I have the plumbing inspected?',
        answer: 'Yes, strongly. Sun City homes from the 1970s have copper supply lines in slab foundations that are now approximately 50 years old. This is the construction type and age most associated with Phoenix\'s pinhole slab leak problem. Supply lines, sewer lines, and shutoff valves in homes this age should be assessed by a plumbing professional. Catching a developing issue before it becomes a water damage emergency is significantly less expensive.',
      },
      {
        question: 'What are the most common plumbing repairs in Sun City?',
        answer: 'Based on the age of Sun City\'s housing stock, the most common issues are slab leaks in copper supply lines, low water pressure from galvanized line corrosion, sewer line root intrusion from the community\'s mature landscaping, and toilet and faucet repairs on aging fixtures. Water heater replacement is also routine given the age of homes and the hard water conditions.',
      },
    ],
  },
  {
    slug: 'litchfield-park',
    name: 'Litchfield Park',
    region: 'west-valley',
    title: 'Plumbing Services in Litchfield Park, AZ | Urgent Plumber',
    metaDescription: 'Need a plumber in Litchfield Park, AZ? Urgent Plumber connects Litchfield Park homeowners with independent local plumbing contractors for water heater repair, drain cleaning, and more.',
    h1: 'Need Plumbing Help in Litchfield Park, Arizona?',
    intro: 'Litchfield Park is one of the West Valley\'s more established communities, with a mix of homes built from the 1970s through the 2000s in and around the historic Wigwam Resort area. The community\'s mature landscaping and established neighborhoods create a living environment that feels older and more settled than the newer West Valley cities - and bring the plumbing considerations that come with that maturity. Urgent Plumber helps Litchfield Park homeowners connect with independent local contractors.',
    localFacts: 'Litchfield Park\'s older homes from the 1970s and 1980s have copper-in-slab supply lines in the age range associated with Phoenix\'s pinhole leak problem. The community\'s established landscaping - with large shade trees and mature desert plantings - has developed root systems that can affect sewer lines over time. Newer developments within Litchfield Park from the 1990s and 2000s have more modern plumbing but still contend with the West Valley\'s hard water.',
    commonIssues: [
      'Copper-in-slab concerns in 1970s-80s homes',
      'Sewer root intrusion from mature landscaping',
      'Water heater replacement and maintenance',
      'Hard water scale in fixtures and appliances',
    ],
    nearbySlug: ['goodyear', 'avondale', 'peoria', 'buckeye'],
    faqs: [
      {
        question: 'Does Urgent Plumber serve Litchfield Park?',
        answer: 'Yes. Call to get connected with an independent local plumbing contractor who may be available to assist with plumbing needs in Litchfield Park.',
      },
    ],
  },
]

export function getCity(slug: string): City | undefined {
  return CITIES.find(c => c.slug === slug)
}

export function getCitiesByRegion(region: CityRegion): City[] {
  return CITIES.filter(c => c.region === region)
}

export const REGION_LABELS: Record<CityRegion, string> = {
  phoenix: 'Phoenix & Nearby',
  'east-valley': 'East Valley',
  'west-valley': 'West Valley',
}
