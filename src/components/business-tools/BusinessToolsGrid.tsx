'use client';

import { businessTools } from '@/data/business-tools-data';
import BusinessToolCard from '@/components/shared/card/BusinessToolCard';

const BusinessToolsGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 md:gap-8 max-w-[1240px] mx-auto px-4">
      {businessTools.map((tool) => (
        <BusinessToolCard key={tool.id} tool={tool} />
      ))}
    </div>
  );
};

export default BusinessToolsGrid;
