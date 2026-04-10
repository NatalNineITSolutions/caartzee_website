'use client';
import { useState } from 'react';

const TermsConditionsForm = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    websiteUrl: '',
    address: '',
    email: '',
  });

  const [generated, setGenerated] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setGenerated(true);
  };

  if (generated) {
    return (
      <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="p-6 bg-blue-50 border border-blue-200 rounded-xl">
          <h3 className="text-xl font-bold text-blue-800 mb-2">Success!</h3>
          <p className="text-blue-700">Your Terms and Conditions have been generated for {formData.companyName}.</p>
        </div>
        
        <div className="p-8 bg-gray-50 border border-stroke-1 rounded-xl font-mono text-sm overflow-y-auto max-h-[400px]">
          <h4 className="font-bold mb-4">TERMS AND CONDITIONS</h4>
          <p>Welcome to {formData.websiteUrl}!</p>
          <p>These terms and conditions outline the rules and regulations for the use of {formData.companyName}'s Website, located at {formData.websiteUrl}.</p>
          <br />
          <p><strong>LICENSE</strong></p>
          <p>Unless otherwise stated, {formData.companyName} and/or its licensors own the intellectual property rights for all material on {formData.websiteUrl}. All intellectual property rights are reserved. You may access this from {formData.websiteUrl} for your own personal use subjected to restrictions set in these terms and conditions.</p>
          <br />
          <p><strong>CONTACT</strong></p>
          <p>If you have any questions about these Terms, please contact us at {formData.email}.</p>
        </div>

        <div className="flex gap-4">
          <button className="flex-1 py-4 bg-primary-500 text-white rounded-xl font-bold hover:bg-primary-600 transition-colors">
            Copy to Clipboard
          </button>
          <button 
            onClick={() => setGenerated(false)}
            className="flex-1 py-4 border-2 border-primary-500 text-primary-500 rounded-xl font-bold hover:bg-primary-50"
          >
            Edit Information
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-2">
          <label className="text-sm font-bold text-secondary dark:text-accent">Company Name</label>
          <input 
            type="text" 
            required
            className="w-full px-4 py-3 rounded-lg border border-stroke-1 dark:border-white/10 dark:bg-background-8 focus:ring-2 focus:ring-primary-500 outline-none transition-all"
            placeholder="e.g. Acme Corp"
            value={formData.companyName}
            onChange={(e) => setFormData({...formData, companyName: e.target.value})}
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-bold text-secondary dark:text-accent">Website URL</label>
          <input 
            type="url" 
            required
            className="w-full px-4 py-3 rounded-lg border border-stroke-1 dark:border-white/10 dark:bg-background-8 focus:ring-2 focus:ring-primary-500 outline-none transition-all"
            placeholder="e.g. https://www.acme.com"
            value={formData.websiteUrl}
            onChange={(e) => setFormData({...formData, websiteUrl: e.target.value})}
          />
        </div>
        <div className="col-span-full space-y-2">
          <label className="text-sm font-bold text-secondary dark:text-accent">Company Address</label>
          <input 
            type="text" 
            required
            className="w-full px-4 py-3 rounded-lg border border-stroke-1 dark:border-white/10 dark:bg-background-8 focus:ring-2 focus:ring-primary-500 outline-none transition-all"
            placeholder="e.g. 123 Business St, NY"
            value={formData.address}
            onChange={(e) => setFormData({...formData, address: e.target.value})}
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-bold text-secondary dark:text-accent">Contact Email</label>
          <input 
            type="email" 
            required
            className="w-full px-4 py-3 rounded-lg border border-stroke-1 dark:border-white/10 dark:bg-background-8 focus:ring-2 focus:ring-primary-500 outline-none transition-all"
            placeholder="e.g. hello@acme.com"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
          />
        </div>
      </div>

      <button 
        type="submit" 
        className="w-full py-5 bg-primary-500 text-white rounded-xl font-bold text-lg hover:bg-primary-600 transition-all shadow-xl shadow-primary-500/30"
      >
        Generate Terms & Conditions
      </button>
    </form>
  );
};

export default TermsConditionsForm;
