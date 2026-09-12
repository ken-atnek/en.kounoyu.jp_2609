/* =======================================
 * こうの湯 英語版 TOP Information データ
 * URL: /src/data/top-information.ts
 * Referenced in: /src/components/top/TopInformation.tsx
 * Created: 2026-09-12
 * Last updated: 2026-09-12
 * ======================================= */

export const informationFacilities = [
  {
    label: 'Internet Access',
    lines: ['Not available'],
  },
  {
    label: 'Internet Connection Charges',
    lines: ['None'],
  },
  {
    label: 'Pets',
    lines: ['Not permitted'],
  },
  {
    label: 'On-Site Natural Hot Springs',
    lines: ['Available'],
  },
] as const;

export const informationPolicies = [
  {
    label: 'Service & Taxes',
    lines: [
      'Service charge included. Taxes excluded (consumption tax and a bathing tax of ¥150 per adult).',
      'Rates may differ during New Year, Obon, Golden Week, and other seasonal periods.',
    ],
  },
  {
    label: 'Typical Rate Plans',
    lines: [
      'Room with breakfast included (per person)',
      'Room with dinner and breakfast included (per person)',
    ],
  },
  {
    label: 'Cancellation Policy',
    lines: [
      '7 days before arrival: 30% of the room rate',
      '1 day before arrival: 50% of the room rate',
      'Day of arrival: 100% of the room rate',
    ],
  },
] as const;

export const informationContact = [
  {
    label: 'Name of Accommodation',
    lines: ['Ryokan Kono-Yu'],
  },
  {
    label: 'Area',
    lines: ['Kurokawa Onsen, Kumamoto'],
  },
  {
    label: 'Address',
    lines: [
      '6784 Manganji, Minamioguni-machi, Aso-gun, Kumamoto 869-2402, Japan',
    ],
  },
] as const;

export const informationLinks = {
  eNetAtm: 'https://www.enetcom.co.jp/intl/en/',
  nearbyAtmMap: 'https://goo.gl/maps/dfzePse369S2',
  telephone: 'tel:+81967488700',
} as const;
