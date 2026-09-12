/* =======================================
 * こうの湯 英語版 LPページ
 * URL: /src/app/page.tsx
 * Referenced in: /src/app/page.tsx
 * Created: 2026-09-12
 * Last updated: 2026-09-12
 * ======================================= */

import Header from '@/components/common/Header';
import TopHero from '@/components/top/TopHero';

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content">
        <TopHero />
      </main>
    </>
  );
}
