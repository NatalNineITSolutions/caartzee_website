import { MobileMenuGroup } from '@/components/shared/mobile-menu/MobileMenu';
import { FooterOneData } from '@/interface';

export const mobileMenuData: MobileMenuGroup[] = [
  {
    id: 'products',
    title: 'Products',
    submenu: [
      { id: 'caartzee-themes', label: 'Caartzee themes', href: '/themes' },
      { id: 'caartzee-delivery', label: 'Caartzee delivery', href: '/delivery' },
      { id: 'caartzee-plugins', label: 'Caartzee plugins', href: '/plugins' },
      { id: 'business-tools', label: 'Business tools', href: '/business-tools' },
    ],
  },
  {
    id: 'company',
    title: 'Company',
    submenu: [
      { id: 'careers', label: 'Careers', href: '/career' },
      { id: 'about', label: 'About', href: '/about' },
    ],
  },
// {
  //   id: 'resources',
  //   title: 'Resources',
  //   submenu: [
  //     { id: 'blog', label: 'Blog', href: '/blog' },
  //     { id: 'community', label: 'Community', href: '/community' },
  //     { id: 'videos', label: 'Videos', href: '/videos' },
  //     { id: 'help-center', label: 'Help center', href: '/help-center' },
  //   ],
  // },
  {
    id: 'blog',
    title: 'Blog',
    submenu: [
      { id: 'blog-page', label: 'Blog', href: '/blog' },
    ],
  },
  {
    id: 'launch-your-store',
    title: 'Launch Your Store',
    submenu: [
      { id: 'ecommerce-page', label: 'Launch Your Store', href: '/ecommerce' },
    ],
  },
  {
    id: 'pricing',
    title: 'Pricing',
    submenu: [
      { id: 'pricing-page', label: 'Pricing', href: '/pricing' },
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