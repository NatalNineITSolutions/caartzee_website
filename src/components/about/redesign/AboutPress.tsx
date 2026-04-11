'use client';
import RevealAnimation from '@/components/animation/RevealAnimation';
import Link from 'next/link';

const pressReleases = [
  {
    logo: 'TECHCRUNCH',
    date: 'September 12, 2025',
    title: 'Caartzee raises $15 million to empower small retailers in emerging markets.',
    link: '#',
    color: 'bg-[#E8F5E9]',
    textColor: 'text-green-700',
  },
  {
    logo: 'BUSINESS INSIDER',
    date: 'August 24, 2025',
    title: 'How Caartzee is redefining the omnichannel experience for modern storefronts.',
    link: '#',
    color: 'bg-[#FFF3E0]',
    textColor: 'text-orange-700',
  },
  {
    logo: 'FORBES',
    date: 'July 05, 2025',
    title: 'Caartzee named one of the fastest-growing retail-tech startups of the year.',
    link: '#',
    color: 'bg-[#E3F2FD]',
    textColor: 'text-blue-700',
  },
];

const AboutPress = () => {
  return (
    <section className="py-24 bg-[#F9FAFB] dark:bg-background-7">
      <div className="main-container">
        <div className="text-center mb-16">
          <RevealAnimation>
            <h2 className="text-[32px] md:text-[40px] font-bold text-secondary dark:text-accent">Press Releases</h2>
          </RevealAnimation>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pressReleases.map((press, index) => (
            <RevealAnimation key={press.title} delay={0.1 * index}>
              <div className="flex flex-col h-full bg-white rounded-2xl border border-stroke-1 p-6 transition-all hover:shadow-lg dark:bg-background-8 dark:border-white/10">
                <div className={`mb-8 flex h-24 items-center justify-center rounded-xl ${press.color}`}>
                  <span className={`text-xl font-black tracking-tighter ${press.textColor}`}>{press.logo}</span>
                </div>
                
                <p className="text-sm font-medium text-secondary/40 dark:text-accent/40">{press.date}</p>
                <h3 className="mt-2 flex-grow text-lg font-bold leading-snug text-secondary dark:text-accent">
                  {press.title}
                </h3>
                
                <Link 
                  href={press.link} 
                  className="mt-6 text-sm font-bold text-primary-500 hover:text-primary-600 transition-colors inline-flex items-center gap-1 group"
                >
                  Read more
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </Link>
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

AboutPress.displayName = 'AboutPress';
export default AboutPress;
