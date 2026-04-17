'use client';

import { businessTools } from '@/data/business-tools-data';
import ModernToolCard from '@/components/business-tools/redesign/ModernToolCard';

interface BusinessToolsGridProps {
  activeCategory?: string;
}

const BusinessToolsGrid = ({ activeCategory = 'All' }: BusinessToolsGridProps) => {
  const filteredTools = activeCategory === 'All' 
    ? businessTools 
    : businessTools.filter(tool => tool.category === activeCategory);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 max-w-[1400px] mx-auto px-6">
      {filteredTools.map((tool) => (
        <ModernToolCard key={tool.id} tool={tool} />
      ))}
    </div>
  );
};

export default BusinessToolsGrid;
