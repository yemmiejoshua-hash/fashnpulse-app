'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/utils/supabase';
import { useRouter } from 'next/navigation';

export default function Profile() {
  const [user, setUser] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        router.push('/auth/login');
      } else {
        const { data } = await supabase.from('users').select('*').eq('id', session.user.id).single();
        setUser(data || session.user);
      }
    };
    fetchUser();
  }, [router]);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push('/');
  };

  if (!user) return <div className="min-h-screen flex items-center justify-center pt-20 pb-28 text-primary">Loading...</div>;

  return (
    <main className="min-h-screen bg-surface px-6 pt-24 pb-32 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-10">
        <h2 className="font-headline font-black text-4xl text-primary">Your Profile</h2>
        <button onClick={handleSignOut} className="bg-surface-container-highest text-primary font-bold px-6 py-2 rounded-full hover:bg-surface-container-low transition-colors">
          Sign Out
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-1 bg-surface-container-lowest p-8 rounded-[2rem] shadow-sm">
          <div className="w-24 h-24 bg-primary/20 text-primary flex items-center justify-center rounded-full text-3xl font-bold mb-6 mx-auto">
            {user.name?.[0] || user.email?.[0] || 'U'}
          </div>
          <h3 className="font-headline font-bold text-xl text-center text-on-surface mb-1">{user.name || 'User'}</h3>
          <p className="text-center text-on-surface-variant text-sm mb-6">{user.email}</p>
          <div className="flex justify-center">
            <span className="bg-tertiary text-on-tertiary px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">{user.role || 'Buyer'}</span>
          </div>
        </div>

        <div className="md:col-span-2 space-y-8">
          <div className="bg-surface-container-lowest p-8 rounded-[2rem] shadow-sm">
            <h3 className="font-headline font-bold text-xl mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined">shopping_bag</span>
              Recent Orders
            </h3>
            <div className="text-center py-10 text-on-surface-variant">
              <p>You haven't placed any orders yet.</p>
              <button onClick={() => router.push('/shop')} className="mt-4 text-primary font-bold hover:underline">Start Shopping</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
