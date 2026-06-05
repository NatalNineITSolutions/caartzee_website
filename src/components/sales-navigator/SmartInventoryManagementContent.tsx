import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import LinkButton from '../ui/button/LinkButton';

export const SmartInventoryManagementContent = () => {
  return (
    <div className="space-y-8 text-secondary dark:text-white/80 pb-6 text-left">
      {/* Hero Section */}
      <div className="space-y-6 text-center max-w-3xl mx-auto flex flex-col items-center pt-4 pb-8">
        <h1 className="text-heading-3 md:text-heading-2 font-black tracking-tight text-secondary dark:text-white">Stay in Stock. Stay in Control.</h1>
        <p className="text-lg md:text-xl leading-relaxed text-secondary/70 dark:text-white/70">
          Monitor inventory across every sales channel from a single dashboard.
        </p>
        <p className="text-lg md:text-xl leading-relaxed text-secondary/70 dark:text-white/70">
          Receive low-stock alerts, automate inventory updates, and ensure smooth order fulfillment without manual effort. Never lose sales because of stock issues. Keep inventory accurate, synchronized, and ready for growth.
        </p>
        <ul className="flex flex-wrap justify-center gap-4 mt-6">
          {["Real-Time Inventory Tracking", "Multi-Channel Stock Sync", "Low Stock Alerts", "Automated Inventory Updates", "Faster Order Fulfillment"].map((item, i) => (
            <li key={i} className="flex items-center gap-2 font-medium bg-black/5 dark:bg-white/5 px-4 py-2 rounded-full text-sm">
              <CheckCircle2 className="text-primary-500 w-4 h-4 shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <div className="pt-8">
          <LinkButton href="/contact-us" className="inline-flex h-14 items-center justify-center rounded-full bg-primary-500 px-10 text-base font-bold text-white transition-all hover:bg-primary-600 hover:shadow-lg hover:shadow-primary-500/30">
            Manage Inventory Smarter
          </LinkButton>
        </div>
      </div>

      <hr className="border-stroke-1 dark:border-white/10" />

      {/* Built for Modern Commerce */}
      <div className="space-y-4">
        <h4 className="text-heading-5 font-black tracking-tight text-secondary dark:text-white">Inventory Management Built for Modern Commerce</h4>
        <div className="space-y-4 text-lg leading-relaxed text-secondary/70 dark:text-white/70">
          <p>Managing inventory across multiple stores and marketplaces shouldn't be complicated.</p>
          <p>CaartZee automatically tracks, updates, and synchronizes inventory across every sales channel, helping you avoid stock discrepancies, overselling, and fulfillment delays.</p>
          <p>Spend less time managing stock and more time growing your business.</p>
        </div>
      </div>

      <hr className="border-stroke-1 dark:border-white/10" />

      {/* One Inventory. Every Channel. */}
      <div className="space-y-6">
        <h4 className="text-heading-5 font-black tracking-tight text-secondary dark:text-white">One Inventory. Every Channel.</h4>
        <h5 className="text-heading-6 font-bold text-secondary dark:text-white mb-2">Manage Everything from a Single Dashboard</h5>
        <p className="leading-relaxed text-secondary/70 dark:text-white/70">Keep inventory synchronized across:</p>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4">
          {["Amazon", "Flipkart", "Shopify", "WhatsApp Commerce", "CaartZee Store", "Custom Sales Channels"].map((item, i) => (
            <div key={i} className="bg-black/5 dark:bg-white/5 p-4 rounded-xl text-center font-medium">
              {item}
            </div>
          ))}
        </div>
        <p className="mt-4 leading-relaxed font-bold text-secondary dark:text-white">No matter where a sale happens, your inventory updates instantly across all connected platforms.</p>
      </div>

      <hr className="border-stroke-1 dark:border-white/10" />

      {/* Never Oversell Again & Low Stock Alerts */}
      <div className="space-y-6">
        <h4 className="text-heading-5 font-black tracking-tight text-secondary dark:text-white">Stay Ahead of Demand</h4>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="border border-stroke-1 dark:border-white/10 p-6 rounded-2xl">
            <h5 className="text-heading-6 font-bold text-secondary dark:text-white mb-2">Never Oversell Again</h5>
            <p className="font-bold text-primary-500 mb-2">Real-Time Inventory Synchronization</p>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70 mb-3">One of the biggest challenges in multi-channel selling is maintaining accurate stock levels.</p>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70 mb-3">CaartZee updates inventory automatically whenever an order is placed, ensuring customers always see accurate product availability.</p>
            <p className="font-bold text-secondary/90 dark:text-white/90">Benefits:</p>
            <ul className="list-disc list-inside space-y-1 ml-2 leading-relaxed text-secondary/70 dark:text-white/70">
              <li>Prevent overselling</li>
              <li>Eliminate manual updates</li>
              <li>Reduce fulfillment errors</li>
              <li>Improve customer satisfaction</li>
              <li>Maintain inventory accuracy</li>
            </ul>
          </div>

          <div className="border border-stroke-1 dark:border-white/10 p-6 rounded-2xl">
            <h5 className="text-heading-6 font-bold text-secondary dark:text-white mb-2">Get Notified Before Stock Runs Out</h5>
            <p className="font-bold text-primary-500 mb-2">Smart Low-Stock Alerts</p>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70 mb-3">Stay ahead of demand with automated inventory notifications.</p>
            <p className="font-bold text-secondary/90 dark:text-white/90">Receive instant alerts when products are:</p>
            <ul className="list-disc list-inside space-y-1 ml-2 leading-relaxed text-secondary/70 dark:text-white/70">
              <li>Running low</li>
              <li>Nearly out of stock</li>
              <li>Reaching reorder thresholds</li>
            </ul>
            <p className="mt-4 font-medium text-secondary/90 dark:text-white/90">Never miss a sales opportunity due to unexpected stock shortages.</p>
          </div>
        </div>
      </div>

      <hr className="border-stroke-1 dark:border-white/10" />

      {/* Track Inventory & Automate Updates */}
      <div className="space-y-6">
        <h4 className="text-heading-5 font-black tracking-tight text-secondary dark:text-white">Complete Visibility & Automation</h4>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="bg-black/5 dark:bg-white/5 p-6 rounded-2xl">
            <h5 className="text-heading-6 font-bold text-secondary dark:text-white mb-2">Track Inventory in Real Time</h5>
            <p className="font-bold text-primary-500 mb-2">Complete Inventory Visibility</p>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70 mb-3">Monitor inventory performance from one centralized dashboard. View:</p>
            <ul className="list-disc list-inside space-y-1 ml-2 leading-relaxed text-secondary/70 dark:text-white/70">
              <li>Available stock</li>
              <li>Reserved inventory</li>
              <li>Incoming inventory</li>
              <li>Out-of-stock products</li>
              <li>Inventory movements</li>
              <li>Product availability</li>
            </ul>
            <p className="mt-4 font-medium text-secondary/90 dark:text-white/90">Know exactly what's happening across your business at any moment.</p>
          </div>

          <div className="bg-black/5 dark:bg-white/5 p-6 rounded-2xl">
            <h5 className="text-heading-6 font-bold text-secondary dark:text-white mb-2">Automate Inventory Updates</h5>
            <p className="font-bold text-primary-500 mb-2">Let Automation Handle the Work</p>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70 mb-3">Inventory management shouldn't require constant manual attention. CaartZee automatically:</p>
            <ul className="list-disc list-inside space-y-1 ml-2 leading-relaxed text-secondary/70 dark:text-white/70">
              <li>Updates stock levels</li>
              <li>Syncs inventory across channels</li>
              <li>Adjusts quantities after purchases</li>
              <li>Tracks inventory changes</li>
              <li>Maintains data accuracy</li>
            </ul>
            <p className="mt-4 font-medium text-secondary/90 dark:text-white/90">Operate more efficiently with fewer manual tasks.</p>
          </div>
        </div>
      </div>

      <hr className="border-stroke-1 dark:border-white/10" />

      {/* Faster Order Fulfillment & Product Insights */}
      <div className="space-y-6">
        <h4 className="text-heading-5 font-black tracking-tight text-secondary dark:text-white">Better Fulfillment & Insights</h4>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="border border-stroke-1 dark:border-white/10 p-5 rounded-2xl">
            <h5 className="text-heading-6 font-bold text-secondary dark:text-white mb-2">Faster Order Fulfillment</h5>
            <p className="font-bold text-primary-500 mb-2">Deliver Orders with Confidence</p>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70 mb-3">Accurate inventory leads to faster fulfillment. With synchronized stock levels, your team can process orders quickly without worrying about inventory discrepancies.</p>
            <p className="font-bold text-secondary/90 dark:text-white/90">Benefits include:</p>
            <ul className="list-disc list-inside space-y-1 ml-2 leading-relaxed text-secondary/70 dark:text-white/70">
              <li>Faster shipping</li>
              <li>Fewer fulfillment mistakes</li>
              <li>Improved customer experience</li>
              <li>Reduced operational delays</li>
            </ul>
          </div>

          <div className="border border-stroke-1 dark:border-white/10 p-5 rounded-2xl">
            <h5 className="text-heading-6 font-bold text-secondary dark:text-white mb-2">Product-Level Inventory Insights</h5>
            <p className="font-bold text-primary-500 mb-2">Understand Your Inventory Performance</p>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70 mb-3">Identify products that require attention before they affect your business. Track:</p>
            <ul className="list-disc list-inside space-y-1 ml-2 leading-relaxed text-secondary/70 dark:text-white/70">
              <li>Fast-selling products</li>
              <li>Slow-moving inventory</li>
              <li>Inventory turnover</li>
              <li>Product demand trends</li>
              <li>Restocking requirements</li>
            </ul>
            <p className="mt-3 font-medium text-secondary/90 dark:text-white/90">Make inventory decisions based on real business data.</p>
          </div>
        </div>
      </div>

      <hr className="border-stroke-1 dark:border-white/10" />

      {/* Built to Scale */}
      <div className="space-y-6">
        <h4 className="text-heading-5 font-black tracking-tight text-secondary dark:text-white">Built to Scale with Your Business</h4>
        <p className="leading-relaxed text-secondary/70 dark:text-white/70">Whether you're selling 50 products or 50,000 products, CaartZee gives you the tools to manage inventory efficiently.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="bg-primary-500/5 p-4 rounded-xl border border-primary-500/10 text-secondary/70 dark:text-white/70">
            <strong className="text-primary-500 block mb-1">Simplify Operations</strong> Manage inventory across all channels from one place.
          </div>
          <div className="bg-primary-500/5 p-4 rounded-xl border border-primary-500/10 text-secondary/70 dark:text-white/70">
            <strong className="text-primary-500 block mb-1">Save Time</strong> Reduce manual inventory management and repetitive tasks.
          </div>
          <div className="bg-primary-500/5 p-4 rounded-xl border border-primary-500/10 text-secondary/70 dark:text-white/70">
            <strong className="text-primary-500 block mb-1">Improve Accuracy</strong> Maintain consistent stock levels across your business.
          </div>
          <div className="bg-primary-500/5 p-4 rounded-xl border border-primary-500/10 text-secondary/70 dark:text-white/70">
            <strong className="text-primary-500 block mb-1">Support Growth</strong> Scale confidently without increasing operational complexity.
          </div>
        </div>
      </div>

      <hr className="border-stroke-1 dark:border-white/10" />

      {/* Why Businesses Choose */}
      <div className="space-y-6">
        <h4 className="text-heading-5 font-black tracking-tight text-secondary dark:text-white">Why Businesses Choose CaartZee Inventory Management</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <div><h5 className="font-bold text-secondary dark:text-white mb-1">Centralized Control</h5><p className="leading-relaxed text-secondary/70 dark:text-white/70">Manage inventory across every channel from one dashboard.</p></div>
          <div><h5 className="font-bold text-secondary dark:text-white mb-1">Real-Time Updates</h5><p className="leading-relaxed text-secondary/70 dark:text-white/70">Keep stock levels accurate and synchronized automatically.</p></div>
          <div><h5 className="font-bold text-secondary dark:text-white mb-1">Automated Alerts</h5><p className="leading-relaxed text-secondary/70 dark:text-white/70">Stay informed before stock issues affect sales.</p></div>
          <div><h5 className="font-bold text-secondary dark:text-white mb-1">Better Customer Experience</h5><p className="leading-relaxed text-secondary/70 dark:text-white/70">Prevent order cancellations caused by unavailable inventory.</p></div>
          <div><h5 className="font-bold text-secondary dark:text-white mb-1">Increased Efficiency</h5><p className="leading-relaxed text-secondary/70 dark:text-white/70">Reduce manual work and streamline fulfillment operations.</p></div>
        </div>
      </div>

      <hr className="border-stroke-1 dark:border-white/10" />

      {/* FAQs */}
      <div className="space-y-6">
        <h4 className="text-heading-5 font-black tracking-tight text-secondary dark:text-white">Frequently Asked Questions</h4>
        <div className="space-y-5">
          <div><h5 className="font-bold text-secondary dark:text-white mb-1">Does inventory sync automatically?</h5><p className="leading-relaxed text-secondary/70 dark:text-white/70">Yes. Inventory updates automatically across all connected sales channels whenever an order is placed or stock changes.</p></div>
          <div><h5 className="font-bold text-secondary dark:text-white mb-1">Can I track inventory across multiple marketplaces?</h5><p className="leading-relaxed text-secondary/70 dark:text-white/70">Absolutely. CaartZee provides a centralized dashboard for inventory management across all connected platforms.</p></div>
          <div><h5 className="font-bold text-secondary dark:text-white mb-1">Will I receive low-stock alerts?</h5><p className="leading-relaxed text-secondary/70 dark:text-white/70">Yes. Automated notifications help you stay ahead of stock shortages and reorder products on time.</p></div>
          <div><h5 className="font-bold text-secondary dark:text-white mb-1">Can I prevent overselling?</h5><p className="leading-relaxed text-secondary/70 dark:text-white/70">Yes. Real-time synchronization ensures accurate inventory levels across all channels, reducing the risk of overselling.</p></div>
          <div><h5 className="font-bold text-secondary dark:text-white mb-1">Is Smart Inventory Management suitable for large catalogs?</h5><p className="leading-relaxed text-secondary/70 dark:text-white/70">Yes. CaartZee is designed to handle inventory management for businesses of all sizes, from small stores to enterprise-scale operations.</p></div>
        </div>
      </div>

      <hr className="border-stroke-1 dark:border-white/10" />

      {/* Ready to Grow */}
      <div className="bg-primary-500/10 p-8 rounded-3xl text-center space-y-5 border border-primary-500/20">
        <h4 className="text-heading-4 font-black tracking-tight text-secondary dark:text-white">Inventory Management Without the Complexity</h4>
        <p className="leading-relaxed text-secondary/70 dark:text-white/70 max-w-xl mx-auto">Keep stock synchronized, automate updates, and fulfill orders with confidence from a single platform.</p>
        <p className="font-black text-primary-500 text-lg uppercase tracking-wider">Stay Accurate. Stay Efficient. Stay Ready for Growth.</p>
        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <LinkButton href="/contact-us" className="inline-flex h-14 items-center justify-center rounded-full bg-primary-500 px-8 text-base font-bold text-white transition-all hover:bg-primary-600 hover:shadow-lg hover:shadow-primary-500/30">
            Get Started Today
          </LinkButton>
        </div>
      </div>

    </div>
  );
};
