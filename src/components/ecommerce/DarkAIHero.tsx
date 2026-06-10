'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Hls from 'hls.js';
import { ChevronDown, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const DarkAIHero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoSrc = "https://stream.mux.com/T6oQJQ02cQ6N01TR6iHwZkKFkbepS34dkkIc9iukgy400g.m3u8";

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(videoSrc);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play().catch((e) => console.log("Auto-play prevented:", e));
      });
      return () => {
        hls.destroy();
      };
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = videoSrc;
      video.addEventListener("loadedmetadata", () => {
        video.play().catch((e) => console.log("Auto-play prevented:", e));
      });
    }
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-white dark:bg-[#000000] text-gray-900 dark:text-white overflow-hidden transition-colors duration-500">
      


      {/* Background Video Layer */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video 
          ref={videoRef}
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover opacity-60 invert dark:invert-0 transition-all duration-500"
          poster="https://images.unsplash.com/photo-1647356191320-d7a1f80ca777?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGRhcmslMjB0ZWNobm9sb2d5JTIwbmV1cmFsJTIwbmV0d29ya3xlbnwxfHx8fDE3Njg5NzIyNTV8MA&ixlib=rb-4.1.0&q=80&w=1080"
        />
        {/* Video Overlay */}
        <div className="absolute inset-0 bg-white/60 dark:bg-black/60 backdrop-blur-[2px] transition-colors duration-500"></div>
      </div>

      {/* Decorative Gradients */}
      <div className="absolute top-[-20%] left-[20%] w-[600px] h-[600px] bg-blue-900/20 blur-[120px] mix-blend-screen pointer-events-none z-0"></div>
      <div className="absolute bottom-[-10%] right-[20%] w-[500px] h-[500px] bg-indigo-900/20 blur-[120px] mix-blend-screen pointer-events-none z-0"></div>

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center mt-20 space-y-12 px-6 pb-20 pt-[20vh]">
        
        {/* Pre-headline */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
          className="text-heading-6 sm:text-heading-5 mb-4 text-gray-900 dark:text-white uppercase tracking-widest opacity-80 transition-colors duration-500"
        >
          LAUNCH YOUR STORE
        </motion.h2>

        {/* Main Headline */}
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ delay: 0.2, duration: 0.6 }}
          className="font-semibold text-heading-3 md:text-heading-2 lg:text-heading-1 tracking-[-2px] bg-gradient-to-b from-gray-900 via-gray-700 to-gray-500 dark:from-white dark:via-white dark:to-[#b4c0ff] bg-clip-text text-transparent transition-all duration-500"
        >
          Start Selling Faster
        </motion.h1>

        {/* Subheadline */}
        <motion.p 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 0.7 }} 
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-lg md:text-xl text-gray-700 dark:text-white/70 max-w-2xl mx-auto transition-colors duration-500"
        >
          Build a professional online store, showcase your products, and start reaching customers without the complexity. Everything you need to launch, manage, and grow your business is built into one platform.
        </motion.p>

        {/* Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center gap-6"
        >
          {/* Primary Button */}
          <Link href="/contact-us" className="group flex items-center justify-between pl-6 pr-2 py-2 rounded-full bg-gray-900 text-white dark:bg-white dark:text-[#0a0400] hover:shadow-lg dark:hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:scale-105 transition-all duration-300 gap-4">
            <span className="font-medium text-lg">Launch Your Store</span>
            <div className="w-[40px] h-[40px] rounded-full bg-[#8B5CF6] group-hover:bg-[#7c3aed] flex items-center justify-center transition-colors shrink-0">
              <ArrowRight className="w-5 h-5 text-white" />
            </div>
          </Link>
        </motion.div>
      </div>

    </div>
  );
};

export default DarkAIHero;
