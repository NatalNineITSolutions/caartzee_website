'use client';
import { useState } from 'react';
import { Edit3, Sparkles, Copy, Check } from 'lucide-react';

const ProductDescriptionForm = () => {
  const [productName, setProductName] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    setIsGenerating(true);
    setTimeout(() => {
      setDescription(`Unlock the ultimate experience with our premium ${productName}. Designed for excellence in the ${category} category, this product combines cutting-edge technology with unparalleled comfort. Whether you're a professional or just starting out, the ${productName} is the perfect choice for those who demand the best. Elevate your daily routine with a product that truly understands your needs.`);
      setIsGenerating(false);
    }, 2000);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(description);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-8">
      <form onSubmit={handleGenerate} className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-bold text-secondary dark:text-accent">Product Name</label>
            <input 
              type="text" 
              required
              className="w-full px-4 py-4 rounded-xl border border-stroke-1 dark:border-white/10 dark:bg-background-8 focus:ring-2 focus:ring-primary-500 outline-none transition-all"
              placeholder="e.g. Wireless Headphones"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-secondary dark:text-accent">Category</label>
            <input 
              type="text" 
              required
              className="w-full px-4 py-4 rounded-xl border border-stroke-1 dark:border-white/10 dark:bg-background-8 focus:ring-2 focus:ring-primary-500 outline-none transition-all"
              placeholder="e.g. Electronics"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>
          <button 
            type="submit" 
            disabled={isGenerating}
            className="w-full py-5 bg-secondary text-white rounded-xl font-bold text-lg hover:bg-secondary/90 transition-all shadow-xl flex items-center justify-center gap-3 disabled:opacity-70"
          >
            {isGenerating ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Crafting Description...
              </>
            ) : (
              <>
                <Sparkles size={24} className="text-yellow-400" />
                Generate Description
              </>
            )}
          </button>
        </div>

        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-purple-600 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
          <div className="relative h-full min-h-[250px] bg-white dark:bg-background-8 border border-stroke-1 dark:border-white/10 rounded-3xl p-8 flex flex-col">
            <div className="flex justify-between items-center mb-6">
              <span className="text-sm font-bold text-secondary/40 flex items-center gap-2">
                <Edit3 size={16} />
                Result
              </span>
              {description && (
                <button 
                  onClick={handleCopy}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-background-6 rounded-lg transition-colors text-primary-500"
                >
                  {copied ? <Check size={20} /> : <Copy size={20} />}
                </button>
              )}
            </div>
            
            <div className="flex-grow flex items-center justify-center">
              {description ? (
                <p className="text-secondary/80 dark:text-accent/80 leading-relaxed animate-in fade-in duration-500">
                  {description}
                </p>
              ) : (
                <p className="text-secondary/30 dark:text-accent/30 text-center italic">
                  Enter details and click generate to see the magic...
                </p>
              )}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProductDescriptionForm;
