/* =======================================
 * こうの湯 英語版 TOP Access 共通部品
 * URL: /src/components/top/access/AccessRouteParts.tsx
 * Referenced in: /src/components/top/access/AccessCar.tsx, /src/components/top/access/AccessTransit.tsx
 * Created: 2026-09-12
 * Last updated: 2026-09-12
 * ======================================= */

import type { ReactNode } from 'react';
import ExternalLink from '@/components/common/ExternalLink';
import styles from '../TopAccess.module.scss';

export const cx = (...classNames: string[]) => classNames.join(' ');

export function RouteTag({
  children,
  href,
}: {
  children: ReactNode;
  href: string;
}) {
  return (
    <ExternalLink href={href} className={styles.routeTag}>
      <span>{children}</span>
    </ExternalLink>
  );
}

export function Destination() {
  return (
    <div className={cx(styles.routeBox, styles.destination)}>
      Ryokan Kono-Yu
    </div>
  );
}

export function TransitLink({
  numbers,
  href,
  children,
}: {
  numbers: string[];
  href: string;
  children: ReactNode;
}) {
  return (
    <ExternalLink href={href}>
      <span className={styles.transitNumbers} aria-hidden="true">
        {numbers.map((number) => (
          <i key={number}>{number}</i>
        ))}
      </span>
      <span>{children}</span>
    </ExternalLink>
  );
}

export function RouteNote({ children }: { children: ReactNode }) {
  return <p className={styles.routeNote}>{children}</p>;
}
