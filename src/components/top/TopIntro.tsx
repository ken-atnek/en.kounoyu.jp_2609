/* =======================================
 * こうの湯 英語版 TOP Introduction セクション
 * URL: /src/components/top/TopIntro.tsx
 * Referenced in: /src/app/page.tsx
 * Created: 2026-09-12
 * Last updated: 2026-09-12
 * ======================================= */

import styles from './TopIntro.module.scss';

const featureItems = [
  {
    label: 'Private by design',
    title: 'Ten Private Retreats',
    description:
      'All ten guest rooms are individually situated, offering couples and families a quiet stay with a greater sense of privacy.',
  },
  {
    label: 'A private onsen in every room',
    title: 'Your own open-air bath',
    description:
      'Every guest room features a private open-air bath supplied with 100% free-flowing natural hot spring water.',
  },
  {
    label: 'Local Kumamoto cuisine',
    title: 'Seasonal kaiseki dining',
    description:
      'Carefully selected regional ingredients served for dinner and breakfast.',
  },
];

const informationColumns = [
  [
    { label: 'In / Out', value: '15:00／10:00' },
    { label: 'Style of accommodation', value: 'Japanese room' },
    { label: 'Toilets', value: 'Western style & Toilet with shower' },
    { label: 'Meals available', value: 'Evening meal & breakfast' },
    { label: 'Number of rooms', value: '10 rooms' },
  ],
  [
    { label: 'Capacity', value: '45 people' },
    { label: 'Smoking/Non-smoking', value: 'Smoking' },
    { label: 'English speaking ability', value: 'No' },
    { label: 'Annual Average Temperature', value: '12.9 °C' },
  ],
];

export default function TopIntro() {
  return (
    <section
      id="introduction"
      className={styles.topIntro}
      aria-labelledby="introduction-title"
    >
      <article>
        <h2>
          Beyond the rising steam of Kurokawa, a haven of tranquility awaits.
        </h2>
        <div className={styles.video}>
          <iframe
            src="https://www.youtube-nocookie.com/embed/2oXOIMuD31g"
            title="Ryokan Kounoyu introduction video"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
        <p className={styles.description}>
          Set on a hillside just beyond the center of Kurokawa Onsen, Kono-Yu is
          an intimate ryokan with only ten private guest rooms. Each room
          features its own open-air bath, supplied with 100% free-flowing
          natural hot spring water.
          <br />
          After enjoying the lively atmosphere of the hot spring town, retreat
          to the peace and privacy of Kono-Yu—where you can slow down, unwind,
          and simply enjoy the quiet.
        </p>
        <ul>
          {featureItems.map((item) => (
            <li key={item.title}>
              <p className={styles.featureLabel}>{item.label}</p>
              <h3>{item.title}</h3>
              <p className={styles.featureDescription}>{item.description}</p>
            </li>
          ))}
        </ul>
        <div className={styles.information}>
          <h3>Basic Information</h3>
          <div className={styles.informationColumns}>
            {informationColumns.map((column, columnIndex) => (
              <dl key={columnIndex} className={styles.informationList}>
                {column.map((item) => (
                  <div key={item.label} className={styles.informationRow}>
                    <dt>{item.label}</dt>
                    <dd>{item.value}</dd>
                  </div>
                ))}
              </dl>
            ))}
          </div>
        </div>
      </article>
    </section>
  );
}
