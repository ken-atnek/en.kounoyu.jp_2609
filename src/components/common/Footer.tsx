/* =======================================
 * こうの湯 英語版 Footer
 * URL: /src/components/common/Footer.tsx
 * Referenced in: /src/app/page.tsx
 * Created: 2026-09-12
 * Last updated: 2026-09-12
 * ======================================= */

import ExternalLink from '@/components/common/ExternalLink';
import ScrollLink from '@/components/common/ScrollLink';
import styles from './Footer.module.scss';

const navigationItems = [
  { label: 'Introduction', href: '#introduction' },
  { label: 'Rooms', href: '#rooms' },
  { label: 'Onsen', href: '#onsen' },
  { label: 'Meals', href: '#meals' },
  { label: 'Your Stay', href: '#stay' },
  { label: 'Access', href: '#access' },
  { label: 'Information', href: '#information' },
] as const;

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerMain}>
        <div className={styles.ryokanDetails}>
          <ScrollLink
            href="/"
            className={styles.logo}
            aria-label="Ryokan Kounoyu home"
          >
            <span className={styles.logoJa}>
              <svg aria-hidden="true">
                <use href="#svgLogo" />
              </svg>
            </span>
            <span className={styles.logoEn}>
              <svg aria-hidden="true">
                <use href="#svgLogoEn" />
              </svg>
            </span>
          </ScrollLink>
          <address className={styles.address}>
            <p>6784 Manganji, Minamioguni, Aso, Kumamoto 869-2402, Japan</p>
            <p>
              Telephone . <a href="tel:+81967488700">+81-967-48-8700</a>
            </p>
          </address>
          <div className={styles.socialLinks}>
            <ExternalLink
              href="https://www.instagram.com/fumotoryokan_kounoyu/"
              aria-label="Ryokan Kounoyu on Instagram"
            >
              <svg aria-hidden="true">
                <use href="#svgSnsInsta" />
              </svg>
            </ExternalLink>
            <ExternalLink
              href="https://www.facebook.com/FumotoLuGuankounoTang/"
              aria-label="Ryokan Kounoyu on Facebook"
            >
              <svg aria-hidden="true">
                <use href="#svgSnsFB" />
              </svg>
            </ExternalLink>
          </div>
        </div>
        <nav className={styles.footerNavigation} aria-label="Footer navigation">
          {navigationItems.map((item) => (
            <ScrollLink key={item.href} href={item.href}>
              {item.label}
            </ScrollLink>
          ))}
        </nav>
        <section
          className={styles.sisterRyokan}
          aria-labelledby="sister-ryokan-title"
        >
          <p className={styles.sisterLabel}>Sister Ryokan</p>
          <h2 id="sister-ryokan-title">Fumoto Ryokan</h2>
          <p className={styles.sisterDescription}>
            In the heart of Kurokawa Onsen, with a variety of private and
            open-air baths supplied by 100% free-flowing natural hot spring
            water.
          </p>
          <ExternalLink
            className={styles.sisterLink}
            href="https://www.fumotoryokan.com/en/"
          >
            Visit Fumoto Ryokan
          </ExternalLink>
        </section>
      </div>
      <div className={styles.footerBottom}>
        <small>©kounoyu</small>
        <ScrollLink
          href="/"
          className={styles.backToTop}
          aria-label="Back to top"
        >
          <span className="sr-only">Back to top</span>
        </ScrollLink>
      </div>
    </footer>
  );
}
