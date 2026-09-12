/* =======================================
 * こうの湯 英語版 TOP Reservation セクション
 * URL: /src/components/top/TopReservation.tsx
 * Referenced in: /src/app/page.tsx
 * Created: 2026-09-12
 * Last updated: 2026-09-12
 * ======================================= */

import ExternalLink from '@/components/common/ExternalLink';
import styles from './TopReservation.module.scss';

const BOOKING_URL =
  'https://go-fumoto6697.reservation.jp/en/hotels/kounoyu/searchInput';

export default function TopReservation() {
  return (
    <section
      className={styles.topReservation}
      aria-labelledby="reservation-title"
    >
      <h2 id="reservation-title">Your quiet Kurokawa stay begins here.</h2>
      <p className={styles.description}>
        Select your dates to view available rooms and meal plans.
      </p>
      <ExternalLink className={styles.bookingLink} href={BOOKING_URL}>
        Booking
      </ExternalLink>
      <p className={styles.telephone}>
        <span>Telephone</span>
        <a href="tel:+81967488700">+81-967-48-8700</a>
      </p>
    </section>
  );
}
