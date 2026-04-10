import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const ThemesCTA = () => {
  return (
    <section className="py-20">
      <div className="main-container">
        <RevealAnimation delay={0.1}>
          <div className="relative flex flex-col items-center justify-between gap-10 overflow-hidden rounded-[40px] bg-gradient-to-r from-[#FF9A9E] to-[#FAD0C4] p-10 md:flex-row md:p-20">
            {/* Background Shape */}
            <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-white/20 blur-3xl"></div>
            
            <div className="relative z-10 max-w-[600px] text-left">
              <h2 className="mb-6 text-heading-3 font-semibold text-white md:text-heading-2">
                Do you want to sell on our Marketplace?
              </h2>
              <p className="text-lg text-white/90">
                Join our growing community of designers and developers. Start selling your themes and plugins to thousands of users on Caartzee.
              </p>
            </div>

            <div className="relative z-10 shrink-0">
              <LinkButton
                href="/contact-us"
                className="btn btn-xl bg-white text-secondary hover:bg-secondary hover:text-white dark:bg-white dark:text-secondary border-none">
                Fill query
              </LinkButton>
            </div>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default ThemesCTA;
