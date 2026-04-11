'use client';
import Link from 'next/link';
import type { ComponentType } from 'react';

type ResourcesMenuLinkProps = {
  label: string;
  description?: string;
  href: string;
  icon: ComponentType;
  onClose?: () => void;
};

const ResourcesMenuLink = ({ label, description, href, icon: Icon, onClose }: ResourcesMenuLinkProps) => (
  <li>
    <Link 
      href={href} 
      onClick={onClose} 
      className="group relative flex items-start gap-4 rounded-2xl p-4 transition-all hover:bg-black/5 dark:hover:bg-white/5"
    >
      <div className="flex size-14 shrink-0 items-center justify-center rounded-xl bg-primary-50 dark:bg-primary-500/10 transition-colors group-hover:bg-white dark:group-hover:bg-primary-500/20 shadow-sm border border-transparent group-hover:border-primary-500/10">
        <Icon />
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-[17px] font-bold text-secondary dark:text-accent group-hover:text-primary-500 transition-colors leading-tight">
          {label}
        </span>
        {description && (
          <span className="text-[14px] leading-relaxed text-secondary/60 dark:text-accent/50 font-normal">
            {description}
          </span>
        )}
      </div>
    </Link>
  </li>
);

export type { ResourcesMenuLinkProps };
export default ResourcesMenuLink;
