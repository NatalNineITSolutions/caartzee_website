'use client';
import {
  AboutIcon,
  CareerIcon,
} from '@/icons/menu-icon';
import { cn } from '@/utils/cn';
import CompanyMenuLink, { type CompanyMenuLinkProps } from './CompanyMenuLink';

type CompanyLink = Omit<CompanyMenuLinkProps, 'onClose'>;

const aboutLinks: CompanyLink[] = [
  {
    title: 'Careers',
    description: 'Join the team and be a part of the rocketship.',
    href: '/career',
    icon: CareerIcon,
  },
  {
    title: 'About',
    description: 'The who, what, and why of Caartzee.',
    href: '/about',
    icon: AboutIcon,
  },
];

const CompanyMenu = ({
  menuDropdownId,
  setMenuDropdownId,
}: {
  menuDropdownId: string | null;
  setMenuDropdownId: (id: string | null) => void;
}) => {
  const handleClose = () => setMenuDropdownId(null);

  return (
    <div>
      <div
        className={cn(
          'absolute top-full left-1/2 z-40 h-5 w-[700px] -translate-x-1/2 bg-transparent transition-opacity duration-300',
          menuDropdownId === 'company-mega-menu' ? '!pointer-events-auto opacity-100' : 'pointer-events-none opacity-0',
        )}
      />
      <div
        id="company-mega-menu"
        className={cn(
          'dark:bg-background-6 border-stroke-1 ease absolute top-full left-1/2 z-50 mt-5 hidden w-[700px] -translate-x-1/2 rounded-[32px] border bg-white p-6 shadow-2xl transition-all duration-300 xl:block dark:border-white/10',
          menuDropdownId === 'company-mega-menu'
            ? 'translate-y-0 opacity-100'
            : 'pointer-events-none translate-y-3 opacity-0',
        )}>
        <ul className="grid grid-cols-2 gap-4 w-full">
          {aboutLinks.map((link) => (
            <CompanyMenuLink key={link.title} {...link} onClose={handleClose} />
          ))}
        </ul>
      </div>
    </div>
  );
};

CompanyMenu.displayName = 'CompanyMenu';
export default CompanyMenu;
