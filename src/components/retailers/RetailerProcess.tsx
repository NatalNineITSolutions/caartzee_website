// Retailer Process section
import RevealAnimation from '../animation/RevealAnimation';
import RetailersList from './RetailersList';
import RetailersStep from './RetailersStep';

const RetailerProcess = () => {
  return (
    <section className="py-14 md:py-16 lg:py-[88px] xl:py-[100px]">
      <div className="main-container">
        <div className="space-y-10 md:space-y-[70px]">
          <div className="text-center max-w-[602px] space-y-3 mx-auto">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-green mb-5">process</span>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h2>How it works</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p>Becoming a Caartzee retailer and selling products is simple</p>
            </RevealAnimation>
          </div>
          <RetailersStep />
        </div>
        <RetailersList />
      </div>
    </section>
  );
};

RetailerProcess.displayName = 'RetailerProcess';
export default RetailerProcess;
