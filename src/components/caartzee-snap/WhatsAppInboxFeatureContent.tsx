import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import LinkButton from '../ui/button/LinkButton';

export const WhatsAppInboxFeatureContent = () => {
  return (
    <div className="space-y-8 text-secondary dark:text-white/80 pb-6 text-left">
      {/* Hero Section */}
      <div className="space-y-6 text-center max-w-3xl mx-auto flex flex-col items-center pt-4 pb-8">
        <h1 className="text-heading-3 md:text-heading-2 font-black tracking-tight text-secondary dark:text-white">One Inbox for Every Customer Conversation</h1>
        <p className="text-lg md:text-xl leading-relaxed text-secondary/70 dark:text-white/70">
          Manage chats, share product catalogs, send payment links, and close sales from a single WhatsApp workspace.
        </p>
        <p className="text-lg md:text-xl leading-relaxed text-secondary/70 dark:text-white/70">
          Bring all your customer conversations into one centralized inbox and empower your team to deliver faster responses, better support, and more sales.
        </p>
        <ul className="flex flex-wrap justify-center gap-4 mt-6">
          {["Unified WhatsApp Inbox", "Team Collaboration", "Product Catalog Sharing", "Integrated Payments", "AI-Assisted Conversations"].map((item, i) => (
            <li key={i} className="flex items-center gap-2 font-medium bg-black/5 dark:bg-white/5 px-4 py-2 rounded-full text-sm">
              <CheckCircle2 className="text-primary-500 w-4 h-4 shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <div className="pt-8">
          <LinkButton href="/contact-us" className="inline-flex h-14 items-center justify-center rounded-full bg-primary-500 px-10 text-base font-bold text-white transition-all hover:bg-primary-600 hover:shadow-lg hover:shadow-primary-500/30">
            Schedule a Demo
          </LinkButton>
        </div>
      </div>

      <hr className="border-stroke-1 dark:border-white/10" />

      {/* Manage Every Customer */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center py-8">
        {/* Left Image */}
        <div className="w-full lg:col-span-8">
          <img 
            src="/images/whatapp%20inbox1.png" 
            alt="WhatsApp Inbox Overview" 
            className="w-full h-auto rounded-2xl shadow-2xl border border-stroke-1 dark:border-white/10 object-contain" 
          />
        </div>

        {/* Right Content */}
        <div className="space-y-4 lg:col-span-4">
          <h4 className="text-heading-5 font-black tracking-tight text-secondary dark:text-white">Manage Every Customer Conversation from One Place</h4>
          <div className="space-y-4 text-lg leading-relaxed text-secondary/70 dark:text-white/70">
            <p>As your business grows, customer conversations can quickly become difficult to manage.</p>
            <p>Caartzee Snap's WhatsApp Inbox gives your team a centralized workspace to handle inquiries, support requests, orders, and sales conversations efficiently.</p>
            <p>No more switching between devices, numbers, or applications. Everything is organized in one powerful dashboard.</p>
          </div>
        </div>
      </div>

      <hr className="border-stroke-1 dark:border-white/10" />

      {/* Designed for Sales */}
      <div className="space-y-6">
        <h4 className="text-heading-5 font-black tracking-tight text-secondary dark:text-white">Designed for Sales and Support Teams</h4>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-black/5 dark:bg-white/5 p-5 rounded-2xl">
            <h5 className="text-heading-6 font-bold text-secondary dark:text-white mb-2">Customer Support</h5>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70">Resolve customer questions faster with complete conversation history and instant access to customer information.</p>
          </div>
          <div className="bg-black/5 dark:bg-white/5 p-5 rounded-2xl">
            <h5 className="text-heading-6 font-bold text-secondary dark:text-white mb-2">Sales Management</h5>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70">Convert inquiries into purchases by sharing products, payment links, and personalized recommendations directly in chat.</p>
          </div>
          {/* <div className="bg-black/5 dark:bg-white/5 p-5 rounded-2xl">
            <h5 className="text-heading-6 font-bold text-secondary dark:text-white mb-2">Team Collaboration</h5>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70">Assign conversations to team members, add notes, and ensure every customer receives the right support.</p>
          </div> */}
        </div>
      </div>

      <hr className="border-stroke-1 dark:border-white/10" />

      {/* Everything You Need */}
      <div className="space-y-6">
        <h4 className="text-heading-5 font-black tracking-tight text-secondary dark:text-white">Everything You Need Inside One Inbox</h4>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="border border-stroke-1 dark:border-white/10 p-5 rounded-2xl">
            <h5 className="text-heading-6 font-bold text-secondary dark:text-white mb-2">Unified Chat Management</h5>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70 mb-3">Manage all incoming WhatsApp conversations from a single dashboard. View and respond to:</p>
            <ul className="list-disc list-inside space-y-1 ml-2 leading-relaxed text-secondary/70 dark:text-white/70">
              <li>Product inquiries</li>
              <li>Support requests</li>
              <li>Order updates</li>
              <li>Payment questions</li>
              <li>Customer feedback</li>
            </ul>
            <p className="mt-3 font-medium text-secondary/90 dark:text-white/90">Without leaving your workspace.</p>
          </div>

          <div className="border border-stroke-1 dark:border-white/10 p-5 rounded-2xl">
            <h5 className="text-heading-6 font-bold text-secondary dark:text-white mb-2">Product Catalog Sharing</h5>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70 mb-3">Turn conversations into shopping experiences. Share:</p>
            <ul className="list-disc list-inside space-y-1 ml-2 leading-relaxed text-secondary/70 dark:text-white/70">
              <li>Product images</li>
              <li>Product descriptions</li>
              <li>Pricing information</li>
              <li>Collections</li>
              <li>Featured products</li>
            </ul>
            <p className="mt-3 font-medium text-secondary/90 dark:text-white/90">Help customers discover and purchase products faster.</p>
          </div>

          <div className="border border-stroke-1 dark:border-white/10 p-5 rounded-2xl">
            <h5 className="text-heading-6 font-bold text-secondary dark:text-white mb-2">Send Payment Links Instantly</h5>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70 mb-3">Close deals directly from chat. Generate and share secure payment links without switching platforms.</p>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70">Customers can complete purchases in just a few clicks while staying engaged in the conversation.</p>
          </div>

          <div className="border border-stroke-1 dark:border-white/10 p-5 rounded-2xl">
            <h5 className="text-heading-6 font-bold text-secondary dark:text-white mb-2">AI-Assisted Responses</h5>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70 mb-3">Speed up conversations with intelligent AI assistance. The AI can:</p>
            <ul className="list-disc list-inside space-y-1 ml-2 leading-relaxed text-secondary/70 dark:text-white/70">
              <li>Suggest responses</li>
              <li>Answer common questions</li>
              <li>Recommend products</li>
              <li>Qualify leads</li>
              <li>Support customers 24/7</li>
            </ul>
            <p className="mt-3 font-medium text-secondary/90 dark:text-white/90">Allow your team to focus on high-value interactions.</p>
          </div>
        </div>
      </div>

      <hr className="border-stroke-1 dark:border-white/10" />

      {/* Improve Team Productivity */}
      <div className="space-y-6">
        <h4 className="text-heading-5 font-black tracking-tight text-secondary dark:text-white">Improve Team Productivity</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <h5 className="text-heading-6 font-bold text-secondary dark:text-white mb-2">Assign Conversations</h5>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70">Route conversations to the right sales or support representative.</p>
          </div>
          <div>
            <h5 className="text-heading-6 font-bold text-secondary dark:text-white mb-2">Internal Notes</h5>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70">Collaborate behind the scenes without customers seeing internal discussions.</p>
          </div>
          <div>
            <h5 className="text-heading-6 font-bold text-secondary dark:text-white mb-2">Conversation History</h5>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70">Access complete customer interaction history for personalized support.</p>
          </div>
          <div>
            <h5 className="text-heading-6 font-bold text-secondary dark:text-white mb-2">Faster Response Times</h5>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70">Respond quickly and consistently across all customer conversations.</p>
          </div>
        </div>
      </div>

      <hr className="border-stroke-1 dark:border-white/10" />

      {/* Built for High-Volume */}
      <div className="space-y-6">
        <h4 className="text-heading-5 font-black tracking-tight text-secondary dark:text-white">Built for High-Volume Customer Engagement</h4>
        <p className="leading-relaxed text-secondary/70 dark:text-white/70">Whether you're managing dozens or thousands of conversations, Caartzee Snap scales with your business.</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          <div className="bg-primary-500/5 p-5 rounded-2xl border border-primary-500/10">
            <h5 className="font-bold text-primary-500 mb-2">Handle More Conversations</h5>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70">Serve more customers without increasing operational complexity.</p>
          </div>
          <div className="bg-primary-500/5 p-5 rounded-2xl border border-primary-500/10">
            <h5 className="font-bold text-primary-500 mb-2">Reduce Response Delays</h5>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70">Ensure no customer inquiry goes unanswered.</p>
          </div>
          <div className="bg-primary-500/5 p-5 rounded-2xl border border-primary-500/10">
            <h5 className="font-bold text-primary-500 mb-2">Improve Customer Satisfaction</h5>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70">Deliver fast, professional, and personalized support experiences.</p>
          </div>
        </div>
      </div>

      <hr className="border-stroke-1 dark:border-white/10" />

      {/* Turn Conversations Into Revenue */}
      <div className="space-y-6">
        <h4 className="text-heading-5 font-black tracking-tight text-secondary dark:text-white">Turn Conversations Into Revenue</h4>
        <p className="leading-relaxed text-secondary/70 dark:text-white/70">The WhatsApp Inbox is more than a messaging tool—it's a sales engine.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="border border-stroke-1 dark:border-white/10 p-5 rounded-2xl">
            <h5 className="text-heading-6 font-bold text-secondary dark:text-white mb-2">Share Products Instantly</h5>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70">Recommend products based on customer interests.</p>
          </div>
          <div className="border border-stroke-1 dark:border-white/10 p-5 rounded-2xl">
            <h5 className="text-heading-6 font-bold text-secondary dark:text-white mb-2">Guide Customers to Purchase</h5>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70">Help shoppers find exactly what they need.</p>
          </div>
          <div className="border border-stroke-1 dark:border-white/10 p-5 rounded-2xl">
            <h5 className="text-heading-6 font-bold text-secondary dark:text-white mb-2">Send Payment Requests</h5>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70">Collect payments without leaving the conversation.</p>
          </div>
          <div className="border border-stroke-1 dark:border-white/10 p-5 rounded-2xl">
            <h5 className="text-heading-6 font-bold text-secondary dark:text-white mb-2">Follow Up Automatically</h5>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70">Reconnect with interested customers and recover missed opportunities.</p>
          </div>
        </div>
      </div>

      <hr className="border-stroke-1 dark:border-white/10" />

      {/* Real-Time Customer Information */}
      <div className="space-y-4">
        <h4 className="text-heading-5 font-black tracking-tight text-secondary dark:text-white">Real-Time Customer Information</h4>
        <p className="leading-relaxed text-secondary/70 dark:text-white/70">View important customer details while chatting. Access:</p>
        <ul className="list-disc list-inside space-y-2 mt-2 ml-2 leading-relaxed text-secondary/70 dark:text-white/70">
          <li>Customer profiles</li>
          <li>Order history</li>
          <li>Purchase behavior</li>
          <li>Conversation history</li>
          <li>Payment status</li>
        </ul>
        <p className="font-bold text-secondary dark:text-white mt-4">Deliver more personalized and effective customer interactions.</p>
      </div>

      <hr className="border-stroke-1 dark:border-white/10" />

      {/* Benefits for Your Business */}
      <div className="space-y-6">
        <h4 className="text-heading-5 font-black tracking-tight text-secondary dark:text-white">Benefits for Your Business</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <div><h5 className="font-bold text-secondary dark:text-white mb-1">Centralized Communication</h5><p className="leading-relaxed text-secondary/70 dark:text-white/70">Manage all customer conversations from one place.</p></div>
          <div><h5 className="font-bold text-secondary dark:text-white mb-1">Better Team Collaboration</h5><p className="leading-relaxed text-secondary/70 dark:text-white/70">Keep sales and support teams aligned.</p></div>
          <div><h5 className="font-bold text-secondary dark:text-white mb-1">Faster Support Resolution</h5><p className="leading-relaxed text-secondary/70 dark:text-white/70">Resolve customer issues quickly and efficiently.</p></div>
          <div><h5 className="font-bold text-secondary dark:text-white mb-1">Increased Sales</h5><p className="leading-relaxed text-secondary/70 dark:text-white/70">Convert more conversations into completed purchases.</p></div>
          <div><h5 className="font-bold text-secondary dark:text-white mb-1">Improved Customer Experience</h5><p className="leading-relaxed text-secondary/70 dark:text-white/70">Deliver consistent and professional communication.</p></div>
        </div>
      </div>

      <hr className="border-stroke-1 dark:border-white/10" />

      {/* FAQs */}
      <div className="space-y-6">
        <h4 className="text-heading-5 font-black tracking-tight text-secondary dark:text-white">Frequently Asked Questions</h4>
        <div className="space-y-5">
          <div><h5 className="font-bold text-secondary dark:text-white mb-1">Can multiple team members use the inbox?</h5><p className="leading-relaxed text-secondary/70 dark:text-white/70">Yes. Teams can collaborate, assign conversations, and manage customer interactions together.</p></div>
          <div><h5 className="font-bold text-secondary dark:text-white mb-1">Can I share products directly in chats?</h5><p className="leading-relaxed text-secondary/70 dark:text-white/70">Absolutely. You can send product catalogs, images, descriptions, and pricing instantly.</p></div>
          <div><h5 className="font-bold text-secondary dark:text-white mb-1">Does the inbox support payments?</h5><p className="leading-relaxed text-secondary/70 dark:text-white/70">Yes. Generate and share secure payment links directly from conversations.</p></div>
          <div><h5 className="font-bold text-secondary dark:text-white mb-1">Can AI assist with conversations?</h5><p className="leading-relaxed text-secondary/70 dark:text-white/70">Yes. AI can automate responses, recommend products, and support customer engagement.</p></div>
          <div><h5 className="font-bold text-secondary dark:text-white mb-1">Is customer conversation history stored?</h5><p className="leading-relaxed text-secondary/70 dark:text-white/70">Yes. Complete conversation history is available to help provide personalized support.</p></div>
        </div>
      </div>

      <hr className="border-stroke-1 dark:border-white/10" />

      {/* Ready to Grow */}
      <div className="bg-primary-500/10 p-8 rounded-3xl text-center space-y-5 border border-primary-500/20">
        <h4 className="text-heading-4 font-black tracking-tight text-secondary dark:text-white">Manage Conversations. Increase Sales. Delight Customers.</h4>
        <p className="leading-relaxed text-secondary/70 dark:text-white/70 max-w-xl mx-auto">Bring customer communication, sales, support, and payments together in one powerful WhatsApp Inbox.</p>
        <p className="font-black text-primary-500 text-lg uppercase tracking-wider">One Inbox. Better Conversations. More Revenue.</p>
        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <LinkButton href="/contact-us" className="inline-flex h-14 items-center justify-center rounded-full bg-primary-500 px-8 text-base font-bold text-white transition-all hover:bg-primary-600 hover:shadow-lg hover:shadow-primary-500/30">
            Get Started Today
          </LinkButton>
        </div>
      </div>

    </div>
  );
};
