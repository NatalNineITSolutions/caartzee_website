import React from 'react';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';
import { 
  Store, 
  TrendingUp, 
  Boxes, 
  Users, 
  ClipboardList, 
  Zap, 
  Compass 
} from 'lucide-react';

const servicesData = [
  {
    title: "Marketplace Integration",
    subtitle: "Sell Everywhere. Manage Everything.",
    description: "Connect Amazon, Flipkart, and your CaartZee store from one unified dashboard. Sync inventory in real time, manage orders across marketplaces, and prevent overselling with automated stock updates.",
    icon: Store,
    slug: "marketplace-integration"
  },
  {
    title: "Sales & Revenue Analytics",
    subtitle: "Turn Data Into Growth.",
    description: "Get a complete view of your business performance with real-time revenue, sales, and product insights. Track earnings across channels, monitor top-performing products, and make smarter decisions with powerful analytics—all in INR (₹).",
    icon: TrendingUp,
    slug: "sales-and-revenue-analytics"
  },
  {
    title: "Smart Inventory Management",
    subtitle: "Stay in Stock. Stay in Control.",
    description: "Monitor inventory across every sales channel from a single dashboard. Receive low-stock alerts, automate inventory updates, and ensure smooth order fulfillment without manual effort.",
    icon: Boxes,
    slug: "smart-inventory-management"
  },
  {
    title: "Customer Intelligence",
    subtitle: "Know Your Customers Better.",
    description: "Track customer behavior, purchase patterns, and engagement across every touchpoint. Build stronger relationships with data-driven insights and personalized experiences.",
    icon: Users,
    slug: "customer-intelligence"
  },
  {
    title: "Order Management",
    subtitle: "Every Order. One Place.",
    description: "Manage orders from Amazon, Flipkart, Shopify, and your CaartZee store in a centralized workspace. Process faster, reduce errors, and deliver a seamless customer experience.",
    icon: ClipboardList,
    slug: "order-management"
  },
  {
    title: "Automation Engine",
    subtitle: "Work Less. Sell More.",
    description: "Automate repetitive tasks, customer updates, inventory sync, and order workflows. Save time, reduce operational overhead, and focus on growing your business.",
    icon: Zap,
    slug: "automation-engine"
  },
  // {
  //   title: "Sales Navigator",
  //   subtitle: "Discover Opportunities. Drive Revenue.",
  //   description: "Identify growth opportunities, track sales performance, and uncover actionable insights across every channel. Stay ahead of trends, optimize your strategy, and scale your business with confidence.",
  //   icon: Compass,
  //   slug: "sales-navigator-feature"
  // }
];

const Services = () => {
  return (
    <section className="dark:bg-background-6 bg-white pt-[50px] pb-[100px] md:pt-[85px] xl:pt-[100px] xl:pb-[200px]">
      <div className="main-container">
        <div className="space-y-[40px] md:space-y-[50px] lg:space-y-[60px] xl:space-y-[70px]">
          {/* service section heading  */}
          <div className="mx-auto max-w-[810px] space-y-5 text-center lg:w-full">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-green mb-3 md:mb-4 lg:mb-5">Our Services</span>
            </RevealAnimation>
            <div className="space-y-3">
              <RevealAnimation delay={0.2}>
                <h2>Smarter and powerful E-Commerce Solutions</h2>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <p className="mx-auto max-w-[582px] sm:w-full">
                  Manage products, connect marketplaces, and enhance listings with AI—all from one powerful platform built for modern sellers.
                </p>
              </RevealAnimation>
            </div>
          </div>
          {/* service cards  */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {servicesData.map((service, idx) => {
              const Icon = service.icon;
              return (
                <RevealAnimation key={service.slug} delay={0.4 + idx * 0.1}>
                  <article className="h-full w-full max-w-[403px]">
                    <div className="bg-background-2 dark:bg-background-5 flex h-full w-full flex-col items-center gap-6 rounded-[20px] px-6 py-8 transition-transform duration-500 ease-in-out hover:translate-y-[-10px]">
                      {/* logo  */}
                      <Icon className="text-secondary dark:text-accent w-14 h-14 shrink-0" />
                      {/* heading  */}
                      <div className="space-y-2 text-center flex-grow flex flex-col">
                        <h3 className="text-heading-5">{service.title}</h3>
                        <p className="font-bold text-primary-500 dark:text-accent">{service.subtitle}</p>
                        <p className="mt-2 text-secondary/70 dark:text-white/70 flex-grow">{service.description}</p>
                      </div>
                      {/* btn  */}
                      <div className="mt-auto shrink-0">
                        <LinkButton
                          href={`/sales-navigator/${service.slug}`}
                          className="btn btn-md btn-white-v2 hover:btn-secondary dark:btn-transparent dark:hover:btn-accent"
                          rel="noopener noreferrer">
                          Read more
                        </LinkButton>
                      </div>
                    </div>
                  </article>
                </RevealAnimation>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;