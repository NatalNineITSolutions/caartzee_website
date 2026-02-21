"use client";

import { motion } from "framer-motion";
import { Package, AlertTriangle, TrendingUp } from "lucide-react";

const InventoryDashboardMock = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative p-10 rounded-[2.5rem] bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 
                 shadow-2xl shadow-slate-200/60 dark:shadow-none overflow-hidden backdrop-blur-2xl"
    >
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-purple-500/5 dark:bg-purple-500/20 blur-[100px] rounded-full opacity-40 -z-0" />

      {/* Header */}
      <div className="flex items-center justify-between mb-10 relative z-10">
        <h4 className="text-lg font-bold text-slate-800 dark:text-white">Inventory Overview</h4>
        <span className="text-[10px] font-black uppercase tracking-[0.15em] px-4 py-1.5 rounded-full bg-purple-50 dark:bg-purple-500/20 text-purple-700 dark:text-purple-400 border border-purple-100 dark:border-purple-500/30 shadow-sm">
          Real-Time
        </span>
      </div>

      {/* Stats Grid */}
      <div className="space-y-6 relative z-10">
        {[
          { label: "Total Products", value: "320", icon: Package, color: "text-purple-600" },
          { label: "In Stock", value: "124", icon: TrendingUp, color: "text-green-600" },
          { label: "Low Stock", value: "8", icon: AlertTriangle, color: "text-amber-600" },
        ].map((stat, i) => (
          <div key={i} className="p-6 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 flex items-center justify-between shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4">
              <div className={`p-2.5 rounded-xl bg-white dark:bg-white/10 shadow-sm ${stat.color}`}>
                <stat.icon className="w-5 h-5" />
              </div>
              <span className="text-sm font-bold text-slate-500 dark:text-gray-400">{stat.label}</span>
            </div>
            <span className="text-2xl font-black text-slate-900 dark:text-white">{stat.value}</span>
          </div>
        ))}
      </div>

      {/* Product List Mockup */}
      <div className="mt-10 pt-8 border-t border-slate-100 dark:border-white/10 relative z-10">
        <div className="space-y-5">
          {[
            { name: "Wireless Headphones", status: "In Stock (124)", fill: "w-[85%]", color: "bg-green-500", text: "text-green-600" },
            { name: "Smart Watch", status: "Low Stock (8)", fill: "w-[15%]", color: "bg-amber-500", text: "text-amber-600" },
            { name: "Bluetooth Speaker", status: "Out of Stock", fill: "w-[0%]", color: "bg-slate-300", text: "text-slate-400" },
          ].map((item, i) => (
            <div key={i} className="space-y-2">
              <div className="flex justify-between text-xs font-bold">
                <span className="text-slate-700 dark:text-gray-300">{item.name}</span>
                <span className={item.text}>{item.status}</span>
              </div>
              <div className="w-full bg-slate-100 dark:bg-white/10 rounded-full h-1.5 overflow-hidden">
                <div className={`${item.color} h-full rounded-full ${item.fill} transition-all duration-1000 delay-500`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default InventoryDashboardMock;
