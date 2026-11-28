'use client';

import bottomGradient from '@/public/images/bottom-gradient.svg';
import RevealAnimation from '@/components/animation/reveal-animation';
import { TextReveal } from '@/components/animation/text-reveal';
import { ButtonPrimary, ButtonSecondary } from '@/components/shared/ui/button';
import { AuthModal } from '@/components/shared/ui/modal';
import { useSlightlyMoveOnMouseMove } from '@/hooks/use-slightly-move-on-mouse-move';
import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState } from 'react';

const Hero = () => {
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const rootRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLElement>(null);
  const rightRef = useRef<HTMLElement>(null);

  useSlightlyMoveOnMouseMove(rootRef, [
    { ref: leftRef, shift: 12 },
    { ref: rightRef, shift: 10 },
  ]);

  return (
    <section ref={rootRef} className="relative isolate overflow-hidden pt-[190px]">
      <video
        className="2k:h-[104%] absolute inset-0 z-0 size-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/videos/hero-video.mp4" type="video/mp4" />
      </video>

      <div className="main-container relative z-10">
        <div className="space-y-9 text-center md:space-y-18">
          <div className="space-y-8 md:space-y-[70px]">
            <div className="space-y-6">
              <div className="space-y-4">
                <TextReveal delay={0.3}>
                  <h1 className="mx-auto max-w-[950px]">
                    Automate your workflows eliminate manual tasks.
                  </h1>
                </TextReveal>
                <TextReveal delay={0.4}>
                  <p className="mx-auto max-w-[500px]">
                    Connect your tools, design smart workflows, and automate repetitive work — so
                    your business runs on autopilot.
                  </p>
                </TextReveal>
              </div>
            </div>

            <RevealAnimation delay={0.3} instant>
              <div className="flex flex-col items-center justify-center gap-y-3 md:flex-row md:gap-x-5">
                <Link
                  href="https://app.caartzee.com/signup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[70%] md:w-auto"
                >
                  <ButtonPrimary
                    className="w-full md:w-auto"
                    textClassName="text-center text-nowrap max-sm:flex-1 max-sm:pr-8!"
                  >
                    Start free trial
                  </ButtonPrimary>
                </Link>
                <Link
                  href="https://app.caartzee.com/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[70%] md:w-auto"
                >
                  <ButtonSecondary
                    className="w-full outline-0! md:w-auto"
                    textClassName="text-center text-nowrap max-sm:flex-1 max-sm:pr-8!"
                  >
                    Book demo
                  </ButtonSecondary>
                </Link>
              </div>
            </RevealAnimation>
          </div>

          <RevealAnimation delay={0.4} instant>
            <div className="h-[350px] w-full overflow-hidden rounded-[20px] backdrop-blur-[20px] md:h-[650px] xl:h-[825px] shadow-2xl bg-black/5 relative">
              <video
                src="/videos/sales navigator.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="size-full object-cover rounded-[20px]"
              />
            </div>
          </RevealAnimation>
        </div>

        <figure
          ref={leftRef}
          className="absolute top-[57%] left-[2%] z-30 hidden will-change-transform md:block xl:top-[50%] xl:left-[-5%] 2xl:left-[-8%]"
        >
          <RevealAnimation delay={0.5} direction="left" offset={50}>
            <div className="relative inline-flex items-center">
              <div className="flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-300 to-yellow-400 px-4 py-2 shadow-lg backdrop-blur-md border border-yellow-200/50">
                <span className="flex h-2 w-2 rounded-full bg-amber-600 animate-pulse" />
                <span className="text-sm font-semibold tracking-tight text-neutral-900">
                  Orders &amp; Inventory
                </span>
              </div>
              {/* Pointer cursor indicator */}
              <div className="absolute -top-3.5 -right-3">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="drop-shadow-md">
                  <path
                    d="M3 3L10.07 19.97L12.58 12.58L19.97 10.07L3 3Z"
                    fill="#1A1A1C"
                    stroke="#ffffff"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </RevealAnimation>
        </figure>

        <figure
          ref={rightRef}
          className="absolute top-[59%] right-[8%] z-30 hidden will-change-transform md:block xl:top-[42%] xl:right-[-3%] 2xl:right-[-5%]"
        >
          <RevealAnimation delay={0.6} direction="right" offset={50}>
            <div className="relative inline-flex items-center">
              {/* Pointer cursor indicator */}
              <div className="absolute -top-3.5 -left-3">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="drop-shadow-md">
                  <path
                    d="M21 3L13.93 19.97L11.42 12.58L4.03 10.07L21 3Z"
                    fill="#635BFF"
                    stroke="#ffffff"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-500 via-indigo-500 to-purple-600 px-4 py-2 shadow-lg shadow-purple-500/20 backdrop-blur-md border border-purple-400/30 text-white">
                <span className="flex h-2 w-2 rounded-full bg-white animate-pulse" />
                <span className="text-sm font-semibold tracking-tight text-white">
                  WhatsApp Commerce
                </span>
              </div>
            </div>
          </RevealAnimation>
        </figure>
      </div>

      <RevealAnimation delay={0.5} instant>
        <figure className="absolute -bottom-1 left-0 z-20 h-[500px] w-full md:h-[600px] xl:h-[700px]">
          <Image src={bottomGradient} alt="bottom-gradient" className="size-full object-cover" />
        </figure>
      </RevealAnimation>

      <AuthModal open={authModalOpen} onClose={() => setAuthModalOpen(false)} />
    </section>
  );
};

export default Hero;
