/* =======================================
 * こうの湯 英語版 TOP Rooms データ
 * URL: /src/data/top-rooms.ts
 * Referenced in: /src/components/top/TopRooms.tsx
 * Created: 2026-09-12
 * Last updated: 2026-09-12
 * ======================================= */

export type TopRoomsImage = {
  src: string;
  alt: string;
};

export type TopRoomsVariant = {
  label?: string;
  roomImages: TopRoomsImage[];
  onsenImages: TopRoomsImage[];
};

export type TopRoomsItem = {
  number: string;
  title: string;
  variants: TopRoomsVariant[];
  floorPlanCount: number;
  description: string;
  arrangement: string;
  capacity: string;
};

export const roomsIntroduction = [
  'Our ten guest rooms are arranged in two styles: five are private, stand-alone accommodations,',
  'while the other five are set within a terraced building that follows the natural slope of the hillside.',
  'Each room has been thoughtfully designed to provide the highest possible level of privacy.',
  'Every guest room also features its own private open-air bath, supplied with 100% free-flowing',
  'natural hot spring water.',
];

export const roomItems: TopRoomsItem[] = [
  {
    number: '01',
    title: 'One story Type',
    variants: [
      {
        roomImages: [
          {
            src: '/images/rooms/one-story/room-01.webp',
            alt: 'One-story guest room with twin beds and tatami seating area',
          },
          {
            src: '/images/rooms/one-story/room-02.webp',
            alt: 'Bedroom in a one-story guest room',
          },
          {
            src: '/images/rooms/one-story/room-03.webp',
            alt: 'Tatami seating area in a one-story guest room',
          },
        ],
        onsenImages: [
          {
            src: '/images/rooms/one-story/onsen-01.webp',
            alt: 'Private open-air bath in a one-story guest room',
          },
          {
            src: '/images/rooms/one-story/onsen-02.webp',
            alt: 'Stone bath in a one-story guest room',
          },
          {
            src: '/images/rooms/one-story/onsen-03.webp',
            alt: 'Private onsen overlooking the surrounding landscape',
          },
        ],
      },
    ],
    floorPlanCount: 1,
    description:
      'The rooms of the one-story type includes open-air bath and shower room. Scenery seen from open-air bath is better because the bath is located on a hill. This room is a typical Japanese-style room in a serene surroundings.',
    arrangement:
      '10J + Hiroen (Veranda) + Open Air Bath + Shower room + Shower toilet',
    capacity: '2-5 people',
  },
  {
    number: '02',
    title: 'Maisonette type',
    variants: [
      {
        label: 'Two-Story Room in a Terraced Building',
        roomImages: [
          {
            src: '/images/rooms/maisonette/terraced/room-01.webp',
            alt: 'Bedroom in a two-story terraced guest room',
          },
          {
            src: '/images/rooms/maisonette/terraced/room-02.webp',
            alt: 'Sleeping area in a two-story terraced guest room',
          },
          {
            src: '/images/rooms/maisonette/terraced/room-03.webp',
            alt: 'Living area in a two-story terraced guest room',
          },
          {
            src: '/images/rooms/maisonette/terraced/room-04.webp',
            alt: 'Interior of a two-story terraced guest room',
          },
          {
            src: '/images/rooms/maisonette/terraced/room-05.webp',
            alt: 'Guest room amenities in a two-story terraced room',
          },
        ],
        onsenImages: [
          {
            src: '/images/rooms/maisonette/terraced/onsen-01.webp',
            alt: 'Private garden onsen in a two-story terraced guest room',
          },
          {
            src: '/images/rooms/maisonette/terraced/onsen-02.webp',
            alt: 'Stone-lined bath in a two-story terraced guest room',
          },
          {
            src: '/images/rooms/maisonette/terraced/onsen-03.webp',
            alt: 'Private open-air bath surrounded by greenery',
          },
          {
            src: '/images/rooms/maisonette/terraced/onsen-04.webp',
            alt: 'Indoor bath in a two-story terraced guest room',
          },
          {
            src: '/images/rooms/maisonette/terraced/onsen-05.webp',
            alt: 'Bathing area in a two-story terraced guest room',
          },
        ],
      },
      {
        label: 'Private Detached Two-Story Room',
        roomImages: [
          {
            src: '/images/rooms/maisonette/detached/room-01.webp',
            alt: 'Bedroom in a private detached two-story guest room',
          },
          {
            src: '/images/rooms/maisonette/detached/room-02.webp',
            alt: 'Sleeping area in a private detached two-story guest room',
          },
          {
            src: '/images/rooms/maisonette/detached/room-03.webp',
            alt: 'Living area in a private detached two-story guest room',
          },
          {
            src: '/images/rooms/maisonette/detached/room-04.webp',
            alt: 'Interior of a private detached two-story guest room',
          },
          {
            src: '/images/rooms/maisonette/detached/room-05.webp',
            alt: 'Guest room amenities in a private detached two-story room',
          },
        ],
        onsenImages: [
          {
            src: '/images/rooms/maisonette/detached/onsen-01.webp',
            alt: 'Cave-style private onsen in the detached maisonette',
          },
          {
            src: '/images/rooms/maisonette/detached/onsen-02.webp',
            alt: 'Private outdoor bath in the detached maisonette',
          },
        ],
      },
    ],
    floorPlanCount: 2,
    description:
      'The first floor is a wooden floor. There is an open-air bath with nice views, indoor bath, wash basin, and a toilet. The second floor is a Japanese-style room. Futon is prepared here. On a clear day you can see the outer rim of Aso.',
    arrangement:
      '10J + Hiroen (Veranda) + Living room + Open Air Bath + Indoor bath + Shower room + Shower toilet',
    capacity: '2-4 people',
  },
  {
    number: '03',
    title: 'Private Detached Suite',
    variants: [
      {
        roomImages: [
          {
            src: '/images/rooms/private-suite/room-01.webp',
            alt: 'Spacious Japanese-Western room in the private detached suite',
          },
          {
            src: '/images/rooms/private-suite/room-02.webp',
            alt: 'Bedroom in the private detached suite',
          },
          {
            src: '/images/rooms/private-suite/room-03.webp',
            alt: 'Living area in the private detached suite',
          },
          {
            src: '/images/rooms/private-suite/room-04.webp',
            alt: 'Interior of the private detached suite',
          },
          {
            src: '/images/rooms/private-suite/room-05.webp',
            alt: 'Guest room amenities in the private detached suite',
          },
        ],
        onsenImages: [
          {
            src: '/images/rooms/private-suite/onsen-01.webp',
            alt: 'Semi-open-air bath in the private detached suite',
          },
        ],
      },
    ],
    floorPlanCount: 1,
    description:
      'A private, stand-alone suite featuring a spacious Japanese-Western room and a semi-open-air bath supplied with free-flowing natural hot spring water. Surrounded by tranquility, it offers an intimate setting for anniversaries and other special stays with someone dear to you.',
    arrangement:
      '10J + Hiroen (Veranda) + Living room + Open Air Bath + Indoor bath + Shower room + Shower toilet',
    capacity: '2-5 people',
  },
];
