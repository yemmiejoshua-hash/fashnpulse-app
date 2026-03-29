import type { Metadata } from 'next';
import { Lexend, Be_Vietnam_Pro } from 'next/font/google';
import './globals.css';

const lexend = Lexend({
  subsets: ['latin'],
  variable: '--font-lexend',
  weight: ['300', '400', '500', '600', '700', '800', '900'],
});

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ['latin'],
  variable: '--font-be-vietnam-pro',
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Heritage | Nigerian Fashion Marketplace',
  description: 'A modern multi-vendor fashion marketplace tailored for Nigeria.',
};

import Header from '@/components/Header';
import BottomNav from '@/components/BottomNav';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet"/>
      </head>
      <body className={`${lexend.variable} ${beVietnamPro.variable} bg-surface text-on-surface font-body selection:bg-primary-container selection:text-on-primary-container antialiased`}>
        <Header />
        {children}
        <BottomNav />
      </body>
    </html>
  );
}
