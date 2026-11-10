export interface IndustryDetail {
  id: string;
  category: string;
  title: string;
  slug: string;
  description: string;
  imageSrc: string;
  tagline: string;
  audience: string;
  challenges: string[];
  recommendedSolutions: {
    title: string;
    description: string;
  }[];
  digitalMarketingFocus: string[];
  badge?: string;
  metrics: {
    value: string;
    label: string;
  }[];
}

export const INDUSTRIES_DATA: IndustryDetail[] = [
  {
    id: "business-firms",
    category: "CORPORATE &",
    title: "Business Firms",
    slug: "business-firms",
    description:
      "Branded solutions that strengthen company culture, impress enterprise clients, and keep your business top of mind.",
    imageSrc: "/images/home/we-serve/business-firms.png",
    tagline:
      "Elevate your corporate brand with executive wardrobing, turnkey client gifting, and strategic digital positioning.",
    audience:
      "Financial advisory firms, consulting practices, technology startups, accounting firms, and regional corporate headquarters.",
    challenges: [
      "Remote and hybrid employee disengagement across distributed teams.",
      "Generic corporate gifts that end up discarded or forgotten.",
      "Difficulty standing out against national enterprise competitors.",
    ],
    recommendedSolutions: [
      {
        title: "Executive Onboarding Kits & Wardrobing",
        description:
          "Retail-grade Nike Golf, Under Armour, and The North Face jackets and polos tailored for professional pride.",
      },
      {
        title: "Client Appreciation & Retention Packages",
        description:
          "Vacuum-insulated drinkware, leatherette journals, and bespoke gift boxes that keep partners top of mind.",
      },
      {
        title: "Corporate Retreats & Trade Events",
        description:
          "Turnkey event displays, retractable banners, and attendee swag kits delivered on time directly to hotels or venues.",
      },
      {
        title: "Company Webstores & Direct Drop-Shipping",
        description:
          "Dedicated ordering portals for remote staff with consolidated monthly invoicing and inventory warehousing.",
      },
    ],
    digitalMarketingFocus: [
      "B2B LinkedIn Thought Leadership & Paid Sponsored Inquiries",
      "Organic Search & Generative AI Overview (AIO) Optimization",
      "Executive Case Studies & High-Converting Service Landing Pages",
    ],
    badge: "Corporate Partner",
    metrics: [
      { value: "94%", label: "Employee pride and culture score increase with retail apparel" },
      { value: "3.4x", label: "Client retention multiplier over generic outreach" },
      { value: "1,000+", label: "Turnkey multi-office drop shipments handled" },
    ],
  },
  {
    id: "attorneys",
    category: "PERSONAL INJURY &",
    title: "Attorneys & Law Firms",
    slug: "attorneys",
    description:
      "Thoughtful branded products and digital authority that build trust, show empathy, and keep your firm top of mind.",
    imageSrc: "/images/home/we-serve/attorneys.png",
    tagline:
      "Build deep local trust, maximize physician referral networks, and maintain dignified top-of-mind visibility.",
    audience:
      "Personal injury litigation attorneys, estate planning counsels, criminal defense practitioners, and regional full-service law firms.",
    challenges: [
      "Exorbitant pay-per-click costs for competitive legal keywords.",
      "Maintaining authoritative dignity while showing genuine human empathy to injured clients.",
      "Nurturing reciprocal referral networks with medical providers and community advocates.",
    ],
    recommendedSolutions: [
      {
        title: "Client Intake & Case Resolution Packages",
        description:
          "Embossed presentation folders, weighted brass rollerball pens, and comforting wellness sets that validate client trust.",
      },
      {
        title: "High-Visibility Community Safety Merchandise",
        description:
          "Heavyweight windproof golf umbrellas, safety emergency car kits, and branded ice scrapers people keep in vehicles for years.",
      },
      {
        title: "Physician & Chiropractor Referral Gifting",
        description:
          "Bespoke gourmet gift baskets, stainless steel tumblers, and holiday appreciation sets that cement medical partnership channels.",
      },
      {
        title: "Community Sponsorship & Gala Gear",
        description:
          "Co-branded 5K run shirts, golf tournament tee packs, and charity event collateral displaying civic leadership.",
      },
    ],
    digitalMarketingFocus: [
      "Google Local Services & High-Intent Map Pack Domination (Local SEO)",
      "Generative Engine Optimization (AIO) for Complex Legal Inquiries",
      "Reputation Management & Ethical 5-Star Client Review Velocity",
    ],
    badge: "Legal Authority",
    metrics: [
      { value: "+165%", label: "Average increase in qualified local case inquiries" },
      { value: "Top 3", label: "Local Google Maps ranking placement for target practice areas" },
      { value: "100%", label: "Strict adherence to state bar advertising ethics" },
    ],
  },
  {
    id: "medical-clinics",
    category: "CHIROPRACTIC, WELLNESS &",
    title: "Medical & Health Clinics",
    slug: "medical-clinics",
    description:
      "Practical, high-quality branded items that enhance the patient journey and grow your wellness practice.",
    imageSrc: "/images/home/we-serve/medical-clinics.png",
    tagline:
      "Inspire patient compliance, celebrate health milestones, and foster organic word-of-mouth clinic growth.",
    audience:
      "Chiropractic clinics, physical therapy centers, integrative wellness practices, dental studios, and specialty healthcare groups.",
    challenges: [
      "Patient churn and drop-off before completion of customized care plans.",
      "Competing against faceless regional hospital networks with massive ad budgets.",
      "Creating welcoming physical clinic touchpoints that alleviate healthcare anxiety.",
    ],
    recommendedSolutions: [
      {
        title: "Patient Welcome & Rehabilitation Kits",
        description:
          "Reusable therapeutic hot/cold compresses, stretch resistance bands, and hydration bottles that assist recovery at home.",
      },
      {
        title: "Antimicrobial Clinic Uniforms & Scrubs",
        description:
          "Premium stretch-knit embroidered scrubs and lab coats that elevate staff professionalism and clinic cleanliness.",
      },
      {
        title: "Milestone Celebration & Referral Rewards",
        description:
          "Custom ceramic speckle campfire mugs, organic tea tins, and wellness totes gifted upon discharge or milestone recovery.",
      },
      {
        title: "Community Health Fair & Event Collateral",
        description:
          "Table runners, posture screening banners, and healthy lifestyle giveaway items that draw lines at community fairs.",
      },
    ],
    digitalMarketingFocus: [
      "HIPAA-Compliant Patient Review Acquisition Workflows",
      "Hyper-Local SEO for Specific Symptoms & Holistic Treatments",
      "Educational Video Content & Social Media Patient Stories",
    ],
    badge: "Healthcare Grade",
    metrics: [
      { value: "+42%", label: "Increase in patient care plan retention and completion" },
      { value: "100%", label: "BPA-free, non-toxic, and clinic-grade materials" },
      { value: "2.6x", label: "Higher patient referral rate with intake gifting" },
    ],
  },
  {
    id: "organizations",
    category: "NON-PROFIT &",
    title: "Community Organizations",
    slug: "organizations",
    description:
      "Meaningful merchandise and awareness campaigns that amplify your mission and inspire your community.",
    imageSrc: "/images/home/we-serve/organization.png",
    tagline:
      "Maximize every marketing dollar, honor faithful donors, and rally volunteers behind your social cause.",
    audience:
      "Charitable non-profits, trade associations, educational foundations, civic leadership councils, and community advocacy groups.",
    challenges: [
      "Stretching limited grant and donor funds without sacrificing merchandise quality.",
      "Preventing volunteer burnout and maintaining donor passion year after year.",
      "Producing large-scale gala and fundraising event materials under tight timelines.",
    ],
    recommendedSolutions: [
      {
        title: "Major Donor VIP Recognition Awards",
        description:
          "Laser-engraved crystal recognition plaques, bespoke velvet gift boxes, and commemorative framed keepsakes.",
      },
      {
        title: "Eco-Friendly Volunteer & Campaign Gear",
        description:
          "100% recycled cotton tote bags, biodegradable water bottles, and screen-printed organic cotton volunteer tees.",
      },
      {
        title: "Fundraising Gala Displays & Event Swag",
        description:
          "Step-and-repeat media backdrops, custom donor badge lanyards, and silent auction collateral packs.",
      },
      {
        title: "Awareness Campaign Giveaways",
        description:
          "High-volume silicone wristbands, die-struck enamel lapel pins, and custom die-cut vinyl decal stickers.",
      },
    ],
    digitalMarketingFocus: [
      "Google Ad Grants Optimization ($10,000/mo Free Search Grants)",
      "Targeted Social Media Donor Acquisition & Storytelling Campaigns",
      "Year-End Giving Email Sequences & Recurring Donor Funnels",
    ],
    badge: "Mission Driven",
    metrics: [
      { value: "2.8x", label: "Higher donor re-engagement through physical appreciation" },
      { value: "100%", label: "Ethically audited and eco-conscious supply chains" },
      { value: "Special", label: "Discounted non-profit tiered volume pricing" },
    ],
  },
];

