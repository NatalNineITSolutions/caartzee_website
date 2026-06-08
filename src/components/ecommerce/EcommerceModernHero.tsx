'use client';
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check } from 'lucide-react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { useRouter } from 'next/navigation';

function useTypewriter(text: string, speed = 38, startDelay = 600) {
  const [displayed, setDisplayed] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    let interval: NodeJS.Timeout;

    timeout = setTimeout(() => {
      let i = 0;
      interval = setInterval(() => {
        setDisplayed(text.slice(0, i + 1));
        i++;
        if (i >= text.length) {
          clearInterval(interval);
          setDone(true);
        }
      }, speed);
    }, startDelay);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [text, speed, startDelay]);

  return { displayed, done };
}

export default function EcommerceModernHero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [services, setServices] = useState<string[]>([]);
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  useEffect(() => { setMounted(true); }, []);
  const isDark = mounted && resolvedTheme === 'dark';

  const { displayed, done } = useTypewriter("Your Next Stage of Growth Starts Here", 38, 600);

  const prevX = useRef<number | null>(null);
  const targetTimeRef = useRef<number>(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth < 1024) return;

      if (prevX.current === null) {
        prevX.current = e.clientX;
        return;
      }

      const delta = e.clientX - prevX.current;
      prevX.current = e.clientX;

      if (!Number.isNaN(video.duration) && video.duration > 0) {
        let newTarget = targetTimeRef.current + (delta / window.innerWidth) * 0.8 * video.duration;
        newTarget = Math.max(0, Math.min(newTarget, video.duration));
        targetTimeRef.current = newTarget;
        video.currentTime = newTarget;
      }
    };

    const handleSeeked = () => {
      // seeked event ensures smooth tracking frame to frame
    };

    const handleResize = () => {
      if (window.innerWidth < 1024) {
        video.autoplay = true;
        video.play().catch(() => { });
      } else {
        video.pause();
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);
    video.addEventListener('seeked', handleSeeked);

    if (window.innerWidth < 1024) {
      video.autoplay = true;
      video.play().catch(() => { });
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      video.removeEventListener('seeked', handleSeeked);
    };
  }, []);

  const toggleService = (service: string) => {
    setServices(prev =>
      prev.includes(service)
        ? prev.filter(s => s !== service)
        : [...prev, service]
    );
  };

  const serviceOptions = ["Start an Online Store", "Expand Sales Channels", "Automate Customer Engagement", "Scale Revenue Growth"];

  return (
    <div className={`relative ${isDark ? 'bg-[#060010] text-white selection:bg-white/20 selection:text-white' : 'bg-white text-neutral-900 selection:bg-[#EAECE9] selection:text-[#1C2E1E]'} font-sans antialiased overflow-x-hidden flex flex-col lg:block lg:min-h-screen transition-colors duration-500`}>
      {/* Background Video Component */}
      <div className={`order-last lg:order-none relative lg:absolute lg:inset-0 lg:z-0 overflow-hidden pointer-events-none w-full aspect-square md:aspect-video lg:aspect-auto lg:h-full ${isDark ? 'bg-[#060010] lg:bg-transparent' : 'bg-neutral-50 lg:bg-transparent'} transition-colors duration-500`}>
        <video
          ref={videoRef}
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover object-right lg:object-right-bottom"
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260601_110537_3a579fa0-7bbc-4d94-9d25-0e816c7840f5.mp4"
        />
      </div>


      {/* Content Layout Container */}
      <div className={`relative z-10 flex flex-col order-first lg:order-none w-full ${isDark ? 'bg-[#060010] lg:bg-transparent' : 'bg-white lg:bg-transparent'} pb-8 lg:pb-0 lg:min-h-screen transition-colors duration-500`}>
        <main id="spade-hero" className="w-full max-w-7xl mx-auto px-6 py-12 flex-1 flex flex-col justify-center">

          <div className="max-w-xl lg:max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight ${isDark ? 'text-white' : 'text-black'} leading-[1.1] mb-5 select-none w-full whitespace-pre-wrap transition-colors duration-500`}>
                {displayed}
                {!done && <span className={`inline-block w-[2px] h-[1.1em] ${isDark ? 'bg-white' : 'bg-black'} align-middle ml-[2px] animate-blink`} />}
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <p className={`text-base md:text-lg ${isDark ? 'text-white/70' : 'text-[#5A635A]'} leading-relaxed mb-8 w-full transition-colors duration-500`}>
                From launching your store to scaling sales and customer engagement, Caartzee provides everything you need to build and grow your business.
              </p>
            </motion.div>

            <div className="mt-8">
              <h3 className={`text-2xl font-medium tracking-tight mb-2 ${isDark ? 'text-white' : 'text-black'} transition-colors duration-500`}>How can we help?</h3>
              <p className={`opacity-85 ${isDark ? 'text-white/50' : 'text-[#738273]'} mb-8 transition-colors duration-500`}>Select all that apply</p>

              <div className="flex flex-wrap gap-3 mb-8">
                {serviceOptions.map((option) => {
                  const isActive = services.includes(option);
                  return (
                    <motion.button
                      key={option}
                      onClick={() => toggleService(option)}
                      className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-colors ${isActive
                          ? (isDark ? 'bg-white text-[#060010] shadow-md shadow-white/5' : 'bg-[#1C2E1E] text-white shadow-md shadow-emerald-950/5')
                          : (isDark ? 'bg-[#141020] text-white/90 border border-white/10 hover:bg-white/10' : 'bg-white text-[#1C2E1E] border border-[#F1F3F1] hover:bg-[#F1F3F1]/55')
                        }`}
                      whileTap={{ scale: 0.95 }}
                    >
                      {isActive && (
                        <motion.span
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        >
                          <Check className="w-4 h-4" />
                        </motion.span>
                      )}
                      {option}
                    </motion.button>
                  );
                })}
              </div>

              <AnimatePresence mode="wait">
                {services.length === 0 ? (
                  <motion.div
                    key="empty"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.5 }}
                    exit={{ opacity: 0 }}
                    className={`italic text-xs ${isDark ? 'text-white/50' : 'text-neutral-500'}`}
                  >
                    Please click to select services above.
                  </motion.div>
                ) : (
                  <motion.div
                    key="active"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className={`${isDark ? 'bg-[#141020] border-white/10' : 'bg-[#FAFBF9] border-[#EAECE9]'} border rounded-2xl p-4 flex items-center justify-between transition-colors duration-500`}>
                      <span className={`text-sm ${isDark ? 'text-white/90' : 'text-neutral-800'}`}>
                        Ready to inquire about: {services.join(", ")}
                      </span>
                      <button
                        onClick={() => {
                          if (services.includes("Start an Online Store")) {
                            router.push('/start-online-store');
                          } else if (services.includes("Expand Sales Channels")) {
                            router.push('/expand-sales-channels');
                          } else if (services.includes("Automate Customer Engagement")) {
                            router.push('/automate-customer-engagement');
                          } else if (services.includes("Scale Revenue Growth")) {
                            router.push('/scale-revenue-growth');
                          } else {
                            router.push('/contact-us');
                          }
                        }}
                        className={`${isDark ? 'text-[#00f0ff]' : 'text-[#4D6D47]'} uppercase text-xs font-semibold flex items-center gap-1 hover:opacity-80 transition-colors duration-500`}
                      >
                        Let's Go &rarr;
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </main>
      </div>
    </div>
  );
}
