'use client';

import React from 'react';
import RevealAnimation from '../animation/RevealAnimation';
import { 
  MessageCircle, 
  PlusCircle, 
  Store, 
  TrendingUp 
} from 'lucide-react';

const FeatureCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* Step 1 */}
      <RevealAnimation delay={0.4}>
        <article className="dark:bg-background-6 group h-full w-full rounded-[24px] bg-white p-8 border border-stroke-1 dark:border-white/10 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
          <div className="bg-primary-500/10 dark:bg-primary-500/20 mb-6 flex size-14 items-center justify-center rounded-2xl text-primary-500 transition-transform group-hover:scale-110">
            <MessageCircle size={32} strokeWidth={2.2} />
          </div>
          <h4 className="text-tagline-1 mb-3 font-bold text-secondary dark:text-accent group-hover:text-primary-500 transition-colors">
            Connect to WhatsApp
          </h4>
          <p className="text-secondary/60 dark:text-accent/60 text-tagline-3 leading-relaxed">
            Link your business number in minutes. No complex API approvals required.
          </p>
        </article>
      </RevealAnimation>

      {/* Step 2 */}
      <RevealAnimation delay={0.5}>
        <article className="dark:bg-background-6 group h-full w-full rounded-[24px] bg-white p-8 border border-stroke-1 dark:border-white/10 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
          <div className="bg-primary-500/10 dark:bg-primary-500/20 mb-6 flex size-14 items-center justify-center rounded-2xl text-primary-500 transition-transform group-hover:scale-110">
            <PlusCircle size={32} strokeWidth={2.2} />
          </div>
          <h4 className="text-tagline-1 mb-3 font-bold text-secondary dark:text-accent group-hover:text-primary-500 transition-colors">
            View a product
          </h4>
          <p className="text-secondary/60 dark:text-accent/60 text-tagline-3 leading-relaxed">
            Upload your inventory in seconds. Snap automatically creates your WhatsApp store.
          </p>
        </article>
      </RevealAnimation>

      {/* Step 3 */}
      <RevealAnimation delay={0.6}>
        <article className="dark:bg-background-6 group h-full w-full rounded-[24px] bg-white p-8 border border-stroke-1 dark:border-white/10 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
          <div className="bg-primary-500/10 dark:bg-primary-500/20 mb-6 flex size-14 items-center justify-center rounded-2xl text-primary-500 transition-transform group-hover:scale-110">
            <Store size={32} strokeWidth={2.2} />
          </div>
          <h4 className="text-tagline-1 mb-3 font-bold text-secondary dark:text-accent group-hover:text-primary-500 transition-colors">
            Share and Sell
          </h4>
          <p className="text-secondary/60 dark:text-accent/60 text-tagline-3 leading-relaxed">
            Your AI-Assistant does the rest—answering questions and closing deals 24/7.
          </p>
        </article>
      </RevealAnimation>

      {/* Step 4 */}
      <RevealAnimation delay={0.7}>
        <article className="dark:bg-background-6 group h-full w-full rounded-[24px] bg-white p-8 border border-stroke-1 dark:border-white/10 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
          <div className="bg-primary-500/10 dark:bg-primary-500/20 mb-6 flex size-14 items-center justify-center rounded-2xl text-primary-500 transition-transform group-hover:scale-110">
            <TrendingUp size={32} strokeWidth={2.2} />
          </div>
          <h4 className="text-tagline-1 mb-3 font-bold text-secondary dark:text-accent group-hover:text-primary-500 transition-colors">
            Monitor Growth
          </h4>
          <p className="text-secondary/60 dark:text-accent/60 text-tagline-3 leading-relaxed">
            Track your sales, customer trends, and growth metrics in one simple dashboard.
          </p>
        </article>
      </RevealAnimation>
    </div>
  );
};

FeatureCard.displayName = 'FeatureCard';
export default FeatureCard;
