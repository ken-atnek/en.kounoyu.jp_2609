/* =======================================
 * こうの湯 英語版 TOP Your Stay データ
 * URL: /src/data/top-stay.ts
 * Referenced in: /src/components/top/TopStay.tsx
 * Created: 2026-09-12
 * Last updated: 2026-09-12
 * ======================================= */

export type TopStayImage = {
  src: string;
  alt: string;
};

export type TopStayLink = {
  label: 'WEB SITE' | 'GoogleMap';
  href: string;
};

export type TopStayNearbyItem = {
  title: string;
  travelTime: string;
  description: string;
  image: TopStayImage;
  links: TopStayLink[];
};

export const stayIntroduction = [
  'Whether you prefer to unwind in the soothing waters of the ryokan or stroll through the charming streets of Kurokawa Onsen, every journey can be enjoyed in your own way.',
  'From footbaths and local souvenir shops to onsen-hopping with a Nyuto Tegata pass, make',
  'Kono-Yu your base and discover Kurokawa at your own pace.',
];

export const stayGuideTitle = 'Shopping at the Front Desk';

export const stayGuideItems = [
  {
    title: 'Souvenir Shop',
    description:
      'At the souvenir shop beside the front desk on the first floor of the main building, you’ll find Kono-Yu original items along with local sweets and gifts from the area.',
    image: {
      src: '/images/stay/souvenir-shop.webp',
      alt: 'Souvenir shop beside the front desk at Kono-Yu',
    },
  },
  {
    title: 'Onsen ticket (Nyuto Tegata)',
    description:
      'The Nyuto Tegata pass allows you to visit the open-air baths of three participating ryokan within six months of purchase. Various events and campaigns are also held, offering prizes such as certificates, original Kurokawa Onsen merchandise, and accommodation vouchers.',
    price: 'Price: ¥1,300',
    image: {
      src: '/images/stay/nyuto-tegata.webp',
      alt: 'Wooden Nyuto Tegata onsen-hopping passes',
    },
  },
];

export const stayNearbyItems: TopStayNearbyItem[] = [
  {
    title: 'Kurokawa Onsen',
    travelTime: 'Approximately 3–5 Minutes by Car',
    description:
      'The charming streets of Kurokawa Onsen are lined with traditional wooden ryokan and local shops. As you listen to the gentle sound of the river, enjoy onsen-hopping, shopping, and sampling local treats along the way.',
    image: {
      src: '/images/stay/nearby/kurokawa-onsen.webp',
      alt: 'Visitors walking through Kurokawa Onsen in yukata',
    },
    links: [
      {
        label: 'WEB SITE',
        href: 'https://www.kurokawaonsen.or.jp/en/',
      },
      {
        label: 'GoogleMap',
        href: 'https://www.google.com/maps/search/?api=1&query=Kurokawa+Onsen',
      },
    ],
  },
  {
    title: 'Kurokawa Onsen General Information Center “Kazenoya”',
    travelTime: 'Approximately 3 Minutes by Car',
    description:
      'Located in the heart of Kurokawa Onsen, Kazenoya is the area’s main visitor information center. It offers a spacious parking area and public restrooms, as well as complimentary Kurokawa Onsen maps and brochures for local ryokan.',
    image: {
      src: '/images/stay/nearby/kazenoya.webp',
      alt: 'Kazenoya information center in Kurokawa Onsen',
    },
    links: [
      {
        label: 'WEB SITE',
        href: 'https://www.kurokawaonsen.or.jp/en/',
      },
      {
        label: 'GoogleMap',
        href: 'https://goo.gl/maps/6QF31',
      },
    ],
  },
  {
    title: 'Jizo-do',
    travelTime: 'Approximately 4 Minutes by Car',
    description:
      'Jizo-do stands at the corner at the foot of Igo-zaka, in the center of Kurokawa Onsen. Many visitors hang their used wooden Nyuto Tegata passes here as offerings, much like traditional ema prayer plaques.',
    image: {
      src: '/images/stay/nearby/jizo-do.webp',
      alt: 'Jizo-do in the center of Kurokawa Onsen',
    },
    links: [
      {
        label: 'GoogleMap',
        href: 'https://goo.gl/maps/XAYKE',
      },
    ],
  },
  {
    title: 'Jizo-Yu',
    travelTime: 'Approximately 4 Minutes by Car',
    description:
      'Jizo-yu, one of Kurokawa Onsen’s original hot spring baths, is located across the road from Jizo-do. It is a traditional communal bathhouse used by local residents.',
    image: {
      src: '/images/stay/nearby/jizo-yu.webp',
      alt: 'Traditional Jizo-Yu communal bathhouse',
    },
    links: [
      {
        label: 'GoogleMap',
        href: 'https://goo.gl/maps/xpspN',
      },
    ],
  },
  {
    title: 'Koibitotachino-Oka “Lover’s Hill”',
    travelTime: 'Approximately 10 Minutes by Car',
    description:
      'Located on the Hiranodai Plateau, a short distance from Kurokawa Onsen, this scenic viewpoint offers sweeping views from the Kuju Mountains to Mount Aso. It has also been officially recognized as one of Japan’s “Lovers’ Sanctuaries.”',
    image: {
      src: '/images/stay/nearby/lovers-hill.webp',
      alt: 'Scenery and viewing platform at Lover’s Hill',
    },
    links: [
      {
        label: 'GoogleMap',
        href: 'https://goo.gl/maps/yrLLf',
      },
    ],
  },
  {
    title: 'Sundries shop Fukuroku',
    travelTime: 'Approximately 4 Minutes by Car',
    description:
      'Located along Igo-zaka, this charming shop offers a distinctive selection of colorful towels, hand towels, traditional tenugui cloths, handmade soaps, and other locally inspired goods.',
    image: {
      src: '/images/stay/nearby/fukuroku.webp',
      alt: 'Fukuroku sundries shop in Kurokawa Onsen',
    },
    links: [
      {
        label: 'GoogleMap',
        href: 'https://goo.gl/maps/gD9Om',
      },
    ],
  },
  {
    title: 'Confectionery shop “Patisserie Roku”',
    travelTime: 'Approximately 4 Minutes by Car',
    description:
      'As you walk down Igo-zaka toward Jizo-yu, the gentle aroma of freshly baked sweets begins to fill the air. This small bakery is an inviting place that is hard to pass by without stopping.',
    image: {
      src: '/images/stay/nearby/patisserie-roku.webp',
      alt: 'Patisserie Roku confectionery shop in Kurokawa Onsen',
    },
    links: [
      {
        label: 'WEB SITE',
        href: 'https://www.kurokawa-roku.jp/',
      },
      {
        label: 'GoogleMap',
        href: 'https://goo.gl/maps/DT7g3',
      },
    ],
  },
];
