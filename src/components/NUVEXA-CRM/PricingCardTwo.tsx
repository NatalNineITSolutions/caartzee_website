import { CheckIcon } from '@/icons';
import { cn } from '@/utils/cn';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';
import { useState } from 'react';

// Pricing features data
const pricingFeaturesData = [
  { id: 1, text: '1 Online Store', isActive: true },
  { id: 2, text: 'Up to 300 Products', isActive: true },
  { id: 3, text: 'Up to 20 Pages', isActive: true },
  { id: 4, text: '10 Blog Posts', isActive: true },
  { id: 5, text: '100 GB Storage', isActive: true },
  { id: 6, text: 'Advanced Inventory Management', isActive: true },
  { id: 7, text: 'Campaign Management', isActive: true },
  { id: 8, text: 'Coupon System', isActive: true },
  { id: 9, text: 'Digital Products Support', isActive: true },
  { id: 10, text: 'Custom Domain', isActive: true },
  { id: 11, text: 'Newsletter Integration', isActive: true },
  { id: 12, text: 'Testimonials Module', isActive: true },
  { id: 13, text: 'App API Access', isActive: true },
  { id: 14, text: 'Cloud Storage', isActive: true },
  { id: 15, text: 'POS Integration', isActive: true },
  { id: 16, text: 'Shipping Plugin', isActive: true },
  { id: 17, text: 'SMS Gateway', isActive: true },
];

const PricingCardTwo = ({ isAnnual }: { isAnnual: boolean }) => {

  const [showAll, setShowAll] = useState(false);

  return (
    <RevealAnimation delay={0.5}>
      <div className="w-full flex-1 rounded-[20px] bg-[url('/images/ns-img-26.jpg')] bg-cover bg-center bg-no-repeat p-2.5 max-lg:w-full dark:bg-[url('/images/ns-img-dark-10.png')]">
        <div className="rounded-[12px] bg-white p-5 sm:p-8 dark:bg-black">
          <h3 className="text-heading-5 mb-2.5 font-normal">Professional (Most Popular)</h3>
          <p className="text-secondary/60 dark:text-accent/60 mb-6 max-w-[250px]">
            For scaling businesses
          </p>

          {isAnnual ? (
            <div className="price-year mb-7">
              <h4 className="text-heading-4 font-normal">
                ₹<span>12,287.00</span>
              </h4>
              <p className="text-secondary dark:text-accent">Per Year</p>
            </div>
          ) : (
            <div className="price-month mb-7">
              <h4 className="text-heading-4 font-normal">
                ₹<span>1024 .00</span>
              </h4>
              <p className="text-secondary dark:text-accent">Per Month</p>
            </div>
          )}

          <LinkButton
            insideSpan={false}
            href="./contact-us"
            className="btn btn-md btn-secondary dark:btn-accent hover:btn-white-v2 dark:hover:btn-white-dark mb-8 block w-full text-center first-letter:uppercase before:content-none">
            Get started
          </LinkButton>
          <ul className="relative list-none space-y-2.5">
            {(showAll ? pricingFeaturesData : pricingFeaturesData.slice(0, 6)).map((feature) => (
              <li key={feature.id} className="flex items-center gap-2.5">
                {feature.isActive ? (
                  <span className="bg-secondary dark:bg-accent size-5 rounded-full">
                    <CheckIcon />
                  </span>
                ) : (
                  <span className="bg-background-4 dark:bg-background-9 size-5 rounded-full">
                    <CheckIcon className="dark:fill-accent/60 fill-secondary/60" />
                  </span>
                )}
                <span
                  className={cn(
                    'text-tagline-1 font-normal',
                    feature.isActive ? 'text-secondary dark:text-accent' : 'text-secondary/60 dark:text-accent/60',
                  )}>
                  {feature.text}
                </span>
              </li>
            ))}
          </ul>
          <button
            onClick={() => setShowAll(!showAll)}
            className="mt-4 text-sm font-medium text-secondary dark:text-accent hover:underline">
            {showAll ? 'View Less' : 'View More'}
          </button>
        </div>
      </div>
    </RevealAnimation>
  );
};

PricingCardTwo.displayName = 'PricingCardTwo';
export default PricingCardTwo;
