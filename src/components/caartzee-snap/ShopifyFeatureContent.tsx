import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import LinkButton from '../ui/button/LinkButton';

export const ShopifyFeatureContent = () => {
  return (
    <div className="space-y-8 text-secondary dark:text-white/80 pb-6 text-left">
      {/* Hero Section */}
      <div className="space-y-6 text-center max-w-3xl mx-auto flex flex-col items-center pt-4 pb-8">
        <h1 className="text-heading-3 md:text-heading-2 font-black tracking-tight text-secondary dark:text-white">Connect Shopify. Sell Smarter on WhatsApp.</h1>
        <p className="text-lg md:text-xl leading-relaxed text-secondary/70 dark:text-white/70">
          Sync your Shopify store with Caartzee Snap and turn every customer conversation into a sales opportunity. Manage products, orders, customer interactions, and WhatsApp sales from one unified platform.
        </p>
        <ul className="flex flex-wrap justify-center gap-4 mt-6">
          {["Instant Shopify Sync", "Real-Time Product Updates", "AI-Powered Sales Assistance", "WhatsApp Commerce Automation", "Order & Customer Management"].map((item, i) => (
            <li key={i} className="flex items-center gap-2 font-medium bg-black/5 dark:bg-white/5 px-4 py-2 rounded-full text-sm">
              <CheckCircle2 className="text-primary-500 w-4 h-4 shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <div className="pt-8">
          <LinkButton href="/contact-us" className="inline-flex h-14 items-center justify-center rounded-full bg-primary-500 px-10 text-base font-bold text-white transition-all hover:bg-primary-600 hover:shadow-lg hover:shadow-primary-500/30">
            Book a Demo
          </LinkButton>
        </div>
      </div>

      <hr className="border-stroke-1 dark:border-white/10" />

      {/* Why Connect... */}
      <div className="space-y-4">
        <h4 className="text-heading-5 font-black tracking-tight text-secondary dark:text-white">Why Connect Shopify with Caartzee Snap?</h4>
        <div className="space-y-4 text-lg leading-relaxed text-secondary/70 dark:text-white/70">
          <p>Running an online store requires more than just managing products. Customers expect instant responses, personalized recommendations, and seamless purchasing experiences.</p>
          <p>Caartzee Snap bridges the gap between your Shopify store and WhatsApp, allowing you to engage customers, automate support, and increase sales—all from a single dashboard.</p>
        </div>
      </div>

      <hr className="border-stroke-1 dark:border-white/10" />

      {/* Everything Stays Synced */}
      <div className="space-y-6">
        <h4 className="text-heading-5 font-black tracking-tight text-secondary dark:text-white">Everything Stays Synced Automatically</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-black/5 dark:bg-white/5 p-5 rounded-2xl">
            <h5 className="text-heading-6 font-bold text-secondary dark:text-white mb-2">Products</h5>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70">Import and sync your entire Shopify catalog automatically. Any updates made in Shopify are reflected instantly in Caartzee Snap.</p>
          </div>
          <div className="bg-black/5 dark:bg-white/5 p-5 rounded-2xl">
            <h5 className="text-heading-6 font-bold text-secondary dark:text-white mb-2">Orders</h5>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70">Track customer orders, fulfillment status, and purchase history without switching between platforms.</p>
          </div>
          <div className="bg-black/5 dark:bg-white/5 p-5 rounded-2xl">
            <h5 className="text-heading-6 font-bold text-secondary dark:text-white mb-2">Customers</h5>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70">Access customer details and conversation history to provide personalized support and recommendations.</p>
          </div>
          <div className="bg-black/5 dark:bg-white/5 p-5 rounded-2xl">
            <h5 className="text-heading-6 font-bold text-secondary dark:text-white mb-2">Inventory</h5>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70">Keep stock levels updated in real time to avoid overselling and ensure accurate product availability.</p>
          </div>
        </div>
      </div>

      <hr className="border-stroke-1 dark:border-white/10" />

      {/* How It Works */}
      <div className="space-y-6">
        <h4 className="text-heading-5 font-black tracking-tight text-secondary dark:text-white">How It Works</h4>
        <ol className="space-y-4 relative border-l border-stroke-1 dark:border-white/10 ml-3">
          <li className="pl-6 relative">
            <span className="absolute -left-[13px] top-0 flex h-6 w-6 items-center justify-center rounded-full bg-primary-500 text-xs font-bold text-white">1</span>
            <strong className="block text-secondary dark:text-white mb-1">Connect Your Shopify Store</strong> 
            <span className="leading-relaxed text-secondary/70 dark:text-white/70">Securely link your Shopify account in just a few clicks.</span>
          </li>
          <li className="pl-6 relative">
            <span className="absolute -left-[13px] top-0 flex h-6 w-6 items-center justify-center rounded-full bg-primary-500 text-xs font-bold text-white">2</span>
            <strong className="block text-secondary dark:text-white mb-1">Sync Your Products</strong> 
            <span className="leading-relaxed text-secondary/70 dark:text-white/70">Automatically import products, collections, inventory, and customer data.</span>
          </li>
          <li className="pl-6 relative">
            <span className="absolute -left-[13px] top-0 flex h-6 w-6 items-center justify-center rounded-full bg-primary-500 text-xs font-bold text-white">3</span>
            <strong className="block text-secondary dark:text-white mb-1">Start Selling Through WhatsApp</strong> 
            <span className="leading-relaxed text-secondary/70 dark:text-white/70">Let customers browse products, ask questions, and complete purchases directly through WhatsApp conversations.</span>
          </li>
          <li className="pl-6 relative">
            <span className="absolute -left-[13px] top-0 flex h-6 w-6 items-center justify-center rounded-full bg-primary-500 text-xs font-bold text-white">4</span>
            <strong className="block text-secondary dark:text-white mb-1">Let AI Handle Engagement</strong> 
            <span className="leading-relaxed text-secondary/70 dark:text-white/70">AI assists customers, answers questions, recommends products, and guides buyers toward checkout.</span>
          </li>
        </ol>
      </div>

      <hr className="border-stroke-1 dark:border-white/10" />

      {/* Turn WhatsApp... */}
      <div className="space-y-6">
        <h4 className="text-heading-5 font-black tracking-tight text-secondary dark:text-white">Turn WhatsApp Conversations into Sales</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="border border-stroke-1 dark:border-white/10 p-5 rounded-2xl">
            <h5 className="text-heading-6 font-bold text-secondary dark:text-white mb-2">AI Product Recommendations</h5>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70">Suggest the right products based on customer interests and shopping behaviour.</p>
          </div>
          <div className="border border-stroke-1 dark:border-white/10 p-5 rounded-2xl">
            <h5 className="text-heading-6 font-bold text-secondary dark:text-white mb-2">Instant Customer Responses</h5>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70">Answer product inquiries, pricing questions, shipping details, and FAQs 24/7.</p>
          </div>
          <div className="border border-stroke-1 dark:border-white/10 p-5 rounded-2xl">
            <h5 className="text-heading-6 font-bold text-secondary dark:text-white mb-2">Abandoned Cart Recovery</h5>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70">Automatically remind customers about unfinished purchases and encourage them to complete checkout.</p>
          </div>
          <div className="border border-stroke-1 dark:border-white/10 p-5 rounded-2xl">
            <h5 className="text-heading-6 font-bold text-secondary dark:text-white mb-2">Personalized Shopping Experience</h5>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70">Deliver relevant recommendations and offers that increase conversions and repeat purchases.</p>
          </div>
        </div>
      </div>

      <hr className="border-stroke-1 dark:border-white/10" />

      {/* Manage Your Business */}
      <div className="space-y-4">
        <h4 className="text-heading-5 font-black tracking-tight text-secondary dark:text-white">Manage Your Business from One Dashboard</h4>
        <p className="leading-relaxed text-secondary/70 dark:text-white/70">No more switching between multiple tools. With Caartzee Snap, you can:</p>
        <ul className="list-disc list-inside space-y-2 mt-2 ml-2 leading-relaxed text-secondary/70 dark:text-white/70">
          <li>View customer conversations</li>
          <li>Track orders</li>
          <li>Manage product catalogs</li>
          <li>Monitor sales performance</li>
          <li>Launch WhatsApp campaigns</li>
          <li>Handle support requests</li>
        </ul>
        <p className="font-bold text-secondary dark:text-white mt-4">All from a single, easy-to-use interface.</p>
      </div>

      <hr className="border-stroke-1 dark:border-white/10" />

      {/* Benefits */}
      <div className="space-y-4">
        <h4 className="text-heading-5 font-black tracking-tight text-secondary dark:text-white">Benefits for Shopify Merchants</h4>
        <div className="space-y-4">
          <div className="bg-primary-500/5 p-4 rounded-xl border border-primary-500/10 text-secondary/70 dark:text-white/70">
            <strong className="text-primary-500 block mb-1">Increase Sales</strong> Convert customer inquiries into completed purchases through AI-guided conversations.
          </div>
          <div className="bg-primary-500/5 p-4 rounded-xl border border-primary-500/10 text-secondary/70 dark:text-white/70">
            <strong className="text-primary-500 block mb-1">Save Time</strong> Automate repetitive support tasks and reduce manual work.
          </div>
          <div className="bg-primary-500/5 p-4 rounded-xl border border-primary-500/10 text-secondary/70 dark:text-white/70">
            <strong className="text-primary-500 block mb-1">Improve Customer Experience</strong> Deliver fast, personalized support on the platform customers use most.
          </div>
          <div className="bg-primary-500/5 p-4 rounded-xl border border-primary-500/10 text-secondary/70 dark:text-white/70">
            <strong className="text-primary-500 block mb-1">Boost Customer Retention</strong> Build stronger relationships with proactive communication and personalized recommendations.
          </div>
          <div className="bg-primary-500/5 p-4 rounded-xl border border-primary-500/10 text-secondary/70 dark:text-white/70">
            <strong className="text-primary-500 block mb-1">Scale Without Increasing Support Costs</strong> Support more customers without expanding your support team.
          </div>
        </div>
      </div>

      <hr className="border-stroke-1 dark:border-white/10" />

      {/* Powerful Features */}
      <div className="space-y-6">
        <h4 className="text-heading-5 font-black tracking-tight text-secondary dark:text-white">Powerful Features</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <div><h5 className="font-bold text-secondary dark:text-white mb-1">Real-Time Shopify Synchronization</h5><p className="leading-relaxed text-secondary/70 dark:text-white/70">Keep products, inventory, and orders updated automatically.</p></div>
          <div><h5 className="font-bold text-secondary dark:text-white mb-1">AI Sales Assistant</h5><p className="leading-relaxed text-secondary/70 dark:text-white/70">Engage customers and drive purchases around the clock.</p></div>
          <div><h5 className="font-bold text-secondary dark:text-white mb-1">WhatsApp Commerce</h5><p className="leading-relaxed text-secondary/70 dark:text-white/70">Show products, share catalogs, and sell directly through chat.</p></div>
          <div><h5 className="font-bold text-secondary dark:text-white mb-1">Automated Notifications</h5><p className="leading-relaxed text-secondary/70 dark:text-white/70">Send order confirmations, shipping updates, and delivery notifications.</p></div>
          <div><h5 className="font-bold text-secondary dark:text-white mb-1">Customer Insights</h5><p className="leading-relaxed text-secondary/70 dark:text-white/70">Understand customer behavior and improve sales performance.</p></div>
          <div><h5 className="font-bold text-secondary dark:text-white mb-1">Campaign Management</h5><p className="leading-relaxed text-secondary/70 dark:text-white/70">Launch promotional broadcasts and targeted marketing campaigns.</p></div>
        </div>
      </div>

      <hr className="border-stroke-1 dark:border-white/10" />

      {/* FAQs */}
      <div className="space-y-6">
        <h4 className="text-heading-5 font-black tracking-tight text-secondary dark:text-white">Frequently Asked Questions</h4>
        <div className="space-y-5">
          <div><h5 className="font-bold text-secondary dark:text-white mb-1">How long does setup take?</h5><p className="leading-relaxed text-secondary/70 dark:text-white/70">Most Shopify stores can be connected and synced within a few minutes.</p></div>
          <div><h5 className="font-bold text-secondary dark:text-white mb-1">Do I need technical knowledge?</h5><p className="leading-relaxed text-secondary/70 dark:text-white/70">No. The integration process is simple and requires no coding.</p></div>
          <div><h5 className="font-bold text-secondary dark:text-white mb-1">Will my products sync automatically?</h5><p className="leading-relaxed text-secondary/70 dark:text-white/70">Yes. Products, inventory, and updates sync automatically with Shopify.</p></div>
          <div><h5 className="font-bold text-secondary dark:text-white mb-1">Can customers buy through WhatsApp?</h5><p className="leading-relaxed text-secondary/70 dark:text-white/70">Yes. Customers can browse products, receive recommendations, and complete purchases through guided conversations.</p></div>
          <div><h5 className="font-bold text-secondary dark:text-white mb-1">Can I use my existing WhatsApp Business number?</h5><p className="leading-relaxed text-secondary/70 dark:text-white/70">Absolutely. You can connect your existing WhatsApp Business account.</p></div>
        </div>
      </div>

      <hr className="border-stroke-1 dark:border-white/10" />

      {/* Ready to Grow */}
      <div className="bg-primary-500/10 p-8 rounded-3xl text-center space-y-5 border border-primary-500/20">
        <h4 className="text-heading-4 font-black tracking-tight text-secondary dark:text-white">Ready to Grow Your Shopify Sales?</h4>
        <p className="leading-relaxed text-secondary/70 dark:text-white/70 max-w-xl mx-auto">Connect your Shopify store to Caartzee Snap and unlock AI-powered customer engagement, WhatsApp commerce, and automated sales growth.</p>
        <p className="font-black text-primary-500 text-lg uppercase tracking-wider">Sell More. Support Faster. Scale Smarter.</p>
        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <LinkButton href="/contact-us" className="inline-flex h-14 items-center justify-center rounded-full bg-primary-500 px-8 text-base font-bold text-white transition-all hover:bg-primary-600 hover:shadow-lg hover:shadow-primary-500/30">
            Get Started Today
          </LinkButton>
          <LinkButton href="/contact-us" className="inline-flex h-14 items-center justify-center rounded-full border border-stroke-1 dark:border-white/10 px-8 text-base font-bold text-secondary dark:text-white transition-all hover:bg-black/5 dark:hover:bg-white/5">
            Schedule a Demo
          </LinkButton>
        </div>
      </div>

    </div>
  );
};
