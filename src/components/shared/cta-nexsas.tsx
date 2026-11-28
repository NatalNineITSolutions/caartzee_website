'use client';

import globeImg from '@/public/images/ns-img-26.svg';
import RevealAnimation from '@/components/animation/reveal-animation';
import { TextReveal } from '@/components/animation/text-reveal';
import { BadgePrimary } from '@/components/shared/ui/badge';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const CTA = () => {
  const [showIosAlert, setShowIosAlert] = useState(false);

  return (
    <section className="pt-20 md:pt-25 lg:pt-39">
      <RevealAnimation delay={0.1}>
        <div className="main-container">
          <div className="relative overflow-hidden rounded-2xl bg-white px-5 pt-20 pb-20 md:px-16 md:pt-39 md:pb-39 lg:pt-60">
            <RevealAnimation
              delay={0.2}
              className="absolute top-15 left-1/2 z-10 size-[639px] -translate-x-1/2"
            >
              <figure>
                <Image src={globeImg} alt="globe" className="size-full object-cover" />
              </figure>
            </RevealAnimation>

            <div className="relative z-20 space-y-8">
              <div className="space-y-5 text-center">
                <RevealAnimation delay={0.3}>
                  <BadgePrimary>Mobile App</BadgePrimary>
                </RevealAnimation>

                <div className="space-y-3">
                  <TextReveal delay={0.4}>
                    <h2 className="mx-auto max-w-[650px]">
                      Manage your store anytime, anywhere from your phone.
                    </h2>
                  </TextReveal>
                  <TextReveal delay={0.5}>
                    <p className="text-background-14/60 mx-auto max-w-[550px]">
                      Download the Caartzee merchant app to track orders, update inventory, receive live notifications, and grow your business on the go.
                    </p>
                  </TextReveal>
                </div>
              </div>

              <RevealAnimation delay={0.6}>
                <div className="flex flex-col items-center justify-center gap-4">
                  <div className="flex flex-wrap items-center justify-center gap-4">
                    {/* Google Play Store Button */}
                    <Link
                      href="https://play.google.com/store/apps/details?id=com.caartzee.merchant"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative inline-flex items-center gap-3.5 rounded-2xl bg-neutral-900 px-6 py-3.5 shadow-xl transition-all duration-300 hover:bg-neutral-800 hover:scale-105 hover:shadow-2xl hover:shadow-primary-500/20"
                    >
                      <svg
                        className="size-7 shrink-0 transition-transform duration-300 group-hover:scale-110"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M3.608 1.637A1.85 1.85 0 0 0 3 3.037v17.926c0 .548.22 1.058.608 1.4L13.1 12 3.608 1.637z"
                          fill="#00E676"
                        />
                        <path
                          d="M16.5 8.6 4.9 2.05c-.39-.22-.84-.33-1.29-.33l9.5 9.5 3.39-2.62z"
                          fill="#FFD600"
                        />
                        <path
                          d="M3.61 22.28c.45 0 .9-.11 1.29-.33L16.5 15.4l-3.4-2.62-9.49 9.5z"
                          fill="#FF1744"
                        />
                        <path
                          d="M20.25 10.74 16.5 8.6 13.1 12l3.4 3.4 3.75-2.14c.94-.54.94-1.98 0-2.52z"
                          fill="#00B0FF"
                        />
                      </svg>
                      <div className="flex flex-col text-left">
                        <span className="text-[11px] font-medium uppercase tracking-wider text-neutral-400">
                          GET IT ON
                        </span>
                        <span className="text-base font-semibold text-white">
                          Google Play
                        </span>
                      </div>
                    </Link>

                    {/* Apple App Store Button */}
                    <button
                      type="button"
                      onClick={() => setShowIosAlert((prev) => !prev)}
                      className="group relative inline-flex items-center gap-3.5 rounded-2xl bg-neutral-900 px-6 py-3.5 shadow-xl transition-all duration-300 hover:bg-neutral-800 hover:scale-105 hover:shadow-2xl hover:shadow-primary-500/20 cursor-pointer"
                    >
                      <svg
                        className="size-7 shrink-0 fill-white transition-transform duration-300 group-hover:scale-110"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.84c.64-.78 1.08-1.86.96-2.95-1 .04-2.16.66-2.83 1.44-.59.67-1.11 1.77-.97 2.82 1.13.09 2.22-.55 2.84-1.31z" />
                      </svg>
                      <div className="flex flex-col text-left">
                        <span className="text-[11px] font-medium uppercase tracking-wider text-neutral-400">
                          DOWNLOAD ON THE
                        </span>
                        <span className="text-base font-semibold text-white">
                          App Store
                        </span>
                      </div>
                    </button>
                  </div>

                  {/* iOS App Store: Coming Soon Badge */}
                  {showIosAlert && (
                    <div className="animate-in fade-in zoom-in-95 duration-200 mt-2 flex items-center gap-2.5 rounded-full border border-emerald-900/40 bg-[#0f2c1f] px-5 py-2 text-sm font-medium text-emerald-400 shadow-lg">
                      <svg
                        className="size-4 shrink-0 stroke-emerald-400"
                        viewBox="0 0 24 24"
                        fill="none"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                      <span className="font-semibold text-white">
                        iOS App Store: <span className="text-emerald-300 font-normal">Coming Soon!</span>
                      </span>
                    </div>
                  )}
                </div>
              </RevealAnimation>
            </div>

            <div
              className="absolute bottom-0 left-0 z-10 h-[300px] w-full rounded-b-[20px] lg:h-[390px]"
              style={{
                background:
                  'linear-gradient(180deg, rgba(255, 255, 255, 0) -59.75%, rgba(255, 255, 255, 0.5) -10.1%, rgba(255, 255, 255, 0.8) 30.12%, #fff 70.98%)',
              }}
            />
          </div>
        </div>
      </RevealAnimation>
    </section>
  );
};

export default CTA;
