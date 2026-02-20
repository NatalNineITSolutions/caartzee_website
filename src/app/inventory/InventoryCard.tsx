import { motion } from "framer-motion";
import { LucideIcon, ArrowRight } from "lucide-react";

interface InventoryCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  highlight?: string;
  ctaText?: string;
  onClick?: () => void;
}

const InventoryCard = ({
  icon: Icon,
  title,
  description,
  highlight,
  ctaText = "Learn More",
  onClick,
}: InventoryCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true }}
      className="group relative p-8 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 
                 shadow-sm hover:shadow-xl hover:border-purple-500/40 dark:hover:shadow-purple-500/10
                 transition-all duration-300 cursor-pointer overflow-hidden"
      onClick={onClick}
    >
      {/* Glow Background Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-500/10 dark:bg-purple-500/20 blur-3xl rounded-full" />
      </div>

      {/* Icon */}
      <div className="relative z-10 mb-6">
        <div className="w-14 h-14 flex items-center justify-center rounded-xl 
                        bg-purple-50 dark:bg-purple-500/10 
                        border border-purple-100 dark:border-purple-500/20
                        group-hover:border-purple-500/30 transition-colors">
          <Icon className="w-7 h-7 text-purple-600 dark:text-purple-400" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition">
          {title}
        </h3>

        {highlight && (
          <p className="text-purple-600 dark:text-purple-400 text-sm font-semibold mb-2 uppercase tracking-wide">
            {highlight}
          </p>
        )}

        <p className="text-slate-600 dark:text-gray-400 text-sm leading-relaxed mb-6">
          {description}
        </p>

        {/* CTA */}
        <div className="flex items-center text-sm font-bold text-purple-600 dark:text-purple-400 group-hover:text-purple-800 dark:group-hover:text-white transition">
          {ctaText}
          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </motion.div>
  );
};

export default InventoryCard;
