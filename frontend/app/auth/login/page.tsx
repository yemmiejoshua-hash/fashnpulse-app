'use client';

import { useState } from 'react';
import Link from 'next/link';
import { supabase } from '../../../utils/supabase';
import { useRouter } from 'next/navigation';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
    } else {
      router.push('/profile');
    }
    setLoading(false);
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-surface px-6 pt-20 pb-28">
      <div className="w-full max-w-md bg-surface-container-lowest p-8 rounded-[2rem] shadow-xl">
        <h2 className="font-headline font-black text-3xl text-primary mb-2 text-center">Welcome Back</h2>
        <p className="text-on-surface-variant text-center mb-8 font-body">Sign in to your Heritage account</p>

        {error && <div className="bg-error-container text-on-error-container p-4 rounded-xl mb-6 text-sm">{error}</div>}

        <form onSubmit={handleLogin} className="space-y-6">
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
              placeholder="Enter your password"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-primary text-on-primary py-4 rounded-xl font-bold hover:bg-primary-dim transition-colors disabled:opacity-70"
          >
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>

        <p className="text-center text-sm text-on-surface-variant mt-8">
          Don't have an account? <Link href="/auth/register" className="text-primary font-bold hover:underline">Register</Link>
        </p>
      </div>
    </main>
  );
}
