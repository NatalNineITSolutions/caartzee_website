import RevealAnimation from '../animation/RevealAnimation';

const faqs = [
  {
    question: 'How do I activate Caartzee Delivery?',
    answer: 'You can activate Caartzee Delivery directly from your dashboard under the Shipping menu. Just one click to enable the best courier partners.',
  },
  {
    question: 'What are the delivery charges?',
    answer: 'Our charges depend on the weight and distance of the shipment. Use our Shipping Calculator above for an instant estimate.',
  },
  {
    question: 'How many courier partners are integrated?',
    answer: 'We have integrated 15+ top-tier courier partners like BlueDart, Delhivery, and Ecom Express to ensure max coverage.',
  },
  {
    question: 'Is COD supported?',
    answer: 'Yes, both Cash on Delivery (COD) and Prepaid shipments are fully supported with automated reconciliation.',
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
