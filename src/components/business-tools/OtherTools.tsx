'use client';
import { businessTools } from '@/data/business-tools-data';
import BusinessToolCard from '../shared/card/BusinessToolCard';

interface OtherToolsProps {
  currentSlug: string;
}

const OtherTools = ({ currentSlug }: OtherToolsProps) => {
  const otherTools = businessTools.filter(t => t.slug !== currentSlug).slice(0, 3);

  return (
    <section className="py-24">
      <div className="container-custom">
        <h2 className="text-heading-3 font-bold text-secondary dark:text-accent mb-12 text-center md:text-left">
          Try our other free products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {otherTools.map((tool) => (
            <BusinessToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OtherTools;
