'use client';
import { HowItWorksStep } from '@/data/business-tools-data';
import { motion } from 'framer-motion';

interface HowItWorksProps {
  steps: HowItWorksStep[];
}

const HowItWorks = ({ steps }: HowItWorksProps) => {
  return (
    <section className="bg-gray-50 dark:bg-background-6 py-24">
      <div className="container-custom">
        <h2 className="text-center text-heading-3 font-bold text-secondary dark:text-accent mb-16">
          How it works
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-full bg-primary-500/10 flex items-center justify-center mb-6">
                  <Icon size={32} className="text-primary-500" />
                </div>
                <h3 className="text-xl font-bold text-secondary dark:text-accent mb-4">
                  {step.title}
                </h3>
                <p className="text-secondary/60 dark:text-accent/60 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
