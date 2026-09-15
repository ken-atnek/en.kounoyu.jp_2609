/* =======================================
 * こうの湯 英語版 TOP Meals セクション
 * URL: /src/components/top/TopMeals.tsx
 * Referenced in: /src/app/page.tsx
 * Created: 2026-09-12
 * Last updated: 2026-09-14
 * ======================================= */

import { Fragment } from 'react';
import Image from 'next/image';
import {
  breakfast,
  dinner,
  drinks,
  mealsIntroduction,
  restaurant,
} from '@/data/top-meals';
import styles from './TopMeals.module.scss';

export default function TopMeals() {
  return (
    <section
      id="meals"
      className={styles.topMeals}
      aria-labelledby="meals-title"
    >
      <div className={styles.sectionHeader}>
        <Image
          className={styles.sectionVisual}
          src="/images/meals/hero.webp"
          alt=""
          fill
          sizes="100vw"
        />
        <div className={styles.sectionTitle}>
          <h2 id="meals-title">MEALS</h2>
        </div>
      </div>
      <p className={styles.introduction}>
        {mealsIntroduction.map((line, index) => (
          <Fragment key={line}>
            {line}
            {index < mealsIntroduction.length - 1 && <br />}
          </Fragment>
        ))}
      </p>
      <div className={styles.mealList}>
        <article className={styles.dinner}>
          <div className={styles.textColumn}>
            <h3>{dinner.title}</h3>
            <h4>{dinner.subtitle}</h4>
            <p>{dinner.description}</p>
          </div>
          <Image
            src={dinner.image.src}
            alt={dinner.image.alt}
            width={1366}
            height={911}
            sizes="776px"
          />
        </article>
        <article className={styles.breakfast}>
          <Image
            src={breakfast.image.src}
            alt={breakfast.image.alt}
            width={1680}
            height={1120}
            sizes="646px"
          />
          <div className={styles.textColumn}>
            <h3>{breakfast.title}</h3>
            <h4>{breakfast.subtitle}</h4>
            <p>{breakfast.description}</p>
          </div>
        </article>
        <article className={styles.drinks}>
          {drinks.items.map((drink, drinkIndex) => (
            <section className={styles.drinkItem} key={drink.title}>
              <div className={styles.drinkDetail}>
                {drinkIndex === 0 && <h3>{drinks.title}</h3>}
                <h4>{drink.title}</h4>
                <p>
                  {drink.description.map((line, index) => (
                    <Fragment key={line}>
                      {line}
                      {index < drink.description.length - 1 && <br />}
                    </Fragment>
                  ))}
                </p>
              </div>
              <Image
                src={drink.image.src}
                alt={drink.image.alt}
                width={638}
                height={425}
                sizes="752px"
              />
            </section>
          ))}
        </article>
        <article className={styles.restaurant}>
          <div className={styles.restaurantImages}>
            {restaurant.images.map((image, index) => (
              <figure className={styles.restaurantImage} key={image.src}>
                <figcaption>{restaurant.names[index]}</figcaption>
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={1366}
                  height={917}
                  sizes="646px"
                />
              </figure>
            ))}
          </div>
          <div className={styles.textColumn}>
            <h3>{restaurant.title}</h3>
            <div className={styles.restaurantNames}>
              {restaurant.names.map((name) => (
                <p key={name}>{name}</p>
              ))}
            </div>
            <p>{restaurant.description}</p>
          </div>
        </article>
      </div>
    </section>
  );
}
