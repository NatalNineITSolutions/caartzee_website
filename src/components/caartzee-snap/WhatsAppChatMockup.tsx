'use client';

import React from 'react';
import { 
  Send, 
  Smile, 
  Paperclip, 
  MoreHorizontal, 
  CheckCheck,
  User,
  ShoppingBag
} from 'lucide-react';
import RevealAnimation from '../animation/RevealAnimation';

const WhatsAppChatMockup = () => {
  return (
    <div className="relative mx-auto w-full max-w-[600px] overflow-hidden rounded-[32px] bg-[#E5DDD5] shadow-2xl dark:bg-[#0B141A]">
      {/* WhatsApp Header */}
      <div className="flex items-center justify-between bg-[#075E54] p-4 text-white dark:bg-[#202C33]">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center font-bold">C</div>
          <div>
            <h4 className="text-sm font-bold">Caartzee Assistant</h4>
            <p className="text-[10px] opacity-80">Online • Active Now</p>
          </div>
        </div>
        <div className="flex gap-4 opacity-80">
          <MoreHorizontal size={20} />
        </div>
      </div>

      {/* Chat Area */}
      <div className="h-[450px] space-y-4 overflow-y-auto bg-[url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')] bg-repeat p-6 dark:bg-none dark:bg-[#0B141A]">
        
        {/* Date Tag */}
        <div className="flex justify-center">
          <span className="rounded-lg bg-white/50 px-3 py-1 text-[10px] font-bold uppercase text-secondary/60 dark:bg-white/5 dark:text-white/40">Today</span>
        </div>

        {/* Customer Message */}
        <div className="flex justify-end">
          <div className="max-w-[80%] rounded-2xl bg-[#DCF8C6] p-3 shadow-sm dark:bg-[#005C4B]">
            <p className="text-sm text-secondary dark:text-white">Hi! I'm looking for the new iPhone 15 Pro Max. Do you have it in stock?</p>
            <div className="mt-1 flex items-center justify-end gap-1">
              <span className="text-[10px] opacity-40">10:24 AM</span>
              <CheckCheck size={14} className="text-blue-500" />
            </div>
          </div>
        </div>

        {/* AI Assistant Message */}
        <div className="flex justify-start">
          <div className="max-w-[85%] rounded-2xl bg-white p-3 shadow-sm dark:bg-[#202C33]">
            <p className="text-sm text-secondary dark:text-white">Yes, we certainly do! We have the 256GB and 512GB models available in Natural Titanium. 📱</p>
            
            {/* Product Card Inside Chat */}
            <div className="mt-3 overflow-hidden rounded-xl border border-stroke-1 bg-background-3 dark:border-white/10 dark:bg-black/20">
              <div className="h-32 bg-gray-200 dark:bg-white/5 flex items-center justify-center">
                 <ShoppingBag size={40} className="text-primary-500/20" />
              </div>
              <div className="p-3">
                <p className="text-xs font-bold dark:text-white">iPhone 15 Pro Max</p>
                <p className="text-[10px] text-green-600 font-bold">₹1,59,900</p>
                <button className="mt-2 w-full rounded-lg bg-[#25D366] py-1.5 text-[10px] font-bold text-white transition-all hover:bg-[#128C7E]">
                  Add to Cart
                </button>
              </div>
            </div>

            <div className="mt-2 flex items-center justify-end">
              <span className="text-[10px] opacity-40">10:25 AM</span>
            </div>
          </div>
        </div>

        {/* Customer Typing */}
        <div className="flex justify-start">
          <div className="rounded-full bg-white px-4 py-2 text-[10px] italic text-secondary/40 shadow-sm dark:bg-[#202C33]">
            Great! I'll take the 256GB one...
          </div>
        </div>
      </div>

      {/* Input Area */}
      <div className="bg-[#F0F2F5] p-3 dark:bg-[#202C33]">
        <div className="flex items-center gap-3">
          <Smile size={24} className="text-secondary/40" />
          <Paperclip size={24} className="text-secondary/40" />
          <div className="flex-1 rounded-xl bg-white px-4 py-2.5 text-sm dark:bg-[#2A3942] dark:text-white">
            Type a message
          </div>
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#00A884] text-white">
            <Send size={18} fill="currentColor" />
          </div>
        </div>
      </div>
    </div>
  );
};

WhatsAppChatMockup.displayName = 'WhatsAppChatMockup';
export default WhatsAppChatMockup;
