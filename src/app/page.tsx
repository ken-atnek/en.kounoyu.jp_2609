/* =======================================
 * こうの湯 英語版 LPページ
 * URL: /src/app/page.tsx
 * Referenced in: /src/app/page.tsx
 * Created: 2026-09-12
 * Last updated: 2026-09-12
 * ======================================= */

import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import TopHero from '@/components/top/TopHero';
import TopIntro from '@/components/top/TopIntro';
import TopWelcomeSlider from '@/components/top/TopWelcomeSlider';
import TopRooms from '@/components/top/TopRooms';
import TopOnsen from '@/components/top/TopOnsen';
import TopMeals from '@/components/top/TopMeals';
import TopStay from '@/components/top/TopStay';
import TopAccess from '@/components/top/TopAccess';
import TopInformation from '@/components/top/TopInformation';
import TopReservation from '@/components/top/TopReservation';

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content">
        <TopHero />
        <TopIntro />
        <TopWelcomeSlider />
        <TopRooms />
        <TopOnsen />
        <TopMeals />
        <TopStay />
        <TopAccess />
        <TopInformation />
        <TopReservation />
      </main>
      <Footer />
    </>
  );
}
