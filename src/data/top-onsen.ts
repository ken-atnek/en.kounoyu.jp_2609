/* =======================================
 * こうの湯 英語版 TOP Onsen データ
 * URL: /src/data/top-onsen.ts
 * Referenced in: /src/components/top/TopOnsen.tsx
 * Created: 2026-09-12
 * Last updated: 2026-09-12
 * ======================================= */

export type TopOnsenImage = {
  src: string;
  alt: string;
};

export type TopOnsenFeature = {
  title: string[];
  eligibility: string;
  description: string[];
  hours?: string[];
  images: TopOnsenImage[];
};

export const onsenIntroduction = [
  'Kono-Yu’s public open-air bathing area features a standing bath known as the deepest in Japan,',
  'reaching a maximum depth of 162 cm.',
  'All of our baths are supplied by Kono-Yu’s own natural hot spring source, which rises from',
  'within the ryokan grounds. The mineral-rich water is also believed to have skin-beautifying',
  'properties. Immerse yourself in 100% fresh, free-flowing natural hot spring water.',
];

export const privateInRoomOnsen: TopOnsenFeature = {
  title: ['Private In-Room Onsen'],
  eligibility: 'Overnight Guests Only',
  description: [
    'Every guest room features its own private open-air bath, supplied with 100% free-flowing natural hot spring water. No advance booking is required, and the bath is exclusively yours to enjoy at any time throughout your stay. There is no need to visit a shared public bath or be mindful of other guests—simply relax and soak whenever you wish, for as long as you like.',
  ],
  images: [
    {
      src: '/images/rooms/one-story/onsen-01.webp',
      alt: 'Private open-air bath supplied with natural hot spring water',
    },
    {
      src: '/images/rooms/one-story/onsen-02.webp',
      alt: 'Stone-lined private bath in a guest room',
    },
    {
      src: '/images/rooms/one-story/onsen-03.webp',
      alt: 'Private in-room onsen overlooking the landscape',
    },
  ],
};

export const tenNoYu: TopOnsenFeature = {
  title: ['Private Open-Air Bath', '“Ten-no-Yu”'],
  eligibility: 'Overnight Guests Only',
  description: [
    'You can consider the private open-air bath if you are reluctant to enter the public bath.',
    'You can enjoy the landscape and feel the wind while taking a bath.',
    'The private open-air bath needs to be reserved per 50 minutes.',
  ],
  hours: [
    '3:00 PM–10:00 PM / 7:00 AM–9:00 AM',
    'Advance reservations are required for each 50-minute session.',
  ],
  images: [
    {
      src: '/images/onsen/ten-no-yu.webp',
      alt: 'Private open-air bath Ten-no-Yu overlooking the mountains',
    },
  ],
};

export const morinoyu = {
  title: ['Public Open-Air Bath', '“Morinoyu”'],
  eligibility: 'Open to Overnight & Day Guests',
  description: [
    'Our open-air baths are separated by gender. In keeping with Japanese onsen etiquette, guests bathe without clothing.',
    'Please wash and rinse thoroughly before entering the bath. Do not place towels in the bathwater, and dry yourself before returning to the changing area.',
  ],
  hours: ['Overnight Guests: 7:00 AM–10:00 PM', 'Day Guests: 8:30 AM–9:00 PM'],
  standingBath: {
    image: {
      src: '/images/onsen/morinoyu/mens-bath-02.webp',
      alt: 'Deep standing bath in the men’s open-air bathing area',
    },
    description:
      'The men’s open-air bath features Japan’s deepest standing bath, reaching a maximum depth of 162 cm. Immerse yourself fully in the hot spring while enjoying panoramic views of the majestic Aso landscape.',
  },
  baths: [
    {
      title: 'Men’s Bath',
      images: [
        {
          src: '/images/onsen/morinoyu/mens-bath-01.webp',
          alt: 'Morinoyu men’s open-air bath surrounded by forest',
        },
        {
          src: '/images/onsen/morinoyu/mens-bath-02.webp',
          alt: 'Deep standing bath in the men’s open-air bathing area',
        },
        {
          src: '/images/onsen/morinoyu/mens-bath-03.webp',
          alt: 'Changing area for the Morinoyu men’s bath',
        },
      ],
    },
    {
      title: 'Women’s Bath',
      images: [
        {
          src: '/images/onsen/morinoyu/womens-bath-01.webp',
          alt: 'Morinoyu women’s open-air bath surrounded by greenery',
        },
        {
          src: '/images/onsen/morinoyu/womens-bath-02.webp',
          alt: 'Standing bath in the women’s open-air bathing area',
        },
        {
          src: '/images/onsen/morinoyu/womens-bath-03.webp',
          alt: 'Cave bath in the women’s open-air bathing area',
        },
        {
          src: '/images/onsen/morinoyu/womens-bath-04.webp',
          alt: 'Changing area for the Morinoyu women’s bath',
        },
      ],
    },
  ],
};

export const footbath: TopOnsenFeature = {
  title: ['Footbath'],
  eligibility: 'Open to Overnight & Day Guests',
  description: [
    'Footbath is located near the entrance. It is available to everyone but not just staying guests.',
    'It is convenient to wait for day trip bathing.',
  ],
  images: [
    {
      src: '/images/onsen/footbath.webp',
      alt: 'Footbath near the entrance to Kono-Yu',
    },
  ],
};
