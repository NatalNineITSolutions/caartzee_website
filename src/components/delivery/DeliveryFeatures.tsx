import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

const features = [
  {
    step: 'STEP 1',
    title: 'Select pickup time & delivery partner',
    description: 'Choose from a variety of reliable courier partners based on cost, speed, and service quality ratings.',
    image: '/images/delivery/ui1_v2.png',
    reverse: false,
  },
  {
    step: 'STEP 2',
    title: 'Add shipment weight',
    description: 'Enter weight and dimensions to get accurate shipping estimates. Our system automatically calculates the best route.',
    image: '/images/delivery/ui2_v2.png',
    reverse: true,
  },
  {
    step: 'STEP 3',
    title: 'Pay & request delivery',
    description: 'Confirm your shipment details, pay securely, and schedule your pickup in just a few clicks.',
    image: '/images/delivery/ui3_v2.png',
    reverse: false,
  },
];

const DeliveryFeatures = () => {
  return (
    <section className="bg-white py-20 dark:bg-background-7">
      <div className="main-container">
        <div className="space-y-32">
          {features.map((feature, index) => (
            <div key={feature.title} className={`flex flex-col items-center gap-16 lg:flex-row ${feature.reverse ? 'lg:flex-row-reverse' : ''}`}>
              <div className="flex-1">
                <RevealAnimation delay={0.1} direction={feature.reverse ? 'right' : 'left'}>
                  <div className="max-w-[500px]">
                    <span className="mb-4 block text-sm font-bold tracking-widest text-primary-500 uppercase">
                      {feature.step}
                    </span>
                    <h2 className="mb-6 text-heading-5 font-medium md:text-heading-4">
                      {feature.title}
                    </h2>
                    <p className="text-lg text-secondary/70 dark:text-accent/70">
                      {feature.description}
                    </p>
                  </div>
                </RevealAnimation>
              </div>
              <div className="flex-1">
                <RevealAnimation delay={0.3} direction="up">
                  <div className="overflow-hidden rounded-3xl shadow-2xl transition-transform hover:scale-[1.02]">
                    <Image 
                      src={feature.image} 
                      alt={feature.title} 
                      width={600} 
                      height={400} 
                      className="h-auto w-full"
                    />
                  </div>
                </RevealAnimation>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DeliveryFeatures;
