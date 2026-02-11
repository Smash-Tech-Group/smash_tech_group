import type { Metadata } from 'next';
import './globals.css';
import { Providers } from '@/components/providers/Providers';
import Navbar from '@/features/components/Navbar';
import Footer from '@/features/components/Footer';

export const metadata: Metadata = {
  title: 'Next.js Boilerplate',
  description: 'SSR boilerplate',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans">
        <Navbar />

        <Providers>{children}</Providers>
        <Footer />
      </body>
    </html>
  );
}
