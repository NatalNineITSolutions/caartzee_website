import LinkButton from "@/components/ui/button/Button";
import { Link } from "lucide-react";

const GrowthCTA = () => {
  return (
    <section className="py-[120px] text-center">
      <div className="main-container">
        <h2 className="text-heading-2 font-normal dark:text-accent">
          Ready to Unlock Your Growth Potential?
        </h2>

        <p className="mx-auto mt-6 max-w-[600px] text-secondary dark:text-accent/80">
          Stop guessing. Start growing with data-driven clarity powered by
          Caartzee.
        </p>

        <LinkButton href="/pricing" 
          className="mt-8 rounded-full bg-black dark:bg-white px-8 py-4 text-white dark:text-black hover:bg-black/80 dark:hover:bg-white/80 transition-colors">
          Start Free Trial
        </LinkButton>
      </div>
    </section>
  );
};

export default GrowthCTA;
