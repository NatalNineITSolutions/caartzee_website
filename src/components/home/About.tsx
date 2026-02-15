import RevealAnimation from '@/components/animation/RevealAnimation';
import AboutAvatarCard from './AboutAvatarCard';
import AboutList from './AboutList';
import AboutUserCard from './AboutUserCard';

const About = () => {
  return (
    <section className="bg-background-2 dark:bg-background-6 relative pt-20 pb-14 max-sm:pt-10 max-sm:pb-10 md:pt-[100px] md:pb-16 lg:pt-[160px] lg:pb-[88px] xl:pt-[200px] xl:pb-[100px]">
      <div className="main-container flex flex-col gap-[70px]">
        <div className="flex flex-col items-center gap-y-2 text-center">
          <RevealAnimation delay={0.1}>
            <h2 className="mx-auto max-w-[750px] max-sm:max-w-[320px]">
             Build, Manage and Grow your Business, All in One Place
            </h2>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <p className="max-w-[900px] max-sm:max-w-[300px]">
              Unify your online stores, inventory, finance, and sales channels within a single intelligent dashboard—designed for businesses ready to scale with speed and control.
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
