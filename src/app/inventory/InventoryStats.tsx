"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const stats = [
  { value: 2400, suffix: "+", label: "Products Managed" },
  { value: 99.9, suffix: "%", label: "Stock Sync Accuracy" },
  { value: 38, suffix: "%", label: "Reduced Overselling" },
  { value: 24, suffix: "/7", label: "Automated Updates" },
];

interface CounterProps {
  value: number;
  suffix?: string;
  duration?: number;
}

const Counter = ({ value, suffix = "", duration = 1500 }: CounterProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = value / (duration / 16);

    const counter = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(counter);
      } else {
        setCount(parseFloat(start.toFixed(1)));
      }
    }, 16);

    return () => clearInterval(counter);
  }, [value, duration]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};

const InventoryStats = () => {
  return (
    <section className="relative px-6">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 max-w-6xl mx-auto py-12 px-8 rounded-[2.5rem] 
                     bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/5 
                     shadow-xl shadow-slate-200/50 dark:shadow-none backdrop-blur-md">
        {stats.map((stat, i) => (
          <div key={i} className="text-center group relative">
            <div className="absolute inset-0 bg-purple-500/5 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative">
              <h3 className="text-3xl md:text-5xl font-extrabold bg-gradient-to-b from-slate-900 via-slate-700 to-slate-500 dark:from-white dark:via-gray-300 dark:to-gray-500 bg-clip-text text-transparent mb-2">
                <Counter value={stat.value} suffix={stat.suffix} />
              </h3>
              <p className="text-slate-500 dark:text-gray-500 text-[10px] md:text-xs font-black uppercase tracking-[0.2em]">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InventoryStats;