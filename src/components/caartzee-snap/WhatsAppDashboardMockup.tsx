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
  Eye, 
  TrendingUp,
  Search,
  Bell,
  MoreVertical,
  DollarSign
} from 'lucide-react';
import RevealAnimation from '../animation/RevealAnimation';

const WhatsAppDashboardMockup = () => {
  return (
    <div className="relative mx-auto w-full max-w-[1100px] perspective-[2000px]">
      <RevealAnimation delay={0.6} instant>
        <div className="relative overflow-hidden rounded-[32px] bg-white/80 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] backdrop-blur-2xl dark:bg-[#0F1115]/90 border border-white/40 dark:border-white/10 ring-1 ring-black/5 transform-gpu transition-transform duration-700 hover:scale-[1.01]">
          {/* Main Layout Container */}
          <div className="flex flex-col lg:flex-row h-full min-h-[680px]">
            
            {/* Sidebar */}
            <aside className="hidden h-auto w-[260px] border-r border-stroke-1/50 bg-[#F9FAFB]/50 p-7 lg:block dark:border-white/5 dark:bg-black/20">
              <div className="mb-10 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#25D366] text-white shadow-lg shadow-[#25D366]/20">
                  <MessageSquare size={22} fill="currentColor" />
                </div>
                <div>
                  <h4 className="text-tagline-1 font-extrabold tracking-tight dark:text-white">WhatsApp</h4>
                  <p className="text-[10px] uppercase tracking-widest font-bold text-secondary/40 dark:text-accent/40">Commerce Hub</p>
                </div>
              </div>

              <div className="space-y-1.5">
                <p className="px-4 mb-4 text-[11px] font-bold text-secondary/30 uppercase tracking-widest dark:text-white/20">Menu</p>
                <NavItem icon={LayoutDashboard} label="Dashboard" active />
                <NavItem icon={MessageSquare} label="WhatsApp Inbox" badge="12" />
                <NavItem icon={Package} label="Products" hasSubmenu />
                <NavItem icon={ShoppingCart} label="Orders" badge="new" />
                <NavItem icon={Users} label="Customers" />
                <NavItem icon={Settings} label="Settings" hasSubmenu />
              </div>

              <div className="mt-auto pt-10">
                <NavItem icon={LogOut} label="Verify Account" className="text-primary-500 font-bold" />
              </div>
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 p-6 md:p-10 lg:p-12 overflow-hidden">
              {/* Header */}
              <header className="mb-10 flex flex-wrap items-center justify-between gap-6">
                <div>
                  <h2 className="text-heading-4 font-black tracking-tight dark:text-white">Dashboard</h2>
                  <p className="text-tagline-2 text-secondary/60 dark:text-accent/60">Success! Your sales are up <span className="text-green-500 font-bold">23.5%</span> this month.</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="relative hidden xl:block">
                    <Search className="absolute top-1/2 left-4 size-4 -translate-y-1/2 text-secondary/30" />
                    <input 
                      type="text" 
                      placeholder="Search reports..." 
                      className="h-12 w-64 rounded-2xl border-none bg-secondary/5 px-12 text-tagline-3 transition-all focus:bg-secondary/10 focus:ring-2 focus:ring-primary-500/20 dark:bg-white/5 dark:text-white"
                    />
                  </div>
                  <button className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary/5 dark:bg-white/5 transition-colors hover:bg-secondary/10">
                    <Bell size={20} className="text-secondary/60" />
                    <span className="absolute top-3 right-3 flex h-2 w-2 rounded-full bg-red-500 ring-2 ring-white dark:ring-[#0F1115]"></span>
                  </button>
                  <div className="h-12 w-[1px] bg-stroke-1 dark:bg-white/10 mx-2 hidden sm:block"></div>
                  <div className="flex items-center gap-3">
                    <div className="text-right hidden sm:block">
                      <p className="text-tagline-2 font-bold dark:text-white leading-none">Ashlin Ruo</p>
                      <p className="text-[10px] text-secondary/40 font-medium">Power User</p>
                    </div>
                    <div className="h-11 w-11 rounded-2xl bg-linear-to-tr from-primary-500 to-blue-500 p-[2px] shadow-lg shadow-primary-500/10">
                      <div className="h-full w-full rounded-[14px] bg-white dark:bg-[#0F1115] flex items-center justify-center font-bold text-primary-600">AR</div>
                    </div>
                  </div>
                </div>
              </header>

              {/* Stats Grid - Enhanced with better gradients and shadows */}
              <div className="mb-10 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
                <StatCard label="Total Revenue" value="₹1,52,00,000" change="+23.5%" icon={DollarSign} color="green" />
                <StatCard label="Total Orders" value="1,480" change="+15.2%" icon={ShoppingCart} color="blue" />
                <StatCard label="Customers" value="3,120" change="+8.7%" icon={Users} color="purple" />
                <StatCard label="Store Visit" value="12,405" change="+12.5%" icon={Eye} color="orange" />
              </div>

              {/* Dynamic Visualization Area */}
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                <div className="lg:col-span-2">
                  <div className="h-full rounded-3xl border border-stroke-1/50 bg-secondary/[0.02] p-8 dark:border-white/5 dark:bg-white/[0.02]">
                    <div className="mb-8 flex items-center justify-between">
                      <div>
                        <h4 className="text-lg font-black dark:text-white">Revenue Performance</h4>
                        <p className="text-tagline-3 text-secondary/40">Real-time sales tracking</p>
                      </div>
                      <div className="flex items-center gap-2 rounded-xl bg-white p-1 shadow-sm dark:bg-white/5">
                        <button className="px-3 py-1 text-[11px] font-bold bg-primary-500 text-white rounded-lg">Month</button>
                        <button className="px-3 py-1 text-[11px] font-bold text-secondary/40">Week</button>
                      </div>
                    </div>
                    <div className="relative h-48 w-full">
                      {/* Premium SVG Path with Gradient Shadow */}
                      <svg viewBox="0 0 400 100" preserveAspectRatio="none" className="h-full w-full overflow-visible">
                        <defs>
                          <linearGradient id="areaGradient" x1="0" x2="0" y1="0" y2="1">
                            <stop offset="0%" stopColor="#25D366" stopOpacity="0.2" />
                            <stop offset="100%" stopColor="#25D366" stopOpacity="0" />
                          </linearGradient>
                          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                            <feGaussianBlur stdDeviation="3" result="blur" />
                            <feComposite in="SourceGraphic" in2="blur" operator="over" />
                          </filter>
                        </defs>
                        <path 
                          d="M0,85 C20,80 40,30 60,40 C80,50 100,10 120,30 C140,50 160,80 180,60 C200,40 220,10 240,20 C260,30 280,70 300,50 C320,30 340,60 360,40 C380,20 400,30 400,30" 
                          fill="none" 
                          stroke="#25D366" 
                          strokeWidth="4" 
                          strokeLinecap="round"
                          filter="url(#glow)"
                        />
                        <path 
                          d="M0,85 C20,80 40,30 60,40 C80,50 100,10 120,30 C140,50 160,80 180,60 C200,40 220,10 240,20 C260,30 280,70 300,50 C320,30 340,60 360,40 C380,20 400,30 400,30 V100 H0 Z" 
                          fill="url(#areaGradient)"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Side Content: Top Sellers */}
                <div className="space-y-6">
                <div className="rounded-3xl border border-stroke-1/50 bg-secondary/[0.02] p-7 dark:border-white/5 dark:bg-white/[0.02]">
                    <h4 className="mb-6 text-lg font-black dark:text-white">Recent Orders</h4>
                    <div className="space-y-5">
                      <CompactOrder name="iPhone 15 Pro Max" status="Paid" amount="₹71,955" />
                      <CompactOrder name="MacBook Air M3" status="Pending" amount="₹1,12,000" />
                      <CompactOrder name="AirPods Pro 2" status="Paid" amount="₹24,500" />
                    </div>
                    <button className="mt-6 w-full py-3 rounded-2xl bg-secondary/5 text-tagline-2 font-bold transition-all hover:bg-primary-500 hover:text-white">
                      View All Orders
                    </button>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </RevealAnimation>

      {/* Background Decorative Elements */}
      <div className="absolute -top-20 -right-20 -z-10 h-[500px] w-[500px] rounded-full bg-primary-500/10 blur-[120px]" />
      <div className="absolute -bottom-20 -left-20 -z-10 h-[500px] w-[500px] rounded-full bg-[#25D366]/10 blur-[120px]" />
    </div>
  );
};

const NavItem = ({ icon: Icon, label, active = false, hasSubmenu = false, badge = "", className = "" }) => (
  <div className={`group flex items-center justify-between rounded-2xl px-5 py-3.5 cursor-pointer transition-all duration-300 ${active ? 'bg-white shadow-[0_10px_20px_-5px_rgba(0,0,0,0.05)] translate-x-1 dark:bg-[#0F1115]' : 'text-secondary/50 hover:bg-secondary/5 hover:translate-x-1 dark:text-white/40 dark:hover:bg-white/5'} ${className}`}>
    <div className="flex items-center gap-3.5">
      <Icon size={20} className={active ? 'text-primary-500' : 'group-hover:text-secondary dark:group-hover:text-white'} />
      <span className={`text-tagline-2 font-bold ${active ? 'text-secondary dark:text-white' : ''}`}>{label}</span>
    </div>
    {badge && (
      <span className={`rounded-lg px-1.5 py-0.5 text-[9px] font-black uppercase ${badge === 'new' ? 'bg-primary-500 text-white' : 'bg-secondary/5 text-secondary/60 dark:bg-white/10 dark:text-white/60'}`}>
        {badge}
      </span>
    )}
    {hasSubmenu && !badge && <span className="text-[10px] opacity-20 group-hover:opacity-40">▼</span>}
  </div>
);

const StatCard = ({ label, value, change, icon: Icon, color }) => {
  const colorMap = {
    green: 'text-green-500 bg-green-500/10',
    blue: 'text-blue-500 bg-blue-500/10',
    purple: 'text-purple-500 bg-purple-500/10',
    orange: 'text-orange-500 bg-orange-500/10',
  };
  return (
    <div className="group rounded-[28px] border border-stroke-1/50 bg-white p-7 transition-all duration-300 hover:shadow-xl hover:shadow-black/5 dark:border-white/5 dark:bg-white/[0.01]">
      <div className="mb-5 flex items-center justify-between">
        <div className={`flex size-11 items-center justify-center rounded-2xl bg-secondary/5 dark:bg-white/5 transition-all group-hover:scale-110`}>
          <Icon size={22} className="text-secondary/40 dark:text-white/40" />
        </div>
        <div className={`flex items-center gap-1 rounded-full px-2.5 py-1 text-[10px] font-black ${colorMap[color]}`}>
          <TrendingUp size={10} />
          {change}
        </div>
      </div>
      <p className="text-tagline-2 font-bold text-secondary/40 dark:text-white/30">{label}</p>
      <h3 className="text-2xl font-black tracking-tight dark:text-white mt-1">{value}</h3>
    </div>
  );
};

const CompactOrder = ({ name, status, amount }) => (
  <div className="flex items-center justify-between group cursor-pointer">
    <div className="flex items-center gap-3.5">
      <div className="size-11 rounded-2xl bg-secondary/5 dark:bg-white/5 flex items-center justify-center group-hover:bg-primary-500/10 transition-colors">
        <Package size={18} className="text-secondary/30" />
      </div>
      <div>
        <p className="text-tagline-2 font-bold dark:text-white group-hover:text-primary-500 transition-colors">{name}</p>
        <p className={`text-[10px] font-bold ${status === 'Paid' ? 'text-green-500' : 'text-orange-500'}`}>{status}</p>
      </div>
    </div>
    <p className="text-tagline-2 font-black dark:text-white">{amount}</p>
  </div>
);

WhatsAppDashboardMockup.displayName = 'WhatsAppDashboardMockup';
export default WhatsAppDashboardMockup;
