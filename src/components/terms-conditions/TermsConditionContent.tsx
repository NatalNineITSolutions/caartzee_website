import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';

const TermsConditionContent = () => {
  return (
    <section className="pt-32 pb-14 sm:pt-36 md:pt-42 md:pb-16 lg:pb-[88px] xl:pt-[180px] xl:pb-[200px]">
      <div className="main-container">
        <RevealAnimation delay={0.3}>
          <div className="space-y-3">
            <h2>Terms &amp; conditions</h2>
            <div className="space-y-7">
              <p>
                This site, Caartzee.com (hereafter referred to as Caartzee, site, or website) is owned and operated by
                Caartzee Technologies LLC (hereafter referred to as Caartzee, we, or company).
              </p>
              <p>
                Please carefully read, review, and understand our Terms and Conditions before using any services or
                products from Caartzee.com. Your access to and use of this website and its products indicate that you
                accept and agree to be bound by these terms and conditions.
              </p>
              <p>
                If you do not agree with these terms, you should leave the site immediately and not use any of the
                materials or services available here.
              </p>
            </div>
          </div>
        </RevealAnimation>
        <article className="terms-conditions-body">
          <RevealAnimation delay={0.4}>
            <div className="space-y-6">
              <h3>1. Limitation of liability</h3>
              <p>
                To the maximum extent permitted by law, Caartzee shall not be liable
                for any indirect, incidental, special, consequential, or punitive
                damages arising from your use of or inability to use the Platform.
              </p>
              <p>
                This includes, but is not limited to, loss of revenue, profits,
                business opportunities, data, or goodwill. Your use of Caartzee
                is at your own risk.
              </p>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.5}>
            <div className="space-y-6">
              <h3>2. License</h3>
              <p>
                Access to Caartzee is provided under a subscription-based license.
                Your subscription grants you limited, non-exclusive,
                non-transferable access to use the Platform during the active
                subscription period.
              </p>
              <p>
                You may not copy, reproduce, resell, sublicense, distribute,
                or exploit any part of the Platform without prior written consent.
              </p>

              <p>
                Continued access to premium features, updates, and support requires
                an active subscription.
              </p>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.6}>
            <div className="space-y-6">
              <h3>3. Ownership and liability</h3>
              <p>
                All content, trademarks, software, designs, and intellectual
                property associated with Caartzee remain the exclusive property
                of Caartzee Technologies.
              </p>
              <p>
                Nothing in these Terms grants you ownership rights to the Platform.
                You retain ownership of the data you upload, but you grant Caartzee
                the necessary rights to process and store that data to provide
                our services.
              </p>
              <p>
                User accounts and product licenses are
                <strong className="!text-secondary dark:!text-accent font-bold"> non-transferable </strong>. For
                agencies and development partners: Please ensure your clients purchase their own licenses if they
                require direct support access.
              </p>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <div className="space-y-6">
              <h3>4. Refund policy</h3>
              <p>
                We offer a 14-day refund policy for new subscriptions. If you are
                not satisfied with Caartzee, you may request a refund within 14 days
                of your initial purchase.
              </p>

              <p>
                Refund requests submitted after 14 days may not be eligible.
                We reserve the right to refuse refund requests that violate
                our terms or demonstrate misuse of the Platform.
              </p>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.4}>
            <Link href="/refund-policy" className="btn btn-xl dark:btn-accent hover:btn-primary btn-secondary">
              <span>Learn more about our refund policy</span>
            </Link>
          </RevealAnimation>
          <RevealAnimation delay={0.5}>
            <div className="space-y-6">
              <h3>5. Service Availability & Warranty</h3>
              <p>
                Caartzee is provided on an “as is” and “as available” basis.
                While we strive for high availability and performance, we do not
                guarantee uninterrupted or error-free operation.
              </p>

              <p>
                We are not responsible for incompatibility with third-party tools,
                integrations, or external systems beyond our control.
              </p>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.6}>
            <div className="space-y-6">
              <h3>6. Account termination and suspension</h3>
              <p>
                We reserve the right to suspend or terminate accounts that:
              </p>

              <ul>
                <li>Violate these Terms</li>
                <li>Engage in fraudulent or illegal activities</li>
                <li>Attempt unauthorized access or security breaches</li>
                <li>Abuse or harass other users or our staff</li>
              </ul>

              <p>
                Termination may result in the loss of access to your data.
                We recommend exporting important data regularly.
              </p>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <div className="space-y-6">
              <h3>7. Privacy policy</h3>
              <p>
                Your privacy is important to us. Caartzee collects and processes
                data in accordance with our Privacy Policy.
              </p>

              <p>
                We do not sell personal data. Data is used solely for providing,
                improving, and securing our services.
              </p>

              <p>
                By using Caartzee, you consent to the collection and processing
                of information as described in our Privacy Policy.
              </p>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.4}>
            <Link href="/privacy-policy" className="btn btn-xl dark:btn-accent hover:btn-primary btn-secondary">
              <span>Read our detailed privacy policy</span>
            </Link>
          </RevealAnimation>
        </article>
      </div>
    </section>
  );
};

export default TermsConditionContent;
