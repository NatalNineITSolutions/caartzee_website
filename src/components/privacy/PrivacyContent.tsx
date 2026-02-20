import privacy from '@public/images/ns-img-391.png';
import Image from 'next/image';
import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';

interface PrivacySection {
  title: string;
  content: string;
}

interface ListSection {
  title: string;
  description?: string;
  items: ListItem[];
}

interface ListItem {
  title?: string;
  content: string;
  link?: {
    url: string;
    text: string;
  };
}

interface FormField {
  id: string;
  name: string;
  label: string;
  placeholder: string;
  type: string;
}

const personalInfoSection: PrivacySection = {
  title: 'Personal information we collect',
  content:
    'When you visit Caartzee, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and cookies installed on your device. Additionally, as you browse the platform, we collect information about the pages you view, features you interact with, referral sources, and how you engage with our services. We call this automatically-collected information <span class="text-secondary dark:text-accent">"Device Information."</span>',
};

const deviceInfoItems: ListItem[] = [
  {
    title: 'Cookies',
    content:
      'Data files placed on your device, often including an anonymous unique identifier. These help us enhance user experience, remember preferences, and improve platform functionality.',
  },
  {
    title: 'Log Files',
    content:
      'Track actions occurring on the platform and collect data including IP address, browser type, internet service provider, referring/exit pages, and timestamps.',
  },
  {
    title: 'Web Beacons, Tags, and Pixels',
    content:
      'Electronic files used to record information about how you browse and interact with Caartzee.',
  },
  {
    title: 'Analytics Tools',
    content:
      'We use analytics services such as Google Analytics to understand user behavior and improve performance.',
  },
];

const orderInfoText =
  'When you create an account, subscribe to a plan, or purchase services through Caartzee, we collect information such as your name, email address, billing address, company details, payment information, and any other relevant data necessary to provide and manage our services.';

const formFields: FormField[] = [
  {
    id: 'name',
    name: 'name',
    label: 'Your name',
    placeholder: 'Enter your name',
    type: 'text',
  },
  {
    id: 'billing-shipping-addresses',
    name: 'billing-shipping-addresses',
    label: 'Billing and shipping addresses',
    placeholder: 'Billing and shipping addresses',
    type: 'text',
  },
  {
    id: 'payment-information',
    name: 'payment-information',
    label: 'Payment information',
    placeholder: 'credit card, PayPal, or bank details',
    type: 'text',
  },
  {
    id: 'email',
    name: 'email',
    label: 'Email address',
    placeholder: 'Enter your email address',
    type: 'email',
  },
];

const useInfoSection: ListSection = {
  title: 'How we use your personal information',
  description: 'We use the collected Personal Information to:',
  items: [
    { content: 'Provide, operate, and maintain the Caartzee platform' },
    { content: 'Process subscriptions, payments, and invoices' },
    { content: 'Communicate with you regarding your account or support requests' },
    { content: 'Improve platform performance and user experience' },
    { content: 'Prevent fraud, abuse, and security threats' },
  ],
};

const deviceInfoUsage: ListItem[] = [
  { content: 'Improve and optimize the platform experience' },
  { content: 'Analyze usage patterns and engagement metrics' },
  { content: 'Enhance security and prevent unauthorized access' },
];

const sharingInfoSection: ListSection = {
  title: 'Sharing your personal information',
  description:
    'We share your Personal Information only with trusted third-party service providers necessary to operate our services:',
  items: [
    {
      content:
        'Analytics providers (e.g., Google Analytics) to understand user interactions and improve performance.',
    },
    {
      content:
        'Payment processors (e.g., Stripe, PayPal) to securely process transactions.',
    },
    {
      content:
        'Cloud hosting and infrastructure providers to deliver and secure our services.',
    },
  ],
};

const rightsSection: ListSection = {
  title: 'Your rights',
  description: 'Depending on your location, you may have the right to:',
  items: [
    { content: 'Access the personal information we hold about you' },
    { content: 'Request correction or deletion of your data' },
    { content: 'Object to certain types of data processing' },
    {
      content:
        'Request a copy of your personal data by contacting us at <a href="mailto:support@caartzee.com" class="text-secondary dark:text-accent">support@caartzee.com</a>',
    },
  ],
};

const simpleSections: PrivacySection[] = [
  {
    title: 'Do not track',
    content:
      'Please note that we do not alter our data collection practices when we detect a "Do Not Track" signal from your browser.',
  },
  {
    title: 'Data retention',
    content:
      'We retain your Personal Information for as long as necessary to provide our services and comply with legal obligations, unless you request deletion.',
  },
  {
    title: 'Minors',
    content:
      'Our platform is not intended for individuals under the age of 18. We do not knowingly collect personal data from minors.',
  },
  {
    title: 'Changes',
    content:
      'We may update this Privacy Policy from time to time to reflect operational, legal, or regulatory changes. Updates will be posted on this page.',
  },
];

const PrivacyContent = () => {
  return (
    <section className="pt-32 pb-[100px] sm:pt-36 md:pt-42 xl:pt-[180px]">
      <div className="main-container">
        <div className="privacy-policy space-y-[75px]">

          <div className="space-y-2">
            <RevealAnimation delay={0.1}>
              <h2>Data protection guidelines</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <p>
                <span className="text-secondary dark:text-accent">Caartzee</span> is a SaaS
                platform operated by
                <span className="text-secondary dark:text-accent">
                  Caartzee Technologies LLC
                </span>.
                We provide digital commerce tools, automation systems, analytics dashboards,
                and integrations that help businesses launch, manage, and scale their online
                operations. We are committed to protecting your privacy and handling your
                information transparently and securely.
              </p>
            </RevealAnimation>
          </div>

          <RevealAnimation delay={0.3}>
            <div className="space-y-2">
              <h4>Caartzee privacy policy</h4>
              <p>
                This Privacy Policy describes how your personal information is collected, used, and shared when you
                visit, subscribe, register, or make a purchase from
                <Link href="https://Caartzee.com" className="text-secondary dark:text-accent">
                  https://Caartzee.com
                </Link>
                (the &quot;Site&quot;).
              </p>
            </div>
          </RevealAnimation>

          <div className="space-y-6">
            <RevealAnimation delay={0.4}>
              <div className="space-y-2">
                <h4>{personalInfoSection.title}</h4>
                <p dangerouslySetInnerHTML={{ __html: personalInfoSection.content }} />
              </div>
            </RevealAnimation>
            <RevealAnimation delay={0.5}>
              <ul className="text-tagline-1 text-secondary/60 dark:text-accent/60 list-inside space-y-3 font-normal">
                {deviceInfoItems.map((item, index) => (
                  <li key={index + 1}>
                    <strong className="text-secondary dark:text-accent font-normal">{item.title} – </strong>
                    <span dangerouslySetInnerHTML={{ __html: item.content }} />
                  </li>
                ))}
              </ul>
            </RevealAnimation>
          </div>

          <div>
            <div className="grid grid-cols-12 gap-y-[100px] lg:gap-[100px]">
              <div className="col-span-12 lg:col-span-6">
                <RevealAnimation delay={0.6}>
                  <div className="mb-[70px] text-left">
                    <p className="max-w-[550px]">{orderInfoText}</p>
                  </div>
                </RevealAnimation>
                <RevealAnimation delay={0.7}>
                  <figure className="w-full max-w-[595px] self-end overflow-hidden rounded-[20px]">
                    <Image src={privacy} className="size-full object-cover" alt="support-contact" />
                  </figure>
                </RevealAnimation>
              </div>

              <RevealAnimation delay={0.8}>
                <div className="col-span-12 lg:col-span-6">
                  <form className="dark:bg-background-8 rounded-[20px] bg-white p-6 lg:p-[42px]">
                    {formFields.map((field, index) => (
                      <fieldset key={field.id} className={`space-y-2 ${index < formFields.length - 1 ? 'mb-8' : ''}`}>
                        <label
                          htmlFor={field.id}
                          className="text-tagline-1 text-secondary dark:text-accent block font-medium">
                          {field.label}
                        </label>
                        <input
                          type={field.type}
                          name={field.name}
                          id={field.id}
                          placeholder={field.placeholder}
                          className="dark:text-accent dark:bg-background-6 border-stroke-3 dark:border-stroke-7 bg-background-1 focus-visible:outline-primary-500 placeholder:text-tagline-1 placeholder:text-secondary/60 dark:placeholder:text-accent/60 shadow-1 block h-12 w-full rounded-full border px-[18px] py-3 font-normal placeholder:font-normal focus-visible:outline"
                        />
                      </fieldset>
                    ))}
                    <fieldset className="mt-4 mb-4 flex items-center gap-2">
                      <label htmlFor="agree-terms" className="flex items-center gap-x-3">
                        <input
                          id="agree-terms"
                          type="checkbox"
                          className="peer sr-only"
                          required
                          aria-label="I agree with the terms and conditions"
                        />
                        <span className="border-stroke-3 dark:border-stroke-7 after:bg-primary-500 peer-checked:border-primary-500 relative size-4 cursor-pointer rounded-full border after:absolute after:top-1/2 after:left-1/2 after:size-2.5 after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-full after:opacity-0 peer-checked:after:opacity-100" />
                      </label>
                      <label
                        htmlFor="agree-terms"
                        className="text-tagline-3 text-secondary/60 dark:text-accent/60 cursor-pointer">
                        I agree with the{' '}
                        <Link href="/terms-conditions" className="text-primary-500 text-tagline-3 underline">
                          terms and conditions
                        </Link>
                      </label>
                    </fieldset>
                    <button
                      type="submit"
                      className="btn dark:btn-accent btn-md btn-secondary hover:btn-primary w-full first-letter:uppercase before:content-none">
                      Submit
                    </button>
                  </form>
                </div>
              </RevealAnimation>
            </div>
          </div>
          {/* Simple Sections */}
          {simpleSections.map((section, index) => (
            <RevealAnimation key={section.title} delay={0.7 + index * 0.1}>
              <div className="space-y-6">
                <div className="space-y-2">
                  <h4>{section.title}</h4>
                  <p dangerouslySetInnerHTML={{ __html: section.content }} />
                </div>
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrivacyContent;