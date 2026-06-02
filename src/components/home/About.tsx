import RevealAnimation from '@/components/animation/RevealAnimation';
import AboutAvatarCard from './AboutAvatarCard';
import AboutList from './AboutList';
import AboutUserCard from './AboutUserCard';

const About = () => {
  return (
    <section className="bg-background-2 dark:bg-background-6 relative pt-4 pb-14 max-sm:pt-6 max-sm:pb-10 md:pt-16 md:pb-16 lg:pt-12 lg:pb-[88px] xl:pt-16 xl:pb-[100px]">
      <div className="main-container flex flex-col gap-[70px]">
        <div className="flex flex-col items-center gap-y-2 text-center">
          <RevealAnimation delay={0.1}>
            <h2 className="mx-auto max-w-[800px] max-sm:max-w-[320px]">
              Why choose Caartzee?
            </h2>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <p className="mx-auto max-w-[900px] max-sm:max-w-[300px] mt-4">
              Unify your online stores, inventory, and sales channels within a single intelligent dashboard.
            </p>
          </RevealAnimation>
        </div>

        <div className="grid grid-cols-12 gap-[42px] max-sm:gap-x-0 max-sm:gap-y-[42px]">
          <AboutList />
          {/* <AboutAvatarCard />
          <AboutUserCard /> */}
        </div>
      </div>
    </section>
  );
};

About.displayName = 'About';
export default About;
