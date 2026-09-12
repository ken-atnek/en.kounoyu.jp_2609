/* =======================================
 * こうの湯 英語版 TOP Hero セクション
 * URL: /src/components/top/TopHero.tsx
 * Referenced in: /src/app/page.tsx
 * Created: 2026-09-12
 * Last updated: 2026-09-12
 * ======================================= */

import Image from 'next/image';
import styles from './TopHero.module.scss';

export default function TopHero() {
  return (
    <section className={styles.topHero} aria-labelledby="hero-title">
      <Image
        src="/images/hero/main-visual.webp"
        alt="Open-air onsen overlooking the wooded hillside at Ryokan Kounoyu"
        className={styles.mainVisual}
        fill
        priority
        sizes="100vw"
      />
      <h1 id="hero-title" className="sr-only">
        Ryokan Kounoyu
      </h1>
      <div className={styles.heroLogo} aria-hidden="true">
        <svg className={styles.logoMark}>
          <use href="#svgLogo" />
        </svg>
        <svg className={styles.logoName}>
          <use href="#svgLogoEn" />
        </svg>
      </div>
    </section>
  );
}
