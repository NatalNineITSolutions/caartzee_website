import { CheckIcon } from '@/icons';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

// Pricing features data
const pricingFeaturesData = [
  {
    id: 1,
    text: 'Unlimited Stores',
    isActive: true,
  },
  {
    id: 2,
    text: 'Advanced Automation',
    isActive: true,
  },
  {
    id: 3,
    text: 'Dedicated Account Manager',
    isActive: false,
  },
  {
    id: 4,
    text: 'Custom Integrations',
    isActive: false,
  },{
    id: 3,
    text: 'Premium Support',
    isActive: false,
  },
];

const PricingCardThree = ({ isAnnual }: { isAnnual: boolean }) => {
  return (
    <RevealAnimation delay={0.6}>
      <div className="bg-background-3 dark:bg-background-7 flex-1 rounded-[20px] p-8 max-lg:w-full">
        <h3 className="text-heading-5 mb-2 font-normal">Enterprise</h3>
        <p className="text-secondary/60 dark:text-accent/60 mb-6 max-w-[250px]">
          For large businesses & brands, Custom Pricing
        </p>

        {isAnnual ? (
          <div className="price-year mb-7">
            <h4 className="text-heading-4 font-normal">
              ₹<span>5800.00</span>
            </h4>
            <p className="text-secondary">Per Year</p>
          </div>
        ) : (
          <div className="price-month mb-7">
            <h4 className="text-heading-4 font-normal">
              ₹<span>1</span>
            </h4>
            <p className="text-secondary">Start For 1 RS</p>
          </div>
        )}
        <LinkButton
          insideSpan={false}
          href="./contact-us"
          className="btn btn-md btn-white dark:btn-white-dark hover:btn-secondary dark:hover:btn-white mb-8 block w-full text-center first-letter:uppercase before:content-none">
          Get started
        </LinkButton>
        <ul className="relative list-none space-y-2.5">
          {pricingFeaturesData.map((feature) => (
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
                className={`text-tagline-1 font-normal ${
                  feature.isActive ? 'text-secondary dark:text-accent' : 'text-secondary/60 dark:text-accent/60'
                }`}>
                {feature.text}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </RevealAnimation>
  );
};

PricingCardThree.displayName = 'PricingCardThree';
export default PricingCardThree;
