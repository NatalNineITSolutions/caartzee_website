import React from 'react';
import { motion } from 'framer-motion';

interface ShinyTextProps {
  text: string;
  baseColor?: string;
  shineColor?: string;
  className?: string;
}

const ShinyText: React.FC<ShinyTextProps> = ({
  text,
  baseColor = '#64CEFB',
  shineColor = '#ffffff',
  className = '',
}) => {
  return (
    <motion.span
      className={`inline-block ${className}`}
      style={{
        backgroundImage: `linear-gradient(100deg, ${baseColor} 40%, ${shineColor} 50%, ${baseColor} 60%)`,
        backgroundSize: '200% 100%',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        color: 'transparent',
      }}
      animate={{
        backgroundPosition: ['100% 0%', '-100% 0%'],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: 'linear',
      }}
    >
      {text}
    </motion.span>
  );
};

export default ShinyText;
