'use client';
import { useState } from 'react';

const PrivacyPolicyForm = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    websiteUrl: '',
    address: '',
    city: '',
    state: '',
    pinCode: '',
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
        <div className="p-6 bg-green-50 border border-green-200 rounded-xl">
          <h3 className="text-xl font-bold text-green-800 mb-2">Success!</h3>
          <p className="text-green-700">Your Privacy Policy has been generated based on the information for {formData.companyName}.</p>
        </div>
        
        <div className="p-8 bg-gray-50 border border-stroke-1 rounded-xl font-mono text-sm overflow-y-auto max-h-[400px]">
          <h4 className="font-bold mb-4">PRIVACY POLICY</h4>
          <p>This Privacy Policy describes how your personal information is collected, used, and shared when you visit or make a purchase from {formData.websiteUrl} (the “Site”).</p>
          <br />
          <p><strong>PERSONAL INFORMATION WE COLLECT</strong></p>
          <p>When you visit the Site, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device...</p>
          <br />
          <p><strong>CONTACT US</strong></p>
          <p>For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us by e-mail at {formData.email} or by mail using the details provided below:</p>
          <p>{formData.address}, {formData.city}, {formData.state} - {formData.pinCode}</p>
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
          <label className="text-sm font-bold text-secondary dark:text-accent">Address</label>
          <input 
            type="text" 
            required
            className="w-full px-4 py-3 rounded-lg border border-stroke-1 dark:border-white/10 dark:bg-background-8 focus:ring-2 focus:ring-primary-500 outline-none transition-all"
            placeholder="e.g. 123 Business St"
            value={formData.address}
            onChange={(e) => setFormData({...formData, address: e.target.value})}
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-bold text-secondary dark:text-accent">City</label>
          <input 
            type="text" 
            required
            className="w-full px-4 py-3 rounded-lg border border-stroke-1 dark:border-white/10 dark:bg-background-8 focus:ring-2 focus:ring-primary-500 outline-none transition-all"
            value={formData.city}
            onChange={(e) => setFormData({...formData, city: e.target.value})}
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-bold text-secondary dark:text-accent">State</label>
          <input 
            type="text" 
            required
            className="w-full px-4 py-3 rounded-lg border border-stroke-1 dark:border-white/10 dark:bg-background-8 focus:ring-2 focus:ring-primary-500 outline-none transition-all"
            value={formData.state}
            onChange={(e) => setFormData({...formData, state: e.target.value})}
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-bold text-secondary dark:text-accent">Pin Code</label>
          <input 
            type="text" 
            required
            className="w-full px-4 py-3 rounded-lg border border-stroke-1 dark:border-white/10 dark:bg-background-8 focus:ring-2 focus:ring-primary-500 outline-none transition-all"
            value={formData.pinCode}
            onChange={(e) => setFormData({...formData, pinCode: e.target.value})}
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-bold text-secondary dark:text-accent">Email Address</label>
          <input 
            type="email" 
            required
            className="w-full px-4 py-3 rounded-lg border border-stroke-1 dark:border-white/10 dark:bg-background-8 focus:ring-2 focus:ring-primary-500 outline-none transition-all"
            placeholder="e.g. contact@acme.com"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
          />
        </div>
      </div>

      <button 
        type="submit" 
        className="w-full py-5 bg-primary-500 text-white rounded-xl font-bold text-lg hover:bg-primary-600 transition-all shadow-xl shadow-primary-500/30"
      >
        Generate Privacy Policy
      </button>
    </form>
  );
};

export default PrivacyPolicyForm;
