import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import LinkButton from '../ui/button/LinkButton';

export const CatalogSyncFeatureContent = () => {
  return (
    <div className="space-y-8 text-secondary dark:text-white/80 pb-6 text-left">
      {/* Secondary Hero Section */}
      <div className="space-y-6 text-center max-w-3xl mx-auto flex flex-col items-center pt-4 pb-8">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight leading-none text-secondary dark:text-white mb-4">
          Bring Your Catalog Into Every Conversation.
        </h1>
        <p className="text-lg md:text-xl leading-relaxed text-secondary/70 dark:text-white/70">
          Your customers are already on WhatsApp. Now your products can be too.
        </p>
        <p className="text-lg md:text-xl leading-relaxed text-secondary/70 dark:text-white/70">
          Sync your catalog from Shopify and CaartZee in one click and give customers a seamless way to browse, ask questions, and buy—all within the conversation.
        </p>
        <p className="text-lg md:text-xl font-bold text-primary-500 mt-2">
          Turn product discovery into instant purchases.
        </p>
        <div className="pt-8">
          <LinkButton href="/contact-us" className="inline-flex h-14 items-center justify-center rounded-full bg-primary-500 px-10 text-base font-bold text-white transition-all hover:bg-primary-600 hover:shadow-lg hover:shadow-primary-500/30">
            Sync Your Catalog
          </LinkButton>
        </div>
      </div>

      <hr className="border-stroke-1 dark:border-white/10" />

      {/* Visibility & Discovery (with Image) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center py-8">
        {/* Left Image */}
        <div className="w-full lg:col-span-8">
          <img 
            src="/images/imageggg.png" 
            alt="Catalog Sync" 
            className="w-full h-auto rounded-2xl shadow-2xl border border-stroke-1 dark:border-white/10 object-contain" 
          />
        </div>

        {/* Right Content */}
        <div className="space-y-4 lg:col-span-4">
          <h4 className="text-heading-5 font-black tracking-tight text-secondary dark:text-white">Your Products Deserve More Visibility</h4>
          <p className="leading-relaxed text-secondary/70 dark:text-white/70">Customers spend more time on messaging apps than almost anywhere else online.</p>
          <ul className="list-disc list-inside space-y-1 ml-2 leading-relaxed text-secondary/70 dark:text-white/70">
            <li>They're chatting.</li>
            <li>Sharing recommendations.</li>
            <li>Discovering brands.</li>
            <li>Making buying decisions.</li>
          </ul>
          <p className="leading-relaxed text-secondary/70 dark:text-white/70">Yet most product catalogs remain locked inside online stores.</p>
          <p className="font-bold text-secondary/90 dark:text-white/90">Catalog Sync helps you bring your products directly into WhatsApp, where conversations naturally become sales opportunities.</p>
        </div>
      </div>

      <hr className="border-stroke-1 dark:border-white/10" />

      {/* Discovery Channel */}
      <div className="space-y-6">
        <div className="border border-stroke-1 dark:border-white/10 p-6 rounded-2xl">
          <h4 className="text-heading-5 font-black tracking-tight text-secondary dark:text-white mb-4">Turn WhatsApp Into a Product Discovery Channel</h4>
          <p className="leading-relaxed text-secondary/70 dark:text-white/70 mb-3">Every customer conversation is an opportunity to showcase your products. Instead of sending customers to search through your store, instantly share products directly within the chat.</p>
          <p className="leading-relaxed text-secondary/70 dark:text-white/70 mb-2">Customers can:</p>
          <ul className="list-disc list-inside space-y-1 ml-2 leading-relaxed text-secondary/70 dark:text-white/70 mb-3">
            <li>Browse products</li>
            <li>View pricing</li>
            <li>Explore collections</li>
            <li>Check availability</li>
            <li>Ask questions</li>
            <li>Make purchase decisions</li>
          </ul>
          <p className="font-bold text-secondary/90 dark:text-white/90">Without leaving the conversation.</p>
        </div>
      </div>

      <hr className="border-stroke-1 dark:border-white/10" />

      {/* Sync Once & Shoppable */}
      <div className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="bg-black/5 dark:bg-white/5 p-6 rounded-2xl">
            <h4 className="text-heading-5 font-black tracking-tight text-secondary dark:text-white mb-4">Sync Once. Stay Updated Automatically.</h4>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70 mb-3">Managing products across multiple platforms shouldn't create more work.</p>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70 mb-3">Catalog Sync automatically connects your Shopify and CaartZee catalogs with WhatsApp, ensuring product information stays consistent everywhere.</p>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70 mb-3">When products are updated, your catalog stays current.</p>
            <ul className="list-disc list-inside space-y-1 ml-2 font-bold text-secondary/90 dark:text-white/90">
              <li>No manual uploads.</li>
              <li>No duplicate work.</li>
              <li>No outdated information.</li>
            </ul>
          </div>

          <div className="bg-black/5 dark:bg-white/5 p-6 rounded-2xl">
            <h4 className="text-heading-5 font-black tracking-tight text-secondary dark:text-white mb-4">Make Every Conversation Shoppable</h4>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70 mb-3">Customers shouldn't have to jump between apps to complete a purchase.</p>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70 mb-3">With Catalog Sync, every WhatsApp interaction becomes an opportunity to discover and buy products.</p>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70 mb-3">The path from interest to purchase becomes shorter, faster, and more convenient.</p>
            <p className="font-bold text-secondary/90 dark:text-white/90">Because fewer steps create better buying experiences.</p>
          </div>
        </div>
      </div>

      <hr className="border-stroke-1 dark:border-white/10" />

      {/* Showcase Products & Seamless Experience */}
      <div className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="border border-stroke-1 dark:border-white/10 p-6 rounded-2xl">
            <h4 className="text-heading-5 font-black tracking-tight text-secondary dark:text-white mb-4">Showcase Products Instantly</h4>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70 mb-3">When customers ask about a product, speed matters. Instead of manually sending images, descriptions, or links, instantly share products from your synchronized catalog.</p>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70 mb-2">Help customers:</p>
            <ul className="list-disc list-inside space-y-1 ml-2 leading-relaxed text-secondary/70 dark:text-white/70 mb-3">
              <li>Compare products</li>
              <li>View product details</li>
              <li>Discover recommendations</li>
              <li>Explore new arrivals</li>
              <li>Find the right product faster</li>
            </ul>
            <p className="font-bold text-secondary/90 dark:text-white/90">All within the same conversation.</p>
          </div>

          <div className="border border-stroke-1 dark:border-white/10 p-6 rounded-2xl">
            <h4 className="text-heading-5 font-black tracking-tight text-secondary dark:text-white mb-4">Create a Seamless Shopping Experience</h4>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70 mb-3">Modern shoppers expect convenience.</p>
            <ul className="list-disc list-inside space-y-1 ml-2 leading-relaxed text-secondary/70 dark:text-white/70 mb-3">
              <li>They want information quickly.</li>
              <li>They want recommendations instantly.</li>
              <li>They want purchasing to feel effortless.</li>
            </ul>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70 mb-3">Catalog Sync creates a unified experience where product discovery, customer conversations, and purchases happen naturally together.</p>
            <p className="font-bold text-secondary/90 dark:text-white/90">The result is a smoother customer journey from first interaction to final purchase.</p>
          </div>
        </div>
      </div>

      <hr className="border-stroke-1 dark:border-white/10" />

      {/* Reduce Friction & Ready to Sell */}
      <div className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div>
            <h4 className="text-heading-5 font-black tracking-tight text-secondary dark:text-white mb-4">Reduce Friction. Increase Conversions.</h4>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70 mb-3">Every extra click can create hesitation. Every unnecessary step can reduce conversions.</p>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70 mb-3">By bringing products directly into WhatsApp, businesses can remove friction and make it easier for customers to move from browsing to buying.</p>
            <p className="font-bold text-primary-500">The easier the experience, the more likely customers are to complete their purchase.</p>
          </div>

          <div>
            <h4 className="text-heading-5 font-black tracking-tight text-secondary dark:text-white mb-4">Keep Your Catalog Ready to Sell</h4>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70 mb-2">Products change constantly.</p>
            <ul className="list-disc list-inside space-y-1 ml-2 leading-relaxed text-secondary/70 dark:text-white/70 mb-3">
              <li>New launches.</li>
              <li>Price updates.</li>
              <li>Inventory changes.</li>
              <li>Seasonal collections.</li>
            </ul>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70 mb-3">Catalog Sync keeps your WhatsApp catalog aligned with your business, so customers always see the latest products and information.</p>
            <p className="font-bold text-secondary/90 dark:text-white/90">Because accuracy builds trust. And trust drives sales.</p>
          </div>
        </div>
      </div>

      <hr className="border-stroke-1 dark:border-white/10" />

      {/* Built for Modern Commerce */}
      <div className="space-y-6">
        <h4 className="text-heading-5 font-black tracking-tight text-secondary dark:text-white">Built for Modern Commerce</h4>
        <p className="leading-relaxed text-secondary/70 dark:text-white/70 mb-3">Whether you sell through Shopify, CaartZee, marketplaces, or multiple channels, Catalog Sync helps create a consistent shopping experience wherever customers engage with your business.</p>
        <ul className="flex flex-wrap gap-4 mt-6">
          {["One catalog", "One source of truth", "Every customer conversation"].map((item, i) => (
            <li key={i} className="flex items-center gap-2 font-bold bg-black/5 dark:bg-white/5 px-5 py-3 rounded-full text-sm text-secondary/90 dark:text-white/90">
              <CheckCircle2 className="text-primary-500 w-5 h-5 shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <hr className="border-stroke-1 dark:border-white/10" />

      {/* More Than Product Sync */}
      <div className="space-y-6">
        <h4 className="text-heading-5 font-black tracking-tight text-secondary dark:text-white">More Than Product Sync</h4>
        <p className="leading-relaxed text-secondary/70 dark:text-white/70 mb-3">Catalog Sync doesn't just move products from one platform to another. It helps businesses:</p>
        <ul className="list-disc list-inside space-y-2 ml-2 font-medium text-secondary/90 dark:text-white/90 mb-4">
          <li>Reach customers faster</li>
          <li>Improve product discovery</li>
          <li>Increase customer engagement</li>
          <li>Simplify operations</li>
          <li>Create better shopping experiences</li>
          <li>Drive more conversions</li>
        </ul>
        <p className="font-bold text-primary-500 text-lg">It's not just about syncing products. It's about creating opportunities to sell.</p>
      </div>

      <hr className="border-stroke-1 dark:border-white/10" />

      {/* Why Businesses Choose Catalog Sync */}
      <div className="space-y-6">
        <h4 className="text-heading-5 font-black tracking-tight text-secondary dark:text-white">Why Businesses Choose Catalog Sync</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <div><h5 className="font-bold text-secondary dark:text-white mb-1">Faster Product Discovery</h5><p className="leading-relaxed text-secondary/70 dark:text-white/70">Help customers find products without leaving WhatsApp.</p></div>
          <div><h5 className="font-bold text-secondary dark:text-white mb-1">Better Customer Experiences</h5><p className="leading-relaxed text-secondary/70 dark:text-white/70">Create seamless shopping journeys through conversations.</p></div>
          <div><h5 className="font-bold text-secondary dark:text-white mb-1">Automatic Updates</h5><p className="leading-relaxed text-secondary/70 dark:text-white/70">Keep catalogs synchronized across platforms.</p></div>
          <div><h5 className="font-bold text-secondary dark:text-white mb-1">Increased Conversions</h5><p className="leading-relaxed text-secondary/70 dark:text-white/70">Reduce friction between product discovery and purchase.</p></div>
          <div><h5 className="font-bold text-secondary dark:text-white mb-1">Simplified Operations</h5><p className="leading-relaxed text-secondary/70 dark:text-white/70">Manage products from a single source without manual effort.</p></div>
        </div>
      </div>

      <hr className="border-stroke-1 dark:border-white/10" />

      {/* Built for Businesses That Sell Through Conversations */}
      <div className="space-y-6">
        <h4 className="text-heading-5 font-black tracking-tight text-secondary dark:text-white">Built for Businesses That Sell Through Conversations</h4>
        <p className="leading-relaxed text-secondary/70 dark:text-white/70 mb-3">Whether you're a growing D2C brand, ecommerce store, retailer, or marketplace seller, Catalog Sync helps you meet customers where they already are and turn conversations into revenue.</p>
        <p className="font-bold text-secondary/90 dark:text-white/90">Because the future of commerce is conversational.</p>
      </div>

      <hr className="border-stroke-1 dark:border-white/10" />

      {/* Ready to Grow */}
      <div className="bg-primary-500/10 p-8 rounded-3xl text-center space-y-5 border border-primary-500/20">
        <h4 className="text-heading-4 font-black tracking-tight text-secondary dark:text-white">Every Product Conversation Should Lead Somewhere.</h4>
        <p className="leading-relaxed text-secondary/70 dark:text-white/70 max-w-xl mx-auto">Bring your catalog to WhatsApp, simplify product discovery, and help customers buy without friction.</p>
        <p className="font-black text-primary-500 text-lg uppercase tracking-wider">More Visibility. More Conversations. More Sales.</p>
        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <LinkButton href="/contact-us" className="inline-flex h-14 items-center justify-center rounded-full bg-primary-500 px-8 text-base font-bold text-white transition-all hover:bg-primary-600 hover:shadow-lg hover:shadow-primary-500/30">
            Start Catalog Sync
          </LinkButton>
        </div>
      </div>

    </div>
  );
};
