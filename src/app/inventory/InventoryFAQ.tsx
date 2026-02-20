"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
    {
        question: "How fast is the inventory synchronization?",
        answer: "Synchronization happens in real-time. As soon as a purchase is made on WhatsApp or your connected store, the stock levels are updated across all channels in less than 50ms."
    },
    {
        question: "Does it support multiple e-commerce platforms?",
        answer: "Yes! Caartzee Snap integrates with Shopify, WooCommerce, Magento, and custom internal systems to ensure global stock parity."
    },
    {
        question: "How accurate is the AI demand forecasting?",
        answer: "Our engine targets 94%+ accuracy by processing historical sales data, seasonal trends, and current market velocity to predict your restocking needs."
    },
    {
        question: "Can I set custom low-stock thresholds?",
        answer: "Absolutely. You can define global thresholds or set specific alerts for individual high-value products to ensure you never miss a sale."
    }
];

const InventoryFAQ = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    return (
        <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
                <div
                    key={index}
                    className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 overflow-hidden shadow-sm"
                >
                    <button
                        onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                        className="w-full h-full flex items-center justify-between p-6 text-left hover:bg-slate-50 dark:hover:bg-white/5 transition-colors"
                    >
                        <span className="font-bold text-slate-800 dark:text-white pr-8">{faq.question}</span>
                        <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`} />
                    </button>

                    <AnimatePresence>
                        {activeIndex === index && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="px-6 pb-6 text-slate-600 dark:text-gray-400 border-t border-slate-100 dark:border-white/5 pt-4">
                                    {faq.answer}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            ))}
        </div>
    );
};

export default InventoryFAQ;
