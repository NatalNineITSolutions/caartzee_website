import sales1 from '@public/images/ns-img-367.png';
import sales2 from '@public/images/ns-img-368.png';
import sales3 from '@public/images/ns-img-369.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import SocialLinkV3 from '../shared/SocialLinkV3';

const SalesDetails = () => {
  const social = {
    facebook: 'https://www.facebook.com',
    dribble: 'https://dribbble.com',
    github: 'https://github.com',
    linkedin: 'https://www.linkedin.com',
  };

  return (
    <section className="sales pt-[70px] pb-[100px]">
      <div className="mx-auto flex w-[95%] max-w-[950px] flex-col space-y-18">
        
        {/* Section 1 */}
        <div className="space-y-6">
          <div className="space-y-1">
            <RevealAnimation delay={0.1}>
              <h5>Unified Marketplace Control</h5>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <p>
                Manage Amazon, Flipkart, and Caartzee stores from one dashboard. Sync inventory, pricing, and orders in real time.
              </p>
            </RevealAnimation>
          </div>
          <ul className="space-y-2">
            <RevealAnimation delay={0.1}><li><span className="text-secondary/60 dark:text-accent/60">Real-time inventory sync</span></li></RevealAnimation>
            <RevealAnimation delay={0.2}><li><span className="text-secondary/60 dark:text-accent/60">Automated pricing updates</span></li></RevealAnimation>
            <RevealAnimation delay={0.3}><li><span className="text-secondary/60 dark:text-accent/60">Order tracking across platforms</span></li></RevealAnimation>
          </ul>
        </div>

        {/* Section 2 */}
        <div className="space-y-6">
          <div className="space-y-1">
            <RevealAnimation delay={0.2}>
              <h5>AI-Powered Product Enhancement</h5>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <p>
                Upload product images and let AI enhance quality, remove backgrounds, and generate realistic previews instantly.
              </p>
            </RevealAnimation>
          </div>
          <ul className="space-y-2">
            <RevealAnimation delay={0.2}><li><span className="text-secondary/60 dark:text-accent/60">Background removal</span></li></RevealAnimation>
            <RevealAnimation delay={0.3}><li><span className="text-secondary/60 dark:text-accent/60">3D product previews</span></li></RevealAnimation>
            <RevealAnimation delay={0.4}><li><span className="text-secondary/60 dark:text-accent/60">Conversion boost with visuals</span></li></RevealAnimation>
          </ul>
        </div>

        {/* Section 3 */}
        <div className="space-y-6">
          <div className="space-y-1">
            <RevealAnimation delay={0.2}>
              <h5>Smart Sales Insights</h5>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <p>
                Track performance, analyze trends, and let the AI assistant guide you toward smarter decisions and faster growth.
              </p>
            </RevealAnimation>
          </div>
          <ul className="space-y-2">
            <RevealAnimation delay={0.2}><li><span className="text-secondary/60 dark:text-accent/60">Revenue analytics in ₹</span></li></RevealAnimation>
            <RevealAnimation delay={0.3}><li><span className="text-secondary/60 dark:text-accent/60">Sales trend comparisons</span></li></RevealAnimation>
            <RevealAnimation delay={0.4}><li><span className="text-secondary/60 dark:text-accent/60">AI-driven recommendations</span></li></RevealAnimation>
          </ul>
        </div>

        {/* Images */}
        <div className="grid-column-12 grid gap-y-[50px]">
          <RevealAnimation delay={0.2}>
            <div className="cols-span-12">
              <figure>
                <Image src={sales1} alt="sales dashboard" className="rounded-[20px]" />
              </figure>
            </div>
          </RevealAnimation>
          <div className="cols-span-12 flex flex-col gap-[50px] md:col-span-6 md:flex-row">
            <RevealAnimation delay={0.2}>
              <figure>
                <Image src={sales2} alt="sales analytics" className="rounded-[24px]" />
              </figure>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <figure>
                <Image src={sales3} alt="sales insights" className="rounded-[24px]" />
              </figure>
            </RevealAnimation>
          </div>
        </div>

        {/* Social Share */}
        <div className="space-y-4">
          <RevealAnimation delay={0.2}>
            <h5>Share this post</h5>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <div className="flex items-center justify-start">
              <SocialLinkV3 social={social} />
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

SalesDetails.displayName = 'SalesDetails';
export default SalesDetails;
