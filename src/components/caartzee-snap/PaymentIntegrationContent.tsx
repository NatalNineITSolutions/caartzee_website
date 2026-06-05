import React from 'react';
import LinkButton from '../ui/button/LinkButton';

export const PaymentIntegrationContent = () => {
  return (
    <div className="space-y-8 text-secondary dark:text-white/80 pb-6 text-left">
      {/* Hero Section */}
      <div className="space-y-6 text-center max-w-3xl mx-auto flex flex-col items-center pt-4 pb-8">
        <h1 className="text-heading-3 md:text-heading-2 font-black tracking-tight text-secondary dark:text-white">Get Paid Inside the Conversation</h1>
        <p className="text-lg md:text-xl font-bold text-primary-500 mt-2">
          Faster Checkouts. More Conversions.
        </p>
        <p className="text-lg md:text-xl leading-relaxed text-secondary/70 dark:text-white/70">
          Customers shouldn't have to leave a conversation to complete a purchase.
        </p>
        <p className="text-lg md:text-xl leading-relaxed text-secondary/70 dark:text-white/70">
          Share secure payment links directly through WhatsApp and let customers pay instantly, reducing checkout friction and increasing conversions.
        </p>
        <p className="text-lg md:text-xl font-bold text-secondary/90 dark:text-white/90">
          From conversation to payment in a few taps.
        </p>
        <div className="pt-8">
          <LinkButton href="/contact-us" className="inline-flex h-14 items-center justify-center rounded-full bg-primary-500 px-10 text-base font-bold text-white transition-all hover:bg-primary-600 hover:shadow-lg hover:shadow-primary-500/30">
            Start Accepting Payments
          </LinkButton>
        </div>
      </div>

      <hr className="border-stroke-1 dark:border-white/10" />

      {/* The Sale Is Won or Lost at Checkout */}
      <div className="space-y-4">
        <h4 className="text-heading-5 font-black tracking-tight text-secondary dark:text-white">The Sale Is Won or Lost at Checkout</h4>
        <div className="space-y-4 text-lg leading-relaxed text-secondary/70 dark:text-white/70">
          <p>Customers discover a product. They ask questions. They compare options. They decide to buy.</p>
          <p className="font-bold text-secondary/90 dark:text-white/90">Then comes the most important moment. Payment.</p>
          <p>Every extra step increases the chance of losing the sale.</p>
          <p className="font-medium text-secondary/90 dark:text-white/90">CaartZee Payment Integration helps customers complete purchases directly from the conversation, making buying simple, fast, and convenient.</p>
        </div>
      </div>

      <hr className="border-stroke-1 dark:border-white/10" />

      {/* Keep Customers in the Buying Moment & Turn Conversations Into Revenue */}
      <div className="space-y-6">
        <h4 className="text-heading-5 font-black tracking-tight text-secondary dark:text-white">Frictionless Conversions</h4>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="border border-stroke-1 dark:border-white/10 p-6 rounded-2xl">
            <h5 className="text-heading-6 font-bold text-secondary dark:text-white mb-2">Keep Customers in the Buying Moment</h5>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70 mb-3">The more customers switch between apps, pages, and checkout flows, the more likely they are to abandon their purchase.</p>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70 mb-3">With CaartZee, payment links can be shared instantly within WhatsApp, allowing customers to complete transactions without disrupting their buying journey.</p>
            <p className="font-bold text-primary-500">Because convenience drives conversions.</p>
          </div>

          <div className="border border-stroke-1 dark:border-white/10 p-6 rounded-2xl">
            <h5 className="text-heading-6 font-bold text-secondary dark:text-white mb-2">Turn Conversations Into Revenue</h5>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70 mb-3">Every customer conversation has potential. A product inquiry. A pricing question. A recommendation request.</p>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70 mb-3">Instead of sending customers through a lengthy process, simply share a payment link and let them complete the purchase immediately.</p>
            <p className="font-medium text-secondary/90 dark:text-white/90">From interest to payment in minutes.</p>
          </div>
        </div>
      </div>

      <hr className="border-stroke-1 dark:border-white/10" />

      {/* Remove Friction From Checkout & Speed Matters */}
      <div className="space-y-6">
        <h4 className="text-heading-5 font-black tracking-tight text-secondary dark:text-white">Speed & Simplicity</h4>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="bg-black/5 dark:bg-white/5 p-6 rounded-2xl">
            <h5 className="text-heading-6 font-bold text-secondary dark:text-white mb-2">Remove Friction From Checkout</h5>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70 mb-3">Customers expect simplicity. No complicated forms. No unnecessary steps. No confusing processes.</p>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70 mb-3">Give customers a fast and secure payment experience that helps them complete purchases with confidence.</p>
            <p className="font-bold text-secondary/90 dark:text-white/90">The easier it is to buy, the more likely customers are to do it.</p>
          </div>

          <div className="bg-black/5 dark:bg-white/5 p-6 rounded-2xl">
            <h5 className="text-heading-6 font-bold text-secondary dark:text-white mb-2">Speed Matters</h5>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70 mb-3">Customers make buying decisions quickly. A delayed checkout experience can turn interest into hesitation.</p>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70 mb-3">Instant payment links help businesses capture purchase intent while it's strongest.</p>
            <p className="font-medium text-secondary/90 dark:text-white/90">Shorter buying journeys lead to faster decisions and higher conversion rates.</p>
          </div>
        </div>
      </div>

      <hr className="border-stroke-1 dark:border-white/10" />

      {/* Sell Anywhere Customers Engage */}
      <div className="space-y-6">
        <h4 className="text-heading-5 font-black tracking-tight text-secondary dark:text-white">Sell Anywhere Customers Engage</h4>
        <p className="leading-relaxed text-secondary/70 dark:text-white/70">Modern commerce doesn't happen in a single place. Customers discover products through:</p>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mt-4">
          {["WhatsApp", "Social Media", "Online Stores", "Marketplaces", "Campaigns", "Customer Conversations"].map((item, i) => (
            <div key={i} className="bg-black/5 dark:bg-white/5 p-4 rounded-xl text-center font-medium">
              {item}
            </div>
          ))}
        </div>
        <p className="mt-4 leading-relaxed text-secondary/70 dark:text-white/70">CaartZee helps you collect payments wherever the conversation happens.</p>
        <p className="font-bold text-primary-500">Because customers should be able to buy wherever they choose to engage.</p>
      </div>

      <hr className="border-stroke-1 dark:border-white/10" />

      {/* Build Trust With Secure Payments & More Than Payments */}
      <div className="space-y-6">
        <h4 className="text-heading-5 font-black tracking-tight text-secondary dark:text-white">Secure & Seamless Experiences</h4>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="border border-stroke-1 dark:border-white/10 p-5 rounded-2xl">
            <h5 className="text-heading-6 font-bold text-secondary dark:text-white mb-2">Build Trust With Secure Payments</h5>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70 mb-3">Customers need confidence before they pay. CaartZee supports secure payment experiences that help customers complete transactions safely and comfortably.</p>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70 mb-3">When customers trust the payment process, they buy with confidence.</p>
            <p className="font-bold text-secondary/90 dark:text-white/90">And confident customers convert more often.</p>
          </div>

          <div className="border border-stroke-1 dark:border-white/10 p-5 rounded-2xl">
            <h5 className="text-heading-6 font-bold text-secondary dark:text-white mb-2">More Than Payments. A Better Buying Experience.</h5>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70 mb-3">Payment is not just a transaction. It's part of the customer experience.</p>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70 mb-2">A smooth payment journey creates:</p>
            <ul className="list-disc list-inside space-y-1 ml-2 leading-relaxed text-secondary/70 dark:text-white/70 mb-3">
              <li>Faster checkouts</li>
              <li>Better customer satisfaction</li>
              <li>Higher conversion rates</li>
              <li>Reduced cart abandonment</li>
              <li>Increased repeat purchases</li>
            </ul>
            <p className="font-medium text-secondary/90 dark:text-white/90">Because every great customer experience should end with an effortless checkout.</p>
          </div>
        </div>
      </div>

      <hr className="border-stroke-1 dark:border-white/10" />

      {/* Designed for Modern Commerce & Grow Revenue Without Adding Complexity */}
      <div className="space-y-6">
        <h4 className="text-heading-5 font-black tracking-tight text-secondary dark:text-white">Designed to Grow Revenue</h4>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="bg-black/5 dark:bg-white/5 p-6 rounded-2xl">
            <h5 className="text-heading-6 font-bold text-secondary dark:text-white mb-2">Designed for Modern Commerce</h5>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70 mb-3">Whether you're selling products, services, subscriptions, or custom orders, Payment Integration helps businesses collect payments faster and close sales more efficiently.</p>
            <ul className="list-disc list-inside space-y-1 ml-2 font-bold text-secondary/90 dark:text-white/90">
              <li>One conversation.</li>
              <li>One payment link.</li>
              <li>One completed purchase.</li>
            </ul>
          </div>

          <div className="bg-black/5 dark:bg-white/5 p-6 rounded-2xl">
            <h5 className="text-heading-6 font-bold text-secondary dark:text-white mb-2">Grow Revenue Without Adding Complexity</h5>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70 mb-3">Businesses spend significant resources bringing customers to the point of purchase. Don't lose them at checkout.</p>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70 mb-3">Payment Integration helps maximize conversions by making it easier for customers to complete transactions when they're ready to buy.</p>
            <p className="font-medium text-secondary/90 dark:text-white/90">The result is more revenue from the customers you already have.</p>
          </div>
        </div>
      </div>

      <hr className="border-stroke-1 dark:border-white/10" />

      {/* Why Businesses Choose Payment Integration */}
      <div className="space-y-6">
        <h4 className="text-heading-5 font-black tracking-tight text-secondary dark:text-white">Why Businesses Choose Payment Integration</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <div><h5 className="font-bold text-secondary dark:text-white mb-1">Faster Checkouts</h5><p className="leading-relaxed text-secondary/70 dark:text-white/70">Reduce the time between interest and purchase.</p></div>
          <div><h5 className="font-bold text-secondary dark:text-white mb-1">Increase Conversions</h5><p className="leading-relaxed text-secondary/70 dark:text-white/70">Make buying easier for customers.</p></div>
          <div><h5 className="font-bold text-secondary dark:text-white mb-1">Reduce Drop-Offs</h5><p className="leading-relaxed text-secondary/70 dark:text-white/70">Minimize checkout friction and abandonment.</p></div>
          <div><h5 className="font-bold text-secondary dark:text-white mb-1">Sell Through Conversations</h5><p className="leading-relaxed text-secondary/70 dark:text-white/70">Turn chats into completed transactions.</p></div>
          <div><h5 className="font-bold text-secondary dark:text-white mb-1">Improve Customer Experience</h5><p className="leading-relaxed text-secondary/70 dark:text-white/70">Deliver a seamless buying journey from start to finish.</p></div>
        </div>
      </div>

      <hr className="border-stroke-1 dark:border-white/10" />

      {/* Ready to Grow */}
      <div className="bg-primary-500/10 p-8 rounded-3xl text-center space-y-5 border border-primary-500/20">
        <h4 className="text-heading-4 font-black tracking-tight text-secondary dark:text-white">Every Conversation Is a Chance to Close a Sale.</h4>
        <p className="leading-relaxed text-secondary/70 dark:text-white/70 max-w-xl mx-auto">Help customers pay faster, checkout easier, and complete purchases without leaving the conversation.</p>
        <p className="font-black text-primary-500 text-lg uppercase tracking-wider">Faster Payments. Higher Conversions. Better Customer Experiences.</p>
        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <LinkButton href="/contact-us" className="inline-flex h-14 items-center justify-center rounded-full bg-primary-500 px-8 text-base font-bold text-white transition-all hover:bg-primary-600 hover:shadow-lg hover:shadow-primary-500/30">
            Start Accepting Payments
          </LinkButton>
        </div>
      </div>

    </div>
  );
};
