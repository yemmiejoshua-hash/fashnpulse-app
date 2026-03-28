import Link from 'next/link';
import Image from 'next/image';

export default function Shop() {
  return (
    <main className="max-w-7xl mx-auto px-6 pt-24 pb-32">
      {/* Editorial Header */}
      <div className="mb-10">
        <h2 className="font-headline font-black text-4xl md:text-6xl text-primary-dim leading-none mb-2 italic">The Collection</h2>
        <p className="text-on-surface-variant font-body text-lg max-w-xl">Bridging ancestral craftsmanship with contemporary Nigerian silhouettes.</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Filter Sidebar */}
        <aside className="lg:w-64 flex-shrink-0">
          <div className="sticky top-28 space-y-10">
            {/* Category Chips */}
            <section>
              <h3 className="font-headline font-bold text-sm uppercase tracking-widest text-outline mb-4">Category</h3>
              <div className="flex flex-wrap lg:flex-col gap-2">
                <button className="px-5 py-2 rounded-full bg-secondary-container text-on-secondary-container text-sm font-medium transition-all hover:bg-secondary hover:text-on-secondary text-left">Native Styles</button>
                <button className="px-5 py-2 rounded-full bg-surface-container-highest text-on-surface-variant text-sm font-medium transition-all hover:bg-secondary-container hover:text-on-secondary-container text-left">Corporate Wear</button>
                <button className="px-5 py-2 rounded-full bg-surface-container-highest text-on-surface-variant text-sm font-medium transition-all hover:bg-secondary-container hover:text-on-secondary-container text-left">Casual Luxury</button>
              </div>
            </section>

            <section>
              <h3 className="font-headline font-bold text-sm uppercase tracking-widest text-outline mb-4">Price Range</h3>
              <div className="space-y-4">
                <input className="w-full accent-primary h-1.5 bg-surface-container-high rounded-lg appearance-none cursor-pointer" max="250000" min="5000" type="range"/>
                <div className="flex justify-between text-xs font-label text-on-surface-variant">
                  <span>₦5,000</span>
                  <span>₦250,000+</span>
                </div>
              </div>
            </section>
          </div>
        </aside>

        {/* Product Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-16 gap-x-8">
            {/* Product Card Example */}
            <Link href="/product/1" className="group block">
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-surface-container-low mb-6">
                <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCC15sIxQdrLvumtm68ej4HYhyjaJz25KK0HHesqdTFyDDG7kVdViPoSy2eW6oKo2R_Q3OaQ8fPgjB5hrNHT07_9rf1j7G-9_3uFqQZn19SRS6ZfT_w39CO2-5H8ys1TeYqwPGBRomDfa1JdI5S4zwIx_VNGe7ltDPPAfLMUmy6ARQGFqC7QtYaCzvYXZrvg3g0Be9EWAI0t9GYbNyltMal4lJvjG_dPlv_jgmzKsjI_L6ElesGXh-Pl2nCOYNdy4m1dhzFx8nfJB0" alt="Royal Adire Maxi"/>
                <div role="button" className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-primary transition-colors z-10 cursor-pointer">
                  <span className="material-symbols-outlined">favorite</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-start">
                  <h3 className="font-headline font-bold text-lg text-on-surface">Royal Adire Maxi</h3>
                  <span className="font-headline font-black text-primary">₦45,000</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-medium text-on-surface-variant">House of Zaya</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px] text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="text-xs font-bold">4.9</span>
                  </div>
                </div>
              </div>
            </Link>
            
            <Link href="/product/2" className="group block">
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-surface-container-low mb-6">
                <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmOm1Spf6dZPljXa5du6PUfL8HGGfrrTfaoaHfayOqsbW5SL-tleShpX4z3D6YSVA06oE95ANSamrDe9-GvJzV0jy0FHm1VtrTBPObU89l9MmQ2k_UmPi_lAaidzmyrsfAgEM4uAbePuVeipn34FnJf2CDL6yaYz18hUxPbnp8sUuXKYfqtxos0h7CtspEJAmiQz4MESf_fdXFuW4Vkyo4mZZXO8HRzUlpsZ5OPgJJ6J8e2WbfodFF__A709MtcubcyNeOfviOezM" alt="Modern Senator Suit"/>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-start">
                  <h3 className="font-headline font-bold text-lg text-on-surface">Modern Senator Suit</h3>
                  <span className="font-headline font-black text-primary">₦68,500</span>
                </div>
              </div>
            </Link>
          </div>

          {/* Pagination/Load More */}
          <div className="mt-20 flex justify-center">
            <button className="bg-primary hover:bg-primary-dim text-on-primary px-10 py-4 rounded-xl font-headline font-bold text-sm uppercase tracking-widest transition-all active:scale-95 shadow-lg">
              Discover More
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
