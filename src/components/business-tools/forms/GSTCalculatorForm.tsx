'use client';
import { useState, useEffect } from 'react';
import { Calculator } from 'lucide-react';

const GSTCalculatorForm = () => {
  const [amount, setAmount] = useState<number>(0);
  const [gstRate, setGstRate] = useState<number>(18);
  const [calculationType, setCalculationType] = useState<'exclusive' | 'inclusive'>('exclusive');
  const [results, setResults] = useState({
    netAmount: 0,
    gstAmount: 0,
    totalAmount: 0
  });

  useEffect(() => {
    let gstPrice = 0;
    let totalPrice = 0;
    let originalPrice = 0;

    if (calculationType === 'exclusive') {
      gstPrice = (amount * gstRate) / 100;
      totalPrice = amount + gstPrice;
      originalPrice = amount;
    } else {
      gstPrice = amount - (amount * (100 / (100 + gstRate)));
      totalPrice = amount;
      originalPrice = amount - gstPrice;
    }

    setResults({
      netAmount: originalPrice,
      gstAmount: gstPrice,
      totalAmount: totalPrice
    });
  }, [amount, gstRate, calculationType]);

  const rates = [5, 12, 18, 28];

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-bold text-secondary dark:text-accent">Amount (₹)</label>
            <input 
              type="number" 
              className="w-full px-4 py-4 rounded-xl border border-stroke-1 dark:border-white/10 dark:bg-background-8 focus:ring-2 focus:ring-primary-500 outline-none transition-all text-xl font-bold"
              placeholder="0.00"
              value={amount || ''}
              onChange={(e) => setAmount(Number(e.target.value))}
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-secondary dark:text-accent">GST Rate (%)</label>
            <div className="grid grid-cols-4 gap-2">
              {rates.map((rate) => (
                <button
                  key={rate}
                  onClick={() => setGstRate(rate)}
                  className={`py-3 rounded-lg font-bold transition-all border ${
                    gstRate === rate 
                    ? 'bg-primary-500 text-white border-primary-500 shadow-lg shadow-primary-500/20' 
                    : 'bg-white dark:bg-background-8 border-stroke-1 dark:border-white/10 text-secondary/60 dark:text-accent/60 hover:border-primary-500'
                  }`}
                >
                  {rate}%
                </button>
              ))}
            </div>
          </div>

          <div className="flex bg-gray-100 dark:bg-background-8 p-1 rounded-xl">
            <button
              onClick={() => setCalculationType('exclusive')}
              className={`flex-1 py-3 rounded-lg font-bold transition-all ${
                calculationType === 'exclusive' 
                ? 'bg-white dark:bg-background-7 text-primary-500 shadow-sm' 
                : 'text-secondary/40'
              }`}
            >
              Add GST
            </button>
            <button
              onClick={() => setCalculationType('inclusive')}
              className={`flex-1 py-3 rounded-lg font-bold transition-all ${
                calculationType === 'inclusive' 
                ? 'bg-white dark:bg-background-7 text-primary-500 shadow-sm' 
                : 'text-secondary/40'
              }`}
            >
              Remove GST
            </button>
          </div>
        </div>

        <div className="bg-primary-500 text-white rounded-3xl p-8 flex flex-col justify-between shadow-2xl shadow-primary-500/30">
          <div className="space-y-6">
            <div className="flex justify-between items-center border-b border-white/20 pb-4">
              <span className="opacity-80">Net Amount</span>
              <span className="text-xl font-bold">₹{results.netAmount.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center border-b border-white/20 pb-4">
              <span className="opacity-80">GST Amount ({gstRate}%)</span>
              <span className="text-xl font-bold">₹{results.gstAmount.toFixed(2)}</span>
            </div>
          </div>
          <div className="pt-8">
            <div className="flex justify-between items-end">
              <div>
                <span className="text-xs uppercase tracking-wider opacity-60 block mb-1">Total Amount</span>
                <span className="text-4xl font-black">₹{results.totalAmount.toFixed(2)}</span>
              </div>
              <Calculator size={48} className="opacity-20" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GSTCalculatorForm;
