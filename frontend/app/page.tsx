export default function Home() {
  return (
    <main className="pt-20 pb-28">
      {/* Hero Section */}
      <section className="px-6 mb-16">
        <div className="relative overflow-hidden rounded-[2rem] bg-surface-container-low min-h-[500px] flex items-center">
          <div className="absolute inset-0 z-0">
            <img alt="Nigerian Fashion Hero" className="w-full h-full object-cover opacity-90" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB15nOGCfs0DCOobze_3UzSlNWsoHRpDyLp_19V7Ye_sKerd_u2G_ylWkpoKomoGgXqRhFm4y69CsYz5zkKOWTYGUWByQxGK17j6Ocaun9g52Weg4oPtbnbBKeyhKsJWb9g2bEFt6-38W5XCww_dkOWCN746Is2z7IhX_SQTm8QgNA5IrXDQtljPyYqmiPEf3T4sRlQf7qbrAemNzpoEa_TFPi_0CjEmmo6Mo5dqKvxzND25vE6WcIz7BjHT79KV5yqmK_kYyHp7XQ"/>
            <div className="absolute inset-0 bg-gradient-to-r from-on-background/60 via-transparent to-transparent"></div>
          </div>
          <div className="relative z-10 p-8 md:p-16 max-w-2xl">
            <span className="inline-block px-4 py-1.5 mb-6 rounded-full bg-tertiary text-on-tertiary font-label text-sm font-bold uppercase tracking-widest">New Collection</span>
            <h2 className="font-headline font-extrabold text-5xl md:text-7xl text-surface mb-6 leading-[1.1] tracking-tight">Crafted for <br/><span className="text-primary-container">Royalty.</span></h2>
            <p className="text-surface-container-low text-lg md:text-xl mb-10 font-body max-w-lg leading-relaxed">Discover the intersection of ancient textile wisdom and modern Nigerian luxury. Authentically sourced, bespoke tailored.</p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-primary hover:bg-primary-dim text-on-primary px-8 py-4 rounded-xl font-bold transition-all shadow-lg active:scale-95">Explore Collections</button>
              <button className="backdrop-blur-md bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-4 rounded-xl font-bold transition-all">Watch Lookbook</button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories: Asymmetric Bento Grid */}
      <section className="px-6 mb-20">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h3 className="font-headline text-3xl font-bold text-on-background">Browse Styles</h3>
            <p className="text-on-surface-variant">The digital loom of modern Nigerian attire</p>
          </div>
          <button className="text-primary font-bold flex items-center gap-2 hover:gap-3 transition-all">View All <span className="material-symbols-outlined">arrow_forward</span></button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[600px]">
          {/* Corporate */}
          <div className="md:col-span-7 relative group overflow-hidden rounded-[2rem] bg-surface-container-highest cursor-pointer">
            <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC231MReGdOvpbAqQm_MgXhUfuWEt9h_IFuKfODL0ZbNn0KLs6-yeQH-BOAI0CJq3m6eqUBl5jO8oIYHpvpgdGavdM9LZyERWS0BBlvOqho3F8uGKfnUKdPqNBkVrPzggHJYLBJyNbBHEJAGgY2KVHS9wmnibE6vuDGp_2n4ftQpBY3WXlPFAzqARA9gKL97bgJHwfqc0r8fzGD4tMiTj508U7m85cSN7gdtZbHd0PJCKyJznlNXTXiOmjY0Qk_iyDCasVW1T0LmU4" alt="Corporate"/>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-8 left-8 text-surface">
              <h4 className="font-headline text-4xl font-bold mb-2">Corporate</h4>
              <p className="text-surface-variant/80">Reimagining the boardroom with heritage.</p>
            </div>
          </div>
          {/* Casual & Native Stack */}
          <div className="md:col-span-5 flex flex-col gap-6">
            <div className="flex-1 relative group overflow-hidden rounded-[2rem] bg-secondary-container cursor-pointer">
              <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-Y3z8ba2nfzleP9S7LtCPjGLnKxrwb8FT0FB0mG0YEoAnFSdkuVAYyrcmYtFB84XppNsV_NzrpeOSpjksDLUBColEZmOz8vGYFOmIAz1k0WtbiPPs_K_eY4k127OOsN4PDk6lHjwMGGHQ8RJ448Tt3fYspigVkGKnRzwYjSnp_JrU7ZI0_1mLH39R6Bw6mmO-jov-_hEpLi-lwOfmJw9ItlSwiw_x2ZVRZd1F-awaxybQgwh9RU3jMxa05AASPnkh0Jlz-Zw9vhA" alt="Casual"/>
              <div className="absolute inset-0 bg-gradient-to-t from-secondary-dim/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-on-secondary">
                <h4 className="font-headline text-2xl font-bold mb-1">Casual</h4>
                <p className="text-sm opacity-90">Daily comfort in vibrant patterns.</p>
              </div>
            </div>
            <div className="flex-1 relative group overflow-hidden rounded-[2rem] bg-tertiary-container cursor-pointer">
              <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDP3yuINmePpq1LV1kmyPknlqaGBlFr2x0rej7b4DRL6bGp3fX9klxXEo0MYNPGIXfxuOKC1dpEzVLCq2osFX6yAWaD2fh_A97alTu3MuRZNbJFPCumtFL-Vc0VOOL9AbHvL1XppAHrtax9b-DaSadjhWeCFVYRBAFUnhKN4ZubVWZBrlaUJHgeQ7t2PIbhz-yL8bVlEXi3FTS5OPeI7XRtpbpzNt8JjlvO481nn-gyhIqm39NunAuBCqjjVy2KpWENEuI7Qr_NaVA" alt="Native Wear"/>
              <div className="absolute inset-0 bg-gradient-to-t from-tertiary-dim/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-on-tertiary-container">
                <h4 className="font-headline text-2xl font-bold mb-1">Native Wear</h4>
                <p className="text-sm opacity-90">Traditional silhouettes for every event.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Native Wear */}
      <section className="bg-surface-container-low py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="font-headline text-4xl font-extrabold text-on-background mb-4">Featured Native Wear</h3>
            <div className="w-24 h-1.5 bg-primary mx-auto rounded-full"></div>
          </div>
          <div className="flex gap-8 overflow-x-auto hide-scrollbar pb-8 -mx-6 px-6">
            {/* Product Card 1 */}
            <div className="min-w-[280px] md:min-w-[320px] bg-surface-container-lowest p-4 rounded-[2rem] group">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-6">
                <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDo1kJ3JuS-2V_zAsWR58tdPF_hov7pyzP2Tl6-wZwXl4Ub9QZJ1B_JuMUZdfy-UJ3wPaTyNNUwqtPhaWoTZBRxn9slHSq5DkMno7U22nPOYnqtJYahHZp2fVjkIK7HMKPdrtiEJq0h_0xBQAcPhufWnV8XqUmzCUNwubpk5Mh7CIodVETBC-aJHl8exSUtSppuv1sh4GqL3oePE120_jyjNpTAuv-n63rTXPm_-nL7Ka7dK5WTzMV7Sfi3WztS8L0xopgnJ3b5Gvo" alt="Onyx Agbada"/>
                <button className="absolute top-4 right-4 bg-white/80 backdrop-blur-md p-2 rounded-full text-primary active:scale-90 transition-transform">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>favorite</span>
                </button>
              </div>
              <div className="px-2">
                <div className="flex justify-between items-start mb-2">
                  <h5 className="font-headline font-bold text-lg text-on-background">Onyx Agbada Suite</h5>
                  <span className="text-primary font-bold">₦85,000</span>
                </div>
                <p className="text-on-surface-variant text-sm mb-4">By Heritage Tailors Lagos</p>
                <button className="w-full py-3 bg-surface-container-high hover:bg-primary hover:text-on-primary rounded-xl font-bold transition-colors">Add to Bag</button>
              </div>
            </div>
            {/* Product Card 2 */}
            <div className="min-w-[280px] md:min-w-[320px] bg-surface-container-lowest p-4 rounded-[2rem] group">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-6">
                <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAiBCOHm3R6GrV06PlR5RmI3r_u4ItoSMgAKH4qN2sHn06Lgs9DpnLnaG3riUiXO-lhvCmufl2N0X8co1LvY2Lc6Fs2-z762MgDvvDi3j7Ee7LqvXl8tFxX4PBMbwPjQM-rURrw0L7ISLiWHfV_jy1UIxmDZA9vXCsKWfLY_YVO6YZiNleQZznXXX4Jnox6iZvwdO7ERnq4hNOu6xSe4ds4DQe8PDLEmApUEDVP4fDSR_MgYKhNtRbpuaW4upb35K9Akfl70CM2VNU" alt="Sunset Dress"/>
                <button className="absolute top-4 right-4 bg-white/80 backdrop-blur-md p-2 rounded-full text-primary active:scale-90 transition-transform">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
                </button>
              </div>
              <div className="px-2">
                <div className="flex justify-between items-start mb-2">
                  <h5 className="font-headline font-bold text-lg text-on-background">Sunset Midi Dress</h5>
                  <span className="text-primary font-bold">₦42,000</span>
                </div>
                <p className="text-on-surface-variant text-sm mb-4">By Ankara Republic</p>
                <button className="w-full py-3 bg-surface-container-high hover:bg-primary hover:text-on-primary rounded-xl font-bold transition-colors">Add to Bag</button>
              </div>
            </div>
            {/* Product Card 3 */}
            <div className="min-w-[280px] md:min-w-[320px] bg-surface-container-lowest p-4 rounded-[2rem] group">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-6">
                <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnQtkAnCFdZ04b2Bqt87gj2pbj_iMX8OtM-hgMhYm8vFcHSnyy8Yb_hMZo4lfeZSTH75MKugoAIHskiOhmjcwks5oPGLUnLIgEsSx3FhyJNJg0BchXLPshtmYvQHL4Q1ka_Kh5FktFjEs5Zb_ND5z0akUYhMvjpbHpSBpeD1m8n6S_LPuAOChaLcLKo6fMfrdTOkfAeAQDwqCP0PJgcHA1wBfAVrNn4Mhogpxf82ECwTT10GUkl41rJxU8wm8Pn25DW9n6VpAEQoI" alt="Ivory Aso Oke"/>
                <button className="absolute top-4 right-4 bg-white/80 backdrop-blur-md p-2 rounded-full text-primary active:scale-90 transition-transform">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>favorite</span>
                </button>
              </div>
              <div className="px-2">
                <div className="flex justify-between items-start mb-2">
                  <h5 className="font-headline font-bold text-lg text-on-background">Ivory Aso Oke Set</h5>
                  <span className="text-primary font-bold">₦120,000</span>
                </div>
                <p className="text-on-surface-variant text-sm mb-4">By Royal Threads</p>
                <button className="w-full py-3 bg-surface-container-high hover:bg-primary hover:text-on-primary rounded-xl font-bold transition-colors">Add to Bag</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="px-6 py-20">
        <div className="bg-secondary-dim text-on-secondary p-12 rounded-[3rem] relative overflow-hidden flex flex-col items-center text-center">
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-secondary rounded-full opacity-50 blur-3xl"></div>
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-primary rounded-full opacity-30 blur-3xl"></div>
          <h3 className="font-headline text-4xl font-bold mb-6 relative z-10">Join the Heritage Circle</h3>
          <p className="text-secondary-fixed opacity-90 mb-10 max-w-lg relative z-10">Get early access to exclusive drops from Nigeria's finest artisans and 10% off your first bespoke order.</p>
          <div className="w-full max-w-md flex flex-col sm:flex-row gap-4 relative z-10">
            <input className="flex-1 bg-white/10 border-white/20 rounded-xl px-6 py-4 text-white placeholder:text-white/50 focus:ring-primary" placeholder="Enter your email" type="email"/>
            <button className="bg-primary text-on-primary px-8 py-4 rounded-xl font-bold hover:bg-primary-dim transition-colors">Subscribe</button>
          </div>
        </div>
      </section>
    </main>
  );
}
