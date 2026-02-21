import RevealAnimation from '@/components/animation/RevealAnimation';
import LinkButton from '@/components/ui/button/LinkButton';
import CTACheckList from '@/components/shared/cta/CTACheckList';

const CTA = () => {
  const ctaCheckListData = [
    {
      id: '1',
      text: 'No credit card required',
    },
    {
      id: '2',
      text: 'free for 30 day trial.',
    },
    {
      id: '3',
      text: 'Money back guarantee.',
    },
  ];

  return (
    <section className="bg-background-2 dark:bg-background-5 pt-14 pb-14 md:pt-16 md:pb-16 lg:pt-[88px] lg:pb-[88px] xl:pt-[100px] xl:pb-[100px]">
      <div className="main-container">
        <div className="text-center">
          <RevealAnimation delay={0.1}>
            <h2 className="mx-auto mb-3 max-w-[810px] text-center">
              Start Your GST Automation Journey Today.
            </h2>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <p className="mx-auto mb-8 lg:max-w-[390px]">
              Join thousands of businesses automating their tax compliance and financial reporting seamlessly.
            </p>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <div className="text-center md:inline-block">
              <div>
                <LinkButton
                  href="/contact-us"
                  className="btn btn-primary hover:btn-white-dark dark:hover:btn-white btn-md text-tagline-2 btn-xl mx-auto block w-full text-center md:mx-0 md:inline-block md:w-auto">
                  Start 14-Day Free Trial
                </LinkButton>
              </div>
            </div>
          </RevealAnimation>
          <CTACheckList
            listClass="gap-3"
            listAnimationDelay={0.3}
            className="mt-5 flex flex-wrap items-center justify-center gap-[42px] max-lg:gap-5 md:mt-8"
            ctaCheckListData={ctaCheckListData}
          />
        </div>
      </div>
    </section>
  );
};

CTA.displayName = 'CTA';
export default CTA;
