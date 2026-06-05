import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import LinkButton from '../ui/button/LinkButton';

export const FlowBuilderFeatureContent = () => {
  return (
    <div className="space-y-8 text-secondary dark:text-white/80 pb-6 text-left">
      {/* Hero Section */}
      <div className="space-y-6 text-center max-w-3xl mx-auto flex flex-col items-center pt-4 pb-8">
        <h1 className="text-heading-3 md:text-heading-2 font-black tracking-tight text-secondary dark:text-white">Automate Customer Journeys Without Coding</h1>
        <p className="text-lg md:text-xl leading-relaxed text-secondary/70 dark:text-white/70">
          Create smart WhatsApp flows for lead capture, order updates, product recommendations, and customer support in minutes.
        </p>
        <p className="text-lg md:text-xl leading-relaxed text-secondary/70 dark:text-white/70">
          Design powerful customer experiences with a simple drag-and-drop builder that helps you automate conversations, save time, and scale your business effortlessly.
        </p>
        <ul className="flex flex-wrap justify-center gap-4 mt-6">
          {["No Coding Required", "Drag-and-Drop Flow Builder", "Lead Generation Automation", "Customer Support Workflows", "AI-Powered Customer Journeys"].map((item, i) => (
            <li key={i} className="flex items-center gap-2 font-medium bg-black/5 dark:bg-white/5 px-4 py-2 rounded-full text-sm">
              <CheckCircle2 className="text-primary-500 w-4 h-4 shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <div className="pt-8">
          <LinkButton href="/contact-us" className="inline-flex h-14 items-center justify-center rounded-full bg-primary-500 px-10 text-base font-bold text-white transition-all hover:bg-primary-600 hover:shadow-lg hover:shadow-primary-500/30">
            Start Your Flows
          </LinkButton>
        </div>
      </div>

      <hr className="border-stroke-1 dark:border-white/10" />

      {/* Build Smarter Customer Experiences */}
      <div className="space-y-4">
        <h4 className="text-heading-5 font-black tracking-tight text-secondary dark:text-white">Build Smarter Customer Experiences</h4>
        <div className="space-y-4 text-lg leading-relaxed text-secondary/70 dark:text-white/70">
          <p>Modern customers expect instant responses and seamless interactions.</p>
          <p>With Caartzee Snap Flow Builder, you can automate every stage of the customer journey—from the first message to the final purchase—without writing a single line of code.</p>
          <p>Create workflows that engage customers, nurture leads, answer questions, and drive sales automatically.</p>
        </div>
      </div>

      <hr className="border-stroke-1 dark:border-white/10" />

      {/* Why Use Flow Builder? */}
      <div className="space-y-4">
        <h4 className="text-heading-5 font-black tracking-tight text-secondary dark:text-white">Why Use Flow Builder?</h4>
        <div className="space-y-4 text-lg leading-relaxed text-secondary/70 dark:text-white/70">
          <p>Manual conversations can slow down growth. Flow Builder helps you automate repetitive tasks so your team can focus on closing deals and building customer relationships.</p>
        </div>
        <div className="pt-4">
          <h5 className="text-heading-6 font-bold text-secondary dark:text-white mb-3">Benefits</h5>
          <ul className="list-disc list-inside space-y-2 ml-2 leading-relaxed text-secondary/70 dark:text-white/70">
            <li>Automate customer engagement</li>
            <li>Capture and qualify leads</li>
            <li>Reduce support workload</li>
            <li>Increase sales conversions</li>
            <li>Deliver instant responses 24/7</li>
            <li>Scale operations without hiring more agents</li>
          </ul>
        </div>
      </div>

      <hr className="border-stroke-1 dark:border-white/10" />

      {/* Create Powerful Workflows */}
      <div className="space-y-6">
        <h4 className="text-heading-5 font-black tracking-tight text-secondary dark:text-white">Create Powerful Workflows in Minutes</h4>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="bg-black/5 dark:bg-white/5 p-6 rounded-2xl">
            <h5 className="text-heading-6 font-bold text-secondary dark:text-white mb-2">Drag-and-Drop Simplicity</h5>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70">Build automation flows visually with an easy-to-use interface. Simply drag, connect, and customize flow blocks to create personalized customer journeys.</p>
            <p className="mt-3 font-medium text-secondary/90 dark:text-white/90">No developers required.</p>
          </div>

          <div className="bg-black/5 dark:bg-white/5 p-6 rounded-2xl">
            <h5 className="text-heading-6 font-bold text-secondary dark:text-white mb-2">Customize Every Customer Path</h5>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70 mb-3">Create different experiences based on customer actions and responses. Guide customers through:</p>
            <ul className="list-disc list-inside space-y-1 ml-2 leading-relaxed text-secondary/70 dark:text-white/70">
              <li>Product discovery</li>
              <li>Lead qualification</li>
              <li>Order tracking</li>
              <li>Customer support</li>
              <li>Appointment booking</li>
              <li>Purchase completion</li>
            </ul>
            <p className="mt-3 font-medium text-secondary/90 dark:text-white/90">Every interaction becomes smarter and more personalized.</p>
          </div>
        </div>
      </div>

      <hr className="border-stroke-1 dark:border-white/10" />

      {/* Automate Lead Generation */}
      <div className="space-y-6">
        <h4 className="text-heading-5 font-black tracking-tight text-secondary dark:text-white">Automate Lead Generation</h4>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="border border-stroke-1 dark:border-white/10 p-5 rounded-2xl">
            <h5 className="text-heading-6 font-bold text-secondary dark:text-white mb-2">Capture High-Quality Leads Automatically</h5>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70 mb-3">Collect customer information directly through WhatsApp conversations. Gather:</p>
            <ul className="list-disc list-inside space-y-1 ml-2 leading-relaxed text-secondary/70 dark:text-white/70">
              <li>Name</li>
              <li>Phone number</li>
              <li>Email address</li>
              <li>Product interests</li>
              <li>Budget requirements</li>
              <li>Purchase intent</li>
            </ul>
            <p className="mt-3 font-medium text-secondary/90 dark:text-white/90">Automatically send qualified leads to your sales team.</p>
          </div>

          <div className="border border-stroke-1 dark:border-white/10 p-5 rounded-2xl">
            <h5 className="text-heading-6 font-bold text-secondary dark:text-white mb-2">Lead Qualification Workflows</h5>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70 mb-3">Identify serious buyers instantly.</p>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70">Ask targeted questions and automatically segment prospects based on their responses.</p>
            <p className="mt-3 font-medium text-secondary/90 dark:text-white/90">Help your team focus on customers most likely to convert.</p>
          </div>
        </div>
      </div>

      <hr className="border-stroke-1 dark:border-white/10" />

      {/* Product & Support Automation */}
      <div className="space-y-6">
        <h4 className="text-heading-5 font-black tracking-tight text-secondary dark:text-white">Smart Interactions & Support</h4>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="bg-black/5 dark:bg-white/5 p-6 rounded-2xl">
            <h5 className="text-heading-6 font-bold text-secondary dark:text-white mb-2">Product Recommendation Flows</h5>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70 mb-3">Guide Customers to the Right Products. Automatically recommend products based on:</p>
            <ul className="list-disc list-inside space-y-1 ml-2 leading-relaxed text-secondary/70 dark:text-white/70">
              <li>Customer preferences</li>
              <li>Product categories</li>
              <li>Shopping behavior</li>
              <li>Previous interactions</li>
            </ul>
            <p className="mt-3 font-medium text-secondary/90 dark:text-white/90">Deliver a personalized shopping experience that increases conversions.</p>
          </div>

          <div className="bg-black/5 dark:bg-white/5 p-6 rounded-2xl">
            <h5 className="text-heading-6 font-bold text-secondary dark:text-white mb-2">Customer Support Automation</h5>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70 mb-3">Answer Questions Instantly. Create automated support flows to handle:</p>
            <ul className="list-disc list-inside space-y-1 ml-2 leading-relaxed text-secondary/70 dark:text-white/70">
              <li>Product information</li>
              <li>Pricing questions</li>
              <li>Shipping details</li>
              <li>Order tracking</li>
              <li>Returns and refunds</li>
              <li>Store policies</li>
            </ul>
            <p className="mt-3 font-medium text-secondary/90 dark:text-white/90">Provide support around the clock without overwhelming your team.</p>
          </div>
        </div>
      </div>

      <hr className="border-stroke-1 dark:border-white/10" />

      {/* Order Updates & Carts */}
      <div className="space-y-6">
        <h4 className="text-heading-5 font-black tracking-tight text-secondary dark:text-white">Order Tracking & Recovery</h4>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="border border-stroke-1 dark:border-white/10 p-5 rounded-2xl">
            <h5 className="text-heading-6 font-bold text-secondary dark:text-white mb-2">Order Updates & Notifications</h5>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70 mb-3">Keep Customers Informed Automatically. Send real-time notifications:</p>
            <ul className="list-disc list-inside space-y-1 ml-2 leading-relaxed text-secondary/70 dark:text-white/70">
              <li>Order confirmations</li>
              <li>Payment confirmations</li>
              <li>Shipping updates</li>
              <li>Delivery notifications</li>
              <li>Feedback requests</li>
            </ul>
            <p className="mt-3 font-medium text-secondary/90 dark:text-white/90">Improve customer trust and satisfaction with proactive communication.</p>
          </div>

          <div className="border border-stroke-1 dark:border-white/10 p-5 rounded-2xl">
            <h5 className="text-heading-6 font-bold text-secondary dark:text-white mb-2">Recover Abandoned Carts</h5>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70 mb-3">Win Back Lost Sales. Follow up with customers who leave without completing their purchase:</p>
            <ul className="list-disc list-inside space-y-1 ml-2 leading-relaxed text-secondary/70 dark:text-white/70">
              <li>Send reminder messages</li>
              <li>Share product links</li>
              <li>Offer discounts</li>
              <li>Recommend alternatives</li>
              <li>Encourage checkout completion</li>
            </ul>
            <p className="mt-3 font-medium text-secondary/90 dark:text-white/90">Turn abandoned carts into completed orders.</p>
          </div>
        </div>
      </div>

      <hr className="border-stroke-1 dark:border-white/10" />

      {/* AI & Analytics */}
      <div className="space-y-6">
        <h4 className="text-heading-5 font-black tracking-tight text-secondary dark:text-white">Smarter Data-Driven Workflows</h4>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <h5 className="text-heading-6 font-bold text-secondary dark:text-white mb-2">AI-Powered Automation</h5>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70 mb-3">Combine automation with artificial intelligence to create more engaging customer experiences. AI can:</p>
            <ul className="list-disc list-inside space-y-1 ml-2 leading-relaxed text-secondary/70 dark:text-white/70">
              <li>Understand customer intent</li>
              <li>Recommend next actions</li>
              <li>Suggest products</li>
              <li>Answer questions</li>
              <li>Personalize conversations</li>
            </ul>
            <p className="mt-3 font-medium text-secondary/90 dark:text-white/90">Deliver human-like interactions at scale.</p>
          </div>

          <div>
            <h5 className="text-heading-6 font-bold text-secondary dark:text-white mb-2">Real-Time Flow Analytics</h5>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70 mb-3">Optimize Every Customer Journey. Track performance and monitor:</p>
            <ul className="list-disc list-inside space-y-1 ml-2 leading-relaxed text-secondary/70 dark:text-white/70">
              <li>Flow completion rates</li>
              <li>Customer engagement</li>
              <li>Lead conversions</li>
              <li>Sales generated</li>
              <li>Response effectiveness</li>
            </ul>
            <p className="mt-3 font-medium text-secondary/90 dark:text-white/90">Make data-driven decisions that improve business outcomes.</p>
          </div>
        </div>
      </div>

      <hr className="border-stroke-1 dark:border-white/10" />

      {/* Popular Flow Templates */}
      <div className="space-y-6">
        <h4 className="text-heading-5 font-black tracking-tight text-secondary dark:text-white">Popular Flow Templates</h4>
        <p className="leading-relaxed text-secondary/70 dark:text-white/70">Get started quickly with pre-built automation templates.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <div className="bg-primary-500/5 p-5 rounded-2xl border border-primary-500/10">
            <h5 className="font-bold text-primary-500 mb-2">Lead Generation Flow</h5>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70">Capture and qualify new leads automatically.</p>
          </div>
          <div className="bg-primary-500/5 p-5 rounded-2xl border border-primary-500/10">
            <h5 className="font-bold text-primary-500 mb-2">Product Recommendation Flow</h5>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70">Help customers discover products they'll love.</p>
          </div>
          <div className="bg-primary-500/5 p-5 rounded-2xl border border-primary-500/10">
            <h5 className="font-bold text-primary-500 mb-2">Customer Support Flow</h5>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70">Resolve common inquiries instantly.</p>
          </div>
          <div className="bg-primary-500/5 p-5 rounded-2xl border border-primary-500/10">
            <h5 className="font-bold text-primary-500 mb-2">Order Tracking Flow</h5>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70">Provide real-time order status updates.</p>
          </div>
          <div className="bg-primary-500/5 p-5 rounded-2xl border border-primary-500/10">
            <h5 className="font-bold text-primary-500 mb-2">Cart Recovery Flow</h5>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70">Recover lost sales and boost conversions.</p>
          </div>
          <div className="bg-primary-500/5 p-5 rounded-2xl border border-primary-500/10">
            <h5 className="font-bold text-primary-500 mb-2">Promotional Campaign Flow</h5>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70">Launch marketing campaigns through WhatsApp.</p>
          </div>
        </div>
      </div>

      <hr className="border-stroke-1 dark:border-white/10" />

      {/* Built for Every Business */}
      <div className="space-y-6">
        <h4 className="text-heading-5 font-black tracking-tight text-secondary dark:text-white">Built for Every Business</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <div className="border border-stroke-1 dark:border-white/10 p-5 rounded-2xl">
            <h5 className="text-heading-6 font-bold text-secondary dark:text-white mb-2">Shopify Stores</h5>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70">Automate customer engagement and increase sales.</p>
          </div>
          <div className="border border-stroke-1 dark:border-white/10 p-5 rounded-2xl">
            <h5 className="text-heading-6 font-bold text-secondary dark:text-white mb-2">E-commerce Brands</h5>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70">Create personalized shopping experiences.</p>
          </div>
          <div className="border border-stroke-1 dark:border-white/10 p-5 rounded-2xl">
            <h5 className="text-heading-6 font-bold text-secondary dark:text-white mb-2">D2C Businesses</h5>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70">Build stronger customer relationships.</p>
          </div>
          <div className="border border-stroke-1 dark:border-white/10 p-5 rounded-2xl">
            <h5 className="text-heading-6 font-bold text-secondary dark:text-white mb-2">Retail Companies</h5>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70">Deliver faster support and product guidance.</p>
          </div>
          <div className="border border-stroke-1 dark:border-white/10 p-5 rounded-2xl lg:col-span-2">
            <h5 className="text-heading-6 font-bold text-secondary dark:text-white mb-2">Growing Businesses</h5>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70">Scale customer communication efficiently.</p>
          </div>
        </div>
      </div>

      <hr className="border-stroke-1 dark:border-white/10" />

      {/* Benefits for Your Team */}
      <div className="space-y-6">
        <h4 className="text-heading-5 font-black tracking-tight text-secondary dark:text-white">Benefits for Your Team</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <div><h5 className="font-bold text-secondary dark:text-white mb-1">Save Time</h5><p className="leading-relaxed text-secondary/70 dark:text-white/70">Automate repetitive conversations and workflows.</p></div>
          <div><h5 className="font-bold text-secondary dark:text-white mb-1">Increase Productivity</h5><p className="leading-relaxed text-secondary/70 dark:text-white/70">Allow your team to focus on strategic activities.</p></div>
          <div><h5 className="font-bold text-secondary dark:text-white mb-1">Improve Customer Satisfaction</h5><p className="leading-relaxed text-secondary/70 dark:text-white/70">Deliver instant and consistent responses.</p></div>
          <div><h5 className="font-bold text-secondary dark:text-white mb-1">Generate More Revenue</h5><p className="leading-relaxed text-secondary/70 dark:text-white/70">Guide customers toward purchase decisions automatically.</p></div>
          <div><h5 className="font-bold text-secondary dark:text-white mb-1">Scale Faster</h5><p className="leading-relaxed text-secondary/70 dark:text-white/70">Handle thousands of conversations without increasing support costs.</p></div>
        </div>
      </div>

      <hr className="border-stroke-1 dark:border-white/10" />

      {/* FAQs */}
      <div className="space-y-6">
        <h4 className="text-heading-5 font-black tracking-tight text-secondary dark:text-white">Frequently Asked Questions</h4>
        <div className="space-y-5">
          <div><h5 className="font-bold text-secondary dark:text-white mb-1">Do I need coding knowledge?</h5><p className="leading-relaxed text-secondary/70 dark:text-white/70">No. Flow Builder is completely visual and designed for non-technical users.</p></div>
          <div><h5 className="font-bold text-secondary dark:text-white mb-1">Can I create custom workflows?</h5><p className="leading-relaxed text-secondary/70 dark:text-white/70">Yes. You can build workflows tailored to your business processes and customer journeys.</p></div>
          <div><h5 className="font-bold text-secondary dark:text-white mb-1">Does Flow Builder work with WhatsApp?</h5><p className="leading-relaxed text-secondary/70 dark:text-white/70">Absolutely. All workflows are designed to automate WhatsApp conversations and engagement.</p></div>
          <div><h5 className="font-bold text-secondary dark:text-white mb-1">Can AI be added to workflows?</h5><p className="leading-relaxed text-secondary/70 dark:text-white/70">Yes. AI can enhance workflows with intelligent responses, recommendations, and customer assistance.</p></div>
          <div><h5 className="font-bold text-secondary dark:text-white mb-1">Are there pre-built templates available?</h5><p className="leading-relaxed text-secondary/70 dark:text-white/70">Yes. You can start with ready-made templates and customize them as needed.</p></div>
        </div>
      </div>

      <hr className="border-stroke-1 dark:border-white/10" />

      {/* Ready to Grow */}
      <div className="bg-primary-500/10 p-8 rounded-3xl text-center space-y-5 border border-primary-500/20">
        <h4 className="text-heading-4 font-black tracking-tight text-secondary dark:text-white">Build Once. Automate Forever.</h4>
        <p className="leading-relaxed text-secondary/70 dark:text-white/70 max-w-xl mx-auto">Create powerful customer journeys that engage, convert, and support customers automatically. With Caartzee Snap Flow Builder, you can deliver exceptional customer experiences while scaling your business effortlessly.</p>
        <p className="font-black text-primary-500 text-lg uppercase tracking-wider">Automate Smarter. Sell Faster. Grow Bigger.</p>
        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <LinkButton href="/contact-us" className="inline-flex h-14 items-center justify-center rounded-full bg-primary-500 px-8 text-base font-bold text-white transition-all hover:bg-primary-600 hover:shadow-lg hover:shadow-primary-500/30">
            Start Building Today
          </LinkButton>
        </div>
      </div>

    </div>
  );
};
