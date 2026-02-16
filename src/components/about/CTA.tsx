import RevealAnimation from '@/components/animation/RevealAnimation';
import LinkButton from '@/components/ui/button/LinkButton';
import CTACheckList from '../shared/cta/CTACheckList';

const CTA = () => {
  return (
    <section className="pt-14 pb-14 md:pt-16 md:pb-16 lg:pt-[88px] lg:pb-[88px] xl:pt-[100px] xl:pb-[100px]">
      <div className="main-container">
        <div className="text-center">
          <RevealAnimation delay={0.1}>
            <h2 className="mx-auto mb-3 max-w-[810px] text-center">
              Start today. Experience the difference.{' '}
              <span className="text-primary-500">Start for Rs ₹1</span>
            </h2>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <p className="mx-auto mb-8 lg:max-w-[490px]">
              Sign up today and see how Zee done simplifies business, organizes your team, and helps you scale.
            </p>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <div className="text-center md:inline-block">
              <div>
                <LinkButton
                  href="/contact-us"
                  className="btn btn-primary hover:btn-white-dark dark:hover:btn-white btn-md text-tagline-2 mx-auto block w-full text-center md:mx-0 md:inline-block md:w-auto">
                  Get Started Today
                </LinkButton>
              </div>
            </div>
          </RevealAnimation>
          <CTACheckList
            listClass="gap-3"
            listAnimationDelay={0.3}
            className="mt-5 flex flex-wrap items-center justify-center gap-[42px] max-lg:gap-5 md:mt-8"
            ctaCheckListData={[
              {
                id: '1',
                text: 'No credit card required',
              },
              {
                id: '2',
                text: 'Easy setup',
              },
              {
                id: '3',
                text: 'Cancel anytime',
              },
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default CTA;
