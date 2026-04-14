'use client';

import React from 'react';
import { cn } from '@/utils/cn';
import { 
  ShieldCheck, 
  Type, 
  Receipt, 
  Image,
  LayoutGrid
} from 'lucide-react';

interface Category {
  id: string;
  name: string;
  icon: React.ElementType;
}

const categories: Category[] = [
  { id: 'All', name: 'All Tools', icon: LayoutGrid },
  { id: 'Compliance', name: 'Compliance', icon: ShieldCheck },
  { id: 'Branding', name: 'Branding', icon: Type },
  { id: 'Operations', name: 'Operations', icon: Receipt },
  { id: 'AI Media', name: 'AI Media', icon: Image },
];

interface BusinessToolsSubNavbarProps {
  activeCategory: string;
  onCategoryChange: (id: string) => void;
}

const BusinessToolsSubNavbar = ({ activeCategory, onCategoryChange }: BusinessToolsSubNavbarProps) => {
  return (
    <div className="sticky top-[90px] z-40 w-full border-y border-[#E6E6E6] dark:border-white/5 bg-[#F3F1E9]/80 dark:bg-background-7/80 backdrop-blur-md">
      <div className="container-custom max-w-[1240px] px-4">
        <div className="flex items-center justify-start md:justify-center gap-2 overflow-x-auto py-4 no-scrollbar scroll-smooth">
          {categories.map((category) => {
            const Icon = category.icon;
            const isActive = activeCategory === category.id;
            
            return (
              <button
                key={category.id}
                onClick={() => onCategoryChange(category.id)}
                className={cn(
                  "flex items-center gap-2 px-5 py-2.5 rounded-full transition-all duration-300 whitespace-nowrap group",
                  isActive 
                    ? "bg-[#864ffe] text-white shadow-lg shadow-[#864ffe]/20" 
                    : "text-[#1a1a1c]/60 dark:text-accent/60 hover:text-[#1a1a1c] dark:hover:text-accent hover:bg-white/50 dark:hover:bg-white/5"
                )}
              >
                <Icon size={18} className={cn(
                  "transition-transform duration-300 group-hover:scale-110",
                  isActive ? "text-white" : "text-[#864ffe]"
                )} />
                <span className="text-sm font-semibold tracking-tight">
                  {category.name}
                </span>
                {isActive && (
                  <span className="flex h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BusinessToolsSubNavbar;
