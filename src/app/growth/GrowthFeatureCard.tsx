import { BarChart3 } from 'lucide-react';

interface Props {
  title: string;
  desc: string;
}

const GrowthFeatureCard = ({ title, desc }: Props) => {
  return (
    <div className="rounded-2xl bg-white p-8 shadow-sm transition hover:shadow-md">
      <BarChart3 className="mb-4 text-ns-linen" size={28} />
      <h3 className="text-heading-6 font-normal">{title}</h3>
      <p className="mt-3 text-secondary">{desc}</p>
    </div>
  );
};

export default GrowthFeatureCard;
