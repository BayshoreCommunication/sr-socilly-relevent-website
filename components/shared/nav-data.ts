export interface SubNavItem {
  title: string;
  href: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: SubNavItem[];
}

export const SERVICES_DROPDOWN_ITEMS: SubNavItem[] = [
  {
    title: "Promotional Products",
    href: "/services/promotional-products",
  },
  {
    title: "SEO & AIO",
    href: "/services/seo-aio",
  },
  {
    title: "Event and Campaign Strategy",
    href: "/services/event-and-campaign-strategy",
  },
  {
    title: "Business Apparels",
    href: "/services/business-apparels",
  },
  {
    title: "Digital Marketing Strategy",
    href: "/services/digital-marketing-strategy",
  },
];

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: SERVICES_DROPDOWN_ITEMS,
  },
  { label: "Products", href: "/products" },
  { label: "Industries", href: "/industries" },
  { label: "Contact", href: "/contact" },
];
