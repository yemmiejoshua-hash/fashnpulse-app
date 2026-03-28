import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full flex justify-between items-center px-6 py-4 backdrop-blur-md bg-opacity-80 bg-[#fff4f1] dark:bg-stone-950 z-50 shadow-[0_8px_30px_rgb(59,43,38,0.04)]">
      <div className="flex items-center gap-4">
        <button className="text-[#9c3d2a] dark:text-[#fa846c] active:scale-95 transition-transform duration-200">
          <span className="material-symbols-outlined">menu</span>
        </button>
        <Link href="/">
          <h1 className="text-[#9c3d2a] dark:text-[#fa846c] font-black text-2xl italic font-headline uppercase tracking-wider">
            Heritage
          </h1>
        </Link>
      </div>
      <div className="hidden md:flex flex-1 max-w-md mx-8">
        <div className="relative w-full group">
          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant group-focus-within:text-primary transition-colors">search</span>
          <input className="w-full bg-surface-container-highest border-none rounded-full py-2.5 pl-12 pr-4 focus:ring-2 focus:ring-primary text-on-surface placeholder:text-on-surface-variant/60" placeholder="Search for Ankara, Agbada..." type="text"/>
        </div>
      </div>
      <div className="flex items-center gap-5">
        <button className="md:hidden text-[#9c3d2a] dark:text-[#fa846c] active:scale-95 transition-transform duration-200">
          <span className="material-symbols-outlined">search</span>
        </button>
        <button className="text-[#9c3d2a] dark:text-[#fa846c] active:scale-95 transition-transform duration-200 relative">
          <span className="material-symbols-outlined">shopping_bag</span>
          <span className="absolute -top-1 -right-1 bg-tertiary text-on-tertiary text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">2</span>
        </button>
      </div>
    </header>
  );
}
