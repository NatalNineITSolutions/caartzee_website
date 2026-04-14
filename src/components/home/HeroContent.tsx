import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const HeroContent = () => {
  return (
    <div className="main-container z-10 flex flex-col items-center text-center">

      <RevealAnimation delay={0.1}>
        <span className="badge badge-yellow mb-5">Powering the Next Generation of Global Commerce</span>
      </RevealAnimation>
      <RevealAnimation delay={0.2}>
        <h1 className="max-[426px]:text-heading-5 max-sm:text-heading-4 mb-4 font-medium max-[426px]:mb-2.5 max-sm:max-w-[450px]">
          Launch, Scale & Automate 
          <br className="hidden md:block" />
          Your Entire Business Ecosystem
        </h1>
      </RevealAnimation>
      <RevealAnimation delay={0.3}>
        <p className="mb-10 max-w-[625px] max-sm:max-w-[420px] sm:mb-14">
          From AI-powered product photography with Caartzee Snap to global sales automation—unify every part of your commerce journey on one intelligent platform.
        </p>
      </RevealAnimation>
      <ul className="mb-7 flex flex-col gap-4 max-md:w-full md:mb-14 md:flex-row">
        <RevealAnimation delay={0.3} direction="left" offset={50}>
          <li>
            <LinkButton
              href="https://cartly.zeedone.com/register"
              className="btn max-md:btn-md btn-xl dark:btn-accent btn-primary hover:btn-secondary dark:hover:btn-transparent w-full max-md:mx-auto md:w-auto">
              Get started
            </LinkButton>
          </li>
        </RevealAnimation>
        {/* <RevealAnimation delay={0.5} direction="left" offset={50}>
          <li>
            <LinkButton
              href="/pricing"
              className="btn btn-white max-md:btn-md btn-xl hover:btn-secondary dark:btn-transparent dark:hover:btn-accent w-full max-md:mx-auto md:w-auto">
              Free trial
            </LinkButton>
          </li>
        </RevealAnimation> */}
      </ul>
    </div>
  );
};

HeroContent.displayName = 'HeroContent';
export default HeroContent;
