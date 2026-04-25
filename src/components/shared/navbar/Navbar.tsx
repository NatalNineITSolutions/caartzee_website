'use client';
import RevealAnimation from '@/components/animation/RevealAnimation';
import { MobileMenuProvider } from '@/context/MobileMenuContext';
import { mobileMenuData } from '@/data/navbar-data';
import { useNavbarScroll } from '@/hooks/useScrollHeader';
import { cn } from '@/utils/cn';
// import logoDark from '@public/images/shared/logo-dark.svg';
import logoDark from '@public/images/shared/main-1.png';
import logo from '@public/images/shared/main-1.png';
// import logo from '@public/images/shared/logo.svg';
import mainLogo from '@public/images/shared/logo-1.png';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import MobileMenu from '../mobile-menu/MobileMenu';
import CompanyMenu from './CompanyMenu';
import MobileMenuButton from './MobileMenuButton';
import PlanAndSupportMenu from './PlanAndSupportMenu';
import PlatformMenu from './PlatformMenu';
import ResourcesMenu from './ResourcesMenu';

const Navbar = () => {
  const { isScrolled } = useNavbarScroll(150);

  const [menuDropdownId, setMenuDropdownId] = useState<string | null>(null);

  const handleMenuHover = (dropdownId?: string | null) => {
    setMenuDropdownId(dropdownId || null);
  };
  return (
    <MobileMenuProvider>
      <header
        onMouseLeave={() => handleMenuHover(null)}
        className={cn(
          'lp:!max-w-[1290px] fixed top-5 left-1/2 z-50 mx-auto w-full max-w-[350px] -translate-x-1/2 transition-all duration-500 ease-in-out max-[400px]:max-w-[350px] min-[425px]:max-w-[375px] min-[500px]:max-w-[450px] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px]',
          isScrolled && 'top-2',
        )}>
        <RevealAnimation direction="up" offset={100} delay={0.1} instant>
          <div className="dark:bg-background-7 flex items-center justify-between rounded-full bg-white/60 px-2.5 py-2.5 backdrop-blur-[25px] xl:py-0">
            <div>
              <Link href="/">
                <span className="sr-only">Home</span>
                <figure className="hidden lg:block lg:max-w-[198px]">
                  <Image src={mainLogo} alt="Caartzee" className="dark:invert" />
                </figure>
                <figure className="block max-w-[22px] lg:hidden">
                  <Image src={logo} alt="Caartzee" className="block w-full dark:hidden dark:invert" />
                  <Image src={logoDark} alt="Caartzee" className="hidden w-full dark:block dark:invert" />
                </figure>
              </Link>
            </div>
            <nav className="hidden items-center xl:flex">
              <ul className="flex items-center">

                <li
                  className="nav-item relative cursor-pointer py-2.5"
                  data-menu="platform-mega-menu"
                  onMouseEnter={() => handleMenuHover('platform-mega-menu')}>
                  <Link
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    className="hover:border-stroke-2 dark:hover:border-stroke-7 text-tagline-1 text-secondary/60 hover:text-secondary dark:text-accent/60 dark:hover:text-accent flex items-center gap-1 rounded-full border border-transparent px-4 py-2 font-normal transition-all duration-200">
                    <span>Products</span>
                    <span className="nav-arrow block origin-center translate-y-px transition-all duration-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                      </svg>
                    </span>
                  </Link>
                  <PlatformMenu menuDropdownId={menuDropdownId} setMenuDropdownId={setMenuDropdownId} />
                </li>

                <li
                  className="nav-item relative cursor-pointer py-2.5"
                  data-menu="company-mega-menu"
                  onMouseEnter={() => handleMenuHover('company-mega-menu')}>
                  <Link
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    className="hover:border-stroke-2 dark:hover:border-stroke-7 text-tagline-1 text-secondary/60 hover:text-secondary dark:text-accent/60 dark:hover:text-accent flex items-center gap-1 rounded-full border border-transparent px-4 py-2 font-normal transition-all duration-200">
                    <span>Company</span>
                    <span className="nav-arrow block origin-center translate-y-px transition-all duration-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                      </svg>
                    </span>
                  </Link>
                  <CompanyMenu menuDropdownId={menuDropdownId} setMenuDropdownId={setMenuDropdownId} />
                </li>



                {/* <li
                  className="nav-item relative cursor-pointer py-2.5"
                  data-menu="resources-dropdown-menu"
                  onMouseEnter={() => handleMenuHover('resources-dropdown-menu')}>
                  <Link
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    className="hover:border-stroke-2 dark:hover:border-stroke-7 text-tagline-1 text-secondary/60 hover:text-secondary dark:text-accent/60 dark:hover:text-accent flex items-center gap-1 rounded-full border border-transparent px-4 py-2 font-normal transition-all duration-200">
                    <span>Resources</span>
                    <span className="nav-arrow block origin-center translate-y-px transition-all duration-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                      </svg>
                    </span>
                  </Link>
                  <ResourcesMenu menuDropdownId={menuDropdownId} setMenuDropdownId={setMenuDropdownId} />
                </li> */}

                <li className="nav-item relative cursor-pointer py-2.5">
                  <Link
                    href="/ecommerce"
                    className="hover:border-stroke-2 dark:hover:border-stroke-7 text-tagline-1 text-secondary/60 hover:text-secondary dark:text-accent/60 dark:hover:text-accent flex items-center gap-1 rounded-full border border-transparent px-4 py-2 font-normal transition-all duration-200">
                    <span>Launch Your Store</span>
                  </Link>
                </li>

                <li className="nav-item relative cursor-pointer py-2.5">
                  <Link
                    href="/blog"
                    className="hover:border-stroke-2 dark:hover:border-stroke-7 text-tagline-1 text-secondary/60 hover:text-secondary dark:text-accent/60 dark:hover:text-accent flex items-center gap-1 rounded-full border border-transparent px-4 py-2 font-normal transition-all duration-200">
                    <span>Blog</span>
                  </Link>
                </li>

                <li className="nav-item relative cursor-pointer py-2.5">
                  <Link
                    href="/pricing"
                    className="hover:border-stroke-2 dark:hover:border-stroke-7 text-tagline-1 text-secondary/60 hover:text-secondary dark:text-accent/60 dark:hover:text-accent flex items-center gap-1 rounded-full border border-transparent px-4 py-2 font-normal transition-all duration-200">
                    <span>Pricing</span>
                  </Link>
                </li>



              </ul>
            </nav>
            <div className="hidden items-center justify-center gap-6 xl:flex">
              <Link
                href="https://cartly.zeedone.com/login"
                className="text-tagline-1 text-secondary hover:text-primary-500 font-medium transition-all duration-300">
                Sign in
              </Link>
              <Link
                href="https://cartly.zeedone.com/register"
                className="btn btn-md btn-primary hover:btn-secondary dark:hover:btn-white-dark dark:btn-white">
                <span>Get Started</span>
              </Link>
            </div>
            <MobileMenuButton />
          </div>
        </RevealAnimation>
      </header>
      <MobileMenu menuData={mobileMenuData} />
    </MobileMenuProvider>
  );
};

Navbar.displayName = 'Navbar';
export default Navbar;
