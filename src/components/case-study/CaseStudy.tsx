import caseStudyImg from '@public/images/casestudy.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

const CaseStudy = () => {
  return (
    <section className="pt-32 pb-[20px] sm:pt-36 md:pt-42 lg:pb-[100px] xl:pt-[180px]">
      <div className="main-container">
        <div className="space-y-[70px]">
          <div className="max-w-[900px] space-y-3">
            <RevealAnimation delay={0.2}>
              <h1 className="text-heading-3 md:text-heading-2 font-normal">How Growing Businesses Scale Faster with Caartzee</h1>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p>
                From fast-growing startups to established enterprises,
                businesses across industries use Caartzee to simplify operations,
                increase visibility, and scale confidently.
              </p>
            </RevealAnimation>
          </div>
          <div className="space-y-4">
            <RevealAnimation delay={0.4}>
              <h2 className="text-heading-4">Featured case study</h2>
            </RevealAnimation>
            <ul className="max-w-[435px] space-y-2">
              <RevealAnimation delay={0.5}>
                <li className="text-secondary dark:text-accent text-lg leading-[150%] font-medium">
                  Client:
                  <span className="text-tagline-1 text-secondary/60 dark:text-accent/60 font-normal">
                    Velocity Mart Retail Pvt. Ltd.
                  </span>
                </li>
              </RevealAnimation>
              <RevealAnimation delay={0.6}>
                <li className="text-secondary dark:text-accent text-lg leading-[150%] font-medium">
                  Industry:
                  <span className="text-tagline-1 text-secondary/60 dark:text-accent/60 font-normal">Multi-Channel Retail & Distribution</span>
                </li>
              </RevealAnimation>
              <RevealAnimation delay={0.7}>
                <li className="text-secondary dark:text-accent text-lg leading-[150%] font-medium">
                  Use case:
                  <span className="text-tagline-1 text-secondary/60 dark:text-accent/60 font-normal">
                    Unifying online stores, inventory, finance &amp; sales channels into one intelligent dashboard The Challenge
                  </span>
                </li>
              </RevealAnimation>
            </ul>
          </div>
          <RevealAnimation delay={0.8}>
            <figure className="max-w-[1288px] overflow-hidden rounded-4xl">
              <Image
                src={caseStudyImg}
                alt="VelocityFinance case study dashboard showing financial reporting interface"
                width={1290}
                height={800}
                className="h-full w-full object-cover"
              />
            </figure>
          </RevealAnimation>
          <div className="space-y-1">
            <RevealAnimation delay={0.1}>
              <h3 className="text-heading-4">The challenge</h3>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <p className="max-w-[705px]">
                Velocity Mart was managing multiple online stores, offline sales, warehouse inventory,
                and financial records using separate tools and spreadsheets.
                <h6>This led to:</h6>
                <p>•	Stock mismatches between platforms</p>
                <p>•	Delayed financial reporting</p>
                <p>•	Manual order processing</p>
                <p>•	Limited visibility across sales channels</p>
                <p>•	Slow decision-making</p>

              </p>
            </RevealAnimation>
          </div>
          <div className="flex flex-col items-center justify-between gap-16 md:flex-row">
            <div className="space-y-6">
              <div>
                <RevealAnimation delay={0.3}>
                  <h4 className="text-heading-4">The Solution</h4>
                </RevealAnimation>
                <RevealAnimation delay={0.4}>
                  <p> we helped them:</p>
                </RevealAnimation>
              </div>
              <ul className="space-y-2">
                <RevealAnimation delay={0.3}>
                  <li>
                    <p className="before:bg-secondary dark:before:bg-accent before:mr-3 before:inline-block before:size-2 before:rounded-full before:content-['']">
                      Centralize all online stores and marketplaces into one system
                    </p>
                  </li>
                </RevealAnimation>
                <RevealAnimation delay={0.4}>
                  <li>
                    <p className="before:bg-secondary dark:before:bg-accent before:mr-3 before:inline-block before:size-2 before:rounded-full before:content-['']">
                      •	Sync real-time inventory across channels
                    </p>
                  </li>
                </RevealAnimation>
                <RevealAnimation delay={0.5}>
                  <li>
                    <p className="before:bg-secondary dark:before:bg-accent before:mr-3 before:inline-block before:size-2 before:rounded-full before:content-['']">
                      •	Automate billing, invoicing, and financial reporting
                    </p>
                  </li>
                </RevealAnimation>
              </ul>
            </div>
            <div className="space-y-6">
              <div>
                <RevealAnimation delay={0.3}>
                  <h4 className="text-heading-4">The results</h4>
                </RevealAnimation>
                <RevealAnimation delay={0.4}>
                  <p>We achieved</p>
                </RevealAnimation>
              </div>
              <ul className="space-y-2">
                <RevealAnimation delay={0.3}>
                  <li>
                    <p className="before:bg-secondary dark:before:bg-accent before:mr-3 before:inline-block before:size-2 before:rounded-full before:content-['']">
                      80% reduction in manual operational tasks
                    </p>
                  </li>
                </RevealAnimation>
                <RevealAnimation delay={0.4}>
                  <li>
                    <p className="before:bg-secondary dark:before:bg-accent before:mr-3 before:inline-block before:size-2 before:rounded-full before:content-['']">
                      95% inventory accuracy across all sales channels
                    </p>
                  </li>
                </RevealAnimation>
                <RevealAnimation delay={0.5}>
                  <li>
                    <p className="before:bg-secondary dark:before:bg-accent before:mr-3 before:inline-block before:size-2 before:rounded-full before:content-['']">
                      3x faster order processing
                    </p>
                  </li>
                </RevealAnimation>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
