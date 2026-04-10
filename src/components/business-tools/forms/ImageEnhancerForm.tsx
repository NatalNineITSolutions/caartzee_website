'use client';
import { useState } from 'react';
import { ImageIcon, Upload, Download, RefreshCw, Sparkles } from 'lucide-react';

const ImageEnhancerForm = () => {
  const [processing, setProcessing] = useState(false);
  const [enhanced, setEnhanced] = useState(false);

  // Sample image for demonstration
  const sampleImage = "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000&auto=format&fit=crop";

  const handleUpload = () => {
    setProcessing(true);
    setTimeout(() => {
      setProcessing(false);
      setEnhanced(true);
    }, 2500);
  };

  return (
    <div className="space-y-8">
      {!enhanced ? (
        <div className="flex flex-col items-center space-y-6">
          <div 
            className="w-full h-80 border-2 border-dashed border-stroke-1 dark:border-white/10 rounded-3xl flex flex-col items-center justify-center p-8 bg-gray-50 dark:bg-background-8 group hover:border-primary-500 transition-all cursor-pointer"
            onClick={handleUpload}
          >
            {processing ? (
              <div className="flex flex-col items-center gap-6">
                <RefreshCw size={64} className="text-primary-500 animate-[spin_3s_linear_infinite]" />
                <div className="space-y-2 text-center">
                   <p className="font-bold text-xl text-secondary dark:text-accent">Enhancing Pixels...</p>
                   <p className="text-sm text-secondary/40">Upscaling, sharpening, and color grading</p>
                </div>
              </div>
            ) : (
              <>
                <div className="w-20 h-20 rounded-2xl bg-primary-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform group-hover:rotate-3">
                  <Upload size={40} className="text-primary-500" />
                </div>
                <h3 className="text-2xl font-bold text-secondary dark:text-accent mb-2">Enhance Photo Quality</h3>
                <p className="text-secondary/60 dark:text-accent/60 max-w-xs text-center">Give your low-quality images a professional studio look in one click.</p>
              </>
            )}
          </div>
          <div className="flex items-center gap-2 text-primary-500 font-medium">
             <Sparkles size={16} />
             <span>AI Image Upscaling (4K)</span>
          </div>
        </div>
      ) : (
        <div className="space-y-8 animate-in fade-in zoom-in-95 duration-700">
          <div className="relative aspect-[16/9] rounded-3xl overflow-hidden border-4 border-primary-500/10 group">
             {/* Split View Simulation */}
             <div className="absolute inset-0 grid grid-cols-2">
                <div className="relative overflow-hidden bg-gray-100 italic flex items-center justify-center text-secondary/20 font-bold text-4xl uppercase p-4">
                   <img src={sampleImage} alt="Before" className="absolute inset-0 w-full h-full object-cover blur-[2px] opacity-60 grayscale" />
                   <span className="relative z-10">Before</span>
                </div>
                <div className="relative overflow-hidden flex items-center justify-center text-white font-bold text-4xl uppercase p-4 shadow-2xl">
                   <img src={sampleImage} alt="After" className="absolute inset-0 w-full h-full object-cover saturate-150 contrast-125" />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                   <span className="relative z-10">After</span>
                </div>
             </div>
             
             {/* Center Slider Line */}
             <div className="absolute inset-y-0 left-1/2 w-1 bg-white shadow-2xl z-20">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-xl">
                   <div className="flex gap-1">
                      <div className="w-1 h-3 bg-primary-500 rounded-full"></div>
                      <div className="w-1 h-3 bg-primary-500 rounded-full"></div>
                   </div>
                </div>
             </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="flex-1 flex items-center justify-center gap-2 py-5 bg-primary-500 text-white rounded-2xl font-bold text-lg hover:bg-primary-600 transition-all shadow-xl shadow-primary-500/30">
              <Download size={24} />
              Download 4K Image
            </button>
            <button 
              onClick={() => {setEnhanced(false);}}
              className="flex-1 flex items-center justify-center gap-2 py-5 border-2 border-primary-500 text-primary-500 rounded-2xl font-bold text-lg hover:bg-primary-50 transition-all"
            >
              Upload Another
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageEnhancerForm;
