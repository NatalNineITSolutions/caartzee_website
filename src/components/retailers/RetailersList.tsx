import RevealAnimation from '../animation/RevealAnimation';

interface RetailerSection {
  id: string;
  title: string;
  description: string;
  items: string[];
}

const retailerSectionsData: RetailerSection[] = [
  {
    id: '1',
    title: 'Retailer benefits',
    description:
      "Joining our retailer program gives you access to a large customer base, marketing support, and fast payouts. As a retailer, you'll enjoy transparent sales tracking and dedicated support to grow your business.",
    items: [
      'Access thousands of customers worldwide',
      'Marketing campaigns run by Caartzee',
      'Transparent sales dashboard',
      'Fast and secure payouts',
      'Dedicated retailer support team',
    ],
  },
  {
    id: '2',
    title: 'What you can do',
    description:
      'As a retailer, you can expand your reach and grow your business by following best practices and engaging with customers effectively.',
    items: [
      'Upload accurate product listings',
      'Offer timely delivery and reliable service',
      'Participate in Caartzee promotions',
      'Maintain quality standards for all products',
    ],
  },
  {
    id: '3',
    title: 'Retailer guidelines',
    description:
      "To ensure trust and quality across our platform, retailers must follow these guidelines. This helps protect customers and maintain Caartzee’s standards.",
    items: [
      'No counterfeit or restricted items',
      'No misleading product descriptions',
      'Maintain proper inventory levels',
      'Follow Caartzee’s quality and compliance policies',
    ],
  },
];

const RetailersList = () => {
  return (
    <article className="space-y-10 pt-14 md:space-y-[70px] md:pt-16 lg:pt-[88px] xl:pt-[100px]">
      {retailerSectionsData.map((section, index) => (
        <RevealAnimation key={section.id} delay={0.1 + index * 0.1}>
          <div>
            <h3 className="text-heading-6 md:text-heading-5 mb-3 font-normal">{section.title}</h3>
            <p className="mb-8">{section.description}</p>
            <ul className="space-y-4">
              {section.items.map((item, itemIndex) => (
                <li
                  key={itemIndex + 1}
                  className={`text-tagline-1 text-secondary/60 dark:text-accent/60 before:relative before:left-0 before:mr-3 before:h-5 before:w-5 before:content-[url('/images/icons/checkmark-white.svg')] before:max-md:top-0 dark:before:content-[url('/images/icons/checkmark-white.svg')] before:md:top-1${
                    itemIndex === 0 ? 'before:inline-block' : ''
                  }`}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </RevealAnimation>
      ))}
    </article>
  );
};

RetailersList.displayName = 'RetailersList';
export default RetailersList;
