import React from 'react';
import LinkButton from '../ui/button/LinkButton';

export const KnowledgeBaseContent = () => {
  return (
    <div className="space-y-8 text-secondary dark:text-white/80 pb-6 text-left">
      {/* Hero Section */}
      <div className="space-y-6 text-center max-w-3xl mx-auto flex flex-col items-center pt-4 pb-8">
        <h1 className="text-heading-3 md:text-heading-2 font-black tracking-tight text-secondary dark:text-white">Answers Ready Before Customers Ask.</h1>
        <p className="text-lg md:text-xl leading-relaxed text-secondary/70 dark:text-white/70">
          Train your AI with FAQs, product details, policies, and business information to deliver accurate responses instantly.
        </p>
        <p className="text-lg md:text-xl leading-relaxed text-secondary/70 dark:text-white/70">
          Give customers the information they need, exactly when they need it—without waiting for a human response.
        </p>
        <p className="text-lg md:text-xl font-bold text-primary-500 mt-2">
          Smarter answers start with better knowledge.
        </p>
        <div className="pt-8">
          <LinkButton href="/contact-us" className="inline-flex h-14 items-center justify-center rounded-full bg-primary-500 px-10 text-base font-bold text-white transition-all hover:bg-primary-600 hover:shadow-lg hover:shadow-primary-500/30">
            Build Your Knowledge Base
          </LinkButton>
        </div>
      </div>

      <hr className="border-stroke-1 dark:border-white/10" />

      {/* Every Great Conversation Starts with the Right Information */}
      <div className="space-y-4">
        <h4 className="text-heading-5 font-black tracking-tight text-secondary dark:text-white">Every Great Conversation Starts with the Right Information</h4>
        <div className="space-y-4 text-lg leading-relaxed text-secondary/70 dark:text-white/70">
          <p>Customers ask questions before they buy. They want to know:</p>
          <ul className="list-disc list-inside space-y-1 ml-2 font-bold text-secondary/90 dark:text-white/90">
            <li>Product details</li>
            <li>Pricing information</li>
            <li>Delivery timelines</li>
            <li>Return policies</li>
            <li>Availability</li>
            <li>Business information</li>
          </ul>
          <p>The faster they get answers, the more confident they feel.</p>
          <p className="font-medium text-secondary/90 dark:text-white/90">CaartZee Knowledge Base gives your AI the information it needs to provide accurate, consistent, and helpful responses around the clock.</p>
        </div>
      </div>

      <hr className="border-stroke-1 dark:border-white/10" />

      {/* Teach Your AI About Your Business */}
      <div className="space-y-6">
        <h4 className="text-heading-5 font-black tracking-tight text-secondary dark:text-white">Teach Your AI About Your Business</h4>
        <p className="leading-relaxed text-secondary/70 dark:text-white/70">Your business is unique. Your AI should understand it. Upload and organize the information that matters most:</p>
        
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">
          {["FAQs", "Product catalogs", "Store policies", "Shipping information", "Return policies", "Brand information", "Service details"].map((item, i) => (
            <div key={i} className="bg-black/5 dark:bg-white/5 p-4 rounded-xl text-center font-medium">
              {item}
            </div>
          ))}
        </div>
        <p className="mt-4 font-bold text-primary-500">Transform your AI from a generic chatbot into a knowledgeable brand assistant.</p>
      </div>

      <hr className="border-stroke-1 dark:border-white/10" />

      {/* One Source of Truth & Turn Questions Into Sales */}
      <div className="space-y-6">
        <h4 className="text-heading-5 font-black tracking-tight text-secondary dark:text-white">Consistent & Conversion-Driven</h4>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="border border-stroke-1 dark:border-white/10 p-6 rounded-2xl">
            <h5 className="text-heading-6 font-bold text-secondary dark:text-white mb-2">One Source of Truth for Every Conversation</h5>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70 mb-3">Customers expect consistent answers. Whether they're asking about a product, delivery timeline, refund policy, or business hours, they should receive the same accurate information every time.</p>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70 mb-3">A centralized Knowledge Base ensures your AI always responds with information your business trusts.</p>
            <p className="font-bold text-secondary/90 dark:text-white/90">Because consistency builds confidence.</p>
          </div>

          <div className="border border-stroke-1 dark:border-white/10 p-6 rounded-2xl">
            <h5 className="text-heading-6 font-bold text-secondary dark:text-white mb-2">Turn Questions Into Sales Opportunities</h5>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70 mb-3">Questions are often signs of buying intent. A customer asking about shipping. A customer comparing products. A customer checking availability.</p>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70 mb-3">Every answer moves them closer to a decision.</p>
            <p className="font-medium text-secondary/90 dark:text-white/90">Knowledge Base helps your AI provide instant responses that remove uncertainty and help customers buy with confidence.</p>
          </div>
        </div>
      </div>

      <hr className="border-stroke-1 dark:border-white/10" />

      {/* Available 24/7 & Faster Answers */}
      <div className="space-y-6">
        <h4 className="text-heading-5 font-black tracking-tight text-secondary dark:text-white">Instant Support Anytime</h4>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="bg-black/5 dark:bg-white/5 p-6 rounded-2xl">
            <h5 className="text-heading-6 font-bold text-secondary dark:text-white mb-2">Available 24/7, Even When Your Team Isn't</h5>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70 mb-3">Customers don't only shop during business hours. They browse late at night. They ask questions on weekends. They make purchasing decisions at any time.</p>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70 mb-3">With a trained Knowledge Base, your AI can provide accurate answers every hour of every day.</p>
            <ul className="list-disc list-inside space-y-1 ml-2 font-bold text-secondary/90 dark:text-white/90">
              <li>No delays.</li>
              <li>No waiting.</li>
              <li>No missed opportunities.</li>
            </ul>
          </div>

          <div className="bg-black/5 dark:bg-white/5 p-6 rounded-2xl">
            <h5 className="text-heading-6 font-bold text-secondary dark:text-white mb-2">Faster Answers. Better Experiences.</h5>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70 mb-3">Customers don't want to search through pages of information. They want answers.</p>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70 mb-3">Knowledge Base helps your AI instantly find and deliver relevant information, reducing friction and improving customer satisfaction.</p>
            <p className="font-medium text-secondary/90 dark:text-white/90">The result is a smoother experience from the first question to the final purchase.</p>
          </div>
        </div>
      </div>

      <hr className="border-stroke-1 dark:border-white/10" />

      {/* Keep Information Updated & Reduce Repetitive Questions */}
      <div className="space-y-6">
        <h4 className="text-heading-5 font-black tracking-tight text-secondary dark:text-white">Evolve and Optimize</h4>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="border border-stroke-1 dark:border-white/10 p-5 rounded-2xl">
            <h5 className="text-heading-6 font-bold text-secondary dark:text-white mb-2">Keep Information Updated as Your Business Grows</h5>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70 mb-3">Businesses evolve. Products change. Policies change. Offers change.</p>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70 mb-3">Your Knowledge Base grows alongside your business, ensuring customers always receive the latest and most accurate information available.</p>
            <p className="font-bold text-secondary/90 dark:text-white/90">Because outdated answers create poor experiences. Accurate answers build trust.</p>
          </div>

          <div className="border border-stroke-1 dark:border-white/10 p-5 rounded-2xl">
            <h5 className="text-heading-6 font-bold text-secondary dark:text-white mb-2">Reduce Repetitive Customer Questions</h5>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70 mb-3">How much time does your team spend answering the same questions? "Where is my order?" "What are your shipping charges?" "Do you offer returns?"</p>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70 mb-3">Knowledge Base empowers your AI to handle common questions automatically, freeing your team to focus on higher-value conversations.</p>
            <ul className="list-disc list-inside space-y-1 ml-2 font-bold text-secondary/90 dark:text-white/90">
              <li>More efficiency for your team.</li>
              <li>Faster support for your customers.</li>
            </ul>
          </div>
        </div>
      </div>

      <hr className="border-stroke-1 dark:border-white/10" />

      {/* Build Trust Through Accuracy & Knowledge That Powers */}
      <div className="space-y-6">
        <h4 className="text-heading-5 font-black tracking-tight text-secondary dark:text-white">Build Trust & Power Interactions</h4>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="bg-black/5 dark:bg-white/5 p-6 rounded-2xl">
            <h5 className="text-heading-6 font-bold text-secondary dark:text-white mb-2">Build Trust Through Accuracy</h5>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70 mb-3">Customers trust businesses that provide clear and reliable information. When answers are accurate, customers feel confident. When answers are instant, customers stay engaged.</p>
            <p className="font-medium text-secondary/90 dark:text-white/90">Knowledge Base helps ensure every interaction reflects the quality and professionalism of your brand.</p>
          </div>

          <div className="bg-black/5 dark:bg-white/5 p-6 rounded-2xl">
            <h5 className="text-heading-6 font-bold text-secondary dark:text-white mb-2">Knowledge That Powers Every Customer Interaction</h5>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70 mb-3">Your Knowledge Base doesn't just support customer service. It powers:</p>
            <ul className="list-disc list-inside space-y-1 ml-2 leading-relaxed text-secondary/70 dark:text-white/70 mb-3">
              <li>AI Sales Assistants</li>
              <li>Customer Support Automation</li>
              <li>Product Recommendations</li>
              <li>Order Assistance</li>
              <li>Lead Qualification</li>
              <li>Customer Engagement</li>
            </ul>
            <p className="font-bold text-secondary/90 dark:text-white/90">One knowledge source. Countless customer conversations.</p>
          </div>
        </div>
      </div>

      <hr className="border-stroke-1 dark:border-white/10" />

      {/* Built for Modern Commerce */}
      <div className="space-y-6">
        <h4 className="text-heading-5 font-black tracking-tight text-secondary dark:text-white">Built for Modern Commerce</h4>
        <p className="leading-relaxed text-secondary/70 dark:text-white/70 mb-3">Whether you're an ecommerce brand, retailer, marketplace seller, or service-based business, Knowledge Base helps your AI deliver faster, smarter, and more accurate customer experiences.</p>
        <p className="font-bold text-primary-500">Because informed customers make better buying decisions.</p>
      </div>

      <hr className="border-stroke-1 dark:border-white/10" />

      {/* Why Businesses Choose Knowledge Base */}
      <div className="space-y-6">
        <h4 className="text-heading-5 font-black tracking-tight text-secondary dark:text-white">Why Businesses Choose Knowledge Base</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <div><h5 className="font-bold text-secondary dark:text-white mb-1">Faster Customer Responses</h5><p className="leading-relaxed text-secondary/70 dark:text-white/70">Provide instant answers without manual intervention.</p></div>
          <div><h5 className="font-bold text-secondary dark:text-white mb-1">Better Customer Experiences</h5><p className="leading-relaxed text-secondary/70 dark:text-white/70">Reduce waiting times and improve satisfaction.</p></div>
          <div><h5 className="font-bold text-secondary dark:text-white mb-1">Consistent Communication</h5><p className="leading-relaxed text-secondary/70 dark:text-white/70">Deliver accurate information across every conversation.</p></div>
          <div><h5 className="font-bold text-secondary dark:text-white mb-1">More Efficient Teams</h5><p className="leading-relaxed text-secondary/70 dark:text-white/70">Reduce repetitive support workloads.</p></div>
          <div><h5 className="font-bold text-secondary dark:text-white mb-1">Smarter AI Conversations</h5><p className="leading-relaxed text-secondary/70 dark:text-white/70">Give AI the context it needs to help customers effectively.</p></div>
        </div>
      </div>

      <hr className="border-stroke-1 dark:border-white/10" />

      {/* Ready to Grow */}
      <div className="bg-primary-500/10 p-8 rounded-3xl text-center space-y-5 border border-primary-500/20">
        <h4 className="text-heading-4 font-black tracking-tight text-secondary dark:text-white">Turn Business Knowledge Into Customer Confidence.</h4>
        <p className="leading-relaxed text-secondary/70 dark:text-white/70 max-w-xl mx-auto">Empower your AI with the information it needs to answer questions, build trust, and create better customer experiences.</p>
        <p className="font-black text-primary-500 text-lg uppercase tracking-wider">Better Knowledge. Better Answers. Better Business.</p>
        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <LinkButton href="/contact-us" className="inline-flex h-14 items-center justify-center rounded-full bg-primary-500 px-8 text-base font-bold text-white transition-all hover:bg-primary-600 hover:shadow-lg hover:shadow-primary-500/30">
            Create Your Knowledge Base
          </LinkButton>
        </div>
      </div>

    </div>
  );
};
