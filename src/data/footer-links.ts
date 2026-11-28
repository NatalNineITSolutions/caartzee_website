export interface FooterLinkItem {
  label: string;
  href: string;
}

export interface FooterLinkColumn {
  title: string;
  links: FooterLinkItem[];
}

export const footerNavColumns: FooterLinkColumn[] = [
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Career', href: '/career' },
      { label: 'Why Choose Us', href: '/why-choose-us' },
      { label: 'Our Manifesto', href: '/our-manifesto' },
      { label: 'Contact Us', href: '/contact-us' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'FAQ', href: '/faq' },
      { label: 'Documentation', href: '/documentation' },
      { label: 'Tutorial', href: '/tutorial' },
      { label: 'Support', href: '/support' },
    ],
  },
  {
    title: 'Legal Policies',
    links: [
      { label: 'Terms & Conditions', href: '/terms-conditions' },
      { label: 'Privacy Policy', href: '/privacy-policy' },
      { label: 'Refund Policy', href: '/refund-policy' },
      { label: 'Cancellation Policy', href: '/cancellation-policy' },
      { label: 'GDPR Compliance', href: '/gdpr' },
      { label: 'Affiliate Policy', href: '/affiliate-policy' },
    ],
  },
];

export interface FooterSocialLink {
  label: string;
  href: string;
  icon: string;
}

export const footerSocialLinks: FooterSocialLink[] = [
  { label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61551430929394#', icon: '/images/icons/facebook-dark.svg' },
  { label: 'Instagram', href: 'https://www.instagram.com/caartzee', icon: '/images/icons/instagram-dark.svg' },
  { label: 'Youtube', href: 'https://youtube.com/@natalnine', icon: '/images/icons/youtube-dark.svg' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/natal-nine-it-solution/', icon: '/images/icons/linkedin-dark.svg' },
];
