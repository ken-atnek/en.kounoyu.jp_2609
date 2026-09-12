/* =======================================
 * こうの湯 英語版 ルートレイアウト
 * URL: /src/app/layout.tsx
 * Referenced in: /src/app/layout.tsx
 * Created: 2026-09-12
 * Last updated: 2026-09-12
 * ======================================= */

import type { Metadata } from 'next';
import { EB_Garamond, Google_Sans } from 'next/font/google';
import type { ReactNode } from 'react';
import SvgDefs from '@/components/SvgDefs';
import { metadataBase } from '@/lib/env';
import '@/styles/globals.scss';

const googleSans = Google_Sans({
  variable: '--font-google-sans',
  weight: ['400', '700'],
  subsets: ['latin'],
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
