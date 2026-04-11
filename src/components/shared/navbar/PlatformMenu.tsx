'use client';
import {
  IntegrationIconV2,
  PricingIcon,
  SupportIconV2,
  WhitePaperIconV2,
} from '@/icons/menu-icon';
import { cn } from '@/utils/cn';
import type { ComponentType } from 'react';
import PlatformMenuLink from './PlatformMenuLink';

type SimpleNavLink = {
  label: string;
  description: string;
  href: string;
  icon: ComponentType;
};

const productLinks: SimpleNavLink[] = [
  {
    label: 'Caartzee themes',
    description: 'Beautiful, high-converting storefront themes for your business.',
    href: '/themes',
    icon: WhitePaperIconV2,
  },
  {
    label: 'Caartzee delivery',
    description: 'Streamline your logistics and shipping with our delivery engine.',
    href: '/delivery',
    icon: IntegrationIconV2,
  },
  {
    label: 'Caartzee plugins',
    description: 'Extend your store functionality with powerful third-party integrations.',
    href: '/plugins',
    icon: PricingIcon,
  },
  {
    label: 'Business tools',
    description: 'Free specialized tools to help you run and grow your retail brand.',
    href: '/business-tools',
    icon: SupportIconV2,
  },
];

const PlatformMenu = ({
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
          '0.3 ease ease absolute top-full left-1/2 z-40 h-3 w-[700px] -translate-x-1/2 bg-transparent transition-opacity duration-300',
          menuDropdownId === 'platform-mega-menu'
            ? '!pointer-events-auto opacity-100'
            : 'pointer-events-none opacity-0',
        )}
      />
      <div
        id="platform-mega-menu"
        className={cn(
          'dark:bg-background-6 border-stroke-1 ease absolute top-full left-1/2 z-50 mt-5 hidden w-[700px] -translate-x-1/2 rounded-[32px] border bg-white p-6 shadow-2xl transition-all duration-300 xl:block dark:border-white/10',
          menuDropdownId === 'platform-mega-menu'
            ? 'translate-y-0 opacity-100'
            : 'pointer-events-none translate-y-3 opacity-0',
        )}>
        <ul className="grid grid-cols-2 gap-4">
          {productLinks.map((link) => (
            <PlatformMenuLink key={link.label} {...link} variant="icon" onClose={handleClose} />
          ))}
        </ul>
      </div>
    </div>
  );
};

PlatformMenu.displayName = 'PlatformMenu';
export default PlatformMenu;
