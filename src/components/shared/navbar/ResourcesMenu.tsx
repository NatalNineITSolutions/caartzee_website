'use client';
import {
  BlogIcon,
  ContactIcon,
  FaqIcon,
  GlossaryIcon,
  SuccessIcon,
  SupportIcon,
  TutorialIcon,
} from '@/icons/menu-icon';
import { cn } from '@/utils/cn';
import type { ComponentType } from 'react';
import ResourcesMenuLink from './ResourcesMenuLink';

type ResourceLink = {
  label: string;
  description?: string;
  href: string;
  icon: ComponentType;
};

const resourceLinks: ResourceLink[] = [
  {
    label: 'Blog',
    description: 'Get useful tips on how to start & grow your online business.',
    href: '/blog',
    icon: BlogIcon,
  },
  {
    label: 'Community',
    description: 'Become a part of our exclusive Caartzee VIP group with over 50k+ members.',
    href: '/community',
    icon: SuccessIcon,
  },
  {
    label: 'Videos',
    description: 'Acquire skills to setup and run your online store from our videos and tutorials.',
    href: '/videos',
    icon: TutorialIcon,
  },
  {
    label: 'Help center',
    description: 'Advice and answers from the Caartzee Team.',
    href: '/help-center',
    icon: SupportIcon,
  },
];

const ResourcesMenu = ({
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
          menuDropdownId === 'resources-dropdown-menu'
            ? '!pointer-events-auto opacity-100'
            : 'pointer-events-none opacity-0',
        )}
      />
      <div
        id="resources-dropdown-menu"
        className={cn(
          'dark:bg-background-6 border-stroke-1 ease absolute top-full left-1/2 z-50 mt-5 hidden w-[700px] -translate-x-1/2 rounded-[32px] border bg-white p-6 shadow-2xl transition-all duration-300 xl:block dark:border-white/10',
          menuDropdownId === 'resources-dropdown-menu'
            ? 'translate-y-0 opacity-100'
            : 'pointer-events-none translate-y-3 opacity-0',
        )}>
        <ul className="grid grid-cols-2 gap-4">
          {resourceLinks.map((link) => (
            <ResourcesMenuLink key={link.label} {...link} onClose={handleClose} />
          ))}
        </ul>
      </div>
    </div>
  );
};

ResourcesMenu.displayName = 'ResourcesMenu';
export default ResourcesMenu;
