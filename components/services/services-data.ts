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
        title: "Discovery & Budget Architecture",
        description:
          "We analyze your audience, timeline, and budget parameters to curate a targeted selection of products with maximum perceived value.",
      },
      {
        step: "02",
        title: "Free Digital Proof & Visual Mockup",
        description:
          "Our design studio creates scale-accurate virtual proofs with Pantone PMS color matching so you see your brand exactly as produced.",
      },
      {
        step: "03",
        title: "Precision Manufacturing & QC",
        description:
          "We partner with over 1,000 certified ethical factories with strict pre-shipment quality audits on every single production run.",
      },
      {
        step: "04",
        title: "Kitting & Multi-Address Drop Shipping",
        description:
          "We handle individual recipient kitting, custom presentation packaging, and reliable trackable delivery across the United States.",
      },
    ],
    stats: [
      { value: "83%", label: "Of clients keep branded promotional items over a year" },
      { value: "1,000+", label: "Verified ethical production partners" },
      { value: "100%", label: "Pre-production digital proof guarantee" },
    ],
    deliverables: [
      "Custom branded product deck tailored to your firm",
      "Scale virtual digital proofs before any production starts",
      "Volume bulk price tier schedule with zero hidden fees",
      "Consolidated master shipping or individual recipient drop shipping",
    ],
    ctaText: "Browse Online Product Catalog",
    ctaHref: "/products",
  },
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
  {
    slug: "event-and-campaign-strategy",
    title: "Event and Campaign Strategy",
    kicker: "Experiential Impact & Lead Generation",
    badge: "High Impact",
    tagline:
      "Plan and execute engaging events and targeted campaigns that build relationships and drive real results.",
    overview:
      "Whether you are hosting an intimate client appreciation dinner, exhibiting at a premier national trade conference, or launching a multi-channel quarterly awareness campaign, we provide the cohesive strategy, eye-catching displays, and tactile collateral required to command attention and turn attendees into valuable clients.",
    keyOfferings: [
      {
        title: "Trade Show Booth Exhibits & Banners",
        description:
          "Dye-sublimated tension fabric backdrops, retractable roll-up displays, and wrinkle-free stretch table covers that stop aisle traffic.",
      },
      {
        title: "VIP Attendee Swag & Welcome Packs",
        description:
          "Curated conference kits, event badge lanyards, executive notebooks, and custom giveaway merchandise attendees fight over.",
      },
      {
        title: "Pre-Event Digital Buzz & Promotion",
        description:
          "Targeted email invitations, social media campaigns, and landing pages that maximize event registration and booth visits.",
      },
      {
        title: "Post-Event Lead Nurturing Workflows",
        description:
          "Automated follow-up campaigns and tactile thank-you mailers that bridge event conversations into closed contracts.",
      },
    ],
    processSteps: [
      {
        step: "01",
        title: "Event Theme & Objective Architecture",
        description:
          "Define measurable targets for booth foot traffic, lead acquisition, and brand visibility based on event demographics.",
      },
      {
        step: "02",
        title: "Environmental & Collateral Design",
        description:
          "Create complete 3D mockups of your booth layout, banner displays, presentation materials, and matching swag pieces.",
      },
      {
        step: "03",
        title: "Production & Venue Direct Logistics",
        description:
          "Manufacture and ship all collateral directly to convention centers or hotels with advance marshaling guarantee.",
      },
      {
        step: "04",
        title: "Post-Event Conversion Activation",
        description:
          "Deploy multi-touch follow-up email sequences and personalized client gifts within 48 hours of event completion.",
      },
    ],
    stats: [
      { value: "3.2x", label: "Higher trade show booth visitor engagement" },
      { value: "100%", label: "On-time convention venue delivery guarantee" },
      { value: "48 Hr", label: "Rapid post-event lead activation turnaround" },
    ],
    deliverables: [
      "Custom 3D trade show booth layout & graphic design blueprints",
      "Complete exhibit hardware (retractable banners, table throws, backdrops)",
      "Branded event attendee swag bags and high-retention collateral",
      "Digital campaign promotional graphics and follow-up email templates",
    ],
    ctaText: "Plan Your Next Event Strategy",
    ctaHref: "/contact",
  },
  {
    slug: "business-apparels",
    title: "Business Apparels",
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
];

export function getServiceBySlug(slug: string): ServiceDetail | undefined {
  return SERVICES_LIST.find((s) => s.slug === slug);
}

export function getOtherServices(currentSlug: string): ServiceDetail[] {
  return SERVICES_LIST.filter((s) => s.slug !== currentSlug);
}

