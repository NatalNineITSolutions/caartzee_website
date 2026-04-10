'use client';
import { useState } from 'react';
import { QrCode, Download, Share2 } from 'lucide-react';

const QRCodeForm = () => {
  const [url, setUrl] = useState('');
  const [generated, setGenerated] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsGenerating(true);
    setTimeout(() => {
      setGenerated(true);
      setIsGenerating(false);
    }, 1500);
  };

  return (
    <div className="space-y-8">
      {!generated ? (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-bold text-secondary dark:text-accent">Website URL</label>
            <input 
              type="url" 
              required
              className="w-full px-4 py-4 rounded-xl border border-stroke-1 dark:border-white/10 dark:bg-background-8 focus:ring-2 focus:ring-primary-500 outline-none transition-all text-lg"
              placeholder="e.g. https://www.yourstore.com"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
          </div>
          <button 
            type="submit" 
            disabled={isGenerating}
            className="w-full py-5 bg-primary-500 text-white rounded-xl font-bold text-lg hover:bg-primary-600 transition-all shadow-xl shadow-primary-500/30 flex items-center justify-center gap-3 disabled:opacity-70"
          >
            {isGenerating ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Generating...
              </>
            ) : (
              <>
                <QrCode size={24} />
                Generate QR Code
              </>
            )}
          </button>
        </form>
      ) : (
        <div className="flex flex-col items-center space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="p-8 bg-white border-4 border-primary-500/10 rounded-3xl shadow-2xl">
            {/* Simulation of a QR Code */}
            <div className="w-48 h-48 bg-gray-100 flex items-center justify-center relative overflow-hidden group">
              <div className="absolute inset-0 grid grid-cols-10 grid-rows-10 gap-1 p-2">
                {Array.from({ length: 100 }).map((_, i) => (
                  <div key={i} className={`rounded-sm ${Math.random() > 0.6 ? 'bg-secondary' : 'bg-transparent'}`} />
                ))}
              </div>
              {/* Corner marks */}
              <div className="absolute top-2 left-2 w-10 h-10 border-4 border-secondary rounded-sm bg-white p-1">
                 <div className="w-full h-full bg-secondary rounded-sm" />
              </div>
              <div className="absolute top-2 right-2 w-10 h-10 border-4 border-secondary rounded-sm bg-white p-1">
                 <div className="w-full h-full bg-secondary rounded-sm" />
              </div>
              <div className="absolute bottom-2 left-2 w-10 h-10 border-4 border-secondary rounded-sm bg-white p-1">
                 <div className="w-full h-full bg-secondary rounded-sm" />
              </div>
            </div>
          </div>

          <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-2 py-4 bg-primary-500 text-white rounded-xl font-bold hover:bg-primary-600 transition-colors shadow-lg shadow-primary-500/20">
              <Download size={20} />
              Download PNG
            </button>
            <button 
              onClick={() => setGenerated(false)}
              className="flex items-center justify-center gap-2 py-4 border-2 border-primary-500 text-primary-500 rounded-xl font-bold hover:bg-primary-50 transition-all"
            >
              Generate New
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default QRCodeForm;
