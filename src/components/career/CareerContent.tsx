import Career from '@public/images/career.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

const CareerContent = () => {
  return (
    <section className="pt-32 pb-[100px] sm:pt-36 md:pt-42 xl:pt-[180px] xl:pb-[100px]">
      <div className="main-container">
        <div className="mb-[70px] space-y-3 text-center">
          <RevealAnimation delay={0.3}>
            <h2>
              From&apos;Scattered Systems to Smart Growth -<br className="hidden md:block" />
              Powered by CaartZee.
            </h2>
          </RevealAnimation>
        </div>
        <RevealAnimation delay={0.4}>
          <figure className="mb-18">
            <Image src={Career} alt="banner-image" className="rounded-2xl" />
          </figure>
        </RevealAnimation>
        <RevealAnimation delay={0.5}>
          <div className="mx-auto max-w-[840px] space-y-8">
            <h4>Our clients came from retail, services, manufacturing, and online selling backgrounds. </h4>
            <h4> Each business was managing multiple platforms for sales, inventory, accounting, and marketing.</h4>
            <p>
              Orders lived on one platform. Inventory on another.
               Accounting happened in spreadsheets. Marketing reports were scattered across tools. Nothing spoke to each other.
                This resulted in disconnected data, delayed decisions, and operational inefficiencies.
            </p>
            <p>
              Teams spent hours reconciling reports.
               Inventory mismatches caused lost sales. 
               Marketing efforts lacked visibility.
              Financial tracking was mostly manual.
            </p>
            <p>
              They needed more than software.
              They needed a unified system.

            </p>
            <p>
              CaartZee stepped in with a complete E-Commerce + ERP solution designed to work together from day one.
            </p>
            <p>
              By bringing every function into one dashboard, businesses gained real-time visibility, automation, and control across their entire operation
            </p>
            <p>
              What once felt overwhelming became streamlined, structured, and scalable.
            </p>
            <p>
              Our clients came from retail, services, manufacturing, and online selling backgrounds. 
              Each business was managing multiple platforms for sales, inventory, accounting, and marketing
            </p>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default CareerContent;
