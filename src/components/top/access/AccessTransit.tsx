/* =======================================
 * こうの湯 英語版 TOP Access 公共交通ルート
 * URL: /src/components/top/access/AccessTransit.tsx
 * Referenced in: /src/components/top/TopAccess.tsx
 * Created: 2026-09-12
 * Last updated: 2026-09-12
 * ======================================= */

import { accessTransitLinks } from '@/data/top-access';
import {
  cx,
  Destination,
  RouteNote,
  TransitLink,
} from './AccessRouteParts';
import styles from '../TopAccess.module.scss';

export default function AccessTransit() {
  return (
    <section className={cx(styles.routeSection, styles.transitRouteSection)}>
      <header className={styles.routeSectionHeader}>
        <h3>By Public Transportation</h3>
      </header>
      <p className={styles.leadText}>
        Traveling by public transportation may require one or more transfers.
        Please check the latest timetables and connection details for each
        transport service before beginning your journey.
      </p>
      <div className={styles.routeList}>
        <article className={styles.routeGroup}>
          <h4>From Kumamoto Station or Kumamoto Airport</h4>
          <div className={cx(styles.routeMap, styles.kumamotoTransitMap)}>
            <div className={styles.point01}>
              <span>Kumamoto Station</span>
            </div>
            <div className={styles.boxArrow01}>
              <i />
              <i>
                <div className={styles.number}>2</div>
                <p>
                  JR Hohi Main Line
                  <br />
                  (approx. 40 min.)
                </p>
              </i>
            </div>
            <div className={styles.point02}>
              <span>Kumamoto Airport</span>
              <span>Higo-Ozu Station</span>
            </div>
            <div className={styles.boxArrowHead}>
              <i>
                <div className={styles.number}>1</div>
                <em>Direct from Kumamoto Station</em>
                <p>Kyushu Odan Bus (approx. 3 hours)</p>
              </i>
            </div>
            <Destination />
            <div className={styles.boxBottom}>
              <i>
                <div className={styles.number}>3</div>
                <p>Yamabiko Express Bus (approx. 53 min.)</p>
              </i>
              <span>Aso Station</span>
              <i>
                <div className={styles.number}>4</div>
                <p>
                  Local Bus
                  <small>Sanko Bus Tsuetate Line</small>
                  (approx. 53 min.)
                </p>
              </i>
              <span>Minamioguni Town Hall Bus Stop</span>
              <i>
                <p>Approx. 10 minutes by car</p>
                <em>*1</em>
              </i>
            </div>
          </div>
          <RouteNote>
            For detailed information, including timetables and fares, please
            use the relevant links below.
          </RouteNote>
          <nav
            className={styles.transitLinks}
            aria-label="Kumamoto route links"
          >
            <TransitLink
              numbers={['1']}
              href={accessTransitLinks.kyushuOdanBus}
            >
              Kyushu Odan Bus (Approx. 3 hours)
            </TransitLink>
            <TransitLink
              numbers={['2']}
              href={accessTransitLinks.jrHohiLineKumamoto}
            >
              JR Kyushu Hohi Main Line Timetable: Kumamoto Station toward
              Higo-Ozu
            </TransitLink>
            <TransitLink
              numbers={['3']}
              href={accessTransitLinks.yamabikoBus}
            >
              Kumamoto-Oita Yamabiko Express Bus
            </TransitLink>
            <TransitLink
              numbers={['4']}
              href={accessTransitLinks.sankoBusSearch}
            >
              Sanko Bus Route and Timetable Search
            </TransitLink>
          </nav>
          <p className={styles.notice}>
            *1 Please take a taxi or arrange a shuttle with your ryokan.
            Contact the ryokan in advance to confirm shuttle availability.
          </p>
        </article>
        <article className={styles.routeGroup}>
          <h4>From the Fukuoka or Kitakyushu Area</h4>
          <div className={cx(styles.routeMap, styles.fukuokaTransitMap)}>
            <div className={styles.point01}>
              <span>Kokura Station</span>
            </div>
            <div className={styles.boxArrow01}>
              <i>
                <div className={styles.number}>1</div>
                <p>
                  JR Tokaido-Sanyo Shinkansen
                  <br />
                  (approx. 15 min.)
                </p>
              </i>
            </div>
            <div className={styles.point01}>
              <span>Hakata Station</span>
            </div>
            <div className={styles.boxArrowHead}>
              <i>
                <div className={styles.number}>2</div>
                <em>Direct from Hakata Station</em>
                <p>Highway Bus (approx. 2 hours 45 min.)</p>
              </i>
            </div>
            <Destination />
            <div className={styles.boxBottom}>
              <i>
                <div className={styles.number}>3</div>
                <p>JR Kyushu Shinkansen (approx. 40 min.)</p>
              </i>
              <span>Kumamoto Station</span>
              <i>
                <em>*1</em>
              </i>
            </div>
          </div>
          <RouteNote>
            For detailed information, including timetables and fares, please
            use the relevant links below.
          </RouteNote>
          <nav
            className={styles.transitLinks}
            aria-label="Fukuoka route links"
          >
            <TransitLink numbers={['1']} href={accessTransitLinks.kokuraStation}>
              Kokura Station Information
            </TransitLink>
            <TransitLink
              numbers={['2']}
              href={accessTransitLinks.fukuokaKurokawaBus}
            >
              Fukuoka-Kurokawa Onsen Bus Timetable and Fares
            </TransitLink>
            <TransitLink
              numbers={['3']}
              href={accessTransitLinks.hakataStationInfo}
            >
              Hakata Station Information
            </TransitLink>
          </nav>
          <p className={styles.notice}>
            *1 For directions from Kumamoto Station, please refer to “From
            Kumamoto Station.”
          </p>
        </article>
        <article className={styles.routeGroup}>
          <h4>From the Oita Area</h4>
          <div className={cx(styles.routeMap, styles.oitaTransitMap)}>
            <div className={styles.point01}>
              <span>Oita Airport</span>
            </div>
            <div className={styles.boxHead}>
              <i>
                <div className={styles.number}>1</div>
                <p>Airliner Airport Bus (approx. 65 min.)</p>
              </i>
              <span>Oita Station</span>
              <i>
                <div className={styles.number}>3</div>
                <p>JR Nippo Main Line (approx. 13 min.)</p>
              </i>
            </div>
            <div className={styles.point01}>
              <span>Beppu Station</span>
            </div>
            <div className={styles.boxArrow01}>
              <i>
                <div className={styles.number}>4</div>
                <p>Kamenoi Bus (approx. 68 min.)</p>
              </i>
            </div>
            <div className={styles.point01}>
              <span>Yufuin Station</span>
            </div>
            <div className={styles.boxArrow01}>
              <i>
                <div className={styles.number}>5</div>
                <p>Kyushu Odan Bus (approx. 1 hour 37 min.)</p>
              </i>
            </div>
            <Destination />
            <div className={styles.boxArrowBottom}>
              <i>
                <div className={styles.number}>2</div>
                <p>Kyushu Express Bus (approx. 2 hours 10 min.)</p>
              </i>
            </div>
          </div>
          <RouteNote>
            For detailed information, including timetables and fares, please
            use the relevant links below.
          </RouteNote>
          <nav className={styles.transitLinks} aria-label="Oita route links">
            <TransitLink
              numbers={['1', '2']}
              href={accessTransitLinks.oitaKotsu}
            >
              Oita Kotsu
            </TransitLink>
            <TransitLink
              numbers={['3']}
              href={accessTransitLinks.oitaBeppuTrainFare}
            >
              Oita-Beppu Train Timetables and Fares
            </TransitLink>
            <TransitLink
              numbers={['4']}
              href={accessTransitLinks.kijimaYufuinBus}
            >
              Kijima and Yufuin Bus Timetables and Fares
            </TransitLink>
            <TransitLink
              numbers={['5']}
              href={accessTransitLinks.kyushuOdanBus}
            >
              Kyushu Odan Bus
            </TransitLink>
          </nav>
        </article>
        <article className={styles.routeGroup}>
          <h4>From the Nagasaki or Saga Area</h4>
          <div className={cx(styles.routeMap, styles.nagasakiTransitMap)}>
            <div className={styles.point01}>
              <span>Nagasaki Station</span>
            </div>
            <div className={styles.boxHead}>
              <i>
                <div className={styles.number}>1</div>
                <p>Nishi Kyushu Shinkansen KAMOME (approx. 1 hour 20 min.)</p>
              </i>
              <span>Saga Station</span>
              <i>
                <div className={styles.number}>3</div>
                <p>Fukuoka Airport Limousine Bus (approx. 50 min.)</p>
              </i>
            </div>
            <div className={styles.point01}>
              <span>Kosoku Kiyama Bus Stop</span>
            </div>
            <div className={styles.boxArrow01}>
              <i>
                <div className={styles.number}>3</div>
                <p>Highway Bus (approx. 2 hours)</p>
              </i>
            </div>
            <Destination />
            <div className={styles.boxArrowBottom}>
              <i>
                <div className={styles.number}>2</div>
                <p>Kyushu-go Express Bus (approx. 2 hours 10 min.)</p>
              </i>
            </div>
          </div>
          <RouteNote>
            For detailed information, including timetables and fares, please
            use the relevant links below.
          </RouteNote>
          <nav
            className={styles.transitLinks}
            aria-label="Nagasaki route links"
          >
            <TransitLink numbers={['1']} href={accessTransitLinks.jrKyushu}>
              JR Kyushu Train Information and Reservations
            </TransitLink>
            <TransitLink
              numbers={['2']}
              href={accessTransitLinks.sagaKiyamaBus}
            >
              Saga Station Bus Center-Kosoku Kiyama Bus Timetable
            </TransitLink>
            <TransitLink
              numbers={['3']}
              href={accessTransitLinks.fukuokaKurokawaBus}
            >
              Fukuoka-Kurokawa Onsen Bus Timetable and Fares
            </TransitLink>
          </nav>
        </article>
        <article className={styles.routeGroup}>
          <h4>From the Kagoshima or Miyazaki Area</h4>
          <div className={cx(styles.routeMap, styles.kagoshimaTransitMap)}>
            <div className={styles.point02}>
              <span>Kagoshima-Chuo Station</span>
              <span>Miyazaki Station</span>
            </div>
            <div className={styles.boxArrow01}>
              <i>
                <div className={styles.number}>1</div>
                <p>Kyushu Shinkansen (approx. 50 min.)</p>
              </i>
              <i>
                <div className={styles.number}>2</div>
                <p>Highway Bus (approx. 3 hours 50 min.)</p>
              </i>
            </div>
            <div className={styles.point01}>
              <span>Kumamoto Station</span>
            </div>
            <div className={styles.boxArrow02}>
              <i>
                <em>*1</em>
              </i>
            </div>
            <Destination />
          </div>
          <RouteNote>
            For detailed information, including timetables and fares, please
            use the relevant links below.
          </RouteNote>
          <nav
            className={styles.transitLinks}
            aria-label="Kagoshima route links"
          >
            <TransitLink
              numbers={['1']}
              href={accessTransitLinks.kagoshimaChuoStation}
            >
              Kagoshima-Chuo Station Information
            </TransitLink>
            <TransitLink
              numbers={['2']}
              href={accessTransitLinks.miyazakiKumamotoBus}
            >
              Miyazaki-Kumamoto Bus Timetable and Fares
            </TransitLink>
          </nav>
          <p className={styles.notice}>
            *1 For directions from Kumamoto Station, please refer to “From
            Kumamoto Station.”
          </p>
        </article>
      </div>
    </section>
  );
}
