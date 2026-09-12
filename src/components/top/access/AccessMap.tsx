/* =======================================
 * こうの湯 英語版 TOP Access 地図
 * URL: /src/components/top/access/AccessMap.tsx
 * Referenced in: /src/components/top/TopAccess.tsx
 * Created: 2026-09-12
 * Last updated: 2026-09-12
 * ======================================= */

import ExternalLink from '@/components/common/ExternalLink';
import { accessRouteLinks } from '@/data/top-access';
import styles from '../TopAccess.module.scss';

export default function AccessMap() {
  return (
    <div className={styles.mapBlock}>
      <div className={styles.mapFrame}>
        <iframe
          title="Map showing Ryokan Kono-Yu"
          src="https://www.google.com/maps?q=Ryokan%20Kono-Yu%2C%206784%20Manganji%2C%20Minamioguni-machi%2C%20Aso-gun%2C%20Kumamoto%2C%20Japan&hl=en&output=embed"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <div className={styles.addressBlock}>
        <div className={styles.addressText}>
          <p>Ryokan Kono-Yu</p>
          <address>
            6784, Manganji, Minamioguni-machi Aso-gun, Kumamoto, 869-2402,
            Japan
          </address>
        </div>
        <ExternalLink href={accessRouteLinks.googleMap}>Google Maps</ExternalLink>
      </div>
    </div>
  );
}
