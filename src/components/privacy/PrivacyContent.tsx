import privacy from '@public/images/ns-img-391.png';
import Image from 'next/image';
import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';
import CTA from '@/components/shared/cta/CTA';

const PrivacyContent = () => {
  return (
    <section className="pt-32 pb-[100px] sm:pt-36 md:pt-42 xl:pt-[180px]">
      <div className="main-container">
        <div className="privacy-policy space-y-[75px]">

          <div className="space-y-4">
            <RevealAnimation delay={0.1}>
              <h2>Privacy policy</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <div className="space-y-4 font-normal text-secondary/60 dark:text-accent/60">
                <p>
                  <span className="text-secondary dark:text-accent font-medium">Welcome to Caartzee website</span> (Caartzee or we). We value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit or use the{' '}
                  <span className="text-secondary dark:text-accent font-medium">Caartzee eCommerce platform, website, and services.</span>
                </p>
                <p>
                  Caartzee provides tools and services that help businesses <span className="text-secondary dark:text-accent font-medium">create, manage, and scale their online stores,</span> including automation tools, analytics dashboards, and integrations.
                </p>
                <p>
                  By accessing or using Caartzee’s website or services, you agree to the terms outlined in this Privacy Policy.
                </p>
              </div>
            </RevealAnimation>
          </div>


          <div className="space-y-4">
            <RevealAnimation delay={0.3}>
              <div className="space-y-4">
                <h4>Table of Contents</h4>
                <p className="font-normal text-secondary/60 dark:text-accent/60">Our Privacy Policy includes the following sections:</p>
                <div className="space-y-6 mt-4">
                  {[
                    { num: '1', title: 'Information We Collect', desc: 'We may collect several types of information when you interact with the Caartzee platform.' },
                    { num: '2', title: 'How We Use Your Information', desc: 'We may use the information we collect Provide and maintain the Caartzee platform.' },
                    { num: '3', title: 'Sharing of Information', desc: 'Caartzee does not sell or rent your personal information to third parties.' },
                    { num: '4', title: 'Cookies and Tracking Technologies', desc: 'Caartzee uses cookies and similar technologies to improve the user experience and analyze platform performance.' },
                    { num: '5', title: 'Data Security', desc: 'We implement industry-standard security measures to protect your information from unauthorized access, misuse, or disclosure.' },
                    { num: '6', title: 'Your Rights', desc: 'You have certain rights regarding your personal data, including Access and Update.' },
                    { num: '7', title: 'Third-Party Services', desc: 'Disclaimer about external links and their independent privacy policies.' },
                    { num: '8', title: 'Changes to This Privacy Policy', desc: 'How we notify you about updates to our privacy practices.' },
                    { num: '9', title: 'Contact Us', desc: 'get in touch for questions or concerns about this policy.' },
                  ].map((item) => (
                    <div key={item.num} className="font-normal text-secondary/60 dark:text-accent/60">
                      <span className="text-secondary dark:text-accent font-medium">{item.num}. {item.title}</span>
                      <p>{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </RevealAnimation>
          </div>


          <div className="space-y-6">
            <RevealAnimation delay={0.4}>
              <h3>Information We Collect</h3>
            </RevealAnimation>
            <RevealAnimation delay={0.5}>
              <ul className="space-y-3 font-normal text-secondary/60 dark:text-accent/60">
                <li>
                  <span className="text-secondary dark:text-accent font-medium">Personal Information – </span>
                  When you create an account, subscribe to a plan, or purchase services, we may collect: Full name, Email address, Phone number, Billing and shipping address, Payment information, Account login credentials.
                </li>
                <li>
                  <span className="text-secondary dark:text-accent font-medium">Non-Personal Information – </span>
                  We may automatically collect certain technical information such as Browser type and version, Device information, IP address, Time zone, Pages visited on the website, Referring websites or search queries.
                </li>
                <li>
                  <span className="text-secondary dark:text-accent font-medium">Store and Platform Data – </span>
                  When using Caartzee to run an online store, we may collect operational data such as Store settings and configurations, Product listings and store content, Order and transaction data, Customer interaction data within the platform.
                </li>
              </ul>
            </RevealAnimation>
          </div>


          <div className="space-y-6">
            <RevealAnimation delay={0.6}>
              <div className="space-y-4">
                <h3>How We Use Your Information</h3>
                <p className="font-normal text-secondary/60 dark:text-accent/60">We may use the information we collect for the following purposes:</p>
                <ul className="space-y-2 mt-4 font-normal text-secondary/60 dark:text-accent/60">
                  {[
                    'Provide and maintain the Caartzee platform',
                    'Create and manage user accounts',
                    'Process payments and subscriptions',
                    'Enable eCommerce store management tools',
                    'Improve platform functionality and user experience',
                    'Provide customer support and respond to inquiries',
                    'Send service updates, notifications, and important information',
                    'Prevent fraud and unauthorized activities',
                  ].map((item, i) => (
                    <li key={i}> {item}</li>
                  ))}
                </ul>
              </div>
            </RevealAnimation>
          </div>


          <div className="space-y-6">
            <RevealAnimation delay={0.7}>
              <div className="space-y-4">
                <h3>Sharing of Information</h3>
                <p className="font-normal text-secondary/60 dark:text-accent/60">Caartzee does not sell or rent your personal information to third parties.</p>
                <ul className="space-y-3 mt-4 font-normal text-secondary/60 dark:text-accent/60">
                  <li>
                    <span className="text-secondary dark:text-accent font-medium">Service Providers: </span>
                    We may share information with trusted third-party vendors who help operate our services.
                  </li>
                  <li>
                    <span className="text-secondary dark:text-accent font-medium">Legal Authorities: </span>
                    Comply with legal obligations, Respond to lawful requests from authorities, Protect the rights, safety, and security of Caartzee or its users.
                  </li>
                </ul>
              </div>
            </RevealAnimation>
          </div>


          <div className="space-y-6">
            <RevealAnimation delay={0.8}>
              <div className="space-y-4">
                <h3>Cookies and Tracking Technologies</h3>
                <p className="font-normal text-secondary/60 dark:text-accent/60">Caartzee uses cookies and similar technologies to improve the user experience and analyze platform performance. Cookies help us:</p>
                <ul className="space-y-2 mt-4 font-normal text-secondary/60 dark:text-accent/60">
                  <li> Remember login sessions and user preferences</li>
                  <li> Understand how users interact with the platform</li>
                  <li> Improve website performance and functionality</li>
                </ul>
              </div>
            </RevealAnimation>
          </div>


          <div className="space-y-6">
            <RevealAnimation delay={0.9}>
              <div className="space-y-4">
                <h3>Data Security</h3>
                <p className="font-normal text-secondary/60 dark:text-accent/60">We implement industry-standard security measures to protect your information from unauthorized access, misuse, or disclosure.</p>
              </div>
            </RevealAnimation>
          </div>


          <div className="space-y-6">
            <RevealAnimation delay={1.0}>
              <div className="space-y-4">
                <h3>Your Rights</h3>
                <ul className="space-y-4 mt-4 font-normal text-secondary/60 dark:text-accent/60">
                  <li>
                    <span className="text-secondary dark:text-accent font-medium">Access and Update: </span>
                    You may access and update your account information through your Caartzee dashboard.
                  </li>
                  <li>
                    <span className="text-secondary dark:text-accent font-medium">Opt-Out: </span>
                    You may opt out of receiving marketing emails or promotional communications.
                  </li>
                  <li>
                    <span className="text-secondary dark:text-accent font-medium">Data Deletion: </span>
                    You may request deletion of your personal information, subject to legal and contractual requirements.
                  </li>
                </ul>
              </div>
            </RevealAnimation>
          </div>

          
          <div className="space-y-6">
            <RevealAnimation delay={1.1}>
              <div className="space-y-4">
                <h3>Third-Party Services</h3>
                <p className="font-normal text-secondary/60 dark:text-accent/60">The Caartzee platform may integrate with third-party services such as payment gateways, analytics tools, or external applications.</p>
                <p className="font-normal text-secondary/60 dark:text-accent/60">Caartzee is not responsible for the privacy practices of these third-party services. We encourage users to review their respective privacy policies.</p>
              </div>
            </RevealAnimation>
          </div>

          
          <div className="space-y-6">
            <RevealAnimation delay={1.2}>
              <div className="space-y-4">
                <h3>Changes to This Privacy Policy</h3>
                <p className="font-normal text-secondary/60 dark:text-accent/60">We may update this Privacy Policy from time to time to reflect changes in our services, legal requirements, or operational practices.</p>
                <p className="font-normal text-secondary/60 dark:text-accent/60">Any updates will be posted on this page, and we encourage users to review this policy periodically.</p>
              </div>
            </RevealAnimation>
          </div>

          
          <div className="space-y-6">
            <RevealAnimation delay={1.3}>
              <div className="space-y-6">
                <h3>Contact Us</h3>
                <div className="space-y-4 font-normal text-secondary/60 dark:text-accent/60">
                  <p>If you have any questions about this Privacy Policy or how your information is handled, please contact us</p>
                  <div className="space-y-2">
                    <p>
                      <span className="text-secondary dark:text-accent font-medium">Phone: </span>
                      <Link href="tel:+919655804621" className="hover:text-primary-500">+919655804621</Link>
                    </p>
                    <p>
                      <span className="text-secondary dark:text-accent font-medium">Email: </span>
                      <Link href="mailto:info@natalnine.com" className="hover:text-primary-500">info@natalnine.com</Link>
                    </p>
                    <p>
                      <span className="text-secondary dark:text-accent font-medium">Website: </span>
                      <Link href="https://caartzee.com" className="hover:text-primary-500" target="_blank" rel="noopener noreferrer">https://caartzee.com</Link>
                    </p>
                  </div>
                </div>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </div>


    </section>
  );
};

export default PrivacyContent;
