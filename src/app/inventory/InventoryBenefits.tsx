"use client";

import { ShieldCheck, Zap, TrendingUp, Cpu } from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
    {
        icon: ShieldCheck,
        title: "Unmatched Accuracy",
        description: "Say goodbye to 'ghost stock' and overselling. Our AI ensures your inventory is 100% accurate across all channels, 24/7."
    },
    {
        icon: Zap,
        title: "Operational Velocity",
        description: "Automate repetitive stock updates. Reduced manual entry means your team focuses on growth, not spreadsheets."
    },
    {
        icon: TrendingUp,
        title: "Predictive Scaling",
        description: "Snap AI analyzes sales velocity to predict when you'll run out of stock, allowing you to restock just in time."
    },
    {
        icon: Cpu,
        title: "Seamless AI Integration",
        description: "Deep integration with WhatsApp and your e-commerce engine ensures shoppers always see real-time availability."
    }
];

const InventoryBenefits = () => {
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="p-8 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-purple-500/40 transition-all duration-300 shadow-sm hover:shadow-xl"
                >
                    <div className="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-500/10 flex items-center justify-center mb-6 border border-purple-200 dark:border-purple-500/20">
                        <benefit.icon className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">{benefit.title}</h3>
                    <p className="text-slate-600 dark:text-gray-400 text-sm leading-relaxed">
                        {benefit.description}
                    </p>
                </motion.div>
            ))}
        </div>
    );
};

export default InventoryBenefits;
