/* =======================================
 * こうの湯 英語版 TOP Rooms セクション
 * URL: /src/components/top/TopRooms.tsx
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
  roomItems,
  roomsIntroduction,
  type TopRoomsImage,
} from '@/data/top-rooms';
import styles from './TopRooms.module.scss';

type RoomCarouselProps = {
  label: string;
  caption: 'ROOM' | 'ONSEN';
  images: TopRoomsImage[];
};

function RoomCarousel({ label, caption, images }: RoomCarouselProps) {
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
              sizes="(max-width: 1119px) 48vw, 536px"
            />
          </SplideSlide>
        ))}
      </Splide>
      <p className={styles.mediaCaption}>{caption}</p>
    </div>
  );
}

export default function TopRooms() {
  return (
    <section
      id="rooms"
      className={styles.topRooms}
      aria-labelledby="rooms-title"
    >
      <div className={styles.sectionHeader}>
        <Image
          className={styles.sectionVisual}
          src="/images/rooms/maisonette/terraced/room-01.webp"
          alt=""
          fill
          sizes="100vw"
        />
        <div className={styles.sectionTitle}>
          <h2>ROOMS</h2>
        </div>
      </div>
      <p className={styles.introduction}>
        {roomsIntroduction.map((line, index) => (
          <Fragment key={line}>
            {line}
            {index < roomsIntroduction.length - 1 && <br />}
          </Fragment>
        ))}
      </p>
      <div className={styles.roomList}>
        {roomItems.map((room) => (
          <article key={room.number}>
            <div className={styles.roomHeading}>
              <p>ROOM TYPE - {room.number}</p>
              <h3>{room.title}</h3>
            </div>
            <div className={styles.variantList}>
              {room.variants.map((variant, variantIndex) => (
                <div
                  className={styles.roomVariant}
                  key={variant.label ?? `${room.number}-${variantIndex}`}
                >
                  {variant.label && (
                    <h4 className={styles.variantTitle}>{variant.label}</h4>
                  )}
                  <div className={styles.mediaGrid}>
                    <RoomCarousel
                      label={`${room.title}${variant.label ? ` ${variant.label}` : ''} room photos`}
                      caption="ROOM"
                      images={variant.roomImages}
                    />
                    <RoomCarousel
                      label={`${room.title}${variant.label ? ` ${variant.label}` : ''} private onsen photos`}
                      caption="ONSEN"
                      images={variant.onsenImages}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.roomDetails}>
              <div className={styles.floorPlans}>
                {Array.from({ length: room.floorPlanCount }, (_, index) => (
                  <Image
                    src="/images/_dummy/floor-plan.webp"
                    alt={`${room.title} floor plan${room.floorPlanCount > 1 ? ` ${index + 1}` : ''}`}
                    width={320}
                    height={420}
                    key={`${room.number}-${index}`}
                  />
                ))}
              </div>
              <div className={styles.roomDescription}>
                <p>{room.description}</p>
                <dl>
                  <div>
                    <dt>Accommodation arrangement</dt>
                    <dd>{room.arrangement}</dd>
                  </div>
                  <div>
                    <dt>Capacity</dt>
                    <dd>{room.capacity}</dd>
                  </div>
                </dl>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
