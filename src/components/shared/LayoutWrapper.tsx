'use client';

import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';
import Navbar from '@/components/shared/navbar/Navbar';
import Footer from '@/components/shared/footer/Footer';
import NexsasNavbar from '@/components/shared/layout/navbar/navbar';
import NexsasFooter from '@/components/shared/layout/footer/footer';
import { MobileMenuProvider } from '@/context/MobileMenuContext';

export default function LayoutWrapper({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isHomepage2 = pathname?.startsWith('/homepage2');

  if (isHomepage2) {
    return (
      <>
        <Navbar />
        <main className="bg-background-13 overflow-hidden">{children}</main>
        <NexsasFooter />
      </>
    );
  }

  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
