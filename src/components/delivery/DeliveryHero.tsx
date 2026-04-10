import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const DeliveryHero = () => {
  return (
    <section className="bg-background-1 pt-[140px] pb-20 dark:bg-background-8">
      <div className="main-container">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <RevealAnimation delay={0.1}>
            <div className="text-left">
              <h1 className="mb-6 text-heading-3 font-medium md:text-heading-2 xl:text-heading-1">
                Delivery simplified!
              </h1>
              <p className="mb-10 max-w-[500px] text-lg text-secondary/70 dark:text-accent/70">
                Ship your products with the best in-house courier services. Reach 26,000+ pin codes with automated shipping.
              </p>
              <LinkButton href="https://cartly.zeedone.com/register" variant="primary" className="btn-xl">
                Get started
              </LinkButton>
            </div>
          </RevealAnimation>
          
          <RevealAnimation delay={0.3} direction="right">
            <figure className="relative">
              <Image 
                src="/images/delivery/map.png" 
                alt="India Delivery Map" 
                width={800} 
                height={600}
                className="h-auto w-full object-contain"
              />
              {/* Optional: Add animated dots or pulse effects if desired */}
            </figure>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default DeliveryHero;
