import { IBlogPost } from '@/interface';
import { cn } from '@/utils/cn';
import getMarkDownData from '@/utils/getMarkDownData';
import RevealAnimation from '../animation/RevealAnimation';
import BlogCardV2 from '../shared/card/BlogCardV2';
import BlogCardV3 from '../shared/card/BlogCardV3';

const blogs: IBlogPost[] = getMarkDownData<IBlogPost & { [key: string]: unknown }>('src/data/blogs').slice(8, 11);

interface SalesBlogProps {
  badgeClass?: string;
}

const SalesBlog = ({ badgeClass }: SalesBlogProps) => {
  return (
    <section className="bg-background-2 dark:bg-background-5 py-[50px] md:py-[100px] lg:py-[75px] xl:py-[100px]">
      <div className="main-container">
        <div className="space-y-[70px]">
          {/* heading */}
          <div className="text-center">
            <RevealAnimation delay={0.1}>
              <span className={cn(badgeClass, 'badge badge-green mb-5')} aria-label="Section category">
                Sales insights & updates
              </span>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h2 id="sales-blog-heading" className="mb-3">
                Latest trends in smart selling
              </h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p>
                Explore expert strategies, AI‑powered tools, and marketplace updates to help you sell smarter and scale faster.
              </p>
            </RevealAnimation>
          </div>
          {/* blog section */}
          <div className="grid grid-cols-12 justify-center gap-y-8 lg:gap-x-8">
            <RevealAnimation delay={0.4}>
              <BlogCardV2 blog={blogs[0]} />
            </RevealAnimation>
            <div className="col-span-12 lg:col-span-7 xl:col-span-6">
              <div className="flex flex-col gap-y-8">
                <RevealAnimation delay={0.5}>
                  <BlogCardV3 blog={blogs[1]} />
                </RevealAnimation>
                <RevealAnimation delay={0.6}>
                  <BlogCardV3 blog={blogs[2]} />
                </RevealAnimation>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

SalesBlog.displayName = 'SalesBlog';
export default SalesBlog;
