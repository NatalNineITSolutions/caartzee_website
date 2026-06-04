'use client';

import React from 'react';
import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';
import { 
  MessageSquare, 
  Store, 
  CreditCard, 
  Bot, 
  Inbox, 
  GitBranch,
  ShoppingCart,
  Megaphone,
  FileText,
  BookOpen,
  MoveRight
} from 'lucide-react';

const features = [
  {
    title: "WhatsApp Integration",
    subtitle: "Turn WhatsApp Into Your Best Sales Channel",
    description: "Connect your store to WhatsApp and let AI answer customer questions, recommend products, recover abandoned carts, and drive more sales automatically.",
    icon: MessageSquare,
    delay: 0.1,
    colSpan: "lg:col-span-2",
    bgColor: "bg-blue-50/50 dark:bg-blue-500/5",
    iconColor: "text-blue-600 dark:text-blue-400"
  },
  {
    title: "Shopify Integration",
    subtitle: "Sync Your Shopify Store in Minutes",
    description: "Connect Shopify and manage products, orders, customers, and conversations from one powerful dashboard.",
    icon: Store,
    delay: 0.2,
    colSpan: "lg:col-span-1",
    bgColor: "bg-purple-50/50 dark:bg-purple-500/5",
    iconColor: "text-purple-600 dark:text-purple-400"
  },
  {
    title: "Payment Integration",
    subtitle: "Get Paid Faster, Anywhere",
    description: "Share secure payment links directly in WhatsApp and let customers complete purchases without leaving the chat.",
    icon: CreditCard,
    delay: 0.3,
    colSpan: "lg:col-span-1",
    bgColor: "bg-green-50/50 dark:bg-green-500/5",
    iconColor: "text-green-600 dark:text-green-400"
  },
  {
    title: "AI-Powered Auto Replies",
    subtitle: "AI That Sells While You Sleep",
    description: "Provide instant, accurate responses 24/7, qualify leads, recommend products, and convert conversations into revenue.",
    icon: Bot,
    delay: 0.4,
    colSpan: "lg:col-span-2",
    bgColor: "bg-orange-50/50 dark:bg-orange-500/5",
    iconColor: "text-orange-600 dark:text-orange-400"
  },
  {
    title: "WhatsApp Inbox",
    subtitle: "One Inbox for Every Customer Conversation",
    description: "Manage chats, share product catalogs, send payment links, and close sales from a single WhatsApp workspace.",
    icon: Inbox,
    delay: 0.5,
    colSpan: "lg:col-span-2",
    bgColor: "bg-red-50/50 dark:bg-red-500/5",
    iconColor: "text-red-600 dark:text-red-400"
  },
  {
    title: "Flow Builder",
    subtitle: "Automate Customer Journeys Without Coding",
    description: "Create smart WhatsApp flows for lead capture, order updates, product recommendations, and customer support in minutes.",
    icon: GitBranch,
    delay: 0.6,
    colSpan: "lg:col-span-1",
    bgColor: "bg-cyan-50/50 dark:bg-cyan-500/5",
    iconColor: "text-cyan-600 dark:text-cyan-400"
  },
  {
    title: "Cart Abandonment Recovery",
    description: "Automatically remind customers about items left in their cart. Recover lost sales and boost revenue.",
    icon: ShoppingCart,
    delay: 0.1,
    colSpan: "lg:col-span-1",
    bgColor: "bg-rose-50/50 dark:bg-rose-500/5",
    iconColor: "text-rose-600 dark:text-rose-400"
  },
  {
    title: "Campaign & Broadcasting",
    description: "Reach customers instantly with promotional messages, offers, and announcements through WhatsApp.",
    icon: Megaphone,
    delay: 0.2,
    colSpan: "lg:col-span-2",
    bgColor: "bg-indigo-50/50 dark:bg-indigo-500/5",
    iconColor: "text-indigo-600 dark:text-indigo-400"
  },
  {
    title: "Meta Templates",
    description: "Create and manage approved WhatsApp message templates for notifications, promotions, and customer updates.",
    icon: FileText,
    delay: 0.3,
    colSpan: "lg:col-span-2",
    bgColor: "bg-teal-50/50 dark:bg-teal-500/5",
    iconColor: "text-teal-600 dark:text-teal-400"
  },
  {
    title: "Knowledge Base",
    description: "Store FAQs, product information, and business knowledge to power AI responses and support.",
    icon: BookOpen,
    delay: 0.4,
    colSpan: "lg:col-span-1",
    bgColor: "bg-yellow-50/50 dark:bg-yellow-500/5",
    iconColor: "text-yellow-600 dark:text-yellow-400"
  }
];

const FeaturesGrid = () => {
  return (
    <section className="pt-14 pb-14 md:pt-16 md:pb-16 lg:pt-[88px] lg:pb-[88px] xl:pt-[100px] xl:pb-[100px] overflow-hidden">
      <div className="main-container">
        <div className="mb-14 text-center md:mb-20">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-green-v2 mb-6"> Why Caartzee Snap </span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2 className="mb-4 font-black tracking-tight text-heading-3 md:text-heading-2">
              Everything You Need to Sell on WhatsApp
            </h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="mx-auto mb-8 max-w-[620px] text-lg font-medium opacity-70">
              No extra apps. No complicated setup. Manage customer conversations, orders, support, and sales directly through WhatsApp.
            </p>
          </RevealAnimation>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <RevealAnimation key={index} delay={feature.delay} className={feature.colSpan}>
              <article className={`group flex h-full flex-col h-full w-full rounded-[32px] p-8 md:p-10 border border-stroke-1 dark:border-white/10 transition-all duration-500 hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.05)] hover:border-primary-500/30 ${feature.bgColor}`}>
                <div className={`mb-10 flex size-16 items-center justify-center rounded-2xl bg-white shadow-sm dark:bg-black/20 ${feature.iconColor}`}>
                  <feature.icon size={32} strokeWidth={2.5} />
                </div>
                
                <h4 className="text-heading-5 mb-4 font-black tracking-tight text-secondary dark:text-accent group-hover:text-primary-500 transition-colors">
                  {feature.title}
                </h4>
                
                <p className="text-lg font-medium leading-relaxed opacity-60">
                  {/* @ts-ignore */}
                  {feature.subtitle && <strong className="block mb-2 text-secondary dark:text-accent font-bold opacity-100">{feature.subtitle}</strong>}
                  {feature.description}
                </p>

                <div className="mt-auto pt-10">
                    <Link href="/contact-us" className="flex w-fit items-center gap-2 text-primary-500 font-bold group-hover:gap-4 transition-all duration-300">
                      <span className="text-sm uppercase tracking-widest">Connect Support</span>
                      <MoveRight size={20} />
                    </Link>
                </div>
              </article>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

FeaturesGrid.displayName = 'FeaturesGrid';
export default FeaturesGrid;
