// retailer-program section
import retailersCover from '@public/images/ns-img-370.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const RetailerProgram = () => {
  return (
    <section className="pt-32 pb-14 sm:pt-36 md:pt-42 md:pb-16 lg:pb-[88px] xl:pt-[180px] xl:pb-[100px]">
      <div className="main-container">
        <div className="space-y-14 md:space-y-[70px]">
          <RevealAnimation delay={0.1}>
  <div className="mx-auto max-w-[602px] space-y-1.5 md:space-y-3 md:text-center">
    {/* main heading in single line */}
    <h2>Caartzee Retailer Program</h2>
    {/* subheading without hyphen */}
    <h3 className="text-tagline-1">Partner with Caartzee, Grow your business with us.</h3>
    <p>
      Join our trusted retailer network and reach thousands of customers worldwide. Showcase your products,
      expand your reach, and enjoy seamless selling with Caartzee.
    </p>
    <div className="mt-7 md:mt-14">
      <LinkButton
        href="/retailer-policy"
        className="btn btn-primary btn-xl hover:btn-secondary dark:hover:btn-accent block w-full md:inline-block md:w-auto"
      >
        Become a Retailer
      </LinkButton>
    </div>
  </div>
</RevealAnimation>


          <RevealAnimation delay={0.2} instant>
            <figure className="max-w-full overflow-hidden rounded-[20px]">
              <Image
                src={retailersCover}
                className="h-full w-full object-cover object-center"
                alt="retailers-cover"
              />
            </figure>
          </RevealAnimation>
          <div className="max-w-[830px] space-y-3">
            <RevealAnimation delay={0.3}>
              <h4>Why join the Caartzee's Retailers Program?</h4>
            </RevealAnimation>
            <RevealAnimation delay={0.4}>
              <p>
                Our retailer program empowers businesses to sell smarter, reach more customers, and grow faster with
                Caartzee’s ecommerce ecosystem.
              </p>
            </RevealAnimation>
            <RevealAnimation delay={0.5}>
              <ul className="space-y-2">
                <li className="text-tagline-1 text-secondary/60 dark:text-accent/60 font-normal before:relative before:left-0 before:mr-1 before:inline-block before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full before:bg-secondary dark:before:bg-accent before:content-['']">
                  <strong className="text-secondary dark:text-accent font-medium">
                    Expand your reach:{' '}
                  </strong>
                  <span>
                    Access thousands of customers worldwide through Caartzee’s trusted platform.
                  </span>
                </li>
                <li className="text-tagline-1 text-secondary/60 dark:text-accent/60 font-normal before:relative before:left-0 before:mr-1 before:inline-block before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full before:bg-secondary dark:before:bg-accent before:content-['']">
                  <strong className="text-secondary dark:text-accent font-medium">
                    Marketing support:{' '}
                  </strong>
                  <span>
                    Benefit from campaigns and promotions run by Caartzee to boost your product visibility.
                  </span>
                </li>
                <li className="text-tagline-1 text-secondary/60 dark:text-accent/60 font-normal before:relative before:left-0 before:mr-1 before:inline-block before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full before:bg-secondary dark:before:bg-accent before:content-['']">
                  <strong className="text-secondary dark:text-accent font-medium">Fast payouts: </strong>
                  <span>
                    Enjoy secure transactions and quick settlements for every sale you make.
                  </span>
                </li>
              </ul>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

RetailerProgram.displayName = 'RetailerProgram';
export default RetailerProgram;
