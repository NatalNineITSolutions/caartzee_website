import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import LinkButton from '../ui/button/LinkButton';

export const WhatsAppFeatureContent = () => {
  return (
    <div className="space-y-8 text-secondary dark:text-white/80 pb-6 text-left">
      {/* Hero Section */}
      <div className="space-y-6 text-center max-w-3xl mx-auto flex flex-col items-center pt-4 pb-8">
        <h1 className="text-heading-3 md:text-heading-2 font-black tracking-tight text-secondary dark:text-white">Turn WhatsApp Into Your Best Sales Channel</h1>
        <p className="text-lg md:text-xl leading-relaxed text-secondary/70 dark:text-white/70">
          Connect your store to WhatsApp and let AI answer customer questions, recommend products, recover abandoned carts, and drive more sales—automatically.
        </p>
        <p className="text-lg md:text-xl leading-relaxed text-secondary/70 dark:text-white/70">
          Reach customers where they already spend their time and transform everyday conversations into revenue-generating opportunities.
        </p>
        <ul className="flex flex-wrap justify-center gap-4 mt-6">
          {["Instant Customer Engagement", "AI-Powered Product Recommendations", "Automated Sales & Support", "Abandoned Cart Recovery", "Real-Time Order Updates"].map((item, i) => (
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

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center py-8">
        {/* Left Image */}
        <div className="w-full lg:col-span-8">
          <img
            src="/images/whatappintergration1.png"
            alt="WhatsApp Integration Overview"
            className="w-full h-auto rounded-2xl shadow-2xl border border-stroke-1 dark:border-white/10 object-contain"
          />
        </div>

        {/* Right Content */}
        <div className="space-y-4 lg:col-span-4">
          <h4 className="text-heading-5 font-black tracking-tight text-secondary dark:text-white">Why WhatsApp Matters for Your Business</h4>
          <div className="space-y-4 text-lg leading-relaxed text-secondary/70 dark:text-white/70">
            <p>Customers prefer messaging over emails and forms. They want quick answers, personalized recommendations, and instant support.</p>
            <p>With Caartzee Snap, your business can engage customers directly on WhatsApp, providing a seamless shopping experience that drives higher conversions and customer satisfaction.</p>
          </div>
          <div className="pt-4">
            <h5 className="text-heading-6 font-bold text-secondary dark:text-white mb-3">Benefits at a Glance</h5>
            <ul className="list-disc list-inside space-y-2 ml-2 leading-relaxed text-secondary/70 dark:text-white/70">
              <li>Faster customer responses</li>
              <li>Higher engagement rates</li>
              <li>Increased sales conversions</li>
              <li>Reduced support workload</li>
              <li>Improved customer loyalty</li>
            </ul>
          </div>
        </div>
      </div>

      <hr className="border-stroke-1 dark:border-white/10" />

      {/* Everything You Need */}
      <div className="space-y-6">
        <h4 className="text-heading-5 font-black tracking-tight text-secondary dark:text-white">Everything You Need to Sell on WhatsApp</h4>

        <div className="bg-black/5 dark:bg-white/5 p-6 rounded-2xl">
          <h5 className="text-heading-6 font-bold text-secondary dark:text-white mb-2">AI-Powered Conversations</h5>
          <p className="leading-relaxed text-secondary/70 dark:text-white/70 mb-3">Your AI assistant engages customers 24/7 by:</p>
          <ul className="list-disc list-inside space-y-2 ml-2 leading-relaxed text-secondary/70 dark:text-white/70">
            <li>Answering product questions</li>
            <li>Sharing product information</li>
            <li>Recommending relevant products</li>
            <li>Guiding customers to purchase</li>
            <li>Handling frequently asked questions</li>
          </ul>
          <p className="mt-4 font-medium text-secondary/90 dark:text-white/90">Never miss a sales opportunity, even outside business hours.</p>
        </div>

        <div className="bg-black/5 dark:bg-white/5 p-6 rounded-2xl">
          <h5 className="text-heading-6 font-bold text-secondary dark:text-white mb-2">Product Catalog Sharing</h5>
          <p className="leading-relaxed text-secondary/70 dark:text-white/70 mb-3">Show customers exactly what they're looking for. Easily share:</p>
          <ul className="list-disc list-inside space-y-2 ml-2 leading-relaxed text-secondary/70 dark:text-white/70">
            <li>Product catalogs</li>
            <li>Product images</li>
            <li>Prices</li>
            <li>Descriptions</li>
            <li>Collections</li>
          </ul>
          <p className="mt-4 font-medium text-secondary/90 dark:text-white/90">All within a WhatsApp conversation.</p>
        </div>

        <div className="bg-black/5 dark:bg-white/5 p-6 rounded-2xl">
          <h5 className="text-heading-6 font-bold text-secondary dark:text-white mb-2">Abandoned Cart Recovery</h5>
          <p className="leading-relaxed text-secondary/70 dark:text-white/70 mb-3">Recover lost revenue automatically. When customers leave without completing a purchase, Caartzee Snap can:</p>
          <ul className="list-disc list-inside space-y-2 ml-2 leading-relaxed text-secondary/70 dark:text-white/70">
            <li>Send follow-up reminders</li>
            <li>Recommend similar products</li>
            <li>Share exclusive offers</li>
            <li>Encourage checkout completion</li>
          </ul>
          <p className="mt-4 font-medium text-secondary/90 dark:text-white/90">Turn missed opportunities into completed sales.</p>
        </div>

        <div className="bg-black/5 dark:bg-white/5 p-6 rounded-2xl">
          <h5 className="text-heading-6 font-bold text-secondary dark:text-white mb-2">Real-Time Customer Support</h5>
          <p className="leading-relaxed text-secondary/70 dark:text-white/70 mb-3">Provide instant assistance whenever customers need help. Support customers with:</p>
          <ul className="list-disc list-inside space-y-2 ml-2 leading-relaxed text-secondary/70 dark:text-white/70">
            <li>Product inquiries</li>
            <li>Order status updates</li>
            <li>Shipping information</li>
            <li>Return requests</li>
            <li>General support questions</li>
          </ul>
          <p className="mt-4 font-medium text-secondary/90 dark:text-white/90">All from one centralized platform.</p>
        </div>
      </div>

      <hr className="border-stroke-1 dark:border-white/10" />

      {/* How It Works */}
      <div className="space-y-6">
        <h4 className="text-heading-5 font-black tracking-tight text-secondary dark:text-white">How It Works</h4>
        <ol className="space-y-4 relative border-l border-stroke-1 dark:border-white/10 ml-3">
          <li className="pl-6 relative">
            <span className="absolute -left-[13px] top-0 flex h-6 w-6 items-center justify-center rounded-full bg-primary-500 text-xs font-bold text-white">1</span>
            <strong className="block text-secondary dark:text-white mb-1">Connect Your WhatsApp Business Account</strong>
            <span className="leading-relaxed text-secondary/70 dark:text-white/70">Link your WhatsApp Business number securely with Caartzee Snap.</span>
          </li>
          <li className="pl-6 relative">
            <span className="absolute -left-[13px] top-0 flex h-6 w-6 items-center justify-center rounded-full bg-primary-500 text-xs font-bold text-white">2</span>
            <strong className="block text-secondary dark:text-white mb-1">Sync Your Store</strong>
            <span className="leading-relaxed text-secondary/70 dark:text-white/70">Import products, inventory, and customer data automatically.</span>
          </li>
          <li className="pl-6 relative">
            <span className="absolute -left-[13px] top-0 flex h-6 w-6 items-center justify-center rounded-full bg-primary-500 text-xs font-bold text-white">3</span>
            <strong className="block text-secondary dark:text-white mb-1">Activate AI Automation</strong>
            <span className="leading-relaxed text-secondary/70 dark:text-white/70">Enable AI-powered conversations, product recommendations, and support workflows.</span>
          </li>
          <li className="pl-6 relative">
            <span className="absolute -left-[13px] top-0 flex h-6 w-6 items-center justify-center rounded-full bg-primary-500 text-xs font-bold text-white">4</span>
            <strong className="block text-secondary dark:text-white mb-1">Start Selling</strong>
            <span className="leading-relaxed text-secondary/70 dark:text-white/70">Engage customers, answer questions, and generate sales directly through WhatsApp.</span>
          </li>
        </ol>
      </div>

      <hr className="border-stroke-1 dark:border-white/10" />

      {/* Convert Conversations Into Customers */}
      <div className="space-y-6">
        <h4 className="text-heading-5 font-black tracking-tight text-secondary dark:text-white">Convert Conversations Into Customers</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="border border-stroke-1 dark:border-white/10 p-5 rounded-2xl">
            <h5 className="text-heading-6 font-bold text-secondary dark:text-white mb-2">Smart Product Recommendations</h5>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70">AI analyzes customer interests and suggests relevant products that increase purchase likelihood.</p>
          </div>
          <div className="border border-stroke-1 dark:border-white/10 p-5 rounded-2xl">
            <h5 className="text-heading-6 font-bold text-secondary dark:text-white mb-2">Personalized Shopping Experiences</h5>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70">Deliver tailored recommendations based on customer behavior and preferences.</p>
          </div>
          <div className="border border-stroke-1 dark:border-white/10 p-5 rounded-2xl">
            <h5 className="text-heading-6 font-bold text-secondary dark:text-white mb-2">Faster Purchase Decisions</h5>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70">Help customers find products quickly and confidently.</p>
          </div>
          <div className="border border-stroke-1 dark:border-white/10 p-5 rounded-2xl">
            <h5 className="text-heading-6 font-bold text-secondary dark:text-white mb-2">Higher Conversion Rates</h5>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70">Reduce friction and make buying easier through real-time conversations.</p>
          </div>
        </div>
      </div>

      <hr className="border-stroke-1 dark:border-white/10" />

      {/* Automate Customer Engagement */}
      <div className="space-y-6">
        <h4 className="text-heading-5 font-black tracking-tight text-secondary dark:text-white">Automate Customer Engagement</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <h5 className="text-heading-6 font-bold text-secondary dark:text-white mb-2">Welcome Messages</h5>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70">Automatically greet new customers and introduce your products.</p>
          </div>
          <div>
            <h5 className="text-heading-6 font-bold text-secondary dark:text-white mb-2">Lead Qualification</h5>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70">Collect customer information and identify purchase intent automatically.</p>
          </div>
          <div>
            <h5 className="text-heading-6 font-bold text-secondary dark:text-white mb-2">Order Notifications</h5>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70 mb-2">Keep customers informed with:</p>
            <ul className="list-disc list-inside space-y-1 ml-2 leading-relaxed text-secondary/70 dark:text-white/70">
              <li>Order confirmations</li>
              <li>Payment confirmations</li>
              <li>Shipping updates</li>
              <li>Delivery notifications</li>
            </ul>
          </div>
          <div>
            <h5 className="text-heading-6 font-bold text-secondary dark:text-white mb-2">Follow-Up Campaigns</h5>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70">Stay connected with customers after purchase and encourage repeat business.</p>
          </div>
        </div>
      </div>

      <hr className="border-stroke-1 dark:border-white/10" />

      {/* Powerful WhatsApp Marketing */}
      <div className="space-y-6">
        <h4 className="text-heading-5 font-black tracking-tight text-secondary dark:text-white">Powerful WhatsApp Marketing</h4>
        <p className="leading-relaxed text-secondary/70 dark:text-white/70">Reach customers with targeted campaigns designed to increase engagement and revenue.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="bg-primary-500/5 p-5 rounded-2xl border border-primary-500/10">
            <h5 className="font-bold text-primary-500 mb-2">Launch Promotions</h5>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70">Share discounts, flash sales, and exclusive offers instantly.</p>
          </div>
          <div className="bg-primary-500/5 p-5 rounded-2xl border border-primary-500/10">
            <h5 className="font-bold text-primary-500 mb-2">Announce New Products</h5>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70">Notify customers when new products become available.</p>
          </div>
          <div className="bg-primary-500/5 p-5 rounded-2xl border border-primary-500/10">
            <h5 className="font-bold text-primary-500 mb-2">Back-In-Stock Alerts</h5>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70">Bring customers back when their favorite products return.</p>
          </div>
          <div className="bg-primary-500/5 p-5 rounded-2xl border border-primary-500/10">
            <h5 className="font-bold text-primary-500 mb-2">Seasonal Campaigns</h5>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70">Promote holiday sales and special events effortlessly.</p>
          </div>
        </div>
      </div>

      <hr className="border-stroke-1 dark:border-white/10" />

      {/* One Dashboard */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center py-8">
        {/* Left Image */}
        <div className="w-full lg:col-span-8">
          <img
            src="/images/whatappintergration2.png"
            alt="WhatsApp Integration Dashboard"
            className="w-full h-auto rounded-2xl shadow-2xl border border-stroke-1 dark:border-white/10 object-contain"
          />
        </div>

        {/* Right Content */}
        <div className="space-y-4 lg:col-span-4">
          <h4 className="text-heading-5 font-black tracking-tight text-secondary dark:text-white">One Dashboard for Every Conversation</h4>
          <p className="leading-relaxed text-secondary/70 dark:text-white/70">Manage all customer interactions from a single interface. View and Manage:</p>
          <ul className="list-disc list-inside space-y-2 mt-2 ml-2 leading-relaxed text-secondary/70 dark:text-white/70">
            <li>Customer chats</li>
            <li>Product inquiries</li>
            <li>Sales conversations</li>
            <li>Order updates</li>
            <li>Support requests</li>
            <li>Marketing campaigns</li>
          </ul>
          <p className="font-bold text-secondary dark:text-white mt-4">No switching between multiple platforms.</p>
        </div>
      </div>

      <hr className="border-stroke-1 dark:border-white/10" />

      {/* Business Results You Can Expect */}
      <div className="space-y-6">
        <h4 className="text-heading-5 font-black tracking-tight text-secondary dark:text-white">Business Results You Can Expect</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <div><h5 className="font-bold text-secondary dark:text-white mb-1">Increase Sales</h5><p className="leading-relaxed text-secondary/70 dark:text-white/70">Convert WhatsApp conversations into completed purchases.</p></div>
          <div><h5 className="font-bold text-secondary dark:text-white mb-1">Improve Response Times</h5><p className="leading-relaxed text-secondary/70 dark:text-white/70">Provide instant answers and support around the clock.</p></div>
          <div><h5 className="font-bold text-secondary dark:text-white mb-1">Reduce Support Costs</h5><p className="leading-relaxed text-secondary/70 dark:text-white/70">Automate repetitive inquiries and free up your team.</p></div>
          <div><h5 className="font-bold text-secondary dark:text-white mb-1">Enhance Customer Satisfaction</h5><p className="leading-relaxed text-secondary/70 dark:text-white/70">Deliver faster, more personalized experiences.</p></div>
          <div><h5 className="font-bold text-secondary dark:text-white mb-1">Build Customer Loyalty</h5><p className="leading-relaxed text-secondary/70 dark:text-white/70">Stay connected with customers before and after every purchase.</p></div>
        </div>
      </div>

      <hr className="border-stroke-1 dark:border-white/10" />

      {/* FAQs */}
      <div className="space-y-6">
        <h4 className="text-heading-5 font-black tracking-tight text-secondary dark:text-white">Frequently Asked Questions</h4>
        <div className="space-y-5">
          <div><h5 className="font-bold text-secondary dark:text-white mb-1">Do I need a WhatsApp Business account?</h5><p className="leading-relaxed text-secondary/70 dark:text-white/70">Yes. Caartzee Snap connects with your WhatsApp Business number to manage customer conversations.</p></div>
          <div><h5 className="font-bold text-secondary dark:text-white mb-1">Can AI answer customer questions automatically?</h5><p className="leading-relaxed text-secondary/70 dark:text-white/70">Yes. AI can handle FAQs, product inquiries, and support requests 24/7.</p></div>
          <div><h5 className="font-bold text-secondary dark:text-white mb-1">Can customers browse products through WhatsApp?</h5><p className="leading-relaxed text-secondary/70 dark:text-white/70">Absolutely. You can share product catalogs, images, descriptions, and pricing directly in chat.</p></div>
          <div><h5 className="font-bold text-secondary dark:text-white mb-1">Can I send marketing campaigns through WhatsApp?</h5><p className="leading-relaxed text-secondary/70 dark:text-white/70">Yes. Launch promotions, product announcements, and targeted campaigns from a single platform.</p></div>
          <div><h5 className="font-bold text-secondary dark:text-white mb-1">Is setup complicated?</h5><p className="leading-relaxed text-secondary/70 dark:text-white/70">No. Most businesses can connect WhatsApp and start engaging customers within minutes.</p></div>
        </div>
      </div>

      <hr className="border-stroke-1 dark:border-white/10" />

      {/* Ready to Grow */}
      <div className="bg-primary-500/10 p-8 rounded-3xl text-center space-y-5 border border-primary-500/20">
        <h4 className="text-heading-4 font-black tracking-tight text-secondary dark:text-white">Start Selling More Through WhatsApp</h4>
        <p className="leading-relaxed text-secondary/70 dark:text-white/70 max-w-xl mx-auto">Transform customer conversations into revenue with AI-powered WhatsApp commerce. Connect your store, automate customer engagement, and create exceptional shopping experiences from the world's most popular messaging platform.</p>
        <p className="font-black text-primary-500 text-lg uppercase tracking-wider">Engage Faster. Sell Smarter. Grow Faster.</p>
        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <LinkButton href="/contact-us" className="inline-flex h-14 items-center justify-center rounded-full bg-primary-500 px-8 text-base font-bold text-white transition-all hover:bg-primary-600 hover:shadow-lg hover:shadow-primary-500/30">
            Get Started Now
          </LinkButton>
        </div>
      </div>

    </div>
  );
};
