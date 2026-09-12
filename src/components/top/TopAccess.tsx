/* =======================================
 * こうの湯 英語版 TOP Access セクション
 * URL: /src/components/top/TopAccess.tsx
 * Referenced in: /src/app/page.tsx
 * Created: 2026-09-12
 * Last updated: 2026-09-12
 * ======================================= */

import Image from 'next/image';
import AccessAir from './access/AccessAir';
import AccessCar from './access/AccessCar';
import AccessMap from './access/AccessMap';
import AccessTransit from './access/AccessTransit';
import styles from './TopAccess.module.scss';

export default function TopAccess() {
  return (
    <section
      id="access"
      className={styles.topAccess}
      aria-labelledby="access-title"
    >
      <div className={styles.sectionVisualHeader}>
        <Image
          className={styles.sectionVisual}
          src="/images/access/hero.webp"
          alt=""
          fill
          sizes="100vw"
        />
        <div className={styles.sectionTitle}>
          <h2 id="access-title">ACCESS</h2>
        </div>
      </div>
      <div className={styles.accessContent}>
        <AccessMap />
        <AccessAir />
        <AccessCar />
        <AccessTransit />
      </div>
    </section>
  );
}
