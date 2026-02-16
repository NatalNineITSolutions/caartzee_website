import avatarImg from '@public/images/ns-avatar-1.png';
import gradientImg from '@public/images/ns-img-498.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

const Reviews = () => {
  return (
    <section className="overflow-hidden max-lg:mt-12">
      <div className="main-container">
        <RevealAnimation delay={0.1}>
          <div className="bg-background-2 dark:bg-background-6 relative flex flex-col items-center overflow-hidden rounded-4xl py-[100px]">
            {/* gradient bg  */}
            <RevealAnimation delay={0.2} direction="left" offset={100}>
              <div className="pointer-events-none absolute -top-[90%] -left-[65%] h-[600px] w-[500px] rotate-[34deg] select-none max-[376px]:-left-[76%] md:-top-[73%] md:-left-[30%] lg:-top-[70%] lg:-left-[21%] xl:-left-[15%]">
                <Image
                  src={gradientImg}
                  alt="Decorative gradient background overlay"
                  className="h-full w-full object-cover"
                />
              </div>
            </RevealAnimation>
            {/* <figure className="flex flex-col items-center justify-center space-y-4">
              <Image
                src={avatarImg}
                alt="Avatar"
                className="bg-ns-yellow size-10 rounded-full object-cover ring-2 ring-white"
              />
              <figcaption className="text-tagline-2 dark:text-accent font-medium">From our CEO</figcaption>
            </figure> */}
            <h2 className="dark:text-accent mx-auto mt-6 mb-4 max-w-[800px] text-center text-heading-3 font-medium">
              Values That Shape Everything We Build
            </h2>
            <p className="max-sm:text-tagline-2 mx-auto mb-10 max-w-[700px] text-center text-lg text-secondary/80 dark:text-accent/80 max-sm:px-2">
              Our values guide every decision, feature, and customer interaction:
            </p>

            <ul className="mx-auto mb-12 max-w-[800px] space-y-4 px-4 text-left sm:px-0">
              <li className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                <span className="font-bold text-secondary dark:text-accent whitespace-nowrap">Clarity Over Clutter –</span>
                <span className="text-secondary/80 dark:text-accent/80">Simple, intuitive experiences always</span>
              </li>
              <li className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                <span className="font-bold text-secondary dark:text-accent whitespace-nowrap">People Before Features –</span>
                <span className="text-secondary/80 dark:text-accent/80">Real problems first, tech second</span>
              </li>
              <li className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                <span className="font-bold text-secondary dark:text-accent whitespace-nowrap">Security as a Standard –</span>
                <span className="text-secondary/80 dark:text-accent/80">Your data, protected by design</span>
              </li>
              <li className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                <span className="font-bold text-secondary dark:text-accent whitespace-nowrap">Growth Mindset –</span>
                <span className="text-secondary/80 dark:text-accent/80">We evolve as your business evolves</span>
              </li>
              <li className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                <span className="font-bold text-secondary dark:text-accent whitespace-nowrap">Customer-Driven Innovation –</span>
                <span className="text-secondary/80 dark:text-accent/80">Built around your needs</span>
              </li>
            </ul>

            <div className="mx-auto max-w-[850px] text-center px-4 pb-10">
              <h3 className="text-2xl font-semibold text-secondary dark:text-accent mb-4">Powering Modern Businesses with Smart Technology</h3>
              <p className="text-secondary/80 dark:text-accent/80 text-lg">
                Whether you’re a startup or an enterprise, CaartZee brings everything together in one scalable platform helping you move faster, work smarter, and grow stronger.
              </p>
            </div>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

Reviews.displayName = 'Reviews';
export default Reviews;
