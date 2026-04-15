'use client';

import React from 'react';
import RevealAnimation from '../animation/RevealAnimation';
import { 
  Zap, 
  Users, 
  ClipboardCheck, 
  MessageSquare, 
  Mic, 
  BarChart3,
  MoveRight
} from 'lucide-react';

const features = [
  {
    title: "Automated sales solutions",
    description: "Scale your sales with intelligent automation that works while you sleep, handling everything from lead qualification to final closing.",
    icon: Zap,
    delay: 0.1,
    colSpan: "lg:col-span-2",
    bgColor: "bg-blue-50/50 dark:bg-blue-500/5",
    iconColor: "text-blue-600 dark:text-blue-400"
  },
  {
    title: "In-WhatsApp onboarding",
    description: "Onboard customers directly in the chat interface.",
    icon: Users,
    delay: 0.2,
    colSpan: "lg:col-span-1",
    bgColor: "bg-purple-50/50 dark:bg-purple-500/5",
    iconColor: "text-purple-600 dark:text-purple-400"
  },
  {
    title: "Real-time orders",
    description: "Monitor every incoming order in real-time.",
    icon: ClipboardCheck,
    delay: 0.3,
    colSpan: "lg:col-span-1",
    bgColor: "bg-green-50/50 dark:bg-green-500/5",
    iconColor: "text-green-600 dark:text-green-400"
  },
  {
    title: "AI driven customer support",
    description: "Leverage state-of-the-art AI to provide instant, helpful responses to your customers at any time of day or night.",
    icon: MessageSquare,
    delay: 0.4,
    colSpan: "lg:col-span-2",
    bgColor: "bg-orange-50/50 dark:bg-orange-500/5",
    iconColor: "text-orange-600 dark:text-orange-400"
  },
  {
    title: "Multimedia Support",
    description: "Handle voice notes and product photos.",
    icon: Mic,
    delay: 0.5,
    colSpan: "lg:col-span-1",
    bgColor: "bg-red-50/50 dark:bg-red-500/5",
    iconColor: "text-red-600 dark:text-red-400"
  },
  {
    title: "Analytics & Growth Dashboard",
    description: "Access powerful insights and data visualizations to understand your growth trends and optimize your WhatsApp selling strategy.",
    icon: BarChart3,
    delay: 0.6,
    colSpan: "lg:col-span-2",
    bgColor: "bg-cyan-50/50 dark:bg-cyan-500/5",
    iconColor: "text-cyan-600 dark:text-cyan-400"
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
                    <div className="flex items-center gap-2 text-primary-500 font-bold group-hover:gap-4 transition-all duration-300">
                    <span className="text-sm uppercase tracking-widest">Connect Support</span>
                    <MoveRight size={20} />
                    </div>
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
