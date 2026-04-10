'use client';
import { useState } from 'react';

const slogans = [
  "Building the future of {keyword}",
  "Your trusted partner in {keyword}",
  "Defining the essence of {keyword}",
  "Experience the best of {keyword}",
  "Simplified {keyword} for everyone",
  "The power of {keyword} in your hands",
  "Think {keyword}, think us",
  "Innovation meets {keyword}",
  "Where {keyword} becomes reality",
  "Simply the best for {keyword}",
];

const SloganMakerForm = () => {
  const [keyword, setKeyword] = useState('');
  const [generatedSlogans, setGeneratedSlogans] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setGeneratedSlogans(slogans.map(s => s.replace('{keyword}', keyword)));
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="space-y-8">
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
        <input 
          type="text" 
          required
          className="flex-grow px-6 py-4 rounded-xl border border-stroke-1 dark:border-white/10 dark:bg-background-8 focus:ring-2 focus:ring-primary-500 outline-none transition-all text-lg"
          placeholder="Enter a keyword (e.g. Shoes, Digital, Coffee)"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <button 
          type="submit" 
          disabled={loading}
          className="px-10 py-4 bg-primary-500 text-white rounded-xl font-bold text-lg hover:bg-primary-600 transition-all shadow-xl shadow-primary-500/30 disabled:opacity-50"
        >
          {loading ? 'Generating...' : 'Generate Slogans'}
        </button>
      </form>

      {generatedSlogans.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
          {generatedSlogans.map((slogan, index) => (
            <div 
              key={index} 
              className="p-6 bg-gray-50 dark:bg-background-8 border border-stroke-1 dark:border-white/10 rounded-xl hover:border-primary-500 hover:shadow-md transition-all group cursor-pointer"
              onClick={() => {
                navigator.clipboard.writeText(slogan);
                alert('Slogan copied to clipboard!');
              }}
            >
              <p className="text-secondary dark:text-accent font-medium">{slogan}</p>
              <div className="mt-2 text-xs text-primary-500 opacity-0 group-hover:opacity-100 transition-opacity">
                Click to copy
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SloganMakerForm;
