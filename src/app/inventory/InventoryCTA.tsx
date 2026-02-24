import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const InventoryCTA = () => {
  return (
    <section className="relative py-20 px-6 overflow-hidden">
      {/* Background Gradient Glow - Theme Aware */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-indigo-500/10 dark:from-purple-900/40 dark:via-black dark:to-indigo-900/40 blur-3xl opacity-40 -z-0" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative max-w-4xl mx-auto text-center bg-white dark:bg-white/5 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl"
      >
        {/* Heading */}
        <h3 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white leading-tight">
          Never Miss a Sale Again.
        </h3>

        {/* Subtext */}
        <p className="text-slate-600 dark:text-gray-400 max-w-2xl mx-auto mb-10 text-lg md:text-xl leading-relaxed">
          Gain complete control over your inventory, reduce stockouts,
          and optimize your supply chain with real-time insights.
          Smarter inventory means higher profits.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-5">
          <button
            className="group px-10 py-4 rounded-full bg-purple-600 hover:bg-purple-700 
                       text-white font-extrabold transition-all duration-300 
                        
                       flex items-center justify-center gap-2 text-lg"
          >
            Start Managing Smarter
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            className="px-10 py-4 rounded-full border border-slate-300 dark:border-white/20 
                       hover:border-purple-500 hover:text-purple-600 dark:hover:text-purple-400 
                       bg-white dark:bg-white/5 text-slate-800 dark:text-gray-300 transition-all duration-300 
                       font-bold text-lg shadow-sm hover:shadow-md"
          >
            Schedule a Demo
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default InventoryCTA;
