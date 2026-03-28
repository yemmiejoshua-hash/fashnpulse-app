export default function Checkout() {
  return (
    <main className="pt-24 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 pb-32">
      {/* Content Area: Cart Items */}
      <div className="lg:col-span-8 space-y-8">
        <div className="flex items-baseline justify-between">
          <h2 className="font-headline font-bold text-4xl tracking-tight text-primary">Your Cart</h2>
          <span className="font-label text-on-surface-variant text-sm uppercase tracking-widest">3 Items Selected</span>
        </div>
        
        {/* Cart Items List */}
        <div className="space-y-4">
          {/* Item 1 */}
          <div className="flex flex-col md:flex-row gap-6 p-4 rounded-2xl bg-surface-container-lowest group relative transition-all duration-300 hover:shadow-xl hover:shadow-primary/5">
            <div className="w-full md:w-32 h-40 rounded-xl overflow-hidden flex-shrink-0">
              <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAfpsLvJitq628sV5NxFsmAzjVnhm-N_lReX1M8hX-jMVlcbWooa86ivTKr9UVz5wzlbdDVdQz44I8a0cyzdQRkghuSSxWXJ0FSwWZaaU79z2hRrcGjbs5gdOmFKAwN7zZ1f1zdQiHDarpB04qfYV9Hz56QrT7M-d4qiYQPAOFW_LH7wnoczXULHPBlq0TriZeptOoCPi0--TLSQCbq_iBJxoG1vTX0gWqqgGVcdp-oFQj5XOEcdvoCYv5gQj7jDYnOT6TQfMMksQw" alt="Vintage Indigo Adire"/>
            </div>
            <div className="flex flex-col justify-between flex-grow">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-headline font-bold text-xl text-on-surface">Vintage Indigo Adire</h3>
                  <p className="text-on-surface-variant text-sm mt-1">Hand-dyed Artisanal Cotton • Lagos Collection</p>
                </div>
                <span className="font-headline font-extrabold text-lg text-primary">₦45,000</span>
              </div>
              <div className="flex justify-between items-center mt-6">
                <div className="flex items-center bg-surface-container-low rounded-full px-4 py-2 gap-6">
                  <button className="text-primary hover:opacity-60"><span className="material-symbols-outlined text-lg">remove</span></button>
                  <span className="font-bold text-sm">1</span>
                  <button className="text-primary hover:opacity-60"><span className="material-symbols-outlined text-lg">add</span></button>
                </div>
                <button className="text-error flex items-center gap-1 text-sm font-medium opacity-60 hover:opacity-100 transition-opacity">
                  <span className="material-symbols-outlined text-lg">delete</span>
                  <span>Remove</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Delivery Address Section */}
        <section className="mt-12 bg-surface-container-low p-8 rounded-[2rem] space-y-6">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>local_shipping</span>
            <h3 className="font-headline font-bold text-2xl">Delivery Details</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant px-1">State / Region</label>
              <select className="w-full bg-surface-container-highest border-none rounded-xl px-5 py-4 focus:ring-2 focus:ring-primary appearance-none">
                <option>Lagos</option>
                <option>Abuja (FCT)</option>
                <option>Port Harcourt</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant px-1">Phone Number</label>
              <input className="w-full bg-surface-container-highest border-none rounded-xl px-5 py-4 focus:ring-2 focus:ring-primary" type="text" defaultValue="+234 812 345 6789"/>
            </div>
            <div className="md:col-span-2 space-y-2">
              <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant px-1">Street Address</label>
              <textarea className="w-full bg-surface-container-highest border-none rounded-xl px-5 py-4 focus:ring-2 focus:ring-primary" rows={2} defaultValue="Plot 24, Admiralty Way, Lekki Phase 1, Lagos State."></textarea>
            </div>
          </div>
        </section>
      </div>

      {/* Order Summary Sidebar */}
      <aside className="lg:col-span-4 lg:sticky lg:top-24 h-fit">
        <div className="bg-primary p-8 rounded-[2rem] text-on-primary shadow-2xl shadow-primary/20 space-y-8 relative overflow-hidden">
          <h3 className="font-headline font-bold text-2xl relative">Order Summary</h3>
          <div className="space-y-4 relative">
            <div className="flex justify-between items-center opacity-80">
              <span className="text-sm font-medium">Subtotal</span>
              <span className="font-bold italic">₦45,000</span>
            </div>
            <div className="flex justify-between items-center opacity-80">
              <span className="text-sm font-medium">Delivery Fee</span>
              <span className="font-bold italic">₦2,500</span>
            </div>
            <div className="h-px bg-on-primary/20 my-4"></div>
            <div className="flex justify-between items-end">
              <span className="font-headline font-bold text-xl uppercase tracking-tighter">Total</span>
              <span className="font-headline font-black text-3xl italic">₦47,500</span>
            </div>
          </div>
          
          <button className="w-full bg-tertiary text-on-tertiary-fixed py-5 rounded-2xl font-headline font-extrabold text-lg shadow-lg active:scale-95 transition-all relative group overflow-hidden">
            <span className="relative z-10">Proceed to Checkout</span>
          </button>
        </div>
      </aside>
    </main>
  );
}
