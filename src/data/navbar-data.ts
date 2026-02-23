import { MobileMenuGroup } from '@/components/shared/mobile-menu/MobileMenu';
import { FooterOneData } from '@/interface';

export const mobileMenuData: MobileMenuGroup[] = [
  {
    id: 'products',
    title: 'Products',
    submenu: [
      { id: 'caartzee-zeedone', label: 'Caartzee Zeedone', href: 'https://www.zeedone.com' },
      { id: 'caartzee-sales-navigator', label: 'CaartZee Sales Navigator', href: '/sales-navigator' },
      { id: 'caatzee-snap', label: 'Caatzee Snap', href: '/caartzee-snap' },
      { id: 'caartzee-crewsync', label: 'CaartZee Crewsync', href: '/caartzee-crewsync' },
    ],
  },

  {
    id: 'features',
    title: 'Features',
    submenu: [
      { id: 'smart-sales-engine', label: 'Smart Sales Engine', href: '/smart-sales' },
      { id: 'gst-finance-automation', label: 'GST & Finance Automation', href: '/growth' },
      { id: 'inventory-stock-ai', label: 'Inventory & Stock AI', href: '/inventory' },
      { id: 'vendor-team-control', label: 'Vendor & Team Control', href: '/team' },
      { id: 'growth-analytics', label: 'Growth Analytics', href: '/growth' },
      { id: 'unified-customer-inbox', label: 'Unified Customer Inbox', href: '/support' },
    ],
  },

  {
    id: 'solutions',
    title: 'Solutions',
    submenu: [
      { id: 'ecommerce', label: 'Ecommerce', href: './ecommerce' },
      { id: 'retailers', label: 'Retailers', href: './retailers' },
      { id: 'sales', label: 'Sales', href: './sales' },
    ],
  },

  {
    id: 'pricing',
    title: 'Pricing',
    submenu: [
      { id: 'pricing-page', label: 'Pricing', href: '/pricing' },
    ],
  },

  {
    id: 'contact',
    title: 'Contact',
    submenu: [
      { id: 'contact-page', label: 'Contact', href: '/contact-us' },
    ],
  },

  // Footer Sections Added Below

  {
    id: 'company',
    title: 'Company',
    submenu: [
      { id: 'about-us', label: 'About Us', href: '/about' },
      { id: 'career', label: 'Career', href: '/career' },
      { id: 'case-studies', label: 'Case Studies', href: '/case-study' },
      { id: 'contact-us-footer', label: 'Contact Us', href: '/contact-us' },
    ],
  },

  {
    id: 'support-footer',
    title: 'Support',
    submenu: [
      { id: 'faq', label: 'FAQ', href: '/faq' },
      { id: 'documentation', label: 'Documentation', href: '/documentation' },
      { id: 'tutorial', label: 'Tutorial', href: '/tutorial' },
      { id: 'community', label: 'Community', href: '/community' },
    ],
  },

  {
    id: 'legal-policies',
    title: 'Legal Policies',
    submenu: [
      { id: 'terms-conditions', label: 'Terms & Conditions', href: '/terms-conditions' },
      { id: 'privacy-policy', label: 'Privacy Policy', href: '/privacy-policy' },
      { id: 'refund-policy', label: 'Refund Policy', href: '/refund-policy' },
      { id: 'gdpr', label: 'GDPR Compliance', href: '/gdpr' },
      { id: 'affiliate-policy', label: 'Affiliate Policy', href: '/affiliate-policy' },
    ],
  },
];

export const footerData: FooterOneData[] = [
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Career', href: '/career' },
      { label: 'Case Studies', href: '/case-study' },
      { label: 'Contact Us', href: '/contact-us' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'FAQ', href: '/faq' },
      { label: 'Documentation', href: '/documentation' },
      { label: 'Tutorial', href: '/tutorial' },
      { label: 'Community', href: '/community' },
    ],
  },
  {
    title: 'Legal Policies',
    links: [
      { label: 'Terms & Conditions', href: '/terms-conditions' },
      { label: 'Privacy Policy', href: '/privacy-policy' },
      { label: 'Refund Policy', href: '/refund-policy' },
      // { label: 'GDPR Compliance', href: '/gdpr' },
      // { label: 'Affiliate Policy', href: '/affiliate-policy' },
    ],
  },
];