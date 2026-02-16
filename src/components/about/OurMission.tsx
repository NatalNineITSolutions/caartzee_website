import feature1Img from '@public/images/zeedone-cartly-logo.png';
import Image from 'next/image';
import NumberAnimation from '../animation/NumberAnimation';
import RevealAnimation from '../animation/RevealAnimation';
import Progress from './Progress';

const OurMission = () => {
  return (
    <section className="overflow-hidden pt-14 pb-14 md:pt-16 md:pb-16 lg:pt-[88px] lg:pb-[88px] xl:pt-[100px] xl:pb-[100px]">
      <div className="main-container">
        <div className="grid grid-cols-12 items-center gap-y-12 lg:gap-x-0 xl:gap-x-28">
          <div className="col-span-12 lg:col-span-6">
            <div className="space-y-3">
              <RevealAnimation delay={0.2}>
                <span className="badge badge-cyan mb-5">Why We Built Zeedone</span>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <h2>Zeedone was created with one simple question:</h2>
              </RevealAnimation>
              <RevealAnimation delay={0.4}>
                <div>
                  <p className="font-medium text-lg">What if managing customers and workflows didn’t feel complicated?</p>
                  <p>
                    We saw businesses struggling with disconnected tools, repetitive tasks, and scattered information. So
                    we built a platform that brings everything together CRM, automation, and integrations—in one
                    easy-to-use system.
                  </p>
                </div>
              </RevealAnimation>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6">
            <div>
              <figure className="relative w-full md:w-[500px]">
                <RevealAnimation delay={0.4}>
                  <div className="w-full flex justify-center lg:justify-end">
                    <Image src={feature1Img} alt="Zeedone Cartly Logo" className="w-full max-w-[400px] h-auto object-contain" />
                  </div>
                </RevealAnimation>

              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

OurMission.displayName = 'OurMission';
export default OurMission;
