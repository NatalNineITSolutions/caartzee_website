'use client';
import pricingPlan from '@/data/json/pricing/pricing-plan.json';
import { CheckIcon } from '@/icons';
import { cn } from '@/utils/cn';
import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';
import { useState } from 'react';

interface Feature {
  label: string;
  subLabel?: string;
  enabled: boolean;
}

interface PricingPlan {
  id: number;
  title: string;
  description: string;
  priceMonth: number;
  priceYear: number;
  variant: string;
  highlight?: string;
  popular?: boolean;
  features: Feature[];
}

const PricingCard = ({ isAnnual }: { isAnnual: boolean }) => {
  const [showAll, setShowAll] = useState<Record<number, boolean>>({});

  const toggleShowAll = (id: number) => {
    setShowAll(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-3">
      {(pricingPlan as PricingPlan[]).map((plan, idx) => {
        const isExpanded = showAll[plan.id];
        const displayedFeatures = isExpanded ? plan.features : plan.features.slice(0, 6);

        return (
          <RevealAnimation key={plan.id} delay={0.2 + idx * 0.1} direction="up" className="h-full">
            <div
              className={cn(
                'mx-auto flex h-full w-full max-w-[408px] flex-col rounded-[20px] transition-all duration-500 hover:-translate-y-2 transition-all',
                idx === 1 
                  ? "bg-[url('/images/ns-img-26.jpg')] bg-cover bg-center p-2.5 shadow-[0_30px_60px_rgba(0,0,0,0.12)]" 
                  : "bg-background-3 p-8 border border-black/5 shadow-sm"
              )}>
              <div className={cn(
                "flex flex-1 flex-col h-full",
                idx === 1 ? "bg-white dark:bg-black rounded-[12px] p-5 sm:p-8" : ""
              )}>
                {/* Highlight Badge */}
                {plan.highlight && (
                  <div className={cn("-mt-3 mb-6 flex justify-start", idx === 1 && "mt-0")}>
                    <span className={cn(
                      "rounded-full px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest bg-secondary/10 text-secondary dark:bg-accent/10 dark:text-accent",
                    )}>
                      {plan.highlight}
                    </span>
                  </div>
                )}

                {/* Title + Desc */}
                <h3 className="text-2xl mb-2 font-black text-black dark:text-white">
                  {plan.title}
                </h3>
                <p className="mb-8 text-sm text-black/60 dark:text-accent/60 leading-relaxed font-medium">
                  {plan.description}
                </p>

                {/* Prices */}
                <div className="mb-8 flex items-baseline gap-1">
                  <h4 className="text-5xl font-black text-black dark:text-white tracking-tight leading-none">
                    ₹<span>{isAnnual ? plan.priceYear : plan.priceMonth}</span>
                  </h4>
                  <p className="text-sm font-bold text-black/40 dark:text-accent/40 uppercase tracking-wider">
                    / {isAnnual ? 'Year' : 'Month'}
                  </p>
                </div>

                {/* CTA */}
                <Link
                  href="/contact-us"
                  className={cn(
                    'mb-10 flex h-[56px] items-center justify-center rounded-full text-sm font-bold transition-all duration-300 before:content-none',
                    idx === 2 
                      ? 'bg-white text-black border border-black/10 hover:bg-black/5 dark:bg-white/5 dark:text-white dark:border-white/10 dark:hover:bg-white/10'
                      : 'bg-secondary text-white hover:bg-secondary/90 shadow-lg shadow-black/10 dark:bg-accent dark:text-black dark:hover:bg-accent/90',
                  )}>
                  Get started
                </Link>

                {/* Features */}
                <div className="flex-1">
                  <div className="space-y-4">
                    {displayedFeatures.map((feature, i) => (
                      <div key={i} className={cn(
                        "flex items-start gap-3.5",
                        !feature.enabled && "opacity-40"
                      )}>
                        {/* Icon */}
                        <div
                          className={cn(
                            'flex size-5 shrink-0 items-center justify-center rounded-full mt-0.5 transition-colors duration-300',
                            feature.enabled 
                              ? 'bg-secondary dark:bg-accent' 
                              : 'bg-black/5',
                          )}>
                          <CheckIcon
                            className={cn(
                              'size-3',
                              feature.enabled 
                                ? 'fill-white dark:fill-black' 
                                : 'fill-black/30',
                            )}
                          />
                        </div>
                        <div className="flex flex-col gap-0.5">
                          <span className="text-sm font-bold text-black dark:text-white leading-tight">
                            {feature.label}
                          </span>
                          {feature.subLabel && (
                            <span className="text-[11px] font-medium text-black/50 dark:text-accent/50">
                              {feature.subLabel}
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  {plan.features.length > 6 && (
                    <button
                      onClick={() => toggleShowAll(plan.id)}
                      className="mt-6 text-sm font-bold text-black/40 dark:text-accent/40 hover:text-black dark:hover:text-accent transition-colors flex items-center gap-2">
                      {isExpanded ? 'View Less' : 'View More'}
                    </button>
                  )}
                </div>
              </div>
            </div>
          </RevealAnimation>
        );
      })}
    </div>
  );
};

PricingCard.displayName = 'PricingCard';
export default PricingCard;
