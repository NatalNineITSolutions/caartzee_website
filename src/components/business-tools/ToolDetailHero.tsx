'use client';
import { BusinessTool } from '@/data/business-tools-data';
import { cn } from '@/utils/cn';
import { motion } from 'framer-motion';

interface ToolDetailHeroProps {
  tool: BusinessTool;
}

const ToolDetailHero = ({ tool }: ToolDetailHeroProps) => {
  const Icon = tool.icon;

  return (
    <section className="bg-primary-500 py-24 sm:py-32 relative overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] rounded-full bg-white/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[300px] h-[300px] rounded-full bg-secondary-light/20 blur-2xl pointer-events-none" />

      <div className="container-custom relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className={cn(
            "w-20 h-20 rounded-2xl flex items-center justify-center mb-8 shadow-2xl bg-white"
          )}
        >
          <Icon size={40} style={{ color: tool.color }} />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-heading-2 font-bold text-white mb-6"
        >
          {tool.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-white/80 text-lg max-w-2xl mx-auto"
        >
          {tool.shortDescription || tool.description}
        </motion.p>
      </div>
    </section>
  );
};

export default ToolDetailHero;
