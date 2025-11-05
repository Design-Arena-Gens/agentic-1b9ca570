import './globals.css';
import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import SiteFooter from '#components/footer';
import SiteHeader from '#components/header';

const fontSans = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: 'Atelier Aura — Modern Clothing Atelier',
  description:
    'Atelier Aura is a modern clothing ecommerce experience featuring limited capsule collections, sustainable fabrics, and refined tailoring.',
  openGraph: {
    title: 'Atelier Aura — Modern Clothing Atelier',
    description:
      'Discover limited capsule collections, sustainable fabrics, and refined tailoring designed for modern silhouettes.',
    url: 'https://agentic-1b9ca570.vercel.app',
    siteName: 'Atelier Aura',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1600&q=80'
      }
    ],
    locale: 'en_US',
    type: 'website'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={fontSans.variable}>
      <body className="min-h-screen bg-white font-sans">
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
