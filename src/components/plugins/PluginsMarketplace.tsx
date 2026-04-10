'use client';

import { useState } from 'react';
import { pluginCategories, plugins } from '@/data/plugins-data';
import PluginCard from './PluginCard';
import RevealAnimation from '@/components/animation/RevealAnimation';
import { Search, Filter } from 'lucide-react';

const PluginsMarketplace = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Plugins');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPlugins = plugins.filter((plugin) => {
    const matchesCategory = selectedCategory === 'All Plugins' || plugin.category === selectedCategory;
    const matchesSearch = plugin.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          plugin.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="py-20 bg-background-2 dark:bg-background-9">
      <div className="main-container">
        <div className="grid grid-cols-12 gap-10">
          
          {/* Sidebar - Categories */}
          <aside className="col-span-12 lg:col-span-3">
            <RevealAnimation delay={0.1} direction="left">
              <div className="sticky top-32 space-y-8">
                <div>
                  <h2 className="text-xl font-semibold text-secondary dark:text-accent mb-6 flex items-center gap-2">
                    <Filter size={20} />
                    Categories
                  </h2>
                  <nav className="flex flex-wrap gap-2 lg:flex-col lg:gap-1">
                    {pluginCategories.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`text-left px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                          selectedCategory === cat
                            ? 'bg-ns-linen text-white shadow-lg shadow-ns-linen/20'
                            : 'text-secondary/60 dark:text-accent/60 hover:bg-ns-ivory dark:hover:bg-background-7 hover:text-ns-linen'
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </nav>
                </div>

                {/* Info Box */}
                <div className="hidden lg:block p-6 rounded-3xl bg-secondary dark:bg-background-6 text-white overflow-hidden relative">
                  <div className="relative z-10">
                    <h4 className="font-semibold mb-2">Need a custom plugin?</h4>
                    <p className="text-xs text-white/70 mb-4">
                      Our expert developers can build custom integrations for your unique business needs.
                    </p>
                    <button className="text-xs font-bold underline hover:text-white/90">
                      Contact support
                    </button>
                  </div>
                  {/* Decorative background circle */}
                  <div className="absolute -bottom-10 -right-10 size-32 bg-ns-linen/10 rounded-full blur-2xl" />
                </div>
              </div>
            </RevealAnimation>
          </aside>

          {/* Main Content - Search & Grid */}
          <main className="col-span-12 lg:col-span-9">
            {/* Search Bar */}
            <RevealAnimation delay={0.2}>
              <div className="relative mb-10 group">
                <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-secondary/40 group-focus-within:text-ns-linen transition-colors" size={20} />
                <input
                  type="text"
                  placeholder="Search plugins, integrations, apps..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full h-14 pl-14 pr-6 rounded-[20px] bg-white dark:bg-background-7 border border-stroke-1 dark:border-white/10 outline-none focus:ring-2 focus:ring-ns-linen/20 focus:border-ns-linen transition-all text-secondary dark:text-accent"
                />
              </div>
            </RevealAnimation>

            {/* Plugin Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredPlugins.length > 0 ? (
                filteredPlugins.map((plugin, idx) => (
                  <RevealAnimation key={plugin.id} delay={0.1 + (idx % 6) * 0.05} scale={0.95}>
                    <PluginCard plugin={plugin} />
                  </RevealAnimation>
                ))
              ) : (
                <div className="col-span-full py-20 text-center">
                  <p className="text-lg text-secondary/50 dark:text-accent/50">
                    No plugins found matching your criteria.
                  </p>
                </div>
              )}
            </div>
          </main>

        </div>
      </div>
    </section>
  );
};

export default PluginsMarketplace;
