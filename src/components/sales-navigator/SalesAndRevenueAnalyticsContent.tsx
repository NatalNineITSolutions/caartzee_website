import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import LinkButton from '../ui/button/LinkButton';

export const SalesAndRevenueAnalyticsContent = () => {
  return (
    <div className="space-y-8 text-secondary dark:text-white/80 pb-6 text-left">
      {/* Hero Section */}
      <div className="space-y-6 text-center max-w-3xl mx-auto flex flex-col items-center pt-4 pb-8">
        <h1 className="text-heading-3 md:text-heading-2 font-black tracking-tight text-secondary dark:text-white">Turn Data Into Growth.</h1>
        <p className="text-lg md:text-xl leading-relaxed text-secondary/70 dark:text-white/70">
          Get a complete view of your business performance with real-time revenue, sales, and product insights.
        </p>
        <p className="text-lg md:text-xl leading-relaxed text-secondary/70 dark:text-white/70">
          Track earnings across channels, monitor top-performing products, and make smarter decisions with powerful analytics—all in INR (₹).
        </p>
        <ul className="flex flex-wrap justify-center gap-4 mt-6">
          {["Revenue Analytics", "Multi-Channel Performance Tracking", "Product Performance Insights", "Real-Time Business Dashboards", "Actionable Growth Intelligence"].map((item, i) => (
            <li key={i} className="flex items-center gap-2 font-medium bg-black/5 dark:bg-white/5 px-4 py-2 rounded-full text-sm">
              <CheckCircle2 className="text-primary-500 w-4 h-4 shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <div className="pt-8">
          <LinkButton href="/contact-us" className="inline-flex h-14 items-center justify-center rounded-full bg-primary-500 px-10 text-base font-bold text-white transition-all hover:bg-primary-600 hover:shadow-lg hover:shadow-primary-500/30">
            Explore Analytics
          </LinkButton>
        </div>
      </div>

      <hr className="border-stroke-1 dark:border-white/10" />

      {/* See Your Entire Business */}
      <div className="space-y-4">
        <h4 className="text-heading-5 font-black tracking-tight text-secondary dark:text-white">See Your Entire Business in One Place</h4>
        <div className="space-y-4 text-lg leading-relaxed text-secondary/70 dark:text-white/70">
          <p>Running a growing business requires more than just tracking sales.</p>
          <p>You need visibility into what's working, what's driving revenue, and where opportunities exist.</p>
          <p>CaartZee Analytics brings together your sales, products, customers, and marketplace performance into one powerful dashboard, helping you make confident business decisions every day.</p>
        </div>
      </div>

      <hr className="border-stroke-1 dark:border-white/10" />

      {/* Know What's Driving Revenue */}
      <div className="space-y-6">
        <h4 className="text-heading-5 font-black tracking-tight text-secondary dark:text-white">Know What's Driving Revenue</h4>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="border border-stroke-1 dark:border-white/10 p-6 rounded-2xl">
            <h5 className="text-heading-6 font-bold text-secondary dark:text-white mb-2">Understand Your Business Performance at a Glance</h5>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70 mb-3">Track your revenue across every sales channel from a single dashboard. Monitor:</p>
            <ul className="list-disc list-inside space-y-1 ml-2 leading-relaxed text-secondary/70 dark:text-white/70">
              <li>Total sales</li>
              <li>Revenue growth</li>
              <li>Average order value</li>
              <li>Conversion performance</li>
              <li>Marketplace earnings</li>
              <li>Store performance</li>
            </ul>
            <p className="mt-4 font-medium text-secondary/90 dark:text-white/90">Get the clarity you need to scale faster.</p>
          </div>

          <div className="border border-stroke-1 dark:border-white/10 p-6 rounded-2xl">
            <h5 className="text-heading-6 font-bold text-secondary dark:text-white mb-2">Real-Time Revenue Insights</h5>
            <p className="font-bold text-primary-500 mb-2">Always Stay Connected to Your Numbers</p>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70 mb-3">Business moves fast. Your analytics should too.</p>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70">Monitor revenue as it happens with real-time dashboards that help you react quickly to opportunities and trends.</p>
            <ul className="list-disc list-inside space-y-1 mt-4 ml-2 leading-relaxed text-secondary/70 dark:text-white/70">
              <li>No waiting.</li>
              <li>No complicated reports.</li>
              <li>Just the insights that matter.</li>
            </ul>
          </div>
        </div>
      </div>

      <hr className="border-stroke-1 dark:border-white/10" />

      {/* Track Every Sales Channel */}
      <div className="space-y-6">
        <h4 className="text-heading-5 font-black tracking-tight text-secondary dark:text-white">Track Every Sales Channel</h4>
        <h5 className="text-heading-6 font-bold text-secondary dark:text-white mb-2">One View Across Every Platform</h5>
        <p className="leading-relaxed text-secondary/70 dark:text-white/70">Whether you sell through Amazon, Flipkart, Shopify, or your CaartZee store, all your performance data is available in one place. Compare channel performance and identify where your highest growth opportunities exist.</p>
        
        <p className="mt-4 leading-relaxed text-secondary/70 dark:text-white/70">Understand which platforms drive the most:</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mt-4">
          <div className="bg-black/5 dark:bg-white/5 p-4 rounded-xl text-center font-medium">Revenue</div>
          <div className="bg-black/5 dark:bg-white/5 p-4 rounded-xl text-center font-medium">Orders</div>
          <div className="bg-black/5 dark:bg-white/5 p-4 rounded-xl text-center font-medium">Customers</div>
          <div className="bg-black/5 dark:bg-white/5 p-4 rounded-xl text-center font-medium">Repeat purchases</div>
          <div className="bg-black/5 dark:bg-white/5 p-4 rounded-xl text-center font-medium">Profitability</div>
        </div>
      </div>

      <hr className="border-stroke-1 dark:border-white/10" />

      {/* Discover Your Best-Selling Products */}
      <div className="space-y-6">
        <h4 className="text-heading-5 font-black tracking-tight text-secondary dark:text-white">Discover Your Best-Selling Products</h4>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="bg-black/5 dark:bg-white/5 p-6 rounded-2xl">
            <h5 className="text-heading-6 font-bold text-secondary dark:text-white mb-2">Know What Customers Love</h5>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70 mb-3">Identify top-performing products instantly. Track:</p>
            <ul className="list-disc list-inside space-y-1 ml-2 leading-relaxed text-secondary/70 dark:text-white/70">
              <li>Best sellers</li>
              <li>Fast-growing products</li>
              <li>Low-performing inventory</li>
              <li>Product demand trends</li>
              <li>Revenue contribution by product</li>
            </ul>
            <p className="mt-4 font-medium text-secondary/90 dark:text-white/90">Make smarter inventory and marketing decisions with confidence.</p>
          </div>

          <div className="bg-black/5 dark:bg-white/5 p-6 rounded-2xl">
            <h5 className="text-heading-6 font-bold text-secondary dark:text-white mb-2">Turn Insights Into Action</h5>
            <p className="font-bold text-primary-500 mb-2">Data That Helps You Grow</p>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70 mb-3">Analytics shouldn't just tell you what happened. They should help you decide what to do next. CaartZee highlights growth opportunities by helping you understand:</p>
            <ul className="list-disc list-inside space-y-1 ml-2 leading-relaxed text-secondary/70 dark:text-white/70">
              <li>Which products deserve more visibility</li>
              <li>Which channels generate the highest returns</li>
              <li>Which customer segments spend more</li>
              <li>Which trends are shaping future demand</li>
            </ul>
            <p className="mt-4 font-medium text-secondary/90 dark:text-white/90">Turn information into action.</p>
          </div>
        </div>
      </div>

      <hr className="border-stroke-1 dark:border-white/10" />

      {/* Customer Analytics & Marketplace Analytics */}
      <div className="space-y-6">
        <h4 className="text-heading-5 font-black tracking-tight text-secondary dark:text-white">Deeper Audience & Market Intelligence</h4>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="border border-stroke-1 dark:border-white/10 p-5 rounded-2xl">
            <h5 className="text-heading-6 font-bold text-secondary dark:text-white mb-2">Customer Analytics</h5>
            <p className="font-bold text-primary-500 mb-2">Understand Your Customers Better</p>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70 mb-3">Get valuable insights into customer behavior and purchasing patterns. Track:</p>
            <ul className="list-disc list-inside space-y-1 ml-2 leading-relaxed text-secondary/70 dark:text-white/70">
              <li>New customers</li>
              <li>Returning customers</li>
              <li>Customer lifetime value</li>
              <li>Purchase frequency</li>
              <li>Average spend</li>
            </ul>
            <p className="mt-3 font-medium text-secondary/90 dark:text-white/90">Build stronger customer relationships and improve retention.</p>
          </div>

          <div className="border border-stroke-1 dark:border-white/10 p-5 rounded-2xl">
            <h5 className="text-heading-6 font-bold text-secondary dark:text-white mb-2">Marketplace Performance Analytics</h5>
            <p className="font-bold text-primary-500 mb-2">Compare Every Channel</p>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70 mb-3">Measure how each marketplace contributes to your business growth. Analyze:</p>
            <ul className="list-disc list-inside space-y-1 ml-2 leading-relaxed text-secondary/70 dark:text-white/70">
              <li>Amazon performance</li>
              <li>Flipkart performance</li>
              <li>Website sales</li>
              <li>Marketplace revenue share</li>
              <li>Channel growth trends</li>
            </ul>
            <p className="mt-3 font-medium text-secondary/90 dark:text-white/90">Invest more confidently in the channels that drive results.</p>
          </div>
        </div>
      </div>

      <hr className="border-stroke-1 dark:border-white/10" />

      {/* Intelligence & Forecast */}
      <div className="space-y-6">
        <h4 className="text-heading-5 font-black tracking-tight text-secondary dark:text-white">Business Intelligence Made Simple</h4>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <h5 className="text-heading-6 font-bold text-secondary dark:text-white mb-2">Powerful Insights Without Complexity</h5>
            <ul className="list-disc list-inside space-y-2 mt-2 ml-2 leading-relaxed text-secondary/70 dark:text-white/70">
              <li>No spreadsheets.</li>
              <li>No manual calculations.</li>
              <li>No complicated reporting tools.</li>
            </ul>
            <p className="font-medium text-secondary/90 dark:text-white/90 mt-4">CaartZee automatically organizes your business data into easy-to-understand dashboards so you can focus on growth instead of analysis.</p>
          </div>

          <div>
            <h5 className="text-heading-6 font-bold text-secondary dark:text-white mb-2">Forecast Growth with Confidence</h5>
            <p className="font-bold text-primary-500 mb-2">Plan Smarter</p>
            <p className="leading-relaxed text-secondary/70 dark:text-white/70 mb-2">Use historical sales trends and performance insights to make informed business decisions. Understand:</p>
            <ul className="list-disc list-inside space-y-1 ml-2 leading-relaxed text-secondary/70 dark:text-white/70">
              <li>Seasonal demand patterns</li>
              <li>Revenue trends</li>
              <li>Product performance cycles</li>
              <li>Inventory requirements</li>
              <li>Growth opportunities</li>
            </ul>
            <p className="font-medium text-secondary/90 dark:text-white/90 mt-3">Make decisions backed by data, not guesswork.</p>
          </div>
        </div>
      </div>

      <hr className="border-stroke-1 dark:border-white/10" />

      {/* Built for Growing Businesses */}
      <div className="space-y-6">
        <h4 className="text-heading-5 font-black tracking-tight text-secondary dark:text-white">Built for Growing Businesses</h4>
        <p className="leading-relaxed text-secondary/70 dark:text-white/70">Whether you're launching your first store or managing thousands of orders every month, CaartZee Analytics grows with your business.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="bg-primary-500/5 p-4 rounded-xl border border-primary-500/10 text-secondary/70 dark:text-white/70">
            <strong className="text-primary-500 block mb-1">Save Time</strong> Access all critical metrics from one dashboard.
          </div>
          <div className="bg-primary-500/5 p-4 rounded-xl border border-primary-500/10 text-secondary/70 dark:text-white/70">
            <strong className="text-primary-500 block mb-1">Make Better Decisions</strong> Use real-time insights to optimize performance.
          </div>
          <div className="bg-primary-500/5 p-4 rounded-xl border border-primary-500/10 text-secondary/70 dark:text-white/70">
            <strong className="text-primary-500 block mb-1">Increase Profitability</strong> Identify opportunities to improve revenue and efficiency.
          </div>
          <div className="bg-primary-500/5 p-4 rounded-xl border border-primary-500/10 text-secondary/70 dark:text-white/70">
            <strong className="text-primary-500 block mb-1">Scale Faster</strong> Grow your business with confidence and clarity.
          </div>
        </div>
      </div>

      <hr className="border-stroke-1 dark:border-white/10" />

      {/* Why Businesses Choose */}
      <div className="space-y-6">
        <h4 className="text-heading-5 font-black tracking-tight text-secondary dark:text-white">Why Businesses Choose CaartZee Analytics</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <div><h5 className="font-bold text-secondary dark:text-white mb-1">Complete Visibility</h5><p className="leading-relaxed text-secondary/70 dark:text-white/70">Understand every aspect of your business performance.</p></div>
          <div><h5 className="font-bold text-secondary dark:text-white mb-1">Real-Time Insights</h5><p className="leading-relaxed text-secondary/70 dark:text-white/70">Track sales and revenue as they happen.</p></div>
          <div><h5 className="font-bold text-secondary dark:text-white mb-1">Better Decisions</h5><p className="leading-relaxed text-secondary/70 dark:text-white/70">Use data to guide growth strategies.</p></div>
          <div><h5 className="font-bold text-secondary dark:text-white mb-1">Increased Efficiency</h5><p className="leading-relaxed text-secondary/70 dark:text-white/70">Spend less time reporting and more time growing.</p></div>
          <div><h5 className="font-bold text-secondary dark:text-white mb-1">Smarter Growth</h5><p className="leading-relaxed text-secondary/70 dark:text-white/70">Identify opportunities before your competitors do.</p></div>
        </div>
      </div>

      <hr className="border-stroke-1 dark:border-white/10" />

      {/* FAQs */}
      <div className="space-y-6">
        <h4 className="text-heading-5 font-black tracking-tight text-secondary dark:text-white">Frequently Asked Questions</h4>
        <div className="space-y-5">
          <div><h5 className="font-bold text-secondary dark:text-white mb-1">Can I track revenue across multiple platforms?</h5><p className="leading-relaxed text-secondary/70 dark:text-white/70">Yes. CaartZee combines revenue data from your connected marketplaces and stores into one dashboard.</p></div>
          <div><h5 className="font-bold text-secondary dark:text-white mb-1">Does the dashboard update in real time?</h5><p className="leading-relaxed text-secondary/70 dark:text-white/70">Yes. Sales, orders, and revenue metrics are updated continuously.</p></div>
          <div><h5 className="font-bold text-secondary dark:text-white mb-1">Can I see product-level performance?</h5><p className="leading-relaxed text-secondary/70 dark:text-white/70">Absolutely. Track sales, revenue, and growth trends for every product.</p></div>
          <div><h5 className="font-bold text-secondary dark:text-white mb-1">Is the reporting available in INR (₹)?</h5><p className="leading-relaxed text-secondary/70 dark:text-white/70">Yes. All analytics and revenue reporting are optimized for Indian businesses and displayed in INR.</p></div>
          <div><h5 className="font-bold text-secondary dark:text-white mb-1">Do I need analytics experience to use it?</h5><p className="leading-relaxed text-secondary/70 dark:text-white/70">Not at all. CaartZee is designed to make business intelligence simple and accessible for everyone.</p></div>
        </div>
      </div>

      <hr className="border-stroke-1 dark:border-white/10" />

      {/* Ready to Grow */}
      <div className="bg-primary-500/10 p-8 rounded-3xl text-center space-y-5 border border-primary-500/20">
        <h4 className="text-heading-4 font-black tracking-tight text-secondary dark:text-white">Make Every Decision Count</h4>
        <p className="leading-relaxed text-secondary/70 dark:text-white/70 max-w-xl mx-auto">Turn your business data into actionable insights, uncover growth opportunities, and scale with confidence.</p>
        <p className="font-black text-primary-500 text-lg uppercase tracking-wider">See More. Understand More. Grow Faster.</p>
        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <LinkButton href="/contact-us" className="inline-flex h-14 items-center justify-center rounded-full bg-primary-500 px-8 text-base font-bold text-white transition-all hover:bg-primary-600 hover:shadow-lg hover:shadow-primary-500/30">
            Get Started Today
          </LinkButton>
        </div>
      </div>

    </div>
  );
};
