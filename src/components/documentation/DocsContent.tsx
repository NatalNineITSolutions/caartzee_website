import gradient27 from '@public/images/ns-img-515.png';
import Image from 'next/image';
import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';

const DocsContent = () => {
  return (
    <section className="pt-32 pb-[200px] sm:pt-36 md:pt-42 xl:pt-[180px]">
      <div className="main-container mb-[70px]">
        <RevealAnimation delay={0.1}>
          <div className="space-y-3 text-center">
            <h2>Welcome to the CaartZee Documentation</h2>
            <p>Find everything you need to set up, customize, and master your CaartZee platform.
              This guide covers on boarding, settings, billing, analytics, troubleshooting, and more
            </p>
          </div>
        </RevealAnimation>
      </div>
      <div className="main-container">
        <div className="documentation space-y-[70px]">
          <div className="space-y-8">
            <RevealAnimation delay={0.3}>
              <h4>Documentation sections (main categories)</h4>
            </RevealAnimation>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <RevealAnimation delay={0.4}>
                <div className="bg-background-2 dark:bg-background-6 relative z-10 space-y-3 overflow-hidden rounded-[20px] px-[42px] py-14">
                  <div className="md:[1060px] pointer-events-none absolute -top-[110%] -right-[107%] -z-100 size-[650px] -rotate-[138deg] -skew-[10deg] select-none sm:-top-[105%] sm:-right-[65%] md:-top-[112%] md:-right-[99%] lg:-top-[108%] lg:-right-[79%] xl:-top-[107%] xl:-right-[62%]">
                    <Image src={gradient27} alt="gradient" />
                  </div>
                  <h5>Getting started</h5>
                  <ul className="text-tagline-1 text-secondary/60 dark:text-accent/60 list-inside list-disc space-y-3 font-normal">
                    <li>
                      <Link
                        href="#"
                        className="hover:text-secondary dark:hover:text-accent transition-colors duration-500 ease-in-out">
                        What is CaartZee?
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="hover:text-secondary dark:hover:text-accent transition-colors duration-500 ease-in-out">
                        System requirements
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="hover:text-secondary dark:hover:text-accent transition-colors duration-500 ease-in-out">
                        Creating your account
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="hover:text-secondary dark:hover:text-accent transition-colors duration-500 ease-in-out">
                        Platform walkthrough
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="hover:text-secondary dark:hover:text-accent transition-colors duration-500 ease-in-out">
                        First steps after signing up
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="hover:text-secondary dark:hover:text-accent transition-colors duration-500 ease-in-out">
                       Understanding your workspace
                      </Link>
                    </li>
                  </ul>
                </div>
              </RevealAnimation>
              <RevealAnimation delay={0.5}>
                <div className="bg-background-2 dark:bg-background-6 relative z-10 space-y-3 overflow-hidden rounded-[20px] px-[42px] py-14">
                  <div className="md:[1060px] pointer-events-none absolute -top-[110%] -right-[107%] -z-100 size-[650px] -rotate-[138deg] -skew-[10deg] select-none sm:-top-[105%] sm:-right-[65%] md:-top-[112%] md:-right-[99%] lg:-top-[108%] lg:-right-[79%] xl:-top-[107%] xl:-right-[62%]">
                    <Image src={gradient27} alt="gradient" />
                  </div>
                  <h5>User management</h5>
                  <ul className="text-tagline-1 text-secondary/60 dark:text-accent/60 list-inside list-disc space-y-3 font-normal">
                    <li>
                      <Link
                        href="#"
                        className="hover:text-secondary dark:hover:text-accent transition-colors duration-500 ease-in-out">
                        Adding and removing users
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="hover:text-secondary dark:hover:text-accent transition-colors duration-500 ease-in-out">
                        Role-based access control (RBAC)
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="hover:text-secondary dark:hover:text-accent transition-colors duration-500 ease-in-out">
                        Configuring permissions
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="hover:text-secondary dark:hover:text-accent transition-colors duration-500 ease-in-out">
                        Managing staff, teams & branches
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="hover:text-secondary dark:hover:text-accent transition-colors duration-500 ease-in-out">
                        Session and activity logs
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="hover:text-secondary dark:hover:text-accent transition-colors duration-500 ease-in-out">
                        Group-level access settings
                      </Link>
                    </li>
                  </ul>
                </div>
              </RevealAnimation>
            </div>
          </div>
          <RevealAnimation delay={0.6}>
            <div className="space-y-6">
              <div className="space-y-2">
                <h4>Billing and subscription</h4>
                <p>Handle your billing, plans, usage, and invoices with ease.</p>
              </div>
              <ul className="text-tagline-1 text-secondary/60 dark:text-accent/60 list-inside space-y-3 font-normal">
                <li>
                  <Link
                    href="#"
                    className="hover:text-secondary dark:hover:text-accent transition-colors duration-500 ease-in-out">
                    Choosing or upgrading your plan
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-secondary dark:hover:text-accent transition-colors duration-500 ease-in-out">
                    Managing subscriptions
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-secondary dark:hover:text-accent transition-colors duration-500 ease-in-out">
                    Managing subscriptions
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-secondary dark:hover:text-accent transition-colors duration-500 ease-in-out">
                    Viewing and downloading invoices
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-secondary dark:hover:text-accent transition-colors duration-500 ease-in-out">
                    Cancelling or switching plans
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-secondary dark:hover:text-accent transition-colors duration-500 ease-in-out">
                    Understanding usage limits
                  </Link>
                </li>
              </ul>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.7}>
            <div className="space-y-6">
              <div className="space-y-2">
                <h4>Settings &amp; customization</h4>
                <p>Tailor CaartZee to your business needs.</p>
              </div>
              <ul className="text-tagline-1 text-secondary/60 dark:text-accent/60 list-inside space-y-3 font-normal">
                <li>
                  <Link
                    href="#"
                    className="hover:text-secondary dark:hover:text-accent transition-colors duration-500 ease-in-out">
                    General platform settings
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-secondary dark:hover:text-accent transition-colors duration-500 ease-in-out">
                    Customizing branding & themes
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-secondary dark:hover:text-accent transition-colors duration-500 ease-in-out">
                    Notification and alert settings
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-secondary dark:hover:text-accent transition-colors duration-500 ease-in-out">
                    Language & localization options
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-secondary dark:hover:text-accent transition-colors duration-500 ease-in-out">
                    	Setting up tax rules & currency
                  </Link>
                  <Link
                    href="#"
                    className="hover:text-secondary dark:hover:text-accent transition-colors duration-500 ease-in-out">
                    		Custom fields, tags, and filters
                  </Link>
                </li>
              </ul>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.8}>
            <div className="space-y-6">
              <div className="space-y-2">
                <h4>Reporting and analytics</h4>
                <p>Gain insights that drive smarter decisions.</p>
              </div>
              <ul className="text-tagline-1 text-secondary/60 dark:text-accent/60 list-inside space-y-3 font-normal">
                <li>
                  <Link
                    href="#"
                    className="hover:text-secondary dark:hover:text-accent transition-colors duration-500 ease-in-out">
                    Introduction to analytics
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-secondary dark:hover:text-accent transition-colors duration-500 ease-in-out">
                   	Understanding your dashboard metrics
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-secondary dark:hover:text-accent transition-colors duration-500 ease-in-out">
                    Sales, inventory & finance reports
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-secondary dark:hover:text-accent transition-colors duration-500 ease-in-out">
                    Exporting and scheduling reports
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-secondary dark:hover:text-accent transition-colors duration-500 ease-in-out">
                    	Creating custom reports
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-secondary dark:hover:text-accent transition-colors duration-500 ease-in-out">
                    	KPI and performance metric guides
                  </Link>
                </li>
              </ul>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.9}>
            <div className="space-y-6">
              <div className="space-y-2">
                <h4>Troubleshooting &amp; FAQs</h4>
                <p>Quick solutions to common issues.</p>
              </div>
              <ul className="text-tagline-1 text-secondary/60 dark:text-accent/60 list-inside space-y-3 font-normal">
                <li>
                  <Link
                    href="#"
                    className="hover:text-secondary dark:hover:text-accent transition-colors duration-500 ease-in-out">
                    Login problems
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-secondary dark:hover:text-accent transition-colors duration-500 ease-in-out">
                    Data sync or update issues
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-secondary dark:hover:text-accent transition-colors duration-500 ease-in-out">
                    Connectivity or speed issues
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-secondary dark:hover:text-accent transition-colors duration-500 ease-in-out">
                    Marketplace/API integration issues
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-secondary dark:hover:text-accent transition-colors duration-500 ease-in-out">
                    	Error messages & how to fix them
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-secondary dark:hover:text-accent transition-colors duration-500 ease-in-out">
                    	General FAQs
                  </Link>
                </li>
              </ul>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default DocsContent;
