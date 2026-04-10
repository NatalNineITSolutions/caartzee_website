'use client';
import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface ToolFormContainerProps {
  title?: string;
  children: ReactNode;
}

const ToolFormContainer = ({ title, children }: ToolFormContainerProps) => {
  return (
    <section className="container-custom -mt-16 relative z-20 pb-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-white dark:bg-background-7 rounded-3xl shadow-2xl overflow-hidden border border-stroke-1 dark:border-white/10"
      >
        {title && (
          <div className="px-8 py-6 border-b border-stroke-1 dark:border-white/10 bg-gray-50 dark:bg-background-6">
            <h2 className="text-xl font-bold text-secondary dark:text-accent">
              {title}
            </h2>
          </div>
        )}
        <div className="p-8 md:p-12">
          {children}
        </div>
      </motion.div>
    </section>
  );
};

export default ToolFormContainer;
