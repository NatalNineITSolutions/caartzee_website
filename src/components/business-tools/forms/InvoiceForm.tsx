'use client';
import { useState } from 'react';
import { Receipt, Download, Plus, Trash2 } from 'lucide-react';

const InvoiceForm = () => {
  const [items, setItems] = useState([{ name: '', quantity: 1, price: 0 }]);
  const [generated, setGenerated] = useState(false);

  const addItem = () => setItems([...items, { name: '', quantity: 1, price: 0 }]);
  const removeItem = (index: number) => setItems(items.filter((_, i) => i !== index));

  const subtotal = items.reduce((acc, item) => acc + (item.quantity * item.price), 0);
  const tax = subtotal * 0.18;
  const total = subtotal + tax;

  return (
    <div className="space-y-8">
      {!generated ? (
        <div className="space-y-8">
          <div className="space-y-4">
             {items.map((item, index) => (
                <div key={index} className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end bg-gray-50 dark:bg-background-8 p-4 rounded-xl border border-stroke-1 dark:border-white/10">
                   <div className="md:col-span-6 space-y-2">
                      <label className="text-xs font-bold opacity-50 uppercase">Item Description</label>
                      <input 
                        type="text" 
                        placeholder="Service or Product Name" 
                        className="w-full bg-white dark:bg-background-7 border border-stroke-1 dark:border-white/10 px-3 py-2 rounded-lg"
                        value={item.name}
                        onChange={(e) => {
                          const newItems = [...items];
                          newItems[index].name = e.target.value;
                          setItems(newItems);
                        }}
                      />
                   </div>
                   <div className="md:col-span-2 space-y-2">
                      <label className="text-xs font-bold opacity-50 uppercase">Qty</label>
                      <input 
                        type="number" 
                        className="w-full bg-white dark:bg-background-7 border border-stroke-1 dark:border-white/10 px-3 py-2 rounded-lg"
                        value={item.quantity}
                        onChange={(e) => {
                          const newItems = [...items];
                          newItems[index].quantity = Number(e.target.value);
                          setItems(newItems);
                        }}
                      />
                   </div>
                   <div className="md:col-span-3 space-y-2">
                      <label className="text-xs font-bold opacity-50 uppercase">Price</label>
                      <input 
                        type="number" 
                        className="w-full bg-white dark:bg-background-7 border border-stroke-1 dark:border-white/10 px-3 py-2 rounded-lg"
                        value={item.price}
                        onChange={(e) => {
                          const newItems = [...items];
                          newItems[index].price = Number(e.target.value);
                          setItems(newItems);
                        }}
                      />
                   </div>
                   <div className="md:col-span-1 flex justify-center pb-2">
                      <button onClick={() => removeItem(index)} className="text-red-400 hover:text-red-500 transition-colors">
                         <Trash2 size={20} />
                      </button>
                   </div>
                </div>
             ))}
             <button onClick={addItem} className="flex items-center gap-2 text-primary-500 font-bold text-sm hover:opacity-80 transition-opacity">
                <Plus size={16} />
                Add Line Item
             </button>
          </div>

          <div className="border-t border-stroke-1 dark:border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-8">
             <div className="space-y-2 text-center md:text-left">
                <p className="text-secondary/40 text-sm">Totals are calculated automatically</p>
                <div className="flex gap-4 items-center">
                   <div className="text-2xl font-black text-secondary dark:text-accent">₹{total.toLocaleString()}</div>
                   <span className="text-xs bg-primary-500/10 text-primary-500 px-2 py-1 rounded font-bold">18% GST Incl.</span>
                </div>
             </div>
             <button 
                onClick={() => setGenerated(true)}
                className="w-full md:w-auto px-12 py-4 bg-primary-500 text-white rounded-xl font-bold text-lg hover:bg-primary-600 shadow-xl shadow-primary-500/20 flex items-center justify-center gap-3"
             >
                <Receipt size={24} />
                Generate Invoice
             </button>
          </div>
        </div>
      ) : (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
           <div className="p-8 bg-white border border-stroke-1 rounded-2xl shadow-sm text-secondary">
              <div className="flex justify-between items-start mb-12">
                 <div>
                    <h2 className="text-3xl font-black uppercase text-primary-500">Invoice</h2>
                    <p className="text-secondary/40">#INV-2024-001</p>
                 </div>
                 <div className="text-right">
                    <p className="font-bold">Caartzee Business Tools</p>
                    <p className="text-sm opacity-60 text-secondary">Bangalore, India</p>
                 </div>
              </div>
              <div className="space-y-2 mb-12">
                 <div className="grid grid-cols-12 font-bold border-b-2 border-primary-500 pb-2 mb-4">
                    <div className="col-span-8">Description</div>
                    <div className="col-span-2 text-right">Qty</div>
                    <div className="col-span-2 text-right">Amount</div>
                 </div>
                 {items.map((item, i) => (
                    <div key={i} className="grid grid-cols-12 py-1 border-b border-gray-100">
                       <div className="col-span-8 font-medium">{item.name || 'Untitled Item'}</div>
                       <div className="col-span-2 text-right">{item.quantity}</div>
                       <div className="col-span-2 text-right">₹{(item.quantity * item.price).toLocaleString()}</div>
                    </div>
                 ))}
              </div>
              <div className="flex flex-col items-end space-y-2">
                 <div className="flex justify-between w-48 text-sm">
                    <span className="opacity-40">Subtotal:</span>
                    <span>₹{subtotal.toLocaleString()}</span>
                 </div>
                 <div className="flex justify-between w-48 text-sm">
                    <span className="opacity-40">GST (18%):</span>
                    <span>₹{tax.toLocaleString()}</span>
                 </div>
                 <div className="flex justify-between w-48 text-xl font-black border-t-2 border-primary-500 pt-2 mt-2">
                    <span>Total:</span>
                    <span className="text-primary-500">₹{total.toLocaleString()}</span>
                 </div>
              </div>
           </div>
           
           <div className="flex gap-4">
              <button onClick={() => window.print()} className="flex-1 flex items-center justify-center gap-2 py-4 bg-secondary text-white rounded-xl font-bold hover:bg-secondary/90 transition-colors shadow-lg shadow-secondary/20">
                 <Download size={20} />
                 Download PDF
              </button>
              <button 
                onClick={() => setGenerated(false)}
                className="flex-1 flex items-center justify-center gap-2 py-4 border-2 border-primary-500 text-primary-500 rounded-xl font-bold hover:bg-primary-50"
              >
                Edit Invoice
              </button>
           </div>
        </div>
      )}
    </div>
  );
};

export default InvoiceForm;
