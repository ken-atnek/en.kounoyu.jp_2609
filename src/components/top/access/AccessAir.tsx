/* =======================================
 * こうの湯 英語版 TOP Access 飛行機ルート
 * URL: /src/components/top/access/AccessAir.tsx
 * Referenced in: /src/components/top/TopAccess.tsx
 * Created: 2026-09-12
 * Last updated: 2026-09-12
 * ======================================= */

import { cx } from './AccessRouteParts';
import styles from '../TopAccess.module.scss';

export default function AccessAir() {
  return (
    <section className={cx(styles.routeSection, styles.airRouteSection)}>
      <header className={styles.routeSectionHeader}>
        <h3>By Air</h3>
      </header>
      <div className={styles.airRouteList}>
        <article className={styles.airRouteGroup}>
          <h4>From Tokyo Haneda Airport</h4>
          <div className={styles.airRouteMap}>
            <div className={styles.boxStart}>
              <span>Haneda Airport</span>
            </div>
            <div className={styles.boxArrow01}>
              <i />
              <i />
              <p>About 1h and 50m</p>
            </div>
            <div className={styles.point02}>
              <span>Fukuoka Airport</span>
              <span>Kumamoto Airport</span>
            </div>
          </div>
        </article>
        <article className={styles.airRouteGroup}>
          <h4>From Osaka Kansai International Airport</h4>
          <div className={styles.airRouteMap}>
            <div className={styles.boxStart}>
              <span>
                Kansai International
                <br />
                Airport
              </span>
            </div>
            <div className={styles.boxArrow01}>
              <i />
              <i />
              <p>About 1h and 10m</p>
            </div>
            <div className={styles.point02}>
              <span>Fukuoka Airport</span>
              <span>Kumamoto Airport</span>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
