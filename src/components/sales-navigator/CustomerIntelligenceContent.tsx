import React from 'react';
import LinkButton from '../ui/button/LinkButton';

export const CustomerIntelligenceContent = () => {
  return (
    <div className="space-y-8 text-secondary dark:text-white/80 pb-6 text-left">
      {/* Hero Section */}
      <div className="space-y-6 text-center max-w-3xl mx-auto flex flex-col items-center pt-4 pb-8">
        <h1 className="text-heading-3 md:text-heading-2 font-black tracking-tight text-secondary dark:text-white">Every Customer Leaves Clues. Turn Them Into Growth.</h1>
        <p className="text-lg md:text-xl leading-relaxed text-secondary/70 dark:text-white/70">
          Understand what customers want before they ask.
        </p>
        <p className="text-lg md:text-xl leading-relaxed text-secondary/70 dark:text-white/70">
          Track shopping behavior, buying patterns, and engagement across every touchpoint to create experiences that convert more customers and build lasting loyalty.
        </p>
        <p className="text-lg md:text-xl font-bold text-primary-500 mt-2">
          Know your customers. Personalize every interaction. Grow revenue faster.
        </p>
        <div className="pt-8">
          <LinkButton href="/contact-us" className="inline-flex h-14 items-center justify-center rounded-full bg-primary-500 px-10 text-base font-bold text-white transition-all hover:bg-primary-600 hover:shadow-lg hover:shadow-primary-500/30">
            Explore Customer Intelligence
          </LinkButton>
        </div>
      </div>

      <hr className="border-stroke-1 dark:border-white/10" />

      {/* Stop Guessing What Customers Want */}
      <div className="space-y-4">
        <h4 className="text-heading-5 font-black tracking-tight text-secondary dark:text-white">Stop Guessing What Customers Want</h4>
        <div className="space-y-4 text-lg leading-relaxed text-secondary/70 dark:text-white/70">
          <p>The most successful brands don't rely on assumptions.</p>
          <p>They understand what customers browse, what they buy, how often they return, and what keeps them engaged.</p>
          <p>CaartZee transforms customer activity into actionable insights, helping you make smarter decisions across marketing, sales, and customer experience.</p>
        </div>
      </div>

      <hr className="border-stroke-1 dark:border-white/10" />

      {/* One Customer. One Complete Story. */}
      <div className="space-y-6">
        <h4 className="text-heading-5 font-black tracking-tight text-secondary dark:text-white">One Customer. One Complete Story.</h4>
        <p className="leading-relaxed text-secondary/70 dark:text-white/70">Customers interact with your business in many ways.</p>
        
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">
          {["They browse products.", "They ask questions.", "They purchase.", "They return."].map((item, i) => (
            <div key={i} className="bg-black/5 dark:bg-white/5 p-4 rounded-xl text-center font-medium">
              {item}
            </div>
          ))}
        </div>
        <p className="mt-4 leading-relaxed text-secondary/70 dark:text-white/70">CaartZee connects every interaction into a single customer profile, giving you a complete view of every relationship.</p>
        <p className="font-bold text-primary-500">Because better understanding leads to better experiences.</p>
      </div>

      <hr className="border-stroke-1 dark:border-white/10" />

      {/* Know Who's Ready to Buy & Personalization */}
      <div className="space-y-6">
        <h4 className="text-heading-5 font-black tracking-tight text-secondary dark:text-white">Target and Personalize</h4>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="border border-stroke-1 dark:border-white/10 p-6 rounded-2xl">
            <h5 className="text-heading-6 font-bold text-secondary dark:text-white mb-2">Know Who's Ready to Buy</h5>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70 mb-3">Not every customer is at the same stage.</p>
            <ul className="list-disc list-inside space-y-1 ml-2 leading-relaxed text-secondary/70 dark:text-white/70 mb-3">
              <li>Some are discovering your brand.</li>
              <li>Some are comparing options.</li>
              <li>Some are ready to purchase.</li>
            </ul>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70 mb-3">Customer Intelligence helps you identify buying intent and focus on the customers most likely to convert.</p>
            <p className="font-bold text-secondary/90 dark:text-white/90">Reach the right customer with the right message at the right moment.</p>
          </div>

          <div className="border border-stroke-1 dark:border-white/10 p-6 rounded-2xl">
            <h5 className="text-heading-6 font-bold text-secondary dark:text-white mb-2">Personalization That Feels Personal</h5>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70 mb-3">Customers expect more than generic marketing. Use real customer behavior to create experiences tailored to their interests, preferences, and purchase history.</p>
            <ul className="list-disc list-inside space-y-1 ml-2 leading-relaxed text-secondary/70 dark:text-white/70">
              <li>Recommend products they'll love.</li>
              <li>Send offers they'll care about.</li>
              <li>Build relationships they'll remember.</li>
            </ul>
          </div>
        </div>
      </div>

      <hr className="border-stroke-1 dark:border-white/10" />

      {/* Turn First Purchases Into Repeat Purchases & Valuable Customers */}
      <div className="space-y-6">
        <h4 className="text-heading-5 font-black tracking-tight text-secondary dark:text-white">Build Long-Term Loyalty</h4>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="bg-black/5 dark:bg-white/5 p-6 rounded-2xl">
            <h5 className="text-heading-6 font-bold text-secondary dark:text-white mb-2">Turn First Purchases Into Repeat Purchases</h5>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70 mb-3">Growth doesn't come from a single sale. It comes from customers who come back again and again.</p>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70">Understand what drives repeat purchases, identify loyal customers, and create experiences that keep them engaged long after checkout.</p>
          </div>

          <div className="bg-black/5 dark:bg-white/5 p-6 rounded-2xl">
            <h5 className="text-heading-6 font-bold text-secondary dark:text-white mb-2">Your Most Valuable Customers Are Waiting</h5>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70 mb-3">Some customers generate more revenue, purchase more frequently, and become your strongest advocates.</p>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70">Customer Intelligence helps you identify high-value customers so you can nurture relationships that drive long-term growth.</p>
          </div>
        </div>
      </div>

      <hr className="border-stroke-1 dark:border-white/10" />

      {/* Insights That Drive Action */}
      <div className="space-y-6">
        <h4 className="text-heading-5 font-black tracking-tight text-secondary dark:text-white">Insights That Drive Action</h4>
        <p className="font-bold text-primary-500 mb-2">Data alone doesn't grow a business. Action does.</p>
        <p className="leading-relaxed text-secondary/70 dark:text-white/70 mb-3">Understand:</p>
        <ul className="list-disc list-inside space-y-2 ml-2 leading-relaxed text-secondary/70 dark:text-white/70">
          <li>Which products customers love</li>
          <li>Which audiences spend the most</li>
          <li>Which campaigns drive purchases</li>
          <li>Which customers are at risk of leaving</li>
          <li>Which opportunities deserve attention</li>
        </ul>
        <p className="font-medium text-secondary/90 dark:text-white/90 mt-4">Make every decision with confidence.</p>
      </div>

      <hr className="border-stroke-1 dark:border-white/10" />

      {/* Built for Brands */}
      <div className="space-y-6">
        <h4 className="text-heading-5 font-black tracking-tight text-secondary dark:text-white">Built for Brands That Want to Grow Smarter</h4>
        <p className="leading-relaxed text-secondary/70 dark:text-white/70">Whether you're selling through Shopify, marketplaces, WhatsApp, or your own store, Customer Intelligence gives you the clarity to understand your customers and the confidence to grow your business.</p>
      </div>

      <hr className="border-stroke-1 dark:border-white/10" />

      {/* Ready to Grow */}
      <div className="bg-primary-500/10 p-8 rounded-3xl text-center space-y-5 border border-primary-500/20">
        <h4 className="text-heading-4 font-black tracking-tight text-secondary dark:text-white">The Better You Know Your Customers, The Faster You Grow.</h4>
        <p className="leading-relaxed text-secondary/70 dark:text-white/70 max-w-xl mx-auto">Turn customer behavior into business growth with powerful insights designed for modern commerce.</p>
        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <LinkButton href="/contact-us" className="inline-flex h-14 items-center justify-center rounded-full bg-primary-500 px-8 text-base font-bold text-white transition-all hover:bg-primary-600 hover:shadow-lg hover:shadow-primary-500/30">
            Get Started
          </LinkButton>
          <LinkButton href="/contact-us" className="inline-flex h-14 items-center justify-center rounded-full border-2 border-primary-500 text-primary-500 px-8 text-base font-bold transition-all hover:bg-primary-500 hover:text-white hover:shadow-lg hover:shadow-primary-500/30">
            Book a Demo
          </LinkButton>
        </div>
      </div>

    </div>
  );
};
