'use client';
import { useState } from 'react';
import { Scissors, Upload, Download, RefreshCw } from 'lucide-react';

const BackgroundRemoverForm = () => {
  const [image, setImage] = useState<string | null>(null);
  const [processing, setProcessing] = useState(false);
  const [removed, setRemoved] = useState(false);

  // Sample image for demonstration
  const sampleImage = "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000&auto=format&fit=crop";

  const handleUpload = () => {
    setProcessing(true);
    setTimeout(() => {
      setImage(sampleImage);
      setProcessing(false);
      setRemoved(true);
    }, 2000);
  };

  return (
    <div className="space-y-8">
      {!removed ? (
        <div className="flex flex-col items-center space-y-6">
          <div 
            className="w-full h-64 border-2 border-dashed border-stroke-1 dark:border-white/10 rounded-3xl flex flex-col items-center justify-center p-8 bg-gray-50 dark:bg-background-8 group hover:border-primary-500 transition-all cursor-pointer"
            onClick={handleUpload}
          >
            {processing ? (
              <div className="flex flex-col items-center gap-4">
                <RefreshCw size={48} className="text-primary-500 animate-spin" />
                <p className="font-bold text-secondary dark:text-accent">Processing Image...</p>
              </div>
            ) : (
              <>
                <div className="w-16 h-16 rounded-full bg-primary-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Upload size={32} className="text-primary-500" />
                </div>
                <h3 className="text-xl font-bold text-secondary dark:text-accent mb-2">Upload an Image</h3>
                <p className="text-sm text-secondary/60 dark:text-accent/60">Drag & drop or click to upload</p>
              </>
            )}
          </div>
          <p className="text-xs text-secondary/40">Supported formats: JPG, PNG, WebP (Max 5MB)</p>
        </div>
      ) : (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <span className="text-sm font-bold text-secondary/60">Original</span>
              <div className="aspect-square rounded-2xl overflow-hidden border border-stroke-1 dark:border-white/10">
                <img src={sampleImage} alt="Original" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="space-y-4">
              <span className="text-sm font-bold text-primary-500">Removed Background</span>
              <div className="aspect-square rounded-2xl overflow-hidden border border-stroke-1 dark:border-white/10 relative bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] bg-gray-200">
                {/* Simulated transparent result */}
                <div className="absolute inset-0 flex items-center justify-center">
                   <img src={sampleImage} alt="Removed" className="w-full h-full object-contain [mask-image:radial-gradient(ellipse_at_center,_black_70%,_transparent_100%)]" />
                </div>
                <div className="absolute top-2 right-2 bg-green-500 text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase">
                  AI Enhanced
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <button className="flex-1 flex items-center justify-center gap-2 py-4 bg-primary-500 text-white rounded-xl font-bold hover:bg-primary-600 transition-colors">
              <Download size={20} />
              Download Result
            </button>
            <button 
              onClick={() => {setRemoved(false); setImage(null);}}
              className="flex-1 flex items-center justify-center gap-2 py-4 border-2 border-primary-500 text-primary-500 rounded-xl font-bold hover:bg-primary-50"
            >
              Upload New
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BackgroundRemoverForm;
