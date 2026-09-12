/* =======================================
 * こうの湯 英語版 TOP Welcome スライダー
 * URL: /src/components/top/TopWelcomeSlider.tsx
 * Referenced in: /src/app/page.tsx
 * Created: 2026-09-12
 * Last updated: 2026-09-12
 * ======================================= */
'use client';

import { Fragment } from 'react';
import Image from 'next/image';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import styles from './TopWelcomeSlider.module.scss';

const welcomeItems = [
  {
    src: '/images/welcome/japanese-sandals.webp',
    width: 1040,
    height: 694,
    alt: 'Japanese leather-soled sandals arranged at the entrance',
    title: 'Japanese leather-soled sandals',
    description: [
      'Please take off your shoes within the hotel area.',
      'When moving between facilities in the hotel, please use slippers.',
      'When going out to the garden or the carpark in the hotel, please use “Setta”(Japanese leather-soled sandals).',
    ],
  },
  {
    src: '/images/welcome/yukata.webp',
    width: 1040,
    height: 694,
    alt: 'Guests wearing yukata in a Japanese-style room',
    title: 'Yukata',
    description: [
      'You will find a yukata in the guest room.',
      'Yukata is a kimono-style sleepwear.',
      'You can also wear this to the public bath or to the public eating area.',
    ],
  },
  {
    src: '/images/welcome/tatami-room.webp',
    width: 1040,
    height: 698,
    alt: 'Traditional Japanese guest room with tatami flooring',
    title: 'Tatami room',
    description: [
      'A tatami is a mat used to cover the floor in a Japanese room.',
      'It’s made of bundled straw and covered with tightly woven rushes called igusa.',
      'Japanese sit down and lie directly on the tatami taking off their shoes here.',
    ],
  },
  {
    src: '/images/welcome/futon.webp',
    width: 638,
    height: 425,
    alt: 'Futon bedding prepared on a tatami floor',
    title: 'Futon',
    description: [
      'At night, you sleep in futon on the tatami floor except certain guest rooms.',
      'The staff will spread out the futon on the tatami floor while you’re having dinner at the restaurant.',
    ],
  },
  {
    src: '/images/welcome/kotatsu.webp',
    width: 1040,
    height: 691,
    alt: 'Kotatsu table in a traditional Japanese guest room',
    title: 'Kotatsu',
    description: [
      '【Winter Only】Kotatsu is a traditional heating appliances of Japan.',
      'This is a low table with a heat source. Put the lower body under the blankets during use.',
      "It's so comfortable that you don't want to leave once you have entered.",
    ],
  },
  {
    src: '/images/welcome/welcome-tea.webp',
    width: 1040,
    height: 694,
    alt: 'Japanese green tea and confectionery served as a welcome refreshment',
    title: 'Japanese tea and snacks to go with tea',
    description: [
      "We'll serve you with Japanese green tea as a welcome drink upon your arrival.",
      'Please also enjoy delicious Japanese confectionery together.',
    ],
  },
  {
    src: '/images/welcome/shower-toilet.webp',
    width: 1040,
    height: 694,
    alt: 'Japanese toilet equipped with shower controls',
    title: 'Toilet with shower',
    description: [
      'The Japanese have been using toilets with shower for over 30 years.',
      'These toilets allow you to wash yourself with water of a comfortable temperature, and to dry yourself with breezy air.',
      'These toilets are also equipped with heated seats and bidet.',
    ],
  },
  {
    src: '/images/welcome/vending-machine.webp',
    width: 640,
    height: 427,
    alt: 'Drink vending machines on the ryokan grounds',
    title: 'Automatic vending machine',
    description: [
      'A machine that gives out drinks you desired when coins or notes are inserted.',
    ],
  },
];

export default function TopWelcomeSlider() {
  return (
    <section
      className={styles.topWelcomeSlider}
      aria-labelledby="welcome-title"
    >
      <h2 id="welcome-title">Warm Welcome in Traditional Japanese Style</h2>
      <Splide
        aria-label="Traditional Japanese hospitality and facilities"
        options={{
          type: 'loop',
          autoWidth: true,
          gap: '2.4rem',
          focus: 'center',
          start: 1,
          arrows: true,
          pagination: false,
          drag: true,
          speed: 800,
        }}
      >
        {welcomeItems.map((item) => (
          <SplideSlide key={item.src} className={styles.slideItem}>
            <Image
              src={item.src}
              width={item.width}
              height={item.height}
              sizes="328px"
              alt={item.alt}
            />
            <h3>{item.title}</h3>
            <p>
              {item.description.map((line, index) => (
                <Fragment key={line}>
                  {line}
                  {index < item.description.length - 1 && <br />}
                </Fragment>
              ))}
            </p>
          </SplideSlide>
        ))}
      </Splide>
    </section>
  );
}
