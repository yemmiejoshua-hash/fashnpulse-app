'use client';

import { useState } from 'react';
import Link from 'next/link';
import { supabase } from '../../../utils/supabase';
import { useRouter } from 'next/navigation';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const { data: authData, error: authError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: name,
        }
      }
    });

    if (authError) {
      setError(authError.message);
      setLoading(false);
      return;
    }

    // Usually, we would insert the user into our public.users table here, 
    // but a better approach is a Supabase trigger on auth.users creation.
    // For now, let's just create the record if auth succeeds.
    if (authData.user) {
      const { error: dbError } = await supabase.from('users').insert({
        id: authData.user.id,
        name: name,
        email: email,
        role: 'buyer'
      });

      if (dbError) {
        // Safe fail (user might already exist or trigger handled it)
        console.error('Error inserting to public.users:', dbError.message);
      }
    }

    router.push('/profile');
    setLoading(false);
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-surface px-6 pt-20 pb-28">
      <div className="w-full max-w-md bg-surface-container-lowest p-8 rounded-[2rem] shadow-xl">
        <h2 className="font-headline font-black text-3xl text-primary mb-2 text-center">Join Heritage</h2>
        <p className="text-on-surface-variant text-center mb-8 font-body">Create your fashion profile</p>

        {error && <div className="bg-error-container text-on-error-container p-4 rounded-xl mb-6 text-sm">{error}</div>}

        <form onSubmit={handleRegister} className="space-y-6">
          <div className="space-y-2">
            <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant px-1">Full Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-surface-container-highest border-none rounded-xl px-5 py-4 focus:ring-2 focus:ring-primary"
              placeholder="Enter your full name"
              required
            />
          </div>
          <div className="space-y-2">
            <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant px-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-surface-container-highest border-none rounded-xl px-5 py-4 focus:ring-2 focus:ring-primary"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="space-y-2">
            <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant px-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-surface-container-highest border-none rounded-xl px-5 py-4 focus:ring-2 focus:ring-primary"
              placeholder="Create a password"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-primary text-on-primary py-4 rounded-xl font-bold hover:bg-primary-dim transition-colors disabled:opacity-70"
          >
            {loading ? 'Creating Account...' : 'Create Account'}
          </button>
        </form>

        <p className="text-center text-sm text-on-surface-variant mt-8">
          Already have an account? <Link href="/auth/login" className="text-primary font-bold hover:underline">Sign In</Link>
        </p>
      </div>
    </main>
  );
}
