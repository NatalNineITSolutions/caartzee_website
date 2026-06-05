import React from 'react';
import LinkButton from '../ui/button/LinkButton';

export const OrderManagementContent = () => {
  return (
    <div className="space-y-8 text-secondary dark:text-white/80 pb-6 text-left">
      {/* Hero Section */}
      <div className="space-y-6 text-center max-w-3xl mx-auto flex flex-col items-center pt-4 pb-8">
        <h1 className="text-heading-3 md:text-heading-2 font-black tracking-tight text-secondary dark:text-white">Every Order. One Place.</h1>
        <p className="text-lg md:text-xl leading-relaxed text-secondary/70 dark:text-white/70">
          Manage orders from Amazon, Flipkart, Shopify, and your CaartZee store in a centralized workspace.
        </p>
        <p className="text-lg md:text-xl leading-relaxed text-secondary/70 dark:text-white/70">
          Process orders faster, reduce operational complexity, and deliver a seamless customer experience from purchase to delivery.
        </p>
        <p className="text-lg md:text-xl font-bold text-primary-500 mt-2">
          One dashboard. Every order. Complete visibility.
        </p>
        <div className="pt-8">
          <LinkButton href="/contact-us" className="inline-flex h-14 items-center justify-center rounded-full bg-primary-500 px-10 text-base font-bold text-white transition-all hover:bg-primary-600 hover:shadow-lg hover:shadow-primary-500/30">
            Manage Orders Smarter
          </LinkButton>
        </div>
      </div>

      <hr className="border-stroke-1 dark:border-white/10" />

      {/* Your Business Moves Fast */}
      <div className="space-y-4">
        <h4 className="text-heading-5 font-black tracking-tight text-secondary dark:text-white">Your Business Moves Fast. Your Orders Should Too.</h4>
        <div className="space-y-4 text-lg leading-relaxed text-secondary/70 dark:text-white/70">
          <p>As your business grows, orders start coming from everywhere.</p>
          <p>Amazon. Flipkart. Your online store. WhatsApp.</p>
          <p>Managing each channel separately slows your team down and increases the risk of errors.</p>
          <p>CaartZee brings every order into one unified workspace so you can stay organized, move faster, and focus on growth.</p>
        </div>
      </div>

      <hr className="border-stroke-1 dark:border-white/10" />

      {/* One Dashboard for Every Sale */}
      <div className="space-y-6">
        <h4 className="text-heading-5 font-black tracking-tight text-secondary dark:text-white">One Dashboard for Every Sale</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="bg-black/5 dark:bg-white/5 p-6 rounded-2xl">
            <p className="leading-relaxed text-secondary/70 dark:text-white/70 mb-3">Stop switching between multiple seller panels and platforms.</p>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70">View, manage, and track orders from all your sales channels in one place.</p>
          </div>
          <div className="bg-black/5 dark:bg-white/5 p-6 rounded-2xl">
            <p className="leading-relaxed text-secondary/70 dark:text-white/70 mb-3">Whether you're processing ten orders a day or ten thousand, everything stays connected and easy to manage.</p>
            <p className="font-bold text-secondary/90 dark:text-white/90">Because your operations should grow with your business—not against it.</p>
          </div>
        </div>
      </div>

      <hr className="border-stroke-1 dark:border-white/10" />

      {/* From Purchase to Delivery & Less Manual Work */}
      <div className="space-y-6">
        <h4 className="text-heading-5 font-black tracking-tight text-secondary dark:text-white">Efficient Workflows</h4>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="border border-stroke-1 dark:border-white/10 p-6 rounded-2xl">
            <h5 className="text-heading-6 font-bold text-secondary dark:text-white mb-2">From Purchase to Delivery</h5>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70 mb-3">Every order has a journey. From the moment a customer places an order to the moment it reaches their doorstep, CaartZee helps you manage every step with confidence.</p>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70 mb-3">Track order status, fulfillment progress, shipping updates, and customer communications from a single dashboard.</p>
            <ul className="list-disc list-inside space-y-1 ml-2 font-bold text-secondary/90 dark:text-white/90">
              <li>No blind spots.</li>
              <li>No missed updates.</li>
            </ul>
          </div>

          <div className="border border-stroke-1 dark:border-white/10 p-6 rounded-2xl">
            <h5 className="text-heading-6 font-bold text-secondary dark:text-white mb-2">Less Manual Work. More Business Growth.</h5>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70 mb-3">Order management shouldn't consume your day.</p>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70 mb-3">Automate routine workflows, reduce repetitive tasks, and eliminate manual updates.</p>
            <p className="font-medium text-secondary/90 dark:text-white/90">Spend less time managing operations and more time improving customer experiences, launching products, and growing revenue.</p>
          </div>
        </div>
      </div>

      <hr className="border-stroke-1 dark:border-white/10" />

      {/* Reduce Errors & Keep Customers Informed */}
      <div className="space-y-6">
        <h4 className="text-heading-5 font-black tracking-tight text-secondary dark:text-white">Accuracy & Transparency</h4>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="bg-black/5 dark:bg-white/5 p-6 rounded-2xl">
            <h5 className="text-heading-6 font-bold text-secondary dark:text-white mb-2">Reduce Errors Before They Happen</h5>
            <p className="font-bold text-primary-500 mb-2">Mistakes cost time, money, and customer trust.</p>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70 mb-3">CaartZee helps keep order information accurate across all channels, reducing fulfillment issues, duplicate processing, and operational confusion.</p>
            <p className="font-medium text-secondary/90 dark:text-white/90">Because every order matters. And every customer remembers their experience.</p>
          </div>

          <div className="bg-black/5 dark:bg-white/5 p-6 rounded-2xl">
            <h5 className="text-heading-6 font-bold text-secondary dark:text-white mb-2">Keep Customers Informed</h5>
            <p className="font-bold text-primary-500 mb-2">Customers want transparency.</p>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70 mb-3">Provide accurate order updates and real-time status visibility throughout the fulfillment process.</p>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70 mb-3">When customers know what's happening, support tickets decrease and satisfaction increases.</p>
            <p className="font-medium text-secondary/90 dark:text-white/90">A better customer experience starts with better order management.</p>
          </div>
        </div>
      </div>

      <hr className="border-stroke-1 dark:border-white/10" />

      {/* Built for Multi-Channel & Scale */}
      <div className="space-y-6">
        <h4 className="text-heading-5 font-black tracking-tight text-secondary dark:text-white">Scalable Infrastructure</h4>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="border border-stroke-1 dark:border-white/10 p-5 rounded-2xl">
            <h5 className="text-heading-6 font-bold text-secondary dark:text-white mb-2">Built for Multi-Channel Commerce</h5>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70 mb-3">Modern businesses sell everywhere. Your order management system should too.</p>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70">Whether you're selling through marketplaces, your online store, or social commerce channels, CaartZee keeps everything synchronized so your team always works from the same source of truth.</p>
          </div>

          <div className="border border-stroke-1 dark:border-white/10 p-5 rounded-2xl">
            <h5 className="text-heading-6 font-bold text-secondary dark:text-white mb-2">Scale Without the Chaos</h5>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70 mb-3">Growth is exciting. Managing that growth shouldn't be stressful.</p>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70 mb-3">CaartZee helps you handle increasing order volumes without increasing complexity, allowing your operations to stay efficient as your business expands.</p>
            <p className="font-medium text-secondary/90 dark:text-white/90">From startup to enterprise, your workflow stays simple.</p>
          </div>
        </div>
      </div>

      <hr className="border-stroke-1 dark:border-white/10" />

      {/* See the Bigger Picture */}
      <div className="space-y-6">
        <h4 className="text-heading-5 font-black tracking-tight text-secondary dark:text-white">See the Bigger Picture</h4>
        <p className="font-bold text-primary-500 mb-2">Orders are more than transactions. They're opportunities to understand customer demand, improve operations, and drive business growth.</p>
        <p className="leading-relaxed text-secondary/70 dark:text-white/70">Track fulfillment performance, order trends, and operational efficiency with insights that help you make smarter decisions every day.</p>
      </div>

      <hr className="border-stroke-1 dark:border-white/10" />

      {/* Built for Businesses That Sell Everywhere */}
      <div className="space-y-6">
        <h4 className="text-heading-5 font-black tracking-tight text-secondary dark:text-white">Built for Businesses That Sell Everywhere</h4>
        <p className="leading-relaxed text-secondary/70 dark:text-white/70 mb-3">Whether you're an ecommerce brand, marketplace seller, retailer, or fast-growing D2C business, CaartZee helps you manage orders efficiently without sacrificing customer experience.</p>
        <p className="font-bold text-secondary/90 dark:text-white/90">Because great businesses aren't built by processing orders. They're built by delivering great experiences.</p>
      </div>

      <hr className="border-stroke-1 dark:border-white/10" />

      {/* Ready to Grow */}
      <div className="bg-primary-500/10 p-8 rounded-3xl text-center space-y-5 border border-primary-500/20">
        <h4 className="text-heading-4 font-black tracking-tight text-secondary dark:text-white">Better Order Management. Better Customer Experience.</h4>
        <p className="leading-relaxed text-secondary/70 dark:text-white/70 max-w-xl mx-auto">Simplify operations, improve fulfillment, and keep every order moving smoothly from purchase to delivery.</p>
        <p className="font-black text-primary-500 text-lg uppercase tracking-wider">Stay Organized. Move Faster. Grow Confidently.</p>
        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <LinkButton href="/contact-us" className="inline-flex h-14 items-center justify-center rounded-full bg-primary-500 px-8 text-base font-bold text-white transition-all hover:bg-primary-600 hover:shadow-lg hover:shadow-primary-500/30">
            Get Started
          </LinkButton>
          <LinkButton href="/contact-us" className="inline-flex h-14 items-center justify-center rounded-full border-2 border-primary-500 text-primary-500 px-8 text-base font-bold transition-all hover:bg-primary-500 hover:text-white hover:shadow-lg hover:shadow-primary-500/30">
            Schedule a Demo
          </LinkButton>
        </div>
      </div>

    </div>
  );
};
