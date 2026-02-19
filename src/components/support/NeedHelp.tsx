import support from '@public/images/ns-img-401.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const NeedHelp = () => {
  return (
    <section className="pt-32 pb-[100px] sm:pt-36 md:pt-42 lg:pb-[200px] xl:pt-[180px]">
      <div className="main-container">
        <div className="mb-[70px] space-y-14 text-center">
          <div className="space-y-3">
            <RevealAnimation delay={0.3}>
              <h2>How Can We Help You Today?</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.4}>
              <p>
                At Caartzee CRM, your success is our priority. Whether you need technical support, onboarding guidance, or feature assistance  our experts are ready to assist.
              </p>
            </RevealAnimation>
          </div>
          <RevealAnimation delay={0.5}>
            <div>
              <LinkButton
                href="/contact-us"
                className="btn btn-xl hover:btn-secondary dark:hover:btn-accent btn-primary">
                Get help
              </LinkButton>
            </div>
          </RevealAnimation>
        </div>
        <RevealAnimation delay={0.6} instant>
          <div className="section-reveal">
            <figure className="overflow-hidden rounded-[20px]">
              <Image src={support} alt="support" />
            </figure>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default NeedHelp;
