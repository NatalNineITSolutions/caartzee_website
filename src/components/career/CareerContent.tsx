import bannerImage from '@public/images/ns-img-379.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

const CareerContent = () => {
  return (
    <section className="pt-32 pb-[100px] sm:pt-36 md:pt-42 xl:pt-[180px] xl:pb-[100px]">
      <div className="main-container">
        <div className="mb-[70px] space-y-3 text-center">
          <RevealAnimation delay={0.3}>
            <h2>
              We&apos;re building the future of Caartzee <br className="hidden md:block" />
              come build It with us.
            </h2>
          </RevealAnimation>
        </div>
        <RevealAnimation delay={0.4}>
          <figure className="mb-18">
            <Image src={bannerImage} alt="banner-image" className="rounded-2xl" />
          </figure>
        </RevealAnimation>
        <RevealAnimation delay={0.5}>
          <div className="mx-auto max-w-[840px] space-y-8">
            <h4>Join a team redefining how modern businesses launch and grow online.</h4>

            <p>
              At Caartzee, we’re building more than just a platform — we’re creating the infrastructure that empowers
              startups, creators, and businesses to turn ideas into scalable digital products. Our mission is simple:
              make powerful technology accessible, beautiful, and effortless to use.
            </p>

            <p>
              We believe great products are built by passionate people who care deeply about user experience,
              performance, and innovation. From intuitive interfaces to scalable backend systems, everything we
              design is crafted with intention and precision.
            </p>

            <p>
              As part of the Caartzee team, you’ll work on meaningful challenges — building tools that help businesses
              sell smarter, launch faster, and grow sustainably. We value creativity, ownership, and collaboration.
              Every voice matters here.
            </p>

            <p>
              We move fast, experiment boldly, and continuously improve. If you’re excited about SaaS, modern web
              technologies, design systems, and creating products that genuinely make an impact, you’ll feel right at home.
            </p>

            <p>
              Come build the future with us. Let’s shape the next generation of digital commerce together.
            </p>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default CareerContent;
