/* =======================================
 * こうの湯 英語版 TOP Information セクション
 * URL: /src/components/top/TopInformation.tsx
 * Referenced in: /src/app/page.tsx
 * Created: 2026-09-12
 * Last updated: 2026-09-12
 * ======================================= */

import Image from 'next/image';
import ExternalLink from '@/components/common/ExternalLink';
import {
  informationContact,
  informationFacilities,
  informationLinks,
  informationPolicies,
} from '@/data/top-information';
import styles from './TopInformation.module.scss';

type InformationRowsProps = {
  rows: ReadonlyArray<{
    label: string;
    lines: readonly string[];
  }>;
};

function InformationRows({ rows }: InformationRowsProps) {
  return rows.map((row) => (
    <div key={row.label}>
      <dt>{row.label}</dt>
      <dd>
        {row.lines.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </dd>
    </div>
  ));
}

export default function TopInformation() {
  return (
    <section
      id="information"
      className={styles.topInformation}
      aria-labelledby="information-title"
    >
      <div className={styles.sectionTitle}>
        <h2 id="information-title">INFORMATION</h2>
      </div>
      <p className={styles.introduction}>
        Essential information about facilities, charges, policies, and
        contacting Ryokan Kono-Yu.
      </p>
      <section
        className={styles.informationGroup}
        aria-labelledby="facilities-title"
      >
        <h3 id="facilities-title">Facilities &amp; Amenities</h3>
        <dl className={styles.informationList}>
          <InformationRows rows={informationFacilities} />
        </dl>
      </section>
      <section
        className={styles.informationGroup}
        aria-labelledby="policies-title"
      >
        <h3 id="policies-title">Charges &amp; Policies</h3>
        <dl>
          <InformationRows rows={informationPolicies} />
          <div className={styles.informationRow}>
            <dt>Payment Methods</dt>
            <dd>
              <p>Cash and credit cards</p>
              <Image
                className={styles.paymentCards}
                src="/images/information/payment-cards.jpg"
                alt="Visa and Mastercard accepted"
                width={206}
                height={65}
                sizes="103px"
              />
            </dd>
          </div>
          <div className={styles.informationRow}>
            <dt>Nearby ATM</dt>
            <dd>
              <p>
                FamilyMart (
                <ExternalLink href={informationLinks.eNetAtm}>
                  E-net ATM
                </ExternalLink>
                )
              </p>
              <p>
                International cash cards and credit cards may be used to
                withdraw Japanese yen.
              </p>
              <Image
                className={styles.atmCards}
                src="/images/information/atm-supported-cards.jpg"
                alt="Cards supported by the nearby E-net ATM"
                width={229}
                height={83}
                sizes="115px"
              />
              <address className={styles.atmAddress}>
                Azasugita 1786-1, Akababa, Minamioguni-machi, Aso-gun, Kumamoto
                869-2401, Japan
              </address>
              <ExternalLink
                className={styles.mapLink}
                href={informationLinks.nearbyAtmMap}
              >
                Google Maps
              </ExternalLink>
            </dd>
          </div>
        </dl>
      </section>
      <section
        className={styles.informationGroup}
        aria-labelledby="contact-title"
      >
        <h3 id="contact-title">Contact</h3>
        <dl className={styles.informationList}>
          <InformationRows rows={informationContact} />
          <div className={styles.informationRow}>
            <dt>Telephone</dt>
            <dd>
              <a href={informationLinks.telephone}>+81-967-48-8700</a>
            </dd>
          </div>
        </dl>
      </section>
    </section>
  );
}
