'use client';
import Image from 'next/image';
import Link from 'next/link';
import RevealAnimation from '@/components/animation/RevealAnimation';
import SocialIcon, { Platform } from '@/components/shared/SocialIcon';

const teamMembers = [
  {
    name: 'Nivetha Muralidharan',
    role: 'Co-Founder',
    image: '/images/nivetha-muralidharan.jpg',
    social: {
      linkedin: 'https://in.linkedin.com/in/nivethamuralidharan',
      facebook: 'https://www.facebook.com/NivethaNewgen',
    },
    color: 'bg-[#E3F2FD]',
  },
  {
    name: 'Akhil Jinu',
    role: 'Founder & CTO',
    image: '/images/dummy-avatar.png',
    social: {
      linkedin: 'https://in.linkedin.com/in/akhiljinu',
      twitter: 'https://twitter.com',
    },
    color: 'bg-[#FBE9E7]',
  },
  {
    name: 'Megavarnan G',
    role: 'Strategic Advisor',
    image: '/images/Megavarnan-Govindaswamy.webp',
    social: {
      linkedin: 'https://in.linkedin.com/in/megavarnan',
    },
    color: 'bg-[#F3E5F5]',
  },
  {
    name: 'Lenin Royal',
    role: 'Head of Engineering',
    image: '/images/dummy-avatar.png',
    social: {
      linkedin: 'https://bd.linkedin.com/company',
    },
    color: 'bg-[#E8F5E9]',
  },
];

const AboutLeadership = () => {
  return (
    <section className="py-24 bg-white dark:bg-background-8">
      <div className="main-container">
        <div className="text-center mb-16">
          <RevealAnimation>
            <h2 className="text-[32px] md:text-[40px] font-bold text-secondary dark:text-accent">Our Leadership</h2>
          </RevealAnimation>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <RevealAnimation key={member.name} delay={0.1 * index}>
              <div className="group overflow-hidden rounded-2xl border border-stroke-1 bg-white p-4 transition-all hover:shadow-xl dark:border-white/10 dark:bg-background-7">
                <figure className={`mb-6 aspect-square overflow-hidden rounded-xl ${member.color}`}>
                  <Image 
                    src={member.image} 
                    alt={member.name} 
                    width={400} 
                    height={400} 
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </figure>
                <div className="text-center">
                  <h3 className="text-xl font-bold text-secondary dark:text-accent">{member.name}</h3>
                  <p className="mt-1 text-sm text-secondary/60 dark:text-accent/60 font-medium uppercase tracking-wider">{member.role}</p>
                  
                  <div className="mt-4 flex items-center justify-center gap-3">
                    {Object.entries(member.social).map(([platform, url]) => (
                      <Link 
                        key={platform} 
                        href={url} 
                        target="_blank" 
                        className="text-secondary/40 hover:text-primary-500 transition-colors dark:text-accent/40"
                      >
                        <div className="size-5">
                          <SocialIcon platform={platform as Platform} />
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </RevealAnimation>
          ))}

          {/* Joining Card */}
          {/* <RevealAnimation delay={0.4}>
              <div className="flex aspect-square flex-col items-center justify-center rounded-2xl border-2 border-dashed border-stroke-1 bg-primary-50/30 p-8 text-center transition-all hover:border-primary-500/50 dark:border-white/10 dark:bg-background-7/50">
                  <div className="mb-4 text-4xl">🚀</div>
                  <h3 className="text-xl font-bold text-secondary dark:text-accent">See yourself here?</h3>
                  <Link href="/career" className="mt-2 text-primary-500 font-semibold hover:underline">Join the Team!</Link>
              </div>
          </RevealAnimation> */}
        </div>
      </div>
    </section>
  );
};

AboutLeadership.displayName = 'AboutLeadership';
export default AboutLeadership;
