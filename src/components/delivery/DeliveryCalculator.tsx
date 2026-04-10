import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

const DeliveryCalculator = () => {
  return (
    <section className="bg-background-2 py-20 dark:bg-background-8 overflow-hidden">
      <div className="main-container">
        <div className="flex flex-col items-center gap-16 lg:flex-row">
          <RevealAnimation delay={0.1} direction="left">
            <div className="flex-1">
              <figure className="relative max-w-[500px] mx-auto lg:mx-0">
                <Image 
                  src="/images/delivery/person.png" 
                  alt="Delivery Illustration" 
                  width={600} 
                  height={600}
                  className="h-auto w-full scale-110 lg:scale-125 transition-transform duration-700 hover:scale-130"
                />
              </figure>
            </div>
          </RevealAnimation>

          <RevealAnimation delay={0.3} direction="right">
            <div className="flex-1 w-full max-w-[550px]">
              <div className="rounded-[40px] bg-white p-10 shadow-2xl dark:bg-background-6 border border-stroke-2 dark:border-stroke-6">
                <h2 className="mb-8 text-heading-5 font-semibold text-secondary dark:text-accent">
                  Shipping Calculator
                </h2>
                <div className="space-y-6">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-secondary/60 dark:text-accent/60 uppercase tracking-widest">
                      Pickup Pincode
                    </label>
                    <input type="text" placeholder="e.g. 560103" className="w-full rounded-2xl border border-stroke-2 bg-background-1 px-5 py-4 focus:border-primary-500 focus:outline-none dark:border-stroke-6 dark:bg-background-8" />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-secondary/60 dark:text-accent/60 uppercase tracking-widest">
                      Delivery Pincode
                    </label>
                    <input type="text" placeholder="e.g. 400001" className="w-full rounded-2xl border border-stroke-2 bg-background-1 px-5 py-4 focus:border-primary-500 focus:outline-none dark:border-stroke-6 dark:bg-background-8" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="mb-2 block text-sm font-medium text-secondary/60 dark:text-accent/60 uppercase tracking-widest">
                        Weight (kg)
                      </label>
                      <input type="number" placeholder="0.5" className="w-full rounded-2xl border border-stroke-2 bg-background-1 px-5 py-4 focus:border-primary-500 focus:outline-none dark:border-stroke-6 dark:bg-background-8" />
                    </div>
                    <div>
                        <label className="mb-2 block text-sm font-medium text-secondary/60 dark:text-accent/60 uppercase tracking-widest">
                            Shipment Type
                        </label>
                        <select className="w-full rounded-2xl border border-stroke-2 bg-background-1 px-5 py-4 focus:border-primary-500 focus:outline-none dark:border-stroke-6 dark:bg-background-8 appearance-none">
                            <option>Standard</option>
                            <option>Express</option>
                        </select>
                    </div>
                  </div>
                  <button className="w-full rounded-full bg-primary-500 py-5 text-lg font-bold text-white shadow-xl shadow-primary-500/30 transition-all hover:bg-secondary hover:shadow-none dark:hover:bg-white dark:hover:text-secondary">
                    Calculate Shipping Rate
                  </button>
                </div>
              </div>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default DeliveryCalculator;
