/* =======================================
 * こうの湯 英語版 TOP Access 車ルート
 * URL: /src/components/top/access/AccessCar.tsx
 * Referenced in: /src/components/top/TopAccess.tsx
 * Created: 2026-09-12
 * Last updated: 2026-09-12
 * ======================================= */

import { accessRouteLinks } from '@/data/top-access';
import { cx, Destination, RouteTag } from './AccessRouteParts';
import styles from '../TopAccess.module.scss';

export default function AccessCar() {
  return (
    <section className={cx(styles.routeSection, styles.carRouteSection)}>
      <header className={styles.routeSectionHeader}>
        <h3>By Car</h3>
      </header>
      <p className={styles.leadText}>
        If traveling by car, please follow one of the main routes below:
        <br />・ National Route 212, between Hita and Aso
        <br />・ National Route 57, between Kumamoto and Aso
        <br />・ Yamanami Highway, between Yufuin and Aso
        <br />
        When using National Routes 57 or 212, head toward Minamioguni or Oguni.
        When using the Yamanami Highway, head toward Senomoto before continuing
        to Kurokawa Onsen.
      </p>
      <div className={styles.routeList}>
        <article className={styles.routeGroup}>
          <h4>From Kumamoto Station or Kumamoto Airport</h4>
          <div className={styles.routeTags}>
            <RouteTag href={accessRouteLinks.kumamotoStation}>
              Kumamoto Station Route
            </RouteTag>
            <RouteTag href={accessRouteLinks.kumamotoAirport}>
              Kumamoto Airport Route
            </RouteTag>
          </div>
          <div className={cx(styles.routeMap, styles.kumamotoCarMap)}>
            <div className={styles.boxStart}>
              <span>Kumamoto Station</span>
              <span>Kumamoto Airport</span>
            </div>
            <div className={styles.point01}>
              Milk Road
              <br />
              (Kumamoto Prefectural Route 399)
            </div>
            <Destination />
          </div>
        </article>
        <article className={styles.routeGroup}>
          <h4>From Hakata Station or Fukuoka Airport</h4>
          <div className={styles.routeTags}>
            <RouteTag href={accessRouteLinks.hakataStation}>
              Hakata Station Route
            </RouteTag>
            <RouteTag href={accessRouteLinks.fukuokaAirport}>
              Fukuoka Airport Route
            </RouteTag>
          </div>
          <div className={cx(styles.routeMap, styles.hakataCarMap)}>
            <div className={styles.boxStart}>
              <span>Hakata Station</span>
              <span>Fukuoka Airport</span>
            </div>
            <div className={styles.point01}>Dazaifu IC</div>
            <div className={styles.point01}>Tosu JCT</div>
            <div className={styles.point01}>Hita IC</div>
            <Destination />
          </div>
        </article>
        <article className={styles.routeGroup}>
          <h4>From Beppu or Kitakyushu</h4>
          <div className={styles.routeTags}>
            <RouteTag href={accessRouteLinks.beppuCity}>
              Route from Beppu City
            </RouteTag>
            <RouteTag href={accessRouteLinks.kitakyushuCity}>
              Route from Kitakyushu City
            </RouteTag>
          </div>
          <div className={cx(styles.routeMap, styles.beppuCarMap)}>
            <div className={styles.boxStart}>
              <span>Beppu City</span>
              <span>Kitakyushu City</span>
            </div>
            <div className={styles.boxStart}>
              <span>Beppu IC</span>
              <span>Otemachi IC</span>
            </div>
            <div className={styles.point01}>Hiji JCT</div>
            <div className={styles.point01}>Kokonoe IC</div>
            <Destination />
          </div>
        </article>
        <article className={styles.routeGroup}>
          <h4>From Kagoshima or Miyazaki</h4>
          <div className={styles.routeTags}>
            <RouteTag href={accessRouteLinks.kagoshimaCity}>
              Route from Kagoshima City
            </RouteTag>
            <RouteTag href={accessRouteLinks.miyazakiCity}>
              Route from Miyazaki City
            </RouteTag>
          </div>
          <div className={cx(styles.routeMap, styles.kagoshimaCarMap)}>
            <div className={styles.boxStart}>
              <span>Kagoshima City</span>
              <span>Miyazaki City</span>
            </div>
            <div className={styles.boxStart}>
              <span>Kagoshima-kita IC</span>
              <span>Miyazaki-nishi IC</span>
            </div>
            <div className={styles.boxStart}>
              <span>Mashiki Kumamoto Airport IC</span>
              <span>Nobeoka Road</span>
            </div>
            <div className={styles.boxStart}>
              <span>
                Milk Road
                <br />
                (Kumamoto Prefectural Route 399)
              </span>
              <span>Kitakata-Nobeoka Road</span>
            </div>
            <Destination />
          </div>
        </article>
      </div>
    </section>
  );
}
