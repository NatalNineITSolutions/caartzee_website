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
    description: "Centralized customer communication. Faster response times and better customer engagement.",
    icon: MessageSquare,
    delay: 0.1,
    colSpan: "lg:col-span-2",
    bgColor: "bg-blue-50/50 dark:bg-blue-500/5",
    iconColor: "text-blue-600 dark:text-blue-400"
  },
  {
    title: "Shopify Integration",
    description: "Real-time product synchronization and easy order management for a seamless customer experience.",
    icon: Store,
    delay: 0.2,
    colSpan: "lg:col-span-1",
    bgColor: "bg-purple-50/50 dark:bg-purple-500/5",
    iconColor: "text-purple-600 dark:text-purple-400"
  },
  {
    title: "Payment Integration",
    description: "Quick payment collection and secure transactions directly through WhatsApp for improved conversion rates.",
    icon: CreditCard,
    delay: 0.3,
    colSpan: "lg:col-span-1",
    bgColor: "bg-green-50/50 dark:bg-green-500/5",
    iconColor: "text-green-600 dark:text-green-400"
  },
  {
    title: "AI-Powered Auto Replies",
    description: "24/7 customer support using Meta AI. Instant responses to reduce workload for support teams.",
    icon: Bot,
    delay: 0.4,
    colSpan: "lg:col-span-2",
    bgColor: "bg-orange-50/50 dark:bg-orange-500/5",
    iconColor: "text-orange-600 dark:text-orange-400"
  },
  {
    title: "WhatsApp Inbox",
    description: "Manage all customer chats in one organized inbox. Track conversations and assign to team members easily.",
    icon: Inbox,
    delay: 0.5,
    colSpan: "lg:col-span-2",
    bgColor: "bg-red-50/50 dark:bg-red-500/5",
    iconColor: "text-red-600 dark:text-red-400"
  },
  {
    title: "Flow Builder",
    description: "Create automated customer journeys without coding for lead generation, order confirmation, and more.",
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
            <span className="badge badge-green-v2 mb-6"> Superpowers </span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2 className="mb-4 font-black tracking-tight text-heading-3 md:text-heading-2">
              Everything a seller needs – <span className="text-primary-500 leading-tight">inside WhatsApp</span>
            </h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="mx-auto mb-8 max-w-[620px] text-lg font-medium opacity-70">
              No more switching apps. Manage your entire business lifecycle, from discovery to delivery, right from the palm of your hand.
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
