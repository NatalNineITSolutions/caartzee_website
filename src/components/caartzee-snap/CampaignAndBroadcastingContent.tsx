import React from 'react';
import LinkButton from '../ui/button/LinkButton';

export const CampaignAndBroadcastingContent = () => {
  return (
    <div className="space-y-8 text-secondary dark:text-white/80 pb-6 text-left">
      {/* Hero Section */}
      <div className="space-y-6 text-center max-w-3xl mx-auto flex flex-col items-center pt-4 pb-8">
        <h1 className="text-heading-3 md:text-heading-2 font-black tracking-tight text-secondary dark:text-white">Reach Thousands in Seconds.</h1>
        <p className="text-lg md:text-xl leading-relaxed text-secondary/70 dark:text-white/70">
          Launch campaigns, announce products, share offers, and send updates directly to your customers on WhatsApp.
        </p>
        <p className="text-lg md:text-xl leading-relaxed text-secondary/70 dark:text-white/70">
          Connect with your audience instantly, drive engagement, and turn conversations into conversions—all from a single platform.
        </p>
        <p className="text-lg md:text-xl font-bold text-primary-500 mt-2">
          Start conversations that drive results.
        </p>
        <div className="pt-8">
          <LinkButton href="/contact-us" className="inline-flex h-14 items-center justify-center rounded-full bg-primary-500 px-10 text-base font-bold text-white transition-all hover:bg-primary-600 hover:shadow-lg hover:shadow-primary-500/30">
            Launch Your Campaign
          </LinkButton>
        </div>
      </div>

      <hr className="border-stroke-1 dark:border-white/10" />

      {/* Your Customers Are Already on WhatsApp */}
      <div className="space-y-4">
        <h4 className="text-heading-5 font-black tracking-tight text-secondary dark:text-white">Your Customers Are Already on WhatsApp</h4>
        <div className="space-y-4 text-lg leading-relaxed text-secondary/70 dark:text-white/70">
          <p>Every day, your customers open WhatsApp dozens of times.</p>
          <ul className="list-disc list-inside space-y-1 ml-2 font-bold text-secondary/90 dark:text-white/90">
            <li>They chat with friends.</li>
            <li>They share recommendations.</li>
            <li>They discover products.</li>
          </ul>
          <p>Why send customers somewhere else when you can reach them where they already spend their time?</p>
          <p className="font-medium text-secondary/90 dark:text-white/90">CaartZee Campaign & Broadcasting helps you connect with customers directly through the world's most engaging messaging platform.</p>
        </div>
      </div>

      <hr className="border-stroke-1 dark:border-white/10" />

      {/* Turn Announcements Into Conversations & Launch Products */}
      <div className="space-y-6">
        <h4 className="text-heading-5 font-black tracking-tight text-secondary dark:text-white">Start Meaningful Conversations</h4>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="border border-stroke-1 dark:border-white/10 p-6 rounded-2xl">
            <h5 className="text-heading-6 font-bold text-secondary dark:text-white mb-2">Turn Announcements Into Conversations</h5>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70 mb-3">Most marketing channels are one-way. You send a message and hope customers respond.</p>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70 mb-3">WhatsApp is different. Every campaign creates an opportunity for customers to ask questions, explore products, and make purchases instantly.</p>
            <p className="font-medium text-secondary/90 dark:text-white/90">Transform broadcasts into meaningful customer interactions.</p>
          </div>

          <div className="border border-stroke-1 dark:border-white/10 p-6 rounded-2xl">
            <h5 className="text-heading-6 font-bold text-secondary dark:text-white mb-2">Launch Products with Impact</h5>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70 mb-3">Introducing a new product? Don't wait for customers to find it. Put it directly in front of them.</p>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70 mb-2">Share:</p>
            <ul className="list-disc list-inside space-y-1 ml-2 leading-relaxed text-secondary/70 dark:text-white/70 mb-3">
              <li>New product launches</li>
              <li>Exclusive collections</li>
              <li>Limited-time releases</li>
              <li>Seasonal promotions</li>
              <li>Special announcements</li>
            </ul>
            <p className="font-bold text-secondary/90 dark:text-white/90">Generate excitement and drive immediate action.</p>
          </div>
        </div>
      </div>

      <hr className="border-stroke-1 dark:border-white/10" />

      {/* Promote Offers That Get Noticed & Send the Right Message */}
      <div className="space-y-6">
        <h4 className="text-heading-5 font-black tracking-tight text-secondary dark:text-white">Targeted & Visible Campaigns</h4>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="bg-black/5 dark:bg-white/5 p-6 rounded-2xl">
            <h5 className="text-heading-6 font-bold text-secondary dark:text-white mb-2">Promote Offers That Get Noticed</h5>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70 mb-3">Customers receive hundreds of marketing emails. Many never get opened. WhatsApp messages are personal, direct, and highly visible.</p>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70 mb-2">Deliver:</p>
            <ul className="list-disc list-inside space-y-1 ml-2 leading-relaxed text-secondary/70 dark:text-white/70 mb-3">
              <li>Flash sales</li>
              <li>Discount campaigns</li>
              <li>Festival offers</li>
              <li>Special promotions</li>
              <li>Loyalty rewards</li>
            </ul>
            <p className="font-medium text-secondary/90 dark:text-white/90">Reach customers instantly and increase campaign engagement.</p>
          </div>

          <div className="bg-black/5 dark:bg-white/5 p-6 rounded-2xl">
            <h5 className="text-heading-6 font-bold text-secondary dark:text-white mb-2">Send the Right Message to the Right Audience</h5>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70 mb-3">Not every customer is the same. Segment your audience and send highly targeted campaigns based on:</p>
            <ul className="list-disc list-inside space-y-1 ml-2 leading-relaxed text-secondary/70 dark:text-white/70 mb-3">
              <li>Purchase history</li>
              <li>Customer interests</li>
              <li>Shopping behavior</li>
              <li>Location</li>
              <li>Order activity</li>
              <li>Customer value</li>
            </ul>
            <p className="font-medium text-secondary/90 dark:text-white/90">Create personalized campaigns that feel relevant instead of promotional.</p>
          </div>
        </div>
      </div>

      <hr className="border-stroke-1 dark:border-white/10" />

      {/* Broadcast at Scale */}
      <div className="space-y-6">
        <h4 className="text-heading-5 font-black tracking-tight text-secondary dark:text-white">Broadcast at Scale</h4>
        <p className="leading-relaxed text-secondary/70 dark:text-white/70 mb-3">Whether you're reaching hundreds, thousands, or millions of customers, CaartZee helps you send campaigns efficiently and reliably.</p>
        <ul className="list-disc list-inside space-y-1 ml-2 font-bold text-secondary/90 dark:text-white/90 mb-3">
          <li>One campaign.</li>
          <li>Thousands of customers.</li>
          <li>Instant delivery.</li>
        </ul>
        <p className="font-medium text-secondary/90 dark:text-white/90">Scale your communication without increasing your workload.</p>
      </div>

      <hr className="border-stroke-1 dark:border-white/10" />

      {/* Drive More Than Just Engagement & Measure What Matters */}
      <div className="space-y-6">
        <h4 className="text-heading-5 font-black tracking-tight text-secondary dark:text-white">Drive Action & Measure Success</h4>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="border border-stroke-1 dark:border-white/10 p-5 rounded-2xl">
            <h5 className="text-heading-6 font-bold text-secondary dark:text-white mb-2">Drive More Than Just Engagement</h5>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70 mb-3">Great campaigns don't just generate views. They generate action. Encourage customers to:</p>
            <ul className="list-disc list-inside space-y-1 ml-2 leading-relaxed text-secondary/70 dark:text-white/70 mb-3">
              <li>Browse products</li>
              <li>Complete purchases</li>
              <li>Redeem offers</li>
              <li>Visit your store</li>
              <li>Explore collections</li>
              <li>Re-engage with your brand</li>
            </ul>
            <p className="font-bold text-primary-500">Turn attention into measurable business growth.</p>
          </div>

          <div className="border border-stroke-1 dark:border-white/10 p-5 rounded-2xl">
            <h5 className="text-heading-6 font-bold text-secondary dark:text-white mb-2">Measure What Matters</h5>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70 mb-3">Know exactly how your campaigns perform. Track:</p>
            <ul className="list-disc list-inside space-y-1 ml-2 leading-relaxed text-secondary/70 dark:text-white/70 mb-3">
              <li>Delivery rates</li>
              <li>Open rates</li>
              <li>Customer engagement</li>
              <li>Click-through rates</li>
              <li>Responses</li>
              <li>Conversions</li>
            </ul>
            <p className="font-medium text-secondary/90 dark:text-white/90">Understand what resonates with customers and continuously improve your marketing performance.</p>
          </div>
        </div>
      </div>

      <hr className="border-stroke-1 dark:border-white/10" />

      {/* Build Stronger Relationships & Marketing That Feels Personal */}
      <div className="space-y-6">
        <h4 className="text-heading-5 font-black tracking-tight text-secondary dark:text-white">Marketing That Feels Personal</h4>
        <p className="font-bold text-primary-500 mb-2">Customers don't want to feel like they're receiving marketing messages. They want relevant communication.</p>
        <p className="leading-relaxed text-secondary/70 dark:text-white/70 mb-3">Campaign & Broadcasting helps you stay connected with customers through updates, offers, and information they actually care about.</p>
        <p className="leading-relaxed text-secondary/70 dark:text-white/70 mb-3">The best marketing doesn't interrupt customers. It adds value. Whether you're sharing a product launch, announcing a sale, or sending an important update, WhatsApp helps brands communicate in a way that feels natural, personal, and engaging.</p>
        <ul className="list-disc list-inside space-y-1 ml-2 font-bold text-secondary/90 dark:text-white/90">
          <li>Build trust with every interaction.</li>
          <li>Grow loyalty with every conversation.</li>
          <li>Because stronger relationships create stronger businesses.</li>
        </ul>
      </div>

      <hr className="border-stroke-1 dark:border-white/10" />

      {/* Built for Modern Commerce */}
      <div className="space-y-6">
        <h4 className="text-heading-5 font-black tracking-tight text-secondary dark:text-white">Built for Modern Commerce</h4>
        <p className="leading-relaxed text-secondary/70 dark:text-white/70 mb-3">Whether you're an ecommerce brand, D2C business, retailer, or marketplace seller, Campaign & Broadcasting helps you engage customers, increase conversions, and drive growth through personalized communication.</p>
        <ul className="list-disc list-inside space-y-1 ml-2 font-bold text-secondary/90 dark:text-white/90">
          <li>Reach more customers.</li>
          <li>Create more conversations.</li>
          <li>Generate more sales.</li>
        </ul>
      </div>

      <hr className="border-stroke-1 dark:border-white/10" />

      {/* Why Businesses Choose */}
      <div className="space-y-6">
        <h4 className="text-heading-5 font-black tracking-tight text-secondary dark:text-white">Why Businesses Choose Campaign & Broadcasting</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <div><h5 className="font-bold text-secondary dark:text-white mb-1">Reach Customers Instantly</h5><p className="leading-relaxed text-secondary/70 dark:text-white/70">Communicate directly through WhatsApp.</p></div>
          <div><h5 className="font-bold text-secondary dark:text-white mb-1">Increase Engagement</h5><p className="leading-relaxed text-secondary/70 dark:text-white/70">Create campaigns customers actually open and read.</p></div>
          <div><h5 className="font-bold text-secondary dark:text-white mb-1">Drive More Sales</h5><p className="leading-relaxed text-secondary/70 dark:text-white/70">Turn promotions into purchases.</p></div>
          <div><h5 className="font-bold text-secondary dark:text-white mb-1">Personalize at Scale</h5><p className="leading-relaxed text-secondary/70 dark:text-white/70">Deliver relevant messages to every audience segment.</p></div>
          <div><h5 className="font-bold text-secondary dark:text-white mb-1">Measure Success</h5><p className="leading-relaxed text-secondary/70 dark:text-white/70">Track campaign performance and optimize results.</p></div>
        </div>
      </div>

      <hr className="border-stroke-1 dark:border-white/10" />

      {/* Ready to Grow */}
      <div className="bg-primary-500/10 p-8 rounded-3xl text-center space-y-5 border border-primary-500/20">
        <h4 className="text-heading-4 font-black tracking-tight text-secondary dark:text-white">Great Marketing Starts with Great Conversations.</h4>
        <p className="leading-relaxed text-secondary/70 dark:text-white/70 max-w-xl mx-auto">Reach customers instantly, build stronger relationships, and grow revenue through personalized WhatsApp campaigns.</p>
        <p className="font-black text-primary-500 text-lg uppercase tracking-wider">More Reach. More Engagement. More Sales.</p>
        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <LinkButton href="/contact-us" className="inline-flex h-14 items-center justify-center rounded-full bg-primary-500 px-8 text-base font-bold text-white transition-all hover:bg-primary-600 hover:shadow-lg hover:shadow-primary-500/30">
            Start Broadcasting
          </LinkButton>
        </div>
      </div>

    </div>
  );
};
