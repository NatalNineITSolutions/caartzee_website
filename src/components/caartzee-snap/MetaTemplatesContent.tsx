import React from 'react';
import LinkButton from '../ui/button/LinkButton';

export const MetaTemplatesContent = () => {
  return (
    <div className="space-y-8 text-secondary dark:text-white/80 pb-6 text-left">
      {/* Hero Section */}
      <div className="space-y-6 text-center max-w-3xl mx-auto flex flex-col items-center pt-4 pb-8">
        <h1 className="text-heading-3 md:text-heading-2 font-black tracking-tight text-secondary dark:text-white">Send Messages That Get Delivered.</h1>
        <p className="text-lg md:text-xl leading-relaxed text-secondary/70 dark:text-white/70">
          Create approved WhatsApp templates for order updates, promotions, reminders, and customer engagement.
        </p>
        <p className="text-lg md:text-xl leading-relaxed text-secondary/70 dark:text-white/70">
          Reach customers with trusted, compliant messaging that keeps them informed, engaged, and ready to take action.
        </p>
        <p className="text-lg md:text-xl font-bold text-primary-500 mt-2">
          Built for conversations customers expect and businesses rely on.
        </p>
        <div className="pt-8">
          <LinkButton href="/contact-us" className="inline-flex h-14 items-center justify-center rounded-full bg-primary-500 px-10 text-base font-bold text-white transition-all hover:bg-primary-600 hover:shadow-lg hover:shadow-primary-500/30">
            Create Templates
          </LinkButton>
        </div>
      </div>

      <hr className="border-stroke-1 dark:border-white/10" />

      {/* Stay Connected Beyond the First Message */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center py-8">
        {/* Left Image */}
        <div className="w-full lg:col-span-8">
          <img 
            src="/images/meta1.png" 
            alt="Meta Templates Overview" 
            className="w-full h-auto rounded-2xl shadow-2xl border border-stroke-1 dark:border-white/10 object-contain" 
          />
        </div>

        {/* Right Content */}
        <div className="space-y-4 lg:col-span-4">
          <h4 className="text-heading-5 font-black tracking-tight text-secondary dark:text-white">Stay Connected Beyond the First Message</h4>
          <div className="space-y-4 text-lg leading-relaxed text-secondary/70 dark:text-white/70">
            <p>Customers expect timely updates. They want to know when an order is confirmed. When it's shipped. When it's delivered.</p>
            <p>They want reminders, offers, and important information without delays.</p>
            <p className="font-medium text-secondary/90 dark:text-white/90">Meta Templates help businesses deliver these messages reliably through WhatsApp, ensuring every communication reaches customers when it matters most.</p>
          </div>
        </div>
      </div>

      <hr className="border-stroke-1 dark:border-white/10" />

      {/* Communication Customers Trust & From Transactions to Relationships */}
      <div className="space-y-6">
        <h4 className="text-heading-5 font-black tracking-tight text-secondary dark:text-white">Trusted Communication</h4>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="border border-stroke-1 dark:border-white/10 p-6 rounded-2xl">
            <h5 className="text-heading-6 font-bold text-secondary dark:text-white mb-2">Communication Customers Trust</h5>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70 mb-3">Trust is built through consistency. When customers receive timely, relevant updates, they feel confident buying from your brand.</p>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70">Whether it's an order confirmation, delivery notification, appointment reminder, or special offer, approved WhatsApp templates help you communicate professionally at every stage of the customer journey.</p>
          </div>

          <div className="border border-stroke-1 dark:border-white/10 p-6 rounded-2xl">
            <h5 className="text-heading-6 font-bold text-secondary dark:text-white mb-2">From Transactions to Relationships</h5>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70 mb-3">Every message is an opportunity. An order update isn't just information. It's a chance to reinforce trust. A reminder isn't just a notification. It's a chance to bring customers back.</p>
            <p className="font-medium text-secondary/90 dark:text-white/90">Meta Templates help businesses turn routine communication into meaningful customer engagement.</p>
          </div>
        </div>
      </div>

      <hr className="border-stroke-1 dark:border-white/10" />

      {/* Keep Customers Informed Automatically & Reach Customers at the Right Moment */}
      <div className="space-y-6">
        <h4 className="text-heading-5 font-black tracking-tight text-secondary dark:text-white">Proactive & Timely</h4>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="bg-black/5 dark:bg-white/5 p-6 rounded-2xl">
            <h5 className="text-heading-6 font-bold text-secondary dark:text-white mb-2">Keep Customers Informed Automatically</h5>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70 mb-3">Customers shouldn't have to ask for updates. With approved WhatsApp templates, businesses can automatically send:</p>
            <ul className="list-disc list-inside space-y-1 ml-2 leading-relaxed text-secondary/70 dark:text-white/70 mb-3">
              <li>Order confirmations</li>
              <li>Shipping notifications</li>
              <li>Delivery updates</li>
              <li>Appointment reminders</li>
              <li>Payment reminders</li>
              <li>Customer follow-ups</li>
            </ul>
            <p className="font-bold text-primary-500">Deliver information proactively and create a better customer experience.</p>
          </div>

          <div className="bg-black/5 dark:bg-white/5 p-6 rounded-2xl">
            <h5 className="text-heading-6 font-bold text-secondary dark:text-white mb-2">Reach Customers at the Right Moment</h5>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70 mb-3">Timing matters. The right message at the right moment can improve engagement, increase conversions, and strengthen customer relationships.</p>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70">Whether you're recovering abandoned carts, promoting a new collection, or sharing important updates, Meta Templates ensure your communication arrives exactly when it's needed.</p>
          </div>
        </div>
      </div>

      <hr className="border-stroke-1 dark:border-white/10" />

      {/* Scale Communication Without Losing the Personal Touch */}
      <div className="space-y-6">
        <h4 className="text-heading-5 font-black tracking-tight text-secondary dark:text-white">Scale Communication Without Losing the Personal Touch</h4>
        <p className="leading-relaxed text-secondary/70 dark:text-white/70 mb-3">As your business grows, customer communication becomes more challenging. Thousands of customers. Thousands of conversations. Thousands of updates.</p>
        <p className="leading-relaxed text-secondary/70 dark:text-white/70 mb-3">Meta Templates help you scale communication while maintaining a consistent and personalized experience.</p>
        <p className="font-bold text-primary-500">Because growth shouldn't come at the expense of customer relationships.</p>
      </div>

      <hr className="border-stroke-1 dark:border-white/10" />

      {/* Built for Every Customer Journey */}
      <div className="space-y-6">
        <h4 className="text-heading-5 font-black tracking-tight text-secondary dark:text-white">Built for Every Customer Journey</h4>
        <p className="leading-relaxed text-secondary/70 dark:text-white/70 mb-4">From the first interaction to repeat purchases, templates help support every stage of the customer lifecycle.</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          <div className="border border-stroke-1 dark:border-white/10 p-5 rounded-2xl">
            <h5 className="font-bold text-secondary dark:text-white mb-2">Before Purchase</h5>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70">Share promotions, product launches, and special offers.</p>
          </div>
          <div className="border border-stroke-1 dark:border-white/10 p-5 rounded-2xl">
            <h5 className="font-bold text-secondary dark:text-white mb-2">During Purchase</h5>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70">Send confirmations, payment updates, and checkout reminders.</p>
          </div>
          <div className="border border-stroke-1 dark:border-white/10 p-5 rounded-2xl">
            <h5 className="font-bold text-secondary dark:text-white mb-2">After Purchase</h5>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70">Deliver shipping updates, feedback requests, and loyalty campaigns.</p>
          </div>
        </div>
        <p className="font-medium text-secondary/90 dark:text-white/90 mt-4">Stay connected throughout the entire customer experience.</p>
      </div>

      <hr className="border-stroke-1 dark:border-white/10" />

      {/* Deliver Messages with Confidence & Create Once. Use Everywhere. */}
      <div className="space-y-6">
        <h4 className="text-heading-5 font-black tracking-tight text-secondary dark:text-white">Reliable & Reusable</h4>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="border border-stroke-1 dark:border-white/10 p-5 rounded-2xl">
            <h5 className="text-heading-6 font-bold text-secondary dark:text-white mb-2">Deliver Messages with Confidence</h5>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70 mb-3">Businesses need communication they can depend on. Meta-approved templates ensure messages follow WhatsApp guidelines while helping brands maintain reliable communication with their customers.</p>
            <ul className="list-disc list-inside space-y-1 ml-2 font-bold text-secondary/90 dark:text-white/90">
              <li>Less uncertainty.</li>
              <li>More confidence.</li>
              <li>Better customer experiences.</li>
            </ul>
          </div>

          <div className="border border-stroke-1 dark:border-white/10 p-5 rounded-2xl">
            <h5 className="text-heading-6 font-bold text-secondary dark:text-white mb-2">Create Once. Use Everywhere.</h5>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70 mb-3">Build reusable templates for common customer interactions and deploy them whenever needed.</p>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70 mb-3">Save time, maintain consistency, and ensure every customer receives the right information without repetitive manual effort.</p>
            <p className="font-medium text-secondary/90 dark:text-white/90">Because great communication should be scalable.</p>
          </div>
        </div>
      </div>

      <hr className="border-stroke-1 dark:border-white/10" />

      {/* Why Businesses Use Meta Templates */}
      <div className="space-y-6">
        <h4 className="text-heading-5 font-black tracking-tight text-secondary dark:text-white">Why Businesses Use Meta Templates</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <div><h5 className="font-bold text-secondary dark:text-white mb-1">Improve Customer Experience</h5><p className="leading-relaxed text-secondary/70 dark:text-white/70">Keep customers informed throughout their journey.</p></div>
          <div><h5 className="font-bold text-secondary dark:text-white mb-1">Increase Engagement</h5><p className="leading-relaxed text-secondary/70 dark:text-white/70">Reach customers through the world's most popular messaging platform.</p></div>
          <div><h5 className="font-bold text-secondary dark:text-white mb-1">Build Trust</h5><p className="leading-relaxed text-secondary/70 dark:text-white/70">Deliver reliable and professional communication.</p></div>
          <div><h5 className="font-bold text-secondary dark:text-white mb-1">Save Time</h5><p className="leading-relaxed text-secondary/70 dark:text-white/70">Automate recurring customer updates.</p></div>
          <div><h5 className="font-bold text-secondary dark:text-white mb-1">Scale Efficiently</h5><p className="leading-relaxed text-secondary/70 dark:text-white/70">Communicate with thousands of customers without increasing workload.</p></div>
        </div>
      </div>

      <hr className="border-stroke-1 dark:border-white/10" />

      {/* Built for Modern Commerce */}
      <div className="space-y-6">
        <h4 className="text-heading-5 font-black tracking-tight text-secondary dark:text-white">Built for Modern Commerce</h4>
        <p className="leading-relaxed text-secondary/70 dark:text-white/70 mb-2">Whether you're sending order updates, promotional campaigns, service reminders, or customer notifications, Meta Templates help you communicate clearly, consistently, and at scale.</p>
        <p className="font-bold text-primary-500">Because every great customer experience starts with great communication.</p>
      </div>

      <hr className="border-stroke-1 dark:border-white/10" />

      {/* Ready to Grow */}
      <div className="bg-primary-500/10 p-8 rounded-3xl text-center space-y-5 border border-primary-500/20">
        <h4 className="text-heading-4 font-black tracking-tight text-secondary dark:text-white">Every Message Matters.</h4>
        <p className="leading-relaxed text-secondary/70 dark:text-white/70 max-w-xl mx-auto">Deliver trusted customer communication through approved WhatsApp templates designed for engagement, reliability, and growth.</p>
        <p className="font-black text-primary-500 text-lg uppercase tracking-wider">Better Communication. Stronger Relationships. Greater Growth.</p>
        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <LinkButton href="/contact-us" className="inline-flex h-14 items-center justify-center rounded-full bg-primary-500 px-8 text-base font-bold text-white transition-all hover:bg-primary-600 hover:shadow-lg hover:shadow-primary-500/30">
            Start Creating Templates
          </LinkButton>
        </div>
      </div>

    </div>
  );
};
