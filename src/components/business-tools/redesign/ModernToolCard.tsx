'use client';
import { BusinessTool } from '@/data/business-tools-data';
import { cn } from '@/utils/cn';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface ModernToolCardProps {
  tool: BusinessTool;
}

const ModernToolCard = ({ tool }: ModernToolCardProps) => {
  const Icon = tool.icon;

  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="h-full"
    >
      <Link 
        href={tool.link}
        className="flex flex-col items-center text-center h-full min-h-[380px] p-8 md:p-10 bg-white dark:bg-background-7 border border-[#E6E6E6] dark:border-white/5 rounded-[40px] transition-all hover:shadow-[0_40px_80px_rgba(0,0,0,0.12)] group relative overflow-hidden"
      >
        {/* Decorative Glow */}
        <div className={cn(
            "absolute -top-24 -right-24 size-48 rounded-full opacity-10 blur-3xl transition-opacity group-hover:opacity-20",
            tool.bgColor.replace('bg-', 'bg-')
        )} />

        <div className={cn(
          "w-20 h-20 rounded-3xl flex items-center justify-center mb-10 transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 shadow-lg",
          tool.bgColor
        )}>
          <Icon size={36} style={{ color: tool.color }} strokeWidth={1.5} />
        </div>
        
        <h3 className="text-[24px] leading-[32px] text-secondary dark:text-accent font-bold mb-4 tracking-tight">
          {tool.title}
        </h3>
        
        <p className="text-[#646464] dark:text-accent/60 text-[16px] leading-[26px] mb-8 line-clamp-3">
          {tool.description}
        </p>
        
        <div className="mt-auto flex items-center text-[15px] font-bold text-primary-500 transition-all group-hover:gap-2">
          Explore tool
          <svg 
            className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </div>
      </Link>
    </motion.div>
  );
};

ModernToolCard.displayName = 'ModernToolCard';
export default ModernToolCard;
