import avatar1 from '@public/images/ns-avatar-1.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const SalesTestimonial = () => {
  return (
    <section className="pt-[100px] pb-[200px]">
      <div className="mx-auto flex w-[95%] max-w-[950px] flex-col space-y-14">
        
        {/* Heading */}
        <div className="space-y-3">
          <RevealAnimation delay={0.1}>
            <h2>What our sellers say</h2>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <p className="text-secondary/60">
              “Caartzee Sales Agent helped us connect Amazon and Flipkart seamlessly—our growth doubled in just months.”
            </p>
          </RevealAnimation>
        </div>

        {/* Testimonial Card */}
        <RevealAnimation delay={0.2}>
          <div className="bg-secondary dark:bg-background-8 flex flex-col space-y-6 rounded-[20px] p-8">
            <RevealAnimation delay={0.2}>
              <figure>
                <Image
                  src={avatar1}
                  alt="seller testimonial"
                  className="inline-block size-14 rounded-full bg-linear-[156deg,#ffffff_0%,#83E7EE_100%]"
                />
              </figure>
            </RevealAnimation>
            <div>
              <p className="dark:text-accent/60 text-white">
                “Managing multiple marketplaces used to be a nightmare. With Caartzee, inventory sync and AI image
                enhancement save us hours every week. We can finally focus on scaling.”
              </p>
            </div>
            <div>
              <p className="text-lg leading-[150%] font-medium text-white">Priya Sharma</p>
              <p className="text-accent/60 text-tagline-2">Retailer, Bangalore</p>
            </div>
          </div>
        </RevealAnimation>

        {/* CTA Button */}
        <RevealAnimation delay={0.2}>
          <div className="w-fit">
            <LinkButton
              href="/sales-testimonial"
              className="btn btn-primary btn-xl hover:btn-secondary dark:hover:btn-accent"
            >
              Start Selling Smarter
            </LinkButton>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

SalesTestimonial.displayName = 'SalesTestimonial';
export default SalesTestimonial;
