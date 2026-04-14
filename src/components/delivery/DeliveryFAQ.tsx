import RevealAnimation from '../animation/RevealAnimation';

const faqs = [
  {
    question: 'What is Caartzee Delivery?',
    answer: 'Caartzee Delivery is our built-in logistics solution that lets you manage shipments, track orders, and configure shipping all from a single dashboard without relying on external tools.',
  },
  {
    question: 'How are delivery charges calculated?',
    answer: 'Delivery charges are calculated based on shipment weight, dimensions, delivery location, and selected courier partner. You can get real-time estimates using our integrated shipping system.',
  },
  {
    question: 'Can I manage multiple courier partners?',
    answer: 'Yes, Caartzee allows you to integrate and manage multiple courier partners, giving you flexibility to choose the best option based on cost, speed, and serviceability.',
  },
  {
    question: 'Does Caartzee support COD and prepaid orders?',
    answer: 'Yes, Caartzee supports both Cash on Delivery (COD) and prepaid shipments, with easy tracking and status updates directly from your dashboard.',
  },
];

const DeliveryFAQ = () => {
  return (
    <section className="bg-white py-20 dark:bg-background-7">
      <div className="main-container">
        <RevealAnimation delay={0.1}>
          <div className="mb-14 text-center">
            <h2 className="text-heading-4 font-medium md:text-heading-3">
              Delivery FAQs
            </h2>
          </div>
        </RevealAnimation>

        <div className="mx-auto max-w-[800px] space-y-4">
          {faqs.map((faq, index) => (
            <RevealAnimation key={faq.question} delay={0.2 + index * 0.1}>
              <div className="group rounded-2xl border border-stroke-2 bg-background-1 p-6 transition-all hover:bg-white dark:border-stroke-6 dark:bg-background-6">
                <details className="cursor-pointer">
                  <summary className="flex items-center justify-between text-lg font-medium text-secondary dark:text-accent list-none">
                    {faq.question}
                    <span className="text-2xl transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-4 text-secondary/70 dark:text-accent/70 leading-relaxed">
                    {faq.answer}
                  </p>
                </details>
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DeliveryFAQ;
