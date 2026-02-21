'use client';

import { useState } from 'react';
import LinkButton from '@/components/ui/button/Button';
import { CheckIconV3 } from '@/icons';
import { cn } from '@/utils/cn';

interface PricingCardProps {
  title: string;
  description: string;
  features: string[];
  monthlyPrice: number;
  yearlyPrice: number;
  yearlySavings?: number;
  buttonText: string;
  buttonHref: string;
  highlight?: boolean;
  isYearly: boolean;
}

const PricingCard = ({
  title,
  description,
  features,
  monthlyPrice,
  yearlyPrice,
  yearlySavings,
  buttonText,
  buttonHref,
  highlight = false,
  isYearly,
}: PricingCardProps) => {
  const price = isYearly ? yearlyPrice : monthlyPrice;
  const pricePeriod = isYearly ? '/Year' : '/Month';
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={cn(
        'bg-ns-ivory dark:bg-background-6 flex flex-col gap-6 rounded-4xl px-6 py-8 max-lg:w-full transition-all duration-300',
        isExpanded ? 'h-auto' : 'h-[598px]',
        highlight && 'p-1.5',
      )}>
      <div className={cn('flex h-full flex-col gap-6', highlight && 'rounded-[28px] bg-white p-6 dark:bg-black')}>
        <div className="mb-6">
          <h3 className="text-heading-5 dark:text-accent mb-2 font-normal">{title}</h3>
          <p className="mb-6 max-w-[270px] dark:text-accent/60">{description}</p>
          <ul className="relative list-none space-y-4">
            {(isExpanded ? features : features.slice(0, 5)).map((feature) => (
              <li key={feature} className="flex items-center gap-2.5">
                <CheckIconV3 className={highlight ? 'text-accent' : 'text-default dark:text-accent'} />
                <span className="text-secondary text-tagline-2 font-normal dark:text-accent/60">{feature}</span>
              </li>
            ))}
          </ul>
          {features.length > 5 && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="mt-6 text-tagline-2 font-medium text-black dark:text-white hover:underline transition-all"
              type="button"
            >
              {isExpanded ? 'See less' : `See more (${features.length - 5})`}
            </button>
          )}
        </div>

        <div className="border-stroke-10 dark:border-stroke-6 mt-auto border-t pt-6">
          {(monthlyPrice > 0 || yearlyPrice > 0) && (
            <>
              <div className={cn('mb-6', isYearly ? 'price-year' : 'price-month')}>
                <h4 className="text-heading-4 dark:text-accent font-normal">
                  ₹{price}
                  <span className="text-tagline-2 dark:text-accent/60">{pricePeriod}</span>
                </h4>
              </div>
              <div className={cn('mb-6 hidden', isYearly ? 'price-month' : 'price-year')}>
                <h4 className="text-heading-4 dark:text-accent font-normal">
                  ₹{isYearly ? monthlyPrice : yearlyPrice}
                  <span className="text-tagline-2 dark:text-accent/60">{isYearly ? '/Month' : '/Year'}</span>
                </h4>
              </div>
            </>
          )}
          <div className="w-full">
            <LinkButton
              href={buttonHref}
              className="w-full!"
              btnClass={cn(
                'btn-md  !w-full',
                highlight
                  ? 'btn-secondary-v2 group-hover/btn-v2:btn-primary-v2'
                  : 'btn-gray-v2 group-hover/btn-v2:btn-secondary-v2',
              )}>
              {buttonText}
            </LinkButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
