import React from 'react';
import LinkButton from '../ui/button/LinkButton';

export const AutomationEngineContent = () => {
  return (
    <div className="space-y-8 text-secondary dark:text-white/80 pb-6 text-left">
      {/* Hero Section */}
      <div className="space-y-6 text-center max-w-3xl mx-auto flex flex-col items-center pt-4 pb-8">
        <h1 className="text-heading-3 md:text-heading-2 font-black tracking-tight text-secondary dark:text-white">Work Less. Sell More.</h1>
        <p className="text-lg md:text-xl leading-relaxed text-secondary/70 dark:text-white/70">
          Automate repetitive tasks, customer updates, inventory sync, and order workflows.
        </p>
        <p className="text-lg md:text-xl leading-relaxed text-secondary/70 dark:text-white/70">
          Free your team from manual work and let automation handle the busy work behind the scenes, so you can focus on growing your business.
        </p>
        <p className="text-lg md:text-xl font-bold text-primary-500 mt-2">
          Run your business. Not your tasks.
        </p>
        <div className="flex flex-wrap justify-center gap-4 pt-8">
          <LinkButton href="/contact-us" className="inline-flex h-14 items-center justify-center rounded-full bg-primary-500 px-8 text-base font-bold text-white transition-all hover:bg-primary-600 hover:shadow-lg hover:shadow-primary-500/30">
            Start Automating
          </LinkButton>
          <LinkButton href="/contact-us" className="inline-flex h-14 items-center justify-center rounded-full border-2 border-primary-500 text-primary-500 px-8 text-base font-bold transition-all hover:bg-primary-500 hover:text-white hover:shadow-lg hover:shadow-primary-500/30">
            Book a Demo
          </LinkButton>
        </div>
      </div>

      <hr className="border-stroke-1 dark:border-white/10" />

      {/* Your Business Never Stops */}
      <div className="space-y-4">
        <h4 className="text-heading-5 font-black tracking-tight text-secondary dark:text-white">Your Business Never Stops. Neither Should Your Operations.</h4>
        <div className="space-y-4 text-lg leading-relaxed text-secondary/70 dark:text-white/70">
          <p>Every growing business faces the same challenge.</p>
          <p>More orders. More customers. More inventory. More tasks.</p>
          <p>What starts as a manageable workflow quickly becomes hours of manual work every day.</p>
          <p>CaartZee Automation Engine helps you scale without adding complexity, automating the repetitive processes that slow your team down.</p>
        </div>
      </div>

      <hr className="border-stroke-1 dark:border-white/10" />

      {/* Let Automation Handle the Routine */}
      <div className="space-y-6">
        <h4 className="text-heading-5 font-black tracking-tight text-secondary dark:text-white">Let Automation Handle the Routine</h4>
        <p className="leading-relaxed text-secondary/70 dark:text-white/70">The most successful businesses don't spend time repeating the same tasks. They automate them.</p>
        <p className="leading-relaxed font-bold text-primary-500">Automatically:</p>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4">
          {["Update inventory", "Process orders", "Send customer notifications", "Trigger follow-ups", "Sync marketplace data", "Manage operational workflows"].map((item, i) => (
            <div key={i} className="bg-black/5 dark:bg-white/5 p-4 rounded-xl text-center font-medium">
              {item}
            </div>
          ))}
        </div>
        <p className="mt-4 leading-relaxed font-bold text-secondary dark:text-white">So your team can focus on higher-value work.</p>
      </div>

      <hr className="border-stroke-1 dark:border-white/10" />

      {/* Turn Hours Into Minutes & Keep Customers Informed */}
      <div className="space-y-6">
        <h4 className="text-heading-5 font-black tracking-tight text-secondary dark:text-white">Save Time & Improve Experience</h4>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="border border-stroke-1 dark:border-white/10 p-6 rounded-2xl">
            <h5 className="text-heading-6 font-bold text-secondary dark:text-white mb-2">Turn Hours Into Minutes</h5>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70 mb-3">Every manual task costs time. Updating stock. Tracking orders. Sending updates. Managing workflows.</p>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70 mb-3">CaartZee eliminates repetitive work by creating automated processes that run continuously in the background.</p>
            <p className="font-bold text-secondary/90 dark:text-white/90">The result?</p>
            <ul className="list-disc list-inside space-y-1 ml-2 leading-relaxed text-secondary/70 dark:text-white/70">
              <li>Less effort.</li>
              <li>Fewer errors.</li>
              <li>More productivity.</li>
            </ul>
          </div>

          <div className="border border-stroke-1 dark:border-white/10 p-6 rounded-2xl">
            <h5 className="text-heading-6 font-bold text-secondary dark:text-white mb-2">Keep Customers Informed Automatically</h5>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70 mb-3">Customers want updates. They want to know when an order is confirmed, shipped, delivered, or delayed.</p>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70 mb-3">Automation ensures every customer stays informed without requiring manual communication from your team.</p>
            <p className="font-medium text-secondary/90 dark:text-white/90">Because great experiences happen when information flows effortlessly.</p>
          </div>
        </div>
      </div>

      <hr className="border-stroke-1 dark:border-white/10" />

      {/* Automate Across Every Channel & Workflows That Scale */}
      <div className="space-y-6">
        <h4 className="text-heading-5 font-black tracking-tight text-secondary dark:text-white">Scale Effortlessly</h4>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="bg-black/5 dark:bg-white/5 p-6 rounded-2xl">
            <h5 className="text-heading-6 font-bold text-secondary dark:text-white mb-2">Automate Across Every Channel</h5>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70 mb-3">Modern commerce happens everywhere. Amazon. Flipkart. Shopify. WhatsApp. Your own store.</p>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70 mb-3">CaartZee connects your operations and automates workflows across every sales channel, keeping your business synchronized and efficient.</p>
            <ul className="list-disc list-inside space-y-1 ml-2 font-bold text-secondary/90 dark:text-white/90">
              <li>No gaps.</li>
              <li>No duplicate work.</li>
              <li>No unnecessary complexity.</li>
            </ul>
          </div>

          <div className="bg-black/5 dark:bg-white/5 p-6 rounded-2xl">
            <h5 className="text-heading-6 font-bold text-secondary dark:text-white mb-2">Workflows That Scale With Your Business</h5>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70 mb-3">What works for 10 orders a day often breaks at 1,000.</p>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70 mb-3">Automation helps your operations grow alongside your business. Whether you're launching new products, expanding to new marketplaces, or handling increasing order volumes, your workflows remain efficient and reliable.</p>
            <p className="font-medium text-secondary/90 dark:text-white/90">Growth should create opportunities—not operational headaches.</p>
          </div>
        </div>
      </div>

      <hr className="border-stroke-1 dark:border-white/10" />

      {/* Fewer Errors. Better Results. */}
      <div className="space-y-6">
        <h4 className="text-heading-5 font-black tracking-tight text-secondary dark:text-white">Fewer Errors. Better Results.</h4>
        <p className="font-bold text-primary-500 mb-2">Manual processes create mistakes. Automation creates consistency.</p>
        <p className="leading-relaxed text-secondary/70 dark:text-white/70 mb-3">By reducing human intervention in routine tasks, businesses can improve operational accuracy, reduce delays, and deliver a more reliable customer experience.</p>
        <p className="font-medium text-secondary/90 dark:text-white/90">The less time spent fixing problems, the more time spent growing revenue.</p>
      </div>

      <hr className="border-stroke-1 dark:border-white/10" />

      {/* Build a Business That Runs Smarter */}
      <div className="space-y-6">
        <h4 className="text-heading-5 font-black tracking-tight text-secondary dark:text-white">Build a Business That Runs Smarter</h4>
        <p className="leading-relaxed text-secondary/70 dark:text-white/70 mb-3">Automation isn't about replacing people. It's about empowering teams.</p>
        <p className="leading-relaxed text-secondary/70 dark:text-white/70 mb-3">Give your team more time to focus on customers, marketing, strategy, and growth while automation handles the repetitive operational work behind the scenes.</p>
        <ul className="list-disc list-inside space-y-2 ml-2 font-bold text-secondary/90 dark:text-white/90">
          <li>Because people create growth.</li>
          <li>Automation creates efficiency.</li>
          <li>Together, they create scale.</li>
        </ul>
      </div>

      <hr className="border-stroke-1 dark:border-white/10" />

      {/* Built for Modern Commerce */}
      <div className="space-y-6">
        <h4 className="text-heading-5 font-black tracking-tight text-secondary dark:text-white">Built for Modern Commerce</h4>
        <p className="leading-relaxed text-secondary/70 dark:text-white/70">Whether you're a fast-growing ecommerce brand, marketplace seller, retailer, or D2C business, CaartZee Automation Engine helps simplify operations and improve efficiency at every stage of growth.</p>
        <p className="font-bold text-secondary/90 dark:text-white/90">Operate smarter today. Scale faster tomorrow.</p>
      </div>

      <hr className="border-stroke-1 dark:border-white/10" />

      {/* Why Businesses Automate with CaartZee */}
      <div className="space-y-6">
        <h4 className="text-heading-5 font-black tracking-tight text-secondary dark:text-white">Why Businesses Automate with CaartZee</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <div><h5 className="font-bold text-secondary dark:text-white mb-1">Save Time</h5><p className="leading-relaxed text-secondary/70 dark:text-white/70">Reduce hours spent on repetitive tasks.</p></div>
          <div><h5 className="font-bold text-secondary dark:text-white mb-1">Improve Accuracy</h5><p className="leading-relaxed text-secondary/70 dark:text-white/70">Minimize operational errors and inconsistencies.</p></div>
          <div><h5 className="font-bold text-secondary dark:text-white mb-1">Increase Productivity</h5><p className="leading-relaxed text-secondary/70 dark:text-white/70">Enable teams to focus on high-impact work.</p></div>
          <div><h5 className="font-bold text-secondary dark:text-white mb-1">Deliver Better Experiences</h5><p className="leading-relaxed text-secondary/70 dark:text-white/70">Keep customers informed automatically.</p></div>
          <div><h5 className="font-bold text-secondary dark:text-white mb-1">Scale Confidently</h5><p className="leading-relaxed text-secondary/70 dark:text-white/70">Grow your business without growing complexity.</p></div>
        </div>
      </div>

      <hr className="border-stroke-1 dark:border-white/10" />

      {/* Ready to Grow */}
      <div className="bg-primary-500/10 p-8 rounded-3xl text-center space-y-5 border border-primary-500/20">
        <h4 className="text-heading-4 font-black tracking-tight text-secondary dark:text-white">The Best Workflows Are the Ones You Never Have to Think About.</h4>
        <p className="leading-relaxed text-secondary/70 dark:text-white/70 max-w-xl mx-auto">Automate operations, simplify processes, and create a business that runs smoothly at every stage of growth.</p>
        <p className="font-black text-primary-500 text-lg uppercase tracking-wider">Less Manual Work. More Business Growth.</p>
        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <LinkButton href="/contact-us" className="inline-flex h-14 items-center justify-center rounded-full bg-primary-500 px-8 text-base font-bold text-white transition-all hover:bg-primary-600 hover:shadow-lg hover:shadow-primary-500/30">
            Get Started
          </LinkButton>
          <LinkButton href="/contact-us" className="inline-flex h-14 items-center justify-center rounded-full border-2 border-primary-500 text-primary-500 px-8 text-base font-bold transition-all hover:bg-primary-500 hover:text-white hover:shadow-lg hover:shadow-primary-500/30">
            Schedule a Demo
          </LinkButton>
        </div>
      </div>

    </div>
  );
};
