'use client';

import mainLogo from '@public/images/shared/logo-1.png';
import RevealAnimation from '@/components/animation/reveal-animation';
import { FooterBottom } from '@/components/shared/layout/footer/footer-bottom';
import { FooterLinkGroups } from '@/components/shared/layout/footer/footer-link-groups';
import { FooterSocialLinks } from '@/components/shared/layout/footer/footer-social-links';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export const AppStoreButtons = () => {
  const [showIosAlert, setShowIosAlert] = useState(false);

  return (
    <div className="mt-8 flex flex-col gap-2.5">
      <div className="flex flex-wrap items-center gap-3">
        {/* Google Play Store Button */}
        <Link
          href="https://play.google.com/store/apps/details?id=com.caartzee.merchant"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex items-center gap-3 rounded-xl border border-secondary/15 bg-white/80 px-4 py-2.5 shadow-sm backdrop-blur-md transition-all duration-300 hover:border-primary-500 hover:bg-white hover:shadow-md hover:shadow-primary-500/10 dark:border-white/10 dark:bg-background-8 dark:hover:border-primary-400"
        >
          <svg
            className="size-6 shrink-0 transition-transform duration-300 group-hover:scale-110"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M3.608 1.637A1.85 1.85 0 0 0 3 3.037v17.926c0 .548.22 1.058.608 1.4L13.1 12 3.608 1.637z"
              fill="#00E676"
            />
            <path
              d="M16.5 8.6 4.9 2.05c-.39-.22-.84-.33-1.29-.33l9.5 9.5 3.39-2.62z"
              fill="#FFD600"
            />
            <path
              d="M3.61 22.28c.45 0 .9-.11 1.29-.33L16.5 15.4l-3.4-2.62-9.49 9.5z"
              fill="#FF1744"
            />
            <path
              d="M20.25 10.74 16.5 8.6 13.1 12l3.4 3.4 3.75-2.14c.94-.54.94-1.98 0-2.52z"
              fill="#00B0FF"
            />
          </svg>
          <div className="flex flex-col text-left">
            <span className="text-[10px] font-medium uppercase tracking-wider text-background-14/60 dark:text-accent/60">
              Get it on
            </span>
            <span className="text-xs font-semibold text-secondary transition-colors duration-200 group-hover:text-primary-500 dark:text-white">
              Google Play
            </span>
          </div>
        </Link>

        {/* Apple App Store Button */}
        <button
          type="button"
          onClick={() => setShowIosAlert((prev) => !prev)}
          className="group relative inline-flex items-center gap-3 rounded-xl border border-secondary/15 bg-white/80 px-4 py-2.5 shadow-sm backdrop-blur-md transition-all duration-300 hover:border-primary-500 hover:bg-white hover:shadow-md hover:shadow-primary-500/10 dark:border-white/10 dark:bg-background-8 dark:hover:border-primary-400 cursor-pointer"
        >
          <svg
            className="size-6 shrink-0 fill-secondary transition-all duration-300 group-hover:scale-110 group-hover:fill-primary-500 dark:fill-white"
            viewBox="0 0 24 24"
          >
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.84c.64-.78 1.08-1.86.96-2.95-1 .04-2.16.66-2.83 1.44-.59.67-1.11 1.77-.97 2.82 1.13.09 2.22-.55 2.84-1.31z" />
          </svg>
          <div className="flex flex-col text-left">
            <span className="text-[10px] font-medium uppercase tracking-wider text-background-14/60 dark:text-accent/60">
              Download on the
            </span>
            <span className="text-xs font-semibold text-secondary transition-colors duration-200 group-hover:text-primary-500 dark:text-white">
              App Store
            </span>
          </div>
        </button>
      </div>

      {/* iOS App Store: Coming Soon Badge */}
      {showIosAlert && (
        <div className="animate-in fade-in zoom-in-95 duration-200 inline-flex items-center gap-2 rounded-full border border-emerald-900/40 bg-[#0f2c1f] px-4 py-1.5 text-xs font-medium text-emerald-400 shadow-md w-fit">
          <svg
            className="size-3.5 shrink-0 stroke-emerald-400"
            viewBox="0 0 24 24"
            fill="none"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
          <span className="font-semibold text-white">
            iOS App Store: <span className="text-emerald-300 font-normal">Coming Soon!</span>
          </span>
        </div>
      )}
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="footer bg-background-13 relative z-0 overflow-hidden">
      <div className="main-container px-5">
        <div className="grid grid-cols-12 justify-between gap-x-0 gap-y-16 pb-12 pt-39">
          <div className="col-span-12 xl:col-span-4">
            <RevealAnimation delay={0.1}>
              <div className="max-w-[340px]">
                <Link href="/">
                  <span className="sr-only">Caartzee</span>
                  <figure className="max-w-[198px]">
                    <Image src={mainLogo} alt="Caartzee Logo" />
                  </figure>
                </Link>
                <p className="text-background-14/60 text-tagline-1 mt-4 mb-7 font-normal">
                  Caartzee helps brands automate operations, connect their commerce channels, and
                  scale faster—without extra complexity.
                </p>
                <FooterSocialLinks />
                <AppStoreButtons />
              </div>
            </RevealAnimation>
          </div>
          <FooterLinkGroups />
        </div>
        <FooterBottom />
      </div>
    </footer>
  );
};

export default Footer;
