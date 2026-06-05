import React from 'react';
import LinkButton from '../ui/button/LinkButton';

export const CartAbandonmentRecoveryContent = () => {
  return (
    <div className="space-y-8 text-secondary dark:text-white/80 pb-6 text-left">
      {/* Hero Section */}
      <div className="space-y-6 text-center max-w-3xl mx-auto flex flex-col items-center pt-4 pb-8">
        <h1 className="text-heading-3 md:text-heading-2 font-black tracking-tight text-secondary dark:text-white">Recover Sales You Were About to Lose.</h1>
        <p className="text-lg md:text-xl leading-relaxed text-secondary/70 dark:text-white/70">
          Most shoppers don't leave because they're not interested. They leave because they get distracted, compare options, or simply run out of time.
        </p>
        <p className="text-lg md:text-xl leading-relaxed text-secondary/70 dark:text-white/70">
          CaartZee automatically reminds customers about the products they left behind, bringing them back to complete their purchase and helping you recover revenue that would otherwise be lost.
        </p>
        <p className="text-lg md:text-xl font-bold text-primary-500 mt-2">
          Turn abandoned carts into completed orders.
        </p>
        <div className="pt-8">
          <LinkButton href="/contact-us" className="inline-flex h-14 items-center justify-center rounded-full bg-primary-500 px-10 text-base font-bold text-white transition-all hover:bg-primary-600 hover:shadow-lg hover:shadow-primary-500/30">
            Recover More Sales
          </LinkButton>
        </div>
      </div>

      <hr className="border-stroke-1 dark:border-white/10" />

      {/* Every Abandoned Cart Is a Missed Opportunity */}
      <div className="space-y-4">
        <h4 className="text-heading-5 font-black tracking-tight text-secondary dark:text-white">Every Abandoned Cart Is a Missed Opportunity</h4>
        <div className="space-y-4 text-lg leading-relaxed text-secondary/70 dark:text-white/70">
          <p>A customer adds products to their cart. They browse. They compare. They get ready to buy. Then they leave.</p>
          <p>For most businesses, that's where the story ends. But it doesn't have to.</p>
          <p className="font-medium text-secondary/90 dark:text-white/90">CaartZee helps you reconnect with shoppers at exactly the right moment, turning abandoned carts into recovered revenue.</p>
        </div>
      </div>

      <hr className="border-stroke-1 dark:border-white/10" />

      {/* Bring Customers Back & Reach Customers Where They Respond */}
      <div className="space-y-6">
        <h4 className="text-heading-5 font-black tracking-tight text-secondary dark:text-white">Reconnect & Recover</h4>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="border border-stroke-1 dark:border-white/10 p-6 rounded-2xl">
            <h5 className="text-heading-6 font-bold text-secondary dark:text-white mb-2">Bring Customers Back Automatically</h5>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70 mb-3">Following up with every abandoned cart manually isn't realistic. Automation makes it effortless.</p>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70 mb-3">When customers leave products in their cart, CaartZee automatically sends personalized reminders that encourage them to return and complete their purchase.</p>
            <ul className="list-disc list-inside space-y-1 ml-2 font-bold text-secondary/90 dark:text-white/90">
              <li>No manual outreach.</li>
              <li>No missed opportunities.</li>
              <li>Just more completed sales.</li>
            </ul>
          </div>

          <div className="border border-stroke-1 dark:border-white/10 p-6 rounded-2xl">
            <h5 className="text-heading-6 font-bold text-secondary dark:text-white mb-2">Reach Customers Where They Respond</h5>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70 mb-3">The best recovery campaigns happen on the channels customers already use.</p>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70 mb-2">Connect with shoppers through:</p>
            <ul className="list-disc list-inside space-y-1 ml-2 leading-relaxed text-secondary/70 dark:text-white/70 mb-3">
              <li>WhatsApp</li>
              <li>Email</li>
              <li>SMS</li>
              <li>Push Notifications</li>
            </ul>
            <p className="font-medium text-secondary/90 dark:text-white/90">Deliver timely reminders that feel natural and relevant instead of intrusive. Because the right message at the right time can make all the difference.</p>
          </div>
        </div>
      </div>

      <hr className="border-stroke-1 dark:border-white/10" />

      {/* Turn Intent Into Revenue */}
      <div className="space-y-6">
        <h4 className="text-heading-5 font-black tracking-tight text-secondary dark:text-white">Turn Intent Into Revenue</h4>
        <p className="leading-relaxed text-secondary/70 dark:text-white/70">An abandoned cart isn't a lost customer. It's a customer who showed buying intent.</p>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4">
          {["They already discovered your product.", "They already showed interest.", "They already started the checkout process."].map((item, i) => (
            <div key={i} className="bg-black/5 dark:bg-white/5 p-4 rounded-xl text-center font-medium">
              {item}
            </div>
          ))}
        </div>
        <p className="mt-4 leading-relaxed text-secondary/70 dark:text-white/70">Cart Recovery helps you reconnect before that intent disappears.</p>
        <p className="font-bold text-primary-500">Recover sales before competitors do.</p>
      </div>

      <hr className="border-stroke-1 dark:border-white/10" />

      {/* Personalized Reminders & Recover Revenue While You Sleep */}
      <div className="space-y-6">
        <h4 className="text-heading-5 font-black tracking-tight text-secondary dark:text-white">Automated & Personalized</h4>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="bg-black/5 dark:bg-white/5 p-6 rounded-2xl">
            <h5 className="text-heading-6 font-bold text-secondary dark:text-white mb-2">Personalized Reminders That Convert</h5>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70 mb-3">Generic messages get ignored. Personalized reminders get results. Automatically include:</p>
            <ul className="list-disc list-inside space-y-1 ml-2 leading-relaxed text-secondary/70 dark:text-white/70 mb-3">
              <li>Product information</li>
              <li>Cart details</li>
              <li>Personalized recommendations</li>
              <li>Special offers</li>
              <li>Purchase links</li>
            </ul>
            <p className="font-medium text-secondary/90 dark:text-white/90">Create a seamless path back to checkout.</p>
          </div>

          <div className="bg-black/5 dark:bg-white/5 p-6 rounded-2xl">
            <h5 className="text-heading-6 font-bold text-secondary dark:text-white mb-2">Recover Revenue While You Sleep</h5>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70 mb-3">Your store never closes. Neither should your recovery strategy.</p>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70 mb-3">CaartZee continuously tracks abandoned carts and triggers automated recovery workflows around the clock. Whether customers abandon their cart at noon or midnight, the opportunity to recover the sale remains active.</p>
            <p className="font-medium text-secondary/90 dark:text-white/90">Because every sale matters.</p>
          </div>
        </div>
      </div>

      <hr className="border-stroke-1 dark:border-white/10" />

      {/* Understand Why Customers Leave */}
      <div className="space-y-6">
        <h4 className="text-heading-5 font-black tracking-tight text-secondary dark:text-white">Understand Why Customers Leave</h4>
        <p className="leading-relaxed text-secondary/70 dark:text-white/70 mb-2">Recovery is only part of the story. Understanding customer behavior helps improve future conversions. Identify:</p>
        <ul className="list-disc list-inside space-y-2 ml-2 leading-relaxed text-secondary/70 dark:text-white/70">
          <li>Drop-off points</li>
          <li>Checkout friction</li>
          <li>Customer hesitation</li>
          <li>Product interest trends</li>
          <li>Conversion opportunities</li>
        </ul>
        <p className="font-medium text-secondary/90 dark:text-white/90 mt-4">Use insights to reduce abandonment and increase revenue.</p>
      </div>

      <hr className="border-stroke-1 dark:border-white/10" />

      {/* More Sales Without More Traffic & Seamless Experience */}
      <div className="space-y-6">
        <h4 className="text-heading-5 font-black tracking-tight text-secondary dark:text-white">Maximize Existing Traffic</h4>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="border border-stroke-1 dark:border-white/10 p-5 rounded-2xl">
            <h5 className="text-heading-6 font-bold text-secondary dark:text-white mb-2">More Sales Without More Traffic</h5>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70 mb-3">Most businesses focus on getting more visitors. Smart businesses focus on converting the visitors they already have.</p>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70 mb-3">Cart Recovery helps maximize the value of your existing traffic by turning missed opportunities into completed purchases.</p>
            <p className="font-bold text-primary-500">Increase revenue without increasing acquisition costs.</p>
          </div>

          <div className="border border-stroke-1 dark:border-white/10 p-5 rounded-2xl">
            <h5 className="text-heading-6 font-bold text-secondary dark:text-white mb-2">Create a Seamless Shopping Experience</h5>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70 mb-3">Customers expect convenience. CaartZee helps remove barriers by guiding shoppers back to their cart with a frictionless experience.</p>
            <ul className="list-disc list-inside space-y-1 ml-2 font-bold text-secondary/90 dark:text-white/90 mb-3">
              <li>One click.</li>
              <li>One conversation.</li>
              <li>One reminder.</li>
            </ul>
            <p className="font-medium text-secondary/90 dark:text-white/90">Sometimes that's all it takes to complete a sale.</p>
          </div>
        </div>
      </div>

      <hr className="border-stroke-1 dark:border-white/10" />

      {/* Built for Growing Commerce Brands */}
      <div className="space-y-6">
        <h4 className="text-heading-5 font-black tracking-tight text-secondary dark:text-white">Built for Growing Commerce Brands</h4>
        <p className="leading-relaxed text-secondary/70 dark:text-white/70 mb-3">Whether you're a D2C brand, marketplace seller, retailer, or ecommerce business, Cart Abandonment Recovery helps you recover lost revenue and improve conversion performance automatically.</p>
        <p className="font-bold text-secondary/90 dark:text-white/90">Because every abandoned cart deserves a second chance.</p>
      </div>

      <hr className="border-stroke-1 dark:border-white/10" />

      {/* Why Businesses Use Cart Recovery */}
      <div className="space-y-6">
        <h4 className="text-heading-5 font-black tracking-tight text-secondary dark:text-white">Why Businesses Use Cart Recovery</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <div><h5 className="font-bold text-secondary dark:text-white mb-1">Recover Lost Revenue</h5><p className="leading-relaxed text-secondary/70 dark:text-white/70">Convert abandoned carts into completed purchases.</p></div>
          <div><h5 className="font-bold text-secondary dark:text-white mb-1">Increase Conversion Rates</h5><p className="leading-relaxed text-secondary/70 dark:text-white/70">Bring interested shoppers back to checkout.</p></div>
          <div><h5 className="font-bold text-secondary dark:text-white mb-1">Save Time</h5><p className="leading-relaxed text-secondary/70 dark:text-white/70">Automate follow-ups without manual effort.</p></div>
          <div><h5 className="font-bold text-secondary dark:text-white mb-1">Improve Customer Experience</h5><p className="leading-relaxed text-secondary/70 dark:text-white/70">Deliver timely and relevant reminders.</p></div>
          <div><h5 className="font-bold text-secondary dark:text-white mb-1">Maximize Marketing ROI</h5><p className="leading-relaxed text-secondary/70 dark:text-white/70">Generate more sales from existing traffic.</p></div>
        </div>
      </div>

      <hr className="border-stroke-1 dark:border-white/10" />

      {/* Ready to Grow */}
      <div className="bg-primary-500/10 p-8 rounded-3xl text-center space-y-5 border border-primary-500/20">
        <h4 className="text-heading-4 font-black tracking-tight text-secondary dark:text-white">Don't Let Interested Customers Slip Away.</h4>
        <p className="leading-relaxed text-secondary/70 dark:text-white/70 max-w-xl mx-auto">Recover lost sales, increase conversions, and turn abandoned carts into revenue with automated recovery campaigns.</p>
        <p className="font-black text-primary-500 text-lg uppercase tracking-wider">More Recoveries. More Conversions. More Revenue.</p>
        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <LinkButton href="/contact-us" className="inline-flex h-14 items-center justify-center rounded-full bg-primary-500 px-8 text-base font-bold text-white transition-all hover:bg-primary-600 hover:shadow-lg hover:shadow-primary-500/30">
            Start Recovering Sales
          </LinkButton>
        </div>
      </div>

    </div>
  );
};
