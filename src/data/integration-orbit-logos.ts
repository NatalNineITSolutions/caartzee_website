import amazonIcon from '@public/images/icons/amazon.png';
import dhlIcon from '@public/images/icons/dhl.png';
import flipkartIcon from '@public/images/icons/Flipcart-icon.png';
import googleIcon from '@public/images/icons/google.png';
import instagramIcon from '@public/images/icons/instagram.png';
import linkedinIcon from '@public/images/icons/linkedin.png';
import shopifyIcon from '@public/images/icons/shopify.png';
import whatsappIcon from '@public/images/icons/whatsapp.png';
import { StaticImageData } from 'next/image';

export interface IntegrationOrbitLogo {
  src: StaticImageData;
  alt: string;
}

const baseIcons: IntegrationOrbitLogo[] = [
  { src: amazonIcon, alt: 'Amazon' },
  { src: shopifyIcon, alt: 'Shopify' },
  { src: flipkartIcon, alt: 'Flipkart' },
  { src: googleIcon, alt: 'Google' },
  { src: whatsappIcon, alt: 'WhatsApp' },
  { src: dhlIcon, alt: 'DHL' },
  { src: instagramIcon, alt: 'Instagram' },
  { src: linkedinIcon, alt: 'LinkedIn' },
];

export const integrationOrbitLogos: IntegrationOrbitLogo[] = [
  ...baseIcons,
  ...baseIcons,
  ...baseIcons,
];
