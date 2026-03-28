import Link from 'next/link';

export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 w-full flex justify-around items-center px-4 pb-6 pt-3 bg-white dark:bg-stone-900 rounded-t-[2rem] z-50 shadow-[0_-10px_40px_rgba(156,61,42,0.08)] border-t border-[#c0a8a1]/15">
      <Link href="/" className="flex flex-col items-center justify-center bg-[#ffede8] dark:bg-[#9c3d2a]/20 text-[#9c3d2a] dark:text-[#fa846c] rounded-2xl px-5 py-2 active:scale-90 transition-transform duration-300">
        <span className="material-symbols-outlined mb-1" style={{ fontVariationSettings: "'FILL' 1" }}>home</span>
        <span className="font-label font-medium text-[10px] tracking-tight">Home</span>
      </Link>
      <Link href="/shop" className="flex flex-col items-center justify-center text-stone-400 dark:text-stone-500 px-5 py-2 hover:bg-stone-50 dark:hover:bg-stone-800 transition-colors active:scale-90 duration-300">
        <span className="material-symbols-outlined mb-1">storefront</span>
        <span className="font-label font-medium text-[10px] tracking-tight">Shop</span>
      </Link>
      <Link href="/chat" className="flex flex-col items-center justify-center text-stone-400 dark:text-stone-500 px-5 py-2 hover:bg-stone-50 dark:hover:bg-stone-800 transition-colors active:scale-90 duration-300">
        <span className="material-symbols-outlined mb-1">chat_bubble</span>
        <span className="font-label font-medium text-[10px] tracking-tight">Chat</span>
      </Link>
      <Link href="/profile" className="flex flex-col items-center justify-center text-stone-400 dark:text-stone-500 px-5 py-2 hover:bg-stone-50 dark:hover:bg-stone-800 transition-colors active:scale-90 duration-300">
        <span className="material-symbols-outlined mb-1">person</span>
        <span className="font-label font-medium text-[10px] tracking-tight">Profile</span>
      </Link>
    </nav>
  );
}
