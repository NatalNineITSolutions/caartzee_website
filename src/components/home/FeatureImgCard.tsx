import { cn } from '@/utils/cn';
import Image from 'next/image';
import Link from 'next/link';

interface FeatureImgCardProps {
  title: string;
  imageSrc: string;
  href: string;
  className?: string;
}

const FeatureImgCard = ({ title, imageSrc, href, className }: FeatureImgCardProps) => {
  return (
    <Link
      href={href}
      className={cn(
        'group block w-[320px] shrink-0 space-y-4',
        className
      )}
    >
      <div className="relative h-[420px] w-full overflow-hidden rounded-3xl shadow-lg">
        <Image
          src={imageSrc}
          alt={title}
          width={320}
          height={900}
          className="absolute top-0 left-0 w-full transition-transform duration-[4000ms] ease-linear group-hover:-translate-y-[40%]"
        />
      </div>

      <h3 className="text-lg font-medium text-center text-secondary dark:text-accent">
        {title}
      </h3>
    </Link>
  );
};

export default FeatureImgCard;