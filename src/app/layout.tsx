/* =======================================
 * こうの湯 英語版 ルートレイアウト
 * URL: /src/app/layout.tsx
 * Referenced in: /src/app/layout.tsx
 * Created: 2026-09-12
 * Last updated: 2026-09-14
 * ======================================= */

import type { Metadata } from 'next';
import { EB_Garamond } from 'next/font/google';
import localFont from 'next/font/local';
import type { ReactNode } from 'react';
import SvgDefs from '@/components/SvgDefs';
import { metadataBase } from '@/lib/env';
import '@/styles/globals.scss';

const googleSans = localFont({
  src: [
    {
      path: '../../public/fonts/GoogleSans-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/GoogleSans-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-google-sans',
  display: 'swap',
  adjustFontFallback: false,
});

const ebGaramond = EB_Garamond({
  variable: '--font-eb-garamond',
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = metadataBase
  ? {
      metadataBase,
      alternates: {
        canonical: '/',
      },
    }
  : {
      robots: {
        index: false,
        follow: false,
      },
    };

type RootLayoutProps = Readonly<{
  children: ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={`${googleSans.variable} ${ebGaramond.variable}`}>
      <body>
        <SvgDefs />
        {children}
      </body>
    </html>
  );
}
