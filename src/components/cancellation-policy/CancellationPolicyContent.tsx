import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';

export const CancellationPolicyContent = () => {
  return (
    <section className="pt-32 pb-[100px] sm:pt-36 md:pt-42 xl:pt-[180px]">
      <div className="main-container">
        <div className="cancellation-policy space-y-[80px]">
          
          {/* Header & Introduction */}
          <div className="space-y-6">
            <RevealAnimation delay={0.1} offset={40}>
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Cancellation &amp; Refund Policy</h1>
                <p className="text-primary-500 font-semibold uppercase tracking-widest text-sm">Effective Date: November 27, 2026</p>
              </div>
            </RevealAnimation>
            <RevealAnimation delay={0.2} offset={40}>
              <div className="space-y-6 font-normal text-secondary/60 dark:text-accent/60 lg:text-lg max-w-4xl leading-relaxed">
                <p>
                  At Caartzee, a product of <strong className="text-secondary dark:text-accent font-medium">Natal Nine IT Solutions Private Limited</strong>, we are committed to providing reliable e-commerce solutions that enable businesses to create, manage and grow their online stores. This Cancellation &amp; Refund Policy outlines the terms applicable to subscriptions, cancellations, renewals and refunds.
                </p>
              </div>
            </RevealAnimation>
          </div>

          {/* Section 1 */}
          <div className="space-y-6">
            <RevealAnimation delay={0.25} offset={40}>
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-secondary dark:text-accent">1. Subscription Cancellation</h2>
                <div className="space-y-3 text-secondary/70 dark:text-accent/70 leading-relaxed font-normal">
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Customers may cancel their Caartzee subscription at any time through their account dashboard or by contacting our customer support team.</li>
                    <li>Cancellation will prevent future automatic subscription renewals.</li>
                    <li>Customers will continue to have access to their subscribed features until the end of their current paid billing period.</li>
                    <li>Cancellation does not automatically qualify the customer for a refund.</li>
                  </ul>
                </div>
              </div>
            </RevealAnimation>
          </div>

          {/* Section 2 */}
          <div className="space-y-6">
            <RevealAnimation delay={0.3} offset={40}>
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-secondary dark:text-accent">2. Refund Policy</h2>
                <div className="space-y-3 text-secondary/70 dark:text-accent/70 leading-relaxed font-normal">
                  <p>
                    All subscription payments made to Caartzee are generally non-refundable, except where required by applicable law or expressly provided under this policy.
                  </p>
                  <p>Refunds may be considered under the following circumstances:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Duplicate payments caused by a technical or payment processing error.</li>
                    <li>Incorrect subscription charges attributable to Caartzee.</li>
                    <li>Payment successfully deducted but the purchased subscription was not activated.</li>
                    <li>Inability to deliver the purchased service due to a technical issue attributable to Caartzee that cannot be resolved within a reasonable period.</li>
                  </ul>
                  <p className="font-medium text-secondary dark:text-accent mt-3">
                    Eligible refund requests must be submitted within 7 calendar days of the transaction.
                  </p>
                </div>
              </div>
            </RevealAnimation>
          </div>

          {/* Section 3 */}
          <div className="space-y-6">
            <RevealAnimation delay={0.35} offset={40}>
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-secondary dark:text-accent">3. Non-Refundable Services</h2>
                <div className="space-y-3 text-secondary/70 dark:text-accent/70 leading-relaxed font-normal">
                  <p>The following payments are generally non-refundable:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Monthly and annual subscription fees for services already delivered.</li>
                    <li>Partially utilised subscription periods.</li>
                    <li>Domain registration and renewal charges.</li>
                    <li>Premium themes, applications and add-ons already delivered.</li>
                    <li>Custom development, configuration and integration services already performed.</li>
                    <li>WhatsApp messaging credits and other consumed usage-based services.</li>
                    <li>Third-party service charges that cannot be recovered.</li>
                  </ul>
                  <p className="italic text-sm text-secondary/60 dark:text-accent/60 mt-2">
                    This section is subject to applicable statutory consumer rights.
                  </p>
                </div>
              </div>
            </RevealAnimation>
          </div>

          {/* Section 4 */}
          <div className="space-y-6">
            <RevealAnimation delay={0.4} offset={40}>
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-secondary dark:text-accent">4. Automatic Subscription Renewals</h2>
                <div className="space-y-3 text-secondary/70 dark:text-accent/70 leading-relaxed font-normal">
                  <p>
                    Subscriptions with automatic renewal enabled will be renewed at the end of the applicable billing cycle.
                  </p>
                  <p>
                    Customers are responsible for cancelling their subscription before the next renewal date to avoid future charges. Where an automatic payment mandate is enabled, customers may also revoke it through their respective payment provider.
                  </p>
                </div>
              </div>
            </RevealAnimation>
          </div>

          {/* Section 5 */}
          <div className="space-y-6">
            <RevealAnimation delay={0.45} offset={40}>
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-secondary dark:text-accent">5. Subscription Upgrades and Downgrades</h2>
                <div className="space-y-3 text-secondary/70 dark:text-accent/70 leading-relaxed font-normal">
                  <p>
                    Customers may upgrade or downgrade their subscription based on the available pricing plans.
                  </p>
                  <p>
                    Additional charges may apply when upgrading a subscription. Downgrades will generally take effect from the next billing cycle. Unused subscription amounts will not ordinarily be refunded.
                  </p>
                </div>
              </div>
            </RevealAnimation>
          </div>

          {/* Section 6 */}
          <div className="space-y-6">
            <RevealAnimation delay={0.5} offset={40}>
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-secondary dark:text-accent">6. Refund Processing</h2>
                <div className="space-y-3 text-secondary/70 dark:text-accent/70 leading-relaxed font-normal">
                  <p>Once a refund request has been reviewed and approved:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>The refund will be initiated to the original payment method.</li>
                    <li>Refunds will generally be processed within 5–10 business days.</li>
                    <li>The actual credit date may vary depending on the customer's bank or payment service provider.</li>
                  </ul>
                </div>
              </div>
            </RevealAnimation>
          </div>

          {/* Section 7 */}
          <div className="space-y-6">
            <RevealAnimation delay={0.55} offset={40}>
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-secondary dark:text-accent">7. Store Deactivation and Data Retention</h2>
                <div className="space-y-3 text-secondary/70 dark:text-accent/70 leading-relaxed font-normal">
                  <p>
                    Upon subscription expiry or cancellation at the end of the billing period, the customer's online store and premium features may be deactivated.
                  </p>
                  <p>
                    Customers are responsible for exporting and backing up their business data before their subscription expires.
                  </p>
                  <p>
                    Data retention and deletion will be governed by Caartzee's <Link href="/privacy-policy" className="text-primary-500 hover:underline">Privacy Policy</Link> and applicable legal requirements.
                  </p>
                </div>
              </div>
            </RevealAnimation>
          </div>

          {/* Section 8 */}
          <div className="space-y-6">
            <RevealAnimation delay={0.6} offset={40}>
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-secondary dark:text-accent">8. Orders Placed Through Merchant Stores</h2>
                <div className="space-y-3 text-secondary/70 dark:text-accent/70 leading-relaxed font-normal">
                  <p>
                    Caartzee provides an e-commerce technology platform that enables independent merchants to sell their products and services.
                  </p>
                  <p>
                    For purchases made directly through merchant-operated stores, order cancellations, returns, exchanges and refunds are governed by the respective merchant's policies, subject to applicable law.
                  </p>
                  <p>
                    Customers should contact the respective merchant directly for assistance with such orders.
                  </p>
                  <p className="italic text-sm text-secondary/60 dark:text-accent/60">
                    This provision does not limit any legal obligations applicable to Caartzee.
                  </p>
                </div>
              </div>
            </RevealAnimation>
          </div>

          {/* Section 9 */}
          <div className="space-y-6">
            <RevealAnimation delay={0.65} offset={40}>
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-secondary dark:text-accent">9. Changes to This Policy</h2>
                <div className="space-y-3 text-secondary/70 dark:text-accent/70 leading-relaxed font-normal">
                  <p>
                    Caartzee reserves the right to update or modify this Cancellation &amp; Refund Policy from time to time. Any changes will be published on our official website and will take effect in accordance with applicable law.
                  </p>
                </div>
              </div>
            </RevealAnimation>
          </div>

          {/* Section 10 */}
          <div className="space-y-6">
            <RevealAnimation delay={0.7} offset={40}>
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-secondary dark:text-accent">10. Contact Us</h2>
                <div className="space-y-3 text-secondary/70 dark:text-accent/70 leading-relaxed font-normal">
                  <p>
                    For subscription cancellations, refund requests or payment-related enquiries, please contact our customer support team through our official website.
                  </p>
                  <div className="mt-4 p-6 rounded-2xl bg-white dark:bg-background-6 border border-stroke-1 dark:border-stroke-7 space-y-2">
                    <p className="font-bold text-secondary dark:text-accent text-lg">Caartzee</p>
                    <p>Operated by Natal Nine IT Solutions Private Limited</p>
                    <p>
                      <strong>Website:</strong>{' '}
                      <Link href="https://caartzee.com/" className="text-primary-500 hover:underline">
                        https://caartzee.com/
                      </Link>
                    </p>
                  </div>
                  <p className="text-sm text-secondary/60 dark:text-accent/60 mt-4">
                    By purchasing or subscribing to Caartzee services, you acknowledge this Cancellation &amp; Refund Policy, subject to your rights under applicable law.
                  </p>
                </div>
              </div>
            </RevealAnimation>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CancellationPolicyContent;
