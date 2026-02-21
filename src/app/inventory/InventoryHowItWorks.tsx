"use client";

import { motion } from "framer-motion";

const steps = [
    {
        number: "01",
        title: "Sync Your Catalog",
        description: "Connect your WhatsApp shop and e-commerce platforms. Our AI indexes your entire catalog in seconds."
    },
    {
        number: "02",
        title: "AI Analysis",
        description: "The Snap AI engine begins real-time tracking of sales velocity, customer reach, and restocking patterns."
    },
    {
        number: "03",
        title: "Automated Presence",
        description: "Sit back as the system autonomously updates stock, sends alerts, and generates demand forecasts."
    }
];

const InventoryHowItWorks = () => {
    return (
        <div className="grid md:grid-cols-3 gap-12">
            {steps.map((step, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="relative group p-6 rounded-3xl hover:bg-slate-50 dark:hover:bg-white/[0.02] transition-colors duration-500"
                >
                    <div className="text-7xl font-black text-purple-600/10 dark:text-purple-400/10 mb-8 select-none group-hover:text-purple-600/20 dark:group-hover:text-purple-400/20 transition-colors duration-500">
                        {step.number}
                    </div>
                    <div className="relative z-10">
                        <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                            {step.title}
                        </h3>
                        <p className="text-slate-600 dark:text-gray-400 leading-relaxed text-base">
                            {step.description}
                        </p>
                    </div>
                    {index < steps.length - 1 && (
                        <div className="hidden lg:block absolute top-16 right-[-20%] w-1/3 h-[1px] bg-gradient-to-r from-purple-500/30 to-transparent -z-0" />
                    )}
                </motion.div>
            ))}
        </div>
    );
};

export default InventoryHowItWorks;
