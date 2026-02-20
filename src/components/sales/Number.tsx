import NumberAnimation from '../animation/NumberAnimation';
import RevealAnimation from '../animation/RevealAnimation';

const SalesNumber = () => {
  return (
    <section className="dark:bg-background-6 bg-white py-[100px] lg:py-[150px] xl:py-[200px]">
      <div className="main-container">
        <div className="flex flex-col items-center justify-between gap-8 xl:flex-row xl:gap-0">
          {/* heading */}
          <div className="space-y-5 text-center xl:max-w-[442px] xl:text-left">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-green">Impact</span>
            </RevealAnimation>

            <div className="space-y-3">
              <RevealAnimation delay={0.2}>
                <h2>Driving growth for modern sellers</h2>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <p className="max-w-[780px]">
                  Caartzee Sales Agent helps sellers scale faster with AI-powered tools, real-time insights, and seamless marketplace integration.
                </p>
              </RevealAnimation>
            </div>
          </div>

          {/* number cards */}
          <div className="flex flex-col items-center gap-8 md:flex-row">
            {/* growth card */}
            <RevealAnimation delay={0.4} direction="up">
              <div className="bg-background-2 dark:bg-background-5 flex w-full max-w-[365px] flex-1 flex-col justify-between gap-y-14 rounded-xl p-8">
                <div className="flex items-center justify-between">
                  <h3 className="text-heading-5 basis-[197px]">Sellers growing with Caartzee</h3>
                  <span className="ns-shape-47 text-secondary dark:text-accent text-[52px]" />
                </div>
                <div>
                  <p className="text-heading-3 text-secondary dark:text-accent flex items-center">
                    <NumberAnimation number={83} speed={1500} interval={150}>
                      92
                    </NumberAnimation>
                    <span className="font-inherit">%</span>
                  </p>
                  <p>Avg. Growth Rate</p>
                </div>
              </div>
            </RevealAnimation>

            {/* revenue card */}
            <RevealAnimation delay={0.5}>
              <div className="bg-background-2 dark:bg-background-5 flex w-full max-w-[365px] flex-1 flex-col justify-between gap-y-14 rounded-xl p-8">
                <div className="flex items-center justify-between">
                  <h3 className="text-heading-5 basis-[197px]">Revenue increase in ₹</h3>
                  <span className="ns-shape-57 text-secondary dark:text-accent text-[52px]" />
                </div>
                <div>
                  <p className="text-heading-3 text-secondary dark:text-accent flex items-center">
                    <NumberAnimation number={78} speed={1500} interval={150}>
                      87
                    </NumberAnimation>
                    <span className="font-inherit">%</span>
                  </p>
                  <p>Avg. Performance Boost</p>
                </div>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

SalesNumber.displayName = 'SalesNumber';
export default SalesNumber;
