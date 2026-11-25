import mainLogo from '@public/images/shared/logo-1.png';
import RevealAnimation from '@/components/animation/reveal-animation';
import { FooterBottom } from '@/components/shared/layout/footer/footer-bottom';
import { FooterLinkGroups } from '@/components/shared/layout/footer/footer-link-groups';
import { FooterSocialLinks } from '@/components/shared/layout/footer/footer-social-links';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="footer bg-background-13 relative z-0 overflow-hidden">
      <div className="main-container px-5">
        <div className="grid grid-cols-12 justify-between gap-x-0 gap-y-16 pb-12 pt-39">
          <div className="col-span-12 xl:col-span-4">
            <RevealAnimation delay={0.1}>
              <div className="max-w-[306px]">
                <Link href="/">
                  <span className="sr-only">Caartzee</span>
                  <figure className="max-w-[198px]">
                    <Image src={mainLogo} alt="Caartzee Logo" />
                  </figure>
                </Link>
                <p className="text-background-14/60 text-tagline-1 mt-4 mb-7 font-normal">
                  Nexsas helps teams automate workflows, connect the apps they already use, and ship
                  faster—without piling on complexity.
                </p>
                <FooterSocialLinks />
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
