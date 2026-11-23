import SmoothScrollProvider from '@/components/shared/SmoothScroll';
import { ThemeProvider } from '@/components/shared/ThemeProvider';
import DemoShowcase from '@/components/shared/demo-showcase';
import LayoutWrapper from '@/components/shared/LayoutWrapper';
import { AppContextProvider } from '@/context/AppContext';
import { interTight } from '@/utils/font';
import { generateMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';
import { ReactNode, Suspense } from 'react';
import './globals.css';

export const metadata: Metadata = {
  ...generateMetadata(),
};

import Script from 'next/script';

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-MXMJ82P8MY" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-MXMJ82P8MY');
          `}
        </Script>
      </head>
      <body className={`${interTight.variable} antialiased`}>
        <AppContextProvider>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
            <Suspense>
              <SmoothScrollProvider>
                <LayoutWrapper>
                  {/* <DemoShowcase activeDemoId={5} /> */}
                  {children}
                </LayoutWrapper>
              </SmoothScrollProvider>
            </Suspense>
          </ThemeProvider>
        </AppContextProvider>
      </body>
    </html>
  );
}
