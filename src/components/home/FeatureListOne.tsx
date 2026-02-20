import { CheckIcon } from '@/icons';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const featureListData = [
  {
    id: 1,
    text: 'Manage vendors and products from one powerful dashboard.',
  },
  {
    id: 2,
    text: 'Track orders, payments, and fulfillment in real time.',
  },
  {
    id: 3,
    text: 'Smart analytics to scale your marketplace faster.',
  },
];

const FeatureListOne = () => {
  return (
    <div className="w-full lg:w-2/5">
      <div className="mb-8 space-y-5 text-center max-[426px]:mb-5 max-[426px]:text-left sm:text-left">
        <RevealAnimation delay={0.1}>
          <span className="badge badge-yellow">Platform</span>
        </RevealAnimation>

        <RevealAnimation delay={0.2}>
          <h2>
            Power your entire <br className="hidden lg:block" />
            commerce ecosystem.
          </h2>
        </RevealAnimation>
      </div>

      <ul className="mb-14 list-none space-y-4 max-[426px]:mb-10">
        {featureListData.map((feature, index) => (
          <RevealAnimation key={feature.id} delay={0.3 + index * 0.1}>
            <li className="flex items-center gap-2">
              <span className="bg-secondary dark:bg-accent size-[18px] rounded-full flex items-center justify-center">
                <CheckIcon />
              </span>
              <span className="text-secondary dark:text-accent">
                {feature.text}
              </span>
            </li>
          </RevealAnimation>
        ))}
      </ul>

      <RevealAnimation delay={0.6}>
        <LinkButton
          href="/features"
          className="btn btn-white btn-lg sm:btn-xl dark:btn-transparent hover:btn-primary dark:hover:btn-accent w-full sm:w-auto">
          Explore Platform
        </LinkButton>
      </RevealAnimation>
    </div>
  );
};

FeatureListOne.displayName = 'FeatureListOne';
export default FeatureListOne;