import React from 'react';

export default function ProstheticsHero() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#f0f0ee] dark:bg-[#060010] transition-colors duration-500">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover dark:invert transition-all duration-500"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260508_215831_c6a8989c-d716-4d8d-8745-e972a2eec711.mp4"
      />
      
      <div className="relative z-10 flex flex-col min-h-screen">
        <div className="flex-1 flex items-center px-6 sm:px-12 md:px-20 lg:px-28">
          <div className="max-w-md">
            <a href="#" className="inline-flex items-center gap-1.5 text-[11.5px] font-medium text-blue-500 hover:text-blue-600 transition-colors mb-4 group uppercase tracking-wider">
              LAUNCH YOUR STORE
              <span className="inline-block transition-transform duration-200 group-hover:translate-x-0.5">→</span>
            </a>
            
            <h1 className="text-[2rem] sm:text-[2.5rem] leading-[1.15] font-medium text-gray-900 dark:text-white tracking-tight mb-5 transition-colors duration-500">
              Start Selling Sooner.
            </h1>
            
            <div className="space-y-4 mb-6">
              <p className="text-[14px] text-gray-500 dark:text-gray-300 font-normal leading-relaxed transition-colors duration-500">
                Turn your idea into a fully functional online store designed to help you sell, grow, and build a brand customers love.
              </p>
              
              <p className="text-[14px] text-gray-500 dark:text-gray-300 font-normal leading-relaxed transition-colors duration-500">
                Whether you're launching your first product or expanding an existing business, CaartZee gives you everything you need to start selling online with confidence.
              </p>
              
              <p className="text-[14px] text-gray-900 dark:text-white font-medium transition-colors duration-500">
                Build your store. Launch your brand. Reach your customer.
              </p>
            </div>
            
            <a href="/contact-us" className="inline-flex items-center gap-2 text-[14px] font-medium text-blue-500 dark:text-blue-400 border border-blue-400 dark:border-blue-500 rounded-full px-6 py-3 hover:bg-blue-500 hover:text-white hover:border-blue-500 dark:hover:bg-blue-500 dark:hover:text-white transition-all duration-200 group shadow-sm">
              Launch Your Store
              <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
