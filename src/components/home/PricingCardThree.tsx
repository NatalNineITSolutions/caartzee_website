import { CheckIcon } from '@/icons';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';
import { useState } from 'react';

// Pricing features data
const pricingFeaturesData = [
  { id: 1, text: '1 Online Store', isActive: true },
  { id: 2, text: 'Up to 500 Products', isActive: true },
  { id: 3, text: 'Up to 30 Pages', isActive: true },
  { id: 4, text: '20 Blog Posts', isActive: true },
  { id: 5, text: '500 GB Storage', isActive: true },
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

const PricingCardThree = ({ isAnnual }: { isAnnual: boolean }) => {

  const [showAll, setShowAll] = useState(false);

  return (
    <RevealAnimation delay={0.6}>
      <div className="bg-background-3 dark:bg-background-7 flex-1 rounded-[20px] p-8 max-lg:w-full">
        <h3 className="text-heading-5 mb-2 font-normal">Ultimate</h3>
        <p className="text-secondary/60 dark:text-accent/60 mb-6 max-w-[250px]">
          For large businesses & brands, Custom Pricing
        </p>

        {isAnnual ? (
          <div className="price-year mb-7">
            <h4 className="text-heading-4 font-normal">
              ₹<span>24,000.00</span>
            </h4>
            <p className="text-secondary">Per Year</p>
          </div>
        ) : (
          <div className="price-month mb-7">
            <h4 className="text-heading-4 font-normal">
              ₹<span>2,000</span>
            </h4>
            <p className="text-secondary">Per Month</p>
          </div>
        )}
        <LinkButton
          insideSpan={false}
          href="./contact-us"
          className="btn btn-md btn-white dark:btn-white-dark hover:btn-secondary dark:hover:btn-white mb-8 block w-full text-center first-letter:uppercase before:content-none">
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
                <span className="size-5 rounded-full bg-white dark:bg-black">
                  <CheckIcon className="dark:fill-accent/60 fill-secondary/60" />
                </span>
              )}
              <span
                className={`text-tagline-1 font-normal ${feature.isActive ? 'text-secondary dark:text-accent' : 'text-secondary/60 dark:text-accent/60'
                  }`}>
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
    </RevealAnimation>
  );
};

PricingCardThree.displayName = 'PricingCardThree';
export default PricingCardThree;
