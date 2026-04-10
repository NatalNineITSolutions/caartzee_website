'use client';

import { Plugin } from '@/data/plugins-data';
import * as Icons from 'lucide-react';
import { Star } from 'lucide-react';

const PluginCard = ({ plugin }: { plugin: Plugin }) => {
  // Dynamically resolve ion
  const IconComponent = (Icons as any)[plugin.icon] || Icons.Grid;

  return (
    <div className="group bg-white dark:bg-background-7 border border-stroke-1 dark:border-white/10 rounded-3xl p-6 transition-all hover:shadow-xl hover:border-ns-linen/30">
      <div className="flex items-start justify-between mb-6">
        <div className="flex size-14 items-center justify-center rounded-2xl bg-ns-ivory dark:bg-background-6 text-ns-linen ring-1 ring-black/5">
          <IconComponent size={32} strokeWidth={1.5} />
        </div>
        <div className="flex items-center gap-1 px-3 py-1 bg-ns-ivory/50 dark:bg-background-8 rounded-full">
          <Star size={14} className="fill-amber-400 text-amber-400" />
          <span className="text-xs font-semibold text-secondary/80 dark:text-accent/80">
            {plugin.rating}
          </span>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-secondary dark:text-accent mb-3 group-hover:text-ns-linen transition-colors">
        {plugin.name}
      </h3>
      
      <p className="text-sm text-secondary/60 dark:text-accent/60 mb-6 line-clamp-2 h-10">
        {plugin.description}
      </p>

      <div className="flex items-center justify-between">
        <span className="text-xs font-medium text-secondary/50 dark:text-accent/50">
          {plugin.installs} installs
        </span>
        <button className="text-sm font-semibold text-ns-linen hover:text-ns-linen/80 transition-colors">
          View details
        </button>
      </div>
    </div>
  );
};

export default PluginCard;
