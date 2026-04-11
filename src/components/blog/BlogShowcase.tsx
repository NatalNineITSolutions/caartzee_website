import { IBlogPost } from '@/interface';
import getMarkDownData from '@/utils/getMarkDownData';
import RevealAnimation from '../animation/RevealAnimation';
import PaginationWrapper from './PaginationWrapper';

const BlogShowcase = () => {
  const blogs = getMarkDownData<IBlogPost & { [key: string]: unknown }>('src/data/blogs', true, 'date');

  return (
    <section className="py-14 md:py-16 lg:py-[88px] xl:py-[100px]">
      <div className="main-container">
        <div className="mb-10 space-y-3 text-center md:mb-[70px]">
          <RevealAnimation delay={0.1}>
            <h2>
              Grow your online store.<br />
              <span className="text-primary-500 inline-block text-heading-6 font-normal mt-2">Learn the tips and tricks from experts.</span>
            </h2>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <p className="mx-auto max-w-[738px]">
              Discover expert strategies for scaling your business, optimizing your store, and reaching more customers.
            </p>
          </RevealAnimation>
        </div>

        {/* Blog grid with pagination wrapper */}
        <PaginationWrapper blogs={blogs} />
      </div>
    </section>
  );
};

BlogShowcase.displayName = 'BlogShowcase';
export default BlogShowcase;
