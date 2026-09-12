/* =======================================
 * こうの湯 英語版 TOP Meals データ
 * URL: /src/data/top-meals.ts
 * Referenced in: /src/components/top/TopMeals.tsx
 * Created: 2026-09-12
 * Last updated: 2026-09-12
 * ======================================= */

export type TopMealImage = {
  src: string;
  alt: string;
};

export const mealsIntroduction = [
  'As a general rule, dinner and breakfast are included.',
  'We’ll serve a meal at the restaurant.',
  'It’s a Japanese course menu with cuisine made by carefully selected local ingredients.',
];

export const dinner = {
  title: 'Dinner',
  subtitle: 'Fresh Japanese cuisine',
  description:
    'Our kaiseki cuisine celebrates the finest seasonal ingredients from the local area, carefully prepared to preserve their natural flavors. Each dish reflects the beauty of the season while offering a taste unique to this region. Let the bounty of the season enrich your evening with us.',
  image: {
    src: '/images/meals/dinner.webp',
    alt: 'Kaiseki dinner featuring locally sourced seasonal ingredients',
  },
};

export const breakfast = {
  title: 'Breakfast',
  subtitle: 'Breakfast will be in Japanese Zen.',
  description:
    'Begin your day with a gently flavored Japanese breakfast, thoughtfully prepared with locally sourced ingredients. Each dish is carefully crafted to bring out the natural flavors of its ingredients. Enjoy a wholesome and comforting start to your morning.',
  image: {
    src: '/images/meals/breakfast.webp',
    alt: 'Japanese breakfast served at Kono-Yu',
  },
};

export const drinks = {
  title: 'Drinks',
  items: [
    {
      title: 'Sake',
      description: [
        'Sake is a Japanese rice wine.',
        'It has been enjoyed in Japan for a long time.',
        'You can drink it hot or cold.',
        'Its alcohol content is about 15%.',
      ],
      image: {
        src: '/images/meals/sake.webp',
        alt: 'Japanese sake served in a ceramic cup',
      },
    },
    {
      title: 'Shochu',
      description: [
        'Shochu is a Japanese vodka made from rice, barley, or sweet potato.',
        'Sake is fermented, but shochu is distilled.',
        'Shochu has an alcohol content of about 25 to 45%.',
        'You can drink barley and sweet potato shochu made from hot spring water at our hotel.',
        'It is normally mixed with hot or cold water.',
      ],
      image: {
        src: '/images/meals/shochu.webp',
        alt: 'A glass of shochu served with ice',
      },
    },
  ],
};

export const restaurant = {
  title: 'Restaurant',
  names: ['-noasobi-', '-roku-'],
  description:
    'We offer two distinctive dining spaces, each with its own inviting atmosphere. Surrounded by the warmth of natural wood, savor our seasonal kaiseki cuisine at a relaxed pace. Enjoy a comfortable dining experience that complements your journey and personal preferences.',
  images: [
    {
      src: '/images/meals/restaurant-noasobi.webp',
      alt: 'Noasobi restaurant with warm wooden furnishings',
    },
    {
      src: '/images/meals/restaurant-roku.webp',
      alt: 'Roku restaurant dining room',
    },
  ] satisfies TopMealImage[],
};
