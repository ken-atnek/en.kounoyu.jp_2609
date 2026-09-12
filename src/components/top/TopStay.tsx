/* =======================================
 * こうの湯 英語版 TOP Your Stay セクション
 * URL: /src/components/top/TopStay.tsx
 * Referenced in: /src/app/page.tsx
 * Created: 2026-09-12
 * Last updated: 2026-09-12
 * ======================================= */

import { Fragment } from 'react';
import Image from 'next/image';
import ExternalLink from '@/components/common/ExternalLink';
import {
  stayGuideItems,
  stayGuideTitle,
  stayIntroduction,
  stayNearbyItems,
} from '@/data/top-stay';
import styles from './TopStay.module.scss';

export default function TopStay() {
  return (
    <section id="stay" className={styles.topStay} aria-labelledby="stay-title">
      <div className={styles.sectionHeader}>
        <Image
          className={styles.sectionVisual}
          src="/images/stay/hero.webp"
          alt=""
          fill
          sizes="100vw"
        />
        <div className={styles.sectionTitle}>
          <h2 id="stay-title">YOUR STAY</h2>
        </div>
      </div>
      <div className={styles.propertyMap}>
        <h3>Kono-Yu Property Map</h3>
        <Image
          src="/images/stay/property-map.jpg"
          alt="Map of the Kono-Yu property and its facilities"
          width={1040}
          height={850}
          sizes="1040px"
        />
      </div>
      <p className={styles.introduction}>
        {stayIntroduction.map((line, index) => (
          <Fragment key={line}>
            {line}
            {index < stayIntroduction.length - 1 && <br />}
          </Fragment>
        ))}
      </p>
      <div className={styles.stayGuide}>
        <div className={styles.stayGuideTitle}>
          <h3>{stayGuideTitle}</h3>
        </div>
        <div className={styles.stayGuideList}>
          {stayGuideItems.map((item) => (
            <article className={styles.stayGuideItem} key={item.title}>
              <div className={styles.stayGuideHeading}>
                <h4>{item.title}</h4>
              </div>
              <Image
                src={item.image.src}
                alt={item.image.alt}
                width={980}
                height={653}
                sizes="536px"
              />
              <div className={styles.stayGuideText}>
                <p className={styles.stayGuideDescription}>
                  {item.description}
                </p>
                {'price' in item && item.price ? (
                  <p className={styles.price}>{item.price}</p>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
      <section
        className={styles.nearby}
        aria-labelledby="nearby-attractions-title"
      >
        <h3 id="nearby-attractions-title">Nearby Attractions</h3>
        <div className={styles.nearbyList}>
          {stayNearbyItems.map((item) => (
            <article className={styles.nearbyItem} key={item.title}>
              <Image
                src={item.image.src}
                alt={item.image.alt}
                width={980}
                height={653}
                sizes="426px"
              />
              <div className={styles.nearbyContent}>
                <h4>{item.title}</h4>
                <p className={styles.travelTime}>{item.travelTime}</p>
                <p className={styles.nearbyDescription}>{item.description}</p>
                <div className={styles.linkList}>
                  {item.links.map((link) => (
                    <ExternalLink
                      href={link.href}
                      className={styles.linkButton}
                      key={link.label}
                    >
                      <span>{link.label}</span>
                    </ExternalLink>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </section>
  );
}
