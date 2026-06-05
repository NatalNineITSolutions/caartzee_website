import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import LinkButton from '../ui/button/LinkButton';

export const MarketplaceIntegrationContent = () => {
  return (
    <div className="space-y-8 text-secondary dark:text-white/80 pb-6 text-left">
      {/* Hero Section */}
      <div className="space-y-6 text-center max-w-3xl mx-auto flex flex-col items-center pt-4 pb-8">
        <h1 className="text-heading-3 md:text-heading-2 font-black tracking-tight text-secondary dark:text-white">Sell Everywhere. Manage Everything.</h1>
        <p className="text-lg md:text-xl leading-relaxed text-secondary/70 dark:text-white/70">
          Connect Amazon, Flipkart, and your CaartZee store from one unified dashboard.
        </p>
        <p className="text-lg md:text-xl leading-relaxed text-secondary/70 dark:text-white/70">
          Sync inventory in real time, manage orders across marketplaces, and prevent overselling with automated stock updates. Spend less time managing platforms and more time growing your business.
        </p>
        <ul className="flex flex-wrap justify-center gap-4 mt-6">
          {["Amazon Integration", "Flipkart Integration", "Real-Time Inventory Sync", "Centralized Order Management", "Automated Stock Updates"].map((item, i) => (
            <li key={i} className="flex items-center gap-2 font-medium bg-black/5 dark:bg-white/5 px-4 py-2 rounded-full text-sm">
              <CheckCircle2 className="text-primary-500 w-4 h-4 shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <div className="pt-8">
          <LinkButton href="/contact-us" className="inline-flex h-14 items-center justify-center rounded-full bg-primary-500 px-10 text-base font-bold text-white transition-all hover:bg-primary-600 hover:shadow-lg hover:shadow-primary-500/30">
            Connect Marketplaces
          </LinkButton>
        </div>
      </div>

      <hr className="border-stroke-1 dark:border-white/10" />

      {/* One Dashboard for Every Marketplace */}
      <div className="space-y-4">
        <h4 className="text-heading-5 font-black tracking-tight text-secondary dark:text-white">One Dashboard for Every Marketplace</h4>
        <div className="space-y-4 text-lg leading-relaxed text-secondary/70 dark:text-white/70">
          <p>Growing businesses shouldn't have to juggle multiple platforms.</p>
          <p>CaartZee brings all your marketplaces together in a single workspace, giving you complete control over products, inventory, orders, and performance.</p>
          <p>Whether you sell on Amazon, Flipkart, or your own store, everything stays connected and updated automatically.</p>
        </div>
      </div>

      <hr className="border-stroke-1 dark:border-white/10" />

      {/* Expand Your Reach */}
      <div className="space-y-6">
        <h4 className="text-heading-5 font-black tracking-tight text-secondary dark:text-white">Expand Your Reach Without Expanding Your Workload</h4>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-black/5 dark:bg-white/5 p-5 rounded-2xl">
            <h5 className="text-heading-6 font-bold text-secondary dark:text-white mb-2">Reach More Customers</h5>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70">Sell across India's leading marketplaces and reach millions of shoppers from one platform.</p>
          </div>
          <div className="bg-black/5 dark:bg-white/5 p-5 rounded-2xl">
            <h5 className="text-heading-6 font-bold text-secondary dark:text-white mb-2">Manage Less</h5>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70">Stop switching between multiple seller panels and dashboards.</p>
          </div>
          <div className="bg-black/5 dark:bg-white/5 p-5 rounded-2xl">
            <h5 className="text-heading-6 font-bold text-secondary dark:text-white mb-2">Grow Faster</h5>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70">Focus on sales, marketing, and customer experience while CaartZee handles synchronization behind the scenes.</p>
          </div>
        </div>
      </div>

      <hr className="border-stroke-1 dark:border-white/10" />

      {/* Keep Inventory Perfectly Synced */}
      <div className="space-y-6">
        <h4 className="text-heading-5 font-black tracking-tight text-secondary dark:text-white">Keep Inventory Perfectly Synced</h4>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="border border-stroke-1 dark:border-white/10 p-5 rounded-2xl">
            <h5 className="text-heading-6 font-bold text-secondary dark:text-white mb-2">Never Oversell Again</h5>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70 mb-3">Inventory changes instantly across all connected channels. When a product sells on Amazon, Flipkart, or your CaartZee store, stock levels update automatically everywhere.</p>
            <ul className="list-disc list-inside space-y-1 ml-2 leading-relaxed text-secondary/70 dark:text-white/70">
              <li>No manual updates</li>
              <li>No inventory mismatches</li>
              <li>No disappointed customers</li>
            </ul>
          </div>

          <div className="border border-stroke-1 dark:border-white/10 p-5 rounded-2xl">
            <h5 className="text-heading-6 font-bold text-secondary dark:text-white mb-2">Real-Time Stock Visibility</h5>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70 mb-3">Always know what's available and what's running low.</p>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70">Monitor inventory levels across all marketplaces in one place and stay ahead of demand. Receive alerts before products go out of stock and keep your best-selling items available.</p>
          </div>
        </div>
      </div>

      <hr className="border-stroke-1 dark:border-white/10" />

      {/* Manage Orders */}
      <div className="space-y-6">
        <h4 className="text-heading-5 font-black tracking-tight text-secondary dark:text-white">Manage Orders From One Place</h4>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="bg-black/5 dark:bg-white/5 p-6 rounded-2xl">
            <h5 className="text-heading-6 font-bold text-secondary dark:text-white mb-2">Every Order. One Workflow.</h5>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70 mb-3">View and manage orders from all your sales channels through a centralized dashboard. Track orders from:</p>
            <ul className="list-disc list-inside space-y-1 ml-2 leading-relaxed text-secondary/70 dark:text-white/70">
              <li>Amazon</li>
              <li>Flipkart</li>
              <li>CaartZee Store</li>
            </ul>
            <p className="mt-3 font-medium text-secondary/90 dark:text-white/90">Without logging into multiple platforms.</p>
          </div>

          <div className="bg-black/5 dark:bg-white/5 p-6 rounded-2xl">
            <h5 className="text-heading-6 font-bold text-secondary dark:text-white mb-2">Faster Fulfillment</h5>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70 mb-3">Process orders quickly with streamlined workflows that reduce manual effort and improve operational efficiency.</p>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70">Keep customers informed with accurate order updates and tracking information.</p>
          </div>
        </div>
      </div>

      <hr className="border-stroke-1 dark:border-white/10" />

      {/* Product Management */}
      <div className="space-y-4">
        <h4 className="text-heading-5 font-black tracking-tight text-secondary dark:text-white">Product Management Made Simple</h4>
        <h5 className="text-heading-6 font-bold text-secondary dark:text-white mb-2">Update Once. Sync Everywhere.</h5>
        <p className="leading-relaxed text-secondary/70 dark:text-white/70">Create and manage product listings from a single dashboard. Update:</p>
        <ul className="list-disc list-inside space-y-2 mt-2 ml-2 leading-relaxed text-secondary/70 dark:text-white/70">
          <li>Product information</li>
          <li>Pricing</li>
          <li>Inventory</li>
          <li>Images</li>
          <li>Descriptions</li>
        </ul>
        <p className="font-bold text-secondary dark:text-white mt-4">Changes automatically sync across connected marketplaces.</p>
      </div>

      <hr className="border-stroke-1 dark:border-white/10" />

      {/* Built for Growing Businesses */}
      <div className="space-y-6">
        <h4 className="text-heading-5 font-black tracking-tight text-secondary dark:text-white">Built for Growing Businesses</h4>
        <p className="leading-relaxed text-secondary/70 dark:text-white/70">Whether you're managing 100 products or 100,000 products, CaartZee scales with your business.</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          <div className="border border-stroke-1 dark:border-white/10 p-5 rounded-2xl">
            <h5 className="text-heading-6 font-bold text-secondary dark:text-white mb-2">Reduce Operational Complexity</h5>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70">Eliminate repetitive tasks and manual updates.</p>
          </div>
          <div className="border border-stroke-1 dark:border-white/10 p-5 rounded-2xl">
            <h5 className="text-heading-6 font-bold text-secondary dark:text-white mb-2">Improve Accuracy</h5>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70">Keep product and inventory data consistent across all channels.</p>
          </div>
          <div className="border border-stroke-1 dark:border-white/10 p-5 rounded-2xl">
            <h5 className="text-heading-6 font-bold text-secondary dark:text-white mb-2">Save Valuable Time</h5>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70">Spend less time managing systems and more time driving growth.</p>
          </div>
        </div>
      </div>

      <hr className="border-stroke-1 dark:border-white/10" />

      {/* Powerful Automation */}
      <div className="space-y-4">
        <h4 className="text-heading-5 font-black tracking-tight text-secondary dark:text-white">Powerful Automation</h4>
        <h5 className="text-heading-6 font-bold text-secondary dark:text-white mb-2">Let Automation Handle the Busy Work</h5>
        <p className="leading-relaxed text-secondary/70 dark:text-white/70">CaartZee continuously synchronizes your business operations behind the scenes. Automatically:</p>
        <ul className="list-disc list-inside space-y-2 mt-2 ml-2 leading-relaxed text-secondary/70 dark:text-white/70">
          <li>Sync inventory</li>
          <li>Update stock levels</li>
          <li>Process order information</li>
          <li>Manage marketplace data</li>
          <li>Track sales performance</li>
        </ul>
        <p className="font-bold text-secondary dark:text-white mt-4">Operate smarter without increasing your workload.</p>
      </div>

      <hr className="border-stroke-1 dark:border-white/10" />

      {/* Why Businesses Choose CaartZee */}
      <div className="space-y-6">
        <h4 className="text-heading-5 font-black tracking-tight text-secondary dark:text-white">Why Businesses Choose CaartZee</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <div><h5 className="font-bold text-secondary dark:text-white mb-1">Sell Across Multiple Channels</h5><p className="leading-relaxed text-secondary/70 dark:text-white/70">Reach more customers through Amazon, Flipkart, and your own store.</p></div>
          <div><h5 className="font-bold text-secondary dark:text-white mb-1">Prevent Overselling</h5><p className="leading-relaxed text-secondary/70 dark:text-white/70">Maintain accurate inventory levels everywhere.</p></div>
          <div><h5 className="font-bold text-secondary dark:text-white mb-1">Simplify Operations</h5><p className="leading-relaxed text-secondary/70 dark:text-white/70">Manage products, orders, and inventory from one platform.</p></div>
          <div><h5 className="font-bold text-secondary dark:text-white mb-1">Increase Efficiency</h5><p className="leading-relaxed text-secondary/70 dark:text-white/70">Automate repetitive tasks and reduce manual errors.</p></div>
          <div><h5 className="font-bold text-secondary dark:text-white mb-1">Scale Confidently</h5><p className="leading-relaxed text-secondary/70 dark:text-white/70">Support business growth without operational bottlenecks.</p></div>
        </div>
      </div>

      <hr className="border-stroke-1 dark:border-white/10" />

      {/* FAQs */}
      <div className="space-y-6">
        <h4 className="text-heading-5 font-black tracking-tight text-secondary dark:text-white">Frequently Asked Questions</h4>
        <div className="space-y-5">
          <div><h5 className="font-bold text-secondary dark:text-white mb-1">Which marketplaces can I connect?</h5><p className="leading-relaxed text-secondary/70 dark:text-white/70">CaartZee supports leading marketplaces including Amazon and Flipkart, along with your CaartZee-powered online store.</p></div>
          <div><h5 className="font-bold text-secondary dark:text-white mb-1">Does inventory sync automatically?</h5><p className="leading-relaxed text-secondary/70 dark:text-white/70">Yes. Inventory updates happen in real time across all connected sales channels.</p></div>
          <div><h5 className="font-bold text-secondary dark:text-white mb-1">Can I manage orders from one dashboard?</h5><p className="leading-relaxed text-secondary/70 dark:text-white/70">Absolutely. Orders from all connected marketplaces are available in a centralized workspace.</p></div>
          <div><h5 className="font-bold text-secondary dark:text-white mb-1">Will product updates sync automatically?</h5><p className="leading-relaxed text-secondary/70 dark:text-white/70">Yes. Changes to product information, pricing, and inventory are reflected across connected channels.</p></div>
          <div><h5 className="font-bold text-secondary dark:text-white mb-1">Is Marketplace Integration suitable for growing businesses?</h5><p className="leading-relaxed text-secondary/70 dark:text-white/70">Yes. CaartZee is designed to help businesses scale efficiently while keeping operations organized and automated.</p></div>
        </div>
      </div>

      <hr className="border-stroke-1 dark:border-white/10" />

      {/* Ready to Grow */}
      <div className="bg-primary-500/10 p-8 rounded-3xl text-center space-y-5 border border-primary-500/20">
        <h4 className="text-heading-4 font-black tracking-tight text-secondary dark:text-white">Grow Beyond a Single Marketplace</h4>
        <p className="leading-relaxed text-secondary/70 dark:text-white/70 max-w-xl mx-auto">Reach more customers, simplify operations, and manage your entire commerce business from one platform.</p>
        <p className="font-black text-primary-500 text-lg uppercase tracking-wider">More Channels. Less Complexity. Unlimited Growth.</p>
        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <LinkButton href="/contact-us" className="inline-flex h-14 items-center justify-center rounded-full bg-primary-500 px-8 text-base font-bold text-white transition-all hover:bg-primary-600 hover:shadow-lg hover:shadow-primary-500/30">
            Get Started Today
          </LinkButton>
        </div>
      </div>

    </div>
  );
};
