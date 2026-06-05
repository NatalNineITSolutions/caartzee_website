import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import LinkButton from '../ui/button/LinkButton';

export const AIFeatureContent = () => {
  return (
    <div className="space-y-8 text-secondary dark:text-white/80 pb-6 text-left">
      {/* Hero Section */}
      <div className="space-y-6 text-center max-w-3xl mx-auto flex flex-col items-center pt-4 pb-8">
        <h1 className="text-heading-3 md:text-heading-2 font-black tracking-tight text-secondary dark:text-white">AI That Sells While You Sleep</h1>
        <p className="text-lg md:text-xl leading-relaxed text-secondary/70 dark:text-white/70">
          Provide instant, accurate responses 24/7, qualify leads, recommend products, and convert conversations into revenue.
        </p>
        <p className="text-lg md:text-xl leading-relaxed text-secondary/70 dark:text-white/70">
          Empower your business with an intelligent AI assistant that engages customers, answers questions, and drives sales around the clock—without adding to your team's workload.
        </p>
        <ul className="flex flex-wrap justify-center gap-4 mt-6">
          {["24/7 Customer Engagement", "AI-Powered Product Recommendations", "Instant Response Automation", "Lead Qualification & Nurturing", "Higher Conversions, Less Effort"].map((item, i) => (
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

      {/* Never Miss a Sales Opportunity Again */}
      <div className="space-y-4">
        <h4 className="text-heading-5 font-black tracking-tight text-secondary dark:text-white">Never Miss a Sales Opportunity Again</h4>
        <div className="space-y-4 text-lg leading-relaxed text-secondary/70 dark:text-white/70">
          <p>Customers don't always shop during business hours.</p>
          <p>Questions come in late at night, during weekends, and when your team is unavailable. Every unanswered message is a potential lost sale.</p>
          <p>Caartzee Snap AI Sales Assistant works around the clock to engage customers, answer inquiries, recommend products, and guide shoppers toward purchase decisions—automatically.</p>
        </div>
      </div>

      <hr className="border-stroke-1 dark:border-white/10" />

      {/* Your Best Sales Representative */}
      <div className="space-y-4">
        <h4 className="text-heading-5 font-black tracking-tight text-secondary dark:text-white">Your Best Sales Representative, Available 24/7</h4>
        <p className="text-lg leading-relaxed text-secondary/70 dark:text-white/70">Unlike traditional chatbots, Caartzee AI understands customer intent and responds naturally with accurate, personalized answers.</p>
        <div className="pt-4">
          <h5 className="text-heading-6 font-bold text-secondary dark:text-white mb-3">The AI Can:</h5>
          <ul className="list-disc list-inside space-y-2 ml-2 leading-relaxed text-secondary/70 dark:text-white/70">
            <li>Answer product questions instantly</li>
            <li>Recommend relevant products</li>
            <li>Explain pricing and offers</li>
            <li>Assist with order inquiries</li>
            <li>Handle FAQs automatically</li>
            <li>Guide customers toward checkout</li>
            <li>Capture and qualify leads</li>
            <li>Follow up with interested buyers</li>
          </ul>
          <p className="mt-4 font-bold text-secondary dark:text-white">Every conversation becomes an opportunity to generate revenue.</p>
        </div>
      </div>

      <hr className="border-stroke-1 dark:border-white/10" />

      {/* How the AI Sales Assistant Works */}
      <div className="space-y-6">
        <h4 className="text-heading-5 font-black tracking-tight text-secondary dark:text-white">How the AI Sales Assistant Works</h4>
        <ol className="space-y-4 relative border-l border-stroke-1 dark:border-white/10 ml-3">
          <li className="pl-6 relative">
            <span className="absolute -left-[13px] top-0 flex h-6 w-6 items-center justify-center rounded-full bg-primary-500 text-xs font-bold text-white">1</span>
            <strong className="block text-secondary dark:text-white mb-1">Customer Starts a Conversation</strong> 
            <span className="leading-relaxed text-secondary/70 dark:text-white/70">A customer sends a message through WhatsApp asking about a product, price, or availability.</span>
          </li>
          <li className="pl-6 relative">
            <span className="absolute -left-[13px] top-0 flex h-6 w-6 items-center justify-center rounded-full bg-primary-500 text-xs font-bold text-white">2</span>
            <strong className="block text-secondary dark:text-white mb-1">AI Understands the Request</strong> 
            <span className="leading-relaxed text-secondary/70 dark:text-white/70">The AI analyzes the customer's intent and instantly provides relevant responses.</span>
          </li>
          <li className="pl-6 relative">
            <span className="absolute -left-[13px] top-0 flex h-6 w-6 items-center justify-center rounded-full bg-primary-500 text-xs font-bold text-white">3</span>
            <strong className="block text-secondary dark:text-white mb-1">AI Recommends Products</strong> 
            <span className="leading-relaxed text-secondary/70 dark:text-white/70">Based on customer preferences and behavior, the AI suggests products most likely to convert.</span>
          </li>
          <li className="pl-6 relative">
            <span className="absolute -left-[13px] top-0 flex h-6 w-6 items-center justify-center rounded-full bg-primary-500 text-xs font-bold text-white">4</span>
            <strong className="block text-secondary dark:text-white mb-1">AI Guides the Purchase Journey</strong> 
            <span className="leading-relaxed text-secondary/70 dark:text-white/70">The assistant answers objections, shares payment links, and helps customers complete their purchase.</span>
          </li>
        </ol>
      </div>

      <hr className="border-stroke-1 dark:border-white/10" />

      {/* Intelligent Product Recommendations & Instant Responses */}
      <div className="space-y-6">
        <h4 className="text-heading-5 font-black tracking-tight text-secondary dark:text-white">Smart Engagement</h4>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="bg-black/5 dark:bg-white/5 p-6 rounded-2xl">
            <h5 className="text-heading-6 font-bold text-secondary dark:text-white mb-2">Intelligent Product Recommendations</h5>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70 mb-3">Sell the Right Product at the Right Time. The AI automatically recommends products based on:</p>
            <ul className="list-disc list-inside space-y-1 ml-2 leading-relaxed text-secondary/70 dark:text-white/70">
              <li>Customer interests</li>
              <li>Previous interactions</li>
              <li>Shopping behavior</li>
              <li>Product categories</li>
              <li>Purchase intent</li>
            </ul>
            <p className="mt-3 font-medium text-secondary/90 dark:text-white/90">Deliver personalized shopping experiences that increase conversion rates and average order value.</p>
          </div>

          <div className="bg-black/5 dark:bg-white/5 p-6 rounded-2xl">
            <h5 className="text-heading-6 font-bold text-secondary dark:text-white mb-2">Instant Responses That Build Trust</h5>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70 mb-3">Customers expect quick answers. The AI responds immediately to questions about:</p>
            <ul className="list-disc list-inside space-y-1 ml-2 leading-relaxed text-secondary/70 dark:text-white/70">
              <li>Products (Features, Specifications, Pricing, Availability)</li>
              <li>Orders (Order status, Shipping updates, Delivery information)</li>
              <li>Support (Returns, Refunds, Policies, General inquiries)</li>
            </ul>
            <p className="mt-3 font-medium text-secondary/90 dark:text-white/90">No waiting. No missed opportunities.</p>
          </div>
        </div>
      </div>

      <hr className="border-stroke-1 dark:border-white/10" />

      {/* Automated Lead Qualification & Turn Conversations Into Revenue */}
      <div className="space-y-6">
        <h4 className="text-heading-5 font-black tracking-tight text-secondary dark:text-white">Generate More Revenue</h4>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="border border-stroke-1 dark:border-white/10 p-5 rounded-2xl">
            <h5 className="text-heading-6 font-bold text-secondary dark:text-white mb-2">Automated Lead Qualification</h5>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70 mb-3">Not every visitor is ready to buy immediately. The AI identifies and qualifies high-intent leads by collecting key information. Automatically Capture:</p>
            <ul className="list-disc list-inside space-y-1 ml-2 leading-relaxed text-secondary/70 dark:text-white/70">
              <li>Customer contact details</li>
              <li>Product interests</li>
              <li>Budget preferences</li>
              <li>Purchase intent</li>
              <li>Inquiry history</li>
            </ul>
            <p className="mt-3 font-medium text-secondary/90 dark:text-white/90">Help your sales team focus on leads most likely to convert.</p>
          </div>

          <div className="border border-stroke-1 dark:border-white/10 p-5 rounded-2xl">
            <h5 className="text-heading-6 font-bold text-secondary dark:text-white mb-2">Turn Conversations Into Revenue</h5>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70 mb-3">Every interaction becomes a sales opportunity.</p>
            <ul className="list-disc list-inside space-y-2 ml-2 leading-relaxed text-secondary/70 dark:text-white/70">
              <li><strong>Upsell Opportunities:</strong> Recommend premium alternatives.</li>
              <li><strong>Cross-Sell Suggestions:</strong> Introduce relevant products.</li>
              <li><strong>Cart Recovery:</strong> Follow up with abandoned purchases.</li>
              <li><strong>Re-Engagement Campaigns:</strong> Reconnect with previous customers.</li>
            </ul>
          </div>
        </div>
      </div>

      <hr className="border-stroke-1 dark:border-white/10" />

      {/* Reduce Workload & AI Learns */}
      <div className="space-y-6">
        <h4 className="text-heading-5 font-black tracking-tight text-secondary dark:text-white">Smarter Support & Continuous Learning</h4>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <h5 className="text-heading-6 font-bold text-secondary dark:text-white mb-2">Reduce Customer Support Workload</h5>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70 mb-3">Most support teams spend valuable time answering repetitive questions. Automate Common Questions:</p>
            <ul className="list-disc list-inside space-y-1 ml-2 leading-relaxed text-secondary/70 dark:text-white/70">
              <li>Product information</li>
              <li>Store policies</li>
              <li>Shipping details</li>
              <li>Order tracking</li>
              <li>Payment information</li>
              <li>Return requests</li>
            </ul>
            <p className="mt-3 font-medium text-secondary/90 dark:text-white/90">Support more customers without increasing support costs.</p>
          </div>

          <div>
            <h5 className="text-heading-6 font-bold text-secondary dark:text-white mb-2">AI That Learns and Improves</h5>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70 mb-3">The more conversations it handles, the smarter it becomes. The AI continuously improves its understanding of:</p>
            <ul className="list-disc list-inside space-y-1 ml-2 leading-relaxed text-secondary/70 dark:text-white/70">
              <li>Customer behavior</li>
              <li>Frequently asked questions</li>
              <li>Product information</li>
              <li>Sales opportunities</li>
              <li>Customer preferences</li>
            </ul>
            <p className="mt-3 font-medium text-secondary/90 dark:text-white/90">Deliver increasingly personalized experiences over time.</p>
          </div>
        </div>
      </div>

      <hr className="border-stroke-1 dark:border-white/10" />

      {/* Benefits for Your Business */}
      <div className="space-y-6">
        <h4 className="text-heading-5 font-black tracking-tight text-secondary dark:text-white">Benefits for Your Business</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <div><h5 className="font-bold text-secondary dark:text-white mb-1">Increase Sales</h5><p className="leading-relaxed text-secondary/70 dark:text-white/70">Convert more conversations into purchases through intelligent engagement.</p></div>
          <div><h5 className="font-bold text-secondary dark:text-white mb-1">Improve Customer Experience</h5><p className="leading-relaxed text-secondary/70 dark:text-white/70">Deliver instant, accurate support whenever customers need assistance.</p></div>
          <div><h5 className="font-bold text-secondary dark:text-white mb-1">Save Time</h5><p className="leading-relaxed text-secondary/70 dark:text-white/70">Automate repetitive sales and support tasks.</p></div>
          <div><h5 className="font-bold text-secondary dark:text-white mb-1">Scale Efficiently</h5><p className="leading-relaxed text-secondary/70 dark:text-white/70">Handle thousands of customer conversations without expanding your team.</p></div>
          <div><h5 className="font-bold text-secondary dark:text-white mb-1">Generate More Qualified Leads</h5><p className="leading-relaxed text-secondary/70 dark:text-white/70">Identify and nurture potential customers automatically.</p></div>
        </div>
      </div>

      <hr className="border-stroke-1 dark:border-white/10" />

      {/* Why Businesses Choose Caartzee AI */}
      <div className="space-y-6">
        <h4 className="text-heading-5 font-black tracking-tight text-secondary dark:text-white">Why Businesses Choose Caartzee AI</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <div className="bg-primary-500/5 p-5 rounded-2xl border border-primary-500/10">
            <h5 className="font-bold text-primary-500 mb-2">24/7 Availability</h5>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70">Engage customers anytime, anywhere.</p>
          </div>
          <div className="bg-primary-500/5 p-5 rounded-2xl border border-primary-500/10">
            <h5 className="font-bold text-primary-500 mb-2">Faster Response Times</h5>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70">Answer inquiries instantly.</p>
          </div>
          <div className="bg-primary-500/5 p-5 rounded-2xl border border-primary-500/10">
            <h5 className="font-bold text-primary-500 mb-2">Higher Conversion Rates</h5>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70">Guide customers toward purchasing decisions.</p>
          </div>
          <div className="bg-primary-500/5 p-5 rounded-2xl border border-primary-500/10">
            <h5 className="font-bold text-primary-500 mb-2">Lower Support Costs</h5>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70">Reduce manual support workload.</p>
          </div>
          <div className="bg-primary-500/5 p-5 rounded-2xl border border-primary-500/10">
            <h5 className="font-bold text-primary-500 mb-2">Better Customer Satisfaction</h5>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70">Provide personalized experiences that customers love.</p>
          </div>
        </div>
      </div>

      <hr className="border-stroke-1 dark:border-white/10" />

      {/* FAQs */}
      <div className="space-y-6">
        <h4 className="text-heading-5 font-black tracking-tight text-secondary dark:text-white">Frequently Asked Questions</h4>
        <div className="space-y-5">
          <div><h5 className="font-bold text-secondary dark:text-white mb-1">Does the AI replace human agents?</h5><p className="leading-relaxed text-secondary/70 dark:text-white/70">No. The AI handles routine conversations and sales inquiries while allowing human agents to step in whenever needed.</p></div>
          <div><h5 className="font-bold text-secondary dark:text-white mb-1">Can the AI recommend products?</h5><p className="leading-relaxed text-secondary/70 dark:text-white/70">Yes. It analyzes customer intent and suggests relevant products automatically.</p></div>
          <div><h5 className="font-bold text-secondary dark:text-white mb-1">Is the AI available 24/7?</h5><p className="leading-relaxed text-secondary/70 dark:text-white/70">Absolutely. The AI assistant works continuously, even outside business hours.</p></div>
          <div><h5 className="font-bold text-secondary dark:text-white mb-1">Can the AI qualify leads?</h5><p className="leading-relaxed text-secondary/70 dark:text-white/70">Yes. It gathers customer information and identifies high-intent prospects automatically.</p></div>
          <div><h5 className="font-bold text-secondary dark:text-white mb-1">Does it integrate with Shopify?</h5><p className="leading-relaxed text-secondary/70 dark:text-white/70">Yes. The AI can access synced product information and help customers discover products from your Shopify store.</p></div>
        </div>
      </div>

      <hr className="border-stroke-1 dark:border-white/10" />

      {/* Ready to Grow */}
      <div className="bg-primary-500/10 p-8 rounded-3xl text-center space-y-5 border border-primary-500/20">
        <h4 className="text-heading-4 font-black tracking-tight text-secondary dark:text-white">Let AI Grow Your Business Around the Clock</h4>
        <p className="leading-relaxed text-secondary/70 dark:text-white/70 max-w-xl mx-auto">Transform customer conversations into sales with an AI assistant that never sleeps, never misses a lead, and never stops selling.</p>
        <p className="font-black text-primary-500 text-lg uppercase tracking-wider">Automate Conversations. Increase Revenue. Scale Faster.</p>
        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <LinkButton href="/contact-us" className="inline-flex h-14 items-center justify-center rounded-full bg-primary-500 px-8 text-base font-bold text-white transition-all hover:bg-primary-600 hover:shadow-lg hover:shadow-primary-500/30">
            Start with AI Today
          </LinkButton>
        </div>
      </div>

    </div>
  );
};
