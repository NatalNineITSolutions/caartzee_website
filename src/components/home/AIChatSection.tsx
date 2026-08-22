import RevealAnimation from '../animation/RevealAnimation';
import Image from 'next/image';
import Link from 'next/link';

const AIChatSection = () => {
  return (
    <section className="bg-white dark:bg-background-8 pb-8 pt-8 md:pb-12 md:pt-12">
      <div className="main-container mx-auto w-[95%] sm:w-full">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-[#09090b] px-8 py-6 md:px-14 md:py-8 lg:flex lg:flex-row-reverse lg:items-stretch lg:justify-between border border-white/5 shadow-2xl">
          
          {/* Decorative floating ambient orbs */}
          <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-primary-600/20 rounded-full blur-[120px] -translate-x-1/4 -translate-y-1/4 pointer-events-none"></div>
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/15 rounded-full blur-[100px] translate-x-1/4 translate-y-1/4 pointer-events-none"></div>

          {/* Left side content (Now visually on Right) */}
          <div className="relative z-10 max-w-xl lg:w-[55%] flex flex-col justify-center gap-10 py-2">
            <RevealAnimation delay={0.1}>
              <div className="flex -space-x-4">
                {/* Simulated Icons using actual logos */}
                <div className="flex h-12 w-12 items-center justify-center rounded-full border-4 border-[#09090b] bg-white shadow-[0_0_20px_rgba(255,255,255,0.1)] overflow-hidden p-1.5 z-30">
                  <Image src="/images/icons/chatgpt.png" alt="ChatGPT" width={28} height={28} className="object-contain" />
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-full border-4 border-[#09090b] bg-white shadow-[0_0_20px_rgba(255,255,255,0.1)] overflow-hidden p-1.5 z-20">
                  <Image src="/images/icons/google.svg" alt="Google" width={28} height={28} className="object-contain" />
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-full border-4 border-[#09090b] bg-white shadow-[0_0_20px_rgba(255,255,255,0.1)] overflow-hidden p-1.5 z-10">
                  <Image src="/images/icons/meta.png" alt="Meta" width={28} height={28} className="object-contain" />
                </div>
              </div>
            </RevealAnimation>

            <div>
              <RevealAnimation delay={0.2}>
                <h2 className="mb-4 text-heading-4 md:text-heading-3 font-semibold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70">
                  Turn conversations into conversions
                </h2>
              </RevealAnimation>

              <RevealAnimation delay={0.3}>
                <p className="text-tagline-2 text-white/70 mb-6 md:mb-0 leading-relaxed max-w-lg">
                  Engage customers and close sales directly on WhatsApp and social channels. Let AI handle the automated responses and abandoned carts, so you don't lift a finger. All powered by <Link href="/caartzee-snap" className="text-primary-400 hover:text-primary-300 border-b border-primary-400/30 transition-colors">Caartzee Snap.</Link>
                </p>
              </RevealAnimation>
            </div>
          </div>

          {/* Right side Phone Mockup (Now visually on Left) */}
          <div className="relative mt-10 lg:mt-0 lg:w-1/2 flex justify-center lg:justify-center">
            <RevealAnimation delay={0.4}>
              <div className="w-full flex justify-center lg:justify-center relative lg:-translate-x-4 xl:-translate-x-8">
                
                {/* Premium Glow right behind the phone */}
                <div className="absolute top-1/2 left-1/2 lg:left-auto lg:right-10 -translate-x-1/2 lg:translate-x-0 -translate-y-1/2 w-[260px] h-[400px] bg-white/5 blur-[60px] rounded-[3rem] pointer-events-none"></div>

                <div className="relative z-10 w-full max-w-[220px] rounded-[2rem] border-[6px] border-[#18181b] bg-black shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] ring-1 ring-white/10 overflow-hidden aspect-[9/19]">
                   {/* Top notch dynamic island */}
                   <div className="absolute top-1.5 left-1/2 -translate-x-1/2 h-5 w-20 bg-black rounded-full z-20 flex justify-end items-center px-2">
                     <div className="size-1.5 rounded-full bg-white/20"></div>
                   </div>
                   
                   {/* Inner content */}
                   <div className="h-full w-full rounded-[1.6rem] bg-white overflow-hidden relative flex flex-col">
                     
                     {/* Dashboard Video */}
                     <div className="w-full h-[55%] bg-gray-100 relative overflow-hidden shadow-[0_2px_10px_rgba(0,0,0,0.05)_inset]">
                       <video 
                         src="/video/hey_instant_of_spofify_logo_pu.mp4" 
                         autoPlay 
                         loop 
                         muted 
                         playsInline 
                         className="object-cover w-full h-full"
                       />
                     </div>

                     {/* UI Card Content */}
                     <div className="p-4 flex-1 bg-white relative z-10 shadow-[-10px_0_20px_rgba(0,0,0,0.03)]">
                       <h3 className="text-sm font-semibold text-gray-900 tracking-tight">Live Business Dashboard</h3>
                       <div className="flex justify-between items-center mt-2">
                         <span className="text-[10px] font-medium text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-md">Real-time</span>
                         <span className="font-medium text-gray-900 text-sm">Growth</span>
                       </div>
                       <div className="mt-3 pt-3 border-t border-gray-100">
                         <h4 className="font-medium text-[11px] text-gray-900 mb-1">Track everything</h4>
                         <p className="text-[10px] text-gray-500 leading-relaxed">Monitor your total revenue, store performance, and sales intelligence.</p>
                       </div>
                     </div>
                   </div>
                </div>
              </div>
            </RevealAnimation>
            
            {/* Decorative background blur behind phone */}
            <div className="absolute top-1/2 right-10 -translate-y-1/2 translate-x-1/4 h-[500px] w-[500px] rounded-full bg-emerald-400/10 blur-[100px] pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIChatSection;
