/* =======================================
 * こうの湯 英語版 TOP Onsen セクション
 * URL: /src/components/top/TopOnsen.tsx
 * Referenced in: /src/app/page.tsx
 * Created: 2026-09-12
 * Last updated: 2026-09-12
 * ======================================= */
'use client';

import { Fragment } from 'react';
import Image from 'next/image';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import {
  footbath,
  morinoyu,
  onsenIntroduction,
  privateInRoomOnsen,
  tenNoYu,
  type TopOnsenFeature,
  type TopOnsenImage,
} from '@/data/top-onsen';
import styles from './TopOnsen.module.scss';

type OnsenCarouselProps = {
  label: string;
  images: TopOnsenImage[];
};

function OnsenCarousel({ label, images }: OnsenCarouselProps) {
  const hasMultipleImages = images.length > 1;

  return (
    <div className={styles.carousel}>
      <Splide
        aria-label={label}
        options={{
          type: hasMultipleImages ? 'loop' : 'slide',
          arrows: false,
          pagination: hasMultipleImages,
          drag: hasMultipleImages,
          speed: 800,
        }}
      >
        {images.map((image) => (
          <SplideSlide key={image.src} className={styles.slideItem}>
            <Image
              src={image.src}
              alt={image.alt}
              width={1366}
              height={911}
              sizes="520px"
            />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
}

function FeatureHeading({
  feature,
}: {
  feature: Pick<TopOnsenFeature, 'title' | 'eligibility'>;
}) {
  return (
    <div className={styles.featureHeading}>
      <h3>
        {feature.title.map((line) => (
          <span key={line}>{line}</span>
        ))}
      </h3>
      <p>{feature.eligibility}</p>
    </div>
  );
}

function FeatureDetails({
  feature,
}: {
  feature: Pick<TopOnsenFeature, 'description' | 'hours'>;
}) {
  return (
    <div className={styles.featureDetails}>
      <div className={styles.description}>
        {feature.description.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      {feature.hours && (
        <div className={styles.hours}>
          <p>Bathing Hours</p>
          {feature.hours.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </div>
      )}
    </div>
  );
}

function StandardFeature({ feature }: { feature: TopOnsenFeature }) {
  return (
    <article className={styles.standardFeature}>
      <div className={styles.textColumn}>
        <FeatureHeading feature={feature} />
        <FeatureDetails feature={feature} />
      </div>
      <OnsenCarousel
        label={`${feature.title.join(' ')} photos`}
        images={feature.images}
      />
    </article>
  );
}

export default function TopOnsen() {
  return (
    <section
      id="onsen"
      className={styles.topOnsen}
      aria-labelledby="onsen-title"
    >
      <div className={styles.sectionHeader}>
        <Image
          className={styles.sectionVisual}
          src="/images/onsen/hero.webp"
          alt=""
          fill
          sizes="100vw"
        />
        <div className={styles.sectionTitle}>
          <h2 id="onsen-title">ONSEN</h2>
          <p>HOT SPRING</p>
        </div>
      </div>
      <p className={styles.introduction}>
        {onsenIntroduction.map((line, index) => (
          <Fragment key={line}>
            {line}
            {index < onsenIntroduction.length - 1 && <br />}
          </Fragment>
        ))}
      </p>
      <div className={styles.featureList}>
        <StandardFeature feature={privateInRoomOnsen} />
        <StandardFeature feature={tenNoYu} />
        <article className={styles.morinoyuFeature}>
          <div className={styles.textColumn}>
            <FeatureHeading feature={morinoyu} />
            <FeatureDetails feature={morinoyu} />
            <div className={styles.standingBath}>
              <h4 className="sr-only">Standing Bath</h4>
              <Image
                src={morinoyu.standingBath.image.src}
                alt={morinoyu.standingBath.image.alt}
                width={1366}
                height={911}
                sizes="420px"
              />
              <p>{morinoyu.standingBath.description}</p>
            </div>
          </div>
          <div className={styles.bathGalleries}>
            {morinoyu.baths.map((bath) => (
              <div className={styles.bathGallery} key={bath.title}>
                <h4>{bath.title}</h4>
                <OnsenCarousel
                  label={`Morinoyu ${bath.title} photos`}
                  images={bath.images}
                />
              </div>
            ))}
          </div>
        </article>
        <StandardFeature feature={footbath} />
      </div>
    </section>
  );
}
