import { footerLinks } from '@/data/footer-data';
import { cn } from '@/utils/cn';
import facebook from '@public/images/icons/facebook.svg';
import instagram from '@public/images/icons/instagram.svg';
import linkedin from '@public/images/icons/linkedin.svg';
import youtube from '@public/images/icons/youtube.svg';
import darkLogo from '@public/images/shared/main-1.png';
import Image from 'next/image';
import Link from 'next/link';
import ThemeToggle from '../ThemeToggle';
import FooterDivider from './FooterDivider';

const Footer = ({ className }: { className?: string }) => {
  return (
    <footer className={cn('bg-secondary dark:bg-background-8 relative z-0 overflow-hidden', className)}>
      <div className="main-container px-5">
        <div className="grid grid-cols-12 justify-between gap-x-0 gap-y-16 pt-16 pb-12 xl:pt-[90px]">
          <div className="col-span-12 xl:col-span-4">
            <div className="max-w-[306px]">
              <figure>
                <Image className="w-15 h-auto dark:invert" src={darkLogo} alt="Caartzee Logo" />
              </figure>
              <p className="text-accent/60 text-tagline-1 mt-4 mb-7 font-normal">
                Caartzee helps you build better eCommerce businesses with flexible tools, powerful automation, in-depth documentation, and a team dedicated to scaling your growth.
              </p>
              <div className="flex items-center gap-3">
                <Link target="_blank" href="https://www.facebook.com/profile.php?id=61551430929394#">
                  <span className="sr-only">Facebook</span>
                  <Image className="size-6" src={facebook} alt="Facebook" />
                </Link>
                <div className="bg-stroke-1/20 h-6 w-px" />
                <Link target="_blank" href="https://www.instagram.com/caartzee">
                  <span className="sr-only">Instagram</span>
                  <Image className="size-6" src={instagram} alt="Instagram" />
                </Link>
                <div className="bg-stroke-1/20 h-6 w-px" />
                <Link target="_blank" href="https://youtube.com/@natalnine">
                  <span className="sr-only">Youtube</span>
                  <Image className="size-6" src={youtube} alt="Youtube" />
                </Link>
                <div className="bg-stroke-1/20 h-6 w-px" />
                <Link target="_blank" href="https://www.linkedin.com/company/natal-nine-it-solution/">
                  <span className="sr-only">LinkedIn</span>
                  <Image className="size-6" src={linkedin} alt="LinkedIn" />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-span-12 grid grid-cols-12 gap-x-0 gap-y-8 xl:col-span-8">
            {footerLinks.map(({ title, links }) => (
              <div className="col-span-12 sm:col-span-6 md:col-span-4" key={title}>
                <div className="space-y-8">
                  <p className="footer-title">{title}</p>
                  <ul className="space-y-5">
                    {links.map(({ label, href }) => (
                      <li key={label}>
                        <Link href={href} className="footer-link">
                          {label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative pt-[26px] pb-[42px] text-center md:flex md:items-center md:justify-between">
          <FooterDivider className="bg-accent/10 dark:bg-stroke-6" />
          <p className="text-tagline-1 text-primary-50 font-normal">
            Copyright © Caartzee 2026. All rights reserved.
          </p>
          <div className="mt-4 flex items-center justify-center gap-6 md:mt-0">
            <span className="text-tagline-1 text-primary-50/60 font-normal cursor-pointer hover:text-white transition-all">Region: India</span>
          </div>
        </div>
      </div>
      <ThemeToggle />
    </footer>
  );
};
Footer.displayName = 'Footer';
export default Footer;
