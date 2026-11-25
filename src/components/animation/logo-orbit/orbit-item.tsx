'use client';

import { cn } from '@/utils/cn';
import Image, { StaticImageData } from 'next/image';
import { ComponentPropsWithoutRef, useLayoutEffect, useRef } from 'react';
import { useOrbitContext } from './orbit-context';

type OrbitItemProps = {
  src: StaticImageData | string;
  alt: string;
} & ComponentPropsWithoutRef<'div'>;

const OrbitItem = ({ src, alt, className, ...props }: OrbitItemProps) => {
  const orbitPivotRef = useRef<HTMLDivElement>(null);
  const orbitItemRef = useRef<HTMLDivElement>(null);
  const { registerItem, unregisterItem } = useOrbitContext();

  useLayoutEffect(() => {
    const entry = registerItem(orbitPivotRef, orbitItemRef);
    return () => unregisterItem(entry);
  }, [registerItem, unregisterItem]);

  return (
    <div
      ref={orbitPivotRef}
      className="absolute top-[calc(var(--orbit-size)*-0.5)]"
      {...props}
    >
      <div
        ref={orbitItemRef}
        className={cn(
          'absolute top-[-20px] size-14 rounded-full bg-white shadow-md flex items-center justify-center p-2.5 border border-stroke-1/60 hover:scale-110 transition-transform duration-300',
          className
        )}
      >
        <Image src={src} alt={alt} className="size-full object-contain" />
      </div>
    </div>
  );
};

export default OrbitItem;
