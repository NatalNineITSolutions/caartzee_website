'use client';
import RevealAnimation from '@/components/animation/RevealAnimation';
import LinkButton from '@/components/ui/button/LinkButton';
import { IPosition } from '@/interface';
import logo from '@public/images/shared/main-1.png';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { ExternalLink, Globe, MapPin, Users, TrendingUp, Briefcase, Twitter, Linkedin, Facebook, ChevronDown } from 'lucide-react';

const CareerJobBoard = ({ positions }: { positions: (IPosition & { [key: string]: unknown })[] }) => {
  const [activeTab, setActiveTab] = useState('Jobs');

  const tabs = ['Overview', 'People', 'Culture', 'Funding', 'Jobs'];

  return (
    <div className="bg-background-3 dark:bg-background-5 min-h-screen pt-24 pb-20">
      <div className="main-container max-w-[1240px]">
        {/* Breadcrumbs */}
        <nav className="mb-8 flex text-[13px] text-secondary/50 dark:text-accent/50">
          <Link href="/" className="hover:text-primary-500">Discover</Link>
          <span className="mx-2">/</span>
          <Link href="/career" className="hover:text-primary-500">Startups</Link>
          <span className="mx-2">/</span>
          <span className="font-medium text-secondary dark:text-accent">Caartzee</span>
        </nav>

        {/* Header Section */}
        <div className="dark:bg-background-6 mb-10 rounded-2xl bg-white p-8 shadow-sm ring-1 ring-stroke-1 dark:ring-stroke-6">
          <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:items-start">
            <div className="flex flex-col items-center gap-6 md:flex-row md:items-start">
              <div className="size-24 overflow-hidden rounded-2xl bg-primary-50 p-4 shadow-sm ring-1 ring-primary-100 dark:bg-background-7 dark:ring-stroke-6 md:size-28">
                <Image src={logo} alt="Caartzee Logo" className="h-full w-full object-contain" />
              </div>
              <div className="space-y-3 text-center md:text-left">
                <h1 className="text-heading-3 font-bold tracking-tight">Caartzee</h1>
                <p className="max-w-xl text-tagline-1 text-secondary/70 dark:text-accent/70">
                  We&apos;re building the future of digital commerce infrastructure, empowering entrepreneurs to launch and grow effortlessly.
                </p>
                <div className="flex justify-center md:justify-start">
                  <span className="badge badge-green flex items-center gap-1 px-3 py-1 font-medium !normal-case tracking-wide">
                    <TrendingUp className="size-3" /> growth stage
                  </span>
                </div>
              </div>
            </div>
            <div className="flex w-full flex-wrap items-center justify-center gap-3 md:w-auto md:justify-end">
              <button className="btn btn-outline btn-md !normal-case w-full flex-1 gap-2 md:w-auto">
                share
              </button>
              <button className="btn btn-outline btn-md !normal-case w-full flex-1 gap-2 md:w-auto">
                <span className="text-secondary dark:text-accent">+</span> follow
              </button>
              <button className="btn btn-primary hover:btn-secondary dark:hover:btn-white-dark dark:btn-white btn-md !normal-case min-w-[180px] px-10">
                <span>create job alert</span>
              </button>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mb-10 border-b border-stroke-1 dark:border-stroke-6">
          <div className="flex flex-wrap gap-4 md:gap-8">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-tagline-2 relative pb-4 font-medium transition-all md:text-tagline-1 ${
                  activeTab === tab
                    ? 'text-primary-500 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-primary-500'
                    : 'text-secondary/50 hover:text-secondary dark:text-accent/50 dark:hover:text-accent'
                }`}
              >
                {tab}
                {tab === 'Jobs' && positions && (
                  <span className="ml-2 rounded-full bg-primary-50 px-2.5 py-0.5 text-[11px] font-bold text-primary-500 dark:bg-background-7">
                    {positions.length}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          {/* Main Column */}
          <div className="lg:col-span-3">
            <RevealAnimation delay={0.1}>
              <div className="space-y-8">
                {activeTab === 'Jobs' ? (
                  <>
                    <div className="flex items-center justify-between">
                      <h2 className="text-heading-6 font-semibold">Jobs at Caartzee</h2>
                      <div className="flex gap-2">
                        {/* Filters could go here like in the image */}
                      </div>
                    </div>

                    {positions && positions.length > 0 ? (
                      <div className="space-y-4">
                        {positions.map((job, index) => (
                          <div
                            key={job.slug}
                            className="dark:bg-background-6 group flex flex-col items-center justify-between gap-6 rounded-2xl bg-white p-6 ring-1 ring-stroke-1 transition-all hover:shadow-lg dark:ring-stroke-6 sm:flex-row"
                          >
                            <div className="flex w-full gap-5 sm:w-auto">
                              <div className="size-14 flex-shrink-0 rounded-xl bg-primary-50 p-2 ring-1 ring-primary-100 dark:bg-background-7 dark:ring-stroke-6">
                                <Image src={logo} alt="Company" className="h-full w-full object-contain" />
                              </div>
                              <div>
                                <Link href={`/career/${job.slug}`} className="text-lg font-bold transition-all hover:text-primary-500">
                                  {job.title}
                                </Link>
                                <div className="mt-1 flex flex-wrap gap-x-4 gap-y-1 text-xs text-secondary/50 dark:text-accent/50">
                                  <span className="font-medium text-secondary/70 dark:text-accent/70">Caartzee</span>
                                  <span>• {job.location}</span>
                                  <span>• {job.offeredSalary || '$100k - $150k'}</span>
                                  <span>• {job.datePosted || '1 week ago'}</span>
                                </div>
                              </div>
                            </div>
                            <div className="flex w-full items-center gap-3 sm:w-auto">
                              <button className="btn btn-outline btn-sm !normal-case min-w-[70px] flex-1 sm:flex-initial">save</button>
                              <LinkButton href={`/career/${job.slug}`} className="btn btn-primary btn-sm !normal-case min-w-[80px] flex-1 sm:flex-initial">
                                apply
                              </LinkButton>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="dark:bg-background-6 flex flex-col items-center justify-center rounded-2xl bg-white py-20 px-6 text-center shadow-sm">
                        <div className="mb-4 text-secondary/40">
                          <Briefcase className="size-12" />
                        </div>
                        <h3 className="text-heading-6 font-semibold">Caartzee hasn&apos;t added any jobs yet</h3>
                        <p className="mt-2 text-secondary/60 dark:text-accent/60">
                          Get notified when Caartzee posts new jobs.
                        </p>
                        <div className="mt-6 flex gap-3">
                          <button className="btn btn-outline btn-md">See similar jobs</button>
                          <button className="btn btn-primary btn-md">Create job alert</button>
                        </div>
                      </div>
                    )}

                    {/* Recommended Jobs */}
                    <div className="mt-12">
                      <h3 className="text-heading-6 mb-6 font-semibold">Recommended Jobs At Similar Companies</h3>
                      <div className="space-y-4 opacity-70">
                        {/* Placeholder Recommended Jobs */}
                        {[1, 2, 3].map((i) => (
                          <div
                            key={i}
                            className="dark:bg-background-6 flex flex-col items-center justify-between gap-6 rounded-2xl bg-white p-5 ring-1 ring-stroke-1 dark:ring-stroke-6 sm:flex-row"
                          >
                            <div className="flex w-full gap-4 sm:w-auto">
                              <div className="bg-background-3 h-12 w-12 flex-shrink-0 animate-pulse rounded-lg dark:bg-background-7"></div>
                              <div className="space-y-2">
                                <div className="bg-background-3 h-4 w-48 animate-pulse rounded dark:bg-background-7"></div>
                                <div className="bg-background-3 h-3 w-32 animate-pulse rounded dark:bg-background-7"></div>
                              </div>
                            </div>
                            <div className="flex w-full items-center gap-2 sm:w-auto">
                              <div className="bg-background-3 h-8 w-16 animate-pulse rounded dark:bg-background-7"></div>
                              <div className="bg-background-3 h-8 w-20 animate-pulse rounded dark:bg-background-7"></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                ) : activeTab === 'Overview' ? (
                  <div className="dark:bg-background-6 space-y-8 rounded-2xl bg-white p-8 ring-1 ring-stroke-1 dark:ring-stroke-6">
                     <h3 className="text-heading-5 font-semibold">About Caartzee</h3>
                     <p>At Caartzee, we’re building more than just a platform — we’re creating the infrastructure that empowers startups, creators, and businesses to turn ideas into scalable digital products. Our mission is simple: make powerful technology accessible, beautiful, and effortless to use.</p>
                     
                     <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        <div className="space-y-4">
                           <h4 className="font-semibold text-primary-500">Ownership & Impact</h4>
                           <p className="text-sm">Work on meaningful products used by real businesses. Your ideas and contributions directly shape the future of Caartzee.</p>
                        </div>
                        <div className="space-y-4">
                           <h4 className="font-semibold text-primary-500">Modern Tech Stack</h4>
                           <p className="text-sm">Build with cutting-edge technologies including scalable backend systems, modern frontend frameworks, and cloud infrastructure.</p>
                        </div>
                     </div>
                  </div>
                ) : (
                   <div className="dark:bg-background-6 flex h-60 items-center justify-center rounded-2xl bg-white p-8 ring-1 ring-stroke-1 dark:ring-stroke-6">
                      <p className="text-secondary/60">Content for {activeTab} will be available soon.</p>
                   </div>
                )}
              </div>
            </RevealAnimation>
          </div>

          {/* Sidebar Column */}
          <div className="lg:col-span-1">
            <RevealAnimation delay={0.2}>
              <div className="space-y-6">
                <div className="dark:bg-background-6 space-y-6 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-stroke-1 dark:ring-stroke-6">
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-secondary/50 dark:text-accent/50">About Caartzee</h4>
                  
                  <div className="space-y-4">
                    <div className="group">
                      <p className="text-xs text-secondary/40 dark:text-accent/40">Website</p>
                      <a href="https://caartzee.com" className="hover:text-primary-500 flex items-center gap-2 text-sm font-medium transition-all">
                        caartzee.com <ExternalLink className="size-3" />
                      </a>
                    </div>

                    <div className="flex items-center gap-4 pt-2">
                       <Twitter className="size-5 cursor-pointer text-secondary/40 hover:text-primary-500 dark:text-accent/40" />
                       <Linkedin className="size-5 cursor-pointer text-secondary/40 hover:text-primary-500 dark:text-accent/40" />
                       <Facebook className="size-5 cursor-pointer text-secondary/40 hover:text-primary-500 dark:text-accent/40" />
                    </div>

                    <hr className="border-stroke-1 dark:border-stroke-6" />

                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <MapPin className="mt-1 size-4 text-secondary/40" />
                        <div>
                          <p className="text-xs text-secondary/40 dark:text-accent/40">Location</p>
                          <p className="text-sm font-medium">Global (Remote)</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <Users className="mt-1 size-4 text-secondary/40" />
                        <div>
                          <p className="text-xs text-secondary/40 dark:text-accent/40">Company size</p>
                          <p className="text-sm font-medium">11-50 people</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <TrendingUp className="mt-1 size-4 text-secondary/40" />
                        <div>
                          <p className="text-xs text-secondary/40 dark:text-accent/40">Total raised</p>
                          <p className="text-sm font-medium">$2.5M</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <Briefcase className="mt-1 size-4 text-secondary/40" />
                        <div>
                          <p className="text-xs text-secondary/40 dark:text-accent/40">Company type</p>
                          <span className="badge badge-gray-light text-[10px]">B2B SaaS</span>
                        </div>
                      </div>
                    </div>

                    <hr className="border-stroke-1 dark:border-stroke-6" />

                    <div>
                      <p className="mb-2 text-xs text-secondary/40 dark:text-accent/40">Markets</p>
                      <div className="flex flex-wrap gap-2">
                        <span className="badge badge-gray-light text-[10px]">eCommerce</span>
                        <span className="badge badge-gray-light text-[10px]">SaaS</span>
                        <span className="badge badge-gray-light text-[10px]">Innovation</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Additional Sidebar Info */}
                <div className="dark:bg-background-6 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-stroke-1 dark:ring-stroke-6">
                   <h4 className="mb-4 text-sm font-semibold">Join the team</h4>
                   <p className="mb-4 text-sm text-secondary/60 dark:text-accent/60">
                      We&apos;re always looking for talented individuals to join our mission.
                   </p>
                   <button className="btn btn-primary btn-sm w-full">View Values</button>
                </div>
              </div>
            </RevealAnimation>
          </div>
        </div>

        {/* Footer Dropdowns (Simplified like reference) */}
        <div className="mt-20 flex flex-wrap justify-center gap-4">
           {['Featured Lists', 'Remote Jobs', 'Jobs by Location', 'Jobs by Role'].map((item) => (
              <div key={item} className="dark:bg-background-6 flex items-center gap-2 rounded-lg bg-white px-4 py-2 ring-1 ring-stroke-1 dark:ring-stroke-6">
                 <span className="text-sm font-medium">{item}</span>
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4 opacity-40">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                 </svg>
              </div>
           ))}
        </div>
      </div>
    </div>
  );
};

export default CareerJobBoard;
