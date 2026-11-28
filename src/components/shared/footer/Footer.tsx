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

              {/* App Store & Play Store Badges */}
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <Link
                  href="https://play.google.com/store/apps/details?id=com.caartzee.merchant"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/5 px-3.5 py-2 shadow-sm backdrop-blur-md transition-all duration-300 hover:border-primary-500 hover:bg-white/10 hover:shadow-md hover:shadow-primary-500/10"
                >
                  <svg className="size-5 shrink-0 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="none">
                    <path d="M3.608 1.637A1.85 1.85 0 0 0 3 3.037v17.926c0 .548.22 1.058.608 1.4L13.1 12 3.608 1.637z" fill="#00E676" />
                    <path d="M16.5 8.6 4.9 2.05c-.39-.22-.84-.33-1.29-.33l9.5 9.5 3.39-2.62z" fill="#FFD600" />
                    <path d="M3.61 22.28c.45 0 .9-.11 1.29-.33L16.5 15.4l-3.4-2.62-9.49 9.5z" fill="#FF1744" />
                    <path d="M20.25 10.74 16.5 8.6 13.1 12l3.4 3.4 3.75-2.14c.94-.54.94-1.98 0-2.52z" fill="#00B0FF" />
                  </svg>
                  <div className="flex flex-col text-left">
                    <span className="text-[9px] font-medium uppercase tracking-wider text-accent/60">Get it on</span>
                    <span className="text-xs font-semibold text-white transition-colors duration-200 group-hover:text-primary-400">Google Play</span>
                  </div>
                </Link>

                <Link
                  href="#"
                  className="group relative inline-flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/5 px-3.5 py-2 shadow-sm backdrop-blur-md transition-all duration-300 hover:border-primary-500 hover:bg-white/10 hover:shadow-md hover:shadow-primary-500/10"
                >
                  <svg className="size-5 shrink-0 fill-white transition-all duration-300 group-hover:scale-110 group-hover:fill-primary-400" viewBox="0 0 24 24">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.84c.64-.78 1.08-1.86.96-2.95-1 .04-2.16.66-2.83 1.44-.59.67-1.11 1.77-.97 2.82 1.13.09 2.22-.55 2.84-1.31z" />
                  </svg>
                  <div className="flex flex-col text-left">
                    <span className="text-[9px] font-medium uppercase tracking-wider text-accent/60">Download on the</span>
                    <span className="text-xs font-semibold text-white transition-colors duration-200 group-hover:text-primary-400">App Store</span>
                  </div>
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
