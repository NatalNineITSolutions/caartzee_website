'use client';

import React from 'react';
import { 
  LayoutDashboard, 
  MessageSquare, 
  Package, 
  ShoppingCart, 
  Users, 
  Settings, 
  LogOut, 
  Plus, 
  TrendingUp,
  Search,
  Bell,
  ChevronDown,
  Monitor,
  Box,
  FileText
} from 'lucide-react';
import RevealAnimation from '../animation/RevealAnimation';
import { cn } from '@/utils/cn';

const WhatsAppDashboardMockup = () => {
  return (
    <div className="relative mx-auto w-full max-w-[1200px] perspective-[2000px]">
      <RevealAnimation delay={0.6} instant>
        <div className="relative overflow-hidden rounded-[24px] bg-[#F8F9FA] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.15)] border border-white dark:bg-[#0F1115] dark:border-white/5 ring-1 ring-black/5 transform-gpu">
          {/* Main Layout Container */}
          <div className="flex flex-col lg:flex-row h-full min-h-[720px]">
            
            {/* Sidebar */}
            <aside className="hidden h-auto w-[240px] border-r border-stroke-1 bg-white p-5 lg:block dark:border-white/5 dark:bg-black/20">
              {/* App Logo */}
              <div className="mb-8 flex items-center gap-3 px-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#25D366] text-white shadow-lg shadow-[#25D366]/20">
                  <MessageSquare size={20} fill="currentColor" />
                </div>
                <div>
                  <h4 className="text-sm font-black tracking-tight dark:text-white">WhatsApp</h4>
                  <p className="text-[10px] uppercase tracking-widest font-bold opacity-40">Commerce</p>
                </div>
              </div>

              {/* User Profile in Sidebar */}
              <div className="mb-8 rounded-2xl bg-[#F8F9FA] p-3 dark:bg-white/5 border border-black/5">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#C6F56F]/20 text-[#25D366] font-bold text-xs uppercase">n</div>
                  <div className="overflow-hidden">
                    <p className="truncate text-[11px] font-bold dark:text-white">numyum.cartly...</p>
                    <p className="text-[9px] font-medium opacity-50">Starter Plan</p>
                  </div>
                </div>
              </div>

              {/* Nav Menu */}
              <div className="space-y-1">
                <NavItem icon={LayoutDashboard} label="Dashboard" active />
                <NavItem icon={MessageSquare} label="WhatsApp Inbox" />
                <NavItem icon={Package} label="Products" hasSubmenu />
                <div className="pl-11 space-y-1 pb-2 opacity-60">
                   <p className="text-[11px] font-bold transition-colors hover:text-primary-500 cursor-pointer">All Products</p>
                   <p className="text-[11px] font-bold transition-colors hover:text-primary-500 cursor-pointer">Categories</p>
                </div>
                <NavItem icon={ShoppingCart} label="Orders" />
                <NavItem icon={Users} label="Customers" />
                <NavItem icon={Settings} label="Settings" hasSubmenu />
              </div>

              <div className="mt-auto pt-10">
                <button className="flex items-center gap-3 px-4 py-3 text-xs font-bold text-red-500 hover:bg-red-50 w-full rounded-xl transition-colors">
                  <LogOut size={16} />
                  <span>Logout</span>
                </button>
              </div>
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 overflow-hidden bg-[#F8F9FA] dark:bg-black/40">
              {/* Top bar */}
              <div className="flex h-16 items-center justify-between border-b border-stroke-1 bg-white px-8 dark:bg-white/5 dark:border-white/5">
                <div className="relative w-64">
                   <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 opacity-20" />
                   <input type="text" placeholder="Search..." className="w-full rounded-xl bg-[#F8F9FA] py-2 pl-10 pr-4 text-xs dark:bg-black/20 outline-none focus:ring-1 focus:ring-primary-500/20" />
                </div>
                <div className="flex items-center gap-4">
                  <Bell size={18} className="opacity-40" />
                  <button className="flex items-center gap-2 rounded-xl border border-black/10 px-4 py-2 text-xs font-bold dark:border-white/10">
                    <Monitor size={14} />
                    View Store
                  </button>
                  <div className="h-8 w-[1px] bg-black/5"></div>
                  <div className="flex items-center gap-3">
                    <div className="flex size-8 items-center justify-center rounded-full bg-primary-100 text-primary-600 text-[10px] font-bold">A</div>
                    <div className="text-left hidden sm:block">
                      <p className="text-[11px] font-bold leading-none">Ashlin Ruo K S</p>
                      <p className="text-[9px] opacity-40">ashlinruo00@gmail.com</p>
                    </div>
                    <ChevronDown size={14} className="opacity-40" />
                  </div>
                </div>
              </div>

              <div className="p-8">
                {/* Dashboard Header */}
                <div className="mb-8 flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-black tracking-tight dark:text-white">Dashboard</h2>
                    <p className="text-xs opacity-50">Welcome back, numyum.cartly.zeedone.com</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-xs font-bold shadow-sm dark:bg-white/5">
                      <FileText size={14} className="opacity-40" />
                      Last 30 days
                      <ChevronDown size={14} className="opacity-40" />
                    </div>
                    <button className="flex size-10 items-center justify-center rounded-xl bg-white shadow-sm dark:bg-white/5">
                      <Plus size={18} className="opacity-40" />
                    </button>
                  </div>
                </div>

                {/* Quick Actions Component */}
                <div className="mb-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
                  <QuickAction label="Add Product" icon={Box} color="#1E61FF" />
                  <QuickAction label="View Orders" icon={ShoppingCart} color="#25D366" />
                  <QuickAction label="Customers" icon={Users} color="#8E54E9" />
                  <QuickAction label="Settings" icon={Settings} color="#F7931E" />
                </div>

                {/* Stats Grid */}
                <div className="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
                  <MetricCard label="Total Revenue" value="₹1,52,00,000" change="+23.5%" icon="$" color="green" />
                  <MetricCard label="Total Orders" value="180" change="+15.2%" icon={<ShoppingCart size={18}/>} color="blue" />
                  <MetricCard label="Customers" value="120" change="+8.7%" icon={<Users size={18}/>} color="purple" />
                  <MetricCard label="Products" value="45" change="+12.5%" icon={<Box size={18}/>} color="orange" />
                </div>

                {/* Lower Section */}
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                  {/* Revenue Overview Graph */}
                  <div className="lg:col-span-2 rounded-3xl bg-white p-8 shadow-sm dark:bg-white/5">
                     <div className="mb-8">
                        <h4 className="text-sm font-bold">Revenue Overview</h4>
                        <p className="text-[10px] opacity-40">Track your sales performance over time</p>
                     </div>
                     <div className="h-64 w-full relative">
                        <svg viewBox="0 0 100 40" className="h-full w-full overflow-visible">
                           <path 
                              d="M0 35 Q 10 30, 20 20 T 40 25 T 60 10 T 80 30 T 100 20V40H0Z" 
                              fill="url(#revenueGrad)" 
                              className="opacity-20"
                           />
                           <path 
                              d="M0 35 Q 10 30, 20 20 T 40 25 T 60 10 T 80 30 T 100 20" 
                              fill="none" 
                              stroke="#25D366" 
                              strokeWidth="1.5"
                              strokeLinecap="round"
                           />
                           <defs>
                              <linearGradient id="revenueGrad" x1="0" x2="0" y1="0" y2="1">
                                 <stop offset="0%" stopColor="#25D366" />
                                 <stop offset="100%" stopColor="#25D366" stopOpacity="0" />
                              </linearGradient>
                           </defs>
                        </svg>
                     </div>
                  </div>

                  {/* Top Products */}
                  <div className="rounded-3xl bg-white p-7 shadow-sm dark:bg-white/5">
                    <h4 className="text-sm font-bold">Top Products</h4>
                    <p className="mb-6 text-[10px] opacity-40">Best selling products this month</p>
                    <div className="space-y-6">
                      <TopProduct rank="1" name="iPhone 15 Pro Max" sold="45 sold" price="₹71,95,500" />
                      <TopProduct rank="2" name="MacBook Air M3" sold="23 sold" price="₹32,17,200" />
                      <TopProduct rank="3" name="AirPods Pro 2" sold="67 sold" price="₹16,68,300" />
                      <TopProduct rank="4" name="Sony WH-1000XM5" sold="21 sold" price="₹7,69,780" />
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </RevealAnimation>
    </div>
  );
};

const NavItem = ({ icon: Icon, label, active = false, hasSubmenu = false }) => (
  <div className={cn(
    "flex items-center justify-between rounded-xl px-4 py-2.5 cursor-pointer transition-all",
    active ? "bg-[#C6F56F]/10 text-primary-600 border border-[#C6F56F]/20" : "text-black/60 hover:bg-black/5 dark:text-white/60 dark:hover:bg-white/5"
  )}>
    <div className="flex items-center gap-3">
      <Icon size={18} className={active ? "text-[#25D366]" : ""} />
      <span className="text-[11px] font-bold">{label}</span>
    </div>
    {hasSubmenu && <ChevronDown size={12} className="opacity-30" />}
  </div>
);

const QuickAction = ({ label, icon: Icon, color }) => (
  <div className="flex items-center gap-3 rounded-2xl bg-white p-3 shadow-sm dark:bg-white/5 transition-transform hover:scale-[1.02] cursor-pointer">
    <div className="flex size-10 items-center justify-center rounded-xl" style={{ backgroundColor: `${color}15`, color }}>
      <Icon size={20} />
    </div>
    <span className="text-[11px] font-black">{label}</span>
  </div>
);

const MetricCard = ({ label, value, change, icon, color }) => (
  <div className="rounded-3xl bg-white p-6 shadow-sm dark:bg-white/5 border border-white">
    <div className="mb-4 flex items-center justify-between">
       <span className="text-[10px] font-bold opacity-40 uppercase tracking-wider">{label}</span>
       <div className={cn(
         "flex size-10 items-center justify-center rounded-2xl",
         color === 'green' ? "bg-[#C6F56F]/10 text-[#25D366]" : "bg-blue-50 text-blue-500"
       )}>
         {typeof icon === 'string' ? <span className="text-xl font-bold">{icon}</span> : icon}
       </div>
    </div>
    <h3 className="text-xl font-black mb-1">{value}</h3>
    <div className="flex items-center gap-1.5 text-[10px] font-bold text-green-500">
       <TrendingUp size={12} />
       {change} <span className="opacity-40 text-black dark:text-white">vs last period</span>
    </div>
  </div>
);

const TopProduct = ({ rank, name, sold, price }) => (
  <div className="flex items-center justify-between transition-all hover:translate-x-1 cursor-pointer">
    <div className="flex items-center gap-4">
      <span className="text-xs font-black opacity-20">{rank}</span>
      <div className="size-10 rounded-full bg-[#F8F9FA] dark:bg-white/10 flex items-center justify-center font-bold text-[10px] text-black/40">
        {name.charAt(0)}
      </div>
      <div>
        <p className="text-[11px] font-bold leading-tight">{name}</p>
        <p className="text-[9px] opacity-40">{sold}</p>
      </div>
    </div>
    <p className="text-xs font-black">{price}</p>
  </div>
);

WhatsAppDashboardMockup.displayName = 'WhatsAppDashboardMockup';
export default WhatsAppDashboardMockup;
