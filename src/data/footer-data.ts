import { FooterData } from '@/interface';

export const footerLinks: FooterData[] = [
  {
    title: 'Products',
    links: [
      { label: 'Caartzee themes', href: '/themes' },
      { label: 'Caartzee delivery', href: '/delivery' },
      { label: 'Caartzee plugins', href: '/plugins' },
      { label: 'Business tools', href: '/business-tools' },
      { label: 'Free tools', href: '/business-tools' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Careers', href: '/career' },
      { label: 'Contact Us', href: '/contact-us' },
    ],
  },
  {
    title: 'Legal Policies',
    links: [
      { label: 'Terms & Conditions', href: '/terms-conditions' },
      { label: 'Privacy Policy', href: '/privacy-policy' },
      { label: 'Refund Policy', href: '/refund-policy' },
    ],
  },
];
