import LinkButton from "@/components/ui/button/Button";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

const InventoryHeader = () => {
  return (
    <section className="relative py-12 text-center overflow-hidden">
      {/* Background Glow - Theme Aware */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-indigo-500/10 dark:from-purple-900/30 dark:via-black dark:to-indigo-900/30 blur-3xl opacity-40 -z-10" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative max-w-4xl mx-auto"
      >
        {/* Badge */}
        <div className="flex justify-center mb-8">
          <span className="flex items-center gap-2 px-5 py-2 text-xs font-bold tracking-widest uppercase rounded-full 
                         bg-purple-100 dark:bg-purple-500/10 text-purple-700 dark:text-purple-400 border border-purple-200 dark:border-purple-500/20 backdrop-blur-md">

            New: Predictive Restocking AI
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8 tracking-tight text-slate-900 dark:text-white">
          Next-Gen <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 dark:from-purple-400 dark:via-green-400 dark:to-blue-400">Inventory</span> Intelligence.
        </h1>

        {/* Description */}
        <p className="text-slate-600 dark:text-gray-400 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed mb-12">
          Empower your business with real-time global synchronization, autonomous stock management,
          and AI-driven demand forecasting. Stop managing stock — start predicting success.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <LinkButton
            href="https://cartly.zeedone.com/register"
            className="group px-10 py-4 rounded-full bg-purple-600 hover:bg-purple-700 
                       text-white font-semibold transition-all duration-300 
                        hover:shadow-purple-600/50 
                       flex items-center justify-center gap-3 text-lg"
          >
            Start Managing Free

          </LinkButton>

        </div>

        {/* Trust Indicators */}
        <div className="mt-16 flex flex-col items-center gap-4">
          <span className="text-xs font-bold tracking-widest uppercase text-slate-500 dark:text-gray-500">Trusted by Global Brands</span>
          <div className="h-px w-24 bg-slate-200 dark:bg-gray-800" />
        </div>
      </motion.div>
    </section>
  );
};

export default InventoryHeader;