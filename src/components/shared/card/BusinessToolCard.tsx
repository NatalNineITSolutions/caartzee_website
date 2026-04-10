'use client';
import { BusinessTool } from '@/data/business-tools-data';
import { cn } from '@/utils/cn';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface BusinessToolCardProps {
  tool: BusinessTool;
}

const BusinessToolCard = ({ tool }: BusinessToolCardProps) => {
  const Icon = tool.icon;

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      className="h-full"
    >
      <Link 
        href={`/business-tools/${tool.slug}`}
        className="flex flex-col h-full h-[320px] p-10 bg-white dark:bg-background-7 border border-[#E6E6E6] dark:border-white/5 rounded-lg transition-all hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] group relative overflow-hidden"
      >
        <div className={cn(
          "w-16 h-16 rounded-xl flex items-center justify-center mb-8 transition-transform group-hover:scale-105",
          tool.bgColor
        )}>
          <Icon size={32} style={{ color: tool.color }} strokeWidth={1.5} />
        </div>
        
        <h3 className="text-[20px] leading-[28px] text-secondary dark:text-accent font-bold mb-3 tracking-tight">
          {tool.title}
        </h3>
        
        <p className="text-[#646464] dark:text-accent/60 text-[16px] leading-[24px] mb-6 line-clamp-2">
          {tool.description}
        </p>
        
        <div className="absolute bottom-10 left-10 flex items-center text-[14px] font-bold text-primary-500 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
          Try it now
          <svg 
            className="ml-2 w-4 h-4" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="9 5l7 7-7 7" />
          </svg>
        </div>
      </Link>
    </motion.div>
  );
};

export default BusinessToolCard;
