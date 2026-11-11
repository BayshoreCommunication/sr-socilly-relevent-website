import React from "react";

export interface ServiceDetail {
  slug: string;
  title: string;
  tagline: string;
  kicker: string;
  badge?: string;
  overview: string;
  keyOfferings: {
    title: string;
    description: string;
  }[];
  processSteps: {
    step: string;
    title: string;
    description: string;
  }[];
  stats: {
    value: string;
    label: string;
  }[];
  deliverables: string[];
  ctaText?: string;
  ctaHref?: string;
}

export const SERVICES_LIST: ServiceDetail[] = [
  // 1. Promotional Products
  {
    slug: "promotional-products",
    title: "Promotional Products",
    kicker: "Tangible Brand Experience",
    badge: "Most Popular",
    tagline:
      "Custom-branded products that create lasting impressions and keep your business top of mind.",
    overview:
      "Promotional merchandise is one of the most cost-effective, high-recall marketing channels available today. At Socially Relevant Promo, we combine curated product selection, ethical manufacturing, and high-precision decoration to ensure your merchandise communicates quality and trust every time your client touches it.",
    keyOfferings: [
      {
        title: "Curated Client & Patient Gifts",
        description:
          "High-end gift boxes, insulated drinkware, and wellness sets designed to show appreciation and foster lifetime loyalty.",
      },
      {
        title: "High-Utility Everyday Essentials",
        description:
          "Hardcover journals, precision metal rollerball pens, and desktop technology organizers used daily in professional office settings.",
      },
      {
        title: "Double-Wall Insulated Drinkware",
        description:
          "Vacuum-sealed tumblers, ceramic mugs, and sports bottles with permanent laser engraving that never fades or peels.",
      },
      {
        title: "Eco-Conscious & Sustainable Swag",
        description:
          "FSC-certified paper goods, organic cotton bags, and recycled materials that highlight your firm's social responsibility.",
      },
    ],
    processSteps: [
      {
        step: "01",
        title: "Consultation & Strategic Discovery",
        description:
          "We analyze your audience, event timeline, brand standards, and budget parameters to identify highest-impact items.",
      },
      {
        step: "02",
        title: "Curated Lookbook & Free Samples",
        description:
          "Receive a custom digital presentation with virtual proofs showing your logo on selected top-tier products.",
      },
      {
        step: "03",
        title: "Precision Sourcing & Decoration",
        description:
          "High-resolution laser engraving, full-color digital direct print, or subtle debossing executed to exact PMS standards.",
      },
      {
        step: "04",
        title: "Kitting, Fulfillment & Delivery",
        description:
          "We inspect, hand-kit with custom tissue packaging, and drop-ship directly to your office or attendee doorsteps.",
      },
    ],
    stats: [
      { value: "85%", label: "Of recipients remember the advertiser that gave them a promo item" },
      { value: "7-10", label: "Business days standard turnaround with rush options available" },
      { value: "10,000+", label: "Verified ethically sourced premium catalog items" },
    ],
    deliverables: [
      "Custom digital product mockup deck within 24 business hours",
      "Exact Pantone (PMS) color-matched decoration",
      "Kitting and custom branded packaging options",
      "Consolidated master shipping or individual recipient drop shipping",
    ],
    ctaText: "Browse Online Product Catalog",
    ctaHref: "/products",
  },

  // 2. Event & Campaign Strategy
  {
    slug: "event-and-campaign-strategy",
    title: "Event & Campaign Strategy",
    kicker: "Experiential Impact & Lead Generation",
    badge: "High Impact",
    tagline:
      "Plan and execute engaging events and targeted campaigns that build relationships and drive real results.",
    overview:
      "Whether you are hosting an intimate client appreciation dinner, exhibiting at a premier national trade conference, or launching a multi-channel quarterly awareness campaign, we provide the cohesive strategy, eye-catching displays, and tactile collateral required to command attention and turn attendees into valuable clients.",
    keyOfferings: [
      {
        title: "Trade Show Booth Architecture & Displays",
        description:
          "Tension-fabric step-and-repeats, illuminated backdrop towers, branded tablecloths, and banners engineered for seamless assembly.",
      },
      {
        title: "Curated VIP Welcome & Speaker Swag Bags",
        description:
          "Hand-assembled premium gift sets that delight keynotes, sponsors, and VIP attendees from the moment they check in.",
      },
      {
        title: "Interactive Lead-Capture Experiences",
        description:
          "Gamified trade show prize wheels, NFC business card touchpoints, and digital QR raffle giveaways that generate verified prospect data.",
      },
      {
        title: "Omnichannel Campaign Collateral",
        description:
          "Matching physical invitations, presentation folders, print brochures, and digital follow-up assets for complete campaign harmony.",
      },
    ],
    processSteps: [
      {
        step: "01",
        title: "Event Scope & Objective Mapping",
        description:
          "We define your target attendee demographics, lead generation targets, booth footprint, and logistics constraints.",
      },
      {
        step: "02",
        title: "Concept Renderings & Collateral Selection",
        description:
          "Visual 3D booth mockups and custom-curated merchandise collections aligned with your booth theme.",
      },
      {
        step: "03",
        title: "Production & Venue Logistics Coordination",
        description:
          "We liaise with convention centers and freight handlers to guarantee delivery straight to your advance warehouse or booth dock.",
      },
      {
        step: "04",
        title: "Post-Event Follow-Up Integration",
        description:
          "Synchronize newly acquired attendee lists with your digital nurture sequences and post-event gift mailers.",
      },
    ],
    stats: [
      { value: "3.2x", label: "Average increase in booth dwell time and qualified badge scans" },
      { value: "100%", label: "On-time convention center delivery track record nationwide" },
      { value: "Full-Funnel", label: "Pre-event buzz, on-site activation, and post-event nurture" },
    ],
    deliverables: [
      "Custom 3D booth layout & graphic dimension specifications",
      "Fully inspected display hardware and custom printed tension fabrics",
      "Packaged VIP attendee swag gift boxes ready for presentation",
      "Post-event marketing nurture campaign blueprint",
    ],
    ctaText: "Plan Your Next Event Strategy",
    ctaHref: "/contact",
  },

  // 3. Business Apparel
  {
    slug: "business-apparels",
    title: "Business Apparel",
    kicker: "Corporate Identity & Wardrobing",
    badge: "Brand Essential",
    tagline:
      "High-quality branded apparel for your team, clients, and events that strengthens your brand identity.",
    overview:
      "Your team represents your firm wherever they go. Cheap, poorly fitting apparel damages brand perception. We outfit professional organizations in retail-grade corporate apparel from premier brands like Nike Golf, Under Armour, and The North Face—decorated with precision high-density embroidery and clean laser-etched finishes.",
    keyOfferings: [
      {
        title: "Executive Outerwear & Weatherwear",
        description:
          "Water-repellent softshell jackets, fleece vests, and corporate quarter-zips that team members proudly wear in and out of the office.",
      },
      {
        title: "Performance Polos & Woven Shirts",
        description:
          "Moisture-wicking micro-pique polos, wrinkle-resistant button-downs, and business casual apparel designed for comfort and durability.",
      },
      {
        title: "Medical Uniforms & Clinic Scrubs",
        description:
          "Antimicrobial, stretch-engineered lab coats and scrubs with embroidered medical practice logos for clinics and healthcare teams.",
      },
      {
        title: "Custom Headwear & Accessories",
        description:
          "Structured chino cotton caps, modern flat brims, and cozy knit beanies featuring custom 3D puff embroidery and woven labels.",
      },
    ],
    processSteps: [
      {
        step: "01",
        title: "Brand & Fit Consultation",
        description:
          "We review your firm's dress code, sizing distribution, and preferred garment silhouettes (Athletic, Classic, or Tailored).",
      },
      {
        step: "02",
        title: "Embroidery Digitization & Stitch Proof",
        description:
          "Our master digitizers optimize your logo for embroidery, accounting for stitch count, thread sheen, and fabric tension.",
      },
      {
        step: "03",
        title: "Precision Decoration & Inspection",
        description:
          "Garments are individually embroidered using color-matched Madeira threads, trimmed, and steam-pressed for pristine presentation.",
      },
      {
        step: "04",
        title: "Individual Folding & Size Labeling",
        description:
          "Each piece is individually poly-bagged and labeled by recipient or size for hassle-free distribution at your office.",
      },
    ],
    stats: [
      { value: "50,000+", label: "Custom embroidered garments produced" },
      { value: "10,000", label: "Stitch count capacity with zero puckering" },
      { value: "Top Tier", label: "Retail partners: Nike, UA, Carhartt, North Face" },
    ],
    deliverables: [
      "Physical sizing sample kits available upon request",
      "Digitized embroidery sew-out proof photos for approval",
      "Individual poly-bagged garments categorized by size and team member",
      "Optional company apparel webstore for frictionless ongoing orders",
    ],
    ctaText: "Explore Business Apparel Options",
    ctaHref: "/products",
  },

  // 4. Digital Marketing Strategy
  {
    slug: "digital-marketing-strategy",
    title: "Digital Marketing Strategy",
    kicker: "Omnichannel Growth & Lead Generation",
    badge: "Core Solution",
    tagline:
      "Create engaging content, manage social media, and run targeted campaigns that increase brand awareness and generate new business.",
    overview:
      "A fragmented digital presence wastes marketing spend. We construct cohesive, full-funnel digital marketing strategies specifically tailored to professional firms. From executive thought leadership and active social media management to targeted PPC advertising and automated nurture sequences, every touchpoint drives qualified leads.",
    keyOfferings: [
      {
        title: "Thought Leadership Content Marketing",
        description:
          "Professionally written articles, white papers, and client case studies establishing your partners and firm as preeminent industry leaders.",
      },
      {
        title: "Social Media Management & Storytelling",
        description:
          "Consistent, curated content across LinkedIn, Meta, and Instagram highlighting your team culture, achievements, and client successes.",
      },
      {
        title: "Targeted Paid Advertising (PPC)",
        description:
          "Data-driven LinkedIn and Google Search campaigns targeting decision-makers with precise geographic and demographic parameters.",
      },
      {
        title: "Automated Email & Client Retention",
        description:
          "High-value monthly newsletters, educational drip campaigns, and re-engagement workflows that protect and expand your client base.",
      },
    ],
    processSteps: [
      {
        step: "01",
        title: "Strategic Positioning Audit",
        description:
          "Analyze your existing customer journey, competitors, and revenue goals to identify highest-leverage growth opportunities.",
      },
      {
        step: "02",
        title: "Monthly Editorial & Campaign Calendar",
        description:
          "Develop comprehensive content briefs, ad creative, and messaging pillars mapped to your target audience's pain points.",
      },
      {
        step: "03",
        title: "Multi-Channel Production & Deployment",
        description:
          "Our content creators, designers, and ad managers launch and monitor campaigns across all digital touchpoints daily.",
      },
      {
        step: "04",
        title: "Continuous Optimization & ROI Reporting",
        description:
          "Bi-weekly performance reviews analyzing lead quality, cost-per-acquisition (CPA), and pipeline attribution.",
      },
    ],
    stats: [
      { value: "4.5x", label: "Average return on ad spend (ROAS)" },
      { value: "2.8x", label: "Engagement rate increase across corporate channels" },
      { value: "1-on-1", label: "Dedicated marketing director assigned to your account" },
    ],
    deliverables: [
      "Custom multi-channel digital marketing blueprint",
      "Full monthly editorial calendar with copywriting and custom graphics",
      "Paid ad campaign setup, A/B testing, and negative keyword management",
      "Monthly executive video review and live KPI performance dashboard",
    ],
    ctaText: "Schedule a Digital Strategy Session",
    ctaHref: "/contact",
  },

  // 5. SEO & AIO
  {
    slug: "seo-aio",
    title: "SEO & AIO",
    kicker: "Next-Generation Search Visibility",
    badge: "Cutting-Edge",
    tagline:
      "Increase your search visibility and appear in both traditional and AI-powered search results to attract more clients.",
    overview:
      "Modern search has evolved beyond traditional keyword rankings. Today's prospective clients search on Google, ChatGPT, Perplexity, and Google Gemini AI Overviews. Our dual-engine SEO & AIO methodology optimizes your entity authority, structured data, and high-intent content to dominate both algorithmic search and generative AI summaries.",
    keyOfferings: [
      {
        title: "AI Overview (AIO) Optimization",
        description:
          "Structure your brand's knowledge base so AI search engines cite and recommend your firm as the leading authority in your region.",
      },
      {
        title: "Technical & Core Web Vitals Audit",
        description:
          "Resolve crawl errors, schema markup gaps, page speed bottlenecks, and mobile rendering hurdles to ensure indexation dominance.",
      },
      {
        title: "High-Intent Semantic Content Strategy",
        description:
          "Publish answer-focused guides, case studies, and FAQ hubs engineered to capture high-value prospective clients ready to convert.",
      },
      {
        title: "Local Authority & Digital Citations",
        description:
          "Reinforce Google Business Profile, local directory synchronization, and trusted community backlinks that cement regional prominence.",
      },
    ],
    processSteps: [
      {
        step: "01",
        title: "AI Engine & Organic Audit",
        description:
          "We benchmark your visibility across Google, ChatGPT, and Perplexity against your top 3 local competitors.",
      },
      {
        step: "02",
        title: "Knowledge Graph & Entity Structuring",
        description:
          "Implement advanced Schema.org JSON-LD microdata establishing who you are, what you do, and why you are verified.",
      },
      {
        step: "03",
        title: "High-Impact Content Publishing",
        description:
          "Produce authoritative, human-crafted editorial assets that answer complex client inquiries and earn high-tier citations.",
      },
      {
        step: "04",
        title: "Citation Tracking & Growth Reporting",
        description:
          "Real-time visibility into keyword rankings, organic lead conversions, and generative AI search mentions.",
      },
    ],
    stats: [
      { value: "+180%", label: "Average organic traffic growth within 6 months" },
      { value: "Top 3", label: "Citation placement across AI search engines" },
      { value: "100%", label: "Strict white-hat compliance with Google guidelines" },
    ],
    deliverables: [
      "Full technical SEO & generative AI visibility diagnostic report",
      "Structured Schema.org implementation across your entire website",
      "Monthly published thought leadership & target search articles",
      "Transparent 24/7 client analytics dashboard with conversion tracking",
    ],
    ctaText: "Request Free Search Visibility Audit",
    ctaHref: "/contact",
  },
];

export function getServiceBySlug(slug: string): ServiceDetail | undefined {
  return SERVICES_LIST.find((s) => s.slug === slug);
}

export function getOtherServices(currentSlug: string): ServiceDetail[] {
  return SERVICES_LIST.filter((s) => s.slug !== currentSlug);
}
