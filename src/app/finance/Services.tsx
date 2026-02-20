import RevealAnimation from '@/components/animation/RevealAnimation';
import LinkButton from '@/components/ui/button/LinkButton';
import { IService } from '@/interface';
const services: Partial<IService>[] = [
  { slug: 'gst-filing', title: 'Automated GST Filing', description: 'Seamlessly file GSTR-1, GSTR-3B, and reconcile GSTR-2A/2B with zero manual errors.', icon: 'ns-shape-2' },
  { slug: 'e-invoicing', title: 'One-Click E-Invoicing', description: 'Generate compliant e-invoices and e-way bills directly from your accounting records instantly.', icon: 'ns-shape-3' },
  { slug: 'tax-reconciliation', title: 'Smart Tax Reconciliation', description: 'Automatically match purchase registers with vendor filings to claim 100% of your Input Tax Credit (ITC).', icon: 'ns-shape-4' },
  { slug: 'financial-reporting', title: 'Real-Time Financial Reports', description: 'Access live dashboards for cash flow, profitability, and tax liabilities in one unified view.', icon: 'ns-shape-5' },
  { slug: 'expense-management', title: 'Expense & Vendor Management', description: 'Automate expense categorization and vendor payments, keeping your finances organized and GST-ready.', icon: 'ns-shape-6' },
  { slug: 'audit-trail', title: 'Comprehensive Audit Trails', description: 'Maintain a legally compliant, time-stamped audit trail for all financial transactions and changes.', icon: 'ns-shape-7' }
];

const Services = () => {
  return (
    <section className="dark:bg-background-6 py-28 lg:py-[156px]">
      <div className="main-container">
        {/* Service Header Section*/}
        <div className="mx-auto mb-[70px] max-w-[880px] text-center">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-yellow-v2 mb-5">Our Features</span>
          </RevealAnimation>

          <RevealAnimation delay={0.2}>
            <h2 className="mb-3">Everything you need for seamless GST & finance automation.</h2>
          </RevealAnimation>

          <RevealAnimation delay={0.3}>
            <p className="mx-auto mb-14 lg:max-w-[600px]">
              Automate routine financial tasks, minimize human errors, and ensure 100% tax compliance with our intelligent software.
            </p>
          </RevealAnimation>

          <RevealAnimation delay={0.4}>
            <div>
              <LinkButton
                href="/features"
                className="btn btn-primary hover:btn-secondary dark:hover:btn-white btn-md text-tagline-2 mx-auto w-[90%] md:mx-0 md:w-auto">
                Explore all features
              </LinkButton>
            </div>
          </RevealAnimation>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <RevealAnimation key={service.slug} delay={0.5 + index * 0.1}>
              <div>
                <div className="bg-background-2 dark:bg-background-5 flex flex-col items-center justify-center gap-6 rounded-[20px] px-6 py-8 transition-transform duration-500 ease-in-out hover:translate-y-[-10px]">
                  <div>
                    <span className={`${service.icon} text-secondary dark:text-accent text-[54px]`}> </span>
                  </div>
                  <div className="text-center">
                    <h5 className="mb-2 line-clamp-1">{service.title}</h5>
                    <p className="text-secondary/60 dark:text-accent/60 line-clamp-3">{service.description}</p>
                  </div>
                  <LinkButton
                    href={`/services/${service.slug}`}
                    className="btn btn-white hover:btn-secondary btn-md dark:btn-transparent dark:hover:btn-accent mx-auto w-[90%] md:mx-0 md:w-auto">
                    Read More
                  </LinkButton>
                </div>
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
