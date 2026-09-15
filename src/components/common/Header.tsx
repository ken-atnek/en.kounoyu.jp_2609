/* =======================================
 * こうの湯 英語版 Header
 * URL: /src/components/common/Header.tsx
 * Referenced in: /src/app/page.tsx
 * Created: 2026-09-12
 * Last updated: 2026-09-15
 * ======================================= */

'use client';

import { useState } from 'react';
import ExternalLink from '@/components/common/ExternalLink';
import ScrollLink from '@/components/common/ScrollLink';
import styles from './Header.module.scss';

const navigationItems = [
  { label: 'Introduction', href: '#introduction' },
  { label: 'Rooms', href: '#rooms' },
  { label: 'Onsen', href: '#onsen' },
  { label: 'Meals', href: '#meals' },
  { label: 'Your Stay', href: '#stay' },
  { label: 'Access', href: '#access' },
  { label: 'Information', href: '#information' },
] as const;

const BOOKING_URL =
  'https://go-fumoto6697.reservation.jp/en/hotels/kounoyu/searchInput';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((current) => !current);
  };

  return (
    <header className={styles.header}>
      <ScrollLink
        href="/"
        className={styles.logo}
        aria-label="Ryokan Kounoyu home"
      >
        <div className={styles.itemLogo}>
          <svg aria-hidden="true">
            <use href="#svgLogo" />
          </svg>
        </div>
        <div className={styles.itemLogoEn}>
          <svg aria-hidden="true">
            <use href="#svgLogoEn" />
          </svg>
        </div>
      </ScrollLink>
      <nav
        id="primary-navigation"
        className={`${styles.navigationList} ${isOpen ? styles.isOpen : ''}`}
        aria-label="Primary navigation"
        onClick={() => setIsOpen(false)}
      >
        {navigationItems.map((item) => (
          <ScrollLink key={item.href} href={item.href}>
            {item.label}
          </ScrollLink>
        ))}
      </nav>
      <ExternalLink href={BOOKING_URL} className={styles.bookingLink}>
        Booking
      </ExternalLink>
      <button
        type="button"
        className={`${styles.hamburgerButton} ${isOpen ? styles.isOpen : ''}`}
        onClick={toggleMenu}
        aria-controls="primary-navigation"
        aria-expanded={isOpen}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
      >
        <div aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
      </button>
    </header>
  );
}
