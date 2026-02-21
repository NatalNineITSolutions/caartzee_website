"use client";

import InventoryHeader from "./InventoryHeader";
import InventoryStats from "./InventoryStats";
import InventoryDashboardMock from "./InventoryDashboardMock";
import InventoryCTA from "./InventoryCTA";
import InventoryCard from "./InventoryCard";
import InventoryBenefits from "./InventoryBenefits";
import InventoryHowItWorks from "./InventoryHowItWorks";
import InventoryFAQ from "./InventoryFAQ";
import { Package, AlertTriangle, Brain, BarChart3 } from "lucide-react";
import RevealAnimation from "@/components/animation/RevealAnimation";

export default function InventoryAIPage() {
  return (
    <main className="relative bg-white dark:bg-[#0B0F19] min-h-screen text-slate-900 dark:text-white overflow-hidden pt-20 transition-colors duration-300">

      {/* Background Mesh/Glows - Theme Aware */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-200/30 dark:bg-purple-900/20 blur-[120px] rounded-full" />
        <div className="absolute top-[20%] right-[-5%] w-[30%] h-[30%] bg-indigo-200/30 dark:bg-indigo-900/20 blur-[100px] rounded-full" />
        <div className="absolute bottom-[10%] left-[5%] w-[35%] h-[35%] bg-blue-100/20 dark:bg-blue-900/10 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10">
        {/* Header Section */}
        <section className="px-6 lg:px-20 py-20">
          <RevealAnimation>
            <InventoryHeader />
          </RevealAnimation>
        </section>

        {/* Stats Section */}
        <section className="px-6 lg:px-20 py-10">
          <RevealAnimation delay={0.2}>
            <InventoryStats />
          </RevealAnimation>
        </section>

        {/* Main Content Grid: Dashboard + Key Specs */}
        <section className="px-6 lg:px-20 py-32 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-24 xl:gap-32 items-center">

            {/* Left: Dashboard Mockup */}
            <RevealAnimation direction="left">
              <div className="relative group">
                <div className="absolute -inset-10 bg-purple-500/5 blur-[120px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative">
                  <InventoryDashboardMock />

                  {/* Decorative floating element */}
                  <div className="absolute -bottom-8 -right-8 p-4 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 shadow-2xl backdrop-blur-2xl hidden xl:block animate-bounce-slow">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                      <span className="text-xs font-bold text-slate-700 dark:text-gray-300">Live AI Syncing...</span>
                    </div>
                  </div>
                </div>
              </div>
            </RevealAnimation>

            {/* Right: Detailed Feature Grid */}
            <div className="relative">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 dark:bg-purple-500/10 border border-purple-100 dark:border-purple-500/20 mb-6">
                <div className="w-2 h-2 rounded-full bg-purple-600" />
                <span className="text-xs font-bold text-purple-700 dark:text-purple-400 uppercase tracking-widest">Capabilities</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold mb-10 tracking-tight text-slate-900 dark:text-white leading-[1.1]">
                Enterprise-Grade <br />
                <span className="text-purple-600 dark:text-purple-400">Inventory Intelligence.</span>
              </h2>
              <div className="grid sm:grid-cols-2 gap-8">
                <InventoryCard
                  icon={Package}
                  title="Real-Time Sync"
                  description="Automatically sync inventory with your WhatsApp store and prevent overselling."
                />
                <InventoryCard
                  icon={AlertTriangle}
                  title="Low Stock Alerts"
                  description="Get instant alerts when stock runs low so you can restock before losing sales."
                />
                <InventoryCard
                  icon={Brain}
                  title="AI Suggestions"
                  description="Smart recommendations based on demand and sales trends."
                />
                <InventoryCard
                  icon={BarChart3}
                  title="Smart Analytics"
                  description="Track stock movement and top products in one dashboard."
                />
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="px-6 lg:px-20 py-24 bg-slate-50 dark:bg-white/[0.02] border-y border-slate-200 dark:border-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-extrabold mb-4 text-slate-900 dark:text-white">Why Businesses Choose Snap?</h2>
              <p className="text-slate-600 dark:text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">Scalable, reliable, and powered by the most advanced e-commerce AI on the planet.</p>
            </div>
            <InventoryBenefits />
          </div>
        </section>

        {/* How It Works Section */}
        <section className="px-6 lg:px-20 py-24 max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-extrabold mb-4 text-slate-900 dark:text-white">Autonomous Workflow</h2>
            <p className="text-slate-600 dark:text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">Transform your supply chain from reactive to proactive in three simple steps.</p>
          </div>
          <InventoryHowItWorks />
        </section>

        {/* FAQ Section */}
        <section className="px-6 lg:px-20 py-24 bg-slate-50 dark:bg-white/[0.02] border-t border-slate-200 dark:border-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-extrabold mb-4 text-slate-900 dark:text-white">Frequently Asked Questions</h2>
              <p className="text-slate-600 dark:text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">Everything you need to know about our next-gen inventory system.</p>
            </div>
            <InventoryFAQ />
          </div>
        </section>

        {/* Call To Action */}
        <section className="px-6 lg:px-20 py-24">
          <RevealAnimation direction="up">
            <InventoryCTA />
          </RevealAnimation>
        </section>
      </div>

    </main>
  );
}
